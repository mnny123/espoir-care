// Prints 301 redirect rules for every old Being Human Care URL that moved,
// read from src/data/redirects.json. Use when the domain moves to a host that
// supports real redirects.
//   npm run redirects               Netlify / Cloudflare Pages "_redirects" format
//   npm run redirects -- apache     Apache .htaccess format
//   npm run redirects -- nginx      nginx format
import { readFile } from 'node:fs/promises';

const redirects = JSON.parse(await readFile('src/data/redirects.json', 'utf8')).filter((r) => r.from !== r.to);
const format = process.argv[2] ?? 'netlify';

for (const { from, to } of redirects) {
  if (format === 'apache') console.log(`Redirect 301 ${from} ${to}`);
  else if (format === 'nginx') console.log(`location = ${from} { return 301 ${to}; }`);
  else console.log(`${from} ${to} 301`);
}
