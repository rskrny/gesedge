# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status
**Rebuild in progress on branch `rebuild/astro-immersive`** (Astro 5 + React islands; `main`
still holds the legacy live Next.js site). This session locked the **design system — root
`DESIGN.md` is the binding constitution** (read it before any visual/copy/motion work): awards
register · world = **THE CROSSING** (night sea, warm West harbor → glass-fiber bridge → cool
East city; ship; light packets are the work) · Unbounded + IBM Plex Mono · numbered-ledger work
section · no client names (own ventures exempt) · pointer-fed beams, click = send-a-request ·
EN+中文 from the foundation. The **foundation build is live on a preview URL** (see Go-live);
its v0 hero/work section are placeholders that The Crossing replaces — do not polish them.

## Next actions (DESIGN.md §14 pipeline, in order)
1. **Greybox previs of The Crossing**: water plane, two shore masses, bridge spline, ship
   placed at scale (validates the GLB draco-decodes at runtime), camera spline scrubbed by
   scroll. Untextured. Add a live tweak panel (leva). Suggest building at a `/previs` route so
   the homepage stays intact.
2. Atmosphere stack: fog color == background hex, water/ground receiving faked glow, mist
   particulate, grain+vignette+micro-CA final pass.
3. Material pass: bridge = fresnel glass-fiber tubes with internal emissive packet core;
   REPLACE always-on bloom with event bloom; 0–1 real-time lights total.
4. Cast: parametric harbor works (West) + arrival piers (East) + city-glow + ship.
5. Interaction: pointer-fed flow, click/tap = send-a-request; Crossing-Rule hairlines in DOM.
6. HUD/type pass · 7. Ledger work section + full copy rewrite (voice law §10) + i18n
   scaffolding (en/zh) · 8. Loader overture, PuHuiTi subset, poster regen, real-GPU scene
   critique · 9. Production swap ONLY per Go-live below.

## Go-live (Ryan's decision 2026-07-06 — binding)
- **HOLD production** until: Crossing world · ledger · copy rewrite · 中文 · route/contact
  parity (+ redirects for old URLs). Then swap ONLY with Ryan's explicit approval.
- Preview (login-protected, Ryan's Vercel sees it): https://gesedge-50lgt7z0v-ryans-projects-4fd48889.vercel.app
- **⚠ DANGER:** Vercel git integration auto-deploys `main` → gesedge.com, and the project is
  pinned framework=nextjs (flip to astro at swap; branch `vercel.json` already declares astro).
  **Never push/merge this branch to `main` until the swap is approved.** `deploy_vercel.bat`
  deploys the WORKING DIR to production — never run it on this branch.

## Hosting (verified 2026-10-05) — full detail in `.ai/research/hosting.md`
- DNS is on **Cloudflare** (since 2026-10-01); the site is still served by **Vercel**. Email
  (Purelymail) and `sullivan.gesedge.com` (a separate Worker) live in the same zone: never touch.
- Vercel exit is planned but NOT started; move hosting once, with whichever codebase goes live.

## Ops gotchas (any provider)
- **Ryan's system proxy (`HTTP(S)_PROXY/ALL_PROXY=http://192.168.1.30:20170`, no localhost
  exemption) breaks ALL localhost tooling when his proxy client is on** — dev-server requests
  503. Use `curl --noproxy "*"`, headless Chrome `--no-proxy-server`. Suggest Ryan set
  `NO_PROXY=localhost,127.0.0.1,::1`.
- Don't run npm install/uninstall while `astro dev` runs. Dev: `npm run dev` → :4321;
  build: `npm run build`. Debug params: `?gfx=0|1|2` (append `!` locks tier), `?at=0..1`
  jumps scroll progress. Vision pipeline: headless Chrome screenshots work for DOM/type;
  the WebGL scene needs a real GPU/browser.

## Open questions
- ZH copy review workflow with Shiying (before anything bilingual ships).
- **2026-10-05, pending Ryan:** Shiying's GitHub username (collaborator invite) · what "include
  Chengdu Huanqiao" must cover and whether mainland visitors matter (drives hosting) · repo is
  PUBLIC with `.ai/` strategy docs + client names: keep, make private, or split.
- Legal CN name is **成都寰桥企业管理咨询服务有限公司**. Live `main` wrongly shows 环桥 in 4 strings
  (`src/lib/i18n.ts`); fix is on local branch `fix/huanqiao-chinese-name`, unpushed (merge = prod).

## Active context
- Scene code: `src/islands/router-scene/` · scroll/beats: `src/scripts/scroll.ts` · page:
  `src/pages/index.astro` · tokens: `src/styles/tokens.css`. Tiers 0/1/2 + runtime demotion.
- Assets: `public/models/ship.glb` (328KB draco, 28k tris; raw 19MB original in
  `_source-assets/`) · wallet CAD renders `C:\tmp\capture-cad` (project pages later).
- Evidence: `.ai/research/art-direction-brief.md` (bloom-as-event, 0–1 lights, fog==bg, <3MB,
  previs-first) · `work-section-patterns.md` (ledger/prose specs) · `design-references.md`.
- Palette: inks #08080c/#0d0d12 · stroke #ECE6D8 · warm #F0C896 · cool #9FB6D6 (warm→cool =
  West→East = in→out). Logo parked; bridge world may seed the mark. Goldie = device-lifecycle
  group · ShopMyRoom = named (Ryan's venture).

## Handoff
Resume: `git switch rebuild/astro-immersive` (branch is pushed to origin) → read `DESIGN.md`
→ start Next-action 1 (greybox previs). `main`'s STATE.md is a stub pointing here.
