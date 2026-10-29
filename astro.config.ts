import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { DEPLOY, SHOW_STORIES } from './src/config/site';
import redirects from './src/data/redirects.json';

const site = DEPLOY.customDomainLive ? DEPLOY.customDomain : DEPLOY.githubPagesSite;
const base = DEPLOY.customDomainLive ? '/' : DEPLOY.githubPagesBase;

// Pages that should never be in the sitemap.
const excluded = new Set([
  '/thank-you/',
  '/404/',
  ...(SHOW_STORIES ? [] : ['/stories/']),
  ...redirects.filter((r) => r.from !== r.to).map((r) => r.from),
]);

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  // Keep whitespace as written. Compression drops the space between a word
  // and a link that starts on the next line in the source.
  compressHTML: false,
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => {
        const path = new URL(page).pathname.replace(base === '/' ? /^$/ : new RegExp(`^${base}`), '') || '/';
        if (excluded.has(path)) return false;
        if (!SHOW_STORIES && path.startsWith('/stories/')) return false;
        return true;
      },
    }),
  ],
});
