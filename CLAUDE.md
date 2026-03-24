# GES Website — Claude Configuration

## gstack

Use the `/browse` skill from gstack for all web browsing. Never use `mcp__claude-in-chrome__*` tools.

Available skills: /office-hours, /plan-ceo-review, /plan-eng-review, /plan-design-review,
/design-consultation, /review, /ship, /land-and-deploy, /canary, /benchmark, /browse,
/qa, /qa-only, /design-review, /setup-browser-cookies, /setup-deploy, /retro,
/investigate, /document-release, /codex, /cso, /autoplan, /careful, /freeze, /guard,
/unfreeze, /gstack-upgrade.

If gstack skills aren't working, run `cd .claude/skills/gstack && ./setup` to build the binary and register skills.

## Writing Rules — Anti-AI-Slop

All published writing (blog posts, website copy, case studies, social posts) must follow these rules:

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
