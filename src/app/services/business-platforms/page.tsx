"use client";

import Link from "next/link";
import { services } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

const service = services[0];

export default function BusinessPlatforms() {
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
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Services / 01</p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              {service.title}
            </h1>
          </RevealSection>
          <RevealSection delay={0.3}>
            <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </RevealSection>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Features */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-3xl font-bold tracking-tight mb-12">
              What we <span className="text-gradient">deliver</span>
            </h2>
          </RevealSection>
          <RevealStagger className="space-y-4" staggerDelay={0.08}>
            {service.features.map((f, i) => (
              <RevealItem key={i}>
                <div className="group card-glass rounded-sm p-6 flex items-start gap-5 transition-all duration-300 hover:border-accent/30">
                  <span className="font-mono text-xs tracking-widest text-accent shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-fg-muted group-hover:text-fg transition-colors duration-300">
                    {f}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* Proof */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <div className="card-glass rounded-sm p-8 md:p-12 border-accent/20 glow-accent">
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">In Practice</p>
              <p className="text-fg-muted leading-relaxed text-lg mb-6">{service.proof}</p>
              <Link
                href="/case-studies#charter-operations-platform"
                className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-2"
              >
                Read the full case study
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </RevealSection>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* CTA */}
      <section className="py-28 md:py-36 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Need a platform <span className="text-gradient">built?</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-lg mx-auto">
              Tell us about your operations. We&apos;ll design a system that runs them.
            </p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="primary">
                Start a Project
              </MagneticButton>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
