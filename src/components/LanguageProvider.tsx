"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Locale, type TranslationKey, t as translate } from "@/lib/i18n";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    // Update html lang attribute
    document.documentElement.lang = newLocale === "zh" ? "zh-CN" : "en";
  }, []);

  const t = useCallback(
    (key: TranslationKey) => translate(key, locale),
    [locale]
  );

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
