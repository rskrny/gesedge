"use client";

import Link from "next/link";
import Image from "next/image";
import { services } from "@/lib/content";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

const service = services[2];

const presenceCards = [
  { label: "Wyoming, USA", tag: "GES LLC", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80&auto=format" },
  { label: "Chengdu, China", tag: "HuanQiao WFOE", image: "https://images.unsplash.com/photo-1589650600625-5dec675eb3f6?w=400&q=80&auto=format" },
  { label: "London, UK", tag: "UK Operations", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&q=80&auto=format" },
];

export default function CrossBorder() {
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
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Services / 03</p>
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
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80&auto=format"
                    alt="Earth from space showing global connectivity"
                    fill
                    className="object-cover opacity-70"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">US</span>
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">China</span>
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">UK</span>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Our Presence: 3-col image cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-10">Where we operate</p>
          </RevealSection>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {presenceCards.map((p) => (
              <RevealItem key={p.label}>
                <div className="card-glass rounded-sm overflow-hidden h-full group hover:border-accent/30 transition-all duration-300">
                  <div className="relative h-[160px]">
                    <Image src={p.image} alt={p.label} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="font-display text-lg font-medium text-fg">{p.label}</p>
                    <p className="text-xs font-mono text-accent mt-1">{p.tag}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

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

      {/* Proof */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <div className="card-glass rounded-sm p-8 md:p-12 border-accent/20 glow-accent max-w-4xl">
              <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">How We Know This</p>
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
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* CTA: left-aligned */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Operating <span className="text-gradient">across borders?</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-xl">
              We build the infrastructure that makes international operations work.
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
