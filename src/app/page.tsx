import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, stats, techStack } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import MagneticButton from "@/components/MagneticButton";
import HeroBackground from "@/components/HeroBackground";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Custom AI Systems for Cross-Border Businesses",
  description:
    "We build AI systems, web platforms, and digital tools that bridge US and China markets.",
  path: "/",
});

/* Card accent gradient per project */
const projectGradients = [
  "from-[#0D1117] via-[#1a0d1a] to-[#0A0E1A]",  /* Bloodline: dark magenta */
  "from-[#0D1117] via-[#0d1a1a] to-[#0A0E1A]",  /* PJCS: dark cyan */
  "from-[#0D1117] via-[#110d1a] to-[#0A0E1A]",  /* DocProc: dark purple */
];

const projectAccents = [
  { primary: "#E91E8C", label: "Marine Services" },
  { primary: "#00D4FF", label: "B2B Construction" },
  { primary: "#B794F6", label: "Developer Tools" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <HeroBackground />

        {/* Bottom gradient fade */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-bg pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12 pt-28 pb-20 md:pt-36 md:pb-28">
          <RevealSection delay={0}>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-6">
              Global Edge Strategies
            </p>
          </RevealSection>

          <RevealSection delay={0.1}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-[7rem] font-semibold leading-[0.88] max-w-5xl" style={{ letterSpacing: "0.02em" }}>
              Technology
              <br />
              That{" "}
              <span className="text-gradient italic">Bridges</span>
              <br />
              Markets.
            </h1>
          </RevealSection>

          <RevealSection delay={0.2}>
            <p className="mt-8 text-lg md:text-xl text-fg-muted leading-relaxed max-w-2xl font-light">
              Custom AI systems, web platforms, and digital tools engineered for
              businesses operating between cultures — US, China, and beyond.
            </p>
          </RevealSection>

          <RevealSection delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <MagneticButton href="/case-studies" variant="outline">
                View Our Work
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton href="/contact" variant="ghost">
                Start a Project
              </MagneticButton>
            </div>
          </RevealSection>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
          <span className="text-xs font-mono tracking-widest text-fg-dim uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-accent/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── Project Cards ─────────────────────── */}
      <section className="py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mb-16">
              Three projects.{" "}
              <span className="text-fg-muted">All in production.</span>
            </h2>
          </RevealSection>

          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {caseStudies.map((cs, i) => (
              <RevealItem key={cs.slug}>
                <Link
                  href={`/case-studies/${cs.slug}`}
                  className="group block card-glass rounded-sm overflow-hidden h-full transition-all duration-500 hover:border-border-hover hover:-translate-y-1 hover:shadow-2xl"
                  style={{ boxShadow: "0 0 0 0 transparent" }}
                >
                  {/* Card header gradient */}
                  <div
                    className={`relative h-[160px] bg-gradient-to-br ${projectGradients[i]} overflow-hidden`}
                  >
                    {/* Accent glow spot */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: `radial-gradient(ellipse at 30% 50%, ${projectAccents[i].primary}22 0%, transparent 70%)`,
                      }}
                    />
                    {/* Top-left label */}
                    <span
                      className="absolute top-5 left-5 text-xs font-mono tracking-wider uppercase px-3 py-1.5 rounded-sm border"
                      style={{
                        color: projectAccents[i].primary,
                        borderColor: `${projectAccents[i].primary}33`,
                        background: `${projectAccents[i].primary}0D`,
                      }}
                    >
                      {projectAccents[i].label}
                    </span>
                    {/* Live/GitHub badge */}
                    {cs.liveUrl ? (
                      <span className="absolute bottom-5 right-5 flex items-center gap-1.5 text-xs font-mono text-fg-dim">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Live
                      </span>
                    ) : cs.githubUrl ? (
                      <span className="absolute bottom-5 right-5 flex items-center gap-1.5 text-xs font-mono text-fg-dim">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Open Source
                      </span>
                    ) : null}
                  </div>

                  <div className="p-6 md:p-8 flex flex-col gap-3">
                    <h3
                      className="font-display text-xl md:text-2xl font-semibold transition-colors duration-300"
                      style={{ ["--tw-text-opacity" as string]: 1 }}
                    >
                      <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:[background-image:linear-gradient(135deg,var(--color-accent),var(--color-accent-2))] transition-all duration-300">
                        {cs.title}
                      </span>
                    </h3>
                    <p className="text-sm text-fg-muted leading-relaxed">
                      {cs.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {cs.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-xs font-mono px-2 py-0.5 rounded-sm border border-border text-fg-dim"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span
                      className="inline-flex items-center gap-2 mt-2 text-sm font-display text-fg-dim group-hover:gap-3 transition-all duration-300"
                      style={{ color: projectAccents[i].primary + "99" }}
                    >
                      Read case study
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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

      <div className="divider mx-6 lg:mx-12" />

      {/* ── What We Do ────────────────────────── */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)" }} />

        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Headline */}
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-6">
                  What We Build
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
                  We build what{" "}
                  <span className="text-gradient-sunset">off-the-shelf</span>{" "}
                  can&apos;t do.
                </h2>
                <p className="mt-6 text-lg text-fg-muted leading-relaxed">
                  Three disciplines, one approach: understand the real problem, build
                  exactly what solves it, and make sure it runs without babysitting.
                </p>
                <div className="mt-8">
                  <MagneticButton href="/contact" variant="outline">
                    Tell us what you&apos;re solving
                  </MagneticButton>
                </div>
              </RevealSection>
            </div>

            {/* Right: Three capability blocks */}
            <div className="lg:col-span-7 space-y-4">
              <RevealStagger staggerDelay={0.15}>
                {[
                  {
                    label: "01",
                    title: "Custom Business Platforms",
                    body: "Booking systems, admin dashboards, customer portals. We replace the spreadsheet chaos with systems that run your operation end-to-end.",
                    accent: "#E91E8C",
                  },
                  {
                    label: "02",
                    title: "AI-Powered Tools",
                    body: "RAG systems, product recommendation engines, document processing. AI that actually does real work — not demos.",
                    accent: "#00D4FF",
                  },
                  {
                    label: "03",
                    title: "Cross-Border Operations",
                    body: "Multilingual platforms and compliance-aware infrastructure for businesses operating between the US, China, and beyond.",
                    accent: "#B794F6",
                  },
                ].map((cap) => (
                  <RevealItem key={cap.label}>
                    <div className="card-glass rounded-sm p-6 md:p-8 flex gap-6 group transition-all duration-300 hover:border-border-hover">
                      <span
                        className="font-mono text-xs tracking-wider shrink-0 mt-1"
                        style={{ color: cap.accent }}
                      >
                        {cap.label}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold mb-2 text-fg">
                          {cap.title}
                        </h3>
                        <p className="text-sm text-fg-muted leading-relaxed">{cap.body}</p>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          </div>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* ── Social Proof (honest numbers) ──── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <div className="lg:col-span-4">
              <RevealSection>
                <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-4">
                  By the numbers
                </p>
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
                  Small team.
                  <br />
                  <span className="text-fg-muted">Real output.</span>
                </h2>
                <p className="mt-6 text-fg-muted leading-relaxed">
                  We work with a handful of clients at a time. Your project
                  gets undivided attention from engineers who own the outcome.
                </p>
              </RevealSection>
            </div>

            <div className="lg:col-span-8">
              <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-4" staggerDelay={0.1}>
                {stats.map((s) => (
                  <RevealItem key={s.label}>
                    <div className="card-glass rounded-sm p-6 text-center">
                      <AnimatedCounter
                        value={s.value}
                        className="font-display text-4xl font-semibold text-gradient"
                      />
                      <p className="mt-3 text-xs font-mono uppercase tracking-[0.2em] text-fg-dim">
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

      {/* ── Tech Stack ───────────────────────── */}
      <section className="py-16 border-y border-border relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3">
              <RevealSection>
                <p className="font-mono text-xs tracking-[0.25em] text-fg-dim uppercase leading-relaxed">
                  Technologies
                  <br />
                  We Ship With
                </p>
              </RevealSection>
            </div>
            <div className="lg:col-span-9">
              <RevealStagger className="flex flex-wrap gap-2.5" staggerDelay={0.04}>
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

      {/* ── CTA ─────────────────────────────── */}
      <section className="relative py-36 md:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-50" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(233, 30, 140, 0.07) 0%, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-12 text-center">
          <RevealSection>
            <p className="font-mono text-xs tracking-[0.3em] text-accent uppercase mb-6">
              Let&apos;s Build
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-semibold tracking-wide leading-tight">
              Ready to build
              <br />
              <span className="text-gradient">something real?</span>
            </h2>
          </RevealSection>

          <RevealSection delay={0.2}>
            <p className="mt-8 text-lg text-fg-muted max-w-xl mx-auto">
              Tell us what you&apos;re trying to solve. We&apos;ll tell you how we&apos;d build it.
            </p>
          </RevealSection>

          <RevealSection delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="/contact" variant="outline">
                Get in Touch
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
              <MagneticButton href="/case-studies" variant="ghost">
                See What We&apos;ve Built
              </MagneticButton>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
