"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#slate", label: "Slate" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-fade-down">
      <div
        className={`glass-elevated border-b transition-colors ${
          scrolled ? "border-border" : "border-transparent"
        }`}
      >
        <div className="container-portfolio">
          <div className="flex h-14 items-center justify-between">

            {/* Identity mark */}
            <Link
              href="/"
              className="text-sm font-medium tracking-heading text-muted transition-colors hover:text-foreground focus-ring"
            >
              Andrew Balacy
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden items-center gap-8 md:flex"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink key={link.href} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="flex items-center text-subtle transition-colors hover:text-foreground focus-ring md:hidden"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="3" x2="15" y2="15" />
                  <line x1="15" y1="3" x2="3" y2="15" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <line x1="2" y1="5" x2="16" y2="5" />
                  <line x1="2" y1="9" x2="16" y2="9" />
                  <line x1="2" y1="13" x2="16" y2="13" />
                </svg>
              )}
            </button>

          </div>
        </div>

        {/* Mobile navigation */}
        {mobileOpen && (
          <div id="mobile-nav" className="border-t border-border md:hidden">
            <nav
              className="container-portfolio flex flex-col py-4"
              aria-label="Mobile navigation"
            >
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-base"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
