# Logo Marks — working source (2026-06-30)

> **⚠ SUPERSEDED / PARKED (2026-07-06).** Ryan is not satisfied with ANY logo to date. Every mark in this
> file — Beam, Span, G-Bridge (and the later globe / coin / arc family) — is REJECTED as too generic / AI.
> A wordmark-led direction was then explored (Latin: Switzer / Zodiak / IBM Plex Mono; CJK: Noto Sans/Serif SC
> → build target Alibaba PuHuiTi 3.0; a warm→cool West→East "bridge" rule as the signature; the lockup recipe
> below still applies) and also NOT accepted. **The logo is DEFERRED** — next phase is the website (igloo.inc-
> level immersive; see `.ai/research/igloo-study.md`). Revisit the mark AFTER the site's visual language exists;
> if resumed, the plan was wordmark-led + ONE custom letterform cut (retail type alone isn't ownable). The
> content below is kept for reference (lockup rules) and history (rejected marks) only.
<!-- The mark previously existed ONLY in chat widgets + the session scratchpad (which does NOT
     persist across sessions). This is the persistent source so the next agent continues without
     rebuilding from scratch. -->

## Status
Direction chosen via a vision critique (3 vision agents read a rendered PNG): **Beam** (globe + a
great-circle span). Verified it reads clean. The earlier pick #4 "G-Bridge" was REJECTED (read as an
open "C", bridge absent). **AWAITING Ryan's final confirm: Beam (recommended) vs Span (more literally a
bridge).** Then build it into the Astro hero.

## Palette / tokens
- Light stroke (globe + type): `#ECE6D8` · Warm node = West/US: `#F0C896` · Cool node = East/China: `#9FB6D6`
- Span gradient: warm `#F0C896` → cool `#9FB6D6` · Dark grounds: `#0a0a0d`, radial `#1b1422→#0d0d12→#08080c`
- Glow: SVG `feGaussianBlur` stdDeviation ~3 (real build: R3F postprocessing Bloom)

## CHOSEN — Beam (verified, reads clean at hero + favicon)
Globe (circle + faint latitude + faint meridian) crossed by ONE warm→cool great-circle span out to a
West (warm) and East (cool) node = "world bridge / route" in a single move.
```svg
<svg viewBox="0 0 200 168" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="span" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#F0C896"/><stop offset="1" stop-color="#9FB6D6"/></linearGradient>
    <filter id="glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
  </defs>
  <g filter="url(#glow)" fill="none" stroke-linecap="round">
    <ellipse cx="100" cy="84" rx="56" ry="18" stroke="#ECE6D8" stroke-opacity=".13" stroke-width="1.2"/>
    <ellipse cx="100" cy="84" rx="18" ry="56" stroke="#ECE6D8" stroke-opacity=".10" stroke-width="1.2"/>
    <circle cx="100" cy="84" r="56" stroke="#ECE6D8" stroke-width="2.2"/>
    <path d="M30,92 Q100,72 170,80" stroke="url(#span)" stroke-width="3.4"/>
    <circle cx="30" cy="92" r="4.2" fill="#F0C896"/>
    <circle cx="170" cy="80" r="4.2" fill="#9FB6D6"/>
  </g>
</svg>
```
Animation: draw-on globe (stroke-dashoffset) → draw span → fade in nodes → a pulse travels the span
(round trip). Scroll (build): draws on at load, then shrinks/docks to the header — salvage the old
`src/components/globe/WireframeGlobe.tsx` scroll-morph rig for the dock.

## ALTERNATIVE — Span (fallback if a LITERAL bridge is wanted; cold-read critic's #1)
Faint globe + a suspension-bridge arc + anchor nodes. Geometry: circle r33 @ (50,50) faint; chord
`line 22,62→78,62`; arch `M22,62 Q50,26 78,62`; cables at x=36/50/64 down to y=62; warm/cool nodes at ends.

## REJECTED — G-Bridge (#4) — do not revive
Open ring + tiny inward tick. Reads as a "C"/Pac-Man; the bridge is absent; loses the connecting line at small size.

## Lockup (corrected per the bilingual-type critic)
- Latin "GES": Schibsted Grotesk **Medium 500**, tracking **~0.12em**, color `#ECE6D8`.
- Divider: 1px hairline at **Latin cap height**, `#ECE6D8` @ **~35% opacity**, equal ~0.55em gaps.
- Chinese "成都寰桥": **~0.8em** of the Latin, **one weight lighter** (400 vs 500), **optically centered**
  (translateY ~-0.5px — NOT baseline-aligned). Face = **Alibaba PuHuiTi 3.0 (W4)** in the build (free,
  distinctive, holds the dense 寰 at small sizes); widgets used Noto Sans SC as a stand-in. ZH floor
  ≥15px, else drop to Latin-only.

## Re-render + re-critique (the vision pipeline — see ui-design-review.md)
1. Write the design (mark + lockup on the dark ground) to an HTML file in the scratchpad.
2. `MSYS2_ARG_CONV_EXCL='*' "C:\Program Files\Google\Chrome\Application\chrome.exe" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 --virtual-time-budget=6000 --window-size=1000,600 --screenshot="<scratchpad>/x.png" "file:///<scratchpad>/x.html"`
3. Spawn general-purpose agents, give them the PNG path → they Read + critique. Never judge a design blind.
