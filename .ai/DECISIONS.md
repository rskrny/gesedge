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

## Decision: Anti-AI design system — two typefaces, no labels/ordinals/coordinates, audit before showing
Date: 2026-10-08 · Status: Accepted (Ryan: "the design cannot look like AI made it")
Context: Ryan caught the Plex Mono caps coordinates strip and "Two companies, one founder" as AI slop, after both had
been flagged and kept. A UI finish-gate agent, Codex and Kimi K2.6 then audited every page and agreed on the rest.
Decision: Plex Mono removed (Unbounded + Plex Sans only); eyebrows, coordinates, zero-padded ordinals, progress rail,
screenshot pins, tilted screenshot, label-left heads, dot-separated meta, repeated CTA pairs and copy fragments
removed; pages composed by content (price list, case studies, prose bios, plain documents). The full ban list is in
DESIGN.md §11 and AGENTS.md. Every page now gets a three-reviewer anti-AI audit before Ryan sees it.
Rationale: the site is the proof of capability; anything that reads machine-made costs credibility.
Trade-offs: the A/B comp details Ryan liked (tilt, big ordinals, coordinates strip) are gone.
Reversal trigger: Ryan asks for any of them back.

## Decision: No Supabase, no Vercel for GES — form copies move to Workers KV
Date: 2026-10-08 · Status: Accepted (Ryan: "We should not be using supabase or vercel anymore")
Context: the redo Worker still saved each form message to Supabase as a fallback to email; the privacy notice named
Supabase; the legacy Worker carried Supabase secrets; a retired `gesedge` Vercel project remained.
Options: (a) Workers KV; (b) D1; (c) email only.
Decision: (a). One KV key per message, 730-day TTL (matches the 24-month promise, never late). GES Supabase data
exported to `../business/supabase-export-2026-10-08/`; the two GES tables are now dormant (the drop was declined at the
permission prompt, so they stay until Ryan says otherwise). Supabase secrets + build vars removed from Worker
`gesedge`; privacy copy updated (no-ai-slop gate passed). The Supabase project stays: it also runs the Bloodline
booking system. Vercel `gesedge` project (old site still public at gesedge.vercel.app) awaits Ryan's one-click delete.
Codex agreed on KV.
Rationale: same vendor as hosting, free tier far above volume, automatic deletion.
Trade-offs: KV has no query UI beyond list/get; fine at a few messages a week.
Reversal trigger: volume or search needs outgrow KV → D1.

## Decision: gesedge.com swapped to the redo (Astro) — live 2026-10-08
Date: 2026-10-08 · Status: Accepted (Ryan: "proceed as best you see fit")
Context: Ryan approved the A+B look and the animated logo and asked to deploy.
Decision: Workers Builds on `gesedge` switched to `node scripts/build.mjs en` / `npx wrangler deploy`; zone Redirect
Rule for www→apex (the Next.js app used to do it); SMTP_PASS rotated and set on all three Workers; `redo/site` merged
into `main` (PR #3, `-s ours` merge of main first) plus a lockfile fix (PR #4) after the first Linux build failed.
Rationale: the build failure was safe by design (no deploy, old site kept serving); fix verified in Docker first.
Trade-offs: legacy secrets/build vars left on the Worker for a week so rollback to 88f06611 stays clean.
Reversal trigger: any production regression → dashboard rollback to 88f06611.

## Decision: Hero object = the logo animated in Blender (sliding dovetail), replacing the SVG exploded joint
Date: 2026-10-07 · Status: Accepted (Ryan asked for the logo animated, highest quality; storyboard reviewed by Codex + Kimi)
Context: Ryan: "check the logo again, we need it animated". On re-check, the hero SVG showed the joint exploded
vertically with the socket dropping onto the tail. A dovetail cannot assemble that way (the tail's head is wider
than the socket's mouth); it only slides in along its depth. The logo itself is the assembled joint with an even gap.
Options: (a) fix the SVG/CSS animation; (b) WebGL (DESIGN bans it); (c) pre-rendered Blender video.
Decision: (c). Cycles render from the master symbol's coordinates, satin ash + Ru-celadon wood (grain ~6%/3%),
orthographic camera so the face-on frame is the flat mark (colours within ~4/255 of the hex). 8 s loop: face-on →
3/4 → tail slides out along its channel → slides back and locks → face-on. Gap open in every frame. Delivered as
AV1 WebM + H.264 MP4 (800 and 520 px, 57–160 KB) on black with mix-blend-mode: lighten (decoded black = 0, so the
page ground shows through exactly); poster = face-on mark; reduced motion = still 3/4, no video fetched; pause button.
Rationale: highest visual quality at the lowest weight; no runtime 3D; correct joinery is the brand's own claim.
Trade-offs: changing the motion means a re-render (~25 min on the GTX 1650); headless screenshots show the poster only.
Reversal trigger: Ryan's review; or a browser/WebView where the blend shows a box.

## Decision: Site look = comps A + B merged (joint hero, real-work proof band, ledger); Plex Sans body
Date: 2026-10-07 · Status: Accepted (Ryan picked A and B; merge reviewed by GPT-5.6, Kimi K2.6, DeepSeek V4)
Context: Ryan rejected v1, saw three comps, said "I really like A and B". C (meridians) dropped.
Options: (a) joint hero, screenshot as the second beat; (b) both objects in one hero; (c) joint on home,
screenshots only on inner pages.
Decision: (a). Hero = exploded dovetail joint (A) + coordinates strip; proof band right after = the real email
triage screenshot tilted once, with two numbered pins (B); services = A's ledger. Timber band only for proof and
the closing call. Body text IBM Plex Sans (font change Ryan accepted by picking A/B); Plex Mono for labels only.
The HTML triage illustration (TriageFigure) is deleted; the real screenshot replaces it. ZH home uses the joint
until the sample audit exists.
Rationale: one object per screen (brand, then proof); all three outside models backed the order and flagged the
same template risks (alternating bands, right-aligned price table), which were fixed.
Trade-offs: two objects in the first two screens; the tilt is a known SaaS trope, kept small (−8°) because Ryan liked B.
Reversal trigger: Ryan's review of the restyled preview.

## Decision: No third-party booking/mail services; v1 look rejected → design comps before any swap
Date: 2026-10-07 · Status: Accepted (Ryan)
Context: Ryan dislikes services like Resend (free tier used elsewhere) and cal.com (too much access to his
Google account); his real schedule lives outside Google. He then rejected the v1 preview's look ("awful").
Decision: (1) Booking = Google Calendar appointment schedule on his existing account; bookings are requests he
confirms or moves by email; no calendar sync, no extra accounts; cal.com deleted. (2) Form notifications =
Worker SMTP to his existing Purelymail as website@gesedge.com (Reply-To always set), Supabase row as fallback.
Cloudflare Email Service rejected (needs Cloudflare MX on the sending domain → would displace Purelymail).
(3) Swap held until Ryan picks one of three homepage comps (refboard /comps/) and the site is restyled;
comps propose IBM Plex Sans for body text (Plex Mono kept for labels) — a change to the July font locks.
Rationale: fewer vendors and less data exposure; Ryan's taste is the gate for launch, not functional QA.
Trade-offs: no automatic conflict checks against his offline schedule; restyle delays launch.
Reversal trigger: booking volume makes manual confirmation painful; Purelymail sending limits are hit.

## Decision: Redo build = Astro static, two build targets (en, zh) → two Workers; Dovetail identity approved
Date: 2026-10-06 · Status: Accepted (identity: Ryan, "Yes approved"; architecture: Claude + Codex + Kimi)
Context: Ryan approved the C · Dovetail kit (`brand/`, PDF + logo files + tokens). The redo needs
gesedge.com (EN) and huanqiao.gesedge.com (ZH) from one repo, server-rendered, cheap, and the ZH site must
later move unchanged to an ICP-filed mainland host. The branch already has Astro 5.
Options: (a) one build + one Worker rewriting by host; (b) two build targets + two Workers; (c) two repos.
Decision: (b). One Astro repo, shared components/styles/data, `SITE=en|zh` selects srcDir, `site`, and
outDir (`dist/en`, `dist/zh`). Each output deploys as its own Worker with static assets
(`html_handling: force-trailing-slash`, `not_found_handling: 404-page`) plus a small script for
`POST /api/contact`. No React/three/GSAP (3D shelved). Fonts self-hosted; PuHuiTi subset per build from
the characters in the built HTML. Previews on workers.dev (`gesedge-preview`, `huanqiao-preview`, noindex);
the live `gesedge` Worker and DNS change only at the approved swap. DESIGN.md rewritten for the redo
(July Crossing version archived); old globe brand files archived.
Rationale: Codex — `run_worker_first` matches paths, not hosts, so (a) runs the Worker on every request and
mixes caches, sitemaps and 404s across hosts; (b) gives each site root-native URLs and a `dist` that can be
copied to a mainland host as-is. Kimi — unfiled domains can't use WeChat JSSDK share cards, so titles carry
the message; no ICP wording before a number is issued; no Google-hosted assets.
Trade-offs: two deploy targets to keep in sync; a shared-component change needs both builds checked.
Reversal trigger: the ZH site is dropped or merged into gesedge.com, or the mainland move is abandoned.

## Decision: gesedge.com REDO — sales site for two audiences; July design locks revised
Date: 2026-10-06 · Status: Accepted (Ryan, interview Rounds 1–3) · Revises "Design system locked" (07-06)
Context: Ryan judged the live site "very bad and vibecoded" and asked for a near-total redo, decided through a
structured interview (6 agency-agent lenses + Kimi, reviewed by Codex). Record: `.ai/research/redo-interview.md`
(public-safe) + private notes outside the repo. The business changed since July: 寰桥 now sells to Chinese
factories going to US/EU; GES sells AI systems to US businesses; revenue is thin.
Decision: (1) Site job = **sales site that proves capability** (fast, readable, crawlable pages; launch
without waiting for 3D). Replaces DESIGN.md §1 awards register as the optimization target (craft bar stays).
(2) **Hero = real work + a small bridge accent**; the full "Crossing" world is shelved. (3) **Mostly dark**;
DNA from Ryan's loves (igloo.inc, zolplay.com): one sculptural object, corner micro-labels, a coordinates
line, monochrome restraint. Hated: Linear, Stripe, XTransfer, the current site. (4) **Fonts kept**
(Unbounded + IBM Plex Mono + PuHuiTi). Logo + palette via the brand-identity skill (3 sets → Ryan picks).
(5) **GES and 寰桥 = sister companies under one founder** (寰桥 owned by Ryan personally; never "GES 旗下";
drop 寰桥策略; C14 Space only in Ryan's bio). (6) **Client names: plan for them, confirm before publishing**
(replaces the blanket ban). (7) **Language by audience, not full mirror**: real server-rendered /zh pages;
ICP/.cn as a parallel check. (8) **Offers:** US — AI operations pilot, owner's dashboard retainer, "your
person in China" (advisory only); factories — buyer's-eye audit, buyer-ready English site (5–8 pages), AI
inquiry diagnostic → pilot. (9) **US retainers are the cash engine for 60–90 days**; factories are a bounded
test track (discovery via US shipping records, outreach in English, Kenny on calls). (10) **Copy gate:**
EN via no-ai-slop; ZH via Kenny native → qu-ai-wei → lieflat-less-ai-tone → Kimi.
Rationale: the decision-makers are now buyers and AI answer engines, not design juries; launch speed matters
more than a 3D world; the founder's real story (American in Chengdu, US import-operations background, built
working AI systems) is the moat.
Trade-offs: less spectacle than The Crossing; per-client permission adds a pre-launch step.
Reversal trigger: Ryan wants the full immersive world back after the identity is chosen, or factory demand
proves false after the 60-day test.

## Decision: HuanQiao positioning + hosting direction (self-host behind Cloudflare Tunnel); developer onboarded
Date: 2026-10-05 · Status: Accepted (Ryan) — mainland-China delivery path still OPEN
Context: Ryan invited developer Kenny (GitHub `kawasakiakasei`, write) to the repo, which stays
PUBLIC (Ryan confirmed). DNS moved to Cloudflare 2026-10-01; site still on Vercel. No rebuild deadline.
Decision: (1) HuanQiao's market angle = Chinese companies entering US + EU markets: FDE, branding,
marketing, localization. GEO + SEO push once the site is good. (2) Keep building in GitHub; when
hardware arrives, self-host on an own mini server served via Cloudflare Tunnel. (3) Do NOT port the
legacy Next.js app to Workers now: move hosting once, with whichever codebase goes live
(Claude, Codex and Kimi agreed).
Rationale: Tunnel needs no inbound ports or static IP and keeps DNS/TLS where it already lives;
porting code slated for replacement is wasted work and adds regression risk.
Trade-offs / open: Cloudflare free (Tunnel included) has no mainland-China network, so HuanQiao's
mainland buyers get the slowest path. A site served from a mainland box without ICP filing is
non-compliant whatever the tunnel does. ICP needs a mainland server plus a domain held at a
mainland-qualified registrar in the WFOE's name (Porkbun can't be filed — Kimi + Codex/Tencent docs;
transfer gesedge.com or buy a separate `.cn`). Likely end-state: one codebase, two delivery paths —
GES (EN) on Cloudflare; HuanQiao (ZH) on an ICP-filed mainland host. Costs: `.ai/research/hosting.md`.
Update same day: Ryan expected the site to be off Vercel already. With no rebuild deadline the
Next.js site may stay live for months, which weakens the "port is throwaway" argument — the
Vercel exit is Ryan's call to make now.
Reversal trigger: mini-server location or HuanQiao's audience changes; mainland tests show
Cloudflare is acceptable from China.

## Decision: Production swap DEFERRED until the punch list is complete (hold decision)
Date: 2026-07-06 · Status: Accepted
Context: Ryan asked to "push it all to main" to see the rebuild at gesedge.com. Investigation: Vercel git integration auto-deploys main → production, the project is pinned framework=nextjs (Astro would misbuild/fail), and the branch is an interim one-pager (v0 hero + card grid Ryan already judged below the bar; no routes/contact/中文 — old URLs would 404).
Decision: HOLD production. Ryan reviews via a Vercel preview deployment of the branch instead. gesedge.com swaps ONLY when the punch list is done — The Crossing world, ledger work section, copy rewrite, 中文, route/contact parity + redirects — and Ryan explicitly approves the swap (at which point: flip Vercel framework to astro, merge, verify).
Rationale: The site is the proof of capability; publishing an interim build under the awards-register positioning would damage the exact credibility it exists to earn. A one-time "push it" request made on the belief the work was finished is not durable authorization to deploy unfinished work.
Trade-offs: Ryan waits longer to see it on the real domain; preview URLs carry Vercel branding/protection.
Reversal trigger: Ryan can order the swap early at any time; if so, run the hardening pass first (routes, redirects, contact capture, OG parity) in the same change.

## Decision: Design system locked — DESIGN.md is the design source of truth ("The Crossing")
Date: 2026-07-06 · Status: Accepted · Refines "The Router" (below) after Ryan's critique of v0
Context: Ryan reviewed the v0 hero: routing concept "okay" but reads generic (primitives in a void vs igloo's world); fonts didn't match his accepted pick (Unbounded F16 — I shipped Schibsted by mistake); client names must not appear; card-grid work section and italic-emphasis headline words are AI tells; copy needs a rewrite; multilingual was wrongly deferred. He asked for a creative-director grilling (8 structured questions) before any further design. Two research briefs (igloo-tier art direction · work-section patterns) ground the system.
Decision: All answers + research synthesized into root **DESIGN.md** (the constitution). Locked: (1) **Register = awards/peers/press**, not brochure-SMB. (2) **World = The Crossing** — night sea between a warm West harbor shore and cool East city shore; the bridge is the router; cast = harbor works as inputs, lit arrival piers as outcomes, one passing ship, distant city glow (beacon towers rejected); material law = light in glass/steel; fog==bg; 0–1 lights; bloom = event only. (3) **Type = Unbounded (rare/huge) + IBM Plex Mono system** + PuHuiTi ZH; Schibsted removed. (4) **Work = numbered editorial ledger** with prose annotations (patterns 1+6). (5) **Anonymity = industry descriptors in copy, capability labels in scene HUD; client names nowhere.** (6) **Interaction: beams are pointer-fed (idle=dim); click = send-a-request packet; mobile tap equivalent.** (7) Loader = theatrical overture now; sound = phase 2. (8) EN+ZH from the foundation. House convention: "the Crossing Rule" — every hairline grades warm→cool and runs a packet on interaction.
Rationale: v0 had engineering without art direction — the exact inversion of how igloo-tier sites are made (previs/world/material first). The Crossing makes the brand name (寰桥 world bridge) literal and unclonable; the register decision resolves the tone ambiguity that produced brochure-flavored copy.
Trade-offs: Awards register accepts bouncing some non-technical SMB visitors; world build requires water/terrain/structure work (mostly procedural + one sourced ship model); full copy rewrite pending.
Reversal trigger: If The Crossing can't hit the material/atmosphere bar within performance budget (<3MB, 30fps floor), simplify the world before abandoning it (fog+water+bridge alone still beats the void).

## Decision: Hero + homepage = "The Router" (AI routing-tree scene → editorial handoff), tiered for performance
Date: 2026-07-06 · Status: Accepted
Context: Ryan set the hero concept himself: "a very visually pleasing decision or routing tree of AI architecture," drawing on ShopMyRoom + the Goldie email triage, with the wallet note-taker featured; igloo.inc remains the interaction north star; he stressed balancing wow vs client-device compute. Asked 3 forks via structured questions.
Decision: (1) Homepage = hero-world→editorial: the scene owns the first ~4 scroll viewports (scroll-as-camera: wide tree → dive to core → bank along the Goldie branch → constellation), then hands off to editorial DOM sections. (2) Packets are abstract glowing lights that "resolve" into labeled outcomes at endpoints. (3) All four branches featured: Goldie triage, ShopMyRoom, Wallet e-writer (labeled R&D), Bloodline. Engineering: procedural scene (no asset loads), 12 baked route LUTs + one InstancedMesh, single key light + bloom (emissive>1), device tiers 0/1/2 + runtime demotion + reduced-motion static fallback, frameloop paused off-view.
Rationale: A routing tree IS what GES sells (systems that read/decide/route) — more specific than any globe, inherently animated, and an order of magnitude cheaper to render than igloo's modeled world, so the igloo interaction grammar (loader beat, scroll-as-camera, one continuous lit scene) fits within a small-business perf budget (~380KB gz JS, 58fps w/ bloom in preview).
Trade-offs: Less raw spectacle than a fully modeled igloo world; endpoint labels are DOM (crisp/accessible but not "in" the 3D material).
Reversal trigger: If after polish the tree still reads below the igloo bar to Ryan, escalate to a fuller continuous-world treatment (option b from the fork) rather than falling back to a static hero.

## Decision: CMS = none for now — Astro Content Collections (git-based content); Strapi dropped from the critical path
Date: 2026-07-06 · Status: Accepted · Supersedes "self-hosted Strapi" (2026-06-29)
Context: Ryan tried Strapi on another project and doubts its fit; he delegated the call ("you make the call"). Operators are two technical people; content updates are low-frequency; Ryan's editing workflow is AI-assisted (Claude Code editing files beats a CMS admin for him); the site is a showcase, not a content farm.
Options: (a) keep self-hosted Strapi (Linux box at a friend's house); (b) hosted headless CMS; (c) Astro Content Collections — markdown/MDX in the repo, schema-validated, statically built.
Decision: (c). Projects/blog/copy live as content collections; the site ships fully static on the existing Vercel setup. Contact-form backend decided separately when that page is built (Astro endpoint + existing Supabase vs mail relay).
Rationale: Zero server ops in the serving path (no dependency on the friend's-house box), free hosting stays free, git = versioning + review, bilingual posts are just files, and AI-assisted editing works directly on the repo. Shiying can still own future dynamic services where they add value instead of babysitting a CMS.
Trade-offs: No browser admin UI; non-technical contributors can't edit; content deploys ride site builds.
Reversal trigger: A non-technical editor joins, or update frequency makes commits annoying → adopt a HOSTED headless CMS (not self-hosted ops).

## Decision: Next phase = build an igloo.inc-level immersive site; identity paused (logo deferred, all candidates rejected)
Date: 2026-07-06 · Status: Accepted
Context: After a full session on identity, Ryan is not satisfied with ANY logo candidate — the globe/coin/arc family (rejected as AI-generic), the "The Edge" E-as-bridge icon (hand-coded SVG hit a quality ceiling — "3 lines somewhat connected"), or the wordmark-led voices (Switzer / Zodiak / IBM Plex Mono + a warm→cool West→East "bridge" rule). He redirected: go deep on the WEBSITE, make it look/behave like igloo.inc ("complicated yet impressive animations"), and clone its interaction features.
Decision: Pause identity. Next phase builds the immersive site with igloo.inc as the explicit north star — clone its TECHNIQUES (scroll-as-camera WebGL, one lit continuous scene, loader-as-brand-moment, scene transitions) on our stack (Astro + R3F/drei/postprocessing + GSAP + Lenis + Paper Shaders). Prototype ONE signature moment (the hero) first, verify, then expand to the IA + Strapi. The logo is revisited later (the site may inform it). Runway captured in `.ai/research/igloo-study.md`.
Rationale: The site — not a glyph — is the actual proof of capability and the conversion engine; it's the right place to invest, and it's what convinced no one when it was just a logo. Igloo is already our top immersive reference. Building the signature moment early also de-risks the biggest technical unknown (WebGL performance).
Trade-offs: Igloo-grade is a large, performance-risky build; must engineer poster/fallback/tiering from the start and sequence scope (one moment first). "Clone" = techniques, not their assets/content.
Reversal trigger: If the immersive approach can't hit acceptable performance on mid-range devices, fall back to lighter visuals with selective showcase moments (per the existing design-lane decision).

## Decision: Logo direction = "The Edge" — the E of GES as a bridge (custom letterform); globe/coin/arc family rejected
Date: 2026-06-30 · Status: Accepted (variant E1/E2/E3 pending Ryan) · Supersedes Beam + the whole globe family
Context: Designed directions B (world-bridge gate / meridian coin) and C (edge monogram), rendered them, ran the 3-critic vision panel (cold-read, senior brand, bilingual-type). The cold-read AND the brand critic INDEPENDENTLY judged the globe/arc/coin family AI-generic (sunrise-stamp, clock, no-entry; "the globe+arc IS the AI tell"; 3–4/10). The monogram (C) was the only "authored"-looking mark (6.5/10) and the only one to survive favicon size.
Decision: Drop the globe/circle family entirely. Adopt "The Edge": the E of GES (E = "Edge", the operative word) rendered as a bridge — three confident arms so it reads as a letter, the MIDDLE arm a warm→cool (West→East) span = the 桥/crossing. Three variants: E1 arch (arched middle span), E2 arch sealed (E in a 印章 seal/chop — best favicon + bilingual pairing), E3 cantilever (deck overshoots onto an East pier). Bilingual lockup fixes from the type critic applied.
Rationale: An authored custom letterform is ownable/trademarkable, unmistakably not a globe/ring, favicon-robust, and (per both critics) the move that escapes "AI-generated." The E carries "Global Edge"; the bridge middle arm carries 寰桥/cross-border; warm→cool carries West↔East. Meaning is built into the geometry, not bolted on.
Trade-offs: Drops the literal globe/world imagery the brand leaned on for several sessions (can return in the hero scene, not the mark). A custom letterform needs careful optical refinement before production.
Reversal trigger: If Ryan wants the literal world/bridge kept in the mark itself, revisit a non-cliché globe abstraction (Cathay-brushwing-style single gesture), not the rejected coin/arc.

## Decision: Re-source logo inspiration from REAL exemplars (7-scout sweep) before designing; Beam → baseline/fallback
Date: 2026-06-30 · Status: Accepted · Revisits the Beam "build now" decision below
Context: Ryan judged the AI-generated marks — including the vision-verified Beam — too basic and obviously AI-generated. The miss wasn't finish, it was that "globe + arc" is the generic default. Rather than generate more, mirror the website-sourcing method (the 6-subagent run behind design-references.md).
Options: (a) iterate the Beam again; (b) generate a fresh batch of AI marks; (c) SOURCE real best-in-class logo + animation exemplars first, extract principles, then design originals.
Decision: (c). Ran 7 parallel research scouts across non-overlapping lanes (bridge/connection · globe-sans-cliché · East↔West bilingual systems · boutique monogram systems · 2D logo motion · logo-in-site choreography · 3D/shader marks). Captured to `.ai/research/logo-references.md`: 4 convergent principles + 3 original-mark directions (A "The Seam" / B "The 寰桥 Gate" / C "The Edge-Cut Monogram"). Beam stays documented in logo-marks.md but is demoted from "the pick" to a baseline/fallback.
Rationale: The fix for "looks AI-generated" is a single PROPRIETARY structural move (a joint/seam, a gate/coin frame, a cut derived from the GES wordmark) — every lane converged on this. Grounding the design in real exemplars + their techniques makes the mark feel engineered, not generated, and bilingual-credible.
Trade-offs: Adds a sourcing+synthesis cycle before any mark is drawn (slower to a candidate), but de-risks shipping another generic mark.
Reversal trigger: If, after rendering B+C through the vision pipeline, the evolved Beam (A) still reads strongest, revert to it as the pick.

## Decision: Logo mark = Beam (globe + great-circle span), after a vision critique killed the G-Bridge "C"
Date: 2026-06-30 · Status: Accepted (pending Ryan's final confirm) — supersedes the #4 G-Bridge pick
Context: Rendered the chosen #4 mark to PNG (headless Chrome) and ran 3 vision-enabled critics (brand designer, cold first-impression, bilingual-type). Unanimous: #4 reads as an open "C"/Pac-Man, the bridge (the whole point) is absent, premium finish but generic/unresolved idea; the small/favicon version loses the bridge entirely.
Decision: Pivot the mark to the **Beam** direction — a globe crossed by one warm→cool great-circle span out to a West (warm) and East (cool) node = globe + bridge/route in a single move. Re-rendered and verified by eye that it reads clean + premium. Span (#1) is the fallback if a more literal arched-bridge read is wanted.
Lockup fixes (type critic, pixel-measured): Chinese was 1.32× tall / 1.5× heavy / baseline-low → set 成都寰桥 to ~0.8em, one weight lighter, optically centered (not baseline-aligned); swap Noto Sans SC → Alibaba PuHuiTi 3.0 (free commercial, distinctive, holds 寰 small); keep tracked-caps Schibsted Grotesk for GES (~0.12em, Medium).
New capability: render any design → headless-Chrome screenshot → vision-agent critique. Use it on every logo/design pass (no more judging designs blind).
Reversal trigger: If Ryan wants the bridge unmistakable → switch to Span. If PuHuiTi's look/licensing disappoints → HarmonyOS Sans SC.

## Decision: Type = best free system; Logo = "world bridge" (寰桥), not a generic globe
Date: 2026-06-29 · Status: Accepted (type); logo direction pending Ryan's pick
Context: Ryan wants free type ("use what's best") and a UNIQUE logo that carries both GES and 成都寰桥 — explicitly not matching every other globe logo.
Decision: (Type) Use the best FREE system — a confident grotesk (display/UI) + a mono (technical labels) + a strong-weight free CJK; exact cuts finalized in the build. (Logo) Build on the insight that 成都寰桥 = "world bridge" (寰 = globe + 桥 = bridge) and GES = Global Edge — so the mark is a BRIDGE / great-circle span between US↔China, NOT a globe-with-a-line. Warm node = West/US, cool = East/China. 4 directions presented (Span / Beam / Meeting / G-Bridge); awaiting pick.
Rationale: Roots the mark in the actual meaning of the Chinese name → unique, meaningful, bilingual by design. Free type respects budget; the expert said "finish" matters more than the foundry license.
Trade-offs: Free type forgoes top-tier foundry polish (mitigated by strong free choices + real material/motion).
Reversal trigger: If no free CJK reads premium enough at display size, license one distinctive Chinese face.

## Decision: Visual identity = Ink Wash palette (P10) + Unbounded display (F16)
Date: 2026-06-29 · Status: Accepted (core); body font + accent + rhythm pending
Context: After two rounds, Ryan rejected the common AI-default fonts (Inter/Space Grotesk/Fraunces) and the dark-navy/cyan colorway. From a 20-palette × 20-font set he chose P10 + F16.
Decision: Near-monochrome warm paper-and-ink palette (paper #F0ECE2, sumi ink #1A1916, warm grays #7C786E / #C3BCAD) + Unbounded as the display/wordmark face. Personality comes from type + motion, not color.
Open: pure-mono vs one reserved pigment accent; body typeface (Hanken Grotesk placeholder vs a mono); section rhythm (mockup uses dark immersive hero → light editorial body).
Rationale: Distinctive and anti-vibe-coded; pairs a restrained canvas with a bold rounded display for contrast.
Trade-offs: Unbounded is display-only (needs a body pairing); near-mono leans hard on typography/layout/motion — less margin for weak execution.
Reversal trigger: If pure-mono feels flat in the full prototype, introduce one accent and/or a secondary type voice.

## Decision: Design lane = editorial-premium base + Igloo-style immersive lean
Date: 2026-06-29 · Status: Accepted
Context: From the 3-lane reference board, Ryan picked the editorial-premium base and also wants the immersive WebGL feel of Igloo Inc (igloo.inc).
Decision: Editorial-premium foundation (type-led, restrained, bilingual, anti-stat-box) with a stronger immersive/WebGL lean than a pure editorial site — scene-driven hero + signature 3D moments (Igloo influence), kept performant.
Rationale: Hits premium + cross-cultural + technically-advanced + showcase; the Igloo lean raises the "wow" while the editorial base keeps it premium and bilingual-credible.
Trade-offs: More WebGL/motion = more performance-engineering discipline (poster-first, viewport-gated, tier-down).
Reversal trigger: If the immersive lean can't stay performant or starts to feel gimmicky, dial back toward the restrained editorial base.

## Decision: Frontend = Astro + React islands
Date: 2026-06-29 · Status: Accepted
Context: Research recommended Astro + React islands; Ryan greenlit building ("build gesedge").
Decision: Build the frontend on Astro, with React islands (React Three Fiber / GSAP) for the 3D + motion pieces; consume Strapi REST per locale.
Rationale: Near-zero JS for static content (fast, light on the self-hosted box), React/R3F exactly where needed, easy for Ryan + AI to build while Shiying owns Strapi/server.
Trade-offs: If it ever becomes one persistent full-page WebGL app, Next.js would be smoother. Acceptable given discrete showcase sections.
Reversal trigger: Design evolves into a single continuous WebGL experience across all routes → reconsider Next.js.

## Decision: Backend + CMS = self-hosted Strapi on a Linux box
Date: 2026-06-29 · Status: Accepted (working direction)
Context: The rebuild needs a backend + CMS the team can self-manage cheaply. Ryan has a Linux PC (~20 GB RAM, 1 TB) at a friend's house and wants to use Strapi.
Options: (a) hosted SaaS CMS (Sanity/Contentful); (b) WordPress; (c) self-hosted Strapi (open-source headless CMS) on the Linux box.
Decision: (c) self-hosted Strapi. Headless — it provides the admin + content API; the public frontend is a separate app that consumes it.
Rationale: Open-source, free, full control, fits cross-border data needs, and Shiying (Python/backend/server) can own the server + API integration. 20 GB/1 TB is ample for expected low traffic.
Trade-offs: Self-hosting ops (domain→box, SSL, uptime, backups). Headless means a separate frontend build/choice. Node-based (Shiying is Python-strongest).
Reversal trigger: If self-hosting proves unreliable, or Strapi's i18n/media can't meet the bilingual showcase needs, move to a hosted headless CMS.

## Decision: Design direction = premium × cross-cultural × technically-advanced showcase
Date: 2026-06-29 · Status: Accepted
Context: The site's job is to prove GES can build complex things; v1 primarily targets US SMBs (secondary: cross-border, Safepacific).
Options: (a) clean/minimal brochure; (b) premium showcase that demonstrates technical capability through the site itself.
Decision: (b). Premium, cross-cultural, technically advanced — more ambitious than the current ocean+globe, engineered to stay performant.
Rationale: Credibility for a technical consultancy comes from showing, not telling. Low traffic lets us afford richer per-visit experiences.
Trade-offs: Higher build complexity and performance risk; needs disciplined engineering (lazy-load, fallbacks) to avoid "impressive but crashes."
Reversal trigger: If the rich approach can't hit acceptable performance on mid-range devices, fall back to lighter visuals with selective showcase moments.

## Decision: Rebuild the website from scratch on a new stack (vs. iterate)
Date: 2026-06-29 · Status: Accepted
Context: gesedge.com currently runs on Next.js / Vercel / Supabase (the dark-charcoal/salmon build). Ryan wants a complete redesign and update; most existing code is not expected to carry over.
Options: (a) Iterate on the current Next.js build; (b) Full redesign/rebuild on a new backend, hosting, and CMS.
Decision: (b) — full rebuild. Replace backend, hosting, and CMS; treat the current site as reference only.
Rationale: Current code is largely disposable for the intended direction; a CMS-driven site fits ongoing updates and a Ryan + Shiying (developer) workflow better.
Trade-offs: Discards working code and the existing Supabase/admin + email/analytics integrations; new stack means fresh setup and content/copy migration.
Reversal trigger: If new-stack evaluation shows rebuild cost outweighs benefit, or a chosen CMS/host can't meet bilingual EN/ZH or low-cost requirements, fall back to iterating the current Next.js site.
