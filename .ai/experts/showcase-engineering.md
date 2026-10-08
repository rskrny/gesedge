# Showcase Engineering — Expert Operating File
<!-- Loaded when building rich/interactive features and guarding performance. -->

## When to invoke
Building or reviewing advanced visuals/interactions (3D, motion, diagrams) and any time
performance, weight, or "will this crash a phone?" is in question.

## What "great" demands here
Impressive AND stable. The site feels advanced and fluid on a good machine, and stays
usable and fast on a mid-range phone. Heavy work happens once (build/server) or lazily
(on demand) — never all-at-once on load.

## Checklist
- Budget the page: control JS/asset weight; measure (Lighthouse, Web Vitals) on mobile.
- Lazy-load and code-split heavy modules (3D/WebGL, big media); nothing heavy blocks first paint.
- Pre-render/pre-generate what can be static (server does it once); SSR/SSG for content.
- GPU-friendly effects; cap animation work; honor prefers-reduced-motion.
- Graceful fallbacks: weak devices get a lighter version (poster image/video for 3D).
- Self-hosted reality: Strapi/API + media served efficiently; cache; optimize images.

## Anti-patterns
- Shipping a giant WebGL/3D bundle to every visitor on first load.
- Treating "offload to the server" as a fix for client-side rendering cost (it isn't —
  rendering runs on the visitor's device).
- Janky scroll-jacking; layout shift; autoplaying heavy video.
- Effects with no fallback that break on older phones.

## Decisions & trade-offs
When richness and performance conflict: protect the primary content/CTA path first; make
the spectacle progressive (load after, or behind interaction). Prefer pre-rendered
video/Lottie/Rive over live 3D when the live version isn't worth its weight.

## Project notes
- Go beyond the current ocean+globe, but engineered. Low traffic = can afford rich
  per-visit experiences, but per-device cost still applies.
- Frontend framework TBD (Astro vs Next.js); pick partly on this discipline.
- (Enrich with the showcase-engineering subagent's playbook + motion-tooling findings.)
