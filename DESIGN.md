# DESIGN.md — gesedge.com

**The design source of truth. Every visual, motion, copy, and interaction decision
defers to this file. Change it deliberately, log the change in `.ai/DECISIONS.md`.**

Locked with Ryan 2026-07-06 (8-question creative-director session) + two research
briefs (igloo-tier art direction · work-section patterns). Supersedes all earlier
type/layout choices.

---

## 1 · North star & register

**The site competes at the awards register (peers, press, Awwwards/FWA), not at
the brochure register.** SMB conversion is a consequence of credibility, not the
primary optimization. Igloo.inc (built by Abeto) is the ceiling reference: one
world, one material, total discipline.

Test for every element: *would this survive on a site that expects to be judged
by designers?* If it reads default, templated, or generated — it dies.

## 2 · The world — "The Crossing"

One continuous scene. A dark sea at night between two shores. The West shore
(behind/left of the visitor) is warm: sodium-lit harbor works — cranes and docks
loading light onto a bridge. The East shore is cool: a distant vertical city
glow. Between them, **the bridge** — the routing structure. Work enters as light
at the warm harbor, crosses the water, and docks at lit piers on the cool side,
where capability labels print. A container ship passes slowly beneath. This is
成都寰桥 — the world bridge — rendered literally. No competitor can copy the
meaning.

**Cast (locked):** harbor works as inputs (West) · lit arrival piers as outcomes
(East, harbor language mirrored cool) · one passing ship, lights only · distant
city glow on both horizons. No beacons/lighthouses (rejected).

**Material law (one material):** *light held in glass and steel.* Bridge cables
are glass-fiber tubes — fresnel edges, an internal emissive core that carries the
packets. Structures are dark steel silhouettes that only exist where light
touches them. Water is a shader (reflection of the two shore temperatures).
Nothing in the scene may use a default three.js material or standard lighting.

**Atmosphere stack (mandatory, from research):** fog color exactly equals
background color (geometry dissolves, never terminates) · a real water/ground
plane receiving faked pooled glow (emissive decal, not a light) · sparse
particulate on layered-noise drift (sea mist) · final pass = grain + vignette +
micro chromatic-aberration applied to EVERYTHING including DOM text overlays.

**Lighting law:** 0–1 real-time lights, total. Shading comes from fresnel,
matcap/ramp, and baked/faked glow. **Bloom is an event, never a state**: high
threshold, flares only on packet arrival, interaction, and the loader — the
always-on bloom of v0 is banned.

## 3 · Color — the temperature contract

Two temperatures + ink. Everything else is derived, and grading is enforced in
one place (post/LUT), not per-material.

| Token | Hex | Role |
|---|---|---|
| `--ink-deep` | `#08080c` | sky/sea ground, fog color |
| `--ink` | `#0d0d12` | section grounds |
| `--stroke` | `#ece6d8` | text, hairlines (at 10–30% for rules) |
| `--warm` | `#f0c896` | West · inputs · harbor sodium light |
| `--cool` | `#9fb6d6` | East · outcomes · city/moon light |

Warm→cool is always in→out, West→East. A third hue never enters. `--ink-warm
#1b1422` survives only inside the West-shore glow gradient.

## 4 · Typography

**Display: Unbounded** (Ryan's F16 pick, recommitted — variable, Google Fonts).
Rare and huge: hero statement, section openers, oversized ordinals. Wide face —
size down vs a normal grotesk (hero ≈ `clamp(2.2rem, 5vw, 4.4rem)`), tracking
`-0.01em`, line-height ≤ 1.05, weight 500–700. Never for body or UI.

**System: IBM Plex Mono** carries everything else — nav, labels, body, buttons,
metadata, the work index. Igloo discipline: all-caps micro-labels (11–13px,
tracking `0.12–0.14em`), corner-anchored HUD blocks, ragged-right narrow
manifesto columns. Fixed advance enables **scramble-on-change** as the house
text effect (glyphs permute with zero layout shift). Body mono at 14–16px,
sentence case, `0` tracking.

**中文: Alibaba PuHuiTi 3.0** (subset). CJK rules: ~0.8em of Latin partner, one
weight adjustment for optical parity, **letter-spacing 0 always**, optically
centered. ZH never tracks like Latin caps.

**Kill list:** no italic-emphasis words in headlines (vibecode tell — Ryan law) ·
no third typeface · no default-gray body ramble.

## 5 · The Crossing Rule (house convention)

One bespoke convention, repeated sitewide, committed to totally: **every rule
line is a crossing.** Hairlines (1px, stroke @ 10–30%) grade warm→cool along
their length; on interaction (hover, focus, section entry) a single light packet
traverses the line West→East. Section dividers, the work-index row rules, the
nav underline, form fields, the loading bar — all the same gesture. This is the
DOM-world echo of the bridge and the thing a visitor remembers.

## 6 · Layout & grid

12-column grid, 12px gutters, page pad `clamp(16px, 3vw, 48px)`; 4 columns on
mobile. Separation by hairlines, never boxes/cards/shadows/radii. Asymmetric
spans as the default (7/3/2-style splits; media one side, title the far side).
Extreme scale ratios in one row (display vs 12–13px metadata, nothing between).
Metadata set as colophon: sector · city · year · status, small mono,
deliberately placed. Zero-padded ordinals (`01`–`05`) as typographic objects.
Corner registration marks (8px arms, 1px) allowed as the blueprint accent.

## 7 · Motion & easing

House curves: `power2.out` / `power3.inOut`, 0.4–1.2s. Scroll maps to distance
along an authored camera spline (previs the journey greyboxed FIRST, beauty
after). Free-look from the pointer capped to a few degrees. Scroll velocity
feeds effect intensity (aberration/blur ≈ `0.2 + |v| * 0.2`) — the world
responds to how hard you move, not just where you are. Packet drift carries
mild curl noise; nothing moves linearly. Two-beat hover choreography everywhere
(thing moves, detail follows 150–200ms later). `prefers-reduced-motion`: swaps
scrambles/moves for fades, scene for poster.

## 8 · Interaction spec (locked with Ryan)

- **The flow is pointer-fed:** beams run dim/slow at idle; pointer movement
  feeds them (speed/brightness scale with recent motion). The system works when
  you do.
- **Click = send a request:** a click launches a packet from the cursor onto the
  bridge; it routes to a pier and its outcome label prints. The final CTA reuses
  the gesture ("send a real one →" = contact).
- **Mobile:** tap = send a request; scroll drives the camera; no hover
  dependencies anywhere.
- **Loader = overture (phase 1):** the bridge draws itself as the loading bar,
  warm→cool, then the camera pulls back into the scene. Sound design is phase 2
  (deferred, will ship default-off with a visible toggle).

## 9 · Work section — "The Ledger"

Numbered editorial index (research patterns 1+6 hybrid). Full-width rows on the
grid: `01` ordinal · industry descriptor (never a client name) · system type ·
year — separated by Crossing-Rule hairlines. Each row carries 2–3 sentences of
**written prose** (the ultimate anti-template move), not a tagline. Hover: the
row's hairline runs its packet and a media strip reveals (anonymized UI crop or
scene fragment); cursor swaps. Click → case page (set-piece layout, one hero
artifact — the wallet CAD exploded render earns a full screen).

**Anonymity scheme (locked):** industry descriptors in copy ("a Cape Cod charter
operation", "an interior-design platform"); capability labels in the scene HUD
("EMAIL TRIAGE", "BOOKING ENGINE"). Client names appear nowhere. Open: whether
ShopMyRoom (Ryan's own venture) stays nameable — Ryan's call, default de-named.

## 10 · Voice & copy law

Declarative, concrete, unhurried. Short sentences that know things. Harbor and
crossing language is available but rationed — one metaphor per screen, never
purple. All AGENTS.md anti-slop rules apply, plus: **no italic-emphasis words**,
**no uniform triads**, **no client names**, no "we're passionate about",
no unverifiable numbers. If a sentence could open any agency's site, cut it.

## 11 · Bilingual law

EN and ZH ship together for all concrete content — locale routing + parallel
content from the foundation, not a retrofit. ZH is not a translation afterthought:
copy is written to survive both languages (short declaratives translate clean).
Shiying reviews ZH before anything ships. Blog posts stay native-language.

## 12 · Performance contract

Total scene payload **< 3MB** (winners ship less: whole worlds under 2MB).
Author rich → ship compressed: GLTF+DRACO, KTX2 textures, 16-bit quantization.
Bake anything the user can't perturb. Budgets: 0–1 live lights · one bloom pass
(event-gated) · never two heavy post passes at once · 60fps desktop, 30fps
floor mobile. Tier system stands: T2 full · T1 no post, reduced cast · T0
poster + static content. Runtime FPS watchdog demotes tiers. Debug: `?gfx=0|1|2[!]`,
`?at=0..1`.

## 13 · Anti-patterns (the kill list)

Uniform card grids · always-on bloom · default three.js materials/lights ·
primitives floating in void (no ground/fog) · italic-emphasis headline words ·
client names · stat boxes · third hue · third typeface · CJK letter-spacing ·
centered template layouts · hover = lift-and-shadow · gradients leaking out of
the world · "AI that…" as an opener is on notice for the rewrite.

## 14 · Build pipeline notes

Previs first (greybox the camera journey, untextured). Live tweak panel (leva)
for fog/grade/easing during art direction — no code-guess-refresh tuning. Assets:
bridge + harbor works are parametric/extruded (no sourcing needed); the ship and
optionally one hero pylon are sourced (Ryan offered — spec: low-poly container
ship silhouette, ≤15k tris, we shade it ourselves; formats GLB). Vision-review
pipeline on every pass; full-scene critique on a real GPU before any milestone
is called done.

## 15 · Open items

- Goldie Group industry descriptor (Ryan to confirm what the business does).
- ShopMyRoom naming (own venture — name it or de-name it?).
- ZH copy review workflow with Shiying.
- Sound design (phase 2) · logo (parked; the bridge world may seed the mark).
