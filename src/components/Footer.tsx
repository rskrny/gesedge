import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-elevated border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block">
              <span className="font-display text-2xl font-bold tracking-tight text-fg">GES</span>
            </Link>
            <p className="mt-4 text-sm text-fg-muted leading-relaxed max-w-xs">
              Custom AI-powered business systems engineered from scratch.
              Operating across the US, China, and UK.
            </p>
            <div className="flex gap-4 mt-6">
              <span className="text-xs font-mono text-fg-dim tracking-wider">Wyoming</span>
              <span className="text-accent text-xs">/</span>
              <span className="text-xs font-mono text-fg-dim tracking-wider">Chengdu</span>
              <span className="text-accent text-xs">/</span>
              <span className="text-xs font-mono text-fg-dim tracking-wider">London</span>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-mono text-accent tracking-wider uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/business-platforms" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  Business Platforms
                </Link>
              </li>
              <li>
                <Link href="/services/ai-tools" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  AI-Powered Tools
                </Link>
              </li>
              <li>
                <Link href="/services/cross-border" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  Cross-Border Ops
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-accent tracking-wider uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/case-studies" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/training" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  AI Training
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-accent tracking-wider uppercase mb-5">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:ryan@gesedge.com" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  ryan@gesedge.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-fg-muted hover:text-accent transition-colors duration-200">
                  Start a Project &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-dim font-mono tracking-wide">
            &copy; {new Date().getFullYear()} Global Edge Strategies LLC
          </p>
          <p className="text-xs text-fg-dim font-mono tracking-wide">
            Engineered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
