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
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="text-sm text-edge hover:text-edge-dark mb-8 inline-block">
            &larr; Back to home
          </Link>
          <p className="text-sm font-medium text-edge uppercase tracking-wider mb-3">Training</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
            AI for the Rest of Us
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed max-w-2xl">
            Practical AI training designed for business owners and their teams. Not a lecture
            on machine learning theory — a hands-on course that gets you using AI in your
            actual work within the first session.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-warm rounded-xl p-8 md:p-10 mb-12">
            <h2 className="text-xl font-bold text-ink mb-3">Who this is for</h2>
            <p className="text-base text-stone leading-relaxed">
              Small business owners, team leads, and professionals who know AI matters but
              aren&apos;t sure where to start. You don&apos;t need a technical background.
              You need practical skills you can apply tomorrow. 88% of marketers use AI daily,
              but only 1% use it maturely. This course closes that gap.
            </p>
          </div>

          <div className="space-y-8">
            {modules.map((m) => (
              <div key={m.number} className="p-8 rounded-xl border border-border bg-white">
                <div className="flex items-start gap-5">
                  <span className="text-3xl font-bold text-edge/20">{m.number}</span>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-ink">{m.title}</h3>
                    <p className="mt-2 text-base text-stone leading-relaxed">{m.description}</p>
                    <ul className="mt-4 space-y-2">
                      {m.topics.map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-stone">
                          <svg className="w-4 h-4 text-edge mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
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

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-ink mb-8">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-white text-center">
              <p className="text-3xl font-bold text-edge mb-3">1</p>
              <h3 className="font-semibold text-ink mb-2">Discovery Call</h3>
              <p className="text-sm text-stone">
                We learn about your business, your team, and what you&apos;re trying to accomplish with AI.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-white text-center">
              <p className="text-3xl font-bold text-edge mb-3">2</p>
              <h3 className="font-semibold text-ink mb-2">Customized Training</h3>
              <p className="text-sm text-stone">
                Module 3 is tailored to your industry. You learn on your own data, with your own tools.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-white text-center">
              <p className="text-3xl font-bold text-edge mb-3">3</p>
              <h3 className="font-semibold text-ink mb-2">Ongoing Support</h3>
              <p className="text-sm text-stone">
                30 days of email support after training. Questions, troubleshooting, and guidance as you apply what you learned.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-paper">Ready to train your team on AI?</h2>
          <p className="mt-4 text-stone max-w-lg mx-auto">
            Get in touch and we&apos;ll put together a training plan customized for your business.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center mt-8 bg-edge text-paper font-medium px-8 py-3.5 rounded-lg hover:bg-edge-dark transition-colors text-sm">
            Book a Discovery Call
          </Link>
        </div>
      </section>
    </>
  );
}
