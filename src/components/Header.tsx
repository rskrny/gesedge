"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/services/business-platforms", label: "Services", hasDropdown: true },
  { href: "/case-studies", label: "Work" },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg border-b-2 border-fg">
      <nav className="mx-auto max-w-6xl px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-xl tracking-tight font-bold uppercase">
          GES
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
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
                  className="text-sm uppercase tracking-widest font-medium text-muted-fg hover:text-fg transition-colors duration-100 py-2"
                >
                  {link.label}
                </Link>
                {servicesOpen && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-bg border-2 border-fg py-2 min-w-[280px]">
                      {serviceLinks.map((sl) => (
                        <Link
                          key={sl.href}
                          href={sl.href}
                          className="block px-6 py-3 text-sm tracking-wide text-muted-fg hover:bg-fg hover:text-bg transition-colors duration-100"
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
                className="text-sm uppercase tracking-widest font-medium text-muted-fg hover:text-fg transition-colors duration-100"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            href="/contact"
            className="text-sm uppercase tracking-widest font-medium bg-fg text-bg px-6 py-2.5 hover:bg-bg hover:text-fg border-2 border-fg transition-colors duration-100"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-fg"
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 8h16M4 16h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t-2 border-fg bg-bg px-6 py-6 space-y-4">
          {serviceLinks.map((sl) => (
            <Link
              key={sl.href}
              href={sl.href}
              className="block text-sm uppercase tracking-widest text-muted-fg hover:text-fg"
              onClick={() => setMobileOpen(false)}
            >
              {sl.label}
            </Link>
          ))}
          <hr className="border-t border-border-light" />
          {navLinks
            .filter((l) => !l.hasDropdown)
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm uppercase tracking-widest text-muted-fg hover:text-fg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          <Link
            href="/contact"
            className="block text-sm uppercase tracking-widest font-medium bg-fg text-bg px-6 py-3 text-center mt-4 border-2 border-fg"
            onClick={() => setMobileOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}