# AGENTS.md — Project Operating Protocol
<!-- framework v2.4 · framework-owned: a newer bootstrap may replace this file after showing a diff summary and getting confirmation. Keep project knowledge OUT of the framework part of this file — it lives in .ai/ and in the project-owned blocks at the bottom. -->

You are the operator accountable for this project: deliver excellent work, and leave it resumable by the next agent or human with minimal friction.

This file is the single source of truth for every AI agent working here, from any provider. Most tools load it natively; `CLAUDE.md` and `GEMINI.md` only import it.

**Core principle:** minimize active context, maximize recoverable context. Load only what the current task needs; everything else stays in files until needed. The project folder — not your memory, and not any tool's private memory — is the source of truth, so any agent from any provider can resume cold.

## Start of session

1. Read `.ai/STATE.md`, and the global lessons file named on the `Global lessons:` line at the bottom of this file (say so if it can't be read). This project's routing table, commands and lessons are at the bottom of this file. If STATE.md doesn't exist, see Self-heal.
2. Spend ten seconds validating it against reality: do the folder, `git status`, and recent `git log` (if a repo) match STATE.md's Status and Next actions? A sanity check, not an audit.
3. Run `python .ai/check.py` (or `python3`) and read what it prints. Fix every FAIL before starting work. Act on each WARN or say in one line why it stands. If it cannot run, say so in your resume line.
4. Emit one line of resume so the user can confirm or redirect:
   - In sync → `Resuming: <status>. Next: <next action>.`
   - Diverged → `STATE.md says <X>, but I observe <Y>. Reconciling.` — then bring STATE.md back to truth before working.
5. Read further files only as the routing table (Where things live, at the bottom of this file) and Context loading dictate. Don't ask "where were we?" — STATE.md answers that. Don't re-read what STATE.md already summarizes.

When sources disagree: what you observe directly beats anything written; the user's latest instruction beats the files; between files, don't pick silently — surface the conflict. A tool's private memory never outranks `.ai/`.

## End of session — checkpoint

Checkpoint whenever any of these is true — not only when asked:

- you're about to stop or hand off;
- you changed direction, made a major decision, or hit a blocker;
- you completed a task or deliverable.

The user can force a checkpoint anytime by saying "wrap" or "checkpoint."

On checkpoint:

1. Re-read `.ai/STATE.md` — another session may have touched it — then rewrite it to current truth. Merge, never clobber. Keep it within its budget (600 words unless PROJECT.md sets `State budget: <n> words`), keep routes and history out of it, and refresh its `Last updated` line.
2. Record any lesson from this session that isn't in the Project lessons block yet, including candidates reported by subagents (see Lessons). If a command to set up, run, test, build, or deploy was added, changed, or first proven to work, update Project commands at the bottom of this file. Keep commands there, procedures in `.ai/runbooks/`, current state in STATE.md and history in CHECKPOINTS.md. If an area of the project was added, moved or renamed, update its row in Where things live.
3. Insert a dated one-liner at the top of the list in `.ai/CHECKPOINTS.md` after substantial work.
4. Insert an entry at the top of `.ai/DECISIONS.md` if you made a major decision (architecture, strategy, client direction, cost, scope, reversibility).
5. Run `.ai/check.py` and fix every FAIL. If the folder is a git repo, commit now: stage the files this session changed by path (never a blanket `add -A`), confirm nothing secret is staged, and use the checkpoint line as the message. Never push without asking.

## Context loading

Read in this order; stop as soon as you have what the task needs.

| Read | When |
|---|---|
| `.ai/STATE.md` | Always, first. |
| The global lessons file (path at the bottom of this file) | Always, at session start. |
| Current task files | Always. |
| An area's entry file, named in Where things live | Working in that area. |
| `.ai/PROJECT.md` | Goals, audience, client, or constraints matter. |
| Playbooks listed in PROJECT.md | Working in that playbook's domain. |
| `.ai/BACKLOG.md` | Choosing new work once STATE.md's Next actions are done. |
| `.ai/ASKS.md` | Choosing, reporting or promising work for a client or owner. |
| `.ai/OBLIGATIONS.md` | Recording, changing or completing a dated commitment. `.ai/check.py` already lists what is due. |
| `.ai/DECISIONS.md` | Making or revisiting a major decision. |
| `.ai/experts/<name>.md` | Working in that discipline (see Experts). |
| `.ai/research/`, `.ai/deliverables/` | You need evidence or prior output. |
| `.ai/CHECKPOINTS.md`, `.ai/archive/` | You need history. Rare. |

Never load large or historical files "just in case." If context gets crowded, compact the truth into STATE.md, move stale detail to `.ai/archive/`, continue.

## How to work

Match effort to stakes:

- **Quick** (simple question, small edit, debug) — do it well; light self-check; touch files only if continuity changed.
- **Standard** (most work) — define the objective, pick an approach, execute, QA, checkpoint.
- **High-stakes** (multi-step, client-facing, technical, strategic, regulated) — load relevant files, track decisions, QA and stress-test, checkpoint thoroughly.

Within any task the loop is plan → build → check → record. A check observes the real end-state directly — the thing actually works — not a proxy (a "done" message, a green log line, a plausible-looking error signature). When the cause is unknown, get ground truth (the logs, a dump, the artifact itself) before theorizing — a plausible signature is necessary, not sufficient. If a check fails twice on the same issue, stop and surface root cause + options + your recommendation instead of looping again.

## Lessons

The **Project lessons** block at the bottom of this file holds this project's lessons — it sits here so every tool loads it automatically. The global file named on its `Global lessons:` line holds lessons that apply across projects on this machine; read it at session start.

- **Record at the next safe pause, not at session end,** when: a check fails for a reason you didn't predict; the same check fails twice; the user corrects you; a tool or system behaves unexpectedly, including failing silently. Not lessons: project state, one-off facts, ordinary exploration.
- **One line each:** `- YYYY-MM-DD · <tags> · When <situation>, <do / never do> <action>; check: <observable result>. Because: <what was observed>.` Tags are the tool names and symptoms someone would search for. Keep what you observed separate from what you suspect.
- **When a check fails or a tool misbehaves,** search the project lessons and the global file for the tool and the symptom before retrying.
- **A lesson that recurs gets promoted, not counted.** First ask why it recurred — missing, not read, didn't apply, or didn't work — then move it to where it is enforced: a script, test, or hook check (best), a PROJECT.md constraint, or an expert checklist. Replace the line with a one-line pointer to its new home. A lesson that applies beyond this project goes to the global file; one about this framework goes there tagged `framework`, for the next bootstrap version.
- **Cap: 40 lines.** At the cap, promote or retire (the tool got fixed) before adding. `.ai/check.py` warns above the cap and fails above 44.
- **Who writes:** only the orchestrator edits the Project lessons block; seats return candidate lessons in their output. Any orchestrator may add to the global file — re-read it immediately before writing, append only, never rewrite other lines. In a worktree or scratch workspace, copy new lesson lines to the main checkout before finishing.

## Multi-agent work

When several agents or models work on this project — subagents, review panels, other providers:

- **One orchestrator at a time.** The orchestrator is the session talking with the user. Don't run two orchestrating sessions on one project at once.
- **Only the orchestrator writes `.ai/`.** Every other agent — a subagent, a review-panel seat, any model run from a brief or in non-interactive mode — never writes `.ai/`. It returns its output; the orchestrator saves the shared brief and the raw outputs under `.ai/research/<YYYY-MM-DD>-<topic>/`.
- Agents doing implementation write only the paths their brief names.
- A tool that can't be held read-only (auto-approve flags, write-capable workspaces) runs in a scratch directory and gets project files by path.
- Models supply evidence and options, not votes. The orchestrator synthesizes, keeps material dissent visible (in the DECISIONS entry when the decision is major), and the user decides anything major.
- **Three or more agents working at once:** read `.ai/experts/multi-agent-build.md` before launching anything.
- **Workers do not load this project's `.ai/` memory unless their brief names a file.** A repo where workers build carries its own AGENTS.md with its build rules.

## Version control

Git is a judgment call, not a mandate. If the folder is a repo, every checkpoint includes a commit (see Checkpoint). If it isn't and the project would clearly benefit from real rollback — code, iterated documents, anything painful to lose a version of — propose `git init` once, in one line, and record the user's answer under PROJECT.md → Constraints so it is never asked again. Never run destructive operations (`push --force`, `reset --hard`, `clean`) without an explicit instruction.

## Experts

Some tasks need specialist depth a generalist pass would skip. Handle those through the right discipline's lens, and let the project grow its own experts:

- **Recognize** the discipline a task really needs (a non-obvious checklist, not common sense) — engineering, security, systems-performance, UX, whatever fits.
- **Reuse first, in this order:** (1) `.ai/experts/` — if a file exists, load and apply it, together with its `<name>.notes.md` if there is one, and extend its Project notes with anything new you learn (for an expert that ships with the framework, in that notes file); (2) playbooks and persona libraries listed in PROJECT.md → Playbooks; (3) only if neither covers the discipline, consider writing a new expert file.
- **Write a new expert only when the discipline will recur.** Create `.ai/experts/<name>.md` from `_TEMPLATE.md`, which carries the authoring rules. One-off that won't recur? Use the lens, skip the file.

## Standing rules

- **Truthfulness.** Never invent facts, files, tests, sources, prior work, or decisions. Separate known from assumed from recommended. For regulated topics (legal/medical/tax/financial), give analysis and framing, not professional advice. If something's unknown, say so and name the fastest way to resolve it.
- **Secrets.** Never write API keys, tokens, passwords, or client-confidential values into any file in this framework, and never echo them back in conversation. These files get loaded into many different model contexts across many providers. Reference the environment-variable name or the storage location, never the value.
- **One home for project knowledge.** Project facts, decisions, and state live in `.ai/`, never only in a tool's private memory (Claude auto-memory, Codex or Gemini memories) — other providers can't see it there. If you find project facts only in private memory, move them into `.ai/`.
- **Ambiguity.** Blocking (can't proceed safely) → ask one direct question. Non-blocking → assume, label the assumption, proceed. Preference → pick the sensible default, mention it briefly, proceed. Never ask a broad "what should I do?" when STATE.md names the next action.
- **Scope.** Build what was scoped. Don't gold-plate, add unrequested features, create files you don't need, or over-document small work. Activity isn't progress.
- **Delivery.** Lead with the answer or deliverable. Surface only the assumptions, risks, and limitations that matter. State what changed and the next action. Don't dump internal reasoning or process logs.

## The files

- `.ai/STATE.md` — current status + cold-start handoff. Always read first. Routes live in Where things live, history in CHECKPOINTS.md.
- `.ai/PROJECT.md` — stable goals, audience, constraints, optional playbooks. Changes rarely.
- `.ai/BACKLOG.md` — the full work queue, created when STATE.md's Backlog passes ~10 items: one line per item, highest priority first, done items deleted (git and CHECKPOINTS keep the history). STATE.md keeps only Next actions and a pointer.
- `.ai/ASKS.md` — what a client, owner or boss asked for, one row each, status updated the moment it changes. Every Next action in STATE.md traces to a row here or to the user's own instruction.
- `.ai/OBLIGATIONS.md` — every dated commitment (deadline, renewal, expiry, agreed follow-up) with its owner, due date and the machine reminder that will fire. `.ai/check.py` lists what is due. Both files are created when first needed, formats in `.ai/experts/routing-and-registers.md`.
- `.ai/DECISIONS.md` — log of major decisions, newest first. Format at top of file.
- `.ai/CHECKPOINTS.md` — dated history, newest first. Not loaded by default.
- `.ai/experts/` — load-on-demand discipline files. Read one only when its lens is invoked.
- `.ai/runbooks/` — one file per procedure too long for Project commands. Created when first needed.
- `.ai/research/`, `.ai/deliverables/`, `.ai/archive/` — evidence and panel outputs, finished output, retired detail. Created when first needed.

Files created from the manifest carry their template at the top. Follow it when writing.

Two ownership classes govern maintenance. **Framework-owned** files — this file above its end marker, `CLAUDE.md`, `GEMINI.md`, `.ai/check.py`, and the experts that ship with the framework (`_TEMPLATE.md`, `multi-agent-build.md`, `routing-and-registers.md`) — may be replaced by a newer bootstrap after it shows a diff summary and gets confirmation, so keep project knowledge out of them. **Project-owned** — the blocks below this file's end marker and everything else in `.ai/` — is never overwritten by a bootstrap.

## Self-heal

If `.ai/` or any project-owned file is missing, recreate the missing pieces from their templates: populate only what's useful now, infer reasonable defaults and label them, ask only for blocking information. Don't fill files just because they exist. If this file or another framework-owned file is damaged, tell the user to re-paste the bootstrap prompt — it repairs framework files without touching project files.

<!-- AGENTS.md · framework v2.4 · end of framework-owned part. Everything below this line is project-owned: a bootstrap never replaces it. -->

## Where things live
<!-- The routing table, loaded with this file in every session. One row per maintained area of the project: the area, the one file or folder to open first (a single backticked path), and when to read it. Paths are relative to this folder unless absolute. An area with more than a few files gets a README as its entry (format in .ai/experts/routing-and-registers.md). Keep rows short: detail belongs in the entry file. .ai/check.py warns when an entry does not exist. Only the orchestrating session edits this block. -->

| Area | Open first | Read when |
|---|---|---|
| Status and next actions | `.ai/STATE.md` | Always, first. |
| Design constitution (binding) | `DESIGN.md` | Any visual, motion, copy or interaction work. |
| Chinese site copy | `src/zh/copy.ts` | Changing a line on huanqiao.gesedge.com. |
| English site pages and case data | `src/en/work.ts` | Changing a page or a line on gesedge.com. |
| Contact-form Worker (mail, storage, bot filter) | `worker/index.js` | Form, delivery or spam-filter work. |
| Release to production | `.ai/runbooks/release.md` | Before any production release. Every release needs Ryan's separate go. |
| Approved service terms and open policy items | `CHANGES.md` | Pricing, service terms or factory policy questions. |
| Business, clients, tax, visa, social (private, outside this repo) | `../AGENTS.md` | Anything that is not the website. |

## Business work started from this folder

This repository is PUBLIC and holds only the website. Ryan often starts a chat here for other work. When the task is
business, bank, tax, visa, fapiao, client, outreach or social work, read `../AGENTS.md` and `../.ai/STATE.md` now and treat
the parent folder as the project folder for that work: its `.ai/` holds the state, its register holds the dates. Write
nothing private inside this repo: no client identities, no money figures, no bank, tax or visa detail, no business plans.

## Project: tooling (Claude Code / gstack)

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available skills: /office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review,
/design-consultation, /review, /ship, /land-and-deploy, /canary, /benchmark, /browse,
/qa, /qa-only, /design-review, /setup-browser-cookies, /setup-deploy, /retro,
/investigate, /document-release, /codex, /cso, /autoplan, /careful, /freeze, /guard,
/unfreeze, /gstack-upgrade.

If gstack skills aren't working, run `cd .claude/skills/gstack && ./setup` to build the binary and register skills.

## Project: writing rules (anti-AI-slop)

All published writing (blog posts, website copy, case studies, social posts) must follow these
rules, PLUS the voice law and kill list in root `DESIGN.md` (§10, §13) — notably: no
italic-emphasis words in headlines, no uniform card grids, no client names (GES's own ventures
exempt), no always-on bloom, no third typeface or hue.

**Required gate (Ryan, 2026-10-06): every piece of English website copy goes through the
`no-ai-slop` skill before it ships** — edit mode on the draft, then a detect pass on the final text.
Note in the commit/PR that the pass ran. **Chinese copy** (Simplified): drafted natively, never a straight translation of the English. Since 2026-10-10
(Kenny has no capacity) DeepSeek, GLM and Kimi each draft from one brief and Kimi merges; Kenny reads when he can.
Then an edit pass with the
`qu-ai-wei` skill (brand-copy aware; targets 翻译腔, 客服腔, filler; tell it the copy is for a brand
website), then a minimal-edit check with `lieflat-less-ai-tone` (whitelist rules, corpus-based), then Codex +
DeepSeek adversarial review and a Kimi final read. Both skills preserve facts and never add claims — re-check numbers and names after each pass.
Copy that skipped the gate does not merge.

### Banned patterns
- **No semicolons for contrast.** If you use a semicolon to create contrast between two clauses, the sentence is rejected. Rewrite it.
- **No em dashes for contrast.** Same rule. If the em dash exists to juxtapose two ideas, rewrite it.
- **No "not" contrast constructions.** "It's not X, it's Y" is a dead giveaway. Write what it IS.
- **No viral-bait openers.** Reject any sentence that starts with or resembles:
  - "Here's what nobody's talking about"
  - "Most people don't realize"
  - "The truth is"
  - "Let me be honest"
  - "What if I told you"
  - "Stop doing X. Start doing Y."
  - "X is dead. Here's what's next."
- **No filler intensifiers.** Cut "truly", "actually", "really", "incredibly", "absolutely", "game-changing", "revolutionary", "cutting-edge", "leverage", "unlock", "empower", "seamless", "robust".
- **No parallel slogans.** "Two companies, one founder" and anything shaped like it ("X, one Y") is rejected (Ryan, 2026-10-08).
- **No fragments as statements.** "Advisory only." reads machine-made. Write the sentence.
- **No list-of-three cadence abuse.** "Fast, reliable, and scalable" is a crutch. Use it sparingly if at all.

### Honesty rules
- **Never claim something is in production if it isn't.** If a project is a demo or prototype, say so.
- **Never inflate numbers.** 84 products is a small catalog. Don't frame small numbers as impressive.
- **No ego-stroking case studies.** State what was built, what it does, and what happened. Don't fabricate outcomes or imply results that haven't been measured.
- **If you don't know, ask Ryan.** Don't guess about business outcomes, client satisfaction, or metrics.

### Voice
- Write like a person who builds things and has opinions.
- Short sentences are fine. Long sentences are fine if they earn their length.
- Personality matters more than polish. Ryan has a specific voice. Match it.
- Keep the "AI-enhanced business systems" positioning.

## Project commands
<!-- Loaded with this file at every session start, so every agent from every provider knows how to work here without rediscovering it. One line each: what it does, then the exact command — set up, run, test, lint, build, deploy — plus any must-know convention an agent would otherwise get wrong (package manager, generated files never to edit). Mark a command (unverified) until it has run successfully here. Name env vars, never their values. Listing a deploy command is not permission to run it. Commands and conventions only: procedures go in .ai/runbooks/, current state in STATE.md, history in CHECKPOINTS.md. Only the orchestrating session edits this block. -->

- Package manager: npm. Never regenerate `package-lock.json` on Windows for a Cloudflare build: a Windows lockfile breaks the Linux `npm ci`.
- Dev server: `npm run dev` (unverified).
- Build the English site: `npm run build:en`. Build the Chinese site: `npm run build:zh`. Both passed on 2026-11-15 and were not rerun since.
- Preview build: set `PREVIEW=1` and deploy with `wrangler.en.jsonc` or `wrangler.zh.jsonc`. Previews carry noindex.
- Worker tests: `node worker/spam.test.mjs` and `node worker/ranged.test.mjs` (unverified as written: the 2026-11-15 record says both test files pass, it does not record the command).
- Chinese font subset after a copy change: `npm run fonts` (unverified).
- Branches: work on `redo/site` or a feature branch. Never commit on `main`: it auto-deploys gesedge.com on push. The Chinese site is a manual deploy. Run deploy staging outside the repo so Wrangler does not change package files.
- Commits: conventional commits. Never push without asking.

## Project lessons
<!-- Loaded with this file at every session start. Rules and line format: see Lessons above. Keep ~40 lines; promote a lesson that recurs instead of counting it. Only the orchestrating session edits this block. -->

Global lessons: C:/GES/frameworks/LESSONS.md
