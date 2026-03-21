import Link from "next/link";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: "Global Edge Strategies is a technical consultancy that builds custom AI-powered business systems, operating across the US, China, and UK.",
  path: "/about",
});

export default function About() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="text-sm text-edge hover:text-edge-dark mb-8 inline-block">
            &larr; Back to home
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-ink">
            About Global Edge Strategies
          </h1>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-lg text-stone leading-relaxed">
              Global Edge Strategies is a technical consultancy that builds custom
              business systems powered by AI. We don&apos;t sell strategy decks or
              implementation plans — we build the actual platforms, tools, and infrastructure
              that our clients use every day.
            </p>

            <p className="text-lg text-stone leading-relaxed">
              Founded by Ryan Kearney, GES operates across three countries: a Wyoming LLC
              in the United States, a wholly foreign-owned enterprise (WFOE) in Chengdu,
              China, and ongoing work with UK-incorporated ventures. This isn&apos;t a
              marketing line — it&apos;s the daily reality of managing entities, contracts,
              and compliance across jurisdictions with fundamentally different legal systems,
              business cultures, and technical ecosystems.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">How we work</h2>

            <p className="text-lg text-stone leading-relaxed">
              Every project starts with a real problem. A charter captain drowning in manual
              booking management. A B2B supplier whose international buyers can&apos;t find
              the right product. A furniture startup that needs AR visualization to close the
              confidence gap in online shopping. We listen, then we build — from database
              design to deployment.
            </p>

            <p className="text-lg text-stone leading-relaxed">
              We&apos;re a full-stack operation. That means we handle the frontend your
              customers see, the backend that powers it, the AI that makes it intelligent,
              the infrastructure that keeps it running, and the SEO that helps people find
              it. When you work with us, you&apos;re not coordinating between a designer, a
              developer, a data scientist, and an ops team. You&apos;re working with one team
              that does all of it.
            </p>

            <h2 className="text-2xl font-bold text-ink mt-12 mb-4">What we believe</h2>

            <p className="text-lg text-stone leading-relaxed">
              80% of AI projects fail to deliver measurable results. That&apos;s not because
              the technology is bad — it&apos;s because most implementations start with the
              technology instead of the problem. We start with what your business actually
              needs, then apply the right tools to build it. Sometimes that&apos;s a RAG
              system with hybrid vector search. Sometimes it&apos;s a well-designed booking
              form with tide integration. The technology serves the outcome, not the other
              way around.
            </p>

            <p className="text-lg text-stone leading-relaxed">
              We also believe in shipping. Our case studies aren&apos;t concepts or prototypes.
              They&apos;re production systems with automated health checks, comprehensive
              test suites, and real users relying on them daily.
            </p>
          </div>

          {/* Locations */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border border-border bg-white">
              <p className="text-sm font-medium text-edge uppercase tracking-wider mb-2">United States</p>
              <p className="text-base font-semibold text-ink">Global Edge Strategies LLC</p>
              <p className="text-sm text-stone mt-1">Wyoming</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-white">
              <p className="text-sm font-medium text-edge uppercase tracking-wider mb-2">China</p>
              <p className="text-base font-semibold text-ink">Chengdu HuanQiao</p>
              <p className="text-sm text-stone mt-1">Chengdu, Sichuan</p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-white">
              <p className="text-sm font-medium text-edge uppercase tracking-wider mb-2">United Kingdom</p>
              <p className="text-base font-semibold text-ink">C14-Space LTD</p>
              <p className="text-sm text-stone mt-1">London (CTO / Co-founder)</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-ink">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-paper">Let&apos;s build something together.</h2>
          <p className="mt-4 text-stone max-w-lg mx-auto">
            We&apos;re selective about the projects we take on — but if you have a real problem
            that needs a real system, we want to hear about it.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center mt-8 bg-edge text-paper font-medium px-8 py-3.5 rounded-lg hover:bg-edge-dark transition-colors text-sm">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
