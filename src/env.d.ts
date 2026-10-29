/// <reference types="astro/client" />

interface Window {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  espoirAnalytics?: { load: () => void; loaded?: boolean };
}
