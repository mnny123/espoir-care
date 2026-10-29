// Checks the built site in dist/ against the writing and SEO rules in the brief.
// Run after `npm run build`. Fails (exit code 1) on errors; warnings are for a
// person to review.

import { readFile, readdir, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

const DIST = 'dist';
const BASE = (process.env.SITE_BASE ?? (await detectBase())).replace(/\/$/, '');

const BANNED = [
  'delve', 'crucial', 'pivotal', 'robust', 'vibrant', 'underscore', 'showcase', 'foster', 'garner',
  'tapestry', 'testament', 'seamless', 'journey', 'empower', 'elevate', 'holistic', 'cutting edge',
  'cutting-edge', 'world class', 'world-class', 'number one', 'none can match', 'satisfaction guarantee',
];

const errors = [];
const warnings = [];
const err = (file, msg) => errors.push(`${file}: ${msg}`);
const warn = (file, msg) => warnings.push(`${file}: ${msg}`);

async function detectBase() {
  // The redirect pages and links all start with the base path, so read it from the homepage canonical.
  const html = await readFile(join(DIST, 'index.html'), 'utf8');
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1] ?? '/';
  return new URL(canonical).pathname;
}

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const decode = (s) =>
  s
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&copy;/g, '(c)');

function visibleText(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<!--[\s\S]*?-->/g, ' ')
      .replace(/<[^>]+>/g, ' '),
  )
    .replace(/\s+/g, ' ')
    .trim();
}

const files = await walk(DIST);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const cssFiles = files.filter((f) => f.endsWith('.css'));
const titles = new Map();
const descriptions = new Map();

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  const rel = relative(DIST, file);
  const isRedirect = /http-equiv="refresh"/.test(html);

  // Internal links must point at a page that exists.
  for (const [, href] of html.matchAll(/\shref="([^"]+)"/g)) {
    if (!href.startsWith(`${BASE}/`) && href !== BASE) continue;
    const path = decodeURIComponent(href.split('#')[0].split('?')[0]).slice(BASE.length) || '/';
    const target = path.endsWith('/') ? join(DIST, path, 'index.html') : join(DIST, path);
    if (!(await exists(target))) err(rel, `broken internal link ${href}`);
  }

  if (isRedirect) continue;

  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? '');
  const description = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  if (!title) err(rel, 'missing <title>');
  if (title.length > 60) err(rel, `title is ${title.length} characters (max 60): ${title}`);
  if (!description) err(rel, 'missing meta description');
  if (description.length > 155) err(rel, `description is ${description.length} characters (max 155)`);
  if (titles.has(title)) err(rel, `duplicate title, also on ${titles.get(title)}`);
  if (descriptions.has(description)) err(rel, `duplicate description, also on ${descriptions.get(description)}`);
  titles.set(title, rel);
  descriptions.set(description, rel);

  if (!/<link rel="canonical"/.test(html)) err(rel, 'missing canonical tag');
  if (!/property="og:image"/.test(html)) err(rel, 'missing og:image');
  const h1s = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (h1s !== 1) err(rel, `has ${h1s} h1 elements (should be 1)`);
  if (rel !== 'index.html' && rel !== '404.html' && !/aria-label="Breadcrumb"/.test(html)) err(rel, 'missing breadcrumbs');

  const text = `${title} ${description} ${visibleText(html)}`;
  const lower = text.toLowerCase();

  if (/—/.test(text)) err(rel, 'contains an em dash');
  if (/–/.test(text)) err(rel, 'contains an en dash');
  if (/[‘’“”]/.test(text)) err(rel, 'contains curly quotes');
  if (/\p{Extended_Pictographic}/u.test(text.replace(/[©®]/g, ''))) err(rel, 'contains an emoji');
  for (const word of BANNED) {
    if (new RegExp(`\\b${word}`, 'i').test(lower)) err(rel, `uses banned word "${word}"`);
  }
  if (/(^|[.!?]\s+)additionally\b/i.test(text)) err(rel, 'starts a sentence with "Additionally"');
  if (/<button[^>]*>\s*submit\s*<\/button>|type="submit"[^>]*value="submit"/i.test(html)) err(rel, 'has a "Submit" button');
  if (/<input[^>]+type="checkbox"[^>]+checked/i.test(html)) err(rel, 'has a pre-ticked checkbox');

  // Oxford comma heuristic: "a, b, and c". Needs a person to check each one.
  for (const m of text.matchAll(/\b[\w'()-]+(?: [\w'()-]+){0,3}, [\w'()-]+(?: [\w'()-]+){0,4}, (?:and|or) [\w'()-]+/g)) {
    warn(rel, `possible Oxford comma: "${m[0]}"`);
  }
  for (const m of text.matchAll(/.{0,30}\b(best|guarantee|leading|top rated|#1)\b.{0,30}/gi)) {
    if (/do our best|the best way|best contact|best time|best to/i.test(m[0])) continue;
    warn(rel, `check claim: "${m[0].trim()}"`);
  }
}

for (const file of cssFiles) {
  const css = await readFile(file, 'utf8');
  if (/gradient\(/i.test(css)) err(relative(DIST, file), 'CSS uses a gradient');
  if (/border-radius:\s*(9{3,}px|50%|[3-9]\dpx)/i.test(css)) warn(relative(DIST, file), 'large border-radius found; check no pill buttons');
}
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  if (/gradient\(/i.test(html.replace(/<script[\s\S]*?<\/script>/gi, ''))) err(relative(DIST, file), 'inline style uses a gradient');
}

console.log(`Checked ${htmlFiles.length} HTML files and ${cssFiles.length} CSS files (base path "${BASE || '/'}").`);
for (const w of warnings) console.log(`WARN  ${w}`);
for (const e of errors) console.log(`ERROR ${e}`);
console.log(`${errors.length} errors, ${warnings.length} warnings.`);
process.exit(errors.length ? 1 : 0);
