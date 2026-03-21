"use client";

import Link from "next/link";
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
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Training</p>
          </RevealSection>
          <RevealSection delay={0.2}>
            <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-tight">
              AI for the <span className="text-gradient">Rest of Us</span>
            </h1>
          </RevealSection>
          <RevealSection delay={0.3}>
            <p className="mt-8 text-lg text-fg-muted leading-relaxed max-w-2xl">
              Practical AI training designed for business owners and their teams.
              A hands-on course that gets you using AI in your
              actual work within the first session.
            </p>
          </RevealSection>
        </div>
      </section>

      <div className="divider-accent mx-6 lg:mx-12" />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
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
      </section>

      <section className="py-10 md:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <RevealStagger className="space-y-6" staggerDelay={0.12}>
            {modules.map((m) => (
              <RevealItem key={m.number}>
                <div className="card-glass rounded-sm p-8 md:p-10 group hover:border-accent/30 transition-all duration-300">
                  <div className="flex items-start gap-8">
                    <span className="font-display text-6xl font-semibold text-accent/20 shrink-0 group-hover:text-accent/40 transition-colors duration-300">{m.number}</span>
                    <div className="flex-1">
                      <h3 className="font-display text-2xl font-medium tracking-tight mb-4">{m.title}</h3>
                      <p className="text-fg-muted leading-relaxed mb-6">{m.description}</p>
                      <ul className="space-y-3">
                        {m.topics.map((t, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-fg-muted">
                            <span className="text-accent mt-0.5 shrink-0">+</span>
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <div className="divider mx-6 lg:mx-12" />

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-12">
          <RevealSection>
            <h2 className="font-display text-4xl font-semibold tracking-tight mb-12">How it <span className="text-gradient">works</span></h2>
          </RevealSection>
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
            {steps.map((step) => (
              <RevealItem key={step.num}>
                <div className="card-glass rounded-sm p-8 text-center h-full group hover:border-accent/30 transition-all duration-300">
                  <span className="font-display text-5xl font-semibold text-gradient">{step.num}</span>
                  <h3 className="font-display text-xl font-medium mt-4 mb-3">{step.title}</h3>
                  <p className="text-sm text-fg-muted">{step.desc}</p>
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
              Ready to train your team <span className="text-gradient">on AI?</span>
            </h2>
            <p className="mt-8 text-lg text-fg-muted max-w-lg mx-auto">
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
