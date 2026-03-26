"use client";

import { useLanguage } from "@/components/LanguageProvider";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      onClick={() => setLocale(locale === "en" ? "zh" : "en")}
      className="relative flex items-center gap-1 px-2.5 py-1.5 text-xs font-medium tracking-wider text-fg-muted hover:text-fg border border-border rounded-sm hover:border-accent/40 transition-all duration-200"
      aria-label={locale === "en" ? "Switch to Chinese" : "Switch to English"}
    >
      <span className={locale === "en" ? "text-accent font-semibold" : ""}>EN</span>
      <span className="text-fg-dim">/</span>
      <span className={locale === "zh" ? "text-accent font-semibold" : ""}>中文</span>
    </button>
  );
}
