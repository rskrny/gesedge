// robots.txt and sitemap.xml for whichever site is building. Pages re-export these from their pages folder.
import { PREVIEW, CANONICAL, SITE, SAMPLE_READY } from './site';

const PAGES = {
  en: ['/', '/services/', '/work/', '/about/', '/contact/', '/exporters/', '/privacy/'],
  zh: ['/', '/audit/', ...(SAMPLE_READY ? ['/sample/'] : []), '/contact/', '/privacy/'],
};

export const robots = () =>
  new Response(
    PREVIEW
      ? 'User-agent: *\nDisallow: /\n'
      : `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${CANONICAL[SITE]}/sitemap.xml\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );

export const sitemap = () =>
  new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${PAGES[SITE]
      .map((p) => `  <url><loc>${CANONICAL[SITE]}${p}</loc></url>`)
      .join('\n')}\n</urlset>\n`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
