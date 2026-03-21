"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

const service = services[0];

export default function BusinessPlatforms() {
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
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Services / 01</p>
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
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format"
                    alt="Dashboard analytics showing business operations data"
                    fill
                    className="object-cover opacity-70"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Operations. Automated.</span>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Features: asymmetric label + grid */}
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
                      <span className="text-fg-muted group-hover:text-fg transition-colors duration-300">
                        {f}
                      </span>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
            </div>
          </div>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* Proof: image + text split */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <RevealSection>
                <div className="relative overflow-hidden rounded-sm border border-border/50 h-[280px]">
                  <Image
                    src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80&auto=format"
                    alt="Fishing charter boat on open water at sunrise"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-bg/60 to-transparent" />
                </div>
              </RevealSection>
            </div>
            <div className="lg:col-span-7">
              <RevealSection delay={0.1}>
                <div className="card-glass rounded-sm p-8 md:p-10 border-accent/20 glow-accent">
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
              Need a platform <span className="text-gradient">built?</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-xl">
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
