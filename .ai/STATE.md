# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status
**Redo v1 built and on preview (2026-10-06)**, branch `redo/site` (pushed; builds nowhere automatically).
- EN preview: https://gesedge-preview.rskrny.workers.dev · ZH preview: https://huanqiao-preview.rskrny.workers.dev
  (both noindex). Live gesedge.com is still the legacy Next.js app (Worker `gesedge`, deployed from `main`).
- English copy gated (no-ai-slop edit + Codex detect): `.ai/deliverables/redo-copy-en.md`. Chinese text is
  `[PLACEHOLDER]` in `src/zh/copy.ts` (one file for Kenny). Contact form tested end to end (Supabase row 5, archived).
- **`DESIGN.md` is the binding design law.** Architecture: DECISIONS 2026-10-06.

## How to build / deploy previews
- `npm run fonts` after any Chinese text change (needs full PuHuiTi in `../assets/fonts/puhuiti`, commit the woff2).
- PowerShell: `$env:PREVIEW='1'; node scripts/build.mjs en; npx wrangler@4 deploy -c wrangler.en.jsonc` (same for zh).
- Headless Chrome can't go below ~500 px wide: check phones with a 390 px iframe wrapper.

## Next actions
0. **DESIGN PASS FIRST (2026-10-07).** Ryan: the preview "looks awful" — it was a functional wireframe (mono body
   text, no hero object, muddy brown, one repeated section shape). Three homepage comps on
   https://ges-refboard.rskrny.workers.dev/comps/ (A joint object · B real-work screenshot · C meridians), all with
   IBM Plex Sans body + Plex Mono labels (@fontsource/ibm-plex-sans installed; needs Ryan's OK as a font change).
   Source: .ai/deliverables/comps/ (comps.py, joint.py). Restyle the whole site to the picked comp; NO swap before that.
1. **EN swap (needs Ryan's explicit go):**
   a. `npx wrangler secret put SMTP_PASS -c wrangler.jsonc` (value from the preview Workers' setup; ask Ryan to
      re-create via Purelymail if lost). b. Zone Redirect Rule www.gesedge.com/* → https://gesedge.com/$1 (301).
   c. Workers Builds on `gesedge`: build `node scripts/build.mjs en`, deploy `npx wrangler deploy`.
   d. On `redo/site`: `git merge -s ours origin/main` (keeps this tree, records main), PR → main (fast-forward).
   e. Smoke test gesedge.com (routes, redirects, form → Gmail, booking link, www 301). Rollback: Workers →
      gesedge → Deployments → previous version (the Next.js build).
2. ZH launch after Kenny's copy + WeCom: create Worker `huanqiao` (+ `huanqiao.gesedge.com`), SMTP_PASS secret,
   flip `ZH_LIVE` to true in `src/shared/site.ts`, rebuild both.
3. Later: About photo (Ryan not ready; headshots must stay out of git), the two old blog posts (301 → home now),
   client names once approved, booking-system screenshot once Bloodline is named.

## Open questions / blockers
- Client names (Goldie, Sullivan, Bloodline): built in, off until each client approves (Ryan not asking yet).
- Approval of the Everglory and C14 wording on About; Flipside on the site: yes or no.
- Kenny: WeCom (QR + 获客链接), his name in characters, all Chinese copy, the sample audit.
- PuHuiTi: confirm logo/trademark use with Alibaba before any trademark filing (web use is fine).
- Delete the Vercel project on/after 2026-10-07: ask Ryan first. Take down `ges-refboard` after review.

## Hosting (detail: `.ai/research/hosting.md`)
- DNS on Cloudflare. gesedge.com = Worker `gesedge` (Next.js + OpenNext), auto-deployed from `main` by
  Workers Builds. **Merging to `main` deploys production: ask Ryan first.** Other branches build nowhere.
- Same zone holds Purelymail email and `sullivan.gesedge.com` (separate Worker): never touch either.

## Ops gotchas
- Ryan's system proxy breaks localhost tooling: `curl --noproxy "*"`, Chrome `--no-proxy-server`.
- Run node/npm from PowerShell (Git Bash's cmd can't find node). Codex needs `< /dev/null`; Kimi needs
  `PYTHONIOENCODING=utf-8 PYTHONUTF8=1`.
- Repo is PUBLIC: no revenue, private client info, Ryan's email/home address, or headshot originals in git.
  Private notes: `../business/gesedge-redo-private-notes.md`, assets `../business/redo-assets-private/`.

## Prices (approved 2026-10-06, website lines)
AI operations pilot: review $2,500 (credited), builds from $15,000, support $750 or $1,500/mo · Owner's
dashboard: setup from $3,000, $750 or $1,500/mo · Your person in China: desk check $750, supplier visit +
memo $1,500 (Chengdu/Chongqing), other regions from $2,500 + travel, retainer from $1,500/mo (3-month min) ·
Factory audit ¥2,980, 5 working days, full credit toward a build within 60 days.

## Booking + form email (2026-10-07: no third-party services, Ryan's call)
- Booking = Google Calendar appointment schedule on rskrny@gmail.com ("Call with Ryan Kearney (Global Edge
  Strategies)", 30 min, Meet, daily 00:00–02:00 + 08:00–24:00 China time). Link in `src/shared/site.ts`. cal.com
  account deleted and its Google access revoked. Google name now "Ryan Kearney"; no profile photo (Ryan, 2026-10-07).
  Ryan keeps his real schedule outside Google: bookings land on his calendar and he confirms or proposes another
  time by email. Don't add calendar-sync or extra Google accounts.
- Form email = Worker SMTP to smtp.purelymail.com:465 as website@gesedge.com (mailbox created 2026-10-07;
  password only in the `SMTP_PASS` secret on both preview Workers; set it on production Workers at the swap).
  Both sites verified end to end into Gmail (2026-10-07). Gotcha: mail WITHOUT a Reply-To header was accepted by
  Purelymail (250) but never reached Gmail — Reply-To is now always set (ZH: website@). Supabase row is the fallback.

## Handoff
`git switch redo/site` → read `DESIGN.md` → Next actions. Client names appear in older planning docs already on
GitHub (`.ai/research/*`, PROJECT.md, DEVELOPMENT_LOG.md); scrubbing them is Ryan's call.
