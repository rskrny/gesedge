# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status (2026-10-12, session closed; live-checked 11:31 UTC)
- **Both sites LIVE**, Astro static on Cloudflare Workers:
  - **gesedge.com** = Worker `gesedge`. Pushes to `main` auto-deploy (Workers Builds). Last deploy PR #11.
  - **huanqiao.gesedge.com** = Worker `huanqiao` (`wrangler.huanqiao.jsonc`, custom domain). NOT on Workers Builds:
    after merging zh changes run `node scripts/build.mjs zh` then `npx wrangler deploy -c wrangler.huanqiao.jsonc`.
  - `ZH_LIVE = true`: EN shows the 中文 switch, hreflang pairs, /exporters link to /audit/.
- Chinese copy: all strings in `src/zh/copy.ts` (gate and facts in its header; process in DECISIONS 2026-10-10).
  Contact = Ryan's personal WeChat QR (`public/images/wechat-qr.png`, decodes to the u.wechat.com link in
  `src/zh/pages/contact/index.astro`). Sample report hidden (`SAMPLE_READY = false` in `src/shared/site.ts`).
- Forms on both sites email ryan@gesedge.com via Purelymail and keep a KV copy (730-day TTL). Tested 2026-10-10.
- Brand: favicon.ico + favicon.svg?v=2, apple-touch-icon, og/share images, square logo; all from
  `scripts/brand-assets.py`. `DESIGN.md` is binding, including the AI-tell ban list (§11).
- **US outreach plan drafted, awaiting Ryan's go:** `../business/us-outreach-plan-2026-10-10.md` (private; PDF sent to
  his Lark). Research behind it: `../business/us-outreach-research-2026-10-10/`.

## Next actions
1. **Ryan to answer:** start the US plan? Needs (a) a name for the outreach domain (suggested `getgesedge.com`; cold
   email is never sent from gesedge.com) and (b) a postal address for the CAN-SPAM footer. On "go": set the domain up on
   Purelymail, export CBP's permitted-broker list, build the synthetic broker-inbox demo (Goldie re-skin), draft the
   four "[solution] for [buyer]" pages. Plan's Week 1 table has the order. Drafts only: Ryan sends every email.
2. PartnerStack: Ryan logs in at dash.partnerstack.com in the Paseo desktop browser (not possible from his iPhone),
   then browse and rank programs. Research says affiliate income is small; treat as an add-on.
3. Chinese site follow-ups: Kenny reads the live site; build the sample report, then `SAMPLE_READY = true`; later a
   成都寰桥 WeCom 联系我 QR + 获客链接 to replace the personal QR; mainland speed/ICP path is open
   (`.ai/research/hosting.md`).
4. Ryan's small jobs: Gmail filter `from:website@gesedge.com` → Categorize as Primary (site mail lands in Updates);
   delete the Claude test emails from website@gesedge.com; check both sites on a real iPhone and in WeChat.
5. Ryan decides (carried over): delete Vercel project `gesedge`, dormant GES Supabase tables (exported to
   `../business/`), Worker `ges-refboard`.

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
- QA: `scripts/qa/shoot.py` (1440/390), `scripts/qa/media.py`, `scripts/qa/smoke.sh` (live EN). Copy gate: EN via
  `no-ai-slop`; ZH via 3-model draft → qu-ai-wei → lieflat-less-ai-tone → Codex + DeepSeek review → Kimi read.
  Kimi misjudges today's date: ignore "future date" flags.
- `main` needs 1 review: `gh pr merge --admin`. Ask Ryan before merging to `main` (auto-deploys).
- Lark to Ryan: `lark-cli im +messages-send --user-id ou_2a8c4c887133f61e42ab89a45892110f --as bot` from PowerShell,
  files staged under `~/files/<dir>` (see memory `reference_lark_send_to_ryan`). Not the flipside bridge.

- More ops notes (lockfile, Cloudflare dashboard, SMTP rotation, model seats): `.ai/archive/ops-notes.md`.

## Handoff
Read `AGENTS.md`, this file, then `DESIGN.md` before any visual or copy work. Start at Next actions 1.
