import ContactForm from "@/components/ContactForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Tell us what you need built. We'll tell you how we'd approach it.",
  path: "/contact",
});

export default function Contact() {
  return (
    <section className="py-20 md:py-28 bg-bg text-fg">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left — Context */}
          <div className="lg:col-span-2">
            <h1 className="font-display text-5xl md:text-6xl tracking-tight">
              Start a project
            </h1>
            <p className="font-body mt-6 text-lg leading-relaxed">
              Tell us what you&apos;re trying to build or solve. We&apos;ll get back to you
              within 24 hours with our initial thoughts.
            </p>

            <div className="mt-12 space-y-8">
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-2">Email</h3>
                <a href="mailto:ryan@gesedge.com" className="font-body text-base hover:opacity-60">
                  ryan@gesedge.com
                </a>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-2">Response time</h3>
                <p className="font-body text-base">Usually within 24 hours</p>
              </div>
              <div>
                <h3 className="font-mono text-xs uppercase tracking-widest font-bold mb-2">Locations</h3>
                <p className="font-body text-base">
                  Wyoming, USA<br />
                  Chengdu, China<br />
                  London, UK
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}