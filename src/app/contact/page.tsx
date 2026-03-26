"use client";

import RevealSection from "@/components/RevealSection";
import ContactParticles from "@/components/ContactParticles";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ContactParticles />

      {/* Radial glow behind content */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(232, 131, 107, 0.06) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 lg:px-12 text-center">
        <RevealSection>
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-6">
            {t("contact.badge")}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[0.95]">
            {t("contact.title")}{" "}
            <span className="text-gradient">{t("contact.titleGrad")}</span>
          </h1>
        </RevealSection>

        <RevealSection delay={0.15}>
          <p className="mt-6 text-lg text-fg-muted leading-relaxed max-w-xl mx-auto">
            {t("contact.sub")}
          </p>
        </RevealSection>

        <RevealSection delay={0.3}>
          <a
            href="mailto:ryan@gesedge.com"
            className="inline-block mt-12 text-2xl md:text-3xl font-display font-semibold text-accent hover:text-accent-hover transition-colors duration-300"
          >
            ryan@gesedge.com
          </a>
        </RevealSection>

        <RevealSection delay={0.4}>
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-fg-dim">
            <div>
              <span className="text-xs font-medium tracking-[0.15em] text-fg-dim uppercase block mb-1">{t("contact.responseTime")}</span>
              <span className="text-fg-muted">{t("contact.responseValue")}</span>
            </div>
            <div className="w-px h-10 bg-border hidden sm:block" />
            <div>
              <span className="text-xs font-medium tracking-[0.15em] text-fg-dim uppercase block mb-1">{t("contact.locations")}</span>
              <span className="text-fg-muted">Wyoming / Chengdu / London</span>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
}
