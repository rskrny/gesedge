"use client";

import Link from "next/link";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";
import { useLanguage } from "@/components/LanguageProvider";

export default function About() {
  const { t } = useLanguage();

  const locations = [
    {
      country: t("about.loc.us"),
      entity: t("about.loc.usEntity"),
      city: t("about.loc.usCity"),
      accent: "#E91E8C",
    },
    {
      country: t("about.loc.cn"),
      entity: t("about.loc.cnEntity"),
      city: t("about.loc.cnCity"),
      accent: "#00D4FF",
    },
    {
      country: t("about.loc.uk"),
      entity: t("about.loc.ukEntity"),
      city: t("about.loc.ukCity"),
      accent: "#B794F6",
    },
  ];

  return (
    <>
      {/* Hero: asymmetric split */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-accent transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              {t("nav.backHome")}
            </Link>
          </RevealSection>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <RevealSection delay={0.1}>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">{t("about.badge")}</p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                  {t("about.title1")}
                  <br />
                  <span className="text-gradient">{t("about.title2")}</span>
                </h1>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-xl">
                  {t("about.sub")}
                </p>
              </RevealSection>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <RevealSection delay={0.3}>
                <div className="relative overflow-hidden rounded-sm border border-border/50 h-[300px] bg-gradient-to-br from-[#1a0d1a] via-[#0D1117] to-[#0A0E1A]">
                  <div className="absolute w-48 h-48 rounded-full top-[-40px] right-[-40px]" style={{ background: "radial-gradient(circle, rgba(233,30,140,0.18) 0%, transparent 70%)", filter: "blur(30px)" }} />
                  <div className="absolute w-40 h-40 rounded-full bottom-0 left-10" style={{ background: "radial-gradient(circle, rgba(0,212,255,0.14) 0%, transparent 70%)", filter: "blur(30px)" }} />
                  <div className="absolute w-32 h-32 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: "radial-gradient(circle, rgba(183,148,246,0.10) 0%, transparent 70%)", filter: "blur(30px)" }} />
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(233,30,140,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(233,30,140,0.05) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="flex gap-2">
                      <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Wyoming</span>
                      <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Chengdu</span>
                      <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">London</span>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Origin story */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <RevealSection>
                <div className="sticky top-32">
                  <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">{t("about.story.badge")}</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                    {t("about.story.title")} <span className="text-gradient">{t("about.story.titleGrad")}</span>
                  </h2>
                </div>
              </RevealSection>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <RevealSection delay={0.1}>
                <p className="text-lg text-fg-muted leading-relaxed">{t("about.story.p1")}</p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-lg text-fg-muted leading-relaxed">{t("about.story.p2")}</p>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="text-lg text-fg-muted leading-relaxed">{t("about.story.p3")}</p>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* Philosophy */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <RevealSection>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">{t("about.philosophy.badge")}</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                  {t("about.philosophy.title")} <span className="text-gradient">{t("about.philosophy.titleGrad")}</span>
                </h2>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-lg text-fg-muted leading-relaxed">{t("about.philosophy.p1")}</p>
              </RevealSection>
            </div>
            <div className="lg:col-span-4 flex items-center">
              <RevealSection delay={0.2}>
                <div className="space-y-4 w-full">
                  <div className="card-glass rounded-sm p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">{t("about.philosophy.stat1")}</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">{t("about.philosophy.stat1sub")}</p>
                  </div>
                  <div className="card-glass rounded-sm p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">{t("about.philosophy.stat2")}</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">{t("about.philosophy.stat2sub")}</p>
                  </div>
                  <div className="card-glass rounded-sm p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">{t("about.philosophy.stat3")}</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">{t("about.philosophy.stat3sub")}</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Locations */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-10">{t("about.locations.badge")}</p>
          </RevealSection>
          <RevealStagger className="max-w-2xl space-y-0 divide-y divide-border/40" staggerDelay={0.08}>
            {locations.map((loc) => (
              <RevealItem key={loc.country}>
                <div className="flex items-baseline justify-between py-5 group">
                  <div className="flex items-baseline gap-4">
                    <span className="w-2 h-2 rounded-full shrink-0 translate-y-[-1px]" style={{ backgroundColor: loc.accent }} />
                    <div>
                      <p className="font-display text-lg font-medium text-fg group-hover:text-accent transition-colors">{loc.entity}</p>
                      <p className="text-sm text-fg-dim mt-0.5">{loc.city}</p>
                    </div>
                  </div>
                  <p className="font-mono text-xs tracking-widest uppercase shrink-0 ml-4" style={{ color: loc.accent }}>{loc.country}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* CTA */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              {t("about.cta.title")} <span className="text-gradient">{t("about.cta.titleGrad")}</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-xl">{t("about.cta.sub")}</p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="mt-10"><MagneticButton href="/contact" variant="primary">{t("about.cta.button")}</MagneticButton></div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
