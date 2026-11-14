# Project State
<!-- Cold-start handoff. Keep under ~600 words. Website work only. -->

## Status, 2026-11-15 China time

The approved positioning changes are built and deployed to previews only on branch `site/positioning-2026-11` in `C:/Users/rskrn/Desktop/gesedge-wt-sitefix`. The branch starts from local `redo/site` at `2bb955c`. The main checkout remains on `redo/site`. Nothing was pushed or merged, and production was not deployed.

Previews:
- https://gesedge-preview.rskrny.workers.dev
- https://huanqiao-preview.rskrny.workers.dev

The English home and services page now address US importers and distributors buying from Asia. Email triage remains the main proof. China supplier support is visible on the home page. Services adds a company website offer with a fixed quote after a 30-minute call.

The unsupported classification percentage and sales test counts were removed from English and Chinese case copy. Both factory pages show setup ¥19,800, minimum outreach ¥28,800, combined ¥48,600 and quarterly outreach prepayment ¥14,400. Cross-site audience, language and factory contact links preserve the intended buyer context. The exporter English email option is a visible underlined link.

Recurring support and supplier-retainer boundaries are visibly proposed. `CHANGES.md` lists every new commitment and the two factory policies that remain unconfirmed. No standalone setup policy or bonus rate was invented.

## Validation

Both preview builds pass. Both existing Worker test files pass, with no skips. All 20 built pages pass local link, anchor and preview noindex checks. All 40 page/width captures pass at 390 and 1440 pixels, with no overflow or missing images. Primary changed pages and all page folds were visually inspected. All 22 visible-text action checks pass. Fourteen before/after action screenshot pairs are saved. Hero playback, reduced motion, pause and H.264 fallbacks pass on both previews.

English no-ai-slop edit and detect passed, followed by independent fidelity review. Every changed Chinese value was reviewed via the requested DeepSeek Flash command, with qu-ai-wei and lieflat checks. Detail: `.ai/deliverables/site-positioning-2026-11-15-qa.md`. Raw evidence and screenshots: `C:/tmp/sitefix/` and `C:/tmp/sitefix/shots/`.

Contact-form fix `29ecba8` is an ancestor and its Worker files and production configs remain byte-identical. Preview builds use `PREVIEW=1`, `wrangler.en.jsonc` and `wrangler.zh.jsonc`. Deploy staging runs outside the repo to avoid Wrangler changing package files.

## Next action and constraints

Review the preview and `CHANGES.md` proposals. Production requires Ryan's explicit go. `main` auto-deploys gesedge.com. Never push or merge there without approval. Chinese production uses a separate manual deploy. Both sites' current production state remains unchanged.

The public repo must contain no private business plans or unapproved client identities. Business administration belongs in the parent folder's `.ai/STATE.md`. Existing sample audit remains hidden until it exists. The personal WeChat QR remains in place pending a company QR. The Gmail never-spam filter status is unverified.
