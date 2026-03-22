import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import RevealSection, { RevealStagger, RevealItem } from "@/components/RevealSection";
import MagneticButton from "@/components/MagneticButton";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "DocProc — Document Processing Toolkit Case Study | GES",
  description:
    "18-pipeline document processing toolkit with RAG-powered assistant and 248 automated tests.",
  path: "/case-studies/docproc",
});

const ACCENT = "#B794F6";
const tech = ["Python", "Flask", "ChromaDB", "OpenCV", "ONNX", "SQLite"];

const pipelines = [
  { category: "PDF Operations", items: ["Compress", "Merge", "Split", "Rotate", "Watermark", "Password protect", "Unlock"] },
  { category: "Image Operations", items: ["Resize", "Convert format", "AI background removal", "Bulk export"] },
  { category: "AI Assistant", items: ["Natural language task description", "Auto-generated execution plans", "RAG document Q&A"] },
  { category: "Workflow", items: ["Recipe system", "Multi-step chaining", "Batch processing", "Export as .exe"] },
];

export default function DocprocPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-bg">
          <Image
            src="/images/hero-docproc.png"
            alt=""
            fill
            className="object-cover opacity-15"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 50% 20%, rgba(183, 148, 246, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 10% 80%, rgba(85, 60, 154, 0.1) 0%, transparent 55%)",
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(rgba(183, 148, 246, 0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(183, 148, 246, 0.012) 1px, transparent 1px)",
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
              Developer Tools
            </span>
          </RevealSection>

          <RevealSection delay={0.35}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-wide leading-[0.92] max-w-4xl">
              DocProc
              <br />
              <span style={{ color: ACCENT }}>PDF Toolkit</span>
            </h1>
          </RevealSection>

          <RevealSection delay={0.55}>
            <p className="mt-6 text-xl text-fg-muted max-w-2xl leading-relaxed">
              18-pipeline document processing suite with a RAG-powered AI assistant,
              248 automated tests, and zero cloud dependency. Privacy-first by design.
            </p>
          </RevealSection>

          <RevealSection delay={0.7}>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <MagneticButton
                href="https://github.com/rskrny/docproc-pdfcompressor"
                variant="outline"
                external
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
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

      {/* ── Key numbers ──────────────────────── */}
      <section className="py-12 border-y border-border bg-bg-elevated/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <RevealStagger className="grid grid-cols-2 md:grid-cols-4 gap-6" staggerDelay={0.08}>
            {[
              { metric: "18", label: "Processing pipelines" },
              { metric: "248", label: "Automated tests" },
              { metric: "0", label: "Cloud uploads required" },
              { metric: "1", label: "Standalone .exe package" },
            ].map((r) => (
              <RevealItem key={r.label}>
                <div className="text-center md:text-left">
                  <p
                    className="font-display text-3xl md:text-4xl font-semibold mb-1"
                    style={{ color: ACCENT }}
                  >
                    {r.metric}
                  </p>
                  <p className="text-xs font-mono text-fg-dim leading-relaxed">{r.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
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
                    <p className="text-xs font-mono tracking-widest text-fg-dim uppercase mb-3">Project Type</p>
                    <p className="text-fg-muted text-sm">Open Source Tool</p>
                    <p className="text-fg-dim text-xs mt-1">Developer Tools / Productivity</p>
                  </div>
                  <div>
                    <p className="text-xs font-mono tracking-widest text-fg-dim uppercase mb-3">Services</p>
                    <ul className="space-y-1">
                      {["AI-Powered Tools", "RAG Architecture", "Local ML Inference"].map((s) => (
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
                    href="https://github.com/rskrny/docproc-pdfcompressor"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-display text-fg-muted hover:text-accent transition-colors duration-200"
                  >
                    github.com/rskrny/docproc-pdfcompressor
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
                    Document processing is fragmented — and it leaks your data
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed">
                    <p>
                      Compressing a PDF means uploading it to one tool. Merging PDFs means a different
                      tool. Removing a background from an image means a third tool. Each requires
                      uploading files — often sensitive ones — to a third-party server you don&apos;t
                      control and can&apos;t audit.
                    </p>
                    <p>
                      Businesses handling contracts, medical records, financial documents, or proprietary
                      engineering drawings can&apos;t afford that exposure. They need processing
                      power without the privacy trade-off.
                    </p>
                    <p>
                      Beyond privacy: the fragmentation itself is a productivity problem. Switching
                      between tools, re-uploading files, reconfiguring settings — it adds up. A single
                      coherent suite with a natural language interface would save hours per week.
                    </p>
                  </div>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Approach */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    02 / Approach
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    18 pipelines, one interface, zero cloud
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed mb-10">
                    <p>
                      We built a unified document processing suite where every operation runs
                      locally. No API keys for processing. No uploads. No account required.
                      Everything executes on the user&apos;s machine, and the results stay there.
                    </p>
                    <p>
                      The AI chat assistant doesn&apos;t require describing operations in technical
                      terms. A user can say &quot;compress this PDF and make it under 2MB without
                      losing too much quality&quot; and the system generates and executes the correct
                      processing plan automatically. The RAG engine answers questions about uploaded
                      documents using hybrid BM25 + TF-IDF retrieval.
                    </p>
                  </div>

                  {/* Pipeline categories */}
                  <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-4" staggerDelay={0.1}>
                    {pipelines.map((cat) => (
                      <RevealItem key={cat.category}>
                        <div className="card-glass rounded-sm p-6 h-full">
                          <h3
                            className="font-display text-sm font-semibold mb-3"
                            style={{ color: ACCENT }}
                          >
                            {cat.category}
                          </h3>
                          <ul className="space-y-1.5">
                            {cat.items.map((item) => (
                              <li key={item} className="flex items-center gap-2 text-xs font-mono text-fg-muted">
                                <span style={{ color: ACCENT }} className="opacity-60">→</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </RevealItem>
                    ))}
                  </RevealStagger>
                </div>
              </RevealSection>

              <div className="divider" />

              {/* Engineering quality */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    03 / Engineering Quality
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                    248 tests. Clean architecture. Ships as a single .exe.
                  </h2>
                  <div className="space-y-4 text-fg-muted leading-relaxed mb-10">
                    <p>
                      The test suite covers every pipeline, the AI chat execution flow, the RAG
                      retrieval engine, the recipe chaining system, and the API layer. 248 automated
                      tests that run before every release.
                    </p>
                    <p>
                      The recipe system allows users to chain operations: &quot;compress this PDF,
                      then merge it with these three others, then add a watermark.&quot; Each step is
                      deterministic and individually tested. The final .exe package bundles the entire
                      suite — Python runtime, all dependencies, ML models — into a single executable
                      that non-technical users can run without installing anything.
                    </p>
                  </div>

                  <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-4" staggerDelay={0.08}>
                    {[
                      {
                        title: "248 automated tests",
                        body: "Full test coverage across all 18 pipelines, the AI chat layer, and the RAG retrieval engine.",
                      },
                      {
                        title: "Recipe chaining",
                        body: "Multi-step workflows defined as reusable recipes. Chain compress → merge → watermark in a single run.",
                      },
                      {
                        title: "Local ML inference",
                        body: "AI background removal and document analysis run via ONNX models locally. No API calls for core operations.",
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

              <div className="divider" />

              {/* Results */}
              <RevealSection>
                <div>
                  <span
                    className="text-xs font-mono tracking-widest uppercase mb-4 block"
                    style={{ color: ACCENT }}
                  >
                    04 / What Was Shipped
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight mb-8">
                    A complete, production-quality document processing suite
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "18 document processing pipelines covering PDF and image operations",
                      "248 automated tests with full coverage across all pipelines and AI layers",
                      "Natural language AI chat: describe what you need, system executes it",
                      "RAG document Q&A engine with hybrid BM25 + TF-IDF retrieval",
                      "Privacy-first: all processing runs locally, nothing leaves the machine",
                      "Recipe system for composable multi-step processing workflows",
                      "Standalone .exe packaging for non-technical end users",
                    ].map((r) => (
                      <li key={r} className="flex items-start gap-3">
                        <span className="mt-1 shrink-0" style={{ color: ACCENT }}>
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-fg-muted leading-relaxed">{r}</span>
                      </li>
                    ))}
                  </ul>
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
              <p className="text-xs font-mono text-fg-dim tracking-widest uppercase mb-2">Back to the top</p>
              <Link
                href="/case-studies/bloodline-charters"
                className="font-display text-2xl font-semibold hover:text-accent transition-colors duration-200 inline-flex items-center gap-3"
              >
                Bloodline Charters
                <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
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
