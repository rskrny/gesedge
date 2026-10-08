# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status (2026-10-07, later session)
- **Live gesedge.com = legacy Next.js site** (Worker `gesedge`, auto-deployed from `main` by Workers Builds).
- **Redo = branch `redo/site`** (pushed; builds nowhere automatically): Astro static, `SITE=en|zh` build targets,
  two Workers. Previews (noindex), **restyled to the A+B design and redeployed today**:
  EN https://gesedge-preview.rskrny.workers.dev · ZH https://huanqiao-preview.rskrny.workers.dev
- **Design = comps A + B merged** (Ryan: "I really like A and B"): joint hero + coordinates strip (A), real-work
  proof band (B), services ledger (A); Plex Sans body, Plex Mono labels. DESIGN.md §3–7 current; reviewed by Codex,
  Kimi K2.6, DeepSeek V4.
- **Hero = the logo animated** (Ryan: "check the logo again, we need it animated"). The old SVG showed the joint
  dropping in vertically, which a dovetail can't do. Now a Blender render (`.ai/deliverables/logo-anim/`): face-on
  logo → 3/4 → tail slides out along its channel and locks back → face-on, 8 s loop, gap always open. AV1 + H.264,
  57–182 KB; poster = flat mark; reduced motion = still, no video fetched; pause button. Worker now serves
  `/media/*` with byte ranges (iOS Safari needs 206; static assets don't do it). Previews redeployed.
- **Awaiting Ryan's review of the restyled preview.** Nothing goes to production before his yes.

## Next actions
1. Ryan reviews the EN preview (desktop + phone). Apply his notes; re-shoot at 1440 + 390 before re-showing.
2. Then the EN swap, only with Ryan's explicit go: (a) `npx wrangler secret put SMTP_PASS -c wrangler.jsonc`
   (password not stored anywhere: reset website@gesedge.com in Purelymail admin, then update the secret on
   all three Workers) (b) zone Redirect Rule www.gesedge.com/* → https://gesedge.com/$1 301 (c) Workers Builds on
   `gesedge`: build `node scripts/build.mjs en`, deploy `npx wrangler deploy` (d) on `redo/site`:
   `git merge -s ours origin/main`, PR → main (e) smoke test; rollback = previous Worker version in dashboard.
3. ZH launch after Kenny: all Chinese copy in `src/zh/copy.ts` (gate: Kenny → qu-ai-wei → lieflat → Kimi),
   WeCom QR + 获客链接, sample audit (becomes the ZH proof band under the joint hero), his name in characters;
   then Worker `huanqiao` + domain, flip `ZH_LIVE`.

## Open questions / constraints
- Client names off until each client approves; repo is PUBLIC (no client names, revenue, Ryan's email,
  headshots in git). Older planning docs already on GitHub name clients — scrubbing is Ryan's call.
- About photo: not yet (Ryan). Old blog posts 301 → home. Delete Vercel project (ask Ryan). Remove
  `ges-refboard` Worker when reviews end. Google display name now "Ryan Kearney", no photo.
- Outside-model suggestions NOT taken (new copy needs the gate + Ryan): a "Good fit / Not a fit" block before
  the close; a "Start with one workflow review" line by the hero CTA (both Codex).

## Ops gotchas
- Node/npm from PowerShell; Git Bash for curl/python. Ryan's proxy: `curl --noproxy "*"`. Python can't read
  Git Bash `/c/...` paths; use `C:/...`.
- Screenshots: `C:/tmp/ges-shots/shoot.py <dist> <pages> 1440,390` (Playwright, real 390 viewport; set `PFX`
  to prefix names). Full-page captures can drop the below-fold screenshot image; check in a scrolled viewport.
- Codex: `codex exec --skip-git-repo-check -s read-only --image a.png,b.png < prompt.md` (prompt on stdin;
  `-i a -i b "prompt"` eats the prompt as an image). Kimi CLI hit its 5-hour quota today → use Kimi K2.6 via
  SiliconFlow (`Pro/moonshotai/Kimi-K2.6`); DeepSeek V4 and Qwen3-VL also there (`C:/tmp/ges-review/ask*.py`).
  Qwen3-VL-32B's visual review was mostly hallucinated; don't rely on it.
- Workers static assets: `_redirects`/`_headers` stop applying if `run_worker_first` covers a path (so
  `worker/ranged.js` sets /media headers itself). Static assets ignore Range → `worker/ranged.js` (test:
  `node worker/ranged.test.mjs`).
- Logo animation: edit `.ai/deliverables/logo-anim/joint_anim.py`, render
  `blender -b -P joint_anim.py -- --out C:/tmp/ges-anim/frames --anim --res 800 --samples 96` (~25 min, GTX 1650;
  `--range a,b` re-renders part), then `sh .ai/deliverables/logo-anim/encode.sh C:/tmp/ges-anim/frames public/media`.
  Headless page screenshots show only the poster; sample frames via canvas (`C:/tmp/ges-anim/qa_play.py`).

## Handoff
`git switch redo/site` → `DESIGN.md` is current → Next actions 1.
