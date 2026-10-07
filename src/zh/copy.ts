// Every Chinese string on huanqiao.gesedge.com lives here, so Kenny can write them in one place.
// Gate (AGENTS.md): Kenny writes natively (never a translation of the English) → qu-ai-wei → lieflat-less-ai-tone
// → Kimi review. Until then each string is a [PLACEHOLDER] with an English brief of what it must say.
// Facts to use: price ¥2,980; 5 working days (5个工作日); full fee credited to a website build ordered within
// 60 days (全额抵扣); flow = add on WeCom → free 15-minute call (Kenny) → contract + 发票 → report;
// no promise of inquiries, rankings or AI citations (keep, in the FAQ); company facts in src/shared/site.ts.
// Kimi's notes: registration block high on /audit; formal name 海外买家视角诊断, colloquial hook allowed;
// never 最佳/第一/保证/100% (广告法); sister companies = 姊妹公司, never 旗下.
const ph = (brief: string) => `[PLACEHOLDER: ${brief}]`;

export const t = {
  skip: ph('skip to content'),
  cta: ph('header button: add us on WeCom'),
  nav: {
    label: ph('main navigation'),
    audit: ph('nav: the audit'),
    sample: ph('nav: sample report'),
    contact: ph('nav: contact'),
  },
  footer: {
    uscc: '统一社会信用代码',
    fapiao: ph('can issue fapiao'),
    sisters: ph('sister companies, one founder (姊妹公司)'),
    privacy: ph('privacy notice'),
  },
  home: {
    title: ph('page title: brand + what we do for factories (shows in WeChat shares)'),
    description: ph('meta description, one sentence'),
    h1: ph('headline: we show factories how a US buyer sees their website'),
    lede: ph('one or two sentences: who 成都寰桥 is and who it is for'),
    cta: ph('button: add us on WeCom'),
    cta2: ph('button: see the sample report'),
    problemTitle: ph('section: buyers ask AI assistants before they send an inquiry'),
    problemBody: ph('one dated, sourced fact about buyers using AI search, plus what it means for a factory'),
    auditTitle: ph('section: the audit (海外买家视角诊断)'),
    auditBody: ph('price, 5 working days, full credit toward a build within 60 days'),
    afterTitle: ph('section: after the audit'),
    after: [ph('buyer-ready English website, 5–8 pages'), ph('AI inquiry handling: diagnostic, then a pilot')],
    whoTitle: ph('section: who does the work'),
    whoBody: ph('Ryan: American, US import-operations background, lives in Chengdu. Kenny (Zhu Shiying; characters from Kenny) handles Chinese clients'),
  },
  audit: {
    title: ph('page title: 海外买家视角诊断 | 成都寰桥'),
    description: ph('meta description'),
    h1: ph('headline for the audit page'),
    lede: ph('who it is for: factory owners and export managers selling to US/EU buyers'),
    getTitle: ph('section: what you get'),
    get: [
      ph('notes on every page from a foreign buyer’s point of view'),
      ph('AI snapshot: 5 buyer questions × 3 runs in ChatGPT, Google AI Overviews and Perplexity, dated screenshots'),
      ph('fixes in priority order'),
      ph('report in Chinese and English, plus a short video walkthrough'),
    ],
    priceTitle: ph('section: price'),
    price: ph('¥2,980 · 5个工作日 · 全额抵扣 60天内后续建站费用'),
    stepsTitle: ph('section: how it works'),
    steps: [ph('add us on WeCom'), ph('free 15-minute video call with Kenny'), ph('contract and 发票'), ph('report in 5 working days')],
    faqTitle: ph('section: questions'),
    faq: [
      { q: ph('Q: do you promise inquiries or rankings?'), a: ph('A: no — we do not promise inquiries, rankings or AI citations') },
      { q: ph('Q: who writes the English?'), a: ph('A: Ryan, a native English speaker with US import-operations experience') },
      { q: ph('Q: can you issue a fapiao?'), a: ph('A: yes, 成都寰桥 can issue 发票') },
    ],
  },
  sample: {
    title: ph('page title: sample report'),
    description: ph('meta description'),
    h1: ph('headline: a sample audit'),
    body: ph('the sample is being prepared (Kenny picks a public Sichuan exporter, anonymised)'),
  },
  contact: {
    title: ph('page title: contact'),
    description: ph('meta description'),
    h1: ph('headline: contact'),
    wecom: ph('scan to add Kenny on WeCom (desktop) / tap to add (phone)'),
    wecomPending: ph('WeCom QR code coming soon'),
    formTitle: ph('or leave a message'),
    fields: { name: ph('name'), company: ph('company'), wechat: ph('WeChat ID or phone'), site: ph('website or product'), need: ph('what you need') },
    consent: ph('PIPL notice: recipients Kenny (China) and Ryan (USA), purpose, retention, how to withdraw; consent to cross-border transfer'),
    send: ph('send'),
    sent: ph('thanks, Kenny will reply'),
    failed: ph('did not send; add us on WeCom instead'),
  },
  privacy: {
    title: ph('page title: privacy notice'),
    description: ph('meta description'),
    h1: ph('privacy notice'),
    body: ph('PIPL notice: controller 成都寰桥, what we collect, purpose, recipients and countries, retention, rights, contact'),
  },
  notFound: { h1: ph('page not found'), home: ph('back to home') },
};
