# gesedge.com site spec: draft for Round 4

Draft 2026-10-06, built on `.ai/research/redo-interview.md` (Rounds 1–3) and DECISIONS "gesedge.com REDO". Marks: **[Ryan]** needs your input · **[Kenny]** needs Kenny · **[verify]** not yet confirmed.

**Rules:**
- English lives at `/` and Chinese at `/zh/`; the two are not mirrors. The language switch goes to the matching page if there is one, otherwise to the other home page.
- Every page is plain HTML from the server and works with JavaScript off. The bridge accent never carries content and is off inside WeChat.
- Chinese pages load ≤300 KB, with self-hosted subset PuHuiTi and no Google Fonts.
- URLs name the system, not the client, so a client saying no to their name never breaks a link.

## 1. Pages at launch

**English (US businesses, plus one page for factory export managers)**
- `/` home
- `/ai-operations` AI operations pilot · `/dashboards` owner's dashboard retainer · `/china` your person in China (advisory only)
- `/work` plus `/work/email-triage` (Goldie), `/work/owner-dashboard` (Sullivan), `/work/charter-booking` (Bloodline). Names pending permission.
- `/exporters`: the audit, in English, for export managers
- `/method` · `/sample-audit` · `/about` · `/contact` · `/privacy`
- `/writing` + 2 migrated posts

**Chinese (factories):** `/zh/` 首页 · `/zh/audit` 海外买家视角诊断 (the landing page) · `/zh/method` · `/zh/sample-audit` · `/zh/work` 案例 (one page) · `/zh/about` · `/zh/contact` · `/zh/privacy`.
**Language pairs (hreflang):** home, exporters↔audit, method, sample-audit, work, about, contact, privacy.
**Outreach:** `/s/[code]` is a personal AI snapshot for one factory. Hidden from search, unguessable code, never shows their US customers.

**Nav**
- EN: Work · AI Operations · Dashboards · China · About · Contact · 中文
- ZH: 买家视角诊断 · 方法 · 样本 · 案例 · 关于 · 联系 · EN
- Mobile: full-screen menu. The Chinese site adds a slim bottom bar with 加企业微信.

**Footer:** Global Edge Strategies LLC, Wyoming, USA · 成都寰桥企业管理咨询服务有限公司, 统一社会信用代码 91510100MAEQ1NAWXC, [address, Ryan] · "Sister companies, one founder" / 姊妹公司，同一创始人 (never 旗下) · coordinates · Writing · Privacy · email. ZH adds 可开具发票 and the ICP number once filed. Removed: UK/London, 寰桥策略.

**Redirects (301):**
- `/case-studies` → `/work`
- `/case-studies/bloodline-charters` → `/work/charter-booking`
- `pjcs-rag` and `docproc` → `/work` (see Decision 5)
- `/blog` → `/writing` (today's sitemap lists `/blog`, and it 404s)
- The RAG post and the US–China post → `/writing/<same slug>`
- The "80%" post → `/writing`
- `/admin` and `/api/contact` → 410

## 2. Page flows

**EN home**
1. **Hero:** small mono-caps labels in the corners: wordmark, nav, coordinates, BASED IN CHENGDU. One line of positioning in Unbounded. The single object is a live-looking Goldie triage frame: a mixed inbox gets labeled and routed, built in HTML/SVG, no WebGL. The bridge accent is the line a message travels along. **Book a call** · See the work. A bottom row on the first screen splits the audience: "US business: three ways we help ↓" | "出海工厂？中文版 →".
   Coordinates idea: `30.66°N 104.06°E · CHENGDU ⟷ WYOMING · 104.05°W`. Chengdu sits on 104°E and Wyoming's east border runs along 104°03′W, so the two places mirror each other **[verify]**.
2. **Offers:** 3 numbered rows: name · who it's for · entry price · link.
3. **Work:** 3 numbered rows, 2–3 sentences each, plus an image strip.
4. **How it runs:** paid review → build → shadow mode → retainer, one line with four stops.
5. **Ryan:** photo, 3 lines, link to About.
6. **Close:** Book a call · short form · email.

**ZH home:**
1. Hero object: a page from the sample audit (the "named 0/30" snapshot). **加企业微信** · 看样本诊断.
2. 问题: buyers ask AI before they send an inquiry. One sourced, dated fact.
3. 诊断: price, 5 days, credit toward a build → `/zh/audit`.
4. 诊断之后: English site · inquiry diagnostic → pilot (rows only, no pages yet).
5. 谁来做: Ryan's photo and import-operations background. Kenny named, no photo. Company registration block.
6. 案例 · contact block.

**Offer pages** (one shared layout): who it's for · what you get · timeline · price · one proof case · what we don't do · 4–6 FAQs as direct answers · call to action. `/china` also states: advisory only, no purchasing or import-export agency.

**`/zh/audit`** (outreach landing, fast in WeChat):
- 适合谁
- 你会拿到: page-by-page notes from a buyer's view · AI snapshot, 5 prompts × 3 runs, dated · fix priorities · report in both languages + video
- Price · 5 working days · credit toward a build
- 流程: add on WeCom → contract/发票 → video call with Kenny
- 我们不承诺: inquiries, rankings or AI citations
- Sample · FAQ · legal name, credit code and address · QR code / 获客链接 + form

`/exporters` is the same offer in English, plus a "Send your boss the Chinese version" button.

**`/method`:** prompts, engines, runs, dated screenshots, what counts as "named", how much answers vary.
**`/sample-audit`:** an anonymized public Sichuan exporter. 3 excerpts, a PDF and a 3-minute video, EN and ZH, no email required.

**Work pages:** one hero capture of the real UI · industry, system, year, status · problem, what we built, what happened (measured facts only) · name and quote only with permission. Bloodline was built free, and the Goldie and Sullivan referrals came from it.

**About:** Ryan's photo and story: American, MBA → tech, lives in Chengdu, import operations coordinator at Everglory Logistics (a US freight forwarder and customs broker), built these systems, "also CTO of C14 Space (UK), maker of ShopMyRoom". Kenny (Zhu Shiying) named as developer and Chinese contact, no photo. **[Kenny: does he consent? Which name, and the Chinese characters?]** GES and 寰桥 shown as sister companies.

**Contact**
- **EN:** cal.com 30-minute call · 4-field form (name, email, company/site, what you're trying to fix) · email.
- **ZH:** on desktop, the WeCom 联系我 QR code. On mobile or in WeChat, a 获客链接 button instead, since nobody can scan a QR code on the phone showing it. Plus a form (姓名, 公司, 微信号或手机, 网址/产品, 需求) with a PIPL notice and a separate, unticked, required checkbox consenting to cross-border transfer.

## 3. Calls to action and lead triggers

| Page | Primary | Secondary |
|---|---|---|
| EN home, offer pages, work, about, writing | Book a call | The related case or offer |
| `/exporters`, `/method`, `/sample-audit` | Get the audit | Chinese version / sample |
| `/zh/*`, `/s/[code]` | 加企业微信 (Kenny) | 看样本诊断 / 留言 |

- **EN form** → email to ryan@gesedge.com with all fields and the source page. If sending fails, the visitor sees an error and the email address. Today's form shows "success" whatever happens.
- **cal.com booking** → cal.com's own email and invite to Ryan.
- **ZH form** → a WeCom group-bot message to Kenny and an email copy to Ryan **[verify the bot after WeCom registration]**. Adds through the QR code or 获客链接 land in Kenny's WeCom with no code.
- **Snapshot visits:** Cloudflare Web Analytics counts `/s/` visits per path, so no custom tracking.

## 4. Inputs

**From Ryan:**
- Naming permission and one real quote each from Goldie, Sullivan and Bloodline
- Captures of the Goldie and Sullivan UIs
- US prices
- The audit price
- 寰桥 address
- 2–3 photos
- Approval of the Everglory and C14 wording
- A cal.com account and hours
- Flipside on the site: yes or no

**From Kenny:**
- WeCom setup, including the QR code and 获客链接
- His naming consent
- Native Chinese copy for every `/zh/` page
- Choosing and running the sample audit

**We write:** structure, English drafts (Ryan edits for voice), FAQs, method page, privacy/PIPL drafts (not legal advice), Chinese page briefs, redirects, sitemap, hreflang, llms.txt, schema, alt text.

## 5. Launch vs. later

**Launch:**
- Everything above
- Forms that actually send email · cal.com · WeCom
- The `/s/` template
- Structured data for both companies (as sisters) and for Ryan
- Share cards
- Cloudflare's AI-crawler blocking switched off **[verify]**

**Later (trigger):**
- GEO content hub and 公众号: once 2+ pieces a month is sustainable.
- Library of sample audits: after 3 paid audits with case-study rights.
- Chinese service pages: after the first delivery.
- Bridge 3D moment: after the identity is picked, never blocking launch.
- `.cn` on a mainland host: once ICP is filed.
- `/partners`: deprioritized.

**OPEN: an "Ask" assistant (like Zolplay's Ask Ori).** Version 1 excluded on-site AI (PROJECT.md). It would demonstrate what we sell. But it can misstate prices, it costs money, logging Chinese chats raises PIPL issues, and it may not load from mainland China. Default: later, answering only from the site's pages and citing them.

## 6. Five decisions

1. **Audit price:** ¥2,980, fully credited toward a build ordered within 60 days? The range discussed was ¥1.8k–6.8k; Kimi put this below the point where a boss needs approval.
2. **Hero objects:** Goldie triage on the English home and the sample-audit snapshot on the Chinese home? Default: yes. Each audience sees work that matches its own problem. The alternative for EN is the Sullivan dashboard.
3. **US prices shown:** publish the entry step ($X) and "builds from $Y" on the offer pages? Default: yes. The first price objection is answered before the call.
4. **`/exporters` at launch?** Default: yes. Outreach goes out in English, so the export manager reads it first and forwards the Chinese version to the boss.
5. **Retire PJCS, DocProc and the "80%" post?** Default: yes. PJCS never went ahead, so it isn't proof, and the post's headline number has no source.

---
## Review notes (2026-10-06) — Codex (adversarial) + Kimi (Chinese side); verify before acting
**Verified fact:** Chengdu 104°04′E (30.667°N) and Wyoming's eastern border 104°03′06″W (Wikipedia
"Wyoming"; Newberry Atlas) → GES (Wyoming) and 寰桥 (Chengdu) sit on mirror meridians, 104°E / 104°W.
**Codex:** (1) make `/`, nav, proof and primary CTA clearly US-first (the cash engine); route Chinese
prospects via /zh/, /exporters and outreach. (2) Claim only what screenshots, dates, status and permission
support; label the free Bloodline build plainly. (3) Scope too big for 2 people → lean launch: EN home, one
combined services page, one work page, about, contact, /exporters; ZH home, audit, sample, contact; privacy.
Later: /method (fold into audit page), /writing beyond redirects, individual case pages, video, /s/ snapshot
pages (send snapshots as PDF/images first), Ask assistant. (4) PIPL: a required cross-border checkbox may not
be freely given consent; disclose recipients, countries, purposes, retention, withdrawal, processors; minimize
fields; record consent evidence; counsel review when budget allows; never show an ICP number before issuance.
(5) hreflang only between genuine equivalents; self-canonicals + x-default; separate Organization entities.
Decision 1: test ¥2,980 but credit only PART (preserve audit value).
**Kimi:** registration block ABOVE THE FOLD on /zh/audit (统一社会信用代码 · 可对公转账 · 可开具发票); a free
15-min video call BEFORE payment (Chinese buyers judge the person first); WeChat share cards on every /zh/
page; move "我们不承诺…" into the FAQ (keep it — good 广告法 hygiene); keep 海外买家视角诊断 as the formal name,
use a colloquial hook like 老外怎么看你的官网; ¥2,980 is right, framed 5个工作日 + 全额抵扣（60天内）后续建站/优化
费用 — FULL credit stated explicitly; PIPL notice must name both recipients (Kenny, China; Ryan, US), purpose,
retention, and cover the WeCom path too; show only the registered 寰桥 address; verify the credit code on
国家企业信用信息公示系统 before publishing.
