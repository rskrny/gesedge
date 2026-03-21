import Link from "next/link";
import { services } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

const service = services[2]; // cross-border

export const metadata = createMetadata({
  title: service.title,
  description: service.short,
  path: "/services/cross-border",
});

export default function CrossBorder() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="text-sm text-edge hover:text-edge-dark mb-8 inline-block">
            &larr; Back to home
          </Link>
          <p className="text-sm font-medium text-edge uppercase tracking-wider mb-3">Services</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-stone leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-2xl font-bold text-ink mb-8">What we deliver</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-white">
                <svg className="w-5 h-5 text-edge mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <span className="text-sm text-ink">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="bg-warm rounded-xl p-8 md:p-10">
            <p className="text-sm font-medium text-edge uppercase tracking-wider mb-3">How we know this</p>
            <p className="text-base text-ink leading-relaxed">{service.proof}</p>
            <Link href="/case-studies#ar-ecommerce-platform" className="inline-block mt-4 text-sm text-edge font-medium hover:text-edge-dark">
              Read the full case study &rarr;
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-paper">Operating across borders?</h2>
          <p className="mt-4 text-stone max-w-lg mx-auto">
            We build the infrastructure that makes international operations work. Tell us where you&apos;re going.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center mt-8 bg-edge text-paper font-medium px-8 py-3.5 rounded-lg hover:bg-edge-dark transition-colors text-sm">
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
