"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useLanguage();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const company = data.get("company") as string;
    const service = data.get("service") as string;
    const message = data.get("message") as string;

    const subject = encodeURIComponent(`New inquiry from ${name}${company ? ` at ${company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company || "N/A"}\nService: ${service}\n\n${message}`
    );

    window.location.href = `mailto:ryan@gesedge.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
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
          <label htmlFor="name" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
            {t("form.name")} *
          </label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder={t("form.namePlaceholder")} />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
            {t("form.email")} *
          </label>
          <input type="email" id="email" name="email" required className={inputClasses} placeholder={t("form.emailPlaceholder")} />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
            {t("form.company")}
          </label>
          <input type="text" id="company" name="company" className={inputClasses} placeholder={t("form.companyPlaceholder")} />
        </div>
        <div>
          <label htmlFor="service" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
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
        <label htmlFor="message" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
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
      <button
        type="submit"
        className="w-full bg-accent text-bg font-display font-semibold px-8 py-4 rounded-sm text-sm hover:bg-accent-hover transition-colors duration-200"
      >
        {t("form.submit")}
      </button>
    </form>
  );
}
