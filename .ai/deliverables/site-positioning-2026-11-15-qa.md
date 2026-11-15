# Positioning preview QA, 2026-11-15 China time

PASS for the scoped preview change. Production was not deployed. Ryan approved CHANGES.md terms 1–7 on 2026-11-15. The approval follow-up below supersedes the original proposal framing. Items 8 and 9 remain unanswered.

## Build and source checks

### Approval follow-up

Ryan approved CHANGES.md items 1–7 as written. Only proposal framing changed in English home and services copy. No Chinese sentence, price, boundary or commitment changed. Items 8 and 9 remain under Needs Ryan's confirmation without new policy.

- Both preview builds rerun: PASS, English 11 pages and Chinese 9 pages.
- Both Worker test files rerun: PASS, 2 passed, 0 failed, 0 skipped.
- All 20 built HTML pages rechecked for local links, assets, fragments and noindex: PASS.
- Newly captured home and services pages at 390 and 1440: PASS, 4 new page/width checks. Previous captures of unchanged pages were retained in the 40-entry aggregate, not rerun. All 4 new full-page screenshots and support-link landing screenshots were visually inspected.
- Visible-text browser clicks rerun: PASS, 22 original checks plus 4 checks for the renamed See support terms links, 26 total. All support clicks land on /services/#support and show Monthly support terms. Eight new before/after support-link screenshots were saved.
- Deployed English home, services and Chinese home: HTTP 200 and X-Robots-Tag noindex, nofollow. No proposal framing remains in their responses.
- Existing smoke script rerun against the English preview: normal pages/assets 200, unknown route 404, expected redirects, security/noindex headers and media Range 206. Output inspected. No failures.
- English no-ai-slop edit and final detect: PASS against the skill and eval.md. Minimal edits remove approval qualifiers and preserve complete prose. No new banned patterns or factual claims. Independent fidelity review: PASS in C:/tmp/sitefix/approved-fidelity-review.md.
- Contact-form Worker files and production configs remain byte-identical to 29ecba8. Main checkout remains on redo/site.
- Preview Worker versions: English 5a030c1c-66b8-4486-8436-6c004c0a0597, Chinese 68bbf351-4465-4870-afea-8df06e48840e.
- Production deploy plan written outside the public repo: C:/tmp/sitefix/DEPLOY_PLAN.md. It includes future branch push, PR and merge, English Workers Builds, Chinese manual deploy, rollback, live checks and one real marked TEST form submission. No push, PR, merge, production configuration command or form submission was performed.

Raw follow-up logs use the approved- prefix in C:/tmp/sitefix/. Screenshots remain in C:/tmp/sitefix/shots/.

### Original preview validation

- `PREVIEW=1 node scripts/build.mjs en`: PASS, 11 pages.
- `PREVIEW=1 node scripts/build.mjs zh`: PASS, 9 pages.
- Chinese font subsets regenerated from the original PuHuiTi files after the final Chinese text edit.
- `node --test worker/spam.test.mjs worker/ranged.test.mjs`: PASS, 2 test files, 0 failed, 0 skipped. Both files report their internal checks passed.
- Local links, assets, fragments, canonical destinations and preview noindex checked across all 20 HTML pages: PASS.
- `git diff --check`: PASS.
- Worker files and production configs from contact-form fix `29ecba8`: unchanged. The commit remains an ancestor.
- Staged deploy assets compared by SHA-256 against both final build directories: no differences.

## Copy and facts

English copy received no-ai-slop edit and detect passes against the skill and eval.md. An independent fidelity reviewer checked the diff against the base and CHANGES.md. The ambiguous “usually with 10 to 100 staff” was rewritten as an explicit target description. Final fidelity verdict: PASS.

Chinese review used the exact requested ask_deepseek.py route, `deepseek-flash high`, in a visible Paseo agent. All four changed Chinese values were reviewed. Native wording corrections were applied. Optional final trims that removed automatic categorization and routing were rejected to preserve those established facts. qu-ai-wei and lieflat-less-ai-tone checks passed. The fee calculation was independently checked. Existing prices remain unchanged. No new client result, identity, testimonial, bonus rate or standalone setup policy was added.

## Browser and pixels

gstack browse captured all 20 pages at 390 and 1440 pixels, both full-page and viewport images. The final 40 checks show no horizontal overflow, missing image, wrong viewport size, wrong scroll position or missing preview noindex. All page folds were visually inspected, with full-page inspection of the seven pages whose body copy changed. Source changes preserve the existing design.

The image-only reviewer found all 11 phone jobs. The exporter English email action was strengthened to an underlined accent link with a 44px minimum height. The independent desktop coordinate guesses were imperfect: 17 of 22 phone/desktop guesses hit the intended control. All 22 actual visible control centers passed elementFromPoint, and all 22 visible-text click checks passed. The five desktop prediction misses were checked in the original rendered PNGs and DOM. No requested action is clipped or covered.

Fourteen before/after action screenshot pairs cover supplier prices, audience switching, exporter contact, the Chinese factory page, the Chinese home's English destination, website booking and the English email link at both widths. The email click was intercepted before opening a mail client, and its mailto destination was checked. No form, email or booking was submitted.

Live landed destinations include:
- Chinese home EN to English preview `/china/`.
- English home China business to Chinese preview `/`.
- English home supplier prices to English preview `/services/#china`.
- Exporter Contact Huanqiao to Chinese preview `/contact/`.
- Exporter Read in Chinese to Chinese preview `/audit/`.
- Discuss a website to the existing Google appointment schedule.

Existing media QA passed on both preview homes at both widths: video advances, reduced motion shows the still without fetching video, pause works, and both MP4 sizes decode. The existing smoke script was run with its target changed to the English preview. Pages and assets returned 200, a missing page returned 404, legacy redirects landed correctly, video range returned 206, and preview headers included noindex. Its unchanged production redirect checks were read only.

## Initial harness failures, resolved

The first screenshot attempt returned:

```text
RuntimeError: screenshot failed: Path must be within: <Windows Temp>, <worktree>
```

Captures were redirected to the ignored worktree `.gstack` folder, then copied unchanged to the requested output folder.

The first complete screenshot sweep returned:

```text
FINAL: 40 rendered checks, 4 failures: ['zh_home_390', 'zh_cases_390', 'zh_contact_390', 'zh_404_1440']
```

Ground truth showed successful image requests and later decoded images. gstack's async wrapper returned before the nested preparation promise completed. The helper was corrected to return and await that promise. The full sweep was rerun, including scroll-position checks:

```text
FINAL: 40 rendered checks, 0 failures: []
FINAL 22 visible-text clicks, 0 failures
```

There are no remaining source, build, Worker-test or browser-check failures.

## Evidence and deploys

Raw logs, independent review outputs, JSON checks and screenshots are under `C:/tmp/sitefix/`. Screenshots are under `C:/tmp/sitefix/shots/`. Local evidence is not committed to the public repo.

- English preview: https://gesedge-preview.rskrny.workers.dev, Worker version `074c4c52-7e0c-4dff-a752-1b5cad7656f9`.
- Chinese preview: https://huanqiao-preview.rskrny.workers.dev, Worker version `651e10cf-e9ab-45b9-a1c0-74e4ec3871c9`.

Both were deployed using copies of the preview configs in a staging folder without package.json. No production config was executed. No branch was pushed or merged.
