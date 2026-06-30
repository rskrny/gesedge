# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status
Full redesign of gesedge.com — **logo corrected via vision critique; about to build for real.** Ran 3
vision-enabled critics on a rendered PNG of the picked mark: #4 "G-Bridge" reads as an open "C", bridge
absent. Pivoted to the **Beam** mark (globe crossed by a warm→cool great-circle span to West/East nodes),
re-rendered and verified it reads clean. Lockup rebalanced (Chinese smaller/lighter; swap to Alibaba
PuHuiTi). Awaiting Ryan's confirm (Beam vs the more-literal Span), then scaffold + build. Type = best
free. All-dark + light text + tasteful gradients, immersive. Stack: Astro + React islands, Strapi v5.

## Next actions
1. Confirm with Ryan: Beam mark (recommended) vs Span (more literally a bridge); lockup direction.
2. Scaffold a fresh Astro project + install the toolchain (Lenis, R3F, drei, postprocessing, GSAP,
   @paper-design/shaders-react, Radix Colors + Open Props + Utopia).
3. Build the real lit hero in the browser: Paper Shaders gradient + the Beam mark (bloom + scroll
   draw/dock) + free type (PuHuiTi for ZH). Verify via headless-Chrome screenshot + vision critique.
4. From there: DESIGN.md (tokens), then the rest of the site + Strapi.

## Open questions
- Mark: Beam (recommended) or Span (unmistakable bridge)?
- ZH face = Alibaba PuHuiTi 3.0 (top pick) vs HarmonyOS Sans SC; subset to used glyphs.
- Flipside: pull real episodes when building that section.

## Active context
- VISION-REVIEW PIPELINE (new, reusable): write design to HTML → headless Chrome screenshot
  (`chrome --headless=new --screenshot`, see scratchpad) → spawn vision agents to Read+critique the PNG.
  Use on every logo/design pass. Renders live in scratchpad (logo_review.png, logo_v2.png).
- Logo = Beam: globe + one warm→cool great-circle span to West(warm)/East(cool) nodes = 寰桥 "world
  bridge". Reads at favicon size. Built on 成都寰桥 = world bridge; GES = Global Edge.
- Lockup rule: pair Latin + CJK by OPTICAL match — CJK ~0.8em of Latin, one weight lighter, center
  optically (not baseline). GES = tracked caps Schibsted Grotesk ~0.12em/500. ZH = PuHuiTi (not Noto).
- Type: FREE. Direction: premium × cross-cultural × technically-advanced showcase, immersive. v1 US SMBs.
- Anti-patterns: stat-boxes; AI-default fonts; navy+cyan; weak/banded gradients; generic-globe / open-C mark.
- Toolchain: `.ai/research/build-toolchain.md`. Design rules: `.ai/experts/ui-design-review.md`.
  **Logo mark source + lockup spec: `.ai/research/logo-marks.md`** (Beam SVG + Span fallback + lockup).
- Salvage from old repo: `WireframeGlobe` scroll-morph rig, `HeroScene` R3F scene.
- Assets: wallet CAD `C:\tmp\capture-cad`; Flipside https://www.youtube.com/@theflipsidepodcast_official.
- Projects: Bloodline (flagship), Rogan Mooring, ShopMyRoom (Ryan CTO, C14-Space LTD).
- Server ~20GB/1TB ample. Shiying = backend/server; Ryan+AI = frontend.

## Recent changes
- Built a render→vision-critique pipeline; 3 vision critics reviewed the mark. Pivoted #4 (reads "C") →
  Beam (verified reads clean). Captured lockup-balance + ZH-font fixes. Logged in DECISIONS.

## Handoff
Mark corrected and verified by vision. Confirm Beam (vs Span) + lockup, then BUILD: scaffold Astro +
install + stand up the real lit hero, verifying each pass with the render→vision pipeline.
