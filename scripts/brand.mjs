// Builds every logo, favicon and social image from public/brand/logo.png.
// Run with `npm run brand` after replacing logo.png. The outputs are committed,
// so the normal site build does not need to run this.
//
// The source PNG is a 768x508 screenshot. Crops are kept at native size or
// smaller, except icon-512.png which has to be upscaled. Replace the source
// with a larger export and re-run this script to fix that (see README).

import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

const SRC = 'public/brand/logo.png';
const OUT = 'public/brand';
const PALE_LILAC = { r: 0xf7, g: 0xf4, b: 0xfa, alpha: 1 };
const WHITE = { r: 255, g: 255, b: 255, alpha: 1 };

// Turn the white screenshot background into transparency without leaving a
// white fringe on the anti-aliased edges ("colour to alpha" against white).
// SOLID is the lightest logo colour (the apricot dot), so every logo colour
// stays fully opaque and only the edge pixels become partly transparent.
const SOLID = 0.6;
async function loadTransparent() {
  const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) {
    const a = Math.min(1, Math.max(255 - data[i], 255 - data[i + 1], 255 - data[i + 2]) / 255 / SOLID);
    if (a === 0) {
      data[i + 3] = 0;
      continue;
    }
    for (let c = 0; c < 3; c++) data[i + c] = Math.round(255 - (255 - data[i + c]) / a);
    data[i + 3] = Math.round(a * 255);
  }
  return { data, info };
}

// Bounding box of visible pixels inside a horizontal band of the image.
function bounds({ data, info }, y0, y1) {
  let minX = info.width, maxX = -1, minY = info.height, maxY = -1;
  for (let y = y0; y <= y1; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * 4 + 3] > 8) {
        minX = Math.min(minX, x); maxX = Math.max(maxX, x);
        minY = Math.min(minY, y); maxY = Math.max(maxY, y);
      }
    }
  }
  return { left: minX, top: minY, width: maxX - minX + 1, height: maxY - minY + 1 };
}

// Find the gap between the heart and the wordmark by scanning for empty rows.
function splitRow({ data, info }) {
  const rowHasInk = (y) => {
    for (let x = 0; x < info.width; x++) if (data[(y * info.width + x) * 4 + 3] > 8) return true;
    return false;
  };
  let y = 0;
  while (!rowHasInk(y)) y++;           // top of the heads
  let gapStart = -1, best = 0;
  for (let run = 0; y < info.height; y++) {
    if (rowHasInk(y)) {
      if (run > best) { best = run; gapStart = y - run; }
      run = 0;
    } else run++;
  }
  return gapStart + Math.floor(best / 2);
}

function rawImage({ data, info }) {
  return sharp(Buffer.from(data), { raw: { width: info.width, height: info.height, channels: 4 } });
}

async function crop(img, box) {
  return rawImage(img).extract(box).png().toBuffer();
}

// Recolour every visible pixel to white, keeping the alpha.
async function toWhite(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += 4) data[i] = data[i + 1] = data[i + 2] = 255;
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

// Place an image centred on a square or rectangular canvas.
async function onCanvas(buf, w, h, inner, background) {
  const resized = await sharp(buf).resize({ width: inner, height: inner, fit: 'inside' }).png().toBuffer();
  return sharp({ create: { width: w, height: h, channels: 4, background } })
    .composite([{ input: resized, gravity: 'centre' }])
    .png()
    .toBuffer();
}

// Minimal .ico writer: an ICO file can hold PNG images directly.
function ico(pngs) {
  const header = Buffer.alloc(6 + 16 * pngs.length);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(pngs.length, 4);
  let offset = header.length;
  pngs.forEach(({ size, buf }, i) => {
    const e = 6 + 16 * i;
    header.writeUInt8(size >= 256 ? 0 : size, e);
    header.writeUInt8(size >= 256 ? 0 : size, e + 1);
    header.writeUInt16LE(1, e + 4);
    header.writeUInt16LE(32, e + 6);
    header.writeUInt32LE(buf.length, e + 8);
    header.writeUInt32LE(offset, e + 12);
    offset += buf.length;
  });
  return Buffer.concat([header, ...pngs.map((p) => p.buf)]);
}

const img = await loadTransparent();
const split = splitRow(img);
const markBox = bounds(img, 0, split);
const wordBox = bounds(img, split, img.info.height - 1);
const fullBox = bounds(img, 0, img.info.height - 1);

const mark = await crop(img, markBox);
const word = await crop(img, wordBox);
const full = await crop(img, fullBox);

// Side by side lockup for the header: heart at 75% so the words stay readable.
const markH = Math.round(markBox.height * 0.75);
const markSmall = await sharp(mark).resize({ height: markH }).png().toBuffer();
const markSmallW = (await sharp(markSmall).metadata()).width;
const gap = 28;
const lockW = markSmallW + gap + wordBox.width;
const lockH = markH;
const horizontal = await sharp({ create: { width: lockW, height: lockH, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } } })
  .composite([
    { input: markSmall, left: 0, top: 0 },
    { input: word, left: markSmallW + gap, top: Math.round((lockH - wordBox.height) / 2) + 6 },
  ])
  .png()
  .toBuffer();

const squareMark = await onCanvas(mark, markBox.height, markBox.height, markBox.height, { r: 0, g: 0, b: 0, alpha: 0 });

const files = {
  [`${OUT}/mark.png`]: mark,
  [`${OUT}/logo-trimmed.png`]: full,
  [`${OUT}/logo-horizontal.png`]: horizontal,
  [`${OUT}/logo-horizontal-white.png`]: await toWhite(horizontal),
  'public/favicon-16x16.png': await sharp(squareMark).resize(16, 16).png().toBuffer(),
  'public/favicon-32x32.png': await sharp(squareMark).resize(32, 32).png().toBuffer(),
  'public/apple-touch-icon.png': await onCanvas(mark, 180, 180, 140, WHITE),
  'public/icon-192.png': await onCanvas(mark, 192, 192, 150, WHITE),
  'public/icon-512.png': await onCanvas(mark, 512, 512, 400, WHITE),
  'public/og-image.png': await onCanvas(full, 1200, 630, Math.max(fullBox.width, fullBox.height), PALE_LILAC),
};

files['public/favicon.ico'] = ico(
  await Promise.all([16, 32, 48].map(async (size) => ({ size, buf: await sharp(squareMark).resize(size, size).png().toBuffer() }))),
);

for (const [path, buf] of Object.entries(files)) {
  await writeFile(path, buf);
  const meta = path.endsWith('.ico') ? null : await sharp(buf).metadata();
  console.log(path, meta ? `${meta.width}x${meta.height}` : `${buf.length} bytes`);
}
console.log('mark', markBox, 'wordmark', wordBox);
