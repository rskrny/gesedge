# UI / Brand Design Review — Expert Operating File
<!-- Loaded when judging or QA-ing premium-immersive visual quality. -->

## When to invoke
Reviewing or building hero/scene visuals, type, gradients, motion, or the logo for
premium-immersive quality (the Igloo / Lusion / Obys bar).

## What "great" demands here
You look *into a space*, not *at a slide*: one coherent lit 3D/shader scene with real depth
(fog, parallax, a single key light), not flat layers stacked in Z. Type, mark, and gradient
all sit in the same volume and catch the same light.

## Checklist
- Hero is ONE lit scene (shader/3D), not a stack of position:absolute flats + a dimmed photo.
- Single key light + subtle bloom; push emissive >1 so bloom catches it.
- Gradients: ≤2 analogous hues + black; strong (not 0.03-alpha smudges); GRAIN inside to kill
  banding; slow single-source motion (>15s loop — "unsure if it's moving").
- Gradients live in hero / section-transitions only; body + cards near-flat dark so the moments land.
- Real type system; kinetic headline (mask reveal / variable-weight shift / pointer-reactive), not "fade in then sit".
- The mark has material (warm→cool gradient stroke, mass, bloom) and ONE continuous morph — not thin flat dashes.
- One token set — no competing color systems.

## Anti-patterns
- Stacked flat layers / blurred orbs / dimmed stock photo posing as "depth".
- 3+ hues at once (esp. magenta+cyan+navy); weak low-alpha gradients; visible banding (no grain).
- AI-default fonts (Inter/Space Grotesk/Fraunces); delicate hairline serifs (Cormorant) on dark.
- A wireframe mark in thin grey dashes (reads as a loading spinner).
- Centered/left-column template layout; gradients leaking into every section.

## Decisions & trade-offs
Type: license real foundry type (cheapest upgrade from template → premium) — ABC Diatype/Söhne
(Swiss-precise) or Signifier + GT America (editorial East-meets-West). Logo: prefer "The Meridian"
(one continuous line: globe → US↔China arc → monogram on scroll), reusing the existing rig.

## Vision-review pipeline (use on EVERY design pass — don't judge designs blind)
1. Write the design to an HTML file (real fonts via Google Fonts, the dark ground, gradients, glow).
2. Screenshot headless:
   `MSYS2_ARG_CONV_EXCL='*' "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=6000 --window-size=W,H --screenshot="OUT.png" "file:///PATH.html"`
   (Git Bash; use Windows forward-slash paths; `--virtual-time-budget` lets web fonts load.)
3. Read the PNG yourself to sanity-check, then spawn general-purpose agents with the PNG path so they
   Read + critique with vision. This caught that a "finished" mark actually read as a "C".

## Bilingual lockup rules (Latin + CJK)
- Pair by OPTICAL match, not point size: CJK ~0.8em of the Latin, ONE weight lighter. (CJK fills its em
  box edge-to-edge; equal font-size renders it ~1.3× too tall and ~1.5× too heavy — it will dominate.)
- Align OPTICAL CENTERS, not baselines (CJK has no Latin baseline) — small translateY nudge.
- Divider: hairline at Latin cap height, ~35% opacity, equal generous gaps.
- ZH face = Alibaba PuHuiTi 3.0 (free, distinctive, holds dense glyphs like 寰 small) — NOT default Noto SC.
  Set a ≥15px ZH floor; below that, Latin-only. Latin = tracked caps grotesk (Schibsted), ~0.12em, 500.

## Project notes
- The OLD repo already ships the navy+cyan+magenta cliché + Cormorant/Space Grotesk — legacy, being replaced.
- Salvage: `WireframeGlobe` scroll-morph rig works; `HeroScene` R3F scene can become the lit hero.
- Old-site composite 4.5/10: foundation solid (concept, morph rig, R3F in stack); deficit = finish.
