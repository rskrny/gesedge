import Link from "next/link";
import { caseStudies } from "@/lib/content";
import { createMetadata, jsonLd } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Case Studies",
  description: "Production systems we've built — booking platforms, AI-powered product catalogs, AR e-commerce, and document processing tools.",
  path: "/case-studies",
});

export default function CaseStudies() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd({
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Case Studies — Global Edge Strategies",
          description: "Production systems built by Global Edge Strategies.",
        })}
      />

      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="font-mono text-xs uppercase tracking-widest text-fg mb-8 inline-block hover:text-muted-fg">
            &larr; Back to home
          </Link>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight text-fg">
            Case Studies
          </h1>
          <p className="mt-6 font-body text-lg leading-relaxed max-w-2xl text-fg">
            Every project below is in production, handling real users and real transactions.
            These are systems we designed, built, and shipped.
          </p>
        </div>
      </section>

      {caseStudies.map((cs, idx) => (
        <div key={cs.slug}>
          <section
            id={cs.slug}
            className={`py-16 md:py-24 ${idx % 2 === 0 ? "bg-bg text-fg" : "bg-fg text-bg"}`}
          >
            <div className="mx-auto max-w-4xl px-6">
              <p className="font-mono text-xs uppercase tracking-widest mb-3 text-opacity-75">
                {cs.industry} · {cs.services.join(" + ")}
              </p>
              <h2 className="font-display text-4xl md:text-5xl tracking-tight">{cs.title}</h2>
              <p className="font-body text-base mt-3 opacity-80">{cs.subtitle}</p>

              <div className="mt-12 space-y-10">
                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                    The Challenge
                  </h3>
                  <p className="font-body text-base leading-relaxed opacity-90">{cs.challenge}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                    What We Built
                  </h3>
                  <p className="font-body text-base leading-relaxed opacity-90">{cs.solution}</p>
                </div>

                <div>
                  <h3 className="font-mono text-xs uppercase tracking-widest mb-4 font-bold">
                    Key Deliverables
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {cs.results.map((r, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span className="text-lg mt-1 font-bold opacity-50 shrink-0">+</span>
                        <span className="font-body text-base">{r}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {cs.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs px-3 py-1 border border-current"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
          {idx < caseStudies.length - 1 && (
            <hr className="section-rule" />
          )}
        </div>
      ))}

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-fg text-bg">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-5xl tracking-tight">Your project could be next.</h2>
          <p className="mt-6 font-body text-lg max-w-lg mx-auto opacity-85">
            Tell us what you need built. We&apos;ll tell you how we&apos;d approach it.
          </p>
          <Link href="/contact" className="inline-block mt-10 bg-bg text-fg border-2 border-bg px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-fg hover:text-bg hover:border-fg transition-all">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}