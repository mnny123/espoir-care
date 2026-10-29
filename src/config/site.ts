// Every business detail, placeholder and switch for the site lives here.
// Search this file for "TODO" to find what still needs filling in.

// ---------------------------------------------------------------------------
// Where the site is hosted
// ---------------------------------------------------------------------------
export const DEPLOY = {
  // The final domain. Change this one value if you buy a different domain.
  customDomain: 'https://espoircare.com.au',
  // Set to true once the custom domain points at GitHub Pages (see README).
  customDomainLive: false,
  // Used until the custom domain is live.
  githubPagesSite: 'https://mnny123.github.io',
  githubPagesBase: '/espoir-care',
  // Keeps search engines away while the old site is still live.
  // Set to false when you are ready for the new site to be indexed.
  noindex: true,
};

// ---------------------------------------------------------------------------
// Forms and analytics
// ---------------------------------------------------------------------------
// Paste your Web3Forms access key here. The email address that receives the
// forms is set against this key in your Web3Forms dashboard, not in the code.
export const WEB3FORMS_ACCESS_KEY = '2dbe8278-b79c-44c4-bee3-90cdd8fff22c';

// Paste your Google Analytics 4 measurement ID here (it looks like G-XXXXXXX).
// Analytics never loads while this is still the placeholder.
export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

// ---------------------------------------------------------------------------
// Feature switches
// ---------------------------------------------------------------------------
// Turn on once at least one real story is added to src/data/stories.ts.
// While false, /stories/ shows "Stories coming soon" and stays out of the
// navigation and sitemap.
export const SHOW_STORIES = false;

// ---------------------------------------------------------------------------
// Business details
// ---------------------------------------------------------------------------
export const BUSINESS = {
  name: 'Espoir Care',
  formerName: 'Being Human Care',
  legalName: 'Being Human Care Service Pty Ltd',
  abn: '40 703 074 275',
  ndisRegNumber: '[TODO NDIS REG NUMBER]',
  // TODO: add your DVA provider or contract number if you want it shown.
  dvaProviderNumber: '[TODO DVA PROVIDER NUMBER]',
  phone: '0412 632 913',
  phoneHref: 'tel:+61412632913',
  smsHref: 'sms:+61412632913',
  email: 'info@beinghumancare.com.au',
  // No street address is shown on purpose. We describe where we are based.
  baseArea: 'the Redlands, east of Brisbane',
  hours: 'Open 24 hours, 7 days',
  // Opening hours for Google's structured data. 24/7 is written as 00:00 to 23:59.
  openingHoursSchema: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ] as { days: string[]; opens: string; closes: string }[],
  responsePromise: 'We reply to every enquiry within 1 to 2 business days.',
  serviceArea: 'Brisbane north, south and west and the Redlands (including Capalaba and Redland Bay), plus nearby areas',
  areaServed: ['Brisbane', 'Redland City', 'Capalaba', 'Redland Bay', 'Brisbane North', 'Brisbane South', 'Brisbane West'],
  googleProfileUrl: '[TODO GOOGLE PROFILE URL]',
  social: [
    { label: 'Facebook', href: 'https://www.facebook.com/Being-Human-Care-106889867846710' },
    { label: 'Instagram', href: 'https://www.instagram.com/beinghumancareservices/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/bbeinghumancare/' },
  ],
};

export const isTodo = (value: string) => value.includes('TODO') || !/^(https?:|G-)/.test(value);
export const gaEnabled = /^G-[A-Z0-9]+$/.test(GA_MEASUREMENT_ID);
export const web3formsReady = WEB3FORMS_ACCESS_KEY !== 'WEB3FORMS_ACCESS_KEY';
