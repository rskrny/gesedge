# DESIGN.md — gesedge.com + huanqiao.gesedge.com

**The design source of truth for the redo. Every visual, copy, and interaction decision defers to
this file. Change it deliberately and log the change in `.ai/DECISIONS.md`.**

Set 2026-10-06 from the redo interview (`.ai/research/redo-interview.md`), the site spec
(`.ai/research/redo-site-spec.md`), and the Dovetail identity Ryan approved the same day. The July
"Crossing" constitution (3D world, awards register) is archived at `.ai/archive/DESIGN-crossing-2026-07.md`.

---

> **Revised 2026-10-07:** Ryan rejected the v1 look, then picked comps A and B from the refboard (/comps/).
> §3–7 below are the A+B merge. Comp source: `.ai/deliverables/comps/`.

## 1 · Job and register

A **sales site that proves capability**. The readers who decide are US business owners, Chinese factory
owners and export managers, and AI answer engines. Every page must be fast, readable, crawlable, and
honest. The craft bar stays high (igloo.inc, zolplay.com DNA: one object per hero, corner micro-labels,
a coordinates line, monochrome restraint, one confident line of positioning), but the test is
*does this help a buyer decide?*, not *would a design jury like it?*

## 2 · Identity — Dovetail (燕尾榫)

The mark is a dovetail joint: two pieces of wood that lock together without nails or glue. Each piece
stands for one of the two companies. Source kit: `brand/` (logo SVG/PNG, zh lockups, tokens, PDF).

- **Colour mark** (celadon tail + ash socket) appears **only on its timber tile** or on timber pages.
  On any light ground use the one-colour version. Never close the gap between the pieces; never
  straighten the tail (a straight tail reads as an "H").
- **Wordmark** "GES" in Unbounded 500, outlined. Never retype it; use the files.
- **Chinese lockups:** mark + 寰桥 (huanqiao.gesedge.com header), mark + 成都寰桥 (footer/legal),
  mark + GES | 寰桥 (bilingual). PuHuiTi licence covers web use; confirm with Alibaba before any
  trademark filing.
- **Favicon:** the pixel-grid version in `brand/logo/favicon-*.png|svg`, not a scaled-down mark.

## 3 · Colour

| Token | Hex | Role |
|---|---|---|
| `--ground` | `#140e0b` | page ground (dark is the default) |
| `--timber` | `#1b1411` | bands: the proof section and the closing call only |
| `--panel` | `#221a16` | form fields, figure grounds |
| `--line` | `#3a302a` | hairlines, field borders |
| `--ink` | `#f5f2f1` | text |
| `--muted` | `#b9b0a4` | secondary text, labels |
| `--celadon` | `#87b6af` | the one accent: primary buttons, links, focus, the tail |
| `--ash` | `#e4ddd2` | small areas only: the socket, rare highlights |

No third hue. Tints (80/50/20%) for figures and backgrounds, never for text. Celadon on ground and
ground on celadon both clear 7:1. Light pages are not part of v1. Use the timber band sparingly: alternating
bands down the page reads as a template (2026-10-07 review, GPT + Kimi + DeepSeek agreed).

## 4 · Typography

- **Display: Unbounded 500** (300 for the large ledger ordinals). The hero line, page titles, section
  statements, and row titles (services, work, steps). Never body or UI.
- **Text: IBM Plex Sans 400/500.** Body, nav, buttons, form fields. Body 18px (17px on phones), line-height 1.6.
- **Labels: IBM Plex Mono 500,** for metadata only: micro-labels in caps 11px, tracking `0.14em`; prices;
  small ordinals. Never paragraphs. (v1 set body text in mono; Ryan rejected it as reading like a terminal.)
- **中文: Alibaba PuHuiTi 3.0**, self-hosted and subset to the characters on the page.
  Letter-spacing 0 always; never tracked like Latin caps.
- All fonts self-hosted. **No Google Fonts** anywhere (blocked or slow in mainland China).
- Scale (kit): H1 64 / H2 40 / H3 28 / body 18 / small 14 px on desktop, fluid down on mobile.

## 5 · Layout

12-column grid, page pad `clamp(20px, 4vw, 56px)`, 4 columns on mobile. Separation by hairlines, not
boxes, cards, shadows, or radii (buttons 2px; screenshots 6px). Asymmetric spans by default.
- **Home hero (comp A):** copy left, object right, a coordinates strip at the foot
  (`104°03′W · Wyoming` · `Two companies, one founder` · `Chengdu · 104°04′E`).
- **Proof band (comp B):** straight after the hero, on the timber band: one live system, copy 4 cols,
  real screenshot 8 cols, two numbered pins on the screen explained in a legend.
- **Ledger (comp A):** services as rows of big celadon ordinal · title · description · price (mono,
  left-aligned so it reads as scope, not a checkout table).
- **Section head:** mono label left (4 cols), Unbounded statement right (8 cols).
- **Inner pages:** page head = celadon mono label + Unbounded H1 + muted lede. Long pages (services, work)
  keep the title column sticky on desktop.
- Change the composition between sections, not only the background: route line for steps, two-column
  "also live" rows, a pull-paragraph for people. Zero-padded ordinals (`01`–`03`). Metadata as a colophon.

## 6 · Hero and imagery

- **Hero object (both sites):** the dovetail mark as an exploded isometric joint, inline SVG
  (`src/shared/components/Joint.astro`, generated by `.ai/deliverables/comps/joint.py`). No WebGL, no glow.
- **EN proof:** the real email triage screenshot, tilted once (rotateY −8°) on the home page only; flat with a
  hairline frame everywhere else.
- **ZH proof:** a page from the sample audit, in a proof band under the hero once Kenny's sample exists.
- Real screenshots only, cropped so no client customer data is readable. Ryan's real photo on About.
  Kenny is named, not photographed. No stock photos, no AI-generated people.

## 7 · Motion

CSS only. The joint's socket seats toward the tail and lifts back (5.5s loop). A dot travels the
"How a project runs" route line.
Every page works with JavaScript off. `prefers-reduced-motion` removes all movement. Off inside WeChat.

## 8 · Voice and copy law

Declarative, concrete, plain. Short sentences that know things. Facts over adjectives: what we built,
what it does, its status, its price. All AGENTS.md anti-slop rules apply, and **every English line
passes `no-ai-slop`; every Chinese line goes Kenny → qu-ai-wei → lieflat-less-ai-tone → Kimi** before
it ships or is shown to Ryan. Placeholders read `[PLACEHOLDER]`, never invented copy.
Client names: built in, **switched off until each client approves** (`NAMES_APPROVED` in the work data).
No testimonials or quotes unless real and approved. No unverifiable numbers.

## 9 · Two sites, two audiences

- **gesedge.com** (English, US businesses, plus `/exporters` for export managers).
- **huanqiao.gesedge.com** (Simplified Chinese, factories). Not a mirror of the English site.
- One repo, one build. hreflang only between genuine equivalents (home↔home, exporters↔audit,
  privacy↔privacy). Self-referencing canonicals. Separate Organization entities, described as
  sister companies with one founder (姊妹公司, never 旗下).
- 寰桥 footer shows the registered address only, the 统一社会信用代码, 可开具发票. No ICP number until
  one is issued.

## 10 · Performance

No WebGL, no client framework. Chinese pages ≤ 300 KB total; English pages ≤ 500 KB. Images AVIF/WebP
with fixed dimensions. Zero layout shift. Works in WeChat's in-app browser.

## 11 · Kill list

Uniform card grids · stat boxes · italic-emphasis headline words · a third hue or typeface · CJK
letter-spacing · centred template layouts · hover lift-and-shadow · glass panels · gradients ·
neon accents · mascots · stock imagery · "AI that…" openers · invented quotes, logos, or numbers.
