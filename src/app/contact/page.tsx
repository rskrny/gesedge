"use client";

import Image from "next/image";
import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      {/* Hero split */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative">
        <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left info */}
            <div className="lg:col-span-5">
              <RevealSection>
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">Contact</p>
                <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
                  Start a <span className="text-gradient">project</span>
                </h1>
              </RevealSection>
              <RevealSection delay={0.1}>
                <p className="mt-6 text-lg text-fg-muted leading-relaxed">
                  Tell us what you&apos;re trying to build or solve. We&apos;ll get back to you
                  within 24 hours with our initial thoughts.
                </p>
              </RevealSection>

              <RevealSection delay={0.2}>
                <div className="mt-12 space-y-8">
                  <div>
                    <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-2">Email</h3>
                    <a href="mailto:ryan@gesedge.com" className="text-fg-muted hover:text-fg transition-colors link-underline">
                      ryan@gesedge.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-2">Response Time</h3>
                    <p className="text-fg-muted">Usually within 24 hours</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs tracking-widest text-accent uppercase mb-2">Locations</h3>
                    <p className="text-fg-muted">
                      Wyoming, USA<br />
                      Chengdu, China<br />
                      London, UK
                    </p>
                  </div>
                </div>
              </RevealSection>

              {/* Small location image */}
              <RevealSection delay={0.3}>
                <div className="mt-10 relative overflow-hidden rounded-sm border border-border/50 h-[160px] hidden lg:block">
                  <Image
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format"
                    alt="Modern workspace"
                    fill
                    className="object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/70 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Wyoming</span>
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">Chengdu</span>
                    <span className="text-xs font-mono px-2 py-1 rounded-sm bg-bg/80 backdrop-blur-md text-accent border border-accent/20">London</span>
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
