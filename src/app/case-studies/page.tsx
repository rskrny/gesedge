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

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="text-sm text-edge hover:text-edge-dark mb-8 inline-block">
            &larr; Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            Case Studies
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed max-w-2xl">
            Every project below is in production, handling real users and real transactions.
            These are systems we designed, built, and shipped.
          </p>
        </div>
      </section>

      {caseStudies.map((cs, idx) => (
        <section
          key={cs.slug}
          id={cs.slug}
          className={`py-16 md:py-24 ${idx % 2 === 0 ? "bg-white border-y border-border" : ""}`}
        >
          <div className="mx-auto max-w-4xl px-6">
            <p className="text-xs font-medium text-edge uppercase tracking-wider mb-3">
              {cs.industry} &middot; {cs.services.join(" + ")}
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-ink">{cs.title}</h2>
            <p className="text-base text-stone mt-1">{cs.subtitle}</p>

            <div className="mt-10 space-y-8">
              <div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-3">
                  The Challenge
                </h3>
                <p className="text-base text-stone leading-relaxed">{cs.challenge}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-3">
                  What We Built
                </h3>
                <p className="text-base text-stone leading-relaxed">{cs.solution}</p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-ink uppercase tracking-wider mb-3">
                  Key Deliverables
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cs.results.map((r, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-edge mt-1 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-sm text-ink">{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {cs.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1.5 rounded-full bg-edge-light text-edge font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 md:py-28 bg-ink">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-paper">Your project could be next.</h2>
          <p className="mt-4 text-stone max-w-lg mx-auto">
            Tell us what you need built. We&apos;ll tell you how we&apos;d approach it.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center mt-8 bg-edge text-paper font-medium px-8 py-3.5 rounded-lg hover:bg-edge-dark transition-colors text-sm">
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
