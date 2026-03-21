"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

const service = services[1];

export default function AITools() {
  return (
    <>
      {/* Hero: asymmetric split */}
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
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Services / 02</p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                  {service.title}
                </h1>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-xl">
                  {service.description}
                </p>
              </RevealSection>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <RevealSection delay={0.3}>
                <div className="relative overflow-hidden rounded-sm border border-border/50 h-[320px]">
                  <Image
                    src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&auto=format"
                    alt="Abstract data visualization representing AI processing"
                    fill
                    className="object-cover opacity-70"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Intelligence. Applied.</span>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Features: sticky label + list */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <RevealSection>
                <div className="sticky top-32">
                  <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Capabilities</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                    What we <span className="text-gradient">deliver</span>
                  </h2>
                  <p className="mt-4 text-sm text-fg-dim leading-relaxed">
                    Every AI system we build goes through rigorous testing and ships with monitoring, health checks, and comprehensive documentation.
                  </p>
                </div>
              </RevealSection>
            </div>
            <div className="lg:col-span-8">
              <RevealStagger className="space-y-4" staggerDelay={0.08}>
                {service.features.map((f, i) => (
                  <RevealItem key={i}>
                    <div className="group card-glass rounded-sm p-6 flex items-start gap-5 transition-all duration-300 hover:border-accent/30">
                      <span className="font-mono text-xs tracking-widest text-accent shrink-0 mt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-fg-muted group-hover:text-fg transition-colors duration-300">{f}</span>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          </div>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* Proof: reversed split (text left, image right) */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <RevealSection>
                <div className="card-glass rounded-sm p-8 md:p-10 border-accent/20 glow-accent">
                  <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">In Practice</p>
                  <p className="text-fg-muted leading-relaxed text-lg mb-6">{service.proof}</p>
                  <Link href="/case-studies#trilingual-product-intelligence" className="text-sm text-accent hover:text-accent-hover transition-colors inline-flex items-center gap-2">
                    Read the full case study
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </RevealSection>
            </div>
            <div className="lg:col-span-5">
              <RevealSection delay={0.15}>
                <div className="relative overflow-hidden rounded-sm border border-border/50 h-[280px]">
                  <Image
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80&auto=format"
                    alt="Server infrastructure with blue lighting"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-bg/60 to-transparent" />
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* CTA: left-aligned */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Need AI that <span className="text-gradient">actually works?</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-xl">
              Tell us what your team is doing manually. We&apos;ll build the system that does it better.
            </p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="mt-10">
              <MagneticButton href="/contact" variant="primary">Start a Project</MagneticButton>
            </div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
