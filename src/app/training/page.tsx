"use client";

import Link from "next/link";
import Image from "next/image";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";

const modules = [
  {
    number: "01",
    title: "AI Fundamentals",
    description:
      "What AI actually is, what it can do, what it struggles with, and how to think about it as a business tool. Zero hype, zero jargon. Just a clear mental model for making AI decisions.",
    topics: [
      "How LLMs work (practical, hands-on)",
      "When to use AI and when to skip it",
      "Comparing platforms: ChatGPT, Claude, Gemini, and others",
      "Prompt engineering that actually works",
      "Understanding costs, privacy, and limitations",
    ],
    image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=600&q=80&auto=format",
  },
  {
    number: "02",
    title: "Hands-On Workspace Setup",
    description:
      "Get your hands dirty. Set up a real AI-augmented workspace using tools you can start using today: code editors, automation scripts, and AI assistants configured for your work.",
    topics: [
      "Setting up VS Code with AI extensions",
      "Building your first automation",
      "Connecting AI to your existing tools",
      "File processing and document automation",
      "Creating reusable AI workflows",
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80&auto=format",
  },
  {
    number: "03",
    title: "Industry Applications",
    description:
      "AI applied to your specific context. We customize this module for your industry, whether that means e-commerce, professional services, manufacturing, or creative work.",
    topics: [
      "AI for customer-facing operations",
      "Automating repetitive knowledge work",
      "Building internal tools with AI assistance",
      "Content creation and marketing automation",
      "Data analysis and reporting with AI",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format",
  },
];

const steps = [
  { num: "1", title: "Discovery Call", desc: "We learn about your business, your team, and what you're trying to accomplish with AI." },
  { num: "2", title: "Customized Training", desc: "Module 3 is tailored to your industry. You learn on your own data, with your own tools." },
  { num: "3", title: "Ongoing Support", desc: "30 days of email support after training. Questions, troubleshooting, and guidance as you apply what you learned." },
];

export default function Training() {
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
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Training</p>
                <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                  AI for the <span className="text-gradient">Rest of Us</span>
                </h1>
              </RevealSection>
              <RevealSection delay={0.2}>
                <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-xl">
                  Practical AI training designed for business owners and their teams.
                  A hands-on course that gets you using AI in your
                  actual work within the first session.
                </p>
              </RevealSection>
            </div>
            <div className="hidden lg:block lg:col-span-5">
              <RevealSection delay={0.3}>
                <div className="relative overflow-hidden rounded-sm border border-border/50 h-[320px]">
                  <Image
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format"
                    alt="Workshop training session with collaborative learning"
                    fill
                    className="object-cover opacity-70"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Hands-on. Practical.</span>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      {/* Who this is for: asymmetric */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <RevealSection>
                <div className="card-glass rounded-sm p-8 md:p-12 border-accent/20 glow-accent">
                  <h2 className="font-display text-3xl font-semibold tracking-tight mb-4">Who this is for</h2>
                  <p className="text-lg text-fg-muted leading-relaxed">
                    Small business owners, team leads, and professionals who know AI matters but
                    are unsure where to start. You need zero technical background.
                    You need practical skills you can apply tomorrow. 88% of marketers use AI daily,
                    yet only 1% use it maturely. This course closes that gap.
                  </p>
                </div>
              </RevealSection>
            </div>
            <div className="lg:col-span-4">
              <RevealSection delay={0.1}>
                <div className="space-y-4">
                  <div className="card-glass rounded-sm p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">88%</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">of marketers use AI daily</p>
                  </div>
                  <div className="card-glass rounded-sm p-5">
                    <p className="font-display text-2xl font-semibold text-gradient">1%</p>
                    <p className="text-xs font-mono text-fg-dim mt-1">use it maturely</p>
                  </div>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* Modules: alternating image + content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-10">Curriculum</p>
          </RevealSection>
          <div className="space-y-12">
            {modules.map((m, idx) => (
              <RevealSection key={m.number} delay={0.1 * idx}>
                <div className="card-glass rounded-sm overflow-hidden group hover:border-accent/30 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    <div className={`relative h-[200px] lg:h-auto ${idx % 2 === 0 ? "lg:col-span-4" : "lg:col-span-4 lg:order-2"}`}>
                      <Image src={m.image} alt={m.title} fill className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                      <div className={`absolute inset-0 ${idx % 2 === 0 ? "bg-gradient-to-r from-transparent to-bg-card/80 hidden lg:block" : "bg-gradient-to-l from-transparent to-bg-card/80 hidden lg:block"}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent lg:hidden" />
                    </div>
                    <div className={`p-8 md:p-10 ${idx % 2 === 0 ? "lg:col-span-8" : "lg:col-span-8 lg:order-1"}`}>
                      <div className="flex items-start gap-6">
                        <span className="font-display text-5xl font-semibold text-accent/20 shrink-0 group-hover:text-accent/40 transition-colors duration-300">{m.number}</span>
                        <div className="flex-1">
                          <h3 className="font-display text-2xl font-medium tracking-tight mb-4">{m.title}</h3>
                          <p className="text-fg-muted leading-relaxed mb-6">{m.description}</p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {m.topics.map((t, i) => (
                              <div key={i} className="flex items-start gap-3 text-sm text-fg-muted">
                                <span className="text-accent mt-0.5 shrink-0">+</span>
                                {t}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      {/* How it works: asymmetric label + cards */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <RevealSection>
                <div className="sticky top-32">
                  <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Process</p>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">How it <span className="text-gradient">works</span></h2>
                </div>
              </RevealSection>
            </div>
            <div className="lg:col-span-8">
              <RevealStagger className="space-y-6" staggerDelay={0.1}>
                {steps.map((step) => (
                  <RevealItem key={step.num}>
                    <div className="card-glass rounded-sm p-8 group hover:border-accent/30 transition-all duration-300">
                      <div className="flex items-start gap-6">
                        <span className="font-display text-4xl font-semibold text-gradient shrink-0">{step.num}</span>
                        <div>
                          <h3 className="font-display text-xl font-medium mb-2">{step.title}</h3>
                          <p className="text-sm text-fg-muted">{step.desc}</p>
                        </div>
                      </div>
                    </div>
                  </RevealItem>
                ))}
              </RevealStagger>
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
              Ready to train your team <span className="text-gradient">on AI?</span>
            </h2>
            <p className="mt-6 text-lg text-fg-muted max-w-xl">
              Get in touch and we&apos;ll put together a training plan customized for your business.
            </p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <div className="mt-10"><MagneticButton href="/contact" variant="primary">Book a Discovery Call</MagneticButton></div>
          </RevealSection>
        </div>
      </section>
    </>
  );
}
