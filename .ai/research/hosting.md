# Hosting & DNS — gesedge.com
<!-- Reference. Verified facts carry a date; re-verify before changing shared state. -->

## Current state — LIVE ON CLOUDFLARE since 2026-10-05 ~10:58 local
gesedge.com and www.gesedge.com are Worker custom domains on worker `gesedge` (Server: cloudflare).
www → 308 → apex (in code). "Always Use HTTPS" ON for the zone (http → 301 https; sullivan fine).
Post-switch checks passed on the live domain: 15 routes, HSTS, images, OG, admin 401/200, real
contact submit (row id 4, archived), MX unchanged, sullivan.gesedge.com still behind Access.
Vercel: project kept as rollback until ≥2026-10-07, Git integration DISCONNECTED (no builds/emails).
PR #2 merged to `main` (3912a4b). Workers Builds (auto-deploy on merge to main): see below.

## Pre-switch state (historical)
DNS moved from Porkbun to Cloudflare on 2026-10-01; the site was served by Vercel
(`A @ 76.76.21.21`, `CNAME www cname.vercel-dns.com`, both DNS-only) until 2026-10-05.

- Registrar: Porkbun (unchanged). Nameservers: quentin.ns.cloudflare.com, selah.ns.cloudflare.com.
- Zone: Cloudflare Free, on Ryan's personal Cloudflare account. 11 records copied 1:1 from Porkbun:
  - `A @ 76.76.21.21` and `CNAME www` → Vercel, both DNS-only (grey cloud). These serve the site.
  - Email (Purelymail) — **do not touch**: MX mailserver.purelymail.com (50), SPF TXT, DMARC TXT,
    Purelymail ownership TXT, purelymail1/2/3._domainkey CNAMEs (DNS-only).
  - 2 old `_acme-challenge` TXT (leftovers).
- Vercel: team "Ryan's projects" (`ryans-projects-4fd48889`), project `gesedge`
  (`prj_1a1Zf44uq8ypfOsH1AAGJzNzSmS7`). Git integration auto-deploys `main` → gesedge.com.

## Same zone, NOT this repo — never modify
- `sullivan.gesedge.com` = Cloudflare Worker custom domain (Sullivan client dashboard, Worker
  `sullivan-section`, behind Cloudflare Access, team domain gesedge.cloudflareaccess.com).
- The Access apps and policies in Zero Trust belong to that dashboard.

## Vercel exit — status 2026-10-05: worker deployed + tested, DNS NOT switched yet
- Branch `chore/cloudflare-workers` (off `main`): OpenNext adapter, `wrangler.jsonc` (worker
  `gesedge`), Next 16.3.8, HSTS header. Test URL: https://gesedge.rskrny.workers.dev
  (workers.dev is blocked in mainland China — test via VPN).
- Worker secrets set (same 4 as Vercel): NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY, GES_ADMIN_PASSWORD. No RESEND key existed — the contact form has
  never emailed; leads only land in Supabase (`ges_contact_submissions`, seen at /admin).
- Verified on workers.dev: 15 routes same status + title as live (incl. 404), next/image → webp
  via Images binding, OG 1200×630, immutable `/_next/static`, HSTS, admin 401/200 + PATCH,
  contact 400/200 + row landed (test row id 3, archived). Screenshots match live.
- PR #2 (`chore/cloudflare-workers`) also adds: www → apex 308 in `next.config.ts` (root has its
  own rule — OpenNext leaves an empty `:path*` literal), `next/image` remote sources locked to the 3
  Unsplash URLs in use (Images free tier = 5k unique transformations/mo). Vercel preview of PR #2
  builds fine, so merging is safe while Vercel still serves.
- Supabase RLS verified: anon can only INSERT into `ges_contact_submissions` / `ges_page_views`;
  reading leads needs the service-role key. Client page views from the worker land fine.
- Local `CLOUDFLARE_API_TOKEN` can deploy Workers but can NOT read/edit DNS or zone settings.
- Worker custom domains: keep them OUT of `wrangler.jsonc` (no `routes` key) and add them in the
  dashboard. With no `routes` key, deploys leave them alone (proven by `sullivan-section`). With a
  `routes` key, every deploy overwrites them.
- Workers Builds (when connected): production branch `main` only, non-production builds OFF,
  build `npx opennextjs-cloudflare build`, deploy `npx opennextjs-cloudflare deploy`, build vars
  NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY (inlined at build; runtime secrets are
  separate and already set).
- Pre-existing bug (live too): footer "Blog" link, post back-links and sitemap point to `/blog`,
  which 404s.
- **Rollback:** remove the Worker custom domains, re-add `A @ 76.76.21.21` and
  `CNAME www cname.vercel-dns.com` (both DNS-only). Keep the Vercel project ≥48h after cutover.

## Vercel exit — original suggested path (from the 2026-10-01 DNS session)
Written against the legacy Next.js app on `main`. See "Open question" below before doing it.
1. Adapt the Next.js 16 app (output standalone; `/api/contact` → Supabase insert + optional Resend
   email; `/api/admin` behind `GES_ADMIN_PASSWORD`) with `@opennextjs/cloudflare` for Workers.
2. Secrets via `wrangler secret put`: NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY,
   SUPABASE_SERVICE_ROLE_KEY, GES_ADMIN_PASSWORD, RESEND_API_KEY (if used).
3. Deploy to `*.workers.dev` first. Test every page plus a REAL contact-form submission (row lands
   in Supabase, email arrives) and `/api/admin`.
4. Attach gesedge.com and www as Worker custom domains (replaces the Vercel A + www CNAME).
   Leave every MX, TXT and DKIM record exactly as is.
5. Verify (`Server` header no longer Vercel, contact form works on the live domain, email still
   flows), then delete the Vercel project.

**Open question:** `main`'s Next.js app is slated for replacement by the Astro rebuild. Porting it
to Workers now is work thrown away at the swap unless the rebuild stays shelved. Decide which
codebase goes live first, then move hosting once.

## Target (Ryan, 2026-10-05)
Own mini server (hardware pending) served through **Cloudflare Tunnel**. Location not yet set.

## China reachability
Ryan works from mainland China. Cloudflare free-plan custom domains can fail the TLS handshake
there, and Vercel has its own mainland problems. Test from a US runner, a VPN, or the
`workers.dev` address.

HuanQiao's buyers are mainland companies, so the ZH site needs its own delivery path:
- Cloudflare's mainland network (China Network) is Enterprise-only and needs an ICP filing per
  apex domain (Cloudflare docs). Free plan + Tunnel serves China from outside China.
- A public site served from a mainland server needs an ICP filing, tunnel or not.
- ICP path for the WFOE: mainland server (≥3-month term) + a domain held at a mainland-qualified
  registrar in the WFOE's name. Porkbun can't be filed: either transfer gesedge.com (ties the US
  brand's domain to the WFOE) or buy a separate HuanQiao `.cn`. 备案号 in the footer, then the
  public-security filing (公安备案) within 30 days.
- Cheapest compliant setup (Codex, sourced to Tencent docs 2026-10-05): Tencent Cloud account
  verified as the WFOE; Chengdu Lighthouse 2c/2GB ~¥52/month list, 3 months qualifies for filing
  (~¥156 upfront); domain ~¥30-100/yr; DNSPod + SSL free; filing free. Budget 2-6 weeks overall.
  Kimi's independent estimate: ~¥150-250 year one, 1-3 weeks.
- ICP enables mainland hosting and helps trust; it does not guarantee Baidu ranking.
- Stopgap without ICP: Hong Kong hosting. Works today; mainland speed and Baidu trust are weaker.
- **PIPL:** a contact form collecting mainland visitors' details into Supabase/US systems is a
  cross-border transfer of personal information — disclose the overseas recipient and get
  separate consent (PIPL Arts. 38-39).

## Vercel activity (checked 2026-10-05)
Production deploys only from `main` (last one 2026-06-27). Every push to any other branch makes a
**preview** deploy + a Vercel email/PR comment. That continues until the Vercel project is
disconnected or deleted.
