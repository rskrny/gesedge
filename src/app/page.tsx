import Link from "next/link";
import { services, caseStudies, stats, techStack } from "@/lib/content";

function LayersIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L12 12.75 6.429 9.75m11.142 0l4.179 2.25-9.75 5.25-9.75-5.25 4.179-2.25" />
    </svg>
  );
}

function BrainIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  );
}

const iconMap: Record<string, () => React.ReactElement> = {
  layers: LayersIcon,
  brain: BrainIcon,
  globe: GlobeIcon,
};

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.1]">
              We build the systems
              <br />
              <span className="text-edge">that run your business.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-stone leading-relaxed max-w-2xl">
              Custom platforms, AI-powered tools, and cross-border infrastructure
              — engineered from scratch for companies that need more than a template
              but aren&apos;t ready for an enterprise team.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-ink text-paper font-medium px-8 py-3.5 rounded-lg hover:bg-edge transition-colors text-sm"
              >
                Start a Project
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center border border-border text-ink font-medium px-8 py-3.5 rounded-lg hover:bg-border-light transition-colors text-sm"
              >
                See Our Work
              </Link>
            </div>
          </div>
        </div>
        {/* Subtle gradient accent */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-edge/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* ── Stats Bar ──────────────────────────────────── */}
      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-ink">{s.value}</p>
                <p className="mt-1 text-sm text-stone">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ───────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              What we build
            </h2>
            <p className="mt-4 text-lg text-stone leading-relaxed">
              Three areas of focus, one philosophy: build real systems that solve real problems
              and run without babysitting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group p-8 rounded-xl border border-border hover:border-edge/30 hover:shadow-lg transition-all bg-white"
                >
                  <div className="w-12 h-12 rounded-lg bg-edge-light flex items-center justify-center text-edge mb-5">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-semibold text-ink group-hover:text-edge transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm text-stone leading-relaxed">{s.short}</p>
                  <span className="inline-block mt-4 text-sm text-edge font-medium">
                    Learn more &rarr;
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Case Studies ────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-white border-y border-border">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              Work that ships
            </h2>
            <p className="mt-4 text-lg text-stone leading-relaxed">
              Every project here is running in production. These aren&apos;t mockups or proposals
              — they&apos;re systems handling real users and real transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies#${cs.slug}`}
                className="group p-8 rounded-xl border border-border hover:border-edge/30 hover:shadow-lg transition-all"
              >
                <p className="text-xs font-medium text-edge uppercase tracking-wider mb-3">
                  {cs.industry}
                </p>
                <h3 className="text-xl font-semibold text-ink group-hover:text-edge transition-colors">
                  {cs.title}
                </h3>
                <p className="text-sm text-stone mt-1">{cs.subtitle}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cs.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-border-light text-stone"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/case-studies"
              className="text-sm font-medium text-edge hover:text-edge-dark"
            >
              View all case studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ──────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-sm font-medium text-stone uppercase tracking-wider mb-6">
            Technologies we work with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-2 rounded-full border border-border text-stone hover:text-ink hover:border-edge/30 transition-colors"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-ink">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-paper tracking-tight">
            Ready to build something?
          </h2>
          <p className="mt-4 text-lg text-stone max-w-xl mx-auto">
            Tell us what you&apos;re trying to solve. We&apos;ll tell you how we&apos;d build it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-8 bg-edge text-paper font-medium px-8 py-3.5 rounded-lg hover:bg-edge-dark transition-colors text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
