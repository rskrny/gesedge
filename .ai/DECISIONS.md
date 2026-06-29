# Decisions
<!-- Append-only log of MAJOR decisions (architecture, strategy, cost, scope,
     reversibility). Minor implementation choices don't belong here. Newest on top.

Format:
## Decision: <name>
Date: YYYY-MM-DD · Status: Accepted | Rejected | Revisited
Context:
Options:
Decision:
Rationale:
Trade-offs:
Reversal trigger:
-->

## Decision: Rebuild the website from scratch on a new stack (vs. iterate)
Date: 2026-06-29 · Status: Accepted
Context: gesedge.com currently runs on Next.js / Vercel / Supabase (the dark-charcoal/salmon build). Ryan wants a complete redesign and update; most existing code is not expected to carry over.
Options: (a) Iterate on the current Next.js build; (b) Full redesign/rebuild on a new backend, hosting, and CMS.
Decision: (b) — full rebuild. Replace backend, hosting, and CMS; treat the current site as reference only.
Rationale: Current code is largely disposable for the intended direction; a CMS-driven site fits ongoing updates and a Ryan + Shiying (developer) workflow better.
Trade-offs: Discards working code and the existing Supabase/admin + email/analytics integrations; new stack means fresh setup and content/copy migration.
Reversal trigger: If new-stack evaluation shows rebuild cost outweighs benefit, or a chosen CMS/host can't meet bilingual EN/ZH or low-cost requirements, fall back to iterating the current Next.js site.
