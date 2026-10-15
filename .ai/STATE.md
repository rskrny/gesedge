# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status (2026-10-15, live-checked ~05:15 UTC)
- **Repositioning LIVE on both sites** (PR #12 merged as 7d9c0d3; gesedge.com via Workers Builds; huanqiao.gesedge.com
  deployed by hand, version 01487abb). Both sites sell operations systems (shared inbox → tickets, quotes, document
  drafts, reports), one workflow at a time. Decision: DECISIONS 2026-10-14 + 2026-10-15. Private record (six-seat
  roundtable, market research, go-live reviews): `../business/repositioning-2026-10-14/`.
  - EN: new H1; "Your person in China" only on /services/; **/china/** (RMB offer via 寰桥); /exporters/ kept.
  - ZH: home = systems for 货代/外贸 teams (proof band, 可以做 examples, 4 steps with prices, terms, closing band);
    **/cases/**; nav 案例/官网诊断/联系; audit on /audit/ only.
  - China terms Ryan approved 2026-10-15: 流程梳理 ¥9,800 credited, builds from ¥60,000 fixed price with written
    scope-change pricing, parallel run bounded by contract, maintenance 15%/yr, client's server or mainland cloud.
  - Checks: smoke.sh pass; live pages 200, no noindex, no preview links; live screenshots 1440/390 viewed, no
    overflow, all images load. Not checked: real iPhone, WeChat in-app browser, form delivery (worker unchanged).
- Deploy paths: gesedge.com = push to `main`. huanqiao.gesedge.com = `node scripts/build.mjs zh` (PREVIEW unset) then
  `npx wrangler deploy -c wrangler.huanqiao.jsonc`. Previews: `PREVIEW=1` + `wrangler.en.jsonc` / `wrangler.zh.jsonc`.
- Chinese strings: `src/zh/copy.ts`. Contact = Ryan's personal WeChat QR. `SAMPLE_READY = false`.
- US outreach plan still awaiting Ryan's go: `../business/us-outreach-plan-2026-10-10.md`.

## Next actions
1. **Before quoting any China lead** (all four go-live reviewers): one-page ¥9,800 review spec (one workflow, ~3
   person-days, one revision), a Chinese build contract (scope cap ~20-25 person-days at ¥60k, 30/40/20/10 payments,
   auto-acceptance after 10 business days, maintenance = corrective only, business hours), an NDA, and a decision on
   whether China builds may call overseas AI APIs (PIPL). Confirm whether 寰桥 can issue 增值税专用发票.
2. Validate demand: 3-5 calls with ship agents or operators (forwarder SaaS is ¥3k-23k/yr; our angle is agent-office
   quotes with laycan, heavy overseas email, non-standard documents). A Chinese one-page sheet + first WeChat reply.
3. Small fixes: ZH contact consent says messages go to "Ryan 和 Kenny" but the worker mails only Ryan; test a real
   form send and a phone WeChat add; decide whether /audit/ stays in the nav (it draws on the same hours).
4. Ryan's call (raised, not changed): photo; "CTO of C14 Space" line; /services/ mixing software and supplier visits;
   ">90%" sample basis; a US data/AI-provider paragraph; a time limit on the review credit.
5. Carried: US plan "go" (domain + postal address); sample report; 寰桥 WeCom QR; ICP path; Gmail filter; dormant
   Supabase tables (frozen fallback until ~2026-10-19); Worker `ges-refboard`.

## Open questions / constraints
- Repo is PUBLIC: no client names, revenue, Ryan's email, headshots, or business plans. Private material lives in
  `../business/`. Client names stay off until each approves (`name` in `src/en/work.ts`).
- Unresolved before invoicing any China-side work: how the Wyoming LLC bills work done in China (visa, tax, scope).
  寰桥's licence excludes import-export and purchasing agency.
- The Supabase project also runs Bloodline's live booking system: never delete it.

## Ops gotchas
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
