import type { APIRoute } from 'astro';
import { DEPLOY } from '../config/site';

// Note: on mnny123.github.io/espoir-care/ search engines ignore this file,
// because robots.txt only counts at the root of a domain. It starts working
// once the custom domain is live. The noindex meta tag covers the meantime.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap-index.xml`, site).href;
  const body = DEPLOY.noindex
    ? `User-agent: *\nAllow: /\n\n# The site is set to noindex in src/config/site.ts until launch.\nSitemap: ${sitemap}\n`
    : `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
