# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status (2026-10-15, live-checked ~07:30 UTC)
- **LIVE on both sites** (PRs #12 and #13): operations systems for 货代/外贸 teams (ZH home, /cases/, EN /china/) and the
  **factory offer** (ZH /audit/ nav 海外开发, EN /exporters/): 诊断 ¥2,980 → 启动 ¥19,800 → 海外客户开发 ¥4,800/月 (6个月起,
  按季预付), no commission-only, first-order bonus only after a licence scope change. GES never checks a supplier 寰桥
  works for (/services/). Decisions: DECISIONS 2026-10-14 and the two 2026-10-15 entries.
- **Visa constraint:** Ryan's work permit (B, employer 寰桥) ends 2027-03-30; file renewal by 2027-02-28. 寰桥 needs real
  contracts/invoices by 2026-12-31 (authorities cross-match tax and social insurance for shell companies).
- **Contract pack (private):** `../business/contracts-2026-10-15/` (README there): 流程梳理协议, 软件开发合同, 保密协议,
  工厂服务合同 (Chinese .docx + English references) and the GES→寰桥 intercompany agreement. All reviewed by 2+ models,
  rendered and checked. Lawyer review before first signature; accountant questions listed in the README.
- **Prospects (private):** `../business/prospects-2026-10-15/寰桥_首批外联名单_2026-10-15.xlsx` (41 companies: 20 Chengdu/
  Chongqing forwarders, 21 Sichuan/Chongqing factories, ranked top 15). 企查查 blocks bots and 天眼查 needs login, so only 6
  registrations are verified.
- Research record (private): `../business/repositioning-2026-10-14/` (roundtables, market study, legal research rt-legal.md).
- Deploy paths: gesedge.com = push to `main`. huanqiao.gesedge.com = `node scripts/build.mjs zh` (PREVIEW unset) then
  `npx wrangler deploy -c wrangler.huanqiao.jsonc`. Previews: `PREVIEW=1` + `wrangler.en.jsonc` / `wrangler.zh.jsonc`.

## Next actions
1. **Ryan (visa-critical):** take the README's accountant questions to 寰桥's 代理记账 this week; sign the intercompany
   agreement once cleared so US retainer work is invoiced by 寰桥; file the free online scope change (brokerage line).
2. Outreach: verify the top-15 registrations (Ryan's 企查查/天眼查 login, ~10 min), then first-contact drafts (Ryan sends).
   Build a real work sample: an anonymised 诊断 on one prospect factory's public site (also unlocks `SAMPLE_READY`).
3. Before quoting any China systems lead: use the contract pack; validate demand with 3-5 ship-agent/forwarder calls.
4. Small fixes: ZH contact consent says "Ryan 和 Kenny" but the worker mails only Ryan; test a real form send and a
   phone WeChat add.
5. Ryan's call (raised, not changed): photo; "CTO of C14 Space" line; ">90%" sample basis; US data/AI-provider paragraph.
6. Carried: US plan "go"; 寰桥 WeCom QR; ICP path; Gmail filter; Supabase tables (fallback until ~2026-10-19); `ges-refboard`.

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
