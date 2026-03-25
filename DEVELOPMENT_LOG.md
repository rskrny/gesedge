# GESEDGE — Development Log & Handoff Document

> Last updated: 2026-03-25 | Session: bilingual-audit-pass
> Commits this session: `33fcd53`, `e3ccf93`

---

## Context Injection (paste into next agent's first prompt)

**Project state:** gesedge.com is a Next.js 16 + React 19 marketing site for Global Edge Strategies, a technical consultancy (Ryan Kearney, solo founder + 1 developer + informal advisors) building custom platforms, AI tools, and cross-border systems across US/China/UK. The site is fully bilingual (EN/ZH, 347 i18n keys), deployed on Vercel, with 3 case studies (Bloodline Charters = live production, PJCS RAG = demo, DocProc = internal tool), 3 blog posts, and a contact form (POST /api/contact → Resend email if RESEND_API_KEY exists, otherwise console log). All content is static in src/lib/ (content.ts, blog-posts.ts, i18n.ts). Case study detail pages use server page.tsx for metadata + client *Content.tsx for bilingual rendering. Anti-AI-slop writing rules are in CLAUDE.md.

**Current frontier:** The business has zero active leads. Bloodline Charters is a completed project (no revenue to GES). The pipeline is empty. The site is polished but needs lead generation. Next priorities: (1) contact form backend needs RESEND_API_KEY set in Vercel env vars to actually send emails, (2) blog content is English-only (articles themselves, not the chrome), (3) no analytics installed (no way to measure traffic), (4) LinkedIn content pipeline discussed but not implemented, (5) the homepage still references stats from content.ts that may need updating as business evolves. The case study detail pages on about/philosophy still claim "Real users. Real transactions." which is only true for Bloodline.

---

## Task 1: System Architecture

### Tech Stack
| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | Next.js (App Router, Turbopack) | 16.2.1 |
| UI | React + TypeScript | 19.2.4 / 5.9.3 |
| Styling | Tailwind CSS + PostCSS | 4.2.2 |
| Animation | Framer Motion, GSAP, Lenis | 12.38 / 3.14 / 1.3 |
| 3D | Three.js + react-three-fiber | 0.183 |
| Deploy | Vercel (standalone output) | — |
| Email | Resend.com (optional) | — |

### File Structure (key paths)
```
src/
├── app/
│   ├── page.tsx                          # Homepage ("use client")
│   ├── layout.tsx                        # Root layout (server, metadata)
│   ├── opengraph-image.tsx               # Edge OG image generator
│   ├── about/page.tsx                    # About page
│   ├── contact/page.tsx                  # Contact page
│   ├── blog/[slug]/
│   │   ├── page.tsx                      # Blog SSG (generateStaticParams)
│   │   └── BlogArticle.tsx               # Blog renderer ("use client")
│   ├── case-studies/
│   │   ├── page.tsx                      # Case studies list
│   │   ├── bloodline-charters/
│   │   │   ├── page.tsx                  # Server: metadata only
│   │   │   └── BloodlineContent.tsx      # Client: bilingual content
│   │   ├── pjcs-rag/
│   │   │   ├── page.tsx
│   │   │   └── PjcsContent.tsx
│   │   └── docproc/
│   │       ├── page.tsx
│   │       └── DocprocContent.tsx
│   └── api/contact/route.ts              # POST handler
├── components/                           # 13 components
│   ├── LanguageProvider.tsx               # React Context for i18n
│   ├── ContactForm.tsx                   # Form with validation
│   ├── HeroWordReveal.tsx                # Animated text reveal
│   ├── Header.tsx / Footer.tsx
│   ├── MagneticButton.tsx / SpotlightCard.tsx
│   └── RevealSection.tsx / SmoothScroll.tsx
└── lib/
    ├── content.ts                        # Static content (services, cases, stats)
    ├── i18n.ts                           # 347 translation keys (EN/ZH)
    ├── blog-posts.ts                     # 3 blog posts with full content
    └── seo.ts                            # Metadata helper + JSON-LD
```

### Data Flow
```
content.ts (static arrays) ──┐
blog-posts.ts (3 articles) ──┤
i18n.ts (347 keys) ──────────┼──→ LanguageProvider (React Context)
                              │         ↓
                              │    useLanguage() → { t, locale }
                              │         ↓
                              └──→ Components render bilingual content

ContactForm → POST /api/contact → console.log + Resend email (if key set)
opengraph-image.tsx → Edge function → 1200x630 PNG for social sharing
seo.ts → createMetadata() → <head> tags on every page
```

---

## Task 2: Progress & Logic Mapping

### What was achieved this session

| # | Change | Files | Impact |
|---|--------|-------|--------|
| 1 | **Honesty pass** | content.ts, i18n.ts, page.tsx, case-studies/page.tsx | Removed "All in production" claims, deflated PJCS from "Live" to "Demo" (yellow badge), updated DocProc to "internal tool" |
| 2 | **Anti-slop rules** | CLAUDE.md (created) | Writing rules banning semicolons-for-contrast, em dashes, "not X, it's Y", filler words, viral bait |
| 3 | **Contact form + API** | ContactForm.tsx, api/contact/route.ts | Proper validation, JSON POST, Resend integration, i18n labels |
| 4 | **29MB PNG cleanup** | Deleted 4 hero PNGs | Site already used .jpg versions (130-277KB), PNGs were dead weight |
| 5 | **Hero "g" cutoff fix** | HeroWordReveal.tsx | `pb-[0.15em]` on overflow-hidden spans so descenders aren't clipped |
| 6 | **OG image generator** | opengraph-image.tsx, seo.ts | Edge-runtime 1200x630 branded image for WhatsApp/LinkedIn/Twitter sharing |
| 7 | **Web manifest** | public/site.webmanifest, layout.tsx | Theme color, manifest link, proper meta tags |
| 8 | **Location cards → list** | about/page.tsx | Replaced emoji placeholder cards (🏔️🐼🏛️) with clean minimal list |
| 9 | **Full bilingual conversion** | 3 Content.tsx files, i18n.ts (+160 keys), BlogArticle.tsx | All case study detail pages and blog chrome now respect locale |
| 10 | **Stats cleanup** | content.ts, i18n.ts | Vanity metrics replaced with factual positioning |

### Current Frontier

The very next things that need addressing:

1. **RESEND_API_KEY** — Set this in Vercel environment variables. Without it, the contact form logs to console but doesn't email Ryan. This is the #1 blocker for lead capture.

2. **Analytics** — No Google Analytics, Plausible, or any tracking. There is no way to know if anyone visits the site. Install something minimal.

3. **Blog articles are English-only** — The blog chrome (nav, prev/next, CTA) is bilingual, but the actual article content in blog-posts.ts is English only. Adding zh versions of article content would require either a parallel content field or a separate content store.

4. **LinkedIn pipeline** — Discussed but not built. Ryan's LinkedIn is updated. An automated posting flow could drive traffic.

5. **Lead generation** — Zero active pipeline. The site is polished but nobody is finding it.

### Invisible Logic & Architectural Decisions

1. **Server/Client split on case studies** — Case study detail pages MUST keep the server component (page.tsx) for Next.js metadata export. All rendering lives in the "use client" Content component. This is why there are paired files (page.tsx + BloodlineContent.tsx). Don't try to merge them.

2. **PJCS badge logic is slug-based** — In page.tsx (homepage), the badge color/text for PJCS is determined by `cs.slug === "pjcs-rag"` check. If you add a new case study, it defaults to green/Live. If it's also a demo, add another condition.

3. **i18n fallback chain** — `t(key, locale)` returns: zh translation → en translation → raw key string. So missing Chinese keys silently fall back to English without breaking.

4. **OG image is edge-runtime** — The opengraph-image.tsx uses `ImageResponse` from next/og. It runs on the edge, not Node.js. Don't import Node.js modules into it.

5. **Contact form dual-mode** — If RESEND_API_KEY is set, it sends email. If not, it still returns success (200) after console logging. This is intentional so the form works in development without the key.

6. **Blog posts are fully static** — No CMS, no database, no markdown files. Posts are literal TypeScript objects in blog-posts.ts with full content as template literal strings.

7. **content.ts vs i18n.ts duplication** — The case study data exists in BOTH content.ts (consumed by the list page) AND i18n.ts (consumed by detail pages). If you update a case study description, update it in both places.

---

## Task 3: Known Technical Debt

| Priority | Issue | Location | Notes |
|----------|-------|----------|-------|
| **P0** | RESEND_API_KEY not set | Vercel env vars | Contact form logs but doesn't email |
| **P0** | No analytics | layout.tsx | Can't measure anything |
| **P1** | Blog content English-only | blog-posts.ts | Chrome is bilingual, articles are not |
| **P1** | content.ts ↔ i18n.ts duplication | Both files | Case study data in two places, can drift |
| **P2** | Philosophy stats claim "Real users. Real transactions." | i18n.ts `about.philosophy.stat3sub` | Only true for Bloodline |
| **P2** | No proper favicon.ico | public/ | Using raw 532x553 logo.png, no ICO format |
| **P2** | Loose files in repo root | Root directory | abamtns.jpg, cdtwintowers.jpg, .bat files, CONTEXT.md — should be gitignored or removed |
| **P3** | Three.js bundle size | package.json | @react-three/fiber + three.js adds ~500KB to client bundle for a single hero effect |
| **P3** | No sitemap for blog | sitemap.ts | Check if blog routes are included in dynamic sitemap |
| **P3** | next.config.ts has only unsplash in remotePatterns | next.config.ts | If new image sources added, will 404 |

---

## Task 4: The Handoff Seed

### For the next agent — paste this as context:

> **GESEDGE PROJECT STATE (2026-03-25):** Next.js 16 + React 19 + Tailwind 4 site for Global Edge Strategies (gesedge.com), a solo-founder technical consultancy. Fully bilingual EN/ZH with 347 i18n keys. Three case studies: Bloodline Charters (LIVE, completed project), PJCS RAG (DEMO, not in production), DocProc (INTERNAL tool, open source). Content is static TypeScript in src/lib/ (content.ts, i18n.ts, blog-posts.ts, seo.ts). Case study detail pages use server+client component split pattern. Anti-AI-slop writing rules enforced in CLAUDE.md. Contact form POSTs to /api/contact — needs RESEND_API_KEY in Vercel env vars to actually email. No analytics installed. OG image auto-generates via edge function.
>
> **CRITICAL CONTEXT:** The business has zero pipeline. Ryan wants to build many websites as the business model (build $5-8K, retain $1K/month). The site is polished but invisible. Immediate priorities: (1) set RESEND_API_KEY so contact form works, (2) install analytics, (3) content marketing / LinkedIn pipeline for leads. Do not inflate claims — the CLAUDE.md honesty rules are strict. When editing case studies, remember content lives in BOTH content.ts AND i18n.ts and must stay in sync. The blog articles themselves are English-only even though the blog UI chrome is bilingual.
