import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-semibold text-lg tracking-tight">
              <span className="text-edge font-bold">GES</span>{" "}
              <span className="text-ink">Global Edge Strategies</span>
            </Link>
            <p className="mt-3 text-sm text-stone leading-relaxed">
              Custom AI-powered business systems.
              <br />
              US &middot; China &middot; UK
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/business-platforms" className="text-sm text-stone hover:text-ink transition-colors">
                  Custom Business Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/ai-tools" className="text-sm text-stone hover:text-ink transition-colors">
                  AI-Powered Tools
                </Link>
              </li>
              <li>
                <Link href="/services/cross-border" className="text-sm text-stone hover:text-ink transition-colors">
                  Cross-Border Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/case-studies" className="text-sm text-stone hover:text-ink transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-sm text-stone hover:text-ink transition-colors">
                  AI Training
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-stone hover:text-ink transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-stone hover:text-ink transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-ink mb-4">Contact</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:ryan@gesedge.com" className="text-sm text-stone hover:text-ink transition-colors">
                  ryan@gesedge.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-stone hover:text-ink transition-colors">
                  Start a Project
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone">
            &copy; {new Date().getFullYear()} Global Edge Strategies LLC. All rights reserved.
          </p>
          <p className="text-xs text-stone">
            Wyoming, USA &middot; Chengdu, China &middot; London, UK
          </p>
        </div>
      </div>
    </footer>
  );
}
