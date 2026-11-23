// JSON-LD objects for both sites. Facts live in ./site; each page builds one graph() from these helpers.
// 2026-11-23 SEO/GEO baseline: one @graph per page, shared @id values so the entities link to each other.
import { CANONICAL, EMAIL, GES, HQ } from './site';

export const ID = {
  ges: `${CANONICAL.en}/#org`,
  hq: `${CANONICAL.zh}/#org`,
  ryan: `${CANONICAL.en}/about/#ryan`,
  siteEn: `${CANONICAL.en}/#website`,
  siteZh: `${CANONICAL.zh}/#website`,
} as const;

export const gesOrg = {
  '@type': 'Organization',
  '@id': ID.ges,
  name: GES.name,
  alternateName: 'Global Edge Strategies',
  url: CANONICAL.en,
  email: EMAIL,
  logo: `${CANONICAL.en}/share.png`,
  founder: { '@id': ID.ryan },
  address: { '@type': 'PostalAddress', addressRegion: 'WY', addressCountry: 'US' },
  areaServed: { '@type': 'Country', name: 'United States' },
};

// Every field of the object that used to sit inline in src/zh/pages/index.astro.
export const hqOrg = {
  '@type': 'Organization',
  '@id': ID.hq,
  name: HQ.name,
  alternateName: HQ.latin,
  url: CANONICAL.zh,
  logo: `${CANONICAL.zh}/share.png`,
  email: EMAIL,
  taxID: HQ.uscc,
  founder: { '@id': ID.ryan },
  address: { '@type': 'PostalAddress', streetAddress: HQ.address, addressLocality: '成都', addressCountry: 'CN' },
};

// Every field of the person object that used to sit inline in src/en/pages/about.astro.
export const ryan = {
  '@type': 'Person',
  '@id': ID.ryan,
  name: 'Ryan Kearney',
  jobTitle: 'Founder',
  url: `${CANONICAL.en}/about/`,
  image: `${CANONICAL.en}/images/about/ryan-800.webp`,
  worksFor: [{ '@id': ID.ges }, { '@id': ID.hq }],
  homeLocation: { '@type': 'Place', name: 'Chengdu, China' },
  alumniOf: [{ '@type': 'CollegeOrUniversity', name: 'Massachusetts Maritime Academy' }, { '@type': 'CollegeOrUniversity', name: 'Sichuan University' }],
};

export const siteEn = {
  '@type': 'WebSite',
  '@id': ID.siteEn,
  url: `${CANONICAL.en}/`,
  name: 'Global Edge Strategies',
  inLanguage: 'en-US',
  publisher: { '@id': ID.ges },
};

export const siteZh = {
  '@type': 'WebSite',
  '@id': ID.siteZh,
  url: `${CANONICAL.zh}/`,
  name: HQ.short,
  inLanguage: 'zh-CN',
  publisher: { '@id': ID.hq },
};

export type OfferIn = { name: string; currency: 'USD' | 'CNY'; price?: number; minPrice?: number; perMonth?: boolean };

const offer = (o: OfferIn) => {
  if (o.minPrice !== undefined) {
    return {
      '@type': 'Offer',
      name: o.name,
      priceSpecification: {
        '@type': o.perMonth ? 'UnitPriceSpecification' : 'PriceSpecification',
        minPrice: o.minPrice,
        priceCurrency: o.currency,
        ...(o.perMonth ? { unitText: 'MONTH' } : {}),
      },
    };
  }
  if (o.price !== undefined && o.perMonth) {
    return {
      '@type': 'Offer',
      name: o.name,
      priceSpecification: { '@type': 'UnitPriceSpecification', price: o.price, priceCurrency: o.currency, unitText: 'MONTH' },
    };
  }
  return { '@type': 'Offer', name: o.name, priceCurrency: o.currency, price: o.price };
};

export const service = (o: {
  name: string;
  url: string;
  provider: 'ges' | 'hq';
  area: 'US' | 'CN';
  description?: string;
  offers?: OfferIn[];
}) => ({
  '@type': 'Service',
  name: o.name,
  url: o.url,
  provider: { '@id': ID[o.provider] },
  areaServed: { '@type': 'Country', name: o.area === 'US' ? 'United States' : 'China' },
  ...(o.description ? { description: o.description } : {}),
  ...(o.offers ? { offers: o.offers.map(offer) } : {}),
});

// FAQ answers may carry inline HTML (the services page does): drop the tags, then collapse the whitespace.
// Block tags become a space so separate blocks do not run together; inline tags just disappear.
const strip = (html: string) =>
  html
    .replace(/<\/?(p|div|br|li|ul|ol|dl|dt|dd|h[1-6]|tr|td|th)[^>]*>/gi, ' ')
    .replace(/<[^>]*>/g, '')
    .replace(/\s+/g, ' ')
    .trim();

export const faqPage = (items: { q: string; a: string }[]) => ({
  '@type': 'FAQPage',
  mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: strip(i.a) } })),
});

export const graph = (...nodes: object[]) => JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes });
