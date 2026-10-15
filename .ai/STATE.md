# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status (2026-10-14, live-checked 18:47 UTC)
- **Repositioning built, on previews only; production unchanged.** Both sites now sell operations systems (shared inbox
  → tickets, quotes, document drafts, reports), one workflow at a time. Decision + rationale: DECISIONS 2026-10-14.
  Roundtable record (six outside seats + market research, private): `../business/repositioning-2026-10-14/`.
  - EN: H1 "We build AI systems for teams that spend hours a day sorting email."; "Your person in China" only on
    /services/; new **/china/** (systems for forwarders, ship agents, trading companies in China, RMB via 寰桥);
    /exporters/ kept as the website-review page; data FAQ on /services/.
  - ZH: home rebuilt (proof band with the email-triage screen, 5 example systems as 可以做, 4 steps with RMB prices,
    deployment/data terms, closing WeChat band); new **/cases/** (三个匿名案例, US clients); nav 案例/官网诊断/联系;
    the ¥2,980 audit lives on /audit/ only.
  - Gates passed: EN no-ai-slop edit + detect; ZH 3-model draft → Kimi merge → qu-ai-wei → lieflat → Codex + DeepSeek
    → Kimi "可以发布" (deltas re-read). Anti-AI design audit: Codex + finish-gate agent on both sites, fixes applied.
  - Previews: https://gesedge-preview.rskrny.workers.dev/ and https://huanqiao-preview.rskrny.workers.dev/ (noindex).
- **Live (unchanged):** gesedge.com = Worker `gesedge`, pushes to `main` auto-deploy. huanqiao.gesedge.com = Worker
  `huanqiao`, deploy by hand after merge: `node scripts/build.mjs zh` then `npx wrangler deploy -c wrangler.huanqiao.jsonc`.
- Chinese strings: `src/zh/copy.ts` (facts in its header). Contact = Ryan's personal WeChat QR. `SAMPLE_READY = false`.
- US outreach plan still awaiting Ryan's go: `../business/us-outreach-plan-2026-10-10.md`.

## Next actions
1. **Ryan decides:** go live with the repositioning, including the default RMB terms on the China pages (流程梳理
   ¥9,800 credited, builds from ¥60,000 fixed price, maintenance 15%/year, deployed on the client's server or mainland
   cloud in the client's name). On "go": merge PR #12 (`gh pr merge 12 --admin`), then the ZH deploy above, then
   `scripts/qa/smoke.sh` and a WeChat check. Market note: forwarder SaaS costs ¥3k–23k/yr, so builds need a reason
   SaaS can't do it (agent-office quotes, laycan, heavy overseas email); validate with 3–5 ship-agent/operator calls.
2. Open items the audits raised but this pass did not change (Ryan's call): no photo of Ryan anywhere; "CTO of C14
   Space" on /about reads as split attention to two seats; /services/ still mixes software with supplier visits; the
   ">90%" accuracy line has no published sample basis; a true data/model-provider paragraph for US buyers.
3. US plan "go" (domain name + postal address), carried from 2026-10-10.
4. Chinese follow-ups: sample report (`SAMPLE_READY`), 成都寰桥 WeCom QR, mainland speed/ICP (`.ai/research/hosting.md`).
5. Ryan's small jobs: Gmail filter for website@gesedge.com; check both sites on a real iPhone and in WeChat.
6. Carried: dormant GES Supabase tables (exported; the cloud project is a frozen fallback until ~2026-10-19 per the New
   Server project), Worker `ges-refboard`. Vercel project `gesedge` deleted 2026-10-14.

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
