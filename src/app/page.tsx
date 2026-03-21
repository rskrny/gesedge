"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { services, caseStudies, stats, techStack } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg" />,
});

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 3D Background */}
        <HeroScene />

        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg/40 via-transparent to-bg pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-bg/60 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12 py-32 md:py-40">
          <RevealSection delay={0.2}>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-6">
              AI-Powered Business Systems
            </p>
          </RevealSection>

          <RevealSection delay={0.4}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
              We build the
              <br />
              systems that
              <br />
              <span className="text-gradient">run your business.</span>
            </h1>
          </RevealSection>

          <RevealSection delay={0.7}>
            <p className="mt-8 text-lg md:text-xl text-fg-muted leading-relaxed max-w-xl">
              Custom platforms, AI-powered tools, and cross-border infrastructure
              — engineered from scratch for companies that need more than a template.
            </p>
          </RevealSection>

          <RevealSection delay={0.9}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/contact" variant="primary">
                Start a Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton href="/case-studies" variant="outline">
                View Our Work
              </MagneticButton>
            </div>
          </RevealSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent/50 animate-pulse" />
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="relative py-20 border-y border-border">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.12}>
            {stats.map((s) => (
              <RevealItem key={s.label}>
                <div className="text-center">
                  <AnimatedCounter
                    value={s.value}
                    className="font-display text-5xl md:text-6xl font-bold text-gradient"
                  />
                  <p className="mt-3 text-xs font-mono uppercase tracking-widest text-fg-dim">
                    {s.label}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────── */}
      <section className="py-28 md:py-36 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <div className="max-w-2xl mb-16">
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
                What We Build
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Three disciplines.{" "}
                <span className="text-fg-muted">One philosophy.</span>
              </h2>
              <p className="mt-6 text-lg text-fg-muted leading-relaxed">
                Build real systems that solve real problems and run without babysitting.
              </p>
            </div>
          </RevealSection>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.12}>
            {services.map((s, i) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block card-glass rounded-sm p-8 md:p-10 h-full transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <span className="font-mono text-xs tracking-widest text-accent block mb-6">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl font-semibold mb-4 group-hover:text-accent transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-sm text-fg-muted leading-relaxed">{s.short}</p>
                  <span className="inline-flex items-center gap-2 mt-8 text-sm text-fg-dim group-hover:text-accent transition-colors duration-300">
                    Learn more
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────── */}
      <div className="divider-accent mx-6 lg:mx-12" />

      {/* ── Case Studies ──────────────────────────────────── */}
      <section className="py-28 md:py-36 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <div className="max-w-2xl mb-16">
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
                Selected Work
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
                Production systems.{" "}
                <span className="text-fg-muted">Real results.</span>
              </h2>
            </div>
          </RevealSection>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.1}>
            {caseStudies.map((cs) => (
              <RevealItem key={cs.slug}>
                <Link
                  href={`/case-studies#${cs.slug}`}
                  className="group block card-glass rounded-sm p-8 md:p-10 h-full transition-all duration-300 hover:border-accent/30"
                >
                  <p className="font-mono text-xs tracking-widest text-accent mb-4 uppercase">
                    {cs.industry}
                  </p>
                  <h3 className="font-display text-2xl font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-fg-muted mb-6">{cs.subtitle}</p>
                  <div className="flex flex-wrap gap-2">
                    {cs.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="text-xs font-mono px-3 py-1 rounded-sm bg-accent-dim text-accent"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          <RevealSection delay={0.3} className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="text-sm font-display text-fg-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2"
            >
              View all case studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────── */}
      <section className="py-20 border-y border-border relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection className="text-center mb-10">
            <p className="font-mono text-xs tracking-widest text-fg-dim uppercase">
              Technologies We Ship With
            </p>
          </RevealSection>
          <RevealStagger className="flex flex-wrap justify-center gap-3" staggerDelay={0.04}>
            {techStack.map((t) => (
              <RevealItem key={t}>
                <span className="text-sm font-mono px-4 py-2 rounded-sm border border-border text-fg-muted hover:border-accent/40 hover:text-accent hover:bg-accent-dim transition-all duration-300 cursor-default">
                  {t}
                </span>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        {/* Accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
              Ready to build
              <br />
              <span className="text-gradient">something real?</span>
            </h2>
          </RevealSection>
          <RevealSection delay={0.2}>
            <p className="mt-6 text-lg text-fg-muted max-w-xl mx-auto">
              Tell us what you&apos;re trying to solve. We&apos;ll tell you how we&apos;d build it.
            </p>
          </RevealSection>
          <RevealSection delay={0.4}>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="primary">
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
