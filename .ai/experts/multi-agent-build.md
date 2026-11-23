# Multi-agent build — Expert Operating File
<!-- framework-owned · framework v2.4: a newer bootstrap may replace this file, so put project notes in .ai/experts/multi-agent-build.notes.md. Load it when three or more agents work at once. Every line comes from a measured audit of one 2026 software build that ran about 13 jobs at once across two accounts. -->

## When to invoke
- Three or more agents (builders, reviewers, release agents) will work at the same time.
- STATE.md cannot hold the status of every job within its budget.

## What "great" demands here
A person who opens the project cold finds in one place what is live, what is waiting and on whom, without asking an agent. A worker started with a short brief runs the right command first time. Nothing a session depends on exists only in a scratch folder.

## Checklist
1. **One home for job status.** One hand-written list is enough to start. The day status has been written by hand in two places, replace both with a script that prints the board from the sources of record (git branches, the release ledger, review verdict files). STATE.md links to it and never restates the status of a job. Check: no job's status is written by hand in two files.
2. **Workers' standing rules live in the repo they build in.** Set that repo up as a worker entry point (`.ai/experts/routing-and-registers.md`, item 7). Check: a brief is the job plus a pointer, and a new worker's first command is the right test command.
3. **Briefs are tracked files, one per job, in one folder.** A resume note replaces the brief. It does not stack beside it.
4. **Every script a session is told to run is tracked in a repo.** The same goes for anything a timer runs. Check: a fresh clone plus one documented step rebuilds the working folder.
5. **Scratch space has one root and a README.** The README names each subfolder's purpose and its removal rule. A job's worktree, review folder and workspace are removed or archived the day the job ships. Check: free disk space is read before every full test run.
6. **If the project ships releases, one release ledger in the code repo, appended by the release tool.** STATE.md links to it.
7. **Every job names the row in `.ai/ASKS.md` it serves.** A job with no row needs the user's yes before it starts.
8. **The person's own check comes first.** For each ask, write the few steps the owner does on their own device and what they see. A job is ready for review when those steps pass on a running copy.

## Anti-patterns
- The orchestrator narrating status into STATE.md, a backlog, a tracker and a board. Measured: ten places claimed current status, two pairs contradicted each other, and STATE.md's own timestamp was ten hours behind its content.
- Rules that builders need, kept in a private operations repo the builders may not read and restated in every brief. Measured: 223 briefs, median 639 words, largest 9,807.
- Operating scripts that live only in a scratch folder. Measured: the board, the autopilot and the job scripts were outside git and outside the backup.
- Project commands used as a system inventory or an event log. Measured: AGENTS.md reached 58 KB in five days.
- Asks tracked for the first time in week three. Until then nobody could say how many of the owner's asks were live.
- The owner's check run last, after every automated test passed. Measured: a link nobody could tap was found after 1,643 checks went green.

## Decisions & trade-offs
- A generated board costs one script and removes a whole class of disagreement. It is worth building once three jobs run at once and status has drifted, and not before.
- How many jobs build at once and how big a job may be are project decisions. Record them in DECISIONS.md once measured. The audited build chose at most three jobs building and about 800 changed lines per job, and had not yet measured the result.
- A check that blocks a commit is worth a rare false stop. A cap that is only written down was exceeded within five days.
