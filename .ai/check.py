#!/usr/bin/env python3
# .ai/check.py - framework v2.4 - framework-owned: a newer bootstrap may replace this file.
"""Checks what every session loads and where the project's routes point.

Run:  python .ai/check.py [--install-hook | --staged] [project folder]
Prints one line per check (PASS, NOTE, WARN or FAIL) and exits 1 if any check FAILs.
It only reads files. --install-hook also writes one file, a git pre-commit hook, and only
inside this project's own .git folder when no pre-commit hook exists. --staged is what the
hook runs: it checks the content about to be committed and skips checks of the wider folder.
"""
import datetime
import getpass
import os
import re
import socket
import subprocess
import sys

VERSION = "v2.4"
STATE_BUDGET = 600                       # words in .ai/STATE.md, unless PROJECT.md sets "State budget: <n> words"
LESSONS_WARN, LESSONS_FAIL = 40, 44      # dated lines in the Project lessons block
AGENTS_WARN, AGENTS_FAIL = 28000, 32768  # bytes in AGENTS.md (Codex stops reading at 32 KiB by default)
DUE_SOON_DAYS = 14
END_MARK = "end of framework-owned part"
SEP = "·"                           # the middle dot used in Entry points lines
ENTRY_NAMES = ("README.md", "readme.md", "Readme.md", "INDEX.md", "AGENTS.md")
HOOK = """#!/bin/sh
# framework %(version)s: refuse a commit when the staged files break a hard limit.
root=$(git rev-parse --show-toplevel) || exit 0
[ -f "$root/.ai/check.py" ] || exit 0
for py in python3 python py; do
  if "$py" -c "import sys; sys.exit(0 if sys.version_info >= (3, 7) else 1)" >/dev/null 2>&1; then
    "$py" "$root/.ai/check.py" --staged || { echo "commit refused by .ai/check.py: fix the FAIL lines above"; exit 1; }
    exit 0
  fi
done
echo "WARN .ai/check.py did not run: no Python 3.7 or newer found"
exit 0
"""

OLD_HOOKS = ()  # exact texts of hooks that earlier versions installed. None yet: v2.4 is the first with a hook.

results = []
STAGED = False


def report(level, name, detail):
    results.append(level)
    print("%-4s %s: %s" % (level, name, detail))


def grade(value, warn, fail):
    return "FAIL" if value > fail else "WARN" if value > warn else "PASS"


def read(path):
    with open(path, encoding="utf-8", errors="replace") as handle:
        return handle.read()


def git(root, *args, **options):
    try:
        out = subprocess.run(["git", "-C", root] + list(args), capture_output=True)
    except OSError:
        return None
    if out.returncode != 0:
        return None
    return out.stdout if options.get("raw") else out.stdout.decode("utf-8", "replace").strip()


def content(root, rel):
    """Bytes of a project file, or None when it is missing.

    With --staged this is what the commit will hold: the version in the git index, None when the commit
    deletes the file, and the file on disk only when git has never tracked it (a commit cannot change it).
    """
    if STAGED:
        listing = git(root, "ls-files", "-s", "--", rel)
        if listing is None:
            report("WARN", "staged check", "git could not list %s: the file on disk was checked instead" % rel)
        elif listing:
            data = git(root, "show", ":" + rel, raw=True)
            if data is not None:
                return data
            report("WARN", "staged check", "git could not read the staged %s: the file on disk was checked instead" % rel)
        elif git(root, "cat-file", "-e", "HEAD:" + rel) is not None:
            return None  # tracked until now and absent from the index: this commit deletes it
    path = os.path.join(root, *rel.split("/"))
    if not os.path.isfile(path):
        return None
    with open(path, "rb") as handle:
        return handle.read()


def norm(path):
    return os.path.normcase(os.path.realpath(os.path.expanduser(path))).replace("\\", "/")


def table_rows(block):
    """Cells of each data row of the first Markdown table in a block. The header row and the rule row are dropped."""
    rows = []
    for line in block.splitlines():
        line = line.strip()
        if not line.startswith("|"):
            if rows:
                break
            continue
        # split on pipes that are not escaped, so a literal pipe can be written as \|
        cells = [cell.strip().replace("\\|", "|") for cell in re.split(r"(?<!\\)\|", line.strip("|"))]
        if all(re.match(r"^:?-{2,}:?$", cell) for cell in cells if cell):
            continue
        rows.append(cells)
    return rows[1:]


def targets(cell):
    found = re.findall(r"`([^`]+)`", cell) + re.findall(r"\]\(([^)\s]+)\)", cell)
    return [item.strip().strip("\"'") for item in found]


def resolve(root, token):
    """The path a route points to on this machine, or None for a placeholder, a link or another machine's path."""
    token = re.sub(r"(\.[A-Za-z0-9]{1,5})(:\d+(-\d+)?|#[^/\\]*)$", r"\1", token).rstrip(".,;")
    if not token or re.search(r"[<>*{}|$]", token) or "://" in token:
        return None
    if token.startswith("~"):
        return os.path.expanduser(token)
    windows_abs, posix_abs = re.match(r"^[A-Za-z]:[\\/]", token), token.startswith("/")
    if windows_abs or posix_abs:
        return token if bool(windows_abs) == (os.name == "nt") else None
    parts = [part for part in re.split(r"[\\/]", token) if part and part != "."]
    return os.path.join(root, *parts) if parts else None


def shown(items):
    return ", ".join(items[:5]) + (" and %d more" % (len(items) - 5) if len(items) > 5 else "")


def check_agents(root):
    """Size, markers and lesson count of AGENTS.md. Returns the project-owned part, or "" when it cannot be found."""
    data = content(root, "AGENTS.md")
    if data is None:
        report("FAIL", "AGENTS.md", "missing: re-paste the bootstrap prompt")
        return ""
    report(grade(len(data), AGENTS_WARN, AGENTS_FAIL), "AGENTS.md size",
           "%d bytes (warns above %d, limit %d)" % (len(data), AGENTS_WARN, AGENTS_FAIL))
    text = data.decode("utf-8", "replace")
    if END_MARK not in text or "framework v" not in text:
        report("FAIL", "AGENTS.md markers", "version marker or end-marker line missing: re-paste the bootstrap prompt")
        return ""
    tail = text.split(END_MARK, 1)[1]
    commands, lessons = tail.find("## Project commands"), tail.find("## Project lessons")
    if commands < 0 or lessons < commands:
        report("FAIL", "AGENTS.md blocks", "Project commands, then Project lessons, must follow the end marker")
        return tail
    count = len(re.findall(r"(?m)^- \d{4}-\d{2}-\d{2}", tail[lessons:]))
    report(grade(count, LESSONS_WARN, LESSONS_FAIL), "Project lessons",
           "%d lines (cap %d, fails above %d): promote or retire" % (count, LESSONS_WARN, LESSONS_FAIL))
    if not re.search(r"(?m)^Global lessons:\s*\S", tail[lessons:]):
        report("WARN", "Global lessons line", "missing below Project lessons")
    return tail


def state_budget(root):
    data = content(root, ".ai/PROJECT.md")
    if data is not None:
        # a plain line of its own, optionally a list item: "State budget: 3,000 words"
        found = re.search(r"(?mi)^[ \t]*(?:[-*][ \t]+)?State budget:[ \t]*(\d[\d,]{0,7})[ \t]*words\.?[ \t]*$",
                          data.decode("utf-8", "replace"))
        digits = found.group(1).replace(",", "") if found else ""
        if digits.isdigit() and int(digits) > 0:
            return int(digits)
    return STATE_BUDGET


def check_state(root):
    data = content(root, ".ai/STATE.md")
    if data is None:
        report("FAIL", "STATE.md", "missing: see Self-heal in AGENTS.md")
        return
    text = data.decode("utf-8", "replace")
    words, budget = len(text.split()), state_budget(root)
    if words <= budget:
        report("PASS", "STATE.md size", "%d words (budget %d)" % (words, budget))
    else:
        # a warning, never a failure: a big project may need a big state file, but someone should have chosen that
        report("WARN", "STATE.md size", "%d words (budget %d): move history and logs to CHECKPOINTS.md or .ai/archive/, "
               "or raise State budget in PROJECT.md if every part is needed in every session" % (words, budget))
    stamps = re.findall(r"(?m)^Last updated:\s*(.*)$", text)
    if len(stamps) != 1:
        report("FAIL", "STATE.md Last updated", "%d lines found, exactly one expected" % len(stamps))
    elif re.match(r"\d{4}-\d{2}-\d{2}", stamps[0]):
        report("PASS", "STATE.md Last updated", stamps[0].strip()[:60])
    else:
        report("WARN", "STATE.md Last updated", "does not start with a YYYY-MM-DD date")


def check_routes(root, tail):
    """The routing table: every entry it declares must exist, and an entry that is a folder needs a README."""
    block = re.search(r"(?ms)^## Where things live[^\n]*\n(.*?)(?=^## |\Z)", tail)
    if not block:
        report("WARN", "routing table", "AGENTS.md has no Where things live block below its end marker: re-paste the bootstrap to add it")
        return
    rows = table_rows(block.group(1))
    checked, skipped, missing, bare, invalid = 0, 0, [], [], []
    for number, cells in enumerate(rows, 1):
        found = targets(cells[1]) if len(cells) > 1 else []
        if len(found) != 1:
            invalid.append("row %d (%s)" % (number, cells[0][:30] if cells and cells[0] else "no area"))
            continue
        target = resolve(root, found[0])
        if target is None:
            skipped += 1
            continue
        checked += 1
        if not os.path.exists(target.rstrip("/\\")):
            missing.append(found[0])
        elif os.path.isdir(target) and not any(os.path.isfile(os.path.join(target, name)) for name in ENTRY_NAMES):
            bare.append(found[0])
    if not rows:
        report("WARN", "routing table", "the table has no rows")
    if invalid:
        report("WARN", "routing table", "%d rows need exactly one backticked path under Open first: %s" % (len(invalid), shown(invalid)))
    if missing:
        report("WARN", "routing table", "%d of %d entries not found: %s" % (len(missing), checked, shown(missing)))
    if bare:
        report("WARN", "routing table", "folder with no README to enter by: %s" % shown(bare))
    if rows and not (invalid or missing or bare):
        note = " (%d not checked: another machine or a placeholder)" % skipped if skipped else ""
        report("PASS", "routing table", "%d entries exist%s" % (checked, note))


def check_state_paths(root):
    """A looser net: clear paths that STATE.md mentions in backticks and that no longer exist."""
    path = os.path.join(root, ".ai", "STATE.md")
    if not os.path.isfile(path):
        return
    checked, missing = 0, []
    for token in sorted(set(re.findall(r"`([^`\n]{3,240})`", read(path)))):
        token = token.strip().strip("\"'")
        if token.startswith("./") or token.startswith(".\\"):
            token = token[2:]
        if "/" not in token and "\\" not in token:
            continue
        if re.search(r"\s", token) and not re.search(r"(\.[A-Za-z0-9]{1,5}|[\\/])$", token):
            continue  # has spaces and does not end like a file or folder: a command with arguments
        if re.search(r"(^|\s)-{1,2}[A-Za-z]", token):
            continue  # carries a command-line flag
        absolute = token.startswith("~") or token.startswith("/") or re.match(r"^[A-Za-z]:[\\/]", token)
        if not absolute and not os.path.isdir(os.path.join(root, re.split(r"[\\/]", token)[0])):
            continue  # a path relative to somewhere this check cannot know
        target = resolve(root, token)
        if target is None:
            continue
        checked += 1
        if not os.path.exists(target.rstrip("/\\")):
            missing.append(token)
    if missing:
        report("WARN", "paths in STATE.md", "%d of %d not found: %s" % (len(missing), checked, shown(missing)))
    elif checked:
        report("PASS", "paths in STATE.md", "%d exist" % checked)


def root_paths(text, root):
    """Paths written in a text that are the project root or lie inside it, as normalized paths.

    A sibling whose name only starts the same (app-old, app.old) is a different folder and is left out.
    """
    flat = os.path.normcase(text.replace("\\", "/")).replace("\\", "/")
    full, home = norm(root), norm("~")
    forms = [full] + (["~" + full[len(home):]] if full.startswith(home + "/") else [])
    found = []
    for form in forms:
        for match in re.finditer(re.escape(form) + r"([\w\-./]*)", flat):
            rest = match.group(1).rstrip(".")
            if rest and not rest.startswith("/"):
                continue
            found.append(full + rest.rstrip("/"))
    return found


def without_own_paths(text, folder):
    """A text with every mention of one folder's own path taken out, so the rest can be searched for the root.

    Needed for a worker repo that sits inside the project root and whose name may hold spaces.
    """
    flat = os.path.normcase(text.replace("\\", "/")).replace("\\", "/")
    own, home = norm(folder), norm("~")
    for form in [own] + (["~" + own[len(home):]] if own.startswith(home + "/") else []):
        flat = re.sub(re.escape(form) + r"(?![\w\-])[^\s`\"']*", " ", flat)
    return flat


def imports(folder, text):
    """Where the @ import lines of an instruction file point, as normalized paths."""
    found = []
    for line in text.splitlines():
        line = line.strip()
        if line.startswith("@") and len(line) > 1:
            ref = os.path.expanduser(line[1:].strip())
            found.append(norm(ref if os.path.isabs(ref) else os.path.join(folder, ref)))
    return found


def check_entry_points(root):
    path = os.path.join(root, ".ai", "PROJECT.md")
    if not os.path.isfile(path):
        return
    sections = re.findall(r"(?ms)^## Entry points[^\n]*\n(.*?)(?=^## |\Z)", read(path))
    host = socket.gethostname().lower()
    try:
        account = getpass.getuser().lower()
    except Exception:
        account = ""
    here = (host, host + ":" + account)  # a line may name the machine, or the machine and the account on it
    for line in "\n".join(sections).splitlines():
        if not line.startswith("- "):
            continue
        fields = [field.strip().strip("`") for field in line[2:].split(SEP)]
        if not re.match(r"^(~|/|[A-Za-z]:[\\/])", fields[0]):
            continue  # not an absolute path, so not an entry-point line
        folder = os.path.expanduser(fields[0])
        machine = fields[1].lower() if len(fields) > 1 else ""
        role = fields[2].lower() if len(fields) > 2 else "operator"
        if not machine:
            report("WARN", "entry point", "%s has no hostname, checked as this machine (%s)" % (fields[0], host))
        elif machine not in here:
            report("PASS", "entry point", "%s belongs to %s, not checked by %s" % (fields[0], fields[1], here[1]))
            continue
        if role not in ("operator", "worker"):
            report("WARN", "entry point", "%s: role must be operator or worker" % fields[0])
            continue
        if not os.path.isdir(folder):
            report("FAIL", "entry point", "%s does not exist on this machine" % fields[0])
            continue
        texts = {}
        for name in ("AGENTS.md", "CLAUDE.md", "GEMINI.md"):
            full = os.path.join(folder, name)
            texts[name] = read(full) if os.path.isfile(full) else ""
        problems = []
        full, own, local = norm(root), norm(folder), norm(os.path.join(folder, "AGENTS.md"))
        outside = lambda item: not (item == own or item.startswith(own + "/"))
        if role == "operator":
            if not root_paths(texts["AGENTS.md"], root):
                problems.append("AGENTS.md does not name this project folder")
            if norm(os.path.join(root, "AGENTS.md")) not in imports(folder, texts["CLAUDE.md"]):
                problems.append("CLAUDE.md has no @ import of this project's AGENTS.md")
            if local not in imports(folder, texts["GEMINI.md"]):
                problems.append("GEMINI.md does not import ./AGENTS.md")
        else:
            if not texts["AGENTS.md"].strip():
                problems.append("no AGENTS.md with this repo's build rules")
            if local not in imports(folder, texts["CLAUDE.md"]):
                problems.append("CLAUDE.md does not import ./AGENTS.md")
            if texts["GEMINI.md"] and local not in imports(folder, texts["GEMINI.md"]):
                problems.append("GEMINI.md does not import ./AGENTS.md")
            for name in ("AGENTS.md", "CLAUDE.md", "GEMINI.md"):
                # anything inside the project root is operating memory, except the worker folder's own files
                inward = [item for item in imports(folder, texts[name]) if (item == full or item.startswith(full + "/")) and outside(item)]
                named = [item for item in root_paths(without_own_paths(texts[name], folder), root) if outside(item)]
                if inward or named:
                    problems.append("%s points workers to the operating memory" % name)
        if problems:
            report("FAIL", "entry point", "%s (%s): %s" % (fields[0], role, ". ".join(problems)))
        else:
            report("PASS", "entry point", "%s (%s) is set up" % (fields[0], role))


def check_obligations(root):
    path = os.path.join(root, ".ai", "OBLIGATIONS.md")
    if not os.path.isfile(path):
        return
    today = datetime.date.today()
    overdue, soon, unarmed, unreadable, live = [], [], [], 0, 0
    malformed, unknown, repeating = 0, 0, []
    for cells in table_rows(read(path)):
        if len(cells) != 6:
            malformed += 1
            continue
        status, repeats = cells[5].lower(), cells[3].lower()
        if status not in ("open", "done"):
            unknown += 1
            continue
        if status == "done":
            if repeats not in ("", "-", "no", "none", "once", "ended"):
                repeating.append(cells[0][:60])
            continue
        what, due, reminder = cells[0][:60], re.search(r"(\d{4})-(\d{2})-(\d{2})", cells[2]), cells[4]
        try:
            day = datetime.date(*[int(part) for part in due.groups()])
        except (AttributeError, ValueError):
            unreadable += 1
            continue
        live += 1
        if day < today:
            overdue.append("%s (%s)" % (what, day.isoformat()))
        elif (day - today).days <= DUE_SOON_DAYS:
            soon.append("%s (%s)" % (what, day.isoformat()))
        if reminder.lower() in ("", "-", "none", "n/a"):
            unarmed.append(what)
    if overdue:
        report("WARN", "obligations", "%d overdue: %s" % (len(overdue), shown(overdue)))
    if soon:
        report("WARN", "obligations", "%d due within %d days: %s" % (len(soon), DUE_SOON_DAYS, shown(soon)))
    if unarmed:
        report("WARN", "obligations", "%d open with no machine reminder: %s" % (len(unarmed), shown(unarmed)))
    if unreadable:
        report("WARN", "obligations", "%d open rows have no readable YYYY-MM-DD due date" % unreadable)
    if malformed:
        report("WARN", "obligations", "%d rows do not have the six cells (write a literal pipe as \\|)" % malformed)
    if unknown:
        report("WARN", "obligations", "%d rows have a status other than open or done" % unknown)
    if repeating:
        report("WARN", "obligations", "%d repeating rows are marked done: set the next due date and reopen, or write ended under Repeats: %s"
               % (len(repeating), shown(repeating)))
    if not (overdue or soon or unarmed or unreadable or malformed or unknown or repeating):
        report("PASS", "obligations", "%d open, none due within %d days" % (live, DUE_SOON_DAYS))


def note_global_lessons(tail):
    found = re.search(r"(?m)^Global lessons:\s*(\S.*)$", tail)
    name = found.group(1).strip().strip("`") if found else ""
    if not name or name.lower() == "none" or name.startswith("<"):
        return
    path = os.path.expanduser(name)
    if os.path.isfile(path):
        report("NOTE", "global lessons", "%d words in %s, loaded by every session of every project" % (len(read(path).split()), name))
    else:
        report("WARN", "global lessons", "%s was not found on this machine" % name)


def check_hook(root, install):
    hooks = git(root, "rev-parse", "--git-path", "hooks")
    if hooks is None:
        return  # not a git repo, or git is not installed
    if not os.path.isabs(hooks):
        hooks = os.path.join(root, hooks)
    target = os.path.join(hooks, "pre-commit")
    managed = HOOK % {"version": VERSION}
    own_git = os.path.join(root, ".git")
    inside = (os.path.isdir(own_git) and (norm(hooks) + "/").startswith(norm(own_git) + "/")
              and not git(root, "rev-parse", "--show-prefix"))
    if os.path.isfile(target):
        text = read(target).replace("\r\n", "\n")
        if text == managed:
            if os.name != "nt" and not os.access(target, os.X_OK):
                report("WARN", "commit hook", "%s is not executable, so git will not run it" % target)
            else:
                report("PASS", "commit hook", "installed")
        elif text in OLD_HOOKS:
            # an exact, unmodified hook that an earlier version of this script wrote: safe to replace
            if install and inside:
                with open(target, "w", encoding="utf-8", newline="\n") as handle:
                    handle.write(managed)
                os.chmod(target, 0o755)
                report("PASS", "commit hook", "updated to %s at %s" % (VERSION, target))
            else:
                report("WARN", "commit hook", "an older version of this hook is installed: run python .ai/check.py --install-hook")
        elif re.search(r"check\.py\"?\s+--staged", text):
            # someone's own hook, or this one with their additions: never overwritten
            report("NOTE", "commit hook", "a pre-commit hook the project maintains (%s) mentions the staged check. This script cannot confirm it runs" % target)
        else:
            report("WARN", "commit hook", "another pre-commit hook exists (%s): add a line that runs python .ai/check.py --staged" % target)
        return
    if not inside:
        # a subfolder of a larger repo, a linked worktree or a shared hooks path: never write there
        report("WARN", "commit hook", "none, and this script only writes inside this project's own .git folder. "
               "Hooks here live in %s: add a pre-commit hook there that runs python .ai/check.py --staged" % hooks)
        return
    if not install:
        report("WARN", "commit hook", "not installed: the orchestrating session runs python .ai/check.py --install-hook once")
        return
    try:
        os.makedirs(hooks, exist_ok=True)
        with open(target, "w", encoding="utf-8", newline="\n") as handle:
            handle.write(HOOK % {"version": VERSION})
        os.chmod(target, 0o755)
        report("PASS", "commit hook", "installed at %s" % target)
    except OSError as error:
        report("WARN", "commit hook", "could not write %s (%s)" % (target, error.__class__.__name__))


def main(argv):
    global STAGED
    STAGED = "--staged" in argv
    folders = [arg for arg in argv if not arg.startswith("--")]
    if folders:
        root = os.path.abspath(os.path.expanduser(folders[0]))
    else:
        root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    print("check.py %s | %s | host %s%s" % (VERSION, root, socket.gethostname(), " | staged content" if STAGED else ""))
    tail = check_agents(root)
    check_state(root)
    if not STAGED:
        check_routes(root, tail)
        check_state_paths(root)
        check_entry_points(root)
        check_obligations(root)
        note_global_lessons(tail)
        check_hook(root, "--install-hook" in argv)
    fails, warns = results.count("FAIL"), results.count("WARN")
    print("RESULT: %s (%d fail, %d warn)" % ("FAIL" if fails else "PASS", fails, warns))
    return 1 if fails else 0


if __name__ == "__main__":
    try:
        code = main(sys.argv[1:])
    except Exception as error:  # a broken check must never block work, and must never be silent
        print("WARN check.py crashed (%s): some checks did not run, report this" % error.__class__.__name__)
        code = 1 if "FAIL" in results else 0  # a FAIL found before the crash still counts
    sys.exit(code)
