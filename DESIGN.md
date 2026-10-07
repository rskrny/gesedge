# DESIGN.md — gesedge.com + huanqiao.gesedge.com

**The design source of truth for the redo. Every visual, copy, and interaction decision defers to
this file. Change it deliberately and log the change in `.ai/DECISIONS.md`.**

Set 2026-10-06 from the redo interview (`.ai/research/redo-interview.md`), the site spec
(`.ai/research/redo-site-spec.md`), and the Dovetail identity Ryan approved the same day. The July
"Crossing" constitution (3D world, awards register) is archived at `.ai/archive/DESIGN-crossing-2026-07.md`.

---

> **Under revision (2026-10-07):** Ryan rejected the v1 look. §4 (Plex Mono for body) and §5–6 will change to the
> homepage comp he picks (`.ai/STATE.md`, refboard /comps/). Comps use IBM Plex Sans for body text.

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
| `--timber` | `#1b1411` | page ground (dark is the default) |
| `--panel` | `#241c18` | raised areas: code, forms, figure grounds |
| `--line` | `#3d322c` | hairlines, field borders |
| `--ink` | `#f5f2f1` | text |
| `--muted` | `#c9c0b4` | secondary text, labels |
| `--celadon` | `#87b6af` | the one accent: primary buttons, links, focus, the tail |
| `--ash` | `#e4ddd2` | small areas only: the socket, rare highlights |

No third hue. Tints (80/50/20%) for figures and backgrounds, never for text. Celadon on timber and
timber on celadon both clear 7:1. Light pages are not part of v1.

## 4 · Typography

- **Display: Unbounded 500.** Rare and large: the hero line, page titles, ordinals. Never body or UI.
- **Text: IBM Plex Mono 400/500.** Body, nav, labels, buttons, metadata. Micro-labels in caps,
  11–13px, tracking `0.12em`. Body 16–18px, sentence case, line-height 1.5.
- **中文: Alibaba PuHuiTi 3.0**, self-hosted and subset to the characters on the page.
  Letter-spacing 0 always; never tracked like Latin caps.
- All fonts self-hosted. **No Google Fonts** anywhere (blocked or slow in mainland China).
- Scale (kit): H1 64 / H2 40 / H3 28 / body 18 / small 14 px on desktop, fluid down on mobile.

## 5 · Layout

12-column grid, page pad `clamp(16px, 3vw, 48px)`, 4 columns on mobile. Separation by hairlines, not
boxes, cards, shadows, or radii (buttons may have a 4px radius). Asymmetric spans by default.
Corner micro-labels in the hero (wordmark, nav, `104°03′W · 104°04′E`, BASED IN CHENGDU). Zero-padded
ordinals (`01`–`03`) for offers and work. Metadata as a colophon: industry · system · year · status.

## 6 · Hero and imagery

- **EN hero object:** a real-work frame of the email triage system (mixed inbox gets labelled and
  routed), drawn in HTML/SVG from the real UI. No WebGL.
- **ZH hero object:** a page from the sample audit.
- Real screenshots only, cropped so no client customer data is readable. Ryan's real photo on About.
  Kenny is named, not photographed. No stock photos, no AI-generated people.

## 7 · Motion

CSS only. Short fades and one travel line (a message moving along the bridge line in the hero).
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
