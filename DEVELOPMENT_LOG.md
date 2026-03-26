# GESEDGE — Development Log & Handoff Document

> Last updated: 2026-03-26 | Session: brand-redesign-admin-portal
> Commits this session: `0b14258`, `bf6d1c7`, `0d76568`, `80f168c`, `5d178ae`, `761346d`, `4f3ca17`, `2c7932c`, `cda24e9`
> Previous session: bilingual-audit-pass (`33fcd53`, `e3ccf93`)

---

## Context Injection (paste into next agent's first prompt)

**Project state (2026-03-26):** gesedge.com is a Next.js 16 + React 19 + Tailwind 4 marketing site for Global Edge Strategies, deployed on Vercel. Fully bilingual EN/ZH (~350 i18n keys). The site went through a major visual overhaul this session: color palette changed from dark cyberpunk (neon pink/cyan/purple) to a warm grey/white/salmon scheme (#1A1C22 bg, #E8836B accent, #F2F1ED fg). Fonts: Cormorant Garamond (display), Space Grotesk (body), IBM Plex Mono (code only). A custom SVG wireframe globe logo was built as the brand mark, with a scroll-linked Framer Motion animation on the homepage (380px hero → 44px header dock). Globe renders via GlobeSVG.tsx (static SVG paths from globe-paths.ts), animated by useGlobeAnimation.ts (requestAnimationFrame rotation), orchestrated by WireframeGlobe.tsx (scroll position tracking, Framer Motion layout). The site now has a Supabase backend for contact form persistence and page-view analytics, with a password-protected /admin portal (PWA-capable). Contact form dual-writes: Supabase table + optional Resend email. Brand package exists at /brand/ with SVG variants and BRAND_GUIDELINES.md.

**Current frontier and blockers:** (1) MiniMax MCP not yet installed. Ryan has a Minimax API account (sk-api key, $10 Starter plan) for Image-01 text-to-image generation. The MCP server (uvx minimax-mcp) needs to be added via `claude mcp add`. Output path should be public/images/. Once connected, generate professional images for: about page hero, case study headers (currently using placeholder ocean/mountain photos), and any empty image slots. (2) Resend API key conflict: Ryan's free Resend account already serves fishingbloodline.com. Options: create second Resend account for GES, or rely solely on Supabase for contact capture (current state works without Resend). (3) Globe clipping bug persists on homepage initial load + scroll. Root cause: the WireframeGlobe uses computeSlotPos() with hardcoded layout constants (header 72px, slot 44px, padding 24/48px) but the initial scroll position measurement races with Lenis smooth scroll initialization. The globe's y-position on first render can place it above the visible header area. Multiple patches attempted (pb increase, HEADER_SIZE reduction) but the core timing issue between Framer Motion scroll tracking and Lenis remains. (4) Site still has loose files in repo root (abamtns.jpg, cdtwintowers.jpg, various .bat files). (5) Chinese copy still has some em dashes (——) in i18n.ts that weren't caught in the English pass. (6) Legal compliance (privacy policy, terms, cookie consent) and SEO optimization are queued as next priorities per Ryan. (7) Three.js is still in package.json but the HeroScene.tsx that used it may be dead code now that the globe replaced it. Audit and remove if unused.

---

## Task 1: System Architecture

### Tech Stack
| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | Next.js (App Router, Turbopack) | 16.2.1 | Standalone output for Vercel |
| UI | React + TypeScript | 19.2.4 / 5.9.3 | |
| Styling | Tailwind CSS 4 + PostCSS | 4.2.2 | @theme directive for design tokens |
| Animation | Framer Motion + GSAP + Lenis | 12.38 / 3.14 / 1.3 | Globe uses Framer Motion; hero text uses Framer; smooth scroll via Lenis |
| 3D (legacy) | Three.js + react-three-fiber | 0.183 | May be dead code. HeroScene.tsx still exists but unclear if mounted |
| Database | Supabase (PostgreSQL) | 2.100.0 | Contact submissions + page view analytics |
| Deploy | Vercel | — | Auto-deploy from main branch |
| Email | Resend.com (optional) | — | Not active. Free tier conflict with fishingbloodline.com |
| Image Gen | MiniMax Image-01 | — | NOT YET CONNECTED. API key exists, MCP server not installed |

### File Structure
```
gesedge/
├── brand/                                  # NEW: Brand package
│   ├── BRAND_GUIDELINES.md                 # Usage rules, color specs, spacing
│   └── svg/                                # 7 SVG variants (dark/light/mono/salmon)
├── public/
│   ├── favicon.svg                         # Globe favicon (SVG)
│   ├── admin-manifest.json                 # PWA manifest for /admin
│   ├── site.webmanifest                    # Main site manifest
│   └── images/
│       ├── hero-home.jpg                   # Homepage hero background (ocean)
│       ├── hero-bloodline.jpg              # Case study hero
│       ├── hero-pjcs.jpg                   # Case study hero
│       └── hero-docproc.jpg                # Case study hero
├── src/
│   ├── app/
│   │   ├── page.tsx                        # Homepage ("use client")
│   │   ├── layout.tsx                      # Root layout — mounts Header, Footer, WireframeGlobe, Analytics
│   │   ├── globals.css                     # Design tokens: grey/white/salmon palette
│   │   ├── admin/                          # NEW: Admin portal (PWA)
│   │   │   ├── layout.tsx                  # Admin metadata + manifest link
│   │   │   └── page.tsx                    # Dashboard: submissions inbox + analytics charts
│   │   ├── api/
│   │   │   ├── contact/route.ts            # POST: validate → Supabase insert → optional Resend email
│   │   │   └── admin/route.ts              # NEW: GET submissions, PATCH read/archive (password auth)
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── blog/[slug]/
│   │   │   ├── page.tsx                    # SSG via generateStaticParams
│   │   │   └── BlogArticle.tsx             # Client renderer
│   │   ├── case-studies/
│   │   │   ├── page.tsx                    # List page
│   │   │   ├── bloodline-charters/         # page.tsx (server metadata) + BloodlineContent.tsx (client)
│   │   │   ├── pjcs-rag/                   # Same pattern
│   │   │   └── docproc/                    # Same pattern
│   │   ├── opengraph-image.tsx             # Edge OG image generator
│   │   ├── robots.ts                       # Blocks /admin, /api from crawlers
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── globe/                          # NEW: Globe logo system (4 files)
│   │   │   ├── GlobeSVG.tsx                # Pure SVG renderer (accepts size, rotation, opacity)
│   │   │   ├── WireframeGlobe.tsx          # Scroll-linked animation orchestrator
│   │   │   ├── globe-paths.ts              # SVG path data for globe arcs
│   │   │   └── useGlobeAnimation.ts        # requestAnimationFrame rotation hook
│   │   ├── Analytics.tsx                   # NEW: Supabase page view tracker
│   │   ├── Header.tsx                      # Fixed header with globe slot (data-globe-slot)
│   │   ├── Footer.tsx                      # Uses GlobeSVG directly
│   │   ├── LanguageProvider.tsx            # React Context for i18n
│   │   ├── ContactForm.tsx
│   │   ├── HeroWordReveal.tsx              # Animated text with descender fix (pb-[0.22em])
│   │   ├── HeroBackground.tsx              # CSS gradient mesh behind hero
│   │   ├── HeroScene.tsx                   # POSSIBLY DEAD CODE — Three.js scene
│   │   ├── MagneticButton.tsx
│   │   ├── SpotlightCard.tsx
│   │   ├── RevealSection.tsx
│   │   ├── SmoothScroll.tsx                # Lenis smooth scroll wrapper
│   │   └── AnimatedCounter.tsx
│   └── lib/
│       ├── content.ts                      # Static content arrays
│       ├── i18n.ts                         # ~350 bilingual keys
│       ├── blog-posts.ts                   # 3 blog posts (English content only)
│       ├── seo.ts                          # Metadata + JSON-LD helpers
│       └── supabase.ts                     # NEW: Public client + service-role client
└── CLAUDE.md                               # Anti-AI-slop writing rules (MUST READ before writing copy)
```

### Data Flow
```
┌─── CONTENT LAYER (static TypeScript) ───────────────────────────┐
│ content.ts    → case studies, services, stats, tech stack        │
│ i18n.ts       → 350 bilingual strings (EN/ZH)                   │
│ blog-posts.ts → 3 articles (English body only)                  │
│ seo.ts        → metadata factory + JSON-LD schemas              │
└─────────────────────────┬───────────────────────────────────────┘
                          │
                          ▼
┌─── RENDERING LAYER ─────────────────────────────────────────────┐
│ LanguageProvider (React Context) → useLanguage() → { t, locale }│
│ Components consume t("key") for bilingual rendering             │
│ Case studies: server page.tsx (metadata) + client Content.tsx    │
└─────────────────────────┬───────────────────────────────────────┘
                          │
                          ▼
┌─── INTERACTIVE LAYER ───────────────────────────────────────────┐
│ ContactForm.tsx → POST /api/contact                             │
│   → Supabase insert (contact_submissions table)                 │
│   → Resend email (if RESEND_API_KEY set, currently NOT set)     │
│                                                                 │
│ Analytics.tsx → Supabase insert (page_views table)              │
│   → Fires on route change, skips /admin paths                   │
│                                                                 │
│ /admin portal → GET /api/admin (password: GES_ADMIN_PASSWORD)   │
│   → Reads contact_submissions + page_views from Supabase        │
│   → PATCH /api/admin to mark submissions read/archived          │
└─────────────────────────────────────────────────────────────────┘

┌─── GLOBE ANIMATION SYSTEM ──────────────────────────────────────┐
│ WireframeGlobe.tsx (mounted in layout.tsx, position: fixed)     │
│   ├── Homepage: large (380px) centered right of hero text       │
│   │   → Scroll-linked shrink to header slot (44px) via          │
│   │     useMotionValueEvent on scrollYProgress                  │
│   └── Other pages: renders directly at header slot position     │
│                                                                 │
│ GlobeSVG.tsx → Pure SVG with rotation prop                      │
│ useGlobeAnimation.ts → rAF loop, returns rotation MotionValue   │
│ globe-paths.ts → Meridian/latitude arc path data                │
│                                                                 │
│ Header.tsx has <div data-globe-slot> as positioning target       │
│ computeSlotPos() calculates slot position from layout constants │
│ (does NOT use getBoundingClientRect — avoids animation race)    │
└─────────────────────────────────────────────────────────────────┘
```

### Environment Variables
| Variable | Where | Status | Purpose |
|----------|-------|--------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Vercel | Set | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Vercel | Set | Supabase public key (RLS-gated) |
| `SUPABASE_SERVICE_ROLE_KEY` | Vercel | Set | Supabase admin key (bypasses RLS) |
| `GES_ADMIN_PASSWORD` | Vercel | Set | Password for /admin portal |
| `RESEND_API_KEY` | Vercel | NOT SET | Email sending (free tier conflict) |
| `MINIMAX_API_KEY` | .env.local | NOT SET | Image generation (MCP not installed) |

---

## Task 2: Progress & Logic Mapping

### Session: brand-redesign-admin-portal (2026-03-26)

| # | Change | Commits | Key Files |
|---|--------|---------|-----------|
| 1 | **Admin portal + Supabase backend** | `0b14258` | admin/page.tsx, api/admin/route.ts, supabase.ts, Analytics.tsx |
| 2 | **Contact form persistence** | `0b14258` | api/contact/route.ts (now dual-writes to Supabase + optional Resend) |
| 3 | **Page view analytics** | `0b14258` | Analytics.tsx (client component, tracks route changes) |
| 4 | **Em dash purge (English)** | `bf6d1c7` | i18n.ts (7 user-facing strings rewritten) |
| 5 | **AI slop deletion** | `4f3ca17` | Removed "shipping/health checks" paragraph from about page |
| 6 | **Color palette overhaul** | `5d178ae`, `0d76568` | globals.css (full token rewrite: grey/white/salmon) |
| 7 | **Font change** | `bf6d1c7` | JetBrains Mono → IBM Plex Mono; font-mono usage restricted to code |
| 8 | **Wireframe globe logo** | `80f168c`, `761346d`, `4f3ca17`, `2c7932c` | globe/ directory (4 files), favicon.svg |
| 9 | **Globe scroll animation** | `80f168c` | WireframeGlobe.tsx (380px hero → 44px header dock) |
| 10 | **Brand package** | `2c7932c` | brand/ directory (7 SVGs + BRAND_GUIDELINES.md) |
| 11 | **robots.txt hardened** | `0b14258` | Blocks /admin, /api/ from crawlers |
| 12 | **Hero descender fix (again)** | `0b14258` | leading-[0.95], pb-[0.22em] |
| 13 | **Home button** | `bf6d1c7` | Header logo click scrolls to top on homepage |
| 14 | **Footer logo updated** | `4f3ca17` | Now uses GlobeSVG component |

### Current Frontier

The very next things that need addressing, in priority order:

1. **MiniMax MCP installation** — Ryan has a Minimax API key. Run `claude mcp add minimax -e MINIMAX_API_KEY=<key> -e MINIMAX_MCP_BASE_PATH=<project>/public/images -e MINIMAX_API_HOST=https://api.minimax.io -e MINIMAX_API_RESOURCE_MODE=local -- uvx minimax-mcp -y`. Then generate images for: about page hero, case study headers, any empty image slots.

2. **Globe clipping on homepage scroll** — The globe clips above the header on initial load. Root cause is timing: Framer Motion's scrollYProgress initializes before Lenis is ready, causing the first few scroll frames to compute wrong positions. Consider: (a) delay globe mount until Lenis reports ready, (b) use CSS `overflow: visible` on header during the transition, (c) add a minimum y-clamp so the globe never goes above y=14px (vertically centered in 72px header).

3. **Chinese em dashes** — English copy was cleaned but Chinese translations in i18n.ts still contain `——` (Chinese em dashes). Search for `——` in i18n.ts and rewrite.

4. **Image generation** — Multiple pages have placeholder/missing images. About page has a gradient placeholder. Case study pages use generic ocean/mountain photos. Need professional AI-generated images matching the salmon/grey/white brand.

5. **Legal compliance** — No privacy policy, terms of service, or cookie consent banner. Ryan flagged this as next priority.

6. **SEO optimization** — Ryan flagged as next priority alongside legal.

7. **Dead code audit** — HeroScene.tsx (Three.js), @react-three/fiber, three.js, gsap may be unused. Removing them would cut ~500KB+ from the client bundle.

8. **Resend API key** — Still not resolved. Free tier serves fishingbloodline.com. Options: new Resend account for GES, or accept Supabase-only capture (admin portal shows submissions regardless).

### Invisible Logic & Architectural Decisions

1. **Globe positioning uses hardcoded layout math, not DOM queries.** `computeSlotPos()` in WireframeGlobe.tsx calculates the header slot position from known constants (header 72px, slot 44px, max-w 7xl = 1280px, padding 24/48px). This was done to avoid race conditions with getBoundingClientRect during the header's entrance animation. If you change the header height, padding, or max-width, you MUST update computeSlotPos().

2. **Globe is mounted in layout.tsx, NOT in Header.tsx.** It's a sibling to Header, position:fixed, z-55. It reads the `data-globe-slot` div in Header for its target position. This decoupling lets the globe animate independently of the header's render cycle.

3. **Homepage hero section has `id="hero-section"`** — used by WireframeGlobe to find the hero area and position the large globe in the right half. If you rename this ID, the globe positioning breaks.

4. **Admin auth is simple password comparison** — `GES_ADMIN_PASSWORD` env var checked via GET /api/admin?token=xxx. Not session-based. The token is held in React state and lost on refresh. Adequate for a solo founder, not suitable for multi-user.

5. **Analytics skips /admin paths** — The Analytics.tsx component checks `if (pathname.startsWith('/admin')) return` to avoid inflating page view counts with admin visits.

6. **Supabase tables assumed, not migrated** — The code expects `contact_submissions` and `page_views` tables to exist in Supabase. There's no migration script. Tables were created manually. If the Supabase project is recreated, these tables need to be re-created:
   - `contact_submissions`: id, created_at, name, email, company, message, budget, is_read, is_archived
   - `page_views`: id, created_at, path, referrer, user_agent

7. **All project accent colors are now unified salmon (#E8836B).** The old system had per-project colors (pink for Bloodline, cyan for PJCS, purple for DocProc). Now all three use salmon. The projectAccents array in page.tsx still exists with per-project entries but they're all the same value. Consider whether to re-differentiate later.

8. **Server/Client split on case studies** — Same as previous session. page.tsx = server (metadata export), *Content.tsx = client (bilingual rendering). Don't merge them.

9. **content.ts vs i18n.ts duplication** — Case study data exists in BOTH files. Still a drift risk.

---

## Task 3: Known Technical Debt

| Priority | Issue | Location | Notes |
|----------|-------|----------|-------|
| **P0** | Globe clips on homepage scroll | WireframeGlobe.tsx | Framer Motion / Lenis timing race. Multiple patches applied, root cause not fixed |
| **P0** | No professional images | public/images/ | Placeholder ocean/mountain photos. MiniMax MCP not installed yet |
| **P1** | MiniMax MCP not connected | Claude MCP config | API key exists, server not added |
| **P1** | Chinese em dashes remain | i18n.ts | English cleaned, Chinese `——` not addressed |
| **P1** | RESEND_API_KEY not set | Vercel env vars | Free tier conflict with fishingbloodline.com |
| **P1** | No privacy policy / terms | N/A | Legal compliance flagged by Ryan |
| **P1** | No SEO optimization pass | sitemap.ts, robots.ts, meta tags | Flagged by Ryan |
| **P2** | Blog content English-only | blog-posts.ts | Chrome bilingual, article bodies English only |
| **P2** | Supabase tables not version-controlled | N/A | Created manually, no migration script |
| **P2** | content.ts / i18n.ts duplication | Both files | Case study data in two places |
| **P2** | Loose files in repo root | Root | abamtns.jpg, cdtwintowers.jpg, .bat files, CONTEXT.md |
| **P2** | apple-touch-icon is SVG | layout.tsx | Comment acknowledges this; need PNG conversion build step |
| **P3** | Three.js possibly dead code | package.json, HeroScene.tsx | ~500KB bundle bloat if unused |
| **P3** | GSAP imported but unclear usage | package.json | Check if any component actually uses GSAP or if Framer Motion replaced it |
| **P3** | All project accents unified to salmon | page.tsx | Was intentional but may want differentiation later |

---

## Task 4: The Handoff Seed

### For the next agent — paste this as context:

> **GESEDGE PROJECT STATE (2026-03-26):** Next.js 16 + React 19 + Tailwind 4 site for Global Edge Strategies (gesedge.com). Deployed on Vercel, Supabase backend (contact submissions + page view analytics), password-protected /admin portal. Color scheme: dark charcoal grey (#1A1C22), warm white (#F2F1ED), salmon accent (#E8836B). Fonts: Cormorant Garamond (display), Space Grotesk (body), IBM Plex Mono (code only). Custom SVG wireframe globe logo with scroll-linked animation (380px hero → 44px header dock via Framer Motion). Globe system: 4 files in src/components/globe/ (GlobeSVG.tsx renders, WireframeGlobe.tsx orchestrates scroll, globe-paths.ts has SVG data, useGlobeAnimation.ts runs rAF rotation). Brand package at /brand/ with 7 SVG variants. Bilingual EN/ZH (~350 i18n keys). 3 case studies (Bloodline=live, PJCS=demo, DocProc=internal). Anti-AI-slop writing rules in CLAUDE.md are strict and must be followed.
>
> **CRITICAL BLOCKERS & NEXT STEPS:** (1) Globe clips above header on homepage initial scroll. Root cause: Framer Motion scrollYProgress races with Lenis smooth scroll init. Multiple band-aids applied, needs proper fix (delay mount until Lenis ready, or add y-position clamp). (2) MiniMax MCP server NOT installed yet. Ryan has API key (Starter plan, Image-01 model). Install via: `claude mcp add minimax -e MINIMAX_API_KEY=<key> -e MINIMAX_MCP_BASE_PATH=<project>/public/images -e MINIMAX_API_HOST=https://api.minimax.io -e MINIMAX_API_RESOURCE_MODE=local -- uvx minimax-mcp -y`. Then generate professional images for all placeholder spots. (3) Chinese copy still has `——` em dashes in i18n.ts. (4) Legal (privacy policy, terms) and SEO optimization are Ryan's stated next priorities. (5) Resend free tier conflict. Contact form works via Supabase regardless. (6) HeroScene.tsx + Three.js may be dead code. Audit before removing. (7) Supabase tables (contact_submissions, page_views) were created manually with no migration script. (8) content.ts and i18n.ts both contain case study data and can drift.
