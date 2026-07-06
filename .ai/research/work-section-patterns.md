# Work-Section Patterns Brief (2026-07-06)
<!-- Research agent output. Evidence base for DESIGN.md §6/§9. Exact pixel values for
     basement.studio measured from their open-sourced repo (basementstudio/website-2k25). -->

Field notes: obys.agency, lusion.co, activetheory.net, 14islands.com, basement.studio,
OFF+BRAND (itsoffbrand.com), locomotive.ca, phantom.land, Awwwards SOTY material.

## Patterns (anonymity fit noted — our constraint: industry descriptors, no client names)

**1. THE LEDGER** (basement /showcase; phantom archive) — Full-width rows, 12-col grid (4-col
mobile), 12px gutters, 16px page pad. Row: name cols 1–4 @24px (600, -0.03em, lh 1.0) ·
categories cols 5–10 @13px · year col 11 · arrow col 12. 1px top borders @20–30% white.
Hover: animated diagonal hatch fills row (64px SVG tile, 1px lines @10%, 6s linear pan),
cursor swaps to `n-resize`; click = accordion expands a 16:9 lazy video inline. Variant:
cursor-following media preview with lerp + velocity swing. *Authored because:* table = curatorial
density; invented conventions (hatch, cursor swap). **Anonymity: excellent. Weight: DOM+CSS.**

**2. THE STICKY DECK** (basement homepage, values from repo) — 4 curated panels, each
`position: sticky; top: 9.2rem` (6.7rem mobile), z-index incrementing — a deck accumulating.
Panel: media cols 1–7 (1px inset border @20%) · excerpt+categories cols 8–10 @20px · title
right-aligned cols 11–12 @38px (-0.04em). Section heading 76px. Hover: title slides x24→0 over
200ms, arrow fades in on 150–200ms delay (two-beat choreography). *Authored because:* 7/3/2
asymmetry, title opposite the media, nothing centered or equal-height. **Anonymity: strong
(excerpt is the payload). Weight: DOM+CSS.**

**3. THE NUMBERED CASE REEL** (OFF+BRAND, Agency SOTY) — Full-viewport slides, one project per
screen: oversized ordinal ("11") as graphic, bold title, full-width media, service tags in a
bespoke symbol legend (● brand, △ dev, ⁂ WebGL) repeated sitewide, "→" case link. *Authored
because:* one-at-a-time pacing = confidence; invented symbol taxonomy; ordinal as typography.
**Anonymity: excellent ("Nº 03 — a Cape Cod charter operation"). Weight: motion (snap-scroll +
transitions), no WebGL required.**

**4. THE MASKED GRID THAT BLOOMS** (obys.agency) — 19 projects numbered 01–19, two metadata
lines each ("01 — Architecture, Furniture" / services). Tiles hidden in a strict 12-col grid
until hover, then bloom into full-bleed WebGL video; shock-orange accent line snaps in. Layout
switcher: same data as vertical/horizontal/grid views. Custom neo-grotesque drives everything;
reduced-motion swaps glyph morphs for fades. *Authored because:* a layout switcher proves a
SYSTEM under the content. **Anonymity: moderate (leans on rich media). Weight: WebGL full /
~70% character in DOM+CSS degraded.**

**5. MAGAZINE ROWS + ARCHIVE TAIL** (14islands) — Full-width editorial rows, one project each,
~16:9 imagery up to 3840px, radically minimal text (name + sector tag). Below: collapsed
text-only archive of secondary work. *Authored because:* visible two-tier editorial judgment;
copy scarcity = confidence. **Anonymity: strong once the sector tag is promoted to headline.
Weight: DOM+CSS (+optional scroll parallax).**

**6. THE ANNOTATED CATALOGUE** (phantom.land /work, 92 projects) — Single column grouped by
collapsible year headers (2026→2016). Entry: large bold title · genuine 2–3 sentence prose
paragraph · 4–5 lowercase tags · client bottom-right lighter. NO images in the list. *Authored
because:* prose is the ultimate anti-template move — someone who understood the project had to
write it; year ledger reads as institutional memory. **Anonymity: BEST FIT of all —
descriptors slot in invisibly. Weight: fully static DOM.**

**7. THE PRINT-SHOP LEDGER** (locomotive.ca) — Mixed staggered grid, 44 projects: client
heading, sector, city/country line, pill service tags, "©2026" mark, award counts. Filter bar
with zero-padded counters ("E-commerce (08)"). *Authored because:* print conventions (colophon
metadata, © marks, padded counters) signal graphic-design heritage. **Anonymity: strong
("Cape Cod, US — Charter fishing — Digital — ©2025"). Weight: DOM+CSS + light JS filters.**

**8. THE WORLD PORTFOLIO** (activetheory v5; igloo — reference ceiling) — Portfolio as a
navigable 3D environment; igloo encases each project in a procedurally grown ice crystal,
frost-dissolve transitions. LCP still 1.3s via Draco. **Heavy WebGL, weeks; the ceiling
patterns 1–7 gesture toward.**

## Why uniform card grids read AI-generated (2026)
1. **They are the statistical mean and everyone knows it** — LLMs converge on the probable
   layout (Inter/system sans, indigo gradients, 16px radius, three-up cards); Tailwind's
   creator publicly apologized (2025-08) for `bg-indigo-500` becoming "every AI interface."
2. **Equal visual weight = zero editorial judgment.** Every studio breaks equality somewhere
   (7/3/2 splits, marquee-vs-tail tiers, one-per-screen pacing).
3. **Templates have no invented conventions** — a convention is a commitment repeated across a
   system (symbol taxonomies, layout switchers, © marks, zero-padded counters).
4. **Cards encapsulate; art direction lets type touch the grid** — 76px against 13px in one
   row, sub-1.0 display line-height, tracking scaling with size (-0.02em@20px → -0.04em@76px),
   hairlines (1px @20–30%) instead of shadows/radii.
5. **Hover that only lifts-and-shadows.** Authored hover is a reveal channel with two-beat
   choreography (hatch fill + cursor swap; slide + delayed arrow).

## Human-art-direction moves (parameter checklist)
Zero-padded ordinals as typographic objects · extreme scale ratios in one row (38–76px display
vs 12–13px meta, single weight doing the work) · 12-col math with asymmetric spans, media left /
title far right · hairline rules not boxes; crosshair corner marks (8px arms, 1px) · metadata
as colophon (sector, city, year, ©, tags — bottom-right, lighter) · prose over taglines ·
two-tier curation · mixed media rows for rhythm · ONE bespoke interaction convention repeated
sitewide.

**Anonymity fit ranked:** 6 and 1 absorb it natively · 3 and 7 need only sector descriptors ·
2 and 5 need one adjustment · 4 and 8 depend on media volume, not names.

Sources: Awwwards "The New Obys" + igloo case study · refs.gallery Obys analysis ·
github.com/basementstudio/website-2k25 (pixel values from source) · itsoffbrand.com ·
phantom.land/work · locomotive.ca/en/work · 14islands.com/work · 925studios AI-slop guide ·
Codrops menu-image-hover tutorial (cursor-following variant).
