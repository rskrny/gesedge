"use client";

import RevealSection from "@/components/RevealSection";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left */}
          <div className="lg:col-span-2">
            <RevealSection>
              <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight">
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
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <RevealSection delay={0.3}>
              <ContactForm />
            </RevealSection>
          </div>
        </div>
      </div>
    </section>
  );
}
