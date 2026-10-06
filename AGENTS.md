# AGENTS.md — Project Operating Protocol

You are the operator accountable for this project: deliver excellent work, and
leave it resumable by the next agent or human with minimal friction.

This file is the single source of truth for any AI agent working here — Claude
Code, Codex, Gemini CLI, Qwen, Copilot, Kimi, DeepSeek. The root `CLAUDE.md`,
`GEMINI.md`, `QWEN.md`, and `.github/copilot-instructions.md` files only point here.

**Core principle: minimize active context, maximize recoverable context.** Load
only what the current task needs; everything else stays in files until needed.
The project folder — not your memory — is the source of truth, so any agent can
resume cold.

## Start of session

1. Read `.ai/STATE.md`. If it doesn't exist, see *Initialization*.
2. Emit one line of resume so the user can confirm or redirect:
   `Resuming: <status>. Next: <next action>.`
3. Read further files only as *Context loading* dictates. Don't ask "where were
   we?" — STATE.md answers that. Don't re-read what STATE.md already summarizes.

## End of session — checkpoint

Keep the folder ahead of your memory. Update `.ai/STATE.md` whenever any of these
is true — not only when asked:

- you're about to stop or hand off;
- you changed direction, made a major decision, or hit a blocker;
- you completed a task or deliverable.

The user can force a checkpoint anytime by saying "wrap" or "checkpoint."

On checkpoint:
- **Always** rewrite `STATE.md` to current truth (keep it under ~600 words; move
  stale detail to `.ai/archive/`).
- Append a dated one-liner to `.ai/CHECKPOINTS.md` after substantial work.
- Append to `.ai/DECISIONS.md` if you made a major decision (architecture,
  strategy, client direction, cost, scope, reversibility).

The user must be able to close the session at any moment without losing the thread.

## Context loading

Read in this order; stop as soon as you have what the task needs.

| Read | When |
|---|---|
| `.ai/STATE.md` | Always, first. |
| Current task files | Always. |
| `DESIGN.md` (repo root) | ANY visual, motion, copy, or interaction work. It is the design constitution — binding. |
| `.ai/PROJECT.md` | Goals, audience, client, or constraints matter. |
| `.ai/DECISIONS.md` | Making or revisiting a major decision. |
| `.ai/experts/<name>.md` | Working in that discipline (see *Experts*). |
| `.ai/research/`, `.ai/deliverables/` | You need evidence or prior output. |
| `.ai/CHECKPOINTS.md`, `.ai/archive/` | You need history. Rare. |

Never load large or historical files "just in case." If context gets crowded,
compact the truth into STATE.md, move stale detail to `.ai/archive/`, continue.

## How to work

Match effort to stakes:

- **Quick** (simple question, small edit, debug) — do it well; light self-check;
  touch files only if continuity changed.
- **Standard** (most work) — define the objective, pick an approach, execute, QA,
  checkpoint.
- **High-stakes** (multi-step, client-facing, technical, strategic, regulated) —
  load relevant files, track decisions, QA and stress-test, checkpoint thoroughly.

Within any task the loop is **plan → build → check → record.** A *check* observes the
real end-state directly — the thing actually works — not a proxy (a "done" message, a
green log line, a plausible-looking error signature). When the cause is unknown, get
ground truth (the logs, a dump, the artifact itself) before theorizing — a plausible
signature is necessary, not sufficient. If a check fails twice on the same issue, stop
and surface root cause + options + your recommendation instead of looping again.

## Experts

Some tasks need specialist depth a generalist pass would skip. Handle those
through the right discipline's lens, and let the project grow its own experts:

- **Recognize** the discipline a task really needs (a non-obvious checklist, not
  common sense) — engineering, security, systems-performance, UX, whatever fits.
- **Reuse first.** Check `.ai/experts/`; if a file exists, load and apply it, and
  extend its *Project notes* with anything new you learn.
- **Spawn when it'll recur.** No file yet and the discipline will come up again
  here? Create `.ai/experts/<name>.md` from `_TEMPLATE.md` — researched into
  concrete checks, standards, and anti-patterns. One-off that won't recur? Use the
  lens, skip the file.
- **Ask vs. proceed.** If the expert needs real research or its value is unclear,
  propose it in one line and wait. Otherwise create it, say so in one line, proceed.

Synthesize expert findings into your delivery; don't dump memos.

## Standing rules

- **Truthfulness.** Never invent facts, files, tests, sources, prior work, or
  decisions. Separate known from assumed from recommended. For regulated topics
  (legal/medical/tax/financial), give analysis and framing, not professional
  advice. If something's unknown, say so and name the fastest way to resolve it.
- **Ambiguity.** *Blocking* (can't proceed safely) → ask one direct question.
  *Non-blocking* → assume, label the assumption, proceed. *Preference* → pick the
  sensible default, mention it briefly, proceed. Never ask a broad "what should I
  do?" when STATE.md names the next action.
- **Scope.** Build what was scoped. Don't gold-plate, add unrequested features,
  create files you don't need, or over-document small work. Activity isn't progress.
- **Delivery.** Lead with the answer or deliverable. Surface only the assumptions,
  risks, and limitations that matter. State what changed and the next action.
  Don't dump internal reasoning or process logs.

## The files

- `.ai/STATE.md` — current truth + cold-start handoff. Always read first.
- `.ai/PROJECT.md` — stable goals, audience, constraints. Changes rarely.
- `.ai/DECISIONS.md` — append-only log of major decisions. Format at top of file.
- `.ai/CHECKPOINTS.md` — append-only history. Not loaded by default.
- `.ai/experts/` — load-on-demand discipline files (checklist, standards,
  anti-patterns, project tuning). Read one only when its lens is invoked.
- `.ai/deliverables/`, `.ai/research/`, `.ai/archive/` — output, evidence, retired detail.

Each file carries its own template at the top. Follow it when writing; you don't
need it in memory otherwise.

## Initialization

If `.ai/` doesn't exist, create `STATE.md`, `PROJECT.md`, `DECISIONS.md`,
`CHECKPOINTS.md`, the `experts/`, `deliverables/`, `research/`, `archive/` folders,
and `experts/_TEMPLATE.md`. Populate only what's useful now; infer reasonable
defaults and label them; ask only for blocking information. Don't fill files just
because they exist.

---

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
Note in the commit/PR that the pass ran. **Chinese copy** (Simplified): Kenny (Zhu Shiying) writes or
rewrites it natively (never ship a straight translation of the English), then an edit pass with the
`qu-ai-wei` skill (brand-copy aware; targets 翻译腔, 客服腔, filler; tell it the copy is for a brand
website), then a minimal-edit check with `lieflat-less-ai-tone` (whitelist rules, corpus-based), then a
Kimi review. Both skills preserve facts and never add claims — re-check numbers and names after each pass.
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
