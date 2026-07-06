# Igloo Study — next-session brief (website design)
<!-- Runway for the next session. Ryan's directive (2026-07-06): "make it actually look more like
     igloo.inc; implement those complicated yet impressive animations; clone features of that website."
     Identity is paused; the logo is parked. This session is about BUILDING the immersive site. -->

## Goal
Move from identity to BUILD. Study igloo.inc, catalog its signature interaction techniques, map each to our
stack, then prototype ONE signature moment (the hero) and verify it. **"Clone" = replicate the TECHNIQUES /
interaction patterns, with our OWN content, copy, and assets** — not their proprietary 3D models or copy.

## Why igloo.inc (the north star)
Already our #1 immersive exemplar (`design-references.md`): scroll-as-camera WebGL, one continuous lit 3D
scene, intro/loader as a brand moment, scene-to-scene transitions. It's the ceiling for "these people build
complex things" — which is exactly GES's thesis. Ryan wants the site to feel like this.

## Step 1 — Catalog (do first, on the LIVE site)
Browse https://igloo.inc/ and capture, with notes + screenshots, how each behaves and (where readable) is built:
- [ ] Loader / intro sequence — what assembles, timing, how it hands off to the page.
- [ ] Hero — the lit 3D/WebGL scene: camera, lighting, materials, bloom/postprocessing.
- [ ] Scroll behavior — scroll-as-camera vs scroll-triggered scenes; smoothing (Lenis-like?).
- [ ] Scene-to-scene transitions — how sections morph/cut; continuity of the 3D world.
- [ ] Cursor / pointer reactivity.
- [ ] Typography — how text sits IN or OVER the 3D space (SDF text in canvas? DOM over canvas?).
- [ ] Performance approach — poster fallbacks, viewport gating, tiering, mobile/reduced-motion behavior.
- [ ] Sound / other signature touches.
Tools: `/browse` (gstack) or WebFetch; read their JS/network where feasible. NOTE: igloo.inc is heavy WebGL —
text scraping reveals little; rely on the browser + screenshots. Use the render→vision pipeline for our captures.

## Step 2 — Map each technique to our stack
For each captured technique decide: **clone / adapt / cut** (performance). Our tools:
- Astro + React islands (islands ONLY where interactivity/3D is needed — keep the DOM near-empty like the exemplars).
- React Three Fiber + drei + @react-three/postprocessing (Bloom) — the lit scene + material + bloom.
- GSAP (+ ScrollTrigger / Flip) + Lenis — smooth scroll / scroll-as-camera / section transitions.
- @paper-design/shaders-react — warm→cool mesh-gradient backdrops.
- Salvage: `WireframeGlobe` scroll-morph rig + `HeroScene` R3F scene from the old repo (starting points).

## Step 3 — Prototype ONE signature moment first
Recommend the **HERO**: a single lit WebGL scene + scroll-as-camera + loader→hero handoff. Nail it, verify via
the render→vision pipeline, THEN replicate the pattern across sections. Do NOT attempt the whole immersive site
in one pass — prove the bar with one moment, then expand.

## Cautions (Truth / Nuance)
- **Performance is the real risk** (PROJECT.md): igloo-level WebGL can crash weak devices. Engineer poster-first,
  viewport-gated, tier-down, reduced-motion from the START. "Impressive" must not mean "crashes."
- **Scope:** an igloo-grade site is a large build. Sequence it (one moment → IA → CMS); don't boil the ocean.
- **"Clone features" = techniques/patterns, not their assets/content.** Build original assets + copy.
- **Split:** Shiying owns server/Strapi; Ryan + AI own the frontend. Keep the frontend islands lean.

## Then
Hero proven → build the IA (Home / Projects / Services / Blog / About / Contact) → DESIGN.md tokens → wire Strapi.
Revisit the LOGO after the site's visual language exists (the site may inform the mark).
