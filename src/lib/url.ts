// Every internal link goes through url() so the site works both on
// mnny123.github.io/espoir-care/ and later on the custom domain.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|sms:|#)/.test(path)) return path;
  return base + (path.startsWith('/') ? path : `/${path}`);
}

export function absoluteUrl(path: string): string {
  return new URL(url(path), import.meta.env.SITE).href;
}
