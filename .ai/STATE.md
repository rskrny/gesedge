# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status
**Design system LOCKED — root `DESIGN.md` is now the design constitution. Read it before any
visual/copy/motion work.** After Ryan's critique of hero v0 ("okay concept, generic execution;
igloo still 100x better") an 8-question creative-director session + two research briefs locked:
**awards register** · **world = THE CROSSING** (night sea: warm West harbor → glass-fiber bridge
→ cool East city glow; passing ship; packets of light are the work) · **type = Unbounded + IBM
Plex Mono** (Ryan's F16 pick recommitted; Schibsted was my shipping error, now removed) ·
**numbered-ledger work section with prose** · **no client names anywhere** (industry descriptors
in copy, capability labels in scene HUD) · **pointer-fed beams + click = send-a-request** ·
theatrical loader now, sound phase 2 · **EN+ZH from the foundation**. Interim compliance is
applied and verified on the branch (fonts live, de-named, italic removed). The v0 scene remains
a placeholder until The Crossing world is built.

## Next actions (in order — DESIGN.md §14 pipeline)
1. **Greybox previs of The Crossing:** water plane, two shore masses, bridge line, camera
   spline (scroll=distance), untextured. Get the journey right before beauty. Leva tweak panel in.
2. **Atmosphere stack:** fog==bg hex, ground/water receiving faked glow, mist particulate,
   grain+vignette+micro-CA final pass. (Cheapest world-multiplier, per art-direction brief.)
3. **Material pass:** bridge cables = fresnel glass-fiber tubes w/ internal emissive packet
   core; DELETE always-on bloom → event bloom (arrival flares, speed→color); 0–1 lights total.
4. **Cast:** parametric harbor works (West) + arrival piers (East) + city-glow shaders + ship
   (ask Ryan to source: low-poly container ship GLB ≤15k tris; fallback = profile extrusion).
5. **Interaction:** pointer-fed flow (idle=dim), click/tap = send-a-request packet; Crossing
   Rule hairlines in DOM (warm→cool gradient rules + traveling packet on hover).
6. **HUD/type pass:** corner-anchored mono labels, scramble-on-change, DOM shares the grade.
7. **Work ledger rebuild** per DESIGN.md §9 (needs Goldie industry descriptor from Ryan) +
   full copy rewrite under §10 voice law + **i18n scaffolding** (locale routing, en/zh files).
8. Loader overture (bridge draws itself) · PuHuiTi subset · poster regen from real scene ·
   full-scene vision critique on a real GPU · then swap-deploy discussion (approval required).

## Open questions (for Ryan)
- ZH copy review workflow with Shiying.
<!-- Resolved 2026-07-06: Goldie = device-lifecycle group (refurbishment/remarketing,
     goldiegroup.com) · ShopMyRoom named (own venture, shopmyroom.co.uk) · ship delivered. -->

## Assets
- **Ship:** `public/models/ship.glb` — 328KB (draco + 512 WebP), 28k tris (spec said ≤15k;
  kept higher to avoid hull holes — within budget). Raw 19MB Meshy original:
  `_source-assets/ship_meshy_original.glb`. Runtime draco-decode check still pending
  (happens in the previs build; drei useGLTF default decoder).
- Wallet CAD renders: `C:\tmp\capture-cad` (project pages later).

## Blockers
- gstack /browse daemon still broken (1.6.3 → 1.58.5 available): `/gstack-upgrade`. Workaround:
  headless Chrome (DOM/type only) + Claude preview tools; scene critique needs a real GPU.

## Go-live status (Ryan's call, 2026-07-06)
- **HOLD production until the punch list is done:** The Crossing world · ledger work section ·
  copy rewrite · 中文 · route/contact parity with the old site. Then swap with approval.
- **Preview of the branch is LIVE:** https://gesedge-50lgt7z0v-ryans-projects-4fd48889.vercel.app
  (login-protected; Ryan's Vercel account sees it directly). Verified 200 + correct content.
- **⚠ Production wiring facts:** Vercel project `gesedge` is pinned framework=**nextjs** (must
  flip to astro at swap time — `vercel.json` on the branch already declares astro) and **git
  integration auto-deploys main → gesedge.com**. NEVER push this branch's content to main until
  the swap is intended and approved. At swap: also plan redirects for old routes (/work, /about,
  /contact, case studies) and contact-form replacement.

## Ops notes
- **Ryan's system proxy breaks ALL localhost tooling when active.** `HTTP(S)_PROXY/ALL_PROXY =
  http://192.168.1.30:20170` with NO localhost exemption → dev-server requests get proxied and
  rejected 503 (curl, preview browser, headless Chrome alike). It masqueraded as a broken dev
  server for an hour on 2026-07-06. Workarounds: `curl --noproxy "*"`, headless Chrome
  `--no-proxy-server`; real fix = set `NO_PROXY=localhost,127.0.0.1,::1` system-wide (suggest to
  Ryan). Astro dev was healthy the whole time (200 in 33ms bypassed).
- Avoid npm install/uninstall while `astro dev` runs (caused real transient module-runner errors
  earlier same day); node_modules was precautionarily `npm ci` rebuilt — clean state now.

## Active context
- Branch `rebuild/astro-immersive`; main = legacy live site. **⚠ `deploy_vercel.bat` deploys the
  WORKING DIR — never run it on this branch without approval.**
- Debug: `?gfx=0|1|2[!]` tier force/lock · `?at=0..1` scroll jump. Dev: `npm run dev` :4321.
- Research evidence: `.ai/research/art-direction-brief.md` (bloom-as-event, 0–1 lights, fog==bg,
  <3MB budgets, previs-first) + `work-section-patterns.md` (ledger/prose patterns, basement
  pixel values) + `design-references.md` + `build-toolchain.md`.
- Scene code map: `src/islands/router-scene/` (RouterScene/Scene/Packets/routes/tiers/Effects) ·
  `src/scripts/scroll.ts` · `src/pages/index.astro` · tokens in `src/styles/tokens.css`.
- Palette unchanged: inks #08080c/#0d0d12 · stroke #ECE6D8 · warm #F0C896 · cool #9FB6D6;
  warm→cool = West→East = in→out. New bans (DESIGN.md §13): no italic-emphasis words, no card
  grids, no client names, no always-on bloom, no third typeface/hue.
- Logo still parked; the bridge world may seed the future mark.

## Recent changes
DESIGN.md written (world bible, type, Crossing Rule, ledger spec, voice law, perf contract) ·
research briefs persisted · Unbounded+mono live on branch · all client names removed from code ·
PROJECT.md audience register amended.

## Handoff
Resume: read DESIGN.md → work Next-actions top-down starting with the greybox previs. Do not
polish the v0 scene — it gets replaced by The Crossing.
