# Routing and registers — Expert Operating File
<!-- framework-owned · framework v2.4: a newer bootstrap may replace this file, so put project notes in .ai/experts/routing-and-registers.notes.md. Load it when you add or reorganize an area, add an entry point, record what someone asked for, or record a dated commitment. -->

## When to invoke
- The project gains a new area of work, or files for one area have piled up with no entry file.
- Sessions will start from another folder, or workers will build in another repo.
- A client, owner or boss asks for something, or anything gets a date.
- `.ai/check.py` reports a routing, entry-point or obligation warning.

## What "great" demands here
A project can grow to any size and a cold agent still opens the right files first, and only those. The always-loaded text says where things are. It never tries to hold them.

## Checklist
1. **One row per maintained area in AGENTS.md → Where things live.** A maintained area is a body of work someone returns to: a product, a client, finance, a site. Generated folders, fixtures and archives are not areas. A row is the area, one entry written as a single backticked path, and a short "read when".
2. **Each area with more than a few files has an entry README.** Four short parts: what the area covers, which file is the authority for what, when to load each, and how to check the live facts (the system of record and how to read it). The README routes onward. It does not copy what the files say.
3. **The table points only at entries.** Deeper files are reached from the entry, so a move inside an area changes one README and no table row.
4. **Status stays in STATE.md, routes stay in the table, history stays in CHECKPOINTS.md.** A log inside STATE.md is loaded by every session that never needs it.
5. **`.ai/ASKS.md` from the first ask.** Header: `| # | Ask (their words) | Source (where, date) | Owner | Status with its layer (live, staging, review, building, not started) | Next step |`. Update a row the moment its status changes.
6. **`.ai/OBLIGATIONS.md` from the first dated commitment.** Header: `| What | Owner | Due (YYYY-MM-DD) | Repeats | Reminder | Status |`. Reminder names the machine that will fire: a scheduled task, a calendar alert, a monitoring check. Create that reminder the same day. Status is exactly `open` or `done`. When a repeating obligation is completed, move its Due date to the next occurrence, confirm the reminder will fire again, and leave it `open`. To retire one, write `ended` under Repeats and mark it `done`. Write a literal pipe inside a cell as `\|`. `.ai/check.py` lists rows that are overdue, due within 14 days, open with no reminder, malformed, or repeating and marked done. It reads the table. It cannot prove that a reminder exists, so test each reminder once.
7. **Entry points go in PROJECT.md → Entry points**, one line each: `- <absolute path> · <hostname> · operator` or `· worker`. Run `hostname` on that machine for the name. For a folder under another account on the same machine, write `<hostname>:<account>`: the check then runs only when that account runs it.
   - An **operator** folder is a place where the person running the project starts chats, such as a parent folder that holds the repos. It gets three pointer files: an `AGENTS.md` that says "This folder is an entry point for the project in <project root>. Read <project root>/AGENTS.md now and treat <project root> as the project folder for every .ai/ path.", a `CLAUDE.md` containing `@<project root>/AGENTS.md`, and a `GEMINI.md` containing `@./AGENTS.md`.
   - A **worker** folder is a repo where builders work. It gets its own `AGENTS.md` holding that repo's build rules: how to run one test and the full suite, how shared numbers such as ports are assigned, what a job must never touch, and what "ready for review" means. Beside it go a `CLAUDE.md` containing `@AGENTS.md` and, if Gemini is used there, a `GEMINI.md` containing `@./AGENTS.md`. No instruction file in a worker folder imports or names the project root. Workers do not read the operating memory.
   - Never write outside the project folder without the user's yes. Never overwrite a file that is already there: put the pointer in its first lines and keep the rest.
8. **Know what every session loads.** That is AGENTS.md, STATE.md and the global lessons file. `.ai/check.py` prints the size of each. A global lessons file that keeps growing is paid for by every project: keep a short core and move tool-specific lessons to topic files read on demand.

## Anti-patterns
- A routing table inside a status file that is rewritten at every checkpoint. Routes get lost in a rewrite.
- A README in every folder. Nobody maintains them and the real entries drown.
- A table row that points at ten files. The agent loads all ten.
- A deadline that lives in a sentence. Nothing fires when it passes.
- A pointer file in a code repo that sends builders to the operating memory.

## Decisions & trade-offs
- A row in the always-loaded table costs a few words in every session and saves a search in every session that touches the area. Add the row when an area is real and remove it when the area is retired.
- A larger state budget is a fair choice when every part is read every session. A log is never such a part.
- Two repos, one for operating memory and one for code, keep private notes away from outside-model workers. The price is that the build rules must live in the code repo.
