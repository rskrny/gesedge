# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status
**Rebuild in progress on branch `rebuild/astro-immersive`** (Astro 5 + React islands; `main`
still holds the legacy live Next.js site). **Root `DESIGN.md` is the binding design
constitution** — read it before any visual/copy/motion work (world = THE CROSSING; Unbounded +
IBM Plex Mono; ledger work section; no client names; EN+中文 from the foundation). The
foundation build is on a preview URL; its v0 hero/work section are placeholders — don't polish.

## Next actions
0. **Now (2026-10-05): waiting on Kenny's HuanQiao site ideas** (Ryan's call). No rebuild deadline.
1. **Greybox previs of The Crossing** (rebuild stalled since 2026-07-06): water plane, two shore
   masses, bridge spline, ship at scale (validates draco GLB decode), scroll-scrubbed camera
   spline, untextured, leva tweak panel, at a `/previs` route so the homepage stays intact.
2. Then DESIGN.md §14 steps 2–9 in order (atmosphere → materials → cast → interaction → HUD/type
   → ledger + copy + en/zh → loader/poster/GPU critique → production swap per Go-live).

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
- **gesedge.com is LIVE ON CLOUDFLARE WORKERS (2026-10-05)** — worker `gesedge`, `main` = the
  Next.js site + OpenNext. Vercel kept as rollback until ≥2026-10-07 (Git disconnected), then
  delete the project. Rollback + Workers Builds settings in `hosting.md`.
- Deploys: merge to `main` → Cloudflare Workers Builds deploys automatically (connected
  2026-10-05; verified with the PR #1 deploy). Other branches don't build anywhere.

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
- **Developer Kenny** (GitHub `kawasakiakasei`) invited 2026-10-05 with write access (accept
  pending). Repo stays PUBLIC (Ryan). Ryan is waiting on Kenny's HuanQiao site ideas.
- **HuanQiao (2026-10-05):** angle = Chinese companies entering US/EU (FDE, branding, marketing,
  localization), then GEO/SEO. Hosting target = own mini server via Cloudflare Tunnel. OPEN: where
  the mini server sits; how mainland buyers get a fast + ICP-compliant path (see DECISIONS.md);
  whether the WFOE's registered 经营范围 covers the services the site will advertise.
- Legal CN name is **成都寰桥企业管理咨询服务有限公司**. Live `main` wrongly shows 环桥 in 4 strings
  (`src/lib/i18n.ts`) — FIXED + live 2026-10-05 (PR #1).

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
Resume: `git switch rebuild/astro-immersive` → read `DESIGN.md` → Next actions. GitHub's default
branch `main` (live Next.js) has NO pointer to this branch yet: local `main` holds an unpushed stub
STATE.md (pushing `main` redeploys production — ask Ryan first).
