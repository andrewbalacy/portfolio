"use client";

import { useEffect, useRef, useState } from "react";

interface SectionFocusProps {
  children: React.ReactNode;
  className?: string;
}

/*
 * Wraps a homepage section and activates a soft ambient glow when ≥20%
 * of the section enters the viewport. Two-way toggle (activate on enter,
 * deactivate on exit) so only the section currently in view carries the
 * glow. Purely additive — inactive sections are never dimmed or obscured.
 *
 * prefers-reduced-motion: the global CSS rule in globals.css collapses all
 * transition-duration values to 0.01ms, so the glow still toggles but
 * without motion. No additional handling needed here.
 */
export default function SectionFocus({ children, className }: SectionFocusProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsFocused(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`relative${className ? ` ${className}` : ""}`}>
      {children}

      {/* Ambient focus glow — rendered after children so it composites above
          section content at near-zero opacity. Felt more than noticed. */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out-expo ${
          isFocused ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "radial-gradient(ellipse 75% 50% at 50% 15%, rgba(255, 255, 255, 0.035) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
