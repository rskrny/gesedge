import ContactForm from "@/components/ContactForm";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: "Tell us what you need built. We'll tell you how we'd approach it.",
  path: "/contact",
});

export default function Contact() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
          {/* Left — Context */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-ink">
              Start a project
            </h1>
            <p className="mt-4 text-base text-stone leading-relaxed">
              Tell us what you&apos;re trying to build or solve. We&apos;ll get back to you
              within 24 hours with our initial thoughts.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-ink mb-1">Email</h3>
                <a href="mailto:ryan@gesedge.com" className="text-sm text-edge hover:text-edge-dark">
                  ryan@gesedge.com
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink mb-1">Response time</h3>
                <p className="text-sm text-stone">Usually within 24 hours</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink mb-1">Locations</h3>
                <p className="text-sm text-stone">
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
