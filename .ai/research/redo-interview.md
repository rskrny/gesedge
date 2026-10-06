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

## Round 2 — offers (research running 2026-10-06)
Lenses: Supply Chain Strategist (factory market, tariffs, competitors, prices), Cross-Border E-Commerce
Specialist (exporter digital stack, packaged deliverables), Private Domain Operator (WeCom setup for a WFOE
with a foreign legal rep), Business Strategist (US offers from real Goldie/Sullivan deliverables, "your person
in China", brand architecture, 30-day revenue moves), Kimi (factory-boss view, RMB pricing, channels).
