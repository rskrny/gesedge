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
      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="font-mono text-xs tracking-widest text-fg hover:underline mb-8 inline-block uppercase">
            &larr; Back to home
          </Link>
          <p className="font-mono text-xs uppercase tracking-widest text-fg mb-3">Services</p>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-tight text-fg leading-tight">
            {service.title}
          </h1>
          <p className="mt-6 font-body text-lg text-fg leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-2xl tracking-tight text-fg mb-8">What we deliver</h2>
          <div className="space-y-4">
            {service.features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 border-2 border-fg p-6 hover:bg-fg hover:text-bg transition-colors">
                <span className="font-mono text-xs tracking-widest text-fg shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-body text-base text-current">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <div className="border-2 border-fg p-8 md:p-10 hover:bg-fg hover:text-bg transition-colors">
            <p className="font-mono text-xs uppercase tracking-widest text-current mb-3">How we know this</p>
            <p className="font-body text-base text-current leading-relaxed mb-4">{service.proof}</p>
            <Link href="/case-studies#ar-ecommerce-platform" className="font-mono text-xs uppercase tracking-widest text-current hover:underline inline-block">
              Read the full case study &rarr;
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-fg text-bg">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl tracking-tight text-bg mb-6">Operating across borders?</h2>
          <p className="font-body text-base text-bg max-w-lg mx-auto mb-8">
            We build the infrastructure that makes international operations work. Tell us where you&apos;re going.
          </p>
          <div className="text-center">
            <Link href="/contact" className="inline-flex items-center justify-center bg-bg text-fg border-2 border-bg font-mono text-sm uppercase tracking-widest px-8 py-3 hover:bg-fg hover:text-bg transition-colors">
              Start a Project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}