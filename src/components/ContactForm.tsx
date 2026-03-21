"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // For now, mailto fallback. Replace with API route / Resend integration later.
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
      <div className="border-2 border-fg p-8 text-center bg-bg text-fg">
        <h3 className="font-display text-2xl tracking-tight mb-4">Message ready to send</h3>
        <p className="font-body text-base opacity-80">
          Your email client should have opened with your message. If it didn&apos;t, email us directly at{" "}
          <a href="mailto:ryan@gesedge.com" className="font-mono text-xs uppercase tracking-widest font-bold">
            ryan@gesedge.com
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 font-mono text-xs uppercase tracking-widest font-bold hover:opacity-60"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-mono text-xs uppercase tracking-widest font-bold mb-3 text-fg">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full border-2 border-fg px-4 py-3 text-base bg-bg text-fg focus:outline-none focus:border-b-4 transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-mono text-xs uppercase tracking-widest font-bold mb-3 text-fg">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full border-2 border-fg px-4 py-3 text-base bg-bg text-fg focus:outline-none focus:border-b-4 transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block font-mono text-xs uppercase tracking-widest font-bold mb-3 text-fg">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full border-2 border-fg px-4 py-3 text-base bg-bg text-fg focus:outline-none focus:border-b-4 transition-colors"
            placeholder="Your company (optional)"
          />
        </div>
        <div>
          <label htmlFor="service" className="block font-mono text-xs uppercase tracking-widest font-bold mb-3 text-fg">
            What do you need? *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full border-2 border-fg px-4 py-3 text-base bg-bg text-fg focus:outline-none focus:border-b-4 transition-colors"
          >
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
        <label htmlFor="message" className="block font-mono text-xs uppercase tracking-widest font-bold mb-3 text-fg">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full border-2 border-fg px-4 py-3 text-base bg-bg text-fg focus:outline-none focus:border-b-4 transition-colors resize-none"
          placeholder="What are you trying to build or solve? The more context, the better."
        />
      </div>
      <button
        type="submit"
        className="w-full bg-fg text-bg border-2 border-fg px-8 py-4 font-mono text-sm uppercase tracking-widest font-bold hover:bg-bg hover:text-fg transition-all"
      >
        Send Message
      </button>
    </form>
  );
}