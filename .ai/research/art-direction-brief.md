# Art Direction Brief — crossing from "diagram in a void" to "world" (2026-07-06)
<!-- Research agent output (igloo/lusion/activetheory/basement/unseen deconstruction).
     Evidence base for DESIGN.md §2/§7/§12/§14. Sources at bottom. -->

igloo.inc was built by **Abeto** (technical artists, game-dev + web-dev) with brand/3D by
**Bureaux**; Awwwards SOTD 7.92 + FWA. Principles distilled from their case study plus Lusion
(Edan Kwan, Codrops 2026), Active Theory (Hydra engine history), Unseen, basement.studio
(open-sourced repo), and the Windland case study.

## Principles
1. **One physically-motivated material is the whole ballgame.** igloo=ice, Lusion=cloth/marble,
   Unseen=pink architecture. The material IS the brand argument. Abstract primitives give the eye
   nothing to believe.
2. **Surface detail comes from a DCC pipeline, not noise in shaders.** igloo's ice was grown
   (Houdini+Blender crystal-growth, custom VDB compressor, "smaller than a typical website
   image"). Author rich → ship compressed (GLTF+DRACO ~7x, KTX2, 16-bit quantization).
   Procedural = variation systems only; Abeto warns procedural setup time is significant.
3. **Winners barely use real-time lights.** Windland: ZERO dynamic lights (GI baked to one
   2048² shadow texture). Lusion: exactly one real-time light — a point light following the
   cursor; everything else normals+AO+thickness+matcaps. Rule: 0–1 lights; bake/matcap/ramp/
   fresnel the rest (`color *= 1.0 - curvature * 0.25` style fakes).
4. **Bloom is an event, not a state.** Windland swaps passes (bloom night-only); igloo particles
   glow only while shifting shape, color maps to particle SPEED. Always-on full-scene bloom is
   the #1 generic-three.js tell. High threshold; flare on arrival/transformation/interaction.
5. **Atmosphere = a stack of cheap depth cues:** fog color == background color (geometry
   dissolves, never terminates) · ground plane receiving baked/faked glow · sparse particulate
   on layered fBM + curl noise (never linear drift) · DoF keyed to camera distance · final
   grain + chromatic aberration + vignette pass over EVERYTHING.
6. **Color temperature is a contract.** igloo ships ~two colors (#b6bac5 on #383e4e); basement
   grades particles via LUT in post so hue discipline is enforced in ONE place. One temperature,
   one accent, grade globally.
7. **Camera is authored, not orbital.** Greybox-previs the whole journey before beauty. Cameras
   ride authored splines (Unseen builds camera splines in Blender); scroll maps to distance
   along curve. Rotation freedom rationed (Lusion caps one scene at ~1.72°). Transitions masked
   by material events (frost dissolve + aberration + displacement).
8. **Easing has a house character.** power2.out/power3.inOut, 0.4–1.2s; scroll velocity feeds
   effect intensity (~`0.2 + |v| * 0.2`); nothing linear, including particles.
9. **igloo's type lives inside the renderer** (confirmed): all UI is WebGL/SDF; scramble works
   by swapping SDF atlas offsets — fixed glyph advance is why it reads monospaced. Spec: all-caps,
   thin, small tracked HUD labels, corner-anchored; "sci-fi title crawl × luxury ad." (Font
   family uncredited — it ships as a glyph atlas, not CSS.) Active Theory: MSDF atlases in
   workers; Unseen: troika-three-text.
10. **UI effects are shader effects.** If DOM text stays, it must share the grade (palette,
    grain overlay, easing) or the illusion splits into "poster laid over a canvas."
11. **Budgets are shockingly small — smallness is the craft.** Windland world < 2MB total.
    Lusion cloth sim = 220KB gz ArrayBuffer; VAT character 983KB desktop / 246KB mobile.
    basement: photo as 60k GL_POINTS, one draw call, data in four 256² textures (604KB).
    "You don't need to do everything real-time" — bake anything the user can't perturb.
12. **Performance tiering designed in:** runtime FPS measured during load; tiers drop post
    passes first; Windland targets 30fps floor down to weak devices.
13. **Interactivity = presence.** Something responds to the cursor at ALL times (Lusion's
    cursor light, Unseen's fluid ripples, igloo's hover halos). A world that ignores you is a
    screensaver.
14. **Restraint is subtractive and documented.** Winners cut features to hold coherence. Kill
    list: mixed material families, >2 hues, always-on bloom, realtime shadow maps, default
    three.js lights/materials, DOM relayout per frame, anything serving no metaphor.
15. **Iteration infrastructure is part of art direction.** Live shader/texture reload (Abeto),
    every color/intensity in a GUI (Windland dat.GUI). You cannot tune fog/grade/easing by
    code-guess-refresh.

## Applied to our routing-tree scene
Diagnosis: geometry and motion but **no material, no ground, no air, no authored camera.**
1. **Material: "light in glass"** — GL lines → TubeGeometry glass-fiber shader (fresnel edge,
   internal emissive core carrying packets); core → sculpted/faceted crystal (source one GLTF,
   ~1–2MB, biggest payoff/hour) — *shader work days not weeks*.
2. **Build the room:** ground plane + pooled-glow decal (not a light), fog==bg hex, 2–5k dust
   motes one draw call, vignette+grain+micro-CA final pass, palette locked via LUT — *cheapest
   world-multiplier, pure shader/params*.
3. **Delete the lights; packets ARE the light.** Matcap/ramp core, fresnel tubes, bloom
   event-gated (arrival flares, speed→color) — *mostly deleting things*.
4. **Author the camera:** greybox previs → one spline, scroll=distance, power2/3 easing, cursor
   free-look capped to degrees, section jumps masked by material events; curl-noise packet
   drift + velocity aberration — *medium engineering, zero assets, highest perceived gain
   after material*.
5. **Type in the world's language:** fixed-advance caps micro-labels, corner-anchored HUD,
   scramble-on-change; troika in-canvas OR disciplined DOM sharing the grade — *light-medium*.

Sequence 2→3→1→4→5. Total shipped weight target: <3MB including a sculpted core.

## Sources
Awwwards igloo case study (Abeto) · webgpu.com igloo showcase · Awwwards Lusion case study ·
Codrops Lusion interview (2026-04) · Awwwards Unseen SOTM writeup · Active Theory Medium
engineering history · Codrops basement UntilLabs particles (2025-12) · Codrops Windland case
study (2022-04).
