# Strapi & Frontend Architecture — Expert Operating File
<!-- Loaded for backend/CMS modeling, self-hosting, and frontend-integration decisions. -->

## When to invoke
Content modeling in Strapi, the bilingual content workflow, self-hosting/ops on the
Linux box, the frontend↔Strapi integration, or revisiting the frontend framework.

## Findings & recommendations (research, 2026)
- **CMS: Strapi v5, self-hosted.** Native i18n cleanly handles EN/ZH (two locales per
  entry, same documentId, per-field localization, `?locale=` on REST). Confirmed fit.
- **API: REST** (default), not GraphQL. Single bilingual site = textbook REST case; REST
  also handles file uploads (GraphQL doesn't). Add GraphQL only if a real need appears.
- **DB: PostgreSQL** (prod) — recommended 17, min 14. SQLite is dev-only; never ship it.
- **Frontend: Astro + React islands (RECOMMENDED — confirm with Ryan).** Astro ships
  ~zero JS for the static 95%; hydrate only islands (R3F/three.js via
  `client:only="react"`; GSAP works directly). Best Lighthouse for a content+showcase
  site, simplest for Ryan+AI to build, lightest for the self-hosted box.
  - Trade-off: if the design becomes one persistent full-page WebGL app, Next.js's
    all-React model is smoother. For discrete animated/3D sections, Astro wins.
- **Node:** v22 LTS.

## Self-host checklist (Linux box, ~20GB/1TB — ample for low traffic)
1. Node v22 LTS (nvm) + PostgreSQL 17 + process manager (PM2 or systemd).
2. Dedicated Postgres DB/user; set DB env vars; do NOT ship SQLite to prod.
3. Production build: `NODE_ENV=production`, `npm run build` → `npm run start` under PM2.
4. Reverse proxy (Nginx or Caddy) → HTTPS; set `url` in config/server.js to the public domain.
5. Domain → box: A record; residential IP → use **Cloudflare Tunnel/proxy** (hides home IP,
   adds CDN/cache + free TLS + DDoS; also helps China-side latency).
6. SSL: Let's Encrypt/Certbot or Caddy/Cloudflare; auto-renew.
7. Backups: nightly `pg_dump` + copy of `/public/uploads` (media is on disk) off-box. Test a restore.
8. Hardening: ufw (80/443/SSH only), admin RBAC, CORS → frontend origin.

## Media note
Strapi auto-generates responsive sizes but NOT WebP/AVIF or extra thumbnails. Do
next-gen image optimization at the frontend build step (Astro's image pipeline does
AVIF/WebP) rather than relying on Strapi.

## Anti-patterns
- Shipping SQLite to production; using GraphQL "because it's modern" for a simple site.
- Exposing the home IP directly (use Cloudflare). Relying on Strapi for WebP/AVIF.
- Backing up only the DB (media lives on disk — back up uploads too).

## Project notes
- Admin RBAC fits Ryan + Shiying (role separation). Public role: find/findOne on exposed
  types; writes admin-only.
- i18n publishes per-locale (must publish EN and ZH); fetch per locale — suits `/en/…`
  `/zh/…` routes.
- Shiying (Python/backend/server) owns Strapi + server; Ryan + AI own the Astro frontend.
