# Decisions
<!-- Append-only log of MAJOR decisions (architecture, strategy, cost, scope,
     reversibility). Minor implementation choices don't belong here. Newest on top.

Format:
## Decision: <name>
Date: YYYY-MM-DD · Status: Accepted | Rejected | Revisited
Context:
Options:
Decision:
Rationale:
Trade-offs:
Reversal trigger:
-->

## Decision: Logo mark = Beam (globe + great-circle span), after a vision critique killed the G-Bridge "C"
Date: 2026-06-30 · Status: Accepted (pending Ryan's final confirm) — supersedes the #4 G-Bridge pick
Context: Rendered the chosen #4 mark to PNG (headless Chrome) and ran 3 vision-enabled critics (brand designer, cold first-impression, bilingual-type). Unanimous: #4 reads as an open "C"/Pac-Man, the bridge (the whole point) is absent, premium finish but generic/unresolved idea; the small/favicon version loses the bridge entirely.
Decision: Pivot the mark to the **Beam** direction — a globe crossed by one warm→cool great-circle span out to a West (warm) and East (cool) node = globe + bridge/route in a single move. Re-rendered and verified by eye that it reads clean + premium. Span (#1) is the fallback if a more literal arched-bridge read is wanted.
Lockup fixes (type critic, pixel-measured): Chinese was 1.32× tall / 1.5× heavy / baseline-low → set 成都寰桥 to ~0.8em, one weight lighter, optically centered (not baseline-aligned); swap Noto Sans SC → Alibaba PuHuiTi 3.0 (free commercial, distinctive, holds 寰 small); keep tracked-caps Schibsted Grotesk for GES (~0.12em, Medium).
New capability: render any design → headless-Chrome screenshot → vision-agent critique. Use it on every logo/design pass (no more judging designs blind).
Reversal trigger: If Ryan wants the bridge unmistakable → switch to Span. If PuHuiTi's look/licensing disappoints → HarmonyOS Sans SC.

## Decision: Type = best free system; Logo = "world bridge" (寰桥), not a generic globe
Date: 2026-06-29 · Status: Accepted (type); logo direction pending Ryan's pick
Context: Ryan wants free type ("use what's best") and a UNIQUE logo that carries both GES and 成都寰桥 — explicitly not matching every other globe logo.
Decision: (Type) Use the best FREE system — a confident grotesk (display/UI) + a mono (technical labels) + a strong-weight free CJK; exact cuts finalized in the build. (Logo) Build on the insight that 成都寰桥 = "world bridge" (寰 = globe + 桥 = bridge) and GES = Global Edge — so the mark is a BRIDGE / great-circle span between US↔China, NOT a globe-with-a-line. Warm node = West/US, cool = East/China. 4 directions presented (Span / Beam / Meeting / G-Bridge); awaiting pick.
Rationale: Roots the mark in the actual meaning of the Chinese name → unique, meaningful, bilingual by design. Free type respects budget; the expert said "finish" matters more than the foundry license.
Trade-offs: Free type forgoes top-tier foundry polish (mitigated by strong free choices + real material/motion).
Reversal trigger: If no free CJK reads premium enough at display size, license one distinctive Chinese face.

## Decision: Visual identity = Ink Wash palette (P10) + Unbounded display (F16)
Date: 2026-06-29 · Status: Accepted (core); body font + accent + rhythm pending
Context: After two rounds, Ryan rejected the common AI-default fonts (Inter/Space Grotesk/Fraunces) and the dark-navy/cyan colorway. From a 20-palette × 20-font set he chose P10 + F16.
Decision: Near-monochrome warm paper-and-ink palette (paper #F0ECE2, sumi ink #1A1916, warm grays #7C786E / #C3BCAD) + Unbounded as the display/wordmark face. Personality comes from type + motion, not color.
Open: pure-mono vs one reserved pigment accent; body typeface (Hanken Grotesk placeholder vs a mono); section rhythm (mockup uses dark immersive hero → light editorial body).
Rationale: Distinctive and anti-vibe-coded; pairs a restrained canvas with a bold rounded display for contrast.
Trade-offs: Unbounded is display-only (needs a body pairing); near-mono leans hard on typography/layout/motion — less margin for weak execution.
Reversal trigger: If pure-mono feels flat in the full prototype, introduce one accent and/or a secondary type voice.

## Decision: Design lane = editorial-premium base + Igloo-style immersive lean
Date: 2026-06-29 · Status: Accepted
Context: From the 3-lane reference board, Ryan picked the editorial-premium base and also wants the immersive WebGL feel of Igloo Inc (igloo.inc).
Decision: Editorial-premium foundation (type-led, restrained, bilingual, anti-stat-box) with a stronger immersive/WebGL lean than a pure editorial site — scene-driven hero + signature 3D moments (Igloo influence), kept performant.
Rationale: Hits premium + cross-cultural + technically-advanced + showcase; the Igloo lean raises the "wow" while the editorial base keeps it premium and bilingual-credible.
Trade-offs: More WebGL/motion = more performance-engineering discipline (poster-first, viewport-gated, tier-down).
Reversal trigger: If the immersive lean can't stay performant or starts to feel gimmicky, dial back toward the restrained editorial base.

## Decision: Frontend = Astro + React islands
Date: 2026-06-29 · Status: Accepted
Context: Research recommended Astro + React islands; Ryan greenlit building ("build gesedge").
Decision: Build the frontend on Astro, with React islands (React Three Fiber / GSAP) for the 3D + motion pieces; consume Strapi REST per locale.
Rationale: Near-zero JS for static content (fast, light on the self-hosted box), React/R3F exactly where needed, easy for Ryan + AI to build while Shiying owns Strapi/server.
Trade-offs: If it ever becomes one persistent full-page WebGL app, Next.js would be smoother. Acceptable given discrete showcase sections.
Reversal trigger: Design evolves into a single continuous WebGL experience across all routes → reconsider Next.js.

## Decision: Backend + CMS = self-hosted Strapi on a Linux box
Date: 2026-06-29 · Status: Accepted (working direction)
Context: The rebuild needs a backend + CMS the team can self-manage cheaply. Ryan has a Linux PC (~20 GB RAM, 1 TB) at a friend's house and wants to use Strapi.
Options: (a) hosted SaaS CMS (Sanity/Contentful); (b) WordPress; (c) self-hosted Strapi (open-source headless CMS) on the Linux box.
Decision: (c) self-hosted Strapi. Headless — it provides the admin + content API; the public frontend is a separate app that consumes it.
Rationale: Open-source, free, full control, fits cross-border data needs, and Shiying (Python/backend/server) can own the server + API integration. 20 GB/1 TB is ample for expected low traffic.
Trade-offs: Self-hosting ops (domain→box, SSL, uptime, backups). Headless means a separate frontend build/choice. Node-based (Shiying is Python-strongest).
Reversal trigger: If self-hosting proves unreliable, or Strapi's i18n/media can't meet the bilingual showcase needs, move to a hosted headless CMS.

## Decision: Design direction = premium × cross-cultural × technically-advanced showcase
Date: 2026-06-29 · Status: Accepted
Context: The site's job is to prove GES can build complex things; v1 primarily targets US SMBs (secondary: cross-border, Safepacific).
Options: (a) clean/minimal brochure; (b) premium showcase that demonstrates technical capability through the site itself.
Decision: (b). Premium, cross-cultural, technically advanced — more ambitious than the current ocean+globe, engineered to stay performant.
Rationale: Credibility for a technical consultancy comes from showing, not telling. Low traffic lets us afford richer per-visit experiences.
Trade-offs: Higher build complexity and performance risk; needs disciplined engineering (lazy-load, fallbacks) to avoid "impressive but crashes."
Reversal trigger: If the rich approach can't hit acceptable performance on mid-range devices, fall back to lighter visuals with selective showcase moments.

## Decision: Rebuild the website from scratch on a new stack (vs. iterate)
Date: 2026-06-29 · Status: Accepted
Context: gesedge.com currently runs on Next.js / Vercel / Supabase (the dark-charcoal/salmon build). Ryan wants a complete redesign and update; most existing code is not expected to carry over.
Options: (a) Iterate on the current Next.js build; (b) Full redesign/rebuild on a new backend, hosting, and CMS.
Decision: (b) — full rebuild. Replace backend, hosting, and CMS; treat the current site as reference only.
Rationale: Current code is largely disposable for the intended direction; a CMS-driven site fits ongoing updates and a Ryan + Shiying (developer) workflow better.
Trade-offs: Discards working code and the existing Supabase/admin + email/analytics integrations; new stack means fresh setup and content/copy migration.
Reversal trigger: If new-stack evaluation shows rebuild cost outweighs benefit, or a chosen CMS/host can't meet bilingual EN/ZH or low-cost requirements, fall back to iterating the current Next.js site.
