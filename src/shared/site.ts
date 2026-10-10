// Facts shared by both sites. Copy rules: DESIGN.md §8 (gated copy only, no invented claims).
export const SITE: 'en' | 'zh' = process.env.SITE === 'zh' ? 'zh' : 'en';

// Previews live on workers.dev, noindexed, and link to each other instead of the live hosts.
export const PREVIEW = process.env.PREVIEW === '1';
export const HOST = PREVIEW
  ? { en: 'https://gesedge-preview.rskrny.workers.dev', zh: 'https://huanqiao-preview.rskrny.workers.dev' }
  : { en: 'https://gesedge.com', zh: 'https://huanqiao.gesedge.com' };
// Both sites live since 2026-10-10: the English site links to the Chinese one (nav switch, hreflang, exporters button).
export const ZH_LIVE = true;
// ponytail: the sample audit doesn't exist yet. Until it does, /sample/ is noindexed and unlinked (nav, home
// button, sitemap). Flip to true when the report, PDF and video are in.
export const SAMPLE_READY = false;
// Canonicals always point at the production hosts.
export const CANONICAL = { en: 'https://gesedge.com', zh: 'https://huanqiao.gesedge.com' };

export const EMAIL = 'ryan@gesedge.com';
// Google Calendar appointment schedule on Ryan's own account (replaced cal.com 2026-10-07).
export const BOOKING = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0vmgKzZ5ejbPVvOwI0EFl_n39SL04N0ERIhPtckQdvdGsow0UlkA7_GgK7SxtMQgDs28ZbrIz3';

export const GES = { name: 'Global Edge Strategies LLC', place: 'Wyoming, USA' };
export const HQ = {
  name: '成都寰桥企业管理咨询服务有限公司',
  short: '成都寰桥',
  latin: 'Chengdu Huanqiao',
  uscc: '91510100MAEQ1NAWXC',
  address: '成都高新区天府一街616号41栋1单元8层802号附A095房(自编号)',
};
