// Accessibility and layout checks on the built site in dist/.
//  1. Pa11y with both axe and HTML_CodeSniffer (WCAG 2 AA) on every page,
//     including every enquiry tab and the referral form.
//  2. No horizontal scrolling at 320px wide.
//  3. Tap targets at least 44px (links in running text excepted).
// Exit code 1 if anything fails. Run after `npm run build`.

import http from 'node:http';
import { readFile, readdir } from 'node:fs/promises';
import { extname, join, relative } from 'node:path';
import pa11y from 'pa11y';
import puppeteer from 'puppeteer';

const DIST = 'dist';
const PORT = 4329;

const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.webmanifest': 'application/manifest+json',
};

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const home = await readFile(join(DIST, 'index.html'), 'utf8');
const base = new URL(home.match(/<link rel="canonical" href="([^"]+)"/)[1]).pathname.replace(/\/$/, '');

// Tiny static server that serves dist/ under the site's base path.
const server = http.createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
  if (base && path.startsWith(base)) path = path.slice(base.length) || '/';
  if (path.endsWith('/')) path += 'index.html';
  try {
    const body = await readFile(join(DIST, path));
    res.writeHead(200, { 'Content-Type': types[extname(path)] ?? 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(await readFile(join(DIST, '404.html')));
  }
});
await new Promise((resolve) => server.listen(PORT, resolve));
const origin = `http://localhost:${PORT}${base}`;

const pages = [];
for (const file of (await walk(DIST)).filter((f) => f.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  if (/http-equiv="refresh"/.test(html)) continue;
  const rel = relative(DIST, file).replace(/index\.html$/, '').replace(/\.html$/, '/');
  pages.push(`/${rel}`);
}
const extra = ['family', 'coordinator', 'health', 'veteran', 'work'].map((h) => `/enquire/#${h}`);
extra.push('/contact/#referral');

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
let failures = 0;

const report = (page, result) => {
  if (result.issues.length) {
    failures += result.issues.length;
    console.log(`\n${page}`);
    for (const issue of result.issues) console.log(`  [${issue.runner}] ${issue.code}\n    ${issue.message}\n    ${issue.selector}`);
  } else {
    console.log(`ok    ${page}`);
  }
};

const options = { browser, runners: ['axe', 'htmlcs'], standard: 'WCAG2AA', includeWarnings: false, timeout: 60000 };

// The cookie banner on its own, as a first-time visitor sees it.
{
  const tab = await browser.newPage();
  // axe cannot measure contrast on a fixed element that overlaps the page
  // ("elmPartiallyObscuring"), so the banner is put in normal flow for this
  // test. Colours and content are unchanged.
  await tab.evaluateOnNewDocument(() => {
    document.addEventListener('DOMContentLoaded', () => {
      const style = document.createElement('style');
      style.textContent = '[data-cookie-banner]{position:static!important}';
      document.head.append(style);
    });
  });
  report('/ (cookie banner)', await pa11y(`${origin}/`, { ...options, page: tab, rootElement: '[data-cookie-banner]' }));
  await tab.close();
}

// Every page after a cookie choice has been made, so the fixed banner does
// not sit on top of the content being tested.
for (const page of [...pages, ...extra]) {
  const tab = await browser.newPage();
  await tab.evaluateOnNewDocument(() => localStorage.setItem('espoir-consent', 'denied'));
  report(page, await pa11y(`${origin}${page}`, { ...options, page: tab }));
  await tab.close();
}

// Reflow and tap target checks at 320px wide, with and without JavaScript.
for (const javaScriptEnabled of [true, false]) {
  const tab = await browser.newPage();
  await tab.setJavaScriptEnabled(javaScriptEnabled);
  await tab.setViewport({ width: 320, height: 640 });
  await tab.evaluateOnNewDocument(() => {
    try {
      localStorage.setItem('espoir-consent', 'denied');
    } catch {}
  });
  for (const page of pages) {
    await tab.goto(`${origin}${page}`, { waitUntil: 'networkidle0' });
    const { scrollWidth, smallTargets } = await tab.evaluate(() => {
      const small = [];
      for (const el of document.querySelectorAll('a, button, summary, input, select, textarea')) {
        let r = el.getBoundingClientRect();
        if (!r.width || !r.height) continue; // not rendered
        if (el.closest('.honeypot')) continue;
        // Links inside a sentence are exempt (WCAG 2.5.8 inline exception).
        if (el.tagName === 'A' && el.parentElement && el.parentElement.textContent.trim().length > el.textContent.trim().length + 2) continue;
        // Card links cover the whole card.
        const card = el.closest('.link-card');
        if (card && el.tagName === 'A') r = card.getBoundingClientRect();
        if (el.matches('input[type="checkbox"], input[type="radio"]')) {
          // The label extends the target; check the whole row.
          const row = el.closest('.choice')?.getBoundingClientRect();
          if (row && row.height >= 44) continue;
        }
        if (r.height < 44 && !(el.tagName === 'A' && el.closest('.skip-link'))) {
          small.push(`${el.tagName.toLowerCase()} "${(el.textContent || el.getAttribute('name') || '').trim().slice(0, 40)}" ${Math.round(r.width)}x${Math.round(r.height)}`);
        }
      }
      return { scrollWidth: document.documentElement.scrollWidth, smallTargets: small };
    });
    const label = javaScriptEnabled ? '' : ' (JavaScript off)';
    if (scrollWidth > 320) {
      failures++;
      console.log(`FAIL  ${page}${label}: page is ${scrollWidth}px wide at 320px (horizontal scroll)`);
    }
    for (const t of smallTargets) {
      failures++;
      console.log(`FAIL  ${page}${label}: tap target under 44px: ${t}`);
    }
  }
  await tab.close();
}

await browser.close();
server.close();
console.log(`\n${pages.length + extra.length} pages tested. ${failures} problems.`);
process.exit(failures ? 1 : 0);
