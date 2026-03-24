"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/components/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-bg-elevated border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Global Edge Strategies"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <span className="font-display text-2xl font-semibold tracking-tight text-fg">GES</span>
            </Link>
            <p className="mt-4 text-sm text-fg-muted leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="flex gap-4 mt-6">
              <span className="text-xs font-mono text-fg-dim tracking-wider">Wyoming</span>
              <span className="text-accent text-xs">/</span>
              <span className="text-xs font-mono text-fg-dim tracking-wider">Chengdu</span>
              <span className="text-accent text-xs">/</span>
              <span className="text-xs font-mono text-fg-dim tracking-wider">London</span>
            </div>
          </div>

          {/* Work */}
          <div className="md:col-span-2 md:col-start-6">
            <h4 className="text-xs font-mono text-accent tracking-wider uppercase mb-5">
              {t("footer.work")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/case-studies" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  {t("footer.caseStudies")}
                </Link>
              </li>
              <li>
                <Link href="/case-studies/bloodline-charters" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  Bloodline Charters
                </Link>
              </li>
              <li>
                <Link href="/case-studies/pjcs-rag" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  PJCS RAG System
                </Link>
              </li>
              <li>
                <Link href="/case-studies/docproc" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  DocProc PDF Toolkit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-accent tracking-wider uppercase mb-5">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <a href="https://github.com/rskrny/docproc-pdfcompressor" target="_blank" rel="noopener noreferrer" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-mono text-accent tracking-wider uppercase mb-5">
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:ryan@gesedge.com" className="text-sm text-fg-muted hover:text-fg transition-colors duration-200 link-underline">
                  ryan@gesedge.com
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-fg-muted hover:text-accent transition-colors duration-200">
                  {t("footer.startProject")} &rarr;
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-fg-dim font-mono tracking-wide">
            &copy; {new Date().getFullYear()} {t("footer.copyright")}
          </p>
          <p className="text-xs text-fg-dim font-mono tracking-wide">
            {t("footer.engineered")}
          </p>
        </div>
      </div>
    </footer>
  );
}
