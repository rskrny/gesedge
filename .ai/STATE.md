# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status (2026-10-08)
- **gesedge.com is LIVE on the redo** since 2026-10-08 04:34 UTC (PRs #3 + #4 into `main`; Workers Builds on Worker
  `gesedge`: build `node scripts/build.mjs en`, deploy `npx wrangler deploy`). Astro static, A+B design, animated
  Blender logo hero, gated English copy. Smoke test passed (pages, old-URL 301s, www→apex, headers, video 206,
  form email to Gmail inbox, no console errors desktop/phone).
- **Rollback:** dashboard → Workers → gesedge → Deployments → roll back to an earlier redo version. The legacy
  Next.js version (`88f06611`) depended on Supabase and is no longer a valid rollback target.
- `main` now = the redo. Every push to `main` deploys production. `redo/site` is kept in sync with `main`.
- **Chinese site not live.** Preview only: https://huanqiao-preview.rskrny.workers.dev. EN preview:
  https://gesedge-preview.rskrny.workers.dev (noindex; set `PREVIEW=1` when building for it).

## Next actions
1. Ryan: look at gesedge.com on a real iPhone and in WeChat (untested there; poster = flat logo if autoplay is blocked).
2. **No Supabase, no Vercel (Ryan, 2026-10-08).** GES no longer touches either: form copies live in Workers KV
   (`MESSAGES`: prod 8088904e…, previews 32e3fb81…; keys auto-delete after 730 days). GES data exported to
   `../business/supabase-export-2026-10-08/`. The Supabase project is shared with the Bloodline charter booking system
   (live client), so it stays; only the GES tables go. Bloodline and other client sites still on Vercel/Supabase =
   separate migration if Ryan wants it. Ask Ryan before deleting `ges-refboard`.
3. ZH launch after Kenny: all Chinese copy in `src/zh/copy.ts` (gate: Kenny → qu-ai-wei → lieflat → Kimi),
   WeCom QR + 获客链接, sample audit (becomes the ZH proof band under the joint hero), his name in characters;
   then Worker `huanqiao` + domain, flip `ZH_LIVE`.

## Open questions / constraints
- Client names off until each client approves; repo is PUBLIC (no client names, revenue, Ryan's email,
  headshots in git). Older planning docs already on GitHub name clients — scrubbing is Ryan's call.
- About photo: not yet (Ryan). Test emails "Smoke test (Claude)" / "KV test (Claude)" in Gmail are safe to delete.
- Emailed copies of form messages in Ryan's mailbox are not auto-deleted at 24 months (the privacy notice says
  messages are deleted then); KV copies are.
- Not taken (new copy needs the gate + Ryan): "Good fit / Not a fit" block; "Start with one workflow review" line.

## Ops gotchas
- Node/npm from PowerShell; Git Bash for curl/python (`MSYS_NO_PATHCONV=1` for API paths). Ryan's proxy:
  `curl --noproxy "*"`. Python can't read Git Bash `/c/...` paths; use `C:/...`.
- **Lockfile:** regenerate on a clean tree (`rm -rf node_modules package-lock.json && npm install`), else it records
  only Windows optional deps and Workers Builds' Linux `npm ci` fails. Real check: Docker `node:24` + npm 10.9.2
  (`PATH` needs `/c/Program Files/Docker/Docker/resources/bin`).
- `main` needs 1 review; Ryan's account merges with `gh pr merge --admin`.
- Form mail: `SMTP_PASS` (website@gesedge.com, rotated 2026-10-08 via Purelymail API, value stored nowhere) on all
  three Workers. Rotate again with `C:/tmp/ges-anim/rotate_smtp.py`.
- www→apex = zone Redirect Rule "www.gesedge.com to gesedge.com" (301, keeps path + query).
- Workers static assets ignore Range → `worker/ranged.js` serves `/media/*` (test: `node worker/ranged.test.mjs`);
  `_headers` doesn't apply on `run_worker_first` paths. Trailing-slash redirects are 307 unless listed in `_redirects`.
- Paseo browser on the Cloudflare dashboard: `fill`/Ctrl+A don't reach React inputs; set values with
  `browser_evaluate` (native value setter + `input` event), then Save.
- Screenshots: `C:/tmp/ges-shots/shoot.py <dist> <pages> 1440,390` (`PFX` prefixes names). Headless page screenshots
  show only the video poster; sample frames via canvas (`C:/tmp/ges-anim/qa_play.py`).
- Logo animation: edit `.ai/deliverables/logo-anim/joint_anim.py`, render
  `blender -b -P joint_anim.py -- --out C:/tmp/ges-anim/frames --anim --res 800 --samples 96` (~25 min), then
  `sh .ai/deliverables/logo-anim/encode.sh C:/tmp/ges-anim/frames public/media`.
- Codex: `codex exec --skip-git-repo-check -s read-only --image a.png,b.png < prompt.md`. Kimi CLI quota → Kimi
  K2.6 via SiliconFlow (`C:/tmp/ges-review/ask.py`). Qwen3-VL reviews unreliable.

## Handoff
gesedge.com is live from `main`. Next: Next actions 1–3. Design source of truth: `DESIGN.md`.
