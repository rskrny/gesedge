# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status (2026-10-07, end of session)
- **Live gesedge.com = legacy Next.js site** (Worker `gesedge`, auto-deployed from `main` by Workers Builds).
- **Redo = branch `redo/site`** (pushed; builds nowhere automatically): Astro static, `SITE=en|zh` build targets,
  two Workers. Works end to end on previews (noindex):
  EN https://gesedge-preview.rskrny.workers.dev · ZH https://huanqiao-preview.rskrny.workers.dev
- **BLOCKED ON DESIGN.** Ryan judged the preview "awful": a functional wireframe (mono body text, no hero object,
  muddy brown, one repeated section shape). Three homepage comps are up for him to pick:
  https://ges-refboard.rskrny.workers.dev/comps/ — **A joint object** (my pick) · **B real-work screenshot** ·
  **C meridians**. All use IBM Plex Sans for body, Plex Mono only for labels (a font change Ryan must OK).
  Comp source: `.ai/deliverables/comps/` (`comps.py`, `joint.py` = isometric exploded dovetail SVG).

## Next actions
1. Get Ryan's pick (A/B/C or a mix) → restyle the whole site to it (update `DESIGN.md` §4 fonts + layout,
   `src/shared/styles/base.css`, page templates). Visual QA against igloo/zolplay at 1440 + 390 px before
   showing him anything (see memory: functional ≠ finished).
2. Then the EN swap, only with Ryan's explicit go: (a) `npx wrangler secret put SMTP_PASS -c wrangler.jsonc`
   (password not stored anywhere: reset website@gesedge.com in Purelymail admin, then update the secret on
   all three Workers) (b) zone Redirect Rule www.gesedge.com/* → https://gesedge.com/$1 301 (c) Workers Builds on
   `gesedge`: build `node scripts/build.mjs en`, deploy `npx wrangler deploy` (d) on `redo/site`:
   `git merge -s ours origin/main`, PR → main (e) smoke test; rollback = previous Worker version in dashboard.
3. ZH launch after Kenny: all Chinese copy in `src/zh/copy.ts` (gate: Kenny → qu-ai-wei → lieflat → Kimi),
   WeCom QR + 获客链接, sample audit, his name in characters; then Worker `huanqiao` + domain, flip `ZH_LIVE`.

## Done this session (details: `.ai/research/redo-interview.md` Rounds 4b–6)
- Prices approved (website lines in interview doc). English copy gated: `.ai/deliverables/redo-copy-en.md`.
- Booking = Google Calendar appointment schedule on Ryan's account (link in `src/shared/site.ts`); cal.com
  deleted + Google access revoked. Ryan confirms/reschedules by email; his life isn't in Google — no sync.
- Form email = Worker SMTP → Purelymail as website@gesedge.com (secret `SMTP_PASS` on both previews), Supabase
  row as fallback. **Always set Reply-To** (without it, mail never reached Gmail). Verified EN + ZH.
- Work page: redacted real screenshots (`../business/redo-assets-private/redact.py`); share images og-en/og-zh.

## Open questions / constraints
- Client names off until each client approves; repo is PUBLIC (no client names, revenue, Ryan's email,
  headshots in git). Older planning docs already on GitHub name clients — scrubbing is Ryan's call.
- About photo: not yet (Ryan). Old blog posts 301 → home. Delete Vercel project (ask Ryan). Remove
  `ges-refboard` Worker when reviews end. Google display name now "Ryan Kearney", no photo.

## Ops gotchas
- Node/npm from PowerShell; Git Bash for curl/python. Ryan's proxy: `curl --noproxy "*"`. Headless Chrome min
  width ~500 px → check phones in a 390 px iframe. Paseo: Google pages block `evaluate` (use snapshot);
  tabs disconnect sometimes (open a new tab). Codex: `< /dev/null`; Kimi: `PYTHONIOENCODING=utf-8 PYTHONUTF8=1`.
- Workers static assets: `_redirects`/`_headers` stop applying if `run_worker_first` covers a path.

## Handoff
`git switch redo/site` → read `DESIGN.md` (needs update after the pick) → Next actions 1.
