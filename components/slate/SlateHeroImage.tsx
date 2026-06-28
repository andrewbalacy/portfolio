"use client";

import { useInView } from "@/hooks/useInView";

export default function SlateHeroImage() {
  const [ref, isVisible] = useInView(0.05);

  return (
    <figure
      ref={ref}
      className={`relative w-full overflow-hidden rounded-2xl border border-border transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{
        aspectRatio: "16 / 9",
        transitionDelay: isVisible ? "300ms" : "0ms",
        backgroundColor: "var(--color-surface)",
      }}
    >
      <figcaption className="sr-only">Slate application homepage</figcaption>

      {/*
        To display the real screenshot, replace the placeholder content below with:
        <Image
          src="/slate-hero.png"
          alt="Slate application homepage"
          fill
          className="object-cover object-top"
          priority
        />
        Then add `import Image from "next/image"` at the top.
      */}

      {/* Ambient glow — mirrors Slate's own background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255, 255, 255, 0.032) 0%, transparent 65%)",
        }}
      />

      {/* Interface silhouette — ghosted structural hints at near-zero opacity */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex gap-6 p-8 md:gap-8 md:p-12"
      >
        {/* Left column */}
        <div className="flex flex-1 flex-col gap-3 pt-6">
          <div className="h-6 w-16 rounded bg-white/[0.04]" />
          <div className="mt-0.5 h-2.5 w-28 rounded bg-white/[0.025]" />
          <div className="mt-4 flex flex-col gap-3">
            <div className="h-20 w-full rounded-xl border border-white/[0.04]" />
            <div className="h-28 w-full rounded-xl border border-white/[0.04]" />
          </div>
        </div>

        {/* Right sidebar — hidden on small screens to match Slate's responsive layout */}
        <div className="hidden w-[27%] flex-col gap-3 pt-6 sm:flex">
          <div className="h-20 w-full rounded-xl border border-white/[0.04]" />
          <div className="h-28 w-full rounded-xl border border-white/[0.04]" />
          <div className="h-16 w-full rounded-xl border border-white/[0.04]" />
        </div>
      </div>

      {/* Film grain — felt more than noticed */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="slate-preview-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#slate-preview-grain)" />
      </svg>
    </figure>
  );
}
