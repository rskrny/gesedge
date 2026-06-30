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
- Easy for Ryan + Shiying to update via a self-hosted CMS (Strapi).
- Replace the current build; keep the gesedge.com domain.
- Design direction: **premium × cross-cultural × technically advanced.** More ambitious
  than the current ocean-background + animated globe, but engineered to stay fast.

## Operator / audience
- **Operators:** Ryan Kearney (owner; business + frontend/vibecoding) and **Shiying**
  (developer; strongest in Python, backend/API integration, and the server).
- **Primary audience (v1):** US SMBs needing custom software / automation. Ryan (MBA →
  tech) can explain AI simply to non-technical buyers.
- **Secondary:** cross-border US↔China. Key client: **Safepacific Shipping** (Shanghai;
  Ryan runs their web ops to win LATAM/other export clients shipping out of China).
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
- **Backend/CMS:** **Strapi** (open-source headless CMS), **self-hosted** on a Linux PC
  at a friend's house (~20 GB RAM, 1 TB — ample for low traffic). Shiying owns the
  server/API side.
- **Frontend:** **Astro + React islands** (React Three Fiber + GSAP for 3D/motion). Ryan + AI build
  it; Shiying owns Strapi/server. Toolchain: `.ai/research/build-toolchain.md`.
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
