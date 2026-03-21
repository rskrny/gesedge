"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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
        <h3 className="font-display text-2xl font-semibold tracking-tight mb-4">Message ready to send</h3>
        <p className="text-fg-muted">
          Your email client should have opened with your message. If it didn&apos;t, email us directly at{" "}
          <a href="mailto:ryan@gesedge.com" className="text-accent hover:text-accent-hover transition-colors">
            ryan@gesedge.com
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          Send another message
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
            Name *
          </label>
          <input type="text" id="name" name="name" required className={inputClasses} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
            Email *
          </label>
          <input type="email" id="email" name="email" required className={inputClasses} placeholder="you@company.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
            Company
          </label>
          <input type="text" id="company" name="company" className={inputClasses} placeholder="Your company (optional)" />
        </div>
        <div>
          <label htmlFor="service" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
            What do you need? *
          </label>
          <select id="service" name="service" required className={inputClasses}>
            <option value="">Select a service</option>
            <option value="business-platform">Custom Business Platform</option>
            <option value="ai-tools">AI-Powered Tools</option>
            <option value="cross-border">Cross-Border Operations</option>
            <option value="training">AI Training</option>
            <option value="other">Something else</option>
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block font-mono text-xs tracking-widest text-fg-dim uppercase mb-2">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className={`${inputClasses} resize-none`}
          placeholder="What are you trying to build or solve? The more context, the better."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent text-bg font-display font-semibold px-8 py-4 rounded-sm text-sm hover:bg-accent-hover transition-colors duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
