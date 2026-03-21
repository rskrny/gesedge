"use client";

import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

const caseStudyImages: Record<string, string> = {
  "charter-operations-platform": "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80&auto=format",
  "trilingual-product-intelligence": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format",
  "ar-ecommerce-platform": "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80&auto=format",
  "document-processing-toolkit": "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80&auto=format",
};

export default function CaseStudies() {
  return (
    <>
      {/* Hero: asymmetric */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-accent transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              Back to home
            </Link>
          </RevealSection>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <RevealSection delay={0.1}>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Our Work</p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                  Case <span className="text-gradient">Studies</span>
                </h1>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-xl">
                  Every project below is in production, handling real users and real transactions.
                  These are systems we designed, built, and shipped.
                </p>
              </RevealSection>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <RevealSection delay={0.3}>
                <div className="space-y-3">
                  <div className="card-glass rounded-sm p-4">
                    <p className="font-display text-2xl font-semibold text-gradient">4</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Production systems shipped</p>
                  </div>
                  <div className="card-glass rounded-sm p-4">
                    <p className="font-display text-2xl font-semibold text-gradient">5</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Industries served</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies: alternating layout */}
      {caseStudies.map((cs, idx) => (
        <div key={cs.slug}>
          <div className="divider-accent mx-6 lg:mx-12" />
          <section id={cs.slug} className="py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-6 lg:px-12">
              {/* Title + image row */}
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                <div className={idx % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5 lg:order-2"}>
                  <RevealSection>
                    <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
                      {cs.industry} / {cs.services.join(" + ")}
                    </p>
                  </RevealSection>
                  <RevealSection delay={0.1}>
                    <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">{cs.title}</h2>
                    <p className="text-lg text-fg-muted mt-3">{cs.subtitle}</p>
                  </RevealSection>
                </div>
                <div className={idx % 2 === 0 ? "lg:col-span-5" : "lg:col-span-7 lg:order-1"}>
                  <RevealSection delay={0.15}>
                    <div className="relative overflow-hidden rounded-sm border border-border/50 h-[240px]">
                      <Image
                        src={caseStudyImages[cs.slug] || "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format"}
                        alt={cs.title}
                        fill
                        className="object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                        {cs.tech.slice(0, 3).map((t) => (
                          <span key={t} className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">{t}</span>
                        ))}
                      </div>
                    </div>
                  </RevealSection>
                </div>
              </div>

              {/* Challenge + Solution: asymmetric */}
              <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-5">
                  <RevealSection delay={0.2}>
                    <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-4 font-semibold">
                      The Challenge
                    </h3>
                    <p className="text-fg-muted leading-relaxed">{cs.challenge}</p>
                  </RevealSection>
                </div>
                <div className="lg:col-span-7">
                  <RevealSection delay={0.25}>
                    <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-4 font-semibold">
                      What We Built
                    </h3>
                    <p className="text-fg-muted leading-relaxed">{cs.solution}</p>
                  </RevealSection>
                </div>
              </div>

              {/* Results */}
              <RevealSection delay={0.3} className="mt-12">
                <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-6 font-semibold">
                  Key Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cs.results.map((r, i) => (
                    <div key={i} className="flex items-start gap-3 card-glass rounded-sm p-4">
                      <span className="text-accent font-semibold shrink-0 mt-0.5">+</span>
                      <span className="text-sm text-fg-muted">{r}</span>
                    </div>
                  ))}
                </div>
              </RevealSection>

              <RevealSection delay={0.35} className="mt-8">
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

      {/* CTA: left-aligned */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Your project could be <span className="text-gradient">next.</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-xl">
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
