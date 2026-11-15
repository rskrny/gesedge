# Project State
<!-- Cold-start handoff. Keep under ~600 words. Website work only. -->

## Status, 2026-11-15 China time

The approved positioning changes are built and deployed to previews only on branch `site/positioning-2026-11` in `C:/Users/rskrn/Desktop/gesedge-wt-sitefix`. The branch starts from local `redo/site` at `2bb955c`. The main checkout remains on `redo/site`. Nothing was pushed or merged, and production was not deployed.

Previews:
- https://gesedge-preview.rskrny.workers.dev
- https://huanqiao-preview.rskrny.workers.dev

The English home and services page now address US importers and distributors buying from Asia. Email triage remains the main proof. China supplier support is visible on the home page. Services adds a company website offer with a fixed quote after a 30-minute call.

The unsupported classification percentage and sales test counts were removed from English and Chinese case copy. Both factory pages show setup ¥19,800, minimum outreach ¥28,800, combined ¥48,600 and quarterly outreach prepayment ¥14,400. Cross-site audience, language and factory contact links preserve the intended buyer context. The exporter English email option is a visible underlined link.

Ryan approved CHANGES.md terms 1–7 as written on 2026-11-15. Home and services copy now presents those support, supplier-retainer and website terms as final. CHANGES.md records the approval. Items 8 and 9 remain unanswered. No standalone setup policy or bonus terms were added.

## Validation

Both preview builds pass. Both existing Worker test files pass, with no skips. All 20 built pages pass local link, anchor and preview noindex checks. All 40 page/width captures pass at 390 and 1440 pixels, with no overflow or missing images. Primary changed pages and all page folds were visually inspected. All 22 visible-text action checks pass. Fourteen before/after action screenshot pairs are saved. Hero playback, reduced motion, pause and H.264 fallbacks pass on both previews.

After approval, both builds, Worker tests and all 20 built-page link/noindex checks were rerun. Four fresh home/services renders were visually inspected, and all 26 visible-text clicks passed, including the renamed support links. Live preview response noindex checks passed. Preview versions: EN 5a030c1c-66b8-4486-8436-6c004c0a0597, ZH 68bbf351-4465-4870-afea-8df06e48840e.

English no-ai-slop edit and detect passed, followed by independent fidelity review. Every changed Chinese value was reviewed via the requested DeepSeek Flash command, with qu-ai-wei and lieflat checks. Detail: `.ai/deliverables/site-positioning-2026-11-15-qa.md`. Raw evidence and screenshots: `C:/tmp/sitefix/` and `C:/tmp/sitefix/shots/`.

Contact-form fix `29ecba8` is an ancestor and its Worker files and production configs remain byte-identical. Preview builds use `PREVIEW=1`, `wrangler.en.jsonc` and `wrangler.zh.jsonc`. Deploy staging runs outside the repo to avoid Wrangler changing package files.

## Next action and constraints

Production requires Ryan's separate explicit go. `C:/tmp/sitefix/DEPLOY_PLAN.md` gives the future feature-branch push, PR into main, English automatic build, Chinese manual deploy, rollback and marked TEST form-submission checks. None of those release actions were run. `main` auto-deploys gesedge.com. Both production sites remain unchanged.

The public repo must contain no private business plans or unapproved client identities. Business administration belongs in the parent folder's `.ai/STATE.md`. Existing sample audit remains hidden until it exists. The personal WeChat QR remains in place pending a company QR. The Gmail never-spam filter status is unverified.
