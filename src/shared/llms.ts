// /llms.txt for whichever site is building. Pages re-export `llms`, the same way they re-export `robots`.
import { CANONICAL, EMAIL, BOOKING, SITE, SAMPLE_READY, HQ } from './site';
import { t } from '../zh/copy';

// Page descriptions are copied from the `description` prop in each page file. Change both together.
const EN = {
  home: 'AI systems for email, orders and shipment status at US importers and distributors buying from Asia. China supplier checks and visits from Chengdu.',
  services: 'AI systems for US importers and distributors buying from Asia, China supplier support, dashboards and company websites. Prices and support scope.',
  work: "Three live systems: email triage for a refurbishment group, an owner's dashboard for an auction firm, and a booking system for a charter boat.",
  about: 'Ryan Kearney, an American in Chengdu, runs Global Edge Strategies and its sister company 成都寰桥.',
  contact: 'Book a 30-minute call with Ryan Kearney, or send a note.',
  china: 'Systems for the email, quotes and shipping documents of forwarders, ship agents and trading companies in China, built by 成都寰桥 in Chengdu. Prices in RMB, with fapiao.',
  exporters: "For export managers at Chinese factories: a website review from a US buyer's point of view, a buyer-ready English site, and monthly outreach to target companies. Prices in RMB, with fapiao.",
};

const en = () => `# Global Edge Strategies

> ${EN.home}

${EN.about}

## Pages

- [Home](${CANONICAL.en}/): ${EN.home}
- [Services and prices](${CANONICAL.en}/services/): ${EN.services}
- [Work](${CANONICAL.en}/work/): ${EN.work}
- [About](${CANONICAL.en}/about/): ${EN.about}
- [Contact](${CANONICAL.en}/contact/): ${EN.contact}
- [For companies in China](${CANONICAL.en}/china/): ${EN.china}
- [For Chinese factories](${CANONICAL.en}/exporters/): ${EN.exporters}

## Contact

- Email: ${EMAIL}
- Book a 30-minute call: ${BOOKING}
- Chinese site (成都寰桥): ${CANONICAL.zh}/
`;

// Same order as the ZH sitemap; /sample/ only when it is ready (see sitemap in ./seo.ts).
const zh = () => `# ${HQ.name} (${HQ.latin})

> ${t.home.description}

## Pages

- [Home](${CANONICAL.zh}/): ${t.home.description}
- [${t.nav.cases}](${CANONICAL.zh}/cases/): ${t.cases.description}
- [${t.nav.audit}](${CANONICAL.zh}/audit/): ${t.audit.description}
${SAMPLE_READY ? `- [${t.nav.sample}](${CANONICAL.zh}/sample/): ${t.sample.description}\n` : ''}- [${t.nav.contact}](${CANONICAL.zh}/contact/): ${t.contact.description}

## Company

${HQ.name}
${t.footer.uscc} ${HQ.uscc}

## English

- [Global Edge Strategies](${CANONICAL.en}/)
`;

export const llms = () =>
  new Response(SITE === 'zh' ? zh() : en(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
