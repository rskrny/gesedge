# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

> 2026-11-07: Company, tax and visa work does not belong in this public repo. It lives in the parent folder: read `../AGENTS.md` and `../.ai/STATE.md`.

## Status (2026-10-15, live-checked ~07:30 UTC)
- **LIVE on both sites** (PRs #12 and #13): operations systems for 货代/外贸 teams (ZH home, /cases/, EN /china/) and the
  **factory offer** (ZH /audit/ nav 海外开发, EN /exporters/): 诊断 ¥2,980 → 启动 ¥19,800 → 海外客户开发 ¥4,800/月 (6个月起,
  按季预付), no commission-only, first-order bonus only after a licence scope change. GES never checks a supplier 寰桥
  works for (/services/). Decisions: DECISIONS 2026-10-14 and the two 2026-10-15 entries.
- **Visa constraint:** Ryan's work permit (B, employer 寰桥) ends 2027-03-30; file renewal by 2027-02-28. Corrected 2026-11-07:
  no rule sets a 2026-12-31 contract deadline and no published Chengdu rule tests revenue. 寰桥 already has live client contracts
  (Pinbao, C-14 MSA). The real exposure is salary on paper vs tax records: `../.ai/STATE.md`, Work permit.
- **Contract pack (private):** `../business/contracts-2026-10-15/` (README there): 流程梳理协议, 软件开发合同, 保密协议,
  工厂服务合同 (Chinese .docx + English references) and the GES→寰桥 intercompany agreement. All reviewed by 2+ models,
  rendered and checked. Lawyer review before first signature; accountant questions listed in the README.
- **Prospects (private):** `../business/prospects-2026-10-15/寰桥_首批外联名单_2026-10-15.xlsx` (41 companies: 20 Chengdu/
  Chongqing forwarders, 21 Sichuan/Chongqing factories, ranked top 15). 企查查 blocks bots and 天眼查 needs login, so only 6
  registrations are verified.
- Research record (private): `../business/repositioning-2026-10-14/` (roundtables, market study, legal research rt-legal.md).
- Deploy paths: gesedge.com = push to `main`. huanqiao.gesedge.com = `node scripts/build.mjs zh` (PREVIEW unset) then
  `npx wrangler deploy -c wrangler.huanqiao.jsonc`. Previews: `PREVIEW=1` + `wrangler.en.jsonc` / `wrangler.zh.jsonc`.

- **2026-10-17, from the Weavecraft project:** WeaveCraft Digital (weavecraft.digital, Ryan + Kenny, JP/TW shop websites) now
  operates as a GES studio with 寰桥 as sister company, replacing C-14 (Weavecraft PR #5, awaiting Kenny's merge). Client money
  is planned to go to a Wise Business account in GES's name (Wise refuses USD details to US businesses with a China address).
  If Ryan does that work in Chengdu, the GES→寰桥 intercompany agreement can carry it so 寰桥 invoices GES (real revenue for
  the 2026-12-31 substance check). Detail: `Desktop/Weavecraft/.ai/DECISIONS.md` and `.ai/research/2026-10-17-payments/`.
- **2026-10-17:** Wyoming register (wyobiz, live): GES Active, Standing Tax Good, RA Good, filing 2024-001458123. Registered
  agent Northwest: renew by 2026-11-30 ($50, $100 in December). Company papers copied (originals untouched) to
  `../GES documents/` with INDEX.md (formation, EIN, governance, BofA, tax, contracts).

- **2026-11-07 form audit (KV read in full, Gmail API including Spam and Trash):** 14 outside messages since launch, 0 real
  leads: 12 from one bot ("Robertimipt", company "google"), 1 video-vendor pitch, 1 "Test" probe. KV is the record, not the inbox:
  Gmail filed 9 of 14 in Spam (a real lead can land there too), 3 reached the Inbox and 2 (Oct 15, Oct 28) reached no Gmail folder, cause unknown.
  Fix built, NOT yet on production (uncommitted, tested on preview): `worker/spam.js` bot rule (KV `spam/`, no email), Workers
  logs on (`observability` in both prod configs). Monday digest now has a WEBSITE FORM section (`../business/manager/reminders/digest.py`, live).
  Still needed from Ryan: go to deploy, and a Gmail filter "never send to Spam" for website@gesedge.com.
  Status 2026-11-10: still NOT deployed and NOT committed. Uncommitted on branch redo/site: worker/index.js, worker/spam.js,
  worker/spam.test.mjs, wrangler.jsonc, wrangler.huanqiao.jsonc (observability), .ai docs. Preview gesedge-preview runs the new
  worker (tested 11-07). Deploy = PR to main (auto-deploys gesedge.com) plus `npx wrangler deploy -c wrangler.huanqiao.jsonc`,
  only with Ryan's go. Whether Ryan created the Gmail filter is unknown (the prefilled filter tab was opened on the Mac 11-07).
  Business, tax and visa work from 11-07 to 11-10 is recorded in ../.ai/STATE.md (not in this public repo).

## Next actions
1. **Ryan (visa-critical):** take the README's accountant questions to 寰桥's 代理记账 this week; sign the intercompany
   agreement once cleared so US retainer work is invoiced by 寰桥; file the free online scope change (brokerage line).
2. Outreach: verify the top-15 registrations (Ryan's 企查查/天眼查 login, ~10 min), then first-contact drafts (Ryan sends).
   Build a real work sample: an anonymised 诊断 on one prospect factory's public site (also unlocks `SAMPLE_READY`).
3. Before quoting any China systems lead: use the contract pack; validate demand with 3-5 ship-agent/forwarder calls.
4. Small fixes: ZH contact consent says "Ryan 和 Kenny" but the worker mails only Ryan; test a phone WeChat add.
5. Ryan's call (raised, not changed): photo; "CTO of C14 Space" line; ">90%" sample basis; US data/AI-provider paragraph.
6. Carried: US plan "go"; 寰桥 WeCom QR; ICP path; Gmail filter; Supabase tables (fallback until ~2026-10-19); `ges-refboard`.

## Open questions / constraints
- Repo is PUBLIC: no client names, revenue, Ryan's email, headshots, or business plans. Private material lives in
  `../business/`. Client names stay off until each approves (`name` in `src/en/work.ts`).
- Unresolved before invoicing any China-side work: how the Wyoming LLC bills work done in China (visa, tax, scope).
  寰桥's licence excludes import-export and purchasing agency.
- The Supabase project also runs Bloodline's live booking system: never delete it.

## Ops gotchas
- 2026-10-31: `safepacific.gesedge.com` is a Cloudflare Worker custom domain (Worker `safepacific-preview`, static assets, noindex) serving the Safe Pacific site preview for Josh. Added by the safepacific project, which owns it. Detail: `Desktop/safepacific/.ai/STATE.md`, redeploy with `Desktop/safepacific/preview-deploy/deploy.sh`.
- Node/npm/wrangler/lark-cli from PowerShell; Git Bash for curl/python (`curl --noproxy "*"`). Write scripts with the
  Write tool: Git Bash heredocs broke twice this session.
- Chinese text: after ANY change rerun `python scripts/subset-zh.py` (font subsets) and rebuild. Test forms with
  Playwright: curl on Windows turns Chinese input into "????".
- QA: `scripts/qa/shoot.py` (1440/390; lazy images show blank in full-page shots, check scrolled), `scripts/qa/media.py`,
  `scripts/qa/smoke.sh` (live EN). Page weight: ZH home ~285 KB compressed at 1440 (budget 300). Copy gate: EN via
  `no-ai-slop`; ZH via 3-model draft → qu-ai-wei → lieflat-less-ai-tone → Codex + DeepSeek review → Kimi read.
- `main` needs 1 review: `gh pr merge --admin`. Ask Ryan before merging to `main` (auto-deploys).

- More ops notes (lockfile, Cloudflare dashboard, SMTP rotation, model seats): `.ai/archive/ops-notes.md`.

## Handoff
Read `AGENTS.md`, this file, then `DESIGN.md` before any visual or copy work. Start at Next actions 1.
