"use client";

import Link from "next/link";
import Image from "next/image";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage } from "@/components/LanguageProvider";

const ACCENT = "#00D4FF";
const tech = ["Python", "FastAPI", "ChromaDB", "GPT-4o-mini", "Railway", "BM25"];

export default function PjcsContent() {
  const { t } = useLanguage();

  const architectureSteps = [
    {
      step: "01",
      title: t("csPjcs.arch.step1Title"),
      body: t("csPjcs.arch.step1Body"),
    },
    {
      step: "02",
      title: t("csPjcs.arch.step2Title"),
      body: t("csPjcs.arch.step2Body"),
    },
    {
      step: "03",
      title: t("csPjcs.arch.step3Title"),
      body: t("csPjcs.arch.step3Body"),
    },
    {
      step: "04",
      title: t("csPjcs.arch.step4Title"),
      body: t("csPjcs.arch.step4Body"),
    },
    {
      step: "05",
      title: t("csPjcs.arch.step5Title"),
      body: t("csPjcs.arch.step5Body"),
    },
  ];

  const services = [
    t("csPjcs.sidebar.service1"),
    t("csPjcs.sidebar.service2"),
    t("csPjcs.sidebar.service3"),
  ];

  const languages = [
    { lang: t("csPjcs.lang.en"), flag: "\uD83C\uDDFA\uD83C\uDDF8" },
    { lang: t("csPjcs.lang.zh"), flag: "\uD83C\uDDE8\uD83C\uDDF3" },
    { lang: t("csPjcs.lang.es"), flag: "\uD83C\uDDF2\uD83C\uDDFD" },
  ];

  const resultCards = [
    {
      title: t("csPjcs.results.card1Title"),
      body: t("csPjcs.results.card1Body"),
    },
    {
      title: t("csPjcs.results.card2Title"),
      body: t("csPjcs.results.card2Body"),
    },
    {
      title: t("csPjcs.results.card3Title"),
      body: t("csPjcs.results.card3Body"),
    },
    {
      title: t("csPjcs.results.card4Title"),
      body: t("csPjcs.results.card4Body"),
    },
    {
      title: t("csPjcs.results.card5Title"),
      body: t("csPjcs.results.card5Body"),
    },
    {
      title: t("csPjcs.results.card6Title"),
      body: t("csPjcs.results.card6Body"),
    },
  ];

  return (
    <>
      {/* ── Hero ───────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-bg">
          <Image
            src="/images/hero-pjcs.jpg"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(0, 212, 255, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 212, 255, 0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.012) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12">
          <RevealSection delay={0.1}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-fg-dim uppercase hover:text-accent transition-colors duration-200 mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              {t("csDetail.allWork")}
            </Link>
          </RevealSection>

          <RevealSection delay={0.2}>
            <span
              className="inline-block text-xs font-medium tracking-[0.15em] uppercase px-3 py-1.5 rounded-sm border mb-6"
              style={{ color: ACCENT, borderColor: `${ACCENT}33`, background: `${ACCENT}0D` }}
            >
              {t("csPjcs.hero.badge")}
            </span>
          </RevealSection>

          <RevealSection delay={0.35}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide leading-[0.92] max-w-4xl">
              PJCS{" "}
              <span style={{ color: ACCENT }}>RAG</span>
              <br />
              System
            </h1>
          </RevealSection>

          <RevealSection delay={0.55}>
            <p className="mt-6 text-xl text-fg-muted max-w-2xl leading-relaxed">
              {t("csPjcs.hero.subtitle")}
            </p>
          </RevealSection>

          <RevealSection delay={0.7}>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <MagneticButton
                href="https://pjcsrag-production.up.railway.app/"
                variant="outline"
                external
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                {t("csPjcs.hero.demo")}
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

      {/* ── Language badges ──────────────────── */}
      <section className="py-12 border-y border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs font-medium text-fg-dim tracking-widest uppercase">
                {t("csPjcs.langSupported")}
              </span>
              {languages.map(({ lang, flag }) => (
                <span
                  key={lang}
                  className="text-sm font-display px-4 py-2 rounded-sm border flex items-center gap-2"
                  style={{ borderColor: `${ACCENT}33`, color: ACCENT, background: `${ACCENT}0A` }}
                >
                  <span>{flag}</span>
                  {lang}
                </span>
              ))}
              <span className="text-xs text-fg-dim ml-auto">
                {t("csPjcs.fullCatalog")}
              </span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Content ─────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <RevealSection>
                <div className="lg:sticky lg:top-28 space-y-8">
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] text-fg-dim uppercase mb-3">{t("csDetail.client")}</p>
                    <p className="text-fg-muted text-sm">{t("csPjcs.sidebar.clientName")}</p>
                    <p className="text-fg-dim text-xs mt-1">{t("csPjcs.sidebar.clientRoute")}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] text-fg-dim uppercase mb-3">{t("csDetail.services")}</p>
                    <ul className="space-y-1">
                      {services.map((s) => (
                        <li key={s} className="text-sm text-fg-muted">{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] text-fg-dim uppercase mb-3">{t("csDetail.stack")}</p>
                    <div className="flex flex-col gap-1.5">
                      {tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-fg-dim">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="divider" />
                  <a
                    href="https://pjcsrag-production.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-display text-fg-muted hover:text-accent transition-colors duration-200"
                  >
                    {t("csPjcs.sidebar.liveDemo")}
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
                    className="text-xs font-medium tracking-[0.15em] uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    {t("csDetail.section01")}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    {t("csPjcs.problem.title")}
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed">
                    <p>{t("csPjcs.problem.p1")}</p>
                    <p>{t("csPjcs.problem.p2")}</p>
                    <p>{t("csPjcs.problem.p3")}</p>
                  </div>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Architecture */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-medium tracking-[0.15em] uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    {t("csPjcs.archSection.label")}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    {t("csPjcs.archSection.title")}
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed mb-10">
                    <p>{t("csPjcs.archSection.p1")}</p>
                  </div>

                  {/* Architecture pipeline */}
                  <div className="space-y-3">
                    {architectureSteps.map((step, i) => (
                      <RevealSection key={step.step} delay={i * 0.08}>
                        <div className="card-glass rounded-sm p-5 flex items-start gap-5">
                          <span
                            className="text-xs font-medium tracking-wider shrink-0 mt-0.5"
                            style={{ color: ACCENT }}
                          >
                            {step.step}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1.5">
                              <h3 className="font-display text-sm font-semibold text-fg">{step.title}</h3>
                              {i < architectureSteps.length - 1 && (
                                <div
                                  className="hidden md:block w-16 h-px"
                                  style={{ background: `linear-gradient(90deg, ${ACCENT}40, transparent)` }}
                                />
                              )}
                            </div>
                            <p className="text-sm text-fg-muted">{step.body}</p>
                          </div>
                        </div>
                      </RevealSection>
                    ))}
                  </div>

                  <div className="mt-10 space-y-4 text-fg-muted leading-relaxed">
                    <p>{t("csPjcs.archSection.p2")}</p>
                    <p>{t("csPjcs.archSection.p3")}</p>
                  </div>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Results */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-medium tracking-[0.15em] uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    {t("csPjcs.resultsSection.label")}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                    {t("csPjcs.resultsSection.title")}
                  </h2>
                  <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.08}>
                    {resultCards.map((item) => (
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
            </div>
          </div>
        </div>
      </section>

      {/* ── Navigation ──────────────────────── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div>
              <p className="text-xs font-medium text-fg-dim tracking-widest uppercase mb-2">{t("csDetail.nextProject")}</p>
              <Link
                href="/case-studies/docproc"
                className="font-display text-2xl font-semibold hover:text-accent transition-colors duration-200 inline-flex items-center gap-3"
              >
                {t("csDetail.nextPjcs")}
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
