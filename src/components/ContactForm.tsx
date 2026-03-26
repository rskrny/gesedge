"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);
  const { t } = useLanguage();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      company: data.get("company") as string,
      service: data.get("service") as string,
      message: data.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="card-glass rounded-sm p-8 text-center glow-accent">
        <h3 className="font-display text-2xl font-semibold tracking-tight mb-4">{t("form.successTitle")}</h3>
        <p className="text-fg-muted">
          {t("form.successBody")}{" "}
          <a href="mailto:ryan@gesedge.com" className="text-accent hover:text-accent-hover transition-colors">
            ryan@gesedge.com
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          {t("form.sendAnother")}
        </button>
      </div>
    );
  }

  const inputClasses =
    "w-full bg-bg-elevated border border-border rounded-sm px-4 py-3 text-fg text-sm placeholder:text-fg-dim focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-xs font-medium tracking-[0.15em] text-fg-dim uppercase mb-2">
            {t("form.name")} *
          </label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder={t("form.namePlaceholder")} />
        </div>
        <div>
          <label htmlFor="email" className="block text-xs font-medium tracking-[0.15em] text-fg-dim uppercase mb-2">
            {t("form.email")} *
          </label>
          <input type="email" id="email" name="email" required className={inputClasses} placeholder={t("form.emailPlaceholder")} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-xs font-medium tracking-[0.15em] text-fg-dim uppercase mb-2">
            {t("form.company")}
          </label>
          <input type="text" id="company" name="company" className={inputClasses} placeholder={t("form.companyPlaceholder")} />
        </div>
        <div>
          <label htmlFor="service" className="block text-xs font-medium tracking-[0.15em] text-fg-dim uppercase mb-2">
            {t("form.service")} *
          </label>
          <select id="service" name="service" required className={inputClasses}>
            <option value="">{t("form.serviceSelect")}</option>
            <option value="website-platform">{t("form.serviceWebsite")}</option>
            <option value="ai-tools">{t("form.serviceAI")}</option>
            <option value="cross-border">{t("form.serviceCrossBorder")}</option>
            <option value="other">{t("form.serviceOther")}</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-medium tracking-[0.15em] text-fg-dim uppercase mb-2">
          {t("form.message")} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${inputClasses} resize-none`}
          placeholder={t("form.messagePlaceholder")}
        />
      </div>
      {error && (
        <p className="text-red-400 text-sm">
          Something went wrong. You can also reach us directly at{" "}
          <a href="mailto:ryan@gesedge.com" className="text-accent hover:text-accent-hover transition-colors">ryan@gesedge.com</a>
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="w-full bg-accent text-bg font-display font-semibold px-8 py-4 rounded-sm text-sm hover:bg-accent-hover transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {sending ? "Sending..." : t("form.submit")}
      </button>
    </form>
  );
}
