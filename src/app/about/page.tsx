"use client";

import Link from "next/link";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

const locations = [
  { country: "United States", entity: "Global Edge Strategies LLC", city: "Wyoming" },
  { country: "China", entity: "Chengdu HuanQiao", city: "Chengdu, Sichuan" },
  { country: "United Kingdom", entity: "C14-Space LTD", city: "London (CTO / Co-founder)" },
];

export default function About() {
  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-fg-dim hover:text-accent transition-colors mb-8">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" /></svg>
              Back to home
            </Link>
          </RevealSection>
          <RevealSection delay={0.1}>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight">About Global Edge Strategies</h1>
          </RevealSection>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <div className="max-w-3xl space-y-8">
            <RevealSection>
              <p className="text-lg text-fg-muted leading-relaxed">
                Global Edge Strategies is a technical consultancy that builds custom
                business systems powered by AI. We build the actual platforms, tools, and infrastructure
                that our clients use every day.
              </p>
            </RevealSection>
            <RevealSection delay={0.1}>
              <p className="text-lg text-fg-muted leading-relaxed">
                Founded by Ryan Kearney, GES operates across three countries: a Wyoming LLC
                in the United States, a wholly foreign-owned enterprise (WFOE) in Chengdu,
                China, and ongoing work with UK-incorporated ventures. This is the daily reality of managing entities, contracts,
                and compliance across jurisdictions with fundamentally different legal systems,
                business cultures, and technical ecosystems.
              </p>
            </RevealSection>
          </div>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">How we <span className="text-gradient">work</span></h2>
          </RevealSection>
          <div className="max-w-3xl space-y-6">
            <RevealSection delay={0.1}>
              <p className="text-lg text-fg-muted leading-relaxed">
                Every project starts with a real problem. A charter captain drowning in manual
                booking management. A B2B supplier whose international buyers can&apos;t find
                the right product. A furniture startup that needs AR visualization to close the
                confidence gap in online shopping. We listen, then we build, from database
                design to deployment.
              </p>
            </RevealSection>
            <RevealSection delay={0.15}>
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
      </section>

      <div className="divider mx-6 lg:mx-12" />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-10">What we <span className="text-gradient">believe</span></h2>
          </RevealSection>
          <div className="max-w-3xl space-y-6">
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
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-10">Our Presence</p>
          </RevealSection>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {locations.map((loc) => (
              <RevealItem key={loc.country}>
                <div className="card-glass rounded-sm p-6 h-full group hover:border-accent/30 transition-all duration-300">
                  <p className="font-mono text-xs tracking-widest text-accent mb-3 uppercase">{loc.country}</p>
                  <p className="font-display text-lg font-medium text-fg">{loc.entity}</p>
                  <p className="text-sm text-fg-dim mt-2">{loc.city}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      <section className="py-28 md:py-36 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Let&apos;s build something <span className="text-gradient">together.</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-lg mx-auto">
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
