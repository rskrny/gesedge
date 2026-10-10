# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status (2026-10-10)
- 2026-10-10: PR #10 live (verified): dovetail favicon.ico + favicon.svg?v=2 (old Vercel globe was cached at
  /favicon.svg), apple-touch-icon, og/share images re-rendered without banned tells. `scripts/brand-assets.py`
  regenerates them. Square logo `brand/logo/ges-logo-square-1024.png` sent to Ryan on Lark (lark-cli bot DM).
- **gesedge.com is LIVE on the redo** (Astro static on Cloudflare Workers, Worker `gesedge`). Pushes to `main`
  auto-deploy (Workers Builds: `node scripts/build.mjs en` / `npx wrangler deploy`). `redo/site` = working branch,
  identical to `main`. Last deploy: PR #8 (anti-AI pass); smoke test and media check passed.
- Design: Unbounded + IBM Plex Sans only, animated Blender logo hero, real screenshots of all three systems.
  `DESIGN.md` is binding, including the AI-tell ban list (§11).
- Form: email via Purelymail (`SMTP_PASS`) + a copy in Workers KV `MESSAGES` (auto-deletes after 730 days).
  **No Supabase, no Vercel** (Ryan, 2026-10-08).
- **Chinese site not live.** Previews (noindex; build with `PREVIEW=1`, deploy `-c wrangler.<en|zh>.jsonc`):
  https://gesedge-preview.rskrny.workers.dev · https://huanqiao-preview.rskrny.workers.dev

## Next actions
1. Ryan: check gesedge.com on a real iPhone and in WeChat (untested; the poster is the flat logo if autoplay fails).
2. Ryan decides: delete Vercel project `gesedge` (old site still public at gesedge.vercel.app); drop the dormant GES
   Supabase tables (declined at the prompt; exported to `../business/supabase-export-2026-10-08/`); delete Worker
   `ges-refboard`; rename services (Codex's idea; names are Ryan-approved, so ask).
3. **Both sites LIVE (2026-10-10):** huanqiao.gesedge.com = Worker `huanqiao` (`wrangler.huanqiao.jsonc`, custom
   domain; NOT on Workers Builds: after merging zh changes run `node scripts/build.mjs zh && npx wrangler deploy -c
   wrangler.huanqiao.jsonc`). Contact = Ryan's personal WeChat QR (stopgap; swap for a 成都寰桥 WeCom 联系我 QR +
   获客链接 later). Open: Kenny reads the live site; sample report (`SAMPLE_READY`); mainland speed/ICP path.
   Rerun `python scripts/subset-zh.py` after any Chinese text change; test forms with Playwright (curl on Windows
   mangles Chinese). Site emails land in Gmail's Updates tab: Ryan should add a filter to Primary.
4. **Next: marketing and outreach.** PartnerStack waits on Ryan's login (Paseo's browser runs only in the desktop
   app, so the iPhone can't use it).

## Open questions / constraints
- Repo is PUBLIC: no client names, revenue, Ryan's email, headshots. Client names off until each approves (`name`
  in `src/en/work.ts`). No About photo yet.
- The Supabase project also runs the live Bloodline booking system: never delete it. Moving Bloodline and other
  client sites off Vercel/Supabase is a separate job if Ryan wants it.
- Emailed form copies aren't auto-deleted at 24 months (KV copies are). Gmail test messages "Smoke test (Claude)"
  and "KV test (Claude)" are safe to delete.

## Ops gotchas
- Node/npm from PowerShell; Git Bash for curl/python (`MSYS_NO_PATHCONV=1` for API paths; Python wants `C:/...`).
  Ryan's proxy: `curl --noproxy "*"`.
- QA in repo: `scripts/qa/shoot.py` (1440/390 shots), `scripts/qa/media.py <dist|url>` (hero video, reduced motion,
  pause, H.264), `scripts/qa/smoke.sh` (live). Headless full-page shots show only the video poster and miss lazy
  images; check those in a scrolled viewport.
- **Before Ryan sees any page:** anti-AI audit (UI Finish-Gate Reviewer agent + Codex with screenshots + Kimi on
  copy) and `no-ai-slop` on every new English line. Fix flagged tells; never keep one because it passed before.
- Lockfile: regenerate on a clean tree only; verify in Docker `node:24` with npm 10.9.2 (`npm ci` + build; `PATH`
  needs `/c/Program Files/Docker/Docker/resources/bin`). A Windows-only lockfile broke the first prod build.
- `main` needs 1 review: `gh pr merge --admin`. Rollback: dashboard → gesedge → Deployments.
- Mail password: `python ../business/ops/rotate_smtp.py` (reads `C:/tmp/abr_tokens.txt`, PM=...; sets all three
  Workers). www→apex = zone Redirect Rule. Static assets ignore Range → `worker/ranged.js` (`node
  worker/ranged.test.mjs`). No-slash URLs get 307 unless listed in `src/en/_redirects`.
- Cloudflare dashboard via Paseo browser (Ryan logs in): `fill`/Ctrl+A miss React inputs; use `browser_evaluate`
  (native value setter + `input` event), then Save. The wrangler token can't edit Redirect Rules or Builds.
- Logo animation: `.ai/deliverables/logo-anim/joint_anim.py` (Blender, ~25 min; `--range a,b` partial), then
  `encode.sh` there → `public/media`.
- Consults: `codex exec --skip-git-repo-check -s read-only --image a.png,b.png < prompt.md`; if Kimi CLI is out of
  quota, `../business/ops/ask.py` (SiliconFlow Kimi K2.6 / DeepSeek V4). Qwen3-VL reviews are unreliable.

## Handoff
Read `AGENTS.md`, this file, then `DESIGN.md` before any visual or copy work. Start at Next actions.
