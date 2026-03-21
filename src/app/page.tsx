"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { services, caseStudies, stats, techStack } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";

const HeroScene = dynamic(() => import("@/components/HeroScene"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-bg" />,
});

/* ── Image data for visual sections ─────────────── */
const heroImage = {
  src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80&auto=format",
  alt: "Global network visualization from space showing interconnected data points across continents",
};
const serviceImages = [
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format",
    alt: "Modern dashboard interface showing real-time analytics and booking management",
  },
  {
    src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format",
    alt: "Abstract neural network visualization representing AI-powered intelligence systems",
  },
  {
    src: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80&auto=format",
    alt: "Aerial view of international shipping port representing cross-border operations",
  },
];
const caseStudyImage = {
  src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80&auto=format",
  alt: "Code on screen showing production software engineering",
};

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroScene />
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-bg/40 via-transparent to-bg pointer-events-none" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-bg/70 via-bg/30 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12 py-32 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text content (7 cols) */}
            <div className="lg:col-span-7">
              <RevealSection delay={0.2}>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-6">
                  AI-Powered Business Systems
                </p>
              </RevealSection>

              <RevealSection delay={0.4}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]">
                  We build the
                  <br />
                  systems that
                  <br />
                  <span className="text-gradient">run your business.</span>
                </h1>
              </RevealSection>

              <RevealSection delay={0.7}>
                <p className="mt-8 text-lg md:text-xl text-fg-muted leading-relaxed max-w-xl">
                  Custom platforms, AI-powered tools, and cross-border infrastructure,
                  engineered from scratch for companies that outgrow off-the-shelf solutions.
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

            {/* Right: Visual anchor (5 cols) */}
            <div className="hidden lg:block lg:col-span-5">
              <RevealSection delay={1.0}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-accent/5 rounded-sm blur-2xl" />
                  <div className="relative overflow-hidden rounded-sm border border-border/50">
                    <Image
                      src={heroImage.src}
                      alt={heroImage.alt}
                      width={600}
                      height={400}
                      className="w-full h-[400px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs font-mono text-fg-muted tracking-wider">
                          6+ systems in production
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-accent/50 animate-pulse" />
        </div>
      </section>

      {/* ── Trust Bar (left-aligned, asymmetric) ─ */}
      <section className="py-8 border-y border-border bg-bg-elevated/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <span className="text-xs font-mono text-fg-dim tracking-wider uppercase shrink-0">
                Delivering for
              </span>
              <div className="flex flex-wrap gap-3">
                {["Marine Services", "B2B Construction", "E-Commerce", "Developer Tools", "Professional Services"].map((industry) => (
                  <span
                    key={industry}
                    className="text-xs font-mono px-3 py-1.5 rounded-sm border border-border text-fg-muted hover:border-accent/40 hover:text-accent transition-all duration-300"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Stats (asymmetric split) ─────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Narrative */}
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
                  By the numbers
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                  Small team.{" "}
                  <span className="text-fg-muted">Outsized output.</span>
                </h2>
                <p className="mt-6 text-fg-muted leading-relaxed">
                  We work with a handful of clients at a time, which means your project
                  gets undivided attention from senior engineers who own the outcome.
                </p>
              </RevealSection>
            </div>

            {/* Right: Stats grid */}
            <div className="lg:col-span-7">
              <RevealStagger className="grid grid-cols-2 gap-6" staggerDelay={0.12}>
                {stats.map((s) => (
                  <RevealItem key={s.label}>
                    <div className="card-glass rounded-sm p-6 md:p-8">
                      <AnimatedCounter
                        value={s.value}
                        className="font-display text-4xl md:text-5xl font-semibold text-gradient"
                      />
                      <p className="mt-3 text-xs font-mono uppercase tracking-widest text-fg-dim">
                        {s.label}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services (bento grid) ──────────── */}
      <section className="py-28 md:py-36 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <div className="max-w-2xl mb-16">
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
                What We Build
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                Three disciplines.{" "}
                <span className="text-fg-muted">One philosophy.</span>
              </h2>
              <p className="mt-6 text-lg text-fg-muted leading-relaxed">
                Real systems that solve real problems and run without babysitting.
              </p>
            </div>
          </RevealSection>

          {/* Bento: Featured service (full width) + 2 below */}
          <RevealSection delay={0.15}>
            <Link
              href={`/services/${services[0].slug}`}
              className="group block card-glass rounded-sm overflow-hidden transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 mb-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-5 relative h-[240px] lg:h-auto">
                  <Image
                    src={serviceImages[0].src}
                    alt={serviceImages[0].alt}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card/80 lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 to-transparent lg:hidden" />
                </div>
                <div className="lg:col-span-7 p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                  <span className="font-mono text-xs tracking-widest text-accent block mb-4">
                    01 / Featured
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-medium mb-4 group-hover:text-accent transition-colors duration-300">
                    {services[0].title}
                  </h3>
                  <p className="text-fg-muted leading-relaxed mb-6 max-w-lg">{services[0].short}</p>
                  <span className="inline-flex items-center gap-2 text-sm text-fg-dim group-hover:text-accent transition-colors duration-300">
                    Explore this service
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </RevealSection>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.12}>
            {services.slice(1).map((s, i) => (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block card-glass rounded-sm overflow-hidden h-full transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                >
                  <div className="relative h-[200px]">
                    <Image
                      src={serviceImages[i + 1].src}
                      alt={serviceImages[i + 1].alt}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/60 to-transparent" />
                    <span className="absolute top-4 left-4 font-mono text-xs tracking-widest text-accent">
                      0{i + 2}
                    </span>
                  </div>
                  <div className="p-8">
                    <h3 className="font-display text-2xl font-medium mb-3 group-hover:text-accent transition-colors duration-300">
                      {s.title}
                    </h3>
                    <p className="text-sm text-fg-muted leading-relaxed">{s.short}</p>
                    <span className="inline-flex items-center gap-2 mt-6 text-sm text-fg-dim group-hover:text-accent transition-colors duration-300">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* ── Featured Case Study (split layout) ── */}
      <section className="py-28 md:py-36 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-16">
              Production systems.{" "}
              <span className="text-fg-muted">Real results.</span>
            </h2>
          </RevealSection>

          {/* Spotlight case study: asymmetric split */}
          <RevealSection delay={0.15}>
            <Link
              href={`/case-studies#${caseStudies[0].slug}`}
              className="group block card-glass rounded-sm overflow-hidden mb-8 transition-all duration-300 hover:border-accent/30"
            >
              <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-span-3 relative h-[280px] lg:h-[360px]">
                  <Image
                    src={caseStudyImage.src}
                    alt={caseStudyImage.alt}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-bg-card/90 hidden lg:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-card/90 to-transparent lg:hidden" />
                  <div className="absolute top-6 left-6">
                    <span className="text-xs font-mono px-3 py-1.5 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">
                      {caseStudies[0].industry}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-2 p-8 md:p-10 flex flex-col justify-center">
                  <h3 className="font-display text-3xl font-medium mb-2 group-hover:text-accent transition-colors duration-300">
                    {caseStudies[0].title}
                  </h3>
                  <p className="text-fg-muted mb-4">{caseStudies[0].subtitle}</p>
                  <div className="space-y-2 mb-6">
                    {caseStudies[0].results.slice(0, 3).map((r, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-accent text-sm mt-0.5">+</span>
                        <span className="text-sm text-fg-muted">{r}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[0].tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-1 rounded-sm bg-accent-dim text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          </RevealSection>

          {/* Remaining case studies: staggered cards */}
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {caseStudies.slice(1).map((cs) => (
              <RevealItem key={cs.slug}>
                <Link
                  href={`/case-studies#${cs.slug}`}
                  className="group block card-glass rounded-sm p-6 md:p-8 h-full transition-all duration-300 hover:border-accent/30"
                >
                  <p className="font-mono text-xs tracking-widest text-accent mb-3 uppercase">
                    {cs.industry}
                  </p>
                  <h3 className="font-display text-xl font-medium mb-2 group-hover:text-accent transition-colors duration-300">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-fg-muted mb-4">{cs.subtitle}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cs.tech.slice(0, 3).map((t) => (
                      <span key={t} className="text-xs font-mono px-2 py-0.5 rounded-sm bg-accent-dim text-accent">
                        {t}
                      </span>
                    ))}
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealStagger>

          <RevealSection delay={0.3} className="mt-10">
            <Link href="/case-studies" className="text-sm font-display text-fg-muted hover:text-accent transition-colors duration-200 inline-flex items-center gap-2">
              View all case studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </RevealSection>
        </div>
      </section>

      {/* ── Tech Stack (left-aligned) ────────── */}
      <section className="py-20 border-y border-border relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <RevealSection>
                <p className="font-mono text-xs tracking-widest text-fg-dim uppercase">
                  Technologies
                  <br />
                  We Ship With
                </p>
              </RevealSection>
            </div>
            <div className="lg:col-span-9">
              <RevealStagger className="flex flex-wrap gap-3" staggerDelay={0.04}>
                {techStack.map((t) => (
                  <RevealItem key={t}>
                    <span className="text-sm font-mono px-4 py-2 rounded-sm border border-border text-fg-muted hover:border-accent/40 hover:text-accent hover:bg-accent-dim transition-all duration-300 cursor-default">
                      {t}
                    </span>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA (left-aligned, not centered) ─── */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <RevealSection>
                <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
                  Ready to build
                  <br />
                  <span className="text-gradient">something real?</span>
                </h2>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="mt-6 text-lg text-fg-muted max-w-xl">
                  Tell us what you&apos;re trying to solve. We&apos;ll tell you how we&apos;d build it.
                </p>
              </RevealSection>
              <RevealSection delay={0.4}>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <MagneticButton href="/contact" variant="primary">
                    Get in Touch
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </MagneticButton>
                  <MagneticButton href="/case-studies" variant="outline">
                    See What We&apos;ve Built
                  </MagneticButton>
                </div>
              </RevealSection>
            </div>
            <div className="hidden lg:flex lg:col-span-5 justify-end">
              <RevealSection delay={0.5}>
                <div className="grid grid-cols-2 gap-4 max-w-xs">
                  <div className="card-glass rounded-sm p-5 text-center">
                    <p className="font-display text-2xl font-semibold text-gradient">3</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Countries</p>
                  </div>
                  <div className="card-glass rounded-sm p-5 text-center">
                    <p className="font-display text-2xl font-semibold text-gradient">100+</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Endpoints</p>
                  </div>
                  <div className="card-glass rounded-sm p-5 text-center">
                    <p className="font-display text-2xl font-semibold text-gradient">3</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Languages</p>
                  </div>
                  <div className="card-glass rounded-sm p-5 text-center">
                    <p className="font-display text-2xl font-semibold text-gradient">6+</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Live Systems</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
