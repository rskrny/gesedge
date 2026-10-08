# Build Toolchain — research evidence (2026-06-29)
<!-- From the tooling research subagents. The actual repos/tools for the rebuild. -->

## Immersive engine (Astro + React islands)
- Lenis (darkroomengineering/lenis, MIT, ~14k★) — smooth-scroll backbone. `npm i lenis` (`lenis/react`).
- three + @react-three/fiber (MIT) — 3D as a `client:only="react"` island.
- @react-three/drei (MIT) — helpers (Environment, Float, materials, ScrollControls).
- @react-three/postprocessing + postprocessing (MIT) — EffectComposer + **Bloom** = the key lever for the
  dark, glowing look (push emissive colors >1 so Bloom catches them).
- gsap + ScrollTrigger (free incl. commercial) — scroll-driven timelines + camera.
- @14islands/r3f-scroll-rig (MIT, ~946★) — syncs 3D ↔ scrolled DOM, wraps Lenis. First reach for
  "3D synced to scroll." (Alt: wire Lenis → GSAP → R3F manually.)
- Optional: @theatre/core + @theatre/r3f (Apache-2.0) — GUI motion editor, bake to JSON; strip studio from prod.
- Reference architectures: Codrops "Astro + GSAP + Three + Barba" tutorial (canvas persists across pages);
  ianyimi/astro-r3f-starter (island wiring only — small repo, not a foundation).
- Multi-page canvas persistence: Astro view transitions or Barba.js/Swup. One-page showcase: skip.

## Animated gradient / shader background
- **PICK: @paper-design/shaders-react** (Apache-2.0, ~2.2k★) — zero-dependency WebGL (no three.js),
  TS-native, dark-friendly, full `colors={[...]}` control. Use `MeshGradient` + a faint
  `Dithering`/`GrainGradient` overlay. `client:visible` island + static CSS-gradient fallback for first
  paint / reduced-motion. ⚠️ pre-1.0 — PIN the version.
- Alternatives: @shadergradient/react (3D camera depth, but ships three.js — heavier); jordienr/whatamesh
  + thelevicole/stripe-gradient + sa3dany/wave-gradient (Stripe-minigl snippets, tiny, vanilla);
  @mesh-gradient/react (~17.5kB).
- AVOID: @johnn-e/react-mesh-gradient (archived Aug 2025, 2.39MB, 2–10GB RAM); "react-fluid-gradient" (not real).
- Premium, not vibe-coded: near-black base (#0A0A0F–#111) + 2–3 MUTED accents (one cool + one warm = a
  US↔China nod, e.g. deep indigo + restrained vermilion/gold); slow motion (speed ~0.1–0.2); grain/dither
  to kill banding; dark radial vignette behind headline text for contrast; cap DPR, pause off-screen.
- References: stripe.com (canonical mesh gradient), igloo.inc (ceiling), shaders.paper.design (read props live).

## Design system / tokens (generate, don't guess)
- Radix Colors (@radix-ui/colors, MIT) — 12-step scales w/ automatic dark + alpha + P3 variants. Steps:
  1–2 bg, 3–5 components, 6–8 borders, 9–10 solid (9 = brand), 11–12 text. Color foundation.
- Open Props (open-props, MIT) — gradient/shadow/easing/motion/size tokens as CSS vars.
- Utopia (utopia-core / fluid-type-scale.com, MIT) — fluid `clamp()` type + space scale (no breakpoint jumps).
- Output as CSS custom properties; SKIP Style Dictionary unless multi-platform. Tailwind v4: pour vars into
  `@theme` (OKLCH); tweakcn for shadcn chrome if used.

## Logo / brand-mark tooling
- Craft a custom mark + animate in code; do NOT ship AI-generated logos. (Igloo/Lusion marks are
  simple custom marks animated via WebGL/SVG/GSAP — not generated.)
- Animation: **GSAP** (greensock/GSAP, free incl. commercial since 2025) — **MorphSVG** (path morph,
  e.g. US↔China outline → globe), **DrawSVG** (self-drawing reveal), **MotionPath + ScrollTrigger**
  (scroll-driven transform). Use `@gsap/react` `useGSAP()` in the island. MIT alt: **anime.js v4**
  (`svg.morphTo`, `createDrawable`) + **flubber** (shape interpolation).
- 3D mark: three + @react-three/fiber + @react-three/drei (`<Text3D>`); **troika-three-text** (crisp
  SDF text in WebGL); Three.js `SVGLoader` + `ExtrudeGeometry` (flat SVG → extruded 3D). **Rive**
  (@rive-app/react-canvas) for an interactive mark (smallest payload).
- Concepting only (never ship raw): **StarVector** (joanrod/star-vector, Apache-2.0, text/image→SVG,
  runs locally on an NVIDIA GPU — 1B/8B), **OmniSVG** (~17–26GB VRAM), hosted **Recraft V4** (clean up
  excess anchor points). p5.js / SalamiVG for parametric concepting.
- AVOID: Looka/Brandmark/Tailor/LogoAI (template slop); random text→SVG converters (messy paths).

## Design-director review (2026-06-29) — full lens in .ai/experts/ui-design-review.md
- Audited the OLD shipped repo: the navy+cyan+magenta cliché is already live; fonts = Cormorant
  Garamond + Space Grotesk (blocklisted); a working scroll-morph globe rig (`WireframeGlobe`) exists
  and is salvageable; unused R3F `HeroScene` can be repurposed as the lit hero.
- Core fix: ONE lit shader/3D scene (not stacked flat layers); real type + kinetic headline; 2-hue
  grainy gradients; a mark with material. Old-site composite ≈ 4.5/10 (deficit = finish, not architecture).
- Type rec: foundry (ABC Diatype/Söhne, or Signifier + GT America) > open-source (Geist/Bricolage);
  drop Cormorant/Space Grotesk. Logo rec: "The Meridian" (continuous line: globe ↔ arc ↔ monogram).
