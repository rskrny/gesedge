# Project
<!-- Stable goals, audience, constraints. Changes rarely. Read when goals or
     constraints matter to the task. -->

## What this is
A complete redesign and rebuild of **gesedge.com**, the bilingual (EN/ZH) website for
**Global Edge Strategies (GES LLC, Wyoming)** and its Chinese counterpart **Chengdu
Huanqiao (HuanQiao WFOE)** — a boutique cross-border technology & business consultancy
(custom software, AI/automation, US↔China business). The current Next.js site is a
reference only; most code will not carry over.

This is a **showcase site**: the site itself is the proof of capability. It should make
visitors think "these people can build complex things" — through embedded/linked live
work and advanced-but-performant visuals — without being heavy enough to crash.

## Goals
- A premium, technically-impressive, cross-cultural site that demonstrates capability
  and converts US SMB prospects into conversations.
- Easy for Ryan + the developer to update via git (Astro content collections; Strapi dropped
  2026-07-06, see DECISIONS.md).
- Replace the current build; keep the gesedge.com domain.
- Design direction: **premium × cross-cultural × technically advanced.** More ambitious
  than the current ocean-background + animated globe, but engineered to stay fast.

## Operator / audience
- **Operators:** Ryan Kearney (owner; business + frontend/vibecoding) and **Shiying**
  (developer; strongest in Python, backend/API integration, and the server).
  **Kenny** (developer, Chengdu; GitHub `kawasakiakasei`, write access invited 2026-10-05) —
  owns HuanQiao site ideas with Ryan. (Is Kenny = Shiying? Unconfirmed; ask Ryan.)
- **Primary audience (v1):** US SMBs needing custom software / automation. Ryan (MBA →
  tech) can explain AI simply to non-technical buyers.
- **Register amendment (2026-07-06, Ryan):** the site EXPERIENCE is optimized for the
  awards/peers/press register (igloo-tier judgment), not brochure clarity. SMB conversion
  remains the business goal but is earned through demonstrated capability. See DESIGN.md §1.
- **Secondary:** cross-border US↔China. Key client: **Safepacific Shipping** (Shanghai;
  Ryan runs their web ops to win LATAM/other export clients shipping out of China).
- **HuanQiao / Chinese market (Ryan, 2026-10-05):** Chinese companies entering US + EU
  markets — FDE (forward-deployed engineering), branding, marketing, localization. Once the
  site is good: heavy GEO + SEO push to drive traffic to the GES/HuanQiao site.
  Legal CN name: 成都寰桥企业管理咨询服务有限公司 (寰, never 环).
- **Bilingual model:** all concrete site content in **both EN + ZH**; blog posts stay in
  the author's native language (Ryan = English, Shiying = Chinese) for a local touch.

## Content / IA (from Ryan's outline)
- **Home** — "GES + HuanQiao"
- **Projects** (the showcase core) — ShopMyRoom (3D/AR interior design; Ryan is CTO —
  link + pipeline/AR diagram), fishingbloodline.com (booking/scheduling system; his
  cleanest work), roganmooring.com, Safepacific (in dev), Goldie Group email-triage
  system (motion diagram: messy inbox → AI → routed to workers), Flipside Podcast
  (US-China business; Ryan co-hosts), Sullivan Cape Cod, wallet note-taker e-writer
  (R&D / open to investment; CAD schematics available), more.
- **Services** — Intro to LLMs / AI consults; automation-pipeline design; US localization
  psychology; (purchasable prompts/CLAUDE.md PDF — deferred, no funnel yet).
- **Blog** — curated bilingual resource hub (GitHub, YouTube, Reddit, WeChat articles)
  + native-language posts.
- **About** — "You won't be replaced by a tractor, but by a horse that learns to drive
  one"; international-business advantages; stories & motivation.
- **Contact** — automated CRM (leads into Strapi; possible future WhatsApp/Telegram LLM
  lead-qualification bot).

## Constraints
- **Content:** no CMS — Astro content collections in git (Strapi dropped 2026-07-06).
- **Hosting (live 2026-10-08):** Cloudflare Workers (static assets + a small Worker for the form and media).
  Form copies in Workers KV, mail via Purelymail. **No Supabase, no Vercel** (Ryan, 2026-10-08: done with both).
  Long-term idea of an own mini server via Cloudflare Tunnel: `.ai/research/hosting.md`.
- **Frontend:** **Astro + React islands** (React Three Fiber + GSAP for 3D/motion). Ryan + AI build
  it; the developer owns server/backend. Toolchain: `.ai/research/build-toolchain.md`.
- **Identity/design:** all-dark, light text, tasteful animated gradients (@paper-design/shaders),
  immersive (Igloo-grade). Mark = "Beam" world-bridge (`.ai/research/logo-marks.md`). Type = best FREE
  (grotesk + mono + Alibaba PuHuiTi 3.0 for ZH). Design rules + anti-patterns: `.ai/experts/ui-design-review.md`.
- **Performance:** advanced visuals are fine, but engineer for the visitor's device —
  lazy-load heavy assets, fallbacks for weak devices. "Impressive" must not mean "crashes."
- **v1 scope excludes:** on-site AI and e-commerce/PDF sales (deferred).
- **Voice:** opinionated and well-informed, but not a jackass. Anti-AI-slop rules apply
  (see AGENTS.md). **Hard design anti-pattern:** the "vibe-coded" look — boxes full of
  quantified stats/numbers. Avoid.
- **Persisting:** free/low-cost tooling; reviewed changes; never deploy to production
  without approval; never fabricate testimonials, reviews, or metrics.
