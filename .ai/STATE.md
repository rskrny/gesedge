# Project State
<!-- Cold-start handoff. Keep within the state budget (600 words unless PROJECT.md sets `State budget: <n> words`). Status only: the routing table lives in AGENTS.md, and history and logs go to CHECKPOINTS.md or .ai/archive/. Fields, in order: Last updated · Status · Next actions · Backlog · Blockers / Open questions · Active context · Recent changes · Handoff. Drop any empty field except Last updated, Status, Next actions, and Handoff. When Backlog passes ~10 items, move it to .ai/BACKLOG.md and leave a one-line pointer. Re-read this file immediately before rewriting it — merge, never clobber. Only the orchestrating session writes this file. -->

Last updated: 2026-11-19 by Claude (Fable 5.2), project audit, cleanup and site readiness review

## Status
LIVE since 2026-11-15. PR #14 merged into main (`3a2cf7e`) on Ryan's go. gesedge.com Worker 869172d3 -> 290476f9,
huanqiao Worker 9758700a -> 011fac28. The "before" IDs are the rollback. Live re-check 2026-11-19 over HTTP: both sites
200, English h1 "AI systems for your email, orders and shipment status.", the ¥48,600 line on huanqiao /audit/, no
noindex, both `sitemap.xml` 200, www redirects to the apex. The preview Workers (gesedge-preview and huanqiao-preview
on rskrny.workers.dev) are up and carry noindex. Contact-form bot filter 29ecba8 is live. No website work is in
progress.

## Next actions
1. Gmail never-spam filter for website@: Ryan in Gmail, or an agent with his go. The 11-07 form audit found most form
   mail in Spam. A dated reminder sits in the parent register.
2. On Ryan's answer: publish factory policy items 8 and 9 (setup bought alone, first-order bonus). See `CHANGES.md`.
3. DONE 2026-11-20 on Ryan's go: food removed from the exclusion line (ZH /audit/ FAQ and EN /exporters/), 保健食品 stays
   out. Commit 13220b3, fonts subset rebuilt, both previews redeployed and checked over HTTP. Live only on his go.
4. On Ryan's go: apply the fix list from the 2026-11-19 readiness review. Verdict NOT READY against the bar: works and
   names the right customer, fails on ban-list layout hits, five copy lines, the phone header and no photo on About.
   Result and evidence: `../.ai/research/2026-11-19-site-readiness/SYNTHESIS.md`.

## Blockers / Open questions
- The personal WeChat QR stays until a company QR exists. The sample audit stays hidden until it exists.
- Delivery inside mainland China (ICP filing, speed from inside China) was never settled: DECISIONS 2026-10-05 and
  `.ai/research/hosting.md`.
- Reversal trigger still running: no paid factory setup by 2026-12-31 (DECISIONS 2026-10-15).

## Active context
- The checkout is on `redo/site`: origin/main plus local docs commits, not pushed. Local `main` equals origin/main.
  `main` auto-deploys gesedge.com on push, the Chinese site is a manual deploy, and every release needs Ryan's separate
  go. Steps: `.ai/runbooks/release.md`.
- This repo is public: no private business plans, no unapproved client identities. Business work belongs to the parent
  folder (AGENTS.md, "Business work started from this folder").
- Release QA record: `.ai/deliverables/site-positioning-2026-11-15-qa.md`. Raw evidence and screenshots are in
  `C:/tmp/sitefix/`, a temp folder.

## Recent changes
- 2026-11-19 cleanup. Framework upgraded to v2.4, old AGENTS.md kept in `.ai/archive/`. 14 stale local branches, 5
  worktrees and 1 stash removed after a full backup (`../archive/gesedge-git-backup-2026-11-19.bundle`), local `main`
  reset to origin/main. The release-record commit 4d74c3b was salvaged from the deleted positioning branch. The April
  `DEVELOPMENT_LOG.md` moved to `.ai/archive/`. PROJECT.md stack and identity lines corrected. Dead caches removed
  (`.next`, `.vercel`, `.dual-graph`).
- Remote branches on GitHub were not touched: chore/cloudflare-workers, claude/elegant-bartik,
  fix/huanqiao-chinese-name, rebuild/astro-immersive, redo/site, site/positioning-2026-11.

## Handoff
Nothing is running. All four Next actions wait on Ryan.
