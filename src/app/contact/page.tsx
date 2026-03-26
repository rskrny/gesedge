"use client";

import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <>
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left info */}
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="text-xs font-medium tracking-[0.15em] text-accent uppercase mb-4">{t("contact.badge")}</p>
                <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
                  {t("contact.title")} <span className="text-gradient">{t("contact.titleGrad")}</span>
                </h1>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="mt-6 text-lg text-fg-muted leading-relaxed">
                  {t("contact.sub")}
                </p>
              </RevealSection>

              <RevealSection delay={0.2}>
                <div className="mt-12 space-y-8">
                  <div>
                    <h3 className="text-xs font-medium tracking-[0.15em] text-accent uppercase mb-2">{t("contact.email")}</h3>
                    <a href="mailto:ryan@gesedge.com" className="text-fg-muted hover:text-fg transition-colors link-underline">
                      ryan@gesedge.com
                    </a>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium tracking-[0.15em] text-accent uppercase mb-2">{t("contact.responseTime")}</h3>
                    <p className="text-fg-muted">{t("contact.responseValue")}</p>
                  </div>
                  <div>
                    <h3 className="text-xs font-medium tracking-[0.15em] text-accent uppercase mb-2">{t("contact.locations")}</h3>
                    <p className="text-fg-muted">
                      Wyoming, USA<br />
                      Chengdu, China<br />
                      London, UK
                    </p>
                  </div>
                </div>
              </RevealSection>

              <RevealSection delay={0.3}>
                <div className="mt-10 relative overflow-hidden rounded-sm border border-border/50 h-[160px] hidden lg:block">
                  <Image
                    src="/images/hero-home.jpg"
                    alt="Global Edge Strategies workspace"
                    fill
                    className="object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Wyoming</span>
                    <span className="text-xs font-medium px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Chengdu</span>
                    <span className="text-xs font-medium px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">London</span>
                  </div>
                </div>
              </RevealSection>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <RevealSection delay={0.3}>
                <ContactForm />
              </RevealSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
