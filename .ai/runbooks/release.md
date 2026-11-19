<!-- Copied 2026-11-19 from C:/tmp/sitefix/DEPLOY_PLAN.md, the plan written for the 2026-11-15 release. It names temp paths and worktrees (C:/tmp/sitefix, gesedge-wt-sitefix, release-main) that were removed on 2026-11-19: recreate a release worktree and read the live Worker version IDs fresh at release time. Every production release needs Ryan's separate explicit go. -->

# Production deploy plan, 2026-11-15

Executed after Ryan’s production go on 2026-11-15. PR #14 merged approved source 86a4302 as 3a2cf7e. Both sites are live and the single TEST submission was accepted, stored and delivered. Execution details and rollback versions: C:/tmp/sitefix/production/release-summary.json. The steps below are retained as the approved runbook.

## Release and current evidence

- Approved preview commit: 86a430247a6c387a6f27679667f448577cb6a44b (fix(site): finalize approved service terms on previews).
- Preceding positioning commit: d418eb7.
- Source branch: `site/positioning-2026-11` in `C:/Users/rskrn/Desktop/gesedge-wt-sitefix`.
- Keep the main checkout at `C:/Users/rskrn/Desktop/Global Edge Strategies Chengdu Huanqiao/gesedge` on `redo/site` throughout. Use separate worktrees for release and rollback.
- Preview URLs: https://gesedge-preview.rskrny.workers.dev/ and https://huanqiao-preview.rskrny.workers.dev/.
- Both previews use PREVIEW=1. Never publish their dist folders to production. Production must be rebuilt without PREVIEW.
- Repository production configuration says Cloudflare Workers Builds watches GitHub `rskrny/gesedge`, branch `main`, builds with `node scripts/build.mjs en`, and deploys with `npx wrangler deploy` using `wrangler.jsonc`. That updates Worker `gesedge`, serving gesedge.com and www.gesedge.com. Huanqiao is a separate manual Worker deploy using `wrangler.huanqiao.jsonc`.
- Read-only `git ls-remote` in this session returned production branch SHA `29f84a802e4f181177af188c983d72f0a4c43859`. Recheck at release time. Local `main` is stale and must not be used as the release base.
- Configuration and repository notes were checked. The Cloudflare dashboard build settings have not been reverified in this follow-up. Verify them before merging.
- Items 8 and 9 remain unanswered. Publish no standalone factory setup policy or new bonus terms.

## 1. Prepare before the push

In PowerShell, from the feature worktree:

```powershell
Set-Location -LiteralPath 'C:/Users/rskrn/Desktop/gesedge-wt-sitefix'
git status --short
git branch --show-current
git fetch origin
git log --oneline origin/main..HEAD
git diff --stat origin/main...HEAD
git diff origin/main...HEAD
git merge-base --is-ancestor 29ecba8 HEAD
git rev-parse HEAD
git rev-parse origin/main
```

Require a clean worktree, branch `site/positioning-2026-11`, and the approved final commit. Review the whole public PR diff, including inherited unpushed commits from redo/site. Do not introduce private business material. Keep the contact-form fix 29ecba8. If origin/main has moved, integrate it in this feature worktree, resolve any conflict, and rerun both builds, Worker tests, links, preview noindex, 390/1440 renders and visible-text clicks before proceeding. Do not change branches in the main checkout.

In the Cloudflare dashboard, verify the `gesedge` build still watches `main`, uses the commands above and has no PREVIEW=1 build variable. Confirm preview branches cannot deploy production. Record the current build configuration and both live Worker version IDs. From a package-less folder, the read-only commands are:

```powershell
Set-Location -LiteralPath 'C:/tmp/sitefix'
npx wrangler@4.162.0 deployments list --name gesedge --json
npx wrangler@4.162.0 deployments list --name huanqiao --json
```

Save the 100%-active version ID for each as `GES_PREVIOUS_VERSION` and `HUANQIAO_PREVIOUS_VERSION` in the release notes, not as credentials. Record PREVIOUS_MAIN_SHA from the fetch above. Confirm the existing MESSAGES binding and SMTP_PASS secret names are present on each live Worker without printing values. Do not rotate secrets or change domains, DNS, bindings or mail routing.

## 2. Push the feature branch and open the PR

Push only this branch, never redo/site or main:

```powershell
Set-Location -LiteralPath 'C:/Users/rskrn/Desktop/gesedge-wt-sitefix'
git push -u origin site/positioning-2026-11
```

Create a PR with base `main` and head `site/positioning-2026-11`. Include the approved terms, both preview URLs, final commit, passing checks, preserved contact fix and unchanged unanswered factory policies. Save the body in `C:/tmp/sitefix/production-pr-body.md`, then use:

```powershell
gh pr create --repo rskrny/gesedge --base main --head site/positioning-2026-11 --title 'feat(site): focus offers on import operations' --body-file C:/tmp/sitefix/production-pr-body.md
```

Review the complete PR and required checks. Opening it does not publish the English site. Merging into main triggers production. Use a merge commit to preserve 29ecba8 ancestry. After Ryan's production authorization and green checks, merge that exact PR with `gh pr merge <PR_NUMBER> --repo rskrny/gesedge --merge`. Do not use an unreviewed head or bypass failed checks.

## 3. Verify the automatic English deploy

Watch the Cloudflare Workers Build for the merged main SHA and require a successful build and deploy for Worker `gesedge`. Record its version ID. Check https://gesedge.com/ and https://gesedge.com/services/ before proceeding to Chinese production. The final heading must read `Monthly support terms`. Do not run wrangler.jsonc manually as a second English deploy.

## 4. Build and deploy Chinese production from merged main

Use a fresh release worktree, leaving both existing checkouts alone:

```powershell
Set-Location -LiteralPath 'C:/Users/rskrn/Desktop/gesedge-wt-sitefix'
git fetch origin
git worktree add --detach C:/tmp/sitefix/release-main origin/main
Set-Location -LiteralPath 'C:/tmp/sitefix/release-main'
git rev-parse HEAD
Remove-Item Env:PREVIEW -ErrorAction SilentlyContinue
npm ci --no-audit --no-fund
node --test worker/spam.test.mjs worker/ranged.test.mjs
node scripts/build.mjs zh
```

Require that HEAD matches the merged main SHA. Confirm dist/zh contains production cross-site URLs, correct canonical/hreflang destinations and no preview-wide noindex header. Intentional noindex pages such as /sample/ and contact status pages must keep their own noindex tags. Fail the release if workers.dev links remain. Check production paths and assets before upload.

Stage the production config, Worker modules and freshly built assets outside any package.json folder. This avoids Wrangler's Astro auto-configuration modifying package files:

```powershell
$releaseRoot = 'C:/tmp/sitefix/release-main'
$productionStage = 'C:/tmp/sitefix/production-zh-' + (Get-Date -Format 'yyyyMMdd-HHmmss')
New-Item -ItemType Directory -Path $productionStage, "$productionStage/worker", "$productionStage/dist" | Out-Null
Copy-Item -LiteralPath "$releaseRoot/wrangler.huanqiao.jsonc" -Destination $productionStage
Copy-Item -LiteralPath "$releaseRoot/worker/index.js", "$releaseRoot/worker/ranged.js", "$releaseRoot/worker/spam.js" -Destination "$productionStage/worker"
Copy-Item -LiteralPath "$releaseRoot/dist/zh" -Destination "$productionStage/dist" -Recurse
Set-Location -LiteralPath $productionStage
npx wrangler@4.162.0 deploy -c wrangler.huanqiao.jsonc
```

The last command publishes Worker `huanqiao` at huanqiao.gesedge.com. It must run only after the separate go. Record the resulting version ID and check the site immediately. Check source worktrees still have no package or lockfile mutation.

## 5. Post-deploy live checks

Run these against the real domains, using gstack browse at 390×900 and 1440×900. Save screenshots and outcomes outside the public repo.

1. Open every page changed by this release: English /, /services/, /work/, /exporters/ and Chinese /, /audit/, /cases/. Check overflow, images/fonts, readable support terms, factory fee arithmetic and removed unsupported claims. Shared navigation changed across both sites, so smoke all routes and page assets too. Verify an unknown route returns 404.
2. Require 200 on normal pages/assets. Check production canonicals, hreflang, sitemap and robots.txt. Normal sales pages must have no preview noindex meta or X-Robots-Tag. Intentional noindex pages stay excluded. Verify www redirects to the same https://gesedge.com path.
3. Click visible text at both widths: English home supplier prices → /services/#china, both `See support terms` links → /services/#support, `Discuss a website` → the Google schedule, `China business` → Chinese home, Chinese home `EN` → https://gesedge.com/china/, exporter `Contact Huanqiao` → https://huanqiao.gesedge.com/contact/, `Read in Chinese` → /audit/, audit `EN` → /exporters/. Intercept the English email click before opening a mail client and confirm mailto. Do not create a booking.
4. Check hero playback and pause at both widths, reduced-motion still behavior and a media Range request returning 206. Check Chinese contact QR and consent control.
5. Submit exactly one real contact-form test on https://gesedge.com/contact/ through its visible `Send` button. Use name `TEST Website Deploy`, company `TEST release verification`, a real reply address controlled by Ryan, and message `TEST: production website release verification. No client inquiry. Release <MERGED_MAIN_SHA>. UTC <TIMESTAMP>.` Leave the honeypot empty. Capture before/after screens and the real POST → 303 → /contact/sent/ result. This submission is part of the later authorized production validation, not this preview task.
6. Verify the matching TEST message is stored under the gesedge/ prefix of the production MESSAGES KV namespace and that its notification email arrives in Ryan's mailbox, including Spam. Read only the matching test record/message and do not print unrelated inquiries. The success page alone is insufficient because the Worker accepts either KV storage or email success. Report KV and email independently. If email fails, preserve the KV copy and investigate SMTP/Worker logs. Do not resubmit repeatedly or declare mail working from a green page.
7. Chinese contact uses the separately deployed huanqiao Worker. Check its form action, required consent, binding and secret presence. If Ryan wants its notification path proved too, use one separately marked TEST submission with a controlled contact and consent. Do not claim Chinese mail delivery verified from the English test alone.
8. Read logs for both Worker versions during checks, without dumping submissions or secrets. Record domain, merged SHA, Worker versions, TEST marker, delivery/storage results and screenshots. Update the website's .ai/STATE.md and checkpoint with the actual live result.

## 6. Rollback

If English production checks fail, stop the Chinese rollout. If Chinese fails after upload, restore its previous version immediately. From a package-less folder, replace placeholders with the versions captured before rollout:

```powershell
Set-Location -LiteralPath 'C:/tmp/sitefix'
npx wrangler@4.162.0 rollback <GES_PREVIOUS_VERSION> --name gesedge --message 'Restore pre-positioning release after failed live checks' --yes
npx wrangler@4.162.0 rollback <HUANQIAO_PREVIOUS_VERSION> --name huanqiao --message 'Restore pre-positioning release after failed live checks' --yes
```

Run only the rollback for the affected Worker, or both if the package must be withdrawn together. Verify version/traffic, pages, links, noindex and contact action after rollback. Do not delete KV submissions or change DNS/secrets. Wrangler version rollback does not revert stored data.

Keep GitHub main consistent with the restored release before another build can reintroduce the change. Create a new rollback branch/worktree from current origin/main and revert the release merge with `git revert -m 1 <RELEASE_MERGE_SHA>`. Review whether the inherited 29ecba8 form fix needs to be reapplied before that revert publishes. Open a rollback PR to main, run tests/builds and merge under the incident authorization. Do not force-push or reset main. Merging the revert triggers the English build again. For Chinese, retain the previous Worker version until a verified replacement deploy is ready.

If version rollback is unavailable, use a fresh detached worktree at PREVIOUS_MAIN_SHA, build without PREVIEW, stage the relevant production config/Worker/assets outside the repo, and deploy the previous code under the incident authorization. Prefer the captured known-good Worker version, because historic Git SHA and live Chinese version may differ. Record any form-fix difference before restoring old code.
