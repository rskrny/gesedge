import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "PJCS RAG System — AI Product Advisor Case Study | GES",
  description:
    "Trilingual AI system helping a Chinese manufacturer serve Latin American contractors with intelligent product recommendations.",
  path: "/case-studies/pjcs-rag",
});

const ACCENT = "#00D4FF";
const tech = ["Python", "FastAPI", "ChromaDB", "GPT-4o-mini", "Railway", "BM25"];

const architectureSteps = [
  {
    step: "01",
    title: "Query received",
    body: "User submits natural-language question in English, Chinese, or Spanish.",
  },
  {
    step: "02",
    title: "Hybrid retrieval",
    body: "Query runs in parallel through ChromaDB (vector embeddings) and BM25 (keyword matching).",
  },
  {
    step: "03",
    title: "Reciprocal Rank Fusion",
    body: "RRF merges and re-ranks both result sets for higher-precision candidate selection.",
  },
  {
    step: "04",
    title: "GPT-4o-mini synthesis",
    body: "Top candidates passed to the language model with product specs as grounding context.",
  },
  {
    step: "05",
    title: "Response delivered",
    body: "Answer returned in the user's language with product names, specs, and application guidance.",
  },
];

export default function PjcsRagPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-bg">
          <Image
            src="/images/hero-pjcs.jpg"
            alt=""
            fill
            className="object-cover opacity-50"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, rgba(0, 212, 255, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 212, 255, 0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.012) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12">
          <RevealSection delay={0.1}>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-fg-dim uppercase hover:text-accent transition-colors duration-200 mb-8"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              All Work
            </Link>
          </RevealSection>

          <RevealSection delay={0.2}>
            <span
              className="inline-block text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm border mb-6"
              style={{ color: ACCENT, borderColor: `${ACCENT}33`, background: `${ACCENT}0D` }}
            >
              B2B Construction Materials — AI Tools
            </span>
          </RevealSection>

          <RevealSection delay={0.35}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide leading-[0.92] max-w-4xl">
              PJCS{" "}
              <span style={{ color: ACCENT }}>RAG</span>
              <br />
              System
            </h1>
          </RevealSection>

          <RevealSection delay={0.55}>
            <p className="mt-6 text-xl text-fg-muted max-w-2xl leading-relaxed">
              Trilingual AI product advisor bridging a Chinese manufacturer and
              Latin American contractors across three languages and zero
              language barrier.
            </p>
          </RevealSection>

          <RevealSection delay={0.7}>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <MagneticButton
                href="https://pjcsrag-production.up.railway.app/"
                variant="outline"
                external
              >
                <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                Demo
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </MagneticButton>
              <div className="flex flex-wrap gap-2">
                {tech.map((t) => (
                  <span key={t} className="text-xs font-mono px-3 py-1.5 rounded-sm border border-border text-fg-dim">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Language badges ──────────────────── */}
      <section className="py-12 border-y border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealSection>
            <div className="flex flex-wrap items-center gap-4">
              <span className="text-xs font-mono text-fg-dim tracking-widest uppercase">
                Languages supported:
              </span>
              {[
                { lang: "English", flag: "🇺🇸" },
                { lang: "中文", flag: "🇨🇳" },
                { lang: "Español", flag: "🇲🇽" },
              ].map(({ lang, flag }) => (
                <span
                  key={lang}
                  className="text-sm font-display px-4 py-2 rounded-sm border flex items-center gap-2"
                  style={{ borderColor: `${ACCENT}33`, color: ACCENT, background: `${ACCENT}0A` }}
                >
                  <span>{flag}</span>
                  {lang}
                </span>
              ))}
              <span className="text-xs font-mono text-fg-dim ml-auto">
                Full catalog indexed
              </span>
            </div>
          </RevealSection>
        </div>
      </section>

      {/* ── Content ─────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <RevealSection>
                <div className="lg:sticky lg:top-28 space-y-8">
                  <div>
                    <p className="text-xs font-mono tracking-widest text-fg-dim uppercase mb-3">Client</p>
                    <p className="text-fg-muted text-sm">PJCS Waterproofing</p>
                    <p className="text-fg-dim text-xs mt-1">China → Latin America</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-fg-dim uppercase mb-3">Services</p>
                    <ul className="space-y-1">
                      {["RAG System Architecture", "Multilingual NLP", "Cross-Border Infrastructure"].map((s) => (
                        <li key={s} className="text-sm text-fg-muted">{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-fg-dim uppercase mb-3">Stack</p>
                    <div className="flex flex-col gap-1.5">
                      {tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-fg-dim">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="divider" />
                  <a
                    href="https://pjcsrag-production.up.railway.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-display text-fg-muted hover:text-accent transition-colors duration-200"
                  >
                    Live Demo
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </RevealSection>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-9 space-y-20">
              {/* Problem */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    01 / Problem
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    A Chinese manufacturer, Latin American contractors, and a catalog no one could navigate
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed">
                    <p>
                      PJCS makes industrial waterproofing materials in China. Their customers are
                      professional contractors across Mexico, Colombia, Peru, and other Latin American
                      markets — many of whom speak only Spanish and have highly specific technical
                      requirements: the right product for a specific substrate, application environment,
                      and budget.
                    </p>
                    <p>
                      With 84 products across categories ranging from roof coatings to foundation
                      membranes, finding the right product meant calling a rep, digging through a
                      PDF catalog, or guessing. The language barrier between Mandarin-speaking product
                      managers and Spanish-speaking contractors made this even harder.
                    </p>
                    <p>
                      They needed a system that could answer &quot;Which product works for an exposed
                      rooftop in a high-UV environment with a $500 budget?&quot; — in Spanish, English,
                      or Chinese — without requiring a human in the loop.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Architecture */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    02 / Architecture
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    Hybrid search + LLM synthesis, built for three languages
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed mb-10">
                    <p>
                      The core insight: pure vector search misses exact specification matches (e.g.,
                      a specific product code or chemical name), while pure keyword search misses
                      semantic intent (&quot;something waterproof for basements&quot;). We combined both
                      with Reciprocal Rank Fusion to get the benefits of each.
                    </p>
                  </div>

                  {/* Architecture pipeline */}
                  <div className="space-y-3">
                    {architectureSteps.map((step, i) => (
                      <RevealSection key={step.step} delay={i * 0.08}>
                        <div className="card-glass rounded-sm p-5 flex items-start gap-5">
                          <span
                            className="font-mono text-xs tracking-wider shrink-0 mt-0.5"
                            style={{ color: ACCENT }}
                          >
                            {step.step}
                          </span>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1.5">
                              <h3 className="font-display text-sm font-semibold text-fg">{step.title}</h3>
                              {i < architectureSteps.length - 1 && (
                                <div
                                  className="hidden md:block w-16 h-px"
                                  style={{ background: `linear-gradient(90deg, ${ACCENT}40, transparent)` }}
                                />
                              )}
                            </div>
                            <p className="text-sm text-fg-muted">{step.body}</p>
                          </div>
                        </div>
                      </RevealSection>
                    ))}
                  </div>

                  <div className="mt-10 space-y-4 text-fg-muted leading-relaxed">
                    <p>
                      Beyond the chat interface, we built a 5-step guided product finder wizard:
                      users select their application type, substrate, scale, and budget, and the
                      system narrows to a curated recommendation. Two audience modes — buyer and
                      professional installer — surface different levels of technical detail.
                    </p>
                    <p>
                      The system degrades gracefully: if the AI layer is unavailable, the hybrid
                      search results are shown directly. Nothing breaks silently.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Results */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    03 / Results
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                    What we built
                  </h2>
                  <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.08}>
                    {[
                      {
                        title: "Trilingual coverage",
                        body: "Full support across English, Chinese (Simplified), and Spanish — UI, AI responses, and product data.",
                      },
                      {
                        title: "Hybrid RAG pipeline",
                        body: "ChromaDB vector search + BM25 keyword matching merged via Reciprocal Rank Fusion for higher-precision results.",
                      },
                      {
                        title: "5-step product wizard",
                        body: "Guided discovery from application type to final recommendation, with audience mode switching.",
                      },
                      {
                        title: "Graceful degradation",
                        body: "Full functionality even when the AI layer is unavailable. No silent failures, no broken UX.",
                      },
                      {
                        title: "Auto-deploy pipeline",
                        body: "Deployed on Railway with continuous deployment from GitHub. Zero-downtime updates.",
                      },
                      {
                        title: "Full catalog indexed",
                        body: "Product catalog embedded, chunked, and searchable with spec data and application guidance across all three languages.",
                      },
                    ].map((item) => (
                      <RevealItem key={item.title}>
                        <div className="card-glass rounded-sm p-6 h-full">
                          <h3
                            className="font-display text-base font-semibold mb-2"
                            style={{ color: ACCENT }}
                          >
                            {item.title}
                          </h3>
                          <p className="text-sm text-fg-muted leading-relaxed">{item.body}</p>
                        </div>
                      </RevealItem>
                    ))}
                  </RevealStagger>
                </div>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── Navigation ──────────────────────── */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
            <div>
              <p className="text-xs font-mono text-fg-dim tracking-widest uppercase mb-2">Next Project</p>
              <Link
                href="/case-studies/docproc"
                className="font-display text-2xl font-semibold hover:text-accent transition-colors duration-200 inline-flex items-center gap-3"
              >
                DocProc PDF Toolkit
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <MagneticButton href="/contact" variant="outline">
              Start a Project
            </MagneticButton>
          </div>
        </div>
      </section>
    </>
  );
}
