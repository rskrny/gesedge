# Design References — research evidence (2026-06-29)
<!-- Output of the 6 design-research subagents. Evidence for the redesign direction. -->

## Three synthesized directions (lanes)
1. **Immersive 3D world** — scroll-as-camera WebGL. Max wow, max build/perf risk.
   Exemplars: Igloo, Lusion, Active Theory, Utsubo.
2. **Editorial premium** (RECOMMENDED base) — type-led, restrained, cross-cultural,
   anti-stat-box. Premium + bilingual elegance, low risk.
   Exemplars: Shang Xia, Obys, Microsoft AI, Rela, Forto.
3. **Product-proof / cinematic** — lead with real product UI, dashboards, scale photography.
   The "we build complex systems" proof; fits maritime/Safepacific.
   Exemplars: Flexport, Terminal Industries, Beacon, Scout Motors, DP World.

**Recommended blend:** editorial-premium base + ONE immersive moment (US↔China trade-route
globe, engineered light) + product-proof in the Projects section. Hits all four:
premium × cross-cultural × technically-advanced × showcase, while staying performant.

## Premium / technically-advanced (Art Director scout)
- Igloo Inc — https://igloo.inc/ — immersive WebGL; scroll = camera through a 3D scene. Steal: scene-to-scene transitions, intro-as-brand-moment. 5/5
- Lusion — https://lusion.co/ — Awwwards SOTY 2024; tasteful WebGL + restraint + perf-conscious. Steal: cursor-reactive particle hero, hover→WebGL preview. 5/5
- Active Theory — https://www.activetheory.net/ — card→fullscreen WebGL expansion; case studies as set-pieces. 5/5
- Obys Agency — https://obys.agency/ — kinetic/editorial type (scroll morph/split), numbered index, live clock. 5/5
- Microsoft AI — https://microsoft.ai/ — "advanced" rendered warm/human: hand-painted organic icons, editorial grid w/ read-times, muted palette. Anti-stat-box. 4.5/5
- Scout Motors — https://www.scoutmotors.com/ — cinematic product; "viewfinder" sequenced frames (cheap, mobile-perf 3D feel); ambient motion. 4.5/5
- Noomo — https://noomoagency.com/ — "story dictates the medium" (mix GL/video/static). 4/5
- Utsubo — https://www.utsubo.com/ — WebGPU/real-time-3D credibility flex. 4/5
- 14islands — https://14islands.com/ — Scandinavian restraint + micro-interaction polish. 4/5
- Dvein — https://www.dvein.com/ — best-in-class motion choreography/easing. 4/5
- Also: basement.studio, offbrand.dev (OFF+BRAND — made the Lando Norris SOTY site)
- Pattern: best sites use WebGL as a continuous scene (near-empty DOM); premium = restraint + ONE signature technique done flawlessly; performance discipline is explicit.

## Bilingual / cross-cultural (EN/ZH)
- Shang Xia — https://www.shangxia.com/en — Hermès-incubated Chinese luxury; THE bridge thesis; clean 中文|ENGLISH toggle, fully parallel content. Steal: literal bridge narrative, neutral high-whitespace canvas. 5/5
- Made by Rela — https://www.madebyrela.com/ — Beijing studio (Strategy+Design+Tech), premium to Western eyes, China-rooted; clean ICP footer = credibility. 5/5
- NIO — https://www.nio.com/ (中文 nio.cn) — best region/language switch UX; separate-but-equal localization, proper CJK. 4/5
- Zolplay — https://zolplay.com — boutique studio tone twin (founder-to-founder, no fluff); numbered modular sections; Alipay+Stripe. EN-only. 3.5/5
- Balans Studio — https://balans.studio — Shanghai; EN-forward + ZH footer; kinetic interface. 3/5
- Best-practices: localize in parallel (no script-mashing); size/space ZH vs Latin differently (own line-height/alignment); self-labeled switcher ("中文/English", not flags), region-aware, persistent; neutral canvas + real artifacts (not stat-boxes); ICP footer = trust.

## Maritime / international trade (premium exceptions)
- Flexport — https://www.flexport.com/ — logistics as premium software; EN/简体/繁體; named tools (Tariff Simulator). Directly relevant to Safepacific. 5/5
- DP World — https://www.dpworld.com/en — editorial big-iron maritime; golden-hour scale photography; global location selector. 4.5/5
- Terminal Industries — https://terminal-industries.com — Awwwards SOTD; award-winning yard-ops AI site; scroll storytelling on an unglamorous subject. 4.5/5
- Beacon — https://beacon.com/ — sells on real dashboard screenshots; carrier logo wall; deep-blue trust palette. 4/5
- Forto — https://forto.com/en/ — restrained navy/white; named-exec case studies; certifications as quiet authority. 4/5
- CMA CGM — https://www.cmacgm-group.com/en — legacy carrier gone editorial ("BETTER WAYS" framework); campaign-grade vessel imagery. 3.5/5

## Signature-moment ideas (Showcase Engineering scout) — advanced but light
1. US↔China trade-route globe — one small low-poly globe, great-circle arcs pulsing Chengdu⇄US. One GPU object, viewport-gated, poster fallback, tiers down. THE headline moment.
2. Cursor-reactive shader mesh-gradient backdrop (Stripe-minigl style) — single shader, one draw call, freezes to a static image on weak/reduced-motion.
3. Scroll-driven pre-rendered "pipeline" video sequence — zero live WebGL; looks live, stays fast. Safe fallback-tier centerpiece.
- Proven impressive-AND-fast exemplars: Stripe, Bruno Simon (bruno-simon.com), Lando Norris (OFF+BRAND), Linear, Vercel.
