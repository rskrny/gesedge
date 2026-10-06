# gesedge.com redo — interview record
<!-- Ryan's answers are the source of truth for the redo. Append each round; never paraphrase his
     answers into something stronger than he said. Decisions that follow go to DECISIONS.md. -->

Started 2026-10-05. Trigger: Ryan — live site is "very bad and vibecoded looking"; wants a redo of almost
the entire thing (content, design, UX/UI flow). Interview designed from six lenses: Business Strategist,
China Market Localization Strategist, UX Architect, Brand Guardian, AI Citation Strategist (GEO/SEO),
Kimi (Chinese buyer view); reviewed by Codex (ChatGPT).

Context carried in: DESIGN.md (July lock: awards register, "The Crossing" WebGL world) predates the
HuanQiao angle (Chinese companies entering US/EU) and the GEO/SEO growth plan — it is up for review, not
assumed.

## Live-site audit (2026-10-05, from the interview agents; verified in origin/main source + curl)
Why it reads "vibecoded" (Brand Guardian, ordered by loudness):
1. Template hero: salmon eyebrow → 3-line serif headline with an italic gradient word ("Bridges") →
   triad subline → two buttons → pulsing SCROLL.
2. Four meaningless decoration layers: stock sea photo, gradient overlay, particles, wireframe globe.
3. Same section skeleton ×4 (eyebrow + muted-second-half H2); "Built to ship. Not to pitch." (banned "not" contrast).
4. Glass cards everywhere (blur + cursor glow); uniform 3-up project grid with chips, pulsing "Live" dot.
5. Stat boxes counting non-numbers ("Full-Stack", "Your Code").
6. Off-palette neon ordinals (#E91E8C / #00D4FF / #B794F6).
7. Starter-kit motion (magnetic buttons, word reveals, fade-up everything; 51 inline opacity:0).
8. Fonts: Cormorant Garamond + Space Grotesk 300 — Space Grotesk was rejected by Ryan 2026-06-29.
9. Template closer ("Ready to build something real?") and footer ("Engineered with precision.").
10. Name drift: header "GES" in 中文 mode, ZH copy says 寰桥策略, About says 成都寰桥; claims a London entity.
Functional defects:
- Chinese is a client-side toggle on English URLs, `lang="en"` hard-coded, no /zh, no hreflang → no
  Chinese is indexable (UX + GEO agents).
- No contact form: Contact page is a `mailto:` link; `ContactForm.tsx` + `/api/contact` exist but are
  unused (verified `git grep`). The 2 DB rows (March) were probably tests.
- No llms.txt; sitemap lists `/blog` (404); Organization schema lists UK; footer "Wyoming / Chengdu / London".
- Google Fonts via blocking `@import` (likely unreliable in mainland China — untested).

## Interviewer consensus — July locks the new business may have broken
(all six lenses raised these; Ryan decides)
1. **Register:** awards/designers (DESIGN.md §1) vs. the real judges now — a Chinese 出海 lead on a phone in
   WeChat, and AI answer engines that need crawlable text.
2. **The Crossing:** West→East story runs backwards for HuanQiao (East→West work); heaviest path into
   mainland China; launch has been blocked on it since July.
3. **No client names:** removes the only 出海 proof (Safepacific, the waterproofing maker/PJCS — both Chinese
   firms selling abroad); Chinese buyers + AI engines trust checkable names. Live site already names
   Bloodline + PJCS.
4. **EN+ZH full mirror:** two audiences, two offers — US SMB pages need no Chinese; HuanQiao needs Chinese
   (+ some English). Mirror doubles work for pages nobody reads.
5. **Identity is Latin-only:** Unbounded/mono/caps HUD/scramble don't translate to CJK; ZH would fall back to
   plain PuHuiTi on dark. (Unbounded was made for Polkadot — crypto association; impact = inference.)

## Question bank for later rounds (from the agents; defaults are their recommendations)
- R2 offers: HuanQiao entry offer — fixed-price "US buyer review / 出海诊断" (an American reviews their
  English site, listings, brand; ZH+EN report), optionally + "what ChatGPT says about you" audit; follow-ons:
  English site/独立站 + GEO, AI lead tools (like the PJCS product finder), FDE/驻场 engineering. Define FDE in
  one sentence (who sits where, how long); likely keep "FDE" out of ZH copy. What you refuse (paid ads? social?).
  Target segment: B2B manufacturers/exporters (default) vs DTC/Amazon vs software vs logistics; US first, EU later.
  US SMB niche + first purchase (fixed-fee diagnostic credited to build). Pricing: entry offers priced,
  builds "from" (RMB + USD). 3 queries each audience must win. Competitors (2–4 each) for a GEO baseline.
- R3 design: reference screenshots love/fine/hate (igloo.inc, lusion.co, obys.agency, microsoft.ai,
  shangxia.com/en, madebyrela.com, flexport.com, linear.app + 3 Kenny picks a Chinese buyer trusts);
  fate of The Crossing (A build as locked / B one light two-way signature moment + static poster in
  China/WeChat / C hairlines only / D drop); dark vs light vs dark-hero + light reading pages; type (keep
  Unbounded, swap mono body for a proportional face for long reading?); real photos of Ryan + Kenny;
  logo v1 = GES + 寰桥 wordmark; bridge direction (two-way?).
- R4 UX: homepage audience split in first screen; nav (Home · For US businesses · 出海 · Work · About ·
  Writing · Contact, EN/中文 switch keeps page); per-service pages only when a real deliverable exists;
  contact: EN = book-a-call (cal.com) + 4-field form, ZH = 企业微信 QR + form (WeChat ID/phone, PIPL
  consent); every lead emails Ryan; WeChat in-app browser as the primary ZH context; ZH 公司介绍 PDF.
- R5 ops: who writes ZH (Kenny natively vs Ryan EN → Kenny rewrite), cadence (≥2 ZH pieces/month);
  公众号 + 知乎 before/at launch; ICP filing docs (business license, legal rep ID, .cn in WFOE name);
  fapiao / RMB billing via 寰桥; timeline + budget ceiling; Cloudflare AI-bot blocking setting check.

## Round 1 — the business behind the site (asked 2026-10-05)
Order per Codex review: facts → commercial evidence → buyers → offers (unprompted first) → proof → people →
site role. Domains/ICP deferred (default meanwhile: real server-rendered /zh on gesedge.com; ICP/.cn as a
parallel feasibility check once the 经营范围/发票 answer is in).
1. Facts: UK/London entity real? Keep "寰桥策略"? Kenny = Shiying, Kenny's role/title? Can 寰桥 issue 发票
   for software/marketing (photo of 营业执照)?
2. Last 12 months: who paid, roughly for what, how did each find you?
3. Next 12 months: which audience brings revenue, which do you build the brand around (can differ)?
4. Ideal Chinese client and ideal US client, one line each (industry, size, who you talk to, trigger).
5. What you'll sell each, in your words; what you won't sell. (Agent offer ideas shown only after.)
6. Client names: never → with permission? Per client yes/no/ask.
7. Faces: Ryan photo + story (+ Flipside)? Kenny named as Chinese-side lead? Who answers Chinese WeChat, how fast?
8. Site's job: A awards showpiece · B sales site that proves capability (fast readable pages + one signature
   3D moment; launch without waiting) · C plain, no 3D. Default B.

### Answers (Ryan, 2026-10-06) — public-safe summary
Full answers incl. revenue live OUTSIDE this public repo: `../business/gesedge-redo-private-notes.md`.
1. **UK:** "London" = C14 Space (UK; shopmyroom.co.uk, appliedbusinessrealities.com), where Ryan is CTO — a
   connection, not a GES entity. How to mention it: open. **寰桥** (business license read): owned by Ryan
   personally (外国自然人独资), not a GES subsidiary → present GES + 寰桥 as sister companies under one founder.
   Scope covers 软件开发, 信息系统集成, IT/tech consulting, 市场营销策划, 广告设计/代理, video, digital content,
   design, exhibitions → 发票 fine for web/CRM/marketing work. Not in scope: translation, import-export/purchasing
   agency → sell localization as marketing/content; any China-sourcing offer stays advisory.
   **Kenny = Zhu Shiying** (developer, architecture, cheap/local-first tinkerer).
2. Real clients so far: BrandPal (China; marketing, podcast co-hosting, AI help), Goldie Group and Sullivan &
   Sullivan (US; word of mouth after the free fishingbloodline.com build). Safepacific/PJCS have not advanced —
   not proof.
3. Next 12 months: be discoverable by Chinese **factories** (localization + website/CRM for selling to US/EU;
   no track record yet → research), more US AI-systems clients like Goldie, and US businesses needing a
   trusted connection in China.
5. Open to offers; near-term revenue matters more than polish.
6. Nameable-candidate clients: Bloodline, Goldie Group, Sullivan & Sullivan, BrandPal (permission still to ask).
7. Kenny answers Chinese leads. WeCom/WeChat setup complexity → researched in Round 2.
8. **Site job = B:** sales site that shows the offers and makes inquiry easy; launch without waiting for 3D.

## Round 2 research synthesis (2026-10-06; sources in agent outputs, key ones below)
**Market reality (web-sourced; inference labeled):**
- Local prices: English B2B site ¥5k template / ¥16.8k semi-custom / ¥23.8k multilingual; SEO ¥12.8–19.8k/yr
  ([Sohu, Sep 2026](https://m.sohu.com/a/1071092953_372233)); Alibaba 出口通 ~¥30k/yr; GEO agencies
  ¥15–20k/month; OKKI (70% Alibaba-owned) / 孚盟 CRMs ~¥9–24k/yr (third-party). → can't win on build price;
  win on native-English buyer copy + AI-readable specs + Goldie-style inquiry handling.
- Tariffs: IEEPA tariffs struck down Feb 2026; new 12.5% Sec. 301 on China (also VN/TH/IN) since Jul 24 2026,
  stacking on older 301 lists ([GT Law](https://www.gtlaw.com/de/insights/2026/7/ustr-imposes-new-section-301-forced-labor-tariffs-on-imports-from-60-economies));
  de minimis gone; truce reportedly extended to Jan 2027. EU CBAM definitive phase from 2026 (metals buyers
  ask for emissions data). → copy must answer landed cost, lead time, compliance; EU-bound may be easier.
- Sichuan: 80% of exports electromechanical, big assemblers don't hire agencies; reachable clusters — Chengdu
  women's shoes, Zigong lanterns + pumps/valves, Chongqing motorcycles, Chongzhou furniture, specialty food;
  Chengdu–Europe rail = EU pitch; 川行天下 subsidizes shows/branding/online marketing (rates unpublished).
- Buyers use AI for shortlists (Forrester 2026: 94% use AI, verify answers); vendor "73% use ChatGPT" stats
  are unreliable; nobody can guarantee AI citations.
- Canton Fair 140th: Oct 15–19, 23–27, Oct 31–Nov 4 2026.

**Offer candidates (consensus of 5 lenses):** Factories (寰桥, RMB): (1) Buyer's-Eye Audit 海外买家视角诊断
¥3.8–6.8k, first 3 free for case-study rights; (2) Buyer-Ready English Site 买家版英文官网 ¥19.8–29.8k +
care; (3) Inquiry Desk AI询盘响应系统 ¥12.8–30k setup + ¥1–3k/mo (Goldie pattern, add-on to OKKI/孚盟);
(4) Trade-show kit / Canton Fair follow-up ¥6.8k–15k; (5) GEO monthly — later. US (GES, USD): (A) AI
operations pilot (Goldie playbook: paid review → build → shadow mode → retainer); (B) owner's dashboard
retainer (Sullivan playbook); (C) "your person in China" — advisory only.
**Don't sell:** translation line items, sourcing/purchasing/import-export, Alibaba 代运营, ads as % of spend,
an own CRM, guarantees of inquiries/rankings/citations, TikTok/ads (BrandPal's turf), tariff-avoidance advice,
LinkedIn automation, cold email into Germany.
**Brand architecture:** sister companies under one founder; never "GES 旗下"; drop 寰桥策略; C14 Space only in
Ryan's bio ("also CTO of C14 Space (UK), maker of ShopMyRoom"); remove "UK operations / three countries".
**WeCom (2/5 difficulty):** Kenny registers WeCom under 寰桥, verifies via 对公账户打款 (avoids face-scan routes
that likely fail for a foreign legal rep), ¥300/yr, ~3h + 3–15 working days; 联系我 QR + 获客链接 on ZH pages;
form fallback (WeChat ID/phone) with PIPL notice + separate cross-border consent; 公众号 at launch only if ≥2 ZH
pieces/month; skip 视频号. Blocker: does 寰桥 have a working 对公账户 with online banking?

**Codex review (adopted):** US automation/retainers = cash engine for 60–90 days; factories = bounded
validation track (3 PAID audits via warm intros, ¥1.8–3.8k credited to a build) before committing to the
premium site offer; start with a 5–8-page buyer-ready site, extras priced separately; Inquiry Desk only after
a paid diagnostic, as a narrow pilot on the client's own tools; client owns spec/regulatory accuracy; moat =
measurable procurement clarity, not "an American writes your copy"; disclose location to existing clients
before renewals if they relied on it; ask runway/capacity/priorities before preferences.

## Round 2 — priorities, offers, trust (asked 2026-10-06)
1. Runway + minimum safe monthly revenue (answer goes to private notes only).
2. Capacity: Ryan's delivery hours/week; Kenny's hours for Chinese sales/support; can Kenny prospect + close alone?
3. What must be true at 30 / 60 / 90 days to call this working?
4. US offers for the site: AI operations pilot (Goldie playbook), owner's dashboard retainer (Sullivan
   playbook), "your person in China" (advisory).
5. Factory track: warm intros (Ryan/Kenny/BrandPal) for paid audits this month? BrandPal's clients factories or brands?
6. Factory offers at launch: paid audit · 5–8-page buyer-ready site · inquiry diagnostic → pilot · Canton Fair
   follow-up (only with a warm exhibitor). Right/wrong?
7. Location disclosure to existing US clients before renewals (details in private notes).
8. Naming permission (Goldie, Sullivan, Bloodline, BrandPal + one quote); 寰桥 对公账户 with online banking;
   general vs small-scale VAT (专票).

### Answers
_(pending)_
Lenses: Supply Chain Strategist (factory market, tariffs, competitors, prices), Cross-Border E-Commerce
Specialist (exporter digital stack, packaged deliverables), Private Domain Operator (WeCom setup for a WFOE
with a foreign legal rep), Business Strategist (US offers from real Goldie/Sullivan deliverables, "your person
in China", brand architecture, 30-day revenue moves), Kimi (factory-boss view, RMB pricing, channels).
