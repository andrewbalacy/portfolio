"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#perspective", label: "Perspective" },
  { href: "#slate", label: "Slate" },
] as const;

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);

      // Activate the last section whose top edge is above 35% of the viewport
      const threshold = window.innerHeight * 0.35;
      let active = NAV_LINKS[0].href.slice(1);
      for (const link of NAV_LINKS) {
        const el = document.getElementById(link.href.slice(1));
        if (el && el.getBoundingClientRect().top <= threshold) {
          active = link.href.slice(1);
        }
      }
      setActiveSection(active);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 animate-fade-down">
      <div
        className={`border-b transition-all duration-300 ease-out ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl backdrop-saturate-150 border-white/[0.07]"
            : "bg-transparent backdrop-blur-none border-transparent"
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
                <NavLink
                  key={link.href}
                  href={link.href}
                  active={activeSection === link.href.slice(1)}
                >
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

        {/* Mobile navigation — always in DOM, height animated via CSS grid trick */}
        <div
          id="mobile-nav"
          aria-hidden={!mobileOpen}
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] ease-out-expo md:hidden ${
            mobileOpen
              ? "grid-rows-[1fr] opacity-100 duration-300"
              : "grid-rows-[0fr] opacity-0 duration-200"
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-border">
              <nav
                className="container-portfolio flex flex-col py-4"
                aria-label="Mobile navigation"
              >
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    active={activeSection === link.href.slice(1)}
                    onClick={() => setMobileOpen(false)}
                    className="block py-3 text-base"
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
