"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/services/business-platforms", label: "Services", hasDropdown: true },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/training", label: "Training" },
  { href: "/about", label: "About" },
];

const serviceLinks = [
  { href: "/services/business-platforms", label: "Custom Business Platforms" },
  { href: "/services/ai-tools", label: "AI-Powered Tools" },
  { href: "/services/cross-border", label: "Cross-Border Operations" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/90 backdrop-blur-md border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="text-edge font-bold">GES</span>
          <span className="hidden sm:inline text-ink">Global Edge Strategies</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link
                  href={link.href}
                  className="text-sm text-stone hover:text-ink transition-colors py-2"
                >
                  {link.label}
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-lg border border-border py-2 min-w-[240px]">
                      {serviceLinks.map((sl) => (
                        <Link
                          key={sl.href}
                          href={sl.href}
                          className="block px-4 py-2.5 text-sm text-stone hover:text-ink hover:bg-border-light transition-colors"
                        >
                          {sl.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-stone hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="text-sm font-medium bg-ink text-paper px-5 py-2 rounded-lg hover:bg-edge transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-ink"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-paper px-6 py-4 space-y-3">
          {serviceLinks.map((sl) => (
            <Link
              key={sl.href}
              href={sl.href}
              className="block text-sm text-stone hover:text-ink"
              onClick={() => setMobileOpen(false)}
            >
              {sl.label}
            </Link>
          ))}
          <hr className="border-border" />
          {navLinks
            .filter((l) => !l.hasDropdown)
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-stone hover:text-ink"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          <Link
            href="/contact"
            className="block text-sm font-medium bg-ink text-paper px-5 py-2.5 rounded-lg text-center mt-3"
            onClick={() => setMobileOpen(false)}
          >
            Get in Touch
          </Link>
        </div>
      )}
    </header>
  );
}
