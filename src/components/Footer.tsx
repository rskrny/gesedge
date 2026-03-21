import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t-4 border-fg bg-bg">
      <div className="mx-auto max-w-6xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-2xl font-bold uppercase tracking-tight">
              GES
            </Link>
            <p className="mt-4 text-sm text-muted-fg leading-relaxed font-body">
              Custom AI-powered business systems.
              <br />
              US &middot; China &middot; UK
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-fg mb-5 pb-2 border-b border-fg">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/business-platforms" className="text-sm text-muted-fg hover:text-fg hover:underline transition-colors duration-100">
                  Custom Business Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/ai-tools" className="text-sm text-muted-fg hover:text-fg hover:underline transition-colors duration-100">
                  AI-Powered Tools
                </Link>
              </li>
              <li>
                <Link href="/services/cross-border" className="text-sm text-muted-fg hover:text-fg hover:underline transition-colors duration-100">
                  Cross-Border Operations
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-fg mb-5 pb-2 border-b border-fg">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/case-studies" className="text-sm text-muted-fg hover:text-fg hover:underline transition-colors duration-100">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-sm text-muted-fg hover:text-fg hover:underline transition-colors duration-100">
                  AI Training
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-fg hover:text-fg hover:underline transition-colors duration-100">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-fg mb-5 pb-2 border-b border-fg">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:ryan@gesedge.com" className="text-sm text-muted-fg hover:text-fg hover:underline transition-colors duration-100">
                  ryan@gesedge.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-fg hover:text-fg hover:underline transition-colors duration-100">
                  Start a Project &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t-2 border-fg flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-muted-fg tracking-wide">
            &copy; {new Date().getFullYear()} Global Edge Strategies LLC
          </p>
          <p className="text-xs font-mono text-muted-fg tracking-wide">
            Wyoming &middot; Chengdu &middot; London
          </p>
        </div>
      </div>
    </footer>
  );
}