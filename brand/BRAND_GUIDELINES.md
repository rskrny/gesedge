# Global Edge Strategies — Brand Guidelines

## Logo

### The Globe Mark
Three orbital arcs forming a deconstructed wireframe globe. The arcs are symmetric about the vertical axis, with dashed strokes giving an open, modern feel.

- **Equator arc** (horizontal ellipse) — white/light grey
- **Left meridian** — medium grey, curves from top through left to bottom
- **Right meridian** — salmon (#E8836B), curves from top through right to bottom

The two meridians are mirror images of each other, creating visual balance. The salmon arc is slightly thicker to establish hierarchy.

### Minimum Size
- Digital: 24px minimum
- Print: 10mm minimum
- Below these sizes, use the solid-stroke favicon variant

### Clear Space
Maintain clear space equal to 25% of the globe diameter on all sides. No text, graphics, or edges should enter this zone.

### Logo Variants

| File | Use Case |
|------|----------|
| `ges-globe-dark-bg.svg` | Primary — on dark backgrounds |
| `ges-globe-light-bg.svg` | On white/light backgrounds |
| `ges-globe-mono-white.svg` | Watermarks, overlays on images |
| `ges-globe-mono-dark.svg` | Print, light background mono |
| `ges-globe-salmon-only.svg` | Brand accent, social media avatar |
| `ges-lockup-horizontal-dark-bg.svg` | Full lockup, dark backgrounds |
| `ges-lockup-horizontal-light-bg.svg` | Full lockup, light backgrounds |

### Do Not
- Rotate the globe
- Change the arc colors outside of the approved variants
- Add drop shadows or outlines
- Stretch or distort the proportions
- Place on busy backgrounds without sufficient contrast
- Use the old heart/compass logo (retired)

---

## Color Palette

### Primary
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Salmon | `#E8836B` | 232, 131, 107 | Brand accent, CTAs, links, highlights |
| Salmon Hover | `#F0956E` | 240, 149, 110 | Interactive hover states |
| Salmon Dim | `rgba(232,131,107,0.10)` | — | Background tints, subtle accents |

### Neutrals
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Background | `#1A1C22` | 26, 28, 34 | Page background |
| Elevated | `#22252C` | 34, 37, 44 | Cards, footer, elevated surfaces |
| Card | `#292C35` | 41, 44, 53 | Card backgrounds |
| Foreground | `#F2F1ED` | 242, 241, 237 | Primary text (warm white) |
| Muted | `#B8BAC0` | 184, 186, 192 | Body text, descriptions |
| Dim | `#888B95` | 136, 139, 149 | Captions, metadata |
| Border | `#32353E` | 50, 53, 62 | Dividers, card borders |
| Border Hover | `#44474F` | 68, 71, 79 | Interactive border states |

### Usage Rules
- Salmon is the ONLY brand color. Do not introduce secondary accent colors.
- All text on dark backgrounds must meet WCAG AA contrast (4.5:1 for body, 3:1 for large text).
- Never use pure white (#FFFFFF) for text. Use Foreground (#F2F1ED) instead.
- Never use pure black (#000000) for backgrounds. Use Background (#1A1C22) instead.

---

## Typography

### Display / Headings
**Cormorant Garamond** — Serif with character. Elegant but not stuffy.
- Weights: 400 (regular), 600 (semibold), 700 (bold)
- Italic available for emphasis
- Chinese fallback: Noto Serif SC

### Body
**Space Grotesk** — Clean geometric sans. Readable, modern, warm.
- Weights: 300 (light, default body), 400 (regular), 500 (medium), 700 (bold)
- Chinese fallback: Noto Sans SC

### Code / Technical Labels
**IBM Plex Mono** — Reserved ONLY for:
- Technology stack tags (React, Python, Next.js, etc.)
- Code snippets
- Technical identifiers

Do NOT use mono font for:
- Navigation labels
- Section badges
- Location labels
- Date/time
- General UI text

---

## Voice & Writing (per CLAUDE.md)

- No semicolons for contrast
- No em dashes for contrast
- No "not X, it's Y" constructions
- No viral-bait openers
- No filler intensifiers (truly, actually, game-changing, etc.)
- No list-of-three cadence abuse
- Never claim something is in production if it isn't
- Never inflate numbers
- Write like a person who builds things and has opinions
- All English copy changes must be mirrored professionally in Chinese

---

## Spacing & Layout

- Max content width: 1280px (max-w-7xl)
- Page padding: 24px mobile, 48px desktop
- Section padding: py-28 to py-36 (112-144px)
- Card border radius: rounded-sm (2px)
- Glass card effect: rgba backdrop-blur on dark surfaces

---

## Motion

- Ease curve: [0.16, 1, 0.3, 1] (custom spring)
- Standard duration: 300ms for interactions, 600ms for page transitions
- Globe rotation: continuous at 0.15 rad/frame
- Hero entrance: staggered word reveal with 60ms delay between words
- Respect prefers-reduced-motion
