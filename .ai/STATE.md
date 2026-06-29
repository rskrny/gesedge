# Project State
<!-- Cold-start handoff. Keep under ~600 words. Move stale detail to .ai/archive/.
     Fields: Status · Next actions · Blockers/Open questions · Active context ·
     Recent changes · Handoff. Drop any field that's empty. -->

## Status
Active — full redesign/rebuild of the GES + Chengdu Huanqiao website (gesedge.com).
The existing Next.js / Vercel / Supabase site is treated as legacy/disposable; most
code will not carry over. Backend, hosting, and CMS are all being replaced (choices
TBD). Operating framework (`.ai/`) just initialized; CLAUDE.md now points to AGENTS.md.

## Next actions
1. Decide the new stack: backend, hosting, and CMS (three open decisions). Log each in DECISIONS.md.
2. Define the design direction — this is a from-scratch redesign; the current theme is not locked.
3. Scope what (if anything) carries over from the current site — content, copy, assets — vs. rebuilt.

## Open questions
- New backend / hosting / CMS: any candidates already in mind, or evaluate options together?
- Keep the gesedge.com domain and the bilingual EN/ZH structure? (assumed yes)
- Design: evolve the current look or start clean? (assumed clean, per "redesign")

## Active context
- Operators: Ryan (owner) + Shiying (developer).
- Audience: prospective clients of GES (US SMBs needing software) and Chengdu Huanqiao (US↔China cross-border).
- Persisting constraints: anti-AI-slop writing rules (now in AGENTS.md), free/low-cost preference, surgical changes, approval before any production deploy.
- Legacy reference: `DEVELOPMENT_LOG.md` describes the current (soon-to-be-replaced) build and the still-valid email/DNS infra. The stale `CONTEXT.md` ("Midnight Sapphire" snapshot) was removed; its content survives in `../archive/` if ever needed.
- Staged for the redesign (untracked, not committed): 3 China source photos in `_source-assets/` (gitignored); `scripts/optimize-heroes.mjs` (old image util — keep-or-drop is a rebuild decision).

## Recent changes
- Initialized `.ai/` framework. Migrated CLAUDE.md's writing rules + gstack tooling into AGENTS.md; CLAUDE.md is now a pointer.
- Cleaned the working tree: gitignored local tooling (`.claude/`, `.dual-graph/`, `*.bat`) and `_source-assets/`; removed stale `CONTEXT.md`. Committed the framework and the pending DEVELOPMENT_LOG update to local `main` — NOT pushed (push auto-deploys to production).

## Handoff
This is a ground-up website redesign. The immediate fork is the three stack decisions
(backend, hosting, CMS) plus design direction. Nothing is chosen yet — start there.
