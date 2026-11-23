# GESEDGE — Development Log & Handoff Document

> Last updated: 2026-04-13 | Session: email-deliverability-fix
> Commits this session: none (DNS/email config changes only)
> Previous session: contact-redesign-card-cleanup (`a08a36e`, `0d6418f`)

---

## Context Injection (paste into next agent's first prompt)

**Project state (2026-03-26):** gesedge.com is a Next.js 16 + React 19 + Tailwind 4 marketing site for Global Edge Strategies (Ryan Kearney, solo founder), deployed on Vercel with auto-deploy from main. Supabase backend handles contact form submissions (table: `contact_submissions`) and page view analytics (table: `page_views`), accessed through a password-protected /admin portal (PWA-capable, auth via `GES_ADMIN_PASSWORD` env var). Color scheme: dark charcoal (#1A1C22 bg), warm white (#F2F1ED fg), salmon accent (#E8836B). Fonts: Cormorant Garamond (display), Space Grotesk (body), IBM Plex Mono (code only). Custom SVG wireframe globe logo with scroll-linked animation (380px hero -> 44px header dock via Framer Motion). Globe system lives in `src/components/globe/` (4 files: GlobeSVG.tsx renders SVG, WireframeGlobe.tsx orchestrates scroll, globe-paths.ts stores arc data, useGlobeAnimation.ts runs rAF rotation). Globe positioning uses hardcoded layout math in `computeSlotPos()`, NOT DOM queries. Bilingual EN/ZH (~350 i18n keys in `src/lib/i18n.ts`). 3 case studies: Bloodline Charters (live), PJCS RAG (demo), DocProc PDF Toolkit (open source/internal). Contact page was redesigned this session: form removed, replaced with minimal email-only layout + canvas-based particle system. Case study cards on homepage redesigned: no image slots (previously showed broken/missing images), now text-only SpotlightCard with hover effects. Tech stack section on homepage was removed. Brand package at `/brand/` with 7 SVG variants + BRAND_GUIDELINES.md. Anti-AI-slop writing rules in CLAUDE.md are strict and must be followed for all published copy.

**Current frontier and blockers:** (1) Ryan wants the SpotlightCard hover effect used more throughout the site. It's currently on homepage project cards only. Consider applying to: services cards, case study list page, about page sections, stats cards. (2) Case study pages (`/case-studies/`) use placeholder gradient boxes instead of real images. The gradient+grid effect is a decent fallback, with per-project accent colors (pink #E91E8C for Bloodline, cyan #00D4FF for PJCS, purple #B794F6 for DocProc). Eventually these need real imagery. (3) Globe clipping on homepage initial scroll persists. Root cause: Framer Motion scrollYProgress races with Lenis smooth scroll init. Multiple band-aids applied, needs proper fix (delay mount until Lenis ready, or y-position clamp). (4) MiniMax MCP server NOT installed. Ryan has API key (Starter plan, Image-01 model). Install command: `claude mcp add minimax -e MINIMAX_API_KEY=<key> -e MINIMAX_MCP_BASE_PATH=<project>/public/images -e MINIMAX_API_HOST=https://api.minimax.io -e MINIMAX_API_RESOURCE_MODE=local -- uvx minimax-mcp -y`. Once connected, generate images for case study headers and about page. (5) Chinese copy still has `——` em dashes in i18n.ts. (6) Legal (privacy policy, terms) and SEO optimization are Ryan's stated next priorities. (7) `techStack` array still exported from content.ts but the homepage section that rendered it was removed. Dead export. (8) HeroScene.tsx + Three.js + @react-three/fiber + GSAP may all be dead code. Audit before removing (~500KB+ bundle savings). (9) Resend free tier conflict (serves fishingbloodline.com). Contact form works via Supabase-only capture. (10) content.ts and i18n.ts both contain case study data and can drift.

---

## Task 1: System Architecture

### Tech Stack
| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| Framework | Next.js (App Router, Turbopack) | 16.2.1 | Standalone output for Vercel |
| UI | React + TypeScript | 19.2.4 / 5.9.3 | Strict mode, path alias @/* |
| Styling | Tailwind CSS 4 + PostCSS | 4.2.2 | CSS-native @theme directive (no config file) |
| Animation | Framer Motion + Lenis | 12.38 / 1.3 | Globe uses Framer Motion; smooth scroll via Lenis |
| 3D (likely dead) | Three.js + react-three-fiber + GSAP | 0.183 / 9.5 / 3.14 | HeroScene.tsx exists but may not be mounted. Audit needed |
| Database | Supabase (PostgreSQL) | 2.100.0 | Contact submissions + page view analytics |
| Deploy | Vercel | -- | Auto-deploy from main branch |
| Email | Resend.com (optional) | -- | Not active. Free tier conflict with fishingbloodline.com |
| Image Gen | MiniMax Image-01 | -- | NOT CONNECTED. API key exists, MCP server not installed |

### File Structure
```
gesedge/
├── brand/                                  # Brand package
│   ├── BRAND_GUIDELINES.md                 # Usage rules, color specs, spacing
│   └── svg/                                # 7 SVG variants (dark/light/mono/salmon)
├── public/
│   ├── favicon.svg                         # Globe favicon (SVG)
│   ├── admin-manifest.json                 # PWA manifest for /admin
│   ├── site.webmanifest                    # Main site manifest
│   └── images/
│       ├── hero-home.jpg                   # Homepage hero background
│       ├── hero-bloodline.jpg              # Case study hero (used on detail page)
│       ├── hero-pjcs.jpg                   # Case study hero (used on detail page)
│       └── hero-docproc.jpg                # Case study hero (used on detail page)
├── scripts/
│   └── optimize-heroes.mjs                 # Image optimization script
├── src/
│   ├── app/
│   │   ├── page.tsx                        # Homepage ("use client")
│   │   ├── layout.tsx                      # Root: Header, Footer, WireframeGlobe, Analytics, SmoothScroll
│   │   ├── globals.css                     # Design tokens via @theme directive
│   │   ├── not-found.tsx
│   │   ├── opengraph-image.tsx             # Edge OG image generator
│   │   ├── robots.ts                       # Blocks /admin, /api from crawlers
│   │   ├── sitemap.ts
│   │   ├── admin/                          # Admin portal (PWA)
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx                    # Submissions inbox + analytics charts
│   │   ├── api/
│   │   │   ├── contact/route.ts            # POST: validate -> Supabase insert -> optional Resend
│   │   │   └── admin/route.ts              # GET submissions, PATCH read/archive (password auth)
│   │   ├── about/page.tsx
│   │   ├── contact/
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx                    # Minimal: email + particles (no form)
│   │   ├── blog/[slug]/
│   │   │   ├── page.tsx                    # SSG via generateStaticParams
│   │   │   └── BlogArticle.tsx
│   │   └── case-studies/
│   │       ├── page.tsx                    # List page with gradient placeholder images
│   │       ├── layout.tsx
│   │       ├── bloodline-charters/         # page.tsx (server) + BloodlineContent.tsx (client)
│   │       ├── pjcs-rag/                   # Same pattern
│   │       └── docproc/                    # Same pattern
│   ├── components/
│   │   ├── globe/                          # Globe logo system (4 files)
│   │   │   ├── GlobeSVG.tsx                # Pure SVG renderer (size, rotation, opacity props)
│   │   │   ├── WireframeGlobe.tsx          # Scroll animation orchestrator
│   │   │   ├── globe-paths.ts              # SVG path data for globe arcs
│   │   │   └── useGlobeAnimation.ts        # rAF rotation hook
│   │   ├── Analytics.tsx                   # Supabase page view tracker (skips /admin)
│   │   ├── ContactParticles.tsx            # Canvas particle system (salmon/white/grey + connection lines)
│   │   ├── Header.tsx                      # Fixed header with data-globe-slot positioning div
│   │   ├── Footer.tsx                      # Uses GlobeSVG directly
│   │   ├── LanguageProvider.tsx            # React Context for i18n
│   │   ├── LanguageToggle.tsx
│   │   ├── ContactForm.tsx                 # POSSIBLY DEAD: contact page no longer uses a form
│   │   ├── HeroWordReveal.tsx              # Animated text with descender fix (pb-[0.22em])
│   │   ├── HeroBackground.tsx              # CSS gradient mesh behind hero
│   │   ├── HeroScene.tsx                   # LIKELY DEAD: Three.js scene replaced by globe
│   │   ├── MagneticButton.tsx              # Hover-responsive button with magnetic cursor effect
│   │   ├── SpotlightCard.tsx               # Card with cursor-following spotlight glow
│   │   ├── RevealSection.tsx               # Scroll-triggered fade-in (+ RevealStagger, RevealItem)
│   │   ├── SmoothScroll.tsx                # Lenis smooth scroll wrapper
│   │   └── AnimatedCounter.tsx             # Animated number counting
│   └── lib/
│       ├── content.ts                      # Static content: services, caseStudies, stats, techStack
│       ├── i18n.ts                         # ~350 bilingual keys (EN/ZH)
│       ├── blog-posts.ts                   # 3 blog posts (English body only)
│       ├── seo.ts                          # Metadata + JSON-LD helpers
│       └── supabase.ts                     # Public client (anon key) + service client (service role)
├── CLAUDE.md                               # Anti-AI-slop writing rules (MUST READ)
├── CONTEXT.md                              # Project context overview
└── DEVELOPMENT_LOG.md                      # This file
```

### Data Flow
```
CONTENT LAYER (static TypeScript)
  content.ts    -> case studies, services, stats (English)
  i18n.ts       -> 350 bilingual strings (EN/ZH)
  blog-posts.ts -> 3 articles (English body only)
  seo.ts        -> metadata factory + JSON-LD schemas
         |
         v
RENDERING LAYER
  LanguageProvider (React Context) -> useLanguage() -> { t, locale }
  Components consume t("key") for bilingual rendering
  Case studies: server page.tsx (metadata export) + client *Content.tsx (rendering)
  Homepage: "use client" - directly imports content arrays + i18n
         |
         v
INTERACTIVE LAYER
  Contact page    -> mailto: link (no form submission)
  ContactForm.tsx -> POST /api/contact (exists but unused after contact redesign)
    -> Supabase insert (contact_submissions table)
    -> Optional Resend email (RESEND_API_KEY not set)
  Analytics.tsx   -> Supabase insert (page_views table)
    -> Fires on route change, skips /admin paths
  /admin portal   -> GET /api/admin?token=<password>
    -> Reads contact_submissions + page_views from Supabase
    -> PATCH /api/admin to mark submissions read/archived

GLOBE ANIMATION SYSTEM
  WireframeGlobe.tsx (mounted in layout.tsx, position: fixed, z-55)
    Homepage: 380px centered right of hero (#hero-section)
      -> Scroll-linked shrink to 44px header slot via useMotionValueEvent
    Other pages: renders at header slot position immediately
  GlobeSVG.tsx      -> Pure SVG with rotation prop
  useGlobeAnimation -> rAF loop, returns rotation MotionValue
  globe-paths.ts    -> Meridian/latitude arc path data
  Header.tsx        -> <div data-globe-slot> as positioning target
  computeSlotPos()  -> Calculates slot XY from layout constants (NOT DOM queries)

PARTICLE SYSTEM (contact page only)
  ContactParticles.tsx -> Canvas 2D
    60 particles (salmon/white/grey), upward drift
    Connection lines between particles < 120px apart (salmon, low opacity)
    Lifecycle: fade in -> visible -> fade out -> recycle from bottom
```

### Environment Variables
| Variable | Where | Status | Purpose |
|----------|-------|--------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Vercel | Set | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Vercel | Set | Supabase public key (RLS-gated) |
| `SUPABASE_SERVICE_ROLE_KEY` | Vercel | Set | Supabase admin key (bypasses RLS) |
| `GES_ADMIN_PASSWORD` | Vercel | Set | Password for /admin portal |
| `RESEND_API_KEY` | Vercel | NOT SET | Email sending (free tier conflict with fishingbloodline.com) |
| `MINIMAX_API_KEY` | .env.local | NOT SET | Image generation (MCP not installed) |

### Email Infrastructure (external, not in repo)
| System | Status | Notes |
|--------|--------|-------|
| Purelymail (ges@purelymail.com) | Active, $10 Simple plan | Handles all custom domain email |
| ryan@gesedge.com | Working | Send via Gmail "Send as" + Purelymail SMTP; receive via Purelymail routing → rskrny@gmail.com |
| DNS (Porkbun) | Correct | SPF, DKIM (3 keys), DMARC (p=none), MX all verified 2026-04-13 |
| mail-tester.com | 10/10 | Perfect score. New domain reputation is only remaining deliverability concern |

---

## Task 2: Progress & Logic Mapping

### Session: email-deliverability-fix (2026-04-13, latest)

| # | Change | Key Files/Systems |
|---|--------|-------------------|
| 1 | **Deleted duplicate SPF record** | Porkbun DNS for gesedge.com |
| | Had two SPF TXT records (`_spf.porkbun.com` + `_spf.purelymail.com`), causing SPF validation failures. Deleted the Porkbun one. | |
| 2 | **Replaced DMARC CNAME with custom TXT** | Porkbun DNS for gesedge.com |
| | Was: CNAME `_dmarc.gesedge.com → dmarcroot.purelymail.com` (p=reject, too strict for new domain). Now: TXT `v=DMARC1; p=none; rua=mailto:ryan@gesedge.com` | |
| 3 | **Activated Purelymail account** | purelymail.com billing |
| | Account was in trial mode with $0.09 remaining credit, likely blocking outbound email. Paid $10 to activate Simple plan. | |
| 4 | **Changed Gmail reply-to setting** | Gmail Settings > Accounts and Import |
| | Changed from "Always reply from default address" to "Reply from the same address the message was sent to" so replies to ryan@gesedge.com go out as ryan@gesedge.com. | |
| 5 | **Verified deliverability** | mail-tester.com |
| | Score: 10/10. SPF, DKIM, DMARC, SpamAssassin all passing. Remaining issue: new domain reputation causes some corporate mail servers to spam-folder emails initially. Will improve with usage. | |

### Session: contact-redesign-card-cleanup (2026-03-26)

| # | Change | Commit | Key Files |
|---|--------|--------|-----------|
| 1 | **Contact page redesign** | `a08a36e` | contact/page.tsx, ContactParticles.tsx |
| | Removed: stock image, multi-field form (name, email, company, service dropdown, message) | | |
| | Added: minimal centered layout with email link, response time, locations, canvas particle system | | |
| 2 | **Homepage tech stack section removed** | `0d6418f` | page.tsx |
| | The "Technologies We Ship With" badge grid was cut per Ryan's feedback | | |
| 3 | **Case study images deduplicated** | `0d6418f` | case-studies/page.tsx |
| | PJCS and DocProc were using the same image. Replaced all case study images on the list page with generated gradient+grid placeholders using per-project accent colors | | |
| 4 | **Homepage project cards redesigned** | `0d6418f` | page.tsx |
| | Removed image area from cards (images were missing/broken). Cards now show: category badge, status indicator, title, description, tech tags, "Read case study" link. SpotlightCard hover effect retained. | | |

### Previous Session: brand-redesign-admin-portal (2026-03-26, earlier)

| # | Change | Commits | Key Files |
|---|--------|---------|-----------|
| 1 | Admin portal + Supabase backend | `0b14258` | admin/page.tsx, api/admin/route.ts, supabase.ts, Analytics.tsx |
| 2 | Contact form persistence (Supabase) | `0b14258` | api/contact/route.ts |
| 3 | Page view analytics | `0b14258` | Analytics.tsx |
| 4 | Em dash purge (English) | `bf6d1c7` | i18n.ts |
| 5 | Color palette overhaul (grey/white/salmon) | `5d178ae`, `0d76568` | globals.css |
| 6 | Wireframe globe logo + scroll animation | `80f168c`, `761346d`, `4f3ca17`, `2c7932c` | globe/ directory |
| 7 | Brand package | `2c7932c` | brand/ directory |
| 8 | Font change (JetBrains Mono -> IBM Plex Mono) | `bf6d1c7` | globals.css |
| 9 | Footer logo updated to GlobeSVG | `4f3ca17` | Footer.tsx |
| 10 | AI slop deletion from about page | `4f3ca17` | about/page.tsx |

### Current Frontier

Priority-ordered list of what needs addressing next:

1. **Expand SpotlightCard usage** -- Ryan likes the hover effect on homepage project cards and wants it used more throughout the site. Candidates: services cards on homepage (currently card-glass), case study list page entries, about page sections, stats cards.

2. **Case study images** -- List page uses gradient+grid placeholders (decent, not broken). Detail pages still use hero-*.jpg files which are placeholder photos. Need professional imagery. MiniMax MCP could generate these once installed.

3. **MiniMax MCP installation** -- Ryan has a Minimax API key (sk-*, $10 Starter plan, Image-01 model). Install via:
   ```
   claude mcp add minimax \
     -e MINIMAX_API_KEY=<key> \
     -e MINIMAX_MCP_BASE_PATH=<project>/public/images \
     -e MINIMAX_API_HOST=https://api.minimax.io \
     -e MINIMAX_API_RESOURCE_MODE=local \
     -- uvx minimax-mcp -y
   ```

4. **Globe clipping on homepage scroll** -- Framer Motion scrollYProgress races with Lenis init. Multiple patches applied. Options: (a) delay globe mount until Lenis reports ready, (b) CSS overflow:visible on header during transition, (c) add minimum y-clamp so globe never goes above y=14px.

5. **Chinese em dashes** -- Search for `——` in i18n.ts and rewrite.

6. **Legal compliance** -- No privacy policy, terms, or cookie consent. Ryan flagged as priority.

7. **SEO optimization pass** -- Ryan flagged alongside legal.

8. **Dead code audit** -- ContactForm.tsx (contact page no longer uses a form), HeroScene.tsx (Three.js scene), @react-three/fiber, three.js, gsap packages, `techStack` export in content.ts. Removing Three.js alone would cut ~500KB+ from the bundle.

9. **Resend API key** -- Free tier serves fishingbloodline.com. Options: new account for GES, or accept Supabase-only (admin portal shows submissions regardless).

### Invisible Logic & Architectural Decisions

1. **Globe positioning uses hardcoded layout math, not DOM queries.** `computeSlotPos()` in WireframeGlobe.tsx calculates the header slot position from known constants (header 72px, slot 44px, max-w 7xl = 1280px, padding 24/48px). If you change header height, padding, or max-width, you MUST update computeSlotPos().

2. **Globe is mounted in layout.tsx, NOT in Header.tsx.** It's a sibling, position:fixed, z-55. It reads `data-globe-slot` div in Header for target position. This decoupling lets it animate independently.

3. **Homepage hero section has `id="hero-section"`** -- WireframeGlobe uses this to find and position the large globe. Renaming this ID breaks globe positioning.

4. **Admin auth is simple password comparison** -- GES_ADMIN_PASSWORD env var checked via GET /api/admin?token=xxx. Token held in React state, lost on refresh. Adequate for solo founder.

5. **Analytics skips /admin paths** -- Analytics.tsx checks `pathname.startsWith('/admin')` to avoid inflating counts.

6. **Supabase tables created manually, not migrated.** No migration script. If Supabase project is recreated:
   - `contact_submissions`: id, created_at, name, email, company, message, budget, is_read, is_archived
   - `page_views`: id, created_at, path, referrer, user_agent

7. **Contact page no longer has a form.** The ContactForm.tsx component and POST /api/contact route still exist but are unused. The contact page is now email-only (mailto: link). ContactForm.tsx is dead code.

8. **Case study accent colors diverge between homepage and list page.** Homepage (`page.tsx`) uses all-salmon (#E8836B) for project badges. Case studies list (`case-studies/page.tsx`) uses differentiated colors: #E91E8C (Bloodline), #00D4FF (PJCS), #B794F6 (DocProc). These color systems are independent.

9. **Server/Client split on case studies** -- page.tsx = server (metadata export), *Content.tsx = client (bilingual rendering). Do not merge.

10. **content.ts vs i18n.ts duplication** -- Case study data exists in both files. content.ts holds English content + tech stacks. i18n.ts holds bilingual title/subtitle/challenge/solution strings. Drift risk.

11. **`techStack` export in content.ts is dead.** The homepage section that rendered it was removed in `0d6418f`. The export remains.

---

## Task 3: Known Technical Debt

| Priority | Issue | Location | Notes |
|----------|-------|----------|-------|
| **P0** | Globe clips on homepage scroll | WireframeGlobe.tsx | Framer Motion / Lenis timing race |
| **P1** | No professional images | public/images/ | Placeholder photos on detail pages, gradient fallbacks on list page |
| **P1** | MiniMax MCP not connected | Claude MCP config | API key exists, server not added |
| **P1** | Chinese em dashes remain | i18n.ts | Search for `——` |
| **P1** | No privacy policy / terms | N/A | Legal compliance required |
| **P1** | No SEO optimization pass | sitemap.ts, robots.ts, meta | Flagged by Ryan |
| **P2** | ContactForm.tsx is dead code | src/components/ | Contact page no longer uses a form |
| **P2** | POST /api/contact unused | api/contact/route.ts | No frontend submits to it anymore |
| **P2** | `techStack` export dead | content.ts | Homepage section removed |
| **P2** | Blog content English-only | blog-posts.ts | Article bodies not translated |
| **P2** | Supabase tables not version-controlled | N/A | Created manually, no migration script |
| **P2** | content.ts / i18n.ts duplication | Both files | Case study data in two places, drift risk |
| **P2** | Loose files in repo root | Root | abamtns.jpg, cdtwintowers.jpg, .bat files, CONTEXT.md |
| **P2** | apple-touch-icon is SVG | layout.tsx | Needs PNG conversion |
| **P2** | RESEND_API_KEY not set | Vercel env vars | Free tier conflict |
| **P3** | Three.js / r3f possibly dead | package.json, HeroScene.tsx | ~500KB bundle bloat |
| **P3** | GSAP imported, usage unclear | package.json | Verify if anything uses it |
| **P3** | Homepage accent colors all identical | page.tsx projectAccents | All salmon. May want differentiation later |

---

## Task 4: The Handoff Seed

### For the next agent -- paste this as context:

> **GESEDGE PROJECT STATE (2026-03-26):** gesedge.com is a Next.js 16 + React 19 + Tailwind 4 marketing site for Global Edge Strategies, deployed on Vercel (auto-deploy from main). Supabase backend (contact_submissions + page_views tables, created manually). Password-protected /admin portal. Color: dark charcoal #1A1C22, warm white #F2F1ED, salmon accent #E8836B. Fonts: Cormorant Garamond (display), Space Grotesk (body), IBM Plex Mono (code). Custom SVG wireframe globe logo with scroll animation (4 files in src/components/globe/). Globe positioning uses hardcoded math in computeSlotPos(), NOT DOM queries. Homepage hero must keep `id="hero-section"` or globe breaks. Contact page is email-only with canvas particle system (no form). Homepage project cards use SpotlightCard (no images). Case study list page uses gradient+grid placeholder boxes with per-project accent colors (pink/cyan/purple). Bilingual EN/ZH (~350 i18n keys). 3 case studies: Bloodline (live), PJCS (demo), DocProc (open source). Anti-AI-slop writing rules in CLAUDE.md are strict. content.ts and i18n.ts both hold case study data (drift risk). ContactForm.tsx, HeroScene.tsx, Three.js, GSAP, and the `techStack` content export are all likely dead code.
>
> **ACTIVE PRIORITIES:** (1) Ryan wants SpotlightCard hover effect used more throughout the site. (2) Globe clips above header on homepage initial scroll (Framer Motion / Lenis timing race). (3) MiniMax MCP not installed (Ryan has API key, Image-01 model, install command documented above). Once connected, generate professional images for case study headers and about page. (4) Chinese em dashes `——` still in i18n.ts. (5) Legal compliance (privacy policy, terms, cookie consent) and SEO optimization pass are Ryan's stated next priorities. (6) Dead code cleanup would save ~500KB+ (Three.js, r3f, GSAP, HeroScene, ContactForm, techStack export). (7) Resend email not active (free tier conflict with fishingbloodline.com). Supabase-only contact capture works fine.
