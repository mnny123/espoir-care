// JSON-LD structured data builders.
import { BUSINESS } from '../config/site';
import { absoluteUrl } from './url';

export type Crumb = { label: string; href: string };
export type Faq = { q: string; a: string };

export function localBusiness() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    '@id': `${absoluteUrl('/')}#business`,
    name: BUSINESS.name,
    alternateName: [BUSINESS.formerName, `${BUSINESS.name}, formerly ${BUSINESS.formerName}`],
    legalName: BUSINESS.legalName,
    description: `Registered NDIS provider and DVA community nursing provider based in the Redlands, offering disability support and nursing care at home across Brisbane. Formerly ${BUSINESS.formerName}.`,
    url: absoluteUrl('/'),
    logo: absoluteUrl('/brand/logo-trimmed.png'),
    image: absoluteUrl('/og-image.png'),
    telephone: '+61 412 632 913',
    email: BUSINESS.email,
    // No street address on purpose. TODO: add streetAddress and postalCode
    // here if you ever decide to publish the office address.
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'QLD',
      addressCountry: 'AU',
    },
    areaServed: BUSINESS.areaServed.map((name) => ({ '@type': 'Place', name })),
    sameAs: BUSINESS.social.map((s) => s.href),
  };
  if (BUSINESS.openingHoursSchema.length) {
    data.openingHoursSpecification = BUSINESS.openingHoursSchema.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }
  return data;
}

export function breadcrumbList(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}

export function faqPage(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
