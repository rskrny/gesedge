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
      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <Link href="/" className="font-mono text-xs uppercase tracking-widest text-fg mb-8 inline-block hover:text-muted-fg">
            &larr; Back to home
          </Link>
          <h1 className="font-display text-5xl md:text-6xl tracking-tight text-fg">
            About Global Edge Strategies
          </h1>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-bg text-fg">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-8">
            <p className="font-body text-lg leading-relaxed">
              Global Edge Strategies is a technical consultancy that builds custom
              business systems powered by AI. We don&apos;t sell strategy decks or
              implementation plans — we build the actual platforms, tools, and infrastructure
              that our clients use every day.
            </p>

            <p className="font-body text-lg leading-relaxed">
              Founded by Ryan Kearney, GES operates across three countries: a Wyoming LLC
              in the United States, a wholly foreign-owned enterprise (WFOE) in Chengdu,
              China, and ongoing work with UK-incorporated ventures. This isn&apos;t a
              marketing line — it&apos;s the daily reality of managing entities, contracts,
              and compliance across jurisdictions with fundamentally different legal systems,
              business cultures, and technical ecosystems.
            </p>
          </div>

          <hr className="section-rule my-16" />

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl tracking-tight mb-8">How we work</h2>

              <p className="font-body text-lg leading-relaxed mb-6">
                Every project starts with a real problem. A charter captain drowning in manual
                booking management. A B2B supplier whose international buyers can&apos;t find
                the right product. A furniture startup that needs AR visualization to close the
                confidence gap in online shopping. We listen, then we build — from database
                design to deployment.
              </p>

              <p className="font-body text-lg leading-relaxed">
                We&apos;re a full-stack operation. That means we handle the frontend your
                customers see, the backend that powers it, the AI that makes it intelligent,
                the infrastructure that keeps it running, and the SEO that helps people find
                it. When you work with us, you&apos;re not coordinating between a designer, a
                developer, a data scientist, and an ops team. You&apos;re working with one team
                that does all of it.
              </p>
            </div>
          </div>

          <hr className="section-rule my-16" />

          <div className="space-y-8">
            <div>
              <h2 className="font-display text-4xl tracking-tight mb-8">What we believe</h2>

              <p className="font-body text-lg leading-relaxed mb-6">
                80% of AI projects fail to deliver measurable results. That&apos;s not because
                the technology is bad — it&apos;s because most implementations start with the
                technology instead of the problem. We start with what your business actually
                needs, then apply the right tools to build it. Sometimes that&apos;s a RAG
                system with hybrid vector search. Sometimes it&apos;s a well-designed booking
                form with tide integration. The technology serves the outcome, not the other
                way around.
              </p>

              <p className="font-body text-lg leading-relaxed">
                We also believe in shipping. Our case studies aren&apos;t concepts or prototypes.
                They&apos;re production systems with automated health checks, comprehensive
                test suites, and real users relying on them daily.
              </p>
            </div>
          </div>

          <hr className="section-rule my-16" />

          {/* Locations */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-fg bg-bg group hover:bg-fg hover:text-bg transition-colors">
              <p className="font-mono text-xs uppercase tracking-widest mb-2 font-bold">United States</p>
              <p className="font-display text-lg tracking-tight">Global Edge Strategies LLC</p>
              <p className="font-body text-sm mt-2 opacity-75">Wyoming</p>
            </div>
            <div className="p-6 border-2 border-fg bg-bg group hover:bg-fg hover:text-bg transition-colors">
              <p className="font-mono text-xs uppercase tracking-widest mb-2 font-bold">China</p>
              <p className="font-display text-lg tracking-tight">Chengdu HuanQiao</p>
              <p className="font-body text-sm mt-2 opacity-75">Chengdu, Sichuan</p>
            </div>
            <div className="p-6 border-2 border-fg bg-bg group hover:bg-fg hover:text-bg transition-colors">
              <p className="font-mono text-xs uppercase tracking-widest mb-2 font-bold">United Kingdom</p>
              <p className="font-display text-lg tracking-tight">C14-Space LTD</p>
              <p className="font-body text-sm mt-2 opacity-75">London (CTO / Co-founder)</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="py-20 md:py-28 bg-fg text-bg">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-display text-5xl tracking-tight">Let&apos;s build something together.</h2>
          <p className="mt-6 font-body text-lg max-w-lg mx-auto opacity-85">
            We&apos;re selective about the projects we take on — but if you have a real problem
            that needs a real system, we want to hear about it.
          </p>
          <Link href="/contact" className="inline-block mt-10 bg-bg text-fg border-2 border-bg px-8 py-4 font-mono text-sm uppercase tracking-widest hover:bg-fg hover:text-bg hover:border-bg transition-all">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}