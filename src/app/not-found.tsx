"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="min-h-[80vh] flex items-center justify-center relative">
      <div className="absolute inset-0 bg-grid bg-radial-fade pointer-events-none" />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(233, 30, 140, 0.06) 0%, transparent 70%)" }}
      />

      <div className="relative text-center px-6">
        <p className="font-mono text-[8rem] md:text-[12rem] font-semibold leading-none text-gradient opacity-30 select-none">
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight -mt-8 md:-mt-12">
          {t("404.title")}
        </h1>
        <p className="mt-4 text-fg-muted max-w-md mx-auto">
          {t("404.sub")}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 text-sm font-display font-semibold bg-accent text-bg rounded-sm hover:bg-accent-hover transition-colors duration-200"
          >
            {t("404.home")}
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 text-sm font-display font-semibold border border-border text-fg-muted rounded-sm hover:border-accent/40 hover:text-fg transition-all duration-200"
          >
            {t("404.contact")}
          </Link>
        </div>
      </div>
    </section>
  );
}
