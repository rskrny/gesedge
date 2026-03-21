import Link from "next/link";
import { services, caseStudies, stats, techStack } from "@/lib/content";

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────── */}
      <section className="relative texture-lines">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 py-28 md:py-40">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-fg mb-8">
            Custom AI-Powered Business Systems
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
            We build the
            <br />
            systems that run
            <br />
            <em className="italic">your business.</em>
          </h1>
          {/* Thick rule with square — editorial punctuation */}
          <div className="flex items-center gap-3 mt-8">
            <div className="w-20 h-1 bg-fg" />
            <div className="w-3 h-3 border-2 border-fg" />
          </div>
          <p className="mt-8 text-lg md:text-xl text-muted-fg leading-relaxed max-w-2xl font-body">
            Custom platforms, AI-powered tools, and cross-border infrastructure
            — engineered from scratch for companies that need more than a template
            but aren&apos;t ready for an enterprise team.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-fg text-bg font-medium px-8 py-4 text-sm uppercase tracking-widest hover:bg-bg hover:text-fg border-2 border-fg transition-colors duration-100"
            >
              Start a Project &rarr;
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center border-2 border-fg text-fg font-medium px-8 py-4 text-sm uppercase tracking-widest hover:bg-fg hover:text-bg transition-colors duration-100"
            >
              See Our Work
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      {/* ── Stats Bar ──────────────────────────────────── */}
      <section className="relative bg-fg text-bg texture-vlines">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-4xl md:text-5xl font-bold">{s.value}</p>
                <p className="mt-2 text-xs font-mono uppercase tracking-widest text-bg/60">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      {/* ── Services ───────────────────────────────────── */}
      <section className="py-24 md:py-32 relative texture-grid">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-fg mb-4">
              What We Build
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Three disciplines,
              <br />
              <em className="italic">one philosophy.</em>
            </h2>
            <p className="mt-6 text-lg text-muted-fg leading-relaxed">
              Build real systems that solve real problems and run without babysitting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-fg">
            {services.map((s, i) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className={`group p-8 md:p-10 hover:bg-fg hover:text-bg transition-colors duration-100 ${
                  i < services.length - 1 ? "border-b-2 md:border-b-0 md:border-r-2 border-fg" : ""
                }`}
              >
                <span className="font-mono text-xs tracking-widest text-muted-fg group-hover:text-bg/60 block mb-6">
                  0{i + 1}
                </span>
                <h3 className="font-display text-2xl font-bold mb-3">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-fg group-hover:text-bg/70 leading-relaxed">{s.short}</p>
                <span className="inline-block mt-6 text-sm font-medium uppercase tracking-widest group-hover:text-bg">
                  Learn more &rarr;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      {/* ── Case Studies ────────────────────────────────── */}
      <section className="py-24 md:py-32 relative texture-lines">
        <div className="mx-auto max-w-6xl px-6 lg:px-12">
          <div className="max-w-2xl mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-muted-fg mb-4">
              Selected Work
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
              Work that ships.
            </h2>
            <p className="mt-6 text-lg text-muted-fg leading-relaxed">
              Every project here is running in production — handling real users and real transactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {caseStudies.map((cs, i) => (
              <Link
                key={cs.slug}
                href={`/case-studies#${cs.slug}`}
                className={`group p-8 md:p-10 border-2 border-fg -mt-[2px] -ml-[2px] hover:bg-fg hover:text-bg transition-colors duration-100`}
              >
                <p className="font-mono text-xs uppercase tracking-widest text-muted-fg group-hover:text-bg/60 mb-4">
                  {cs.industry}
                </p>
                <h3 className="font-display text-2xl font-bold mb-2">
                  {cs.title}
                </h3>
                <p className="text-sm text-muted-fg group-hover:text-bg/70">{cs.subtitle}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {cs.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-3 py-1 border border-fg/30 group-hover:border-bg/30 text-muted-fg group-hover:text-bg/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="text-sm font-medium uppercase tracking-widest hover:underline"
            >
              View all case studies &rarr;
            </Link>
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      {/* ── Tech Stack ──────────────────────────────────── */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-fg mb-8">
            Technologies We Work With
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t) => (
              <span
                key={t}
                className="text-sm font-mono px-4 py-2 border border-fg text-fg hover:bg-fg hover:text-bg transition-colors duration-100"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      {/* ── CTA ─────────────────────────────────────────── */}
      <section className="relative py-28 md:py-36 bg-fg text-bg texture-vlines">
        <div className="mx-auto max-w-6xl px-6 lg:px-12 text-center">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Ready to build
            <br />
            <em className="italic">something real?</em>
          </h2>
          <p className="mt-6 text-lg text-bg/60 max-w-xl mx-auto">
            Tell us what you&apos;re trying to solve. We&apos;ll tell you how we&apos;d build it.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center mt-10 bg-bg text-fg font-medium px-10 py-4 text-sm uppercase tracking-widest hover:bg-transparent hover:text-bg border-2 border-bg transition-colors duration-100"
          >
            Get in Touch &rarr;
          </Link>
        </div>
      </section>
    </>
  );
}