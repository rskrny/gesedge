"use client";

import Link from "next/link";
import Image from "next/image";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

const locations = [
  { country: "United States", entity: "Global Edge Strategies LLC", city: "Wyoming", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80&auto=format" },
  { country: "China", entity: "Chengdu HuanQiao", city: "Chengdu, Sichuan", image: "https://images.unsplash.com/photo-1589650600625-5dec675eb3f6?w=600&q=80&auto=format" },
  { country: "United Kingdom", entity: "C14-Space LTD", city: "London (CTO / Co-founder)", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80&auto=format" },
];

export default function About() {
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
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">About Us</p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                  Built across
                  <br />
                  <span className="text-gradient">three countries.</span>
                </h1>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-xl">
                  Global Edge Strategies is a technical consultancy that builds custom
                  business systems powered by AI. We build the actual platforms, tools, and infrastructure
                  that our clients use every day.
                </p>
              </RevealSection>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <RevealSection delay={0.3}>
                <div className="relative overflow-hidden rounded-sm border border-border/50 h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format"
                    alt="Modern workspace representing global operations"
                    fill
                    className="object-cover opacity-70"
                    priority
                  />
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

      {/* Origin story: asymmetric text + side accent */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <RevealSection>
                <div className="sticky top-32">
                  <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Our Story</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                    How we <span className="text-gradient">work</span>
                  </h2>
                </div>
              </RevealSection>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <RevealSection delay={0.1}>
                <p className="text-lg text-fg-muted leading-relaxed">
                  Founded by Ryan Kearney, GES operates across three countries: a Wyoming LLC
                  in the United States, a wholly foreign-owned enterprise (WFOE) in Chengdu,
                  China, and ongoing work with UK-incorporated ventures. This is the daily reality of managing entities, contracts,
                  and compliance across jurisdictions with fundamentally different legal systems,
                  business cultures, and technical ecosystems.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-lg text-fg-muted leading-relaxed">
                  Every project starts with a real problem. A charter captain drowning in manual
                  booking management. A B2B supplier whose international buyers can&apos;t find
                  the right product. A furniture startup that needs AR visualization to close the
                  confidence gap in online shopping. We listen, then we build, from database
                  design to deployment.
                </p>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="text-lg text-fg-muted leading-relaxed">
                  We are a full-stack operation. That means we handle the frontend your
                  customers see, the backend that powers it, the AI that makes it intelligent,
                  the infrastructure that keeps it running, and the SEO that helps people find
                  it. When you work with us, you&apos;re working with one team
                  that does all of it.
                </p>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* Philosophy: right-aligned visual weight */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-6">
              <RevealSection>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Philosophy</p>
                <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                  What we <span className="text-gradient">believe</span>
                </h2>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="text-lg text-fg-muted leading-relaxed">
                  80% of AI projects fail to deliver measurable results. The reason is simple: most implementations start with the
                  technology instead of the problem. We start with what your business actually
                  needs, then apply the right tools to build it. Sometimes that&apos;s a RAG
                  system with hybrid vector search. Sometimes it&apos;s a well-designed booking
                  form with tide integration. The technology always serves the outcome.
                </p>
              </RevealSection>
              <RevealSection delay={0.15}>
                <p className="text-lg text-fg-muted leading-relaxed">
                  We also believe in shipping. Our case studies are production systems with automated health checks, comprehensive
                  test suites, and real users relying on them daily.
                </p>
              </RevealSection>
            </div>
            <div className="lg:col-span-4 flex items-center">
              <RevealSection delay={0.2}>
                <div className="space-y-4 w-full">
                  <div className="card-glass rounded-sm p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">100%</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Custom built. Zero templates.</p>
                  </div>
                  <div className="card-glass rounded-sm p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">Full-stack</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Frontend to infrastructure.</p>
                  </div>
                  <div className="card-glass rounded-sm p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">Production</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">Real users. Real transactions.</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Locations with images */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-10">Our Presence</p>
          </RevealSection>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {locations.map((loc) => (
              <RevealItem key={loc.country}>
                <div className="card-glass rounded-sm overflow-hidden h-full group hover:border-accent/30 transition-all duration-300">
                  <div className="relative h-[180px]">
                    <Image
                      src={loc.image}
                      alt={`${loc.city} landscape`}
                      fill
                      className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <p className="font-mono text-xs tracking-widest text-accent mb-3 uppercase">{loc.country}</p>
                    <p className="font-display text-lg font-medium text-fg">{loc.entity}</p>
                    <p className="text-sm text-fg-dim mt-2">{loc.city}</p>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* CTA: left-aligned */}
      <section className="py-28 md:py-36 relative">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Let&apos;s build something <span className="text-gradient">together.</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-xl">
              We&apos;re selective about the projects we take on. If you have a real problem
              that needs a real system, we want to hear about it.
            </p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="mt-10"><MagneticButton href="/contact" variant="primary">Get in Touch</MagneticButton></div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
