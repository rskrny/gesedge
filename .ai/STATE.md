# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status
**The immersive rebuild is UNDERWAY and the hero v0 is BUILT + verified.** Branch
`rebuild/astro-immersive` replaces Next.js with **Astro 5 + React islands**; main still holds the
legacy live site. The hero is **"The Router"** — a lit WebGL routing tree (work flows in warm →
AI core decides → routed cool to 4 named endpoints: Goldie triage / ShopMyRoom / Wallet e-writer
R&D / Bloodline). Scroll-as-camera over 4 beats (wide → dive to core → bank along Goldie branch →
constellation) hands off to editorial sections. Verified in live preview: all beats, tier
fallbacks, 58fps with bloom, zero console errors, ~380KB gz JS. **Strapi is DROPPED from the
critical path** (Ryan delegated; see DECISIONS) — content will be Astro Content Collections, site
stays static on Vercel.

## Next actions
1. **Ryan eyeballs it on real GPU:** `npm run dev` → localhost:4321. Debug: `?gfx=2!` forces
   full tier (`0|1|2`, `!` locks), `?at=0..1` jumps to any scroll beat.
2. **Full-scene vision-critic pass on a real GPU** (headless SwiftShader can't run the scene;
   canvas export now works under `?gfx` via preserveDrawingBuffer). A typography-only critique
   ran (6.5/10 → fixes applied: CJK tracking zeroed, eyebrow deduped, italic gesture, sub-copy
   rewrite, warmer CTA). Its big open item → #3.
3. **Display typeface decision** (Ryan taste call): keep Schibsted Grotesk vs a characterful
   editorial face (critic suggested Tiempos/GT Alpina/PP Editorial New tier; free option
   Newsreader Display). One-line swap in tokens.css.
4. Generate the **tier-0 poster** from the real scene (replace placeholder SVG tree); subset
   **Alibaba PuHuiTi 3.0** for the 成都寰桥 lockup (system CJK is the current stand-in).
5. Beat-2 polish: packet-arrival burst at the Goldie endpoint; consider sound-off toggle later.
6. Remaining pages: project details (wallet CAD renders at `C:\tmp\capture-cad` — exploded views
   are showcase-grade), services, about, contact (form backend: Astro endpoint + existing
   Supabase vs mail relay — undecided), ZH locale, OG image, favicon refresh.
7. Deploy swap ONLY with Ryan's approval. **⚠ `deploy_vercel.bat` deploys the WORKING DIR
   (`vercel --prod`)** — do not run it while this branch is checked out until swap is intended.

## Open questions
- Goldie status chip says "Client system" — Ryan to confirm wording/status truthfulness.
- Tractor quote reworded to two sentences (anti-slop compliance) — OK with Ryan?
- Display face (#3). Contact form backend (#6).

## Blockers
- **gstack /browse daemon fails to start** (v1.6.3 vs 1.58.5 available). Workaround this session:
  headless Chrome direct (works for DOM/type; NOT for the WebGL scene) + Claude preview tools.
  Fix: `/gstack-upgrade` or `cd ~/.claude/skills/gstack && ./setup`.

## Active context
- **Files:** `src/islands/router-scene/` (RouterScene=tiering/canvas, Scene=rig+core+endpoints+
  lines, Packets=instanced flow, routes.ts=geometry+camera paths, tiers.ts=detection+config,
  Effects=lazy bloom) · `src/scripts/scroll.ts` (Lenis+beats+reveals+loader) · `src/pages/
  index.astro` (beats, sections, copy) · `src/styles/tokens.css` (palette/type tokens).
- Tiers: 0=poster+static beats (reduced-motion/no-WebGL/low-mem), 1=no bloom DPR1 56 packets
  (coarse pointer/low cores), 2=bloom DPR≤1.75 120 packets + parallax; runtime demotion via
  PerformanceMonitor; frameloop pauses off-view/off-tab.
- Palette unchanged (stroke #ECE6D8 · warm #F0C896 · cool #9FB6D6 · inks #08080c/#0d0d12/#1b1422).
  Type: Schibsted Grotesk Variable + IBM Plex Mono (fontsource, self-hosted). Warm→cool = in→out.
- Old Next site intact on `main`; salvage references gone from branch (git history keeps them).
- Vision pipeline for DOM/type: headless Chrome vs `http://localhost:4321` works; the SCENE needs
  a real GPU (preview tools or canvas export).

## Recent changes
Astro scaffold; Router hero scene + beats + editorial homepage; tier system; typography critique
fixes; production build green. Commits `bab764a` (feat) + this docs commit on the branch.

## Handoff
Resume: checkout `rebuild/astro-immersive`, `npm run dev`, walk the beats (`?at=`), then work
Next-actions top-down. Logo still parked (site language may inform it — the cage/core motif is
a candidate seed).
