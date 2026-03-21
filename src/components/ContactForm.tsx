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
      <div className="bg-edge-light rounded-xl p-8 text-center">
        <h3 className="text-xl font-semibold text-ink mb-2">Message ready to send</h3>
        <p className="text-stone">
          Your email client should have opened with your message. If it didn&apos;t, email us directly at{" "}
          <a href="mailto:ryan@gesedge.com" className="text-edge font-medium">
            ryan@gesedge.com
          </a>
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-edge hover:text-edge-dark"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-ink mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-edge/20 focus:border-edge transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-edge/20 focus:border-edge transition-colors"
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-ink mb-1.5">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-edge/20 focus:border-edge transition-colors"
            placeholder="Your company (optional)"
          />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-ink mb-1.5">
            What do you need? *
          </label>
          <select
            id="service"
            name="service"
            required
            className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-edge/20 focus:border-edge transition-colors"
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
        <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-border px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-edge/20 focus:border-edge transition-colors resize-y"
          placeholder="What are you trying to build or solve? The more context, the better."
        />
      </div>
      <button
        type="submit"
        className="w-full sm:w-auto bg-ink text-paper font-medium px-8 py-3 rounded-lg hover:bg-edge transition-colors text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
