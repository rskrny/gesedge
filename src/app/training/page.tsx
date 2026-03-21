import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "AI Training",
  description: "Practical AI training for teams and business owners. Learn to integrate AI into your workflows — not just chat with it.",
  path: "/training",
});

const modules = [
  {
    number: "01",
    title: "AI Fundamentals",
    description:
      "What AI actually is, what it can and can't do, and how to think about it as a business tool. No hype, no jargon — just a clear mental model for making AI decisions.",
    topics: [
      "How LLMs work (practical, not academic)",
      "When to use AI vs. when not to",
      "Comparing platforms: ChatGPT, Claude, Gemini, and others",
      "Prompt engineering that actually works",
      "Understanding costs, privacy, and limitations",
    ],
  },
  {
    number: "02",
    title: "Hands-On Workspace Setup",
    description:
      "Get your hands dirty. Set up a real AI-augmented workspace using tools you can start using today — code editors, automation scripts, and AI assistants configured for your work.",
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
      "AI applied to your specific context. We customize this module for your industry — whether that's e-commerce, professional services, manufacturing, or creative work.",
    topics: [
      "AI for customer-facing operations",
      "Automating repetitive knowledge work",
      "Building internal tools with AI assistance",
      "Content creation and marketing automation",
      "Data analysis and reporting with AI",
    ],
  },
];

export default function Training() {
  return (
    <>
      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="font-mono text-xs uppercase tracking-widest text-fg mb-8 inline-block hover:text-muted-fg">
            &larr; Back to home
          </Link>
          <p className="font-mono text-xs uppercase tracking-widest mb-4 font-bold">Training</p>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight leading-tight">
            AI for the Rest of Us
          </h1>
          <p className="font-body mt-8 text-lg leading-relaxed max-w-2xl">
            Practical AI training designed for business owners and their teams. Not a lecture
            on machine learning theory — a hands-on course that gets you using AI in your
            actual work within the first session.
          </p>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-2 border-fg p-8 md:p-10 mb-16">
            <h2 className="font-display text-3xl tracking-tight mb-4">Who this is for</h2>
            <p className="font-body text-lg leading-relaxed">
              Small business owners, team leads, and professionals who know AI matters but
              aren&apos;t sure where to start. You don&apos;t need a technical background.
              You need practical skills you can apply tomorrow. 88% of marketers use AI daily,
              but only 1% use it maturely. This course closes that gap.
            </p>
          </div>

          <div className="space-y-10">
            {modules.map((m) => (
              <div key={m.number} className="border-2 border-fg p-8 md:p-10">
                <div className="flex items-start gap-8">
                  <span className="font-display text-6xl font-bold opacity-20 shrink-0">{m.number}</span>
                  <div className="flex-1">
                    <h3 className="font-display text-3xl tracking-tight mb-4">{m.title}</h3>
                    <p className="font-body text-base leading-relaxed mb-6">{m.description}</p>
                    <ul className="space-y-3">
                      {m.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-3 font-body text-base">
                          <span className="font-mono font-bold opacity-50 mt-1 shrink-0">·</span>
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-4xl tracking-tight mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-fg p-8 text-center">
              <p className="font-display text-5xl font-bold mb-4">1</p>
              <h3 className="font-display text-2xl tracking-tight mb-3">Discovery Call</h3>
              <p className="font-body text-base">
                We learn about your business, your team, and what you&apos;re trying to accomplish with AI.
              </p>
            </div>
            <div className="border-2 border-fg p-8 text-center">
              <p className="font-display text-5xl font-bold mb-4">2</p>
              <h3 className="font-display text-2xl tracking-tight mb-3">Customized Training</h3>
              <p className="font-body text-base">
                Module 3 is tailored to your industry. You learn on your own data, with your own tools.
              </p>
            </div>
            <div className="border-2 border-fg p-8 text-center">
              <p className="font-display text-5xl font-bold mb-4">3</p>
              <h3 className="font-display text-2xl tracking-tight mb-3">Ongoing Support</h3>
              <p className="font-body text-base">
                30 days of email support after training. Questions, troubleshooting, and guidance as you apply what you learned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-fg text-bg">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-5xl tracking-tight">Ready to train your team on AI?</h2>
          <p className="font-body mt-8 text-lg max-w-lg mx-auto opacity-85">
            Get in touch and we&apos;ll put together a training plan customized for your business.
          </p>
          <Link href="/contact" className="inline-block mt-10 bg-bg text-fg border-2 border-bg px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-fg hover:text-bg hover:border-bg transition-all">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}