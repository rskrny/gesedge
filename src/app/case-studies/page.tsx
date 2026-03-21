"use client";

import Link from "next/link";
import { caseStudies } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-accent transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Back to home
            </Link>
          </RevealSection>
          <RevealSection delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight">Case Studies</h1>
          </RevealSection>
          <RevealSection delay={0.2}>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              Every project below is in production, handling real users and real transactions.
              These are systems we designed, built, and shipped.
            </p>
          </RevealSection>
        </div>
      </section>

      {/* Case Studies */}
      {caseStudies.map((cs, idx) => (
        <div key={cs.slug}>
          <div className="divider-accent mx-6 lg:mx-12" />
          <section id={cs.slug} className="py-20 md:py-28">
            <div className="mx-auto max-w-5xl px-6 lg:px-12">
              <RevealSection>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
                  {cs.industry} &middot; {cs.services.join(" + ")}
                </p>
              </RevealSection>
              <RevealSection delay={0.1}>
                <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{cs.title}</h2>
                <p className="text-lg text-fg-muted mt-3">{cs.subtitle}</p>
              </RevealSection>

              <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
                <RevealSection delay={0.15}>
                  <div>
                    <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-4 font-semibold">
                      The Challenge
                    </h3>
                    <p className="text-fg-muted leading-relaxed">{cs.challenge}</p>
                  </div>
                </RevealSection>
                <RevealSection delay={0.2}>
                  <div>
                    <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-4 font-semibold">
                      What We Built
                    </h3>
                    <p className="text-fg-muted leading-relaxed">{cs.solution}</p>
                  </div>
                </RevealSection>
              </div>

              <RevealSection delay={0.25} className="mt-12">
                <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-6 font-semibold">
                  Key Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.results.map((r, i) => (
                    <div key={i} className="flex items-start gap-3 card-glass rounded-sm p-4">
                      <span className="text-accent font-semibold shrink-0 mt-0.5">+</span>
                      <span className="text-sm text-fg-muted">{r}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection delay={0.3} className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {cs.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-3 py-1 rounded-sm bg-accent-dim text-accent">
                      {t}
                    </span>
                  ))}
                </div>
              </RevealSection>
            </div>
          </section>
        </div>
      ))}

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* CTA */}
      <section className="py-28 md:py-36 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Your project could be <span className="text-gradient">next.</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-lg mx-auto">
              Tell us what you need built. We&apos;ll tell you how we&apos;d approach it.
            </p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="primary">Start a Conversation</MagneticButton>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
