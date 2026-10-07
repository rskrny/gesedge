# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status
**Redo build starting (2026-10-06)** on branch `redo/site` (from `rebuild/astro-immersive`). The live site is
still the legacy Next.js app on `main`, served by the Cloudflare Worker `gesedge`. Interview Rounds 1–4 are
done (`.ai/research/redo-interview.md`), the spec is `.ai/research/redo-site-spec.md`, and the **Dovetail
identity is approved** (`brand/`). **`DESIGN.md` is the binding design law** (rewritten for the redo; the
July "Crossing" version is in `.ai/archive/`). Architecture: DECISIONS 2026-10-06 (Astro static, `SITE=en|zh`,
two Workers).

## Next actions
1. Build the lean launch on `redo/site`:
   - EN (gesedge.com): `/`, `/services`, `/work`, `/about`, `/contact`, `/exporters`, `/privacy`, 404.
   - ZH (huanqiao.gesedge.com): `/`, `/audit`, `/sample`, `/contact`, `/privacy`, 404. Chinese text =
     `[PLACEHOLDER]` until Kenny writes it.
   - Redirects for old URLs (spec §1).
2. Copy: English drafts → `no-ai-slop` (edit + detect) → Ryan edits for voice. Chinese via Kenny's gate.
3. Previews: `gesedge-preview` / `huanqiao-preview` on workers.dev (noindex) for Ryan.
4. Swap only with Ryan's explicit approval: switch Workers Builds on `gesedge` to the Astro build, add the
   `huanqiao.gesedge.com` Worker + DNS, then smoke-test.

## Open questions / blockers
- Client names (Goldie, Sullivan, Bloodline): built in, off until each client approves (Ryan not asking yet).
- Approval of the Everglory and C14 wording on About; Flipside on the site: yes or no.
- Kenny: WeCom (QR + 获客链接), his name in characters, all Chinese copy, the sample audit.
- Form email: needs a sending service (Resend, records on a subdomain only; never touch apex MX/SPF).
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
Factory audit ¥2,980, 5 working days, full credit toward a build within 60 days. Booking: cal.com/gesedge/30min.

## Handoff
`git switch redo/site` → read `DESIGN.md` → Next actions.
