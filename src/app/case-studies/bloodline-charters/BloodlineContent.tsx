"use client";

import Link from "next/link";
import Image from "next/image";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage } from "@/components/LanguageProvider";

const ACCENT = "#E91E8C";
const tech = ["Next.js", "TypeScript", "Supabase", "NOAA API", "Resend", "Vercel"];

export default function BloodlineContent() {
  const { t } = useLanguage();

  const results = [
    { metric: "< 1 week", label: t("csBloodline.results.metric1Label") },
    { metric: "39", label: t("csBloodline.results.metric2Label") },
    { metric: "\u2191 CTR", label: t("csBloodline.results.metric3Label") },
    { metric: "100%", label: t("csBloodline.results.metric4Label") },
  ];

  const services = [
    t("csBloodline.sidebar.service1"),
    t("csBloodline.sidebar.service2"),
    t("csBloodline.sidebar.service3"),
  ];

  const approachCards = [
    {
      title: t("csBloodline.approach.card1Title"),
      body: t("csBloodline.approach.card1Body"),
    },
    {
      title: t("csBloodline.approach.card2Title"),
      body: t("csBloodline.approach.card2Body"),
    },
    {
      title: t("csBloodline.approach.card3Title"),
      body: t("csBloodline.approach.card3Body"),
    },
    {
      title: t("csBloodline.approach.card4Title"),
      body: t("csBloodline.approach.card4Body"),
    },
  ];

  const resultsList = [
    t("csBloodline.resultsList.r1"),
    t("csBloodline.resultsList.r2"),
    t("csBloodline.resultsList.r3"),
    t("csBloodline.resultsList.r4"),
    t("csBloodline.resultsList.r5"),
    t("csBloodline.resultsList.r6"),
  ];

  return (
    <>
      {/* ── Hero ───────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-bg">
          <Image
            src="/images/hero-bloodline.jpg"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 20% 60%, rgba(233, 30, 140, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(0, 212, 255, 0.08) 0%, transparent 60%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(233, 30, 140, 0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(233, 30, 140, 0.012) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12">
          {/* Breadcrumb */}
          <RevealSection delay={0.1}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-fg-dim uppercase hover:text-accent transition-colors duration-200 mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              {t("csDetail.allWork")}
            </Link>
          </RevealSection>

          <RevealSection delay={0.2}>
            <span
              className="inline-block text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm border mb-6"
              style={{ color: ACCENT, borderColor: `${ACCENT}33`, background: `${ACCENT}0D` }}
            >
              {t("csBloodline.hero.badge")}
            </span>
          </RevealSection>

          <RevealSection delay={0.35}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide leading-[0.92] max-w-4xl">
              Bloodline
              <br />
              <span className="text-gradient">Charters</span>
            </h1>
          </RevealSection>

          <RevealSection delay={0.55}>
            <p className="mt-6 text-xl text-fg-muted max-w-2xl leading-relaxed">
              {t("csBloodline.hero.subtitle")}
            </p>
          </RevealSection>

          <RevealSection delay={0.7}>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <MagneticButton
                href="https://fishingbloodline.com"
                variant="outline"
                external
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t("csBloodline.hero.viewSite")}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </MagneticButton>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-sm border border-border text-fg-dim">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Results row ─────────────────────── */}
      <section className="py-16 border-y border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.08}>
            {results.map((r) => (
              <RevealItem key={r.label}>
                <div className="text-center md:text-left">
                  <p
                    className="font-display text-3xl md:text-4xl font-semibold mb-1"
                    style={{ color: ACCENT }}
                  >
                    {r.metric}
                  </p>
                  <p className="text-xs font-mono text-fg-dim leading-relaxed">{r.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── Content ─────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sticky sidebar */}
            <aside className="lg:col-span-3">
              <RevealSection>
                <div className="lg:sticky lg:top-28 space-y-8">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-fg-dim uppercase mb-3">{t("csDetail.client")}</p>
                    <p className="text-fg-muted text-sm">Bloodline Charters</p>
                    <p className="text-fg-dim text-xs mt-1">{t("csBloodline.sidebar.location")}</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-fg-dim uppercase mb-3">{t("csDetail.services")}</p>
                    <ul className="space-y-1">
                      {services.map((s) => (
                        <li key={s} className="text-sm text-fg-muted">{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-fg-dim uppercase mb-3">{t("csDetail.stack")}</p>
                    <div className="flex flex-col gap-1.5">
                      {tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-fg-dim">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="divider" />
                  <a
                    href="https://fishingbloodline.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-display text-fg-muted hover:text-accent transition-colors duration-200"
                  >
                    fishingbloodline.com
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </RevealSection>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-9 space-y-20">
              {/* Problem */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    {t("csDetail.section01")}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    {t("csBloodline.problem.title")}
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed">
                    <p>{t("csBloodline.problem.p1")}</p>
                    <p>{t("csBloodline.problem.p2")}</p>
                    <p>{t("csBloodline.problem.p3")}</p>
                  </div>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Approach */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    {t("csDetail.section02")}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    {t("csBloodline.approach.title")}
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed mb-10">
                    <p>{t("csBloodline.approach.p1")}</p>
                    <p>{t("csBloodline.approach.p2")}</p>
                  </div>

                  <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
                    {approachCards.map((item) => (
                      <RevealItem key={item.title}>
                        <div className="card-glass rounded-sm p-6 h-full">
                          <h3
                            className="font-display text-base font-semibold mb-2"
                            style={{ color: ACCENT }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-sm text-fg-muted leading-relaxed">{item.body}</p>
                        </div>
                      </RevealItem>
                    ))}
                  </RevealStagger>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Live site preview */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    {t("csBloodline.preview.label")}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    {t("csBloodline.preview.title")}
                  </h2>
                  <p className="text-fg-muted mb-8 leading-relaxed">
                    {t("csBloodline.preview.desc")}{" "}
                    <a
                      href="https://fishingbloodline.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover transition-colors duration-200 underline underline-offset-4 decoration-accent/30"
                    >
                      fishingbloodline.com
                    </a>
                    {t("csBloodline.preview.descSuffix")}
                  </p>

                  {/* Browser chrome mockup */}
                  <div className="card-glass rounded-sm overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-bg-elevated/60">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-border" />
                        <div className="w-3 h-3 rounded-full bg-border" />
                        <div className="w-3 h-3 rounded-full bg-border" />
                      </div>
                      <div className="flex-1 mx-4">
                        <div className="bg-bg rounded-sm px-3 py-1.5 text-xs font-mono text-fg-dim flex items-center gap-2">
                          <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
                          </svg>
                          fishingbloodline.com
                        </div>
                      </div>
                    </div>
                    <div className="relative w-full" style={{ paddingBottom: "62.5%" }}>
                      <iframe
                        src="https://fishingbloodline.com"
                        className="absolute inset-0 w-full h-full border-0"
                        title="Bloodline Charters live site"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Results */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    {t("csBloodline.resultsSection.label")}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                    {t("csBloodline.resultsSection.title")}
                  </h2>
                  <ul className="space-y-4">
                    {resultsList.map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span className="mt-1 shrink-0" style={{ color: ACCENT }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-fg-muted leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Next case study / CTA ─────────────── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div>
              <p className="text-xs font-mono text-fg-dim tracking-widest uppercase mb-2">{t("csDetail.nextProject")}</p>
              <Link
                href="/case-studies/pjcs-rag"
                className="font-display text-2xl font-semibold hover:text-accent transition-colors duration-200 inline-flex items-center gap-3"
              >
                {t("csDetail.nextBloodline")}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <MagneticButton href="/contact" variant="outline">
              {t("csDetail.startProject")}
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
