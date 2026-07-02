"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

const ORTHOINTAKE_URL = "https://ortho-intake.vercel.app/";

export default function OrthoIntakeBrowserFrame() {
  const [ref, isVisible] = useInView(0.05);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setHasAnimatedIn(true), 1100);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const isInteractive = hasAnimatedIn;
  const showHover = isInteractive && isHovered;

  return (
    <a
      href={ORTHOINTAKE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open OrthoIntake — opens in a new tab"
      className="focus-ring block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure
        ref={ref}
        aria-label="OrthoIntake clinical intake application interface"
        className={`relative w-full select-none overflow-hidden rounded-2xl border ${
          showHover ? "border-white/[0.18]" : "border-white/[0.10]"
        }`}
        style={{
          backgroundColor: "#0c0c0c",
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? `translateY(0) scale(${showHover ? 1.01 : 1})`
            : "translateY(32px) scale(0.96)",
          filter: isVisible ? "blur(0px)" : "blur(8px)",
          boxShadow: showHover
            ? "0 32px 72px -12px rgba(0,0,0,0.9), 0 0 60px -20px rgba(255,255,255,0.03)"
            : "0 25px 50px -12px rgba(0,0,0,0.7)",
          transition: isInteractive
            ? "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 400ms cubic-bezier(0.16,1,0.3,1), filter 700ms cubic-bezier(0.16,1,0.3,1), box-shadow 400ms cubic-bezier(0.16,1,0.3,1), border-color 300ms cubic-bezier(0.16,1,0.3,1)"
            : "opacity 700ms cubic-bezier(0.16,1,0.3,1), transform 700ms cubic-bezier(0.16,1,0.3,1), filter 700ms cubic-bezier(0.16,1,0.3,1)",
          transitionDelay: isInteractive ? "0ms" : isVisible ? "300ms" : "0ms",
        }}
      >
        <figcaption className="sr-only">
          OrthoIntake patient intake interface showing a pre-intake briefing,
          active conditions including obesity and osteoarthritis of knee,
          allergy documentation, and encounter history for a patient in an
          orthopedic ambulatory visit.
        </figcaption>

        {/* Top-edge highlight — simulates window chrome depth */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.07]"
        />

        {/* Hover overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
          style={{
            backgroundColor: showHover ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
            backdropFilter: showHover ? "blur(2px)" : "blur(0px)",
            WebkitBackdropFilter: showHover ? "blur(2px)" : "blur(0px)",
            transition:
              "background-color 350ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 350ms cubic-bezier(0.16,1,0.3,1), -webkit-backdrop-filter 350ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div
            style={{
              opacity: showHover ? 1 : 0,
              transform: showHover
                ? "translateY(0) scale(1)"
                : "translateY(8px) scale(0.97)",
              transition:
                "opacity 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: showHover ? "50ms" : "0ms",
            }}
          >
            <div className="rounded-full border border-white/[0.18] bg-white/[0.06] px-6 py-3">
              <span className="text-sm font-medium tracking-wide text-white/90">
                Explore OrthoIntake →
              </span>
            </div>
          </div>
        </div>

        {/* Browser chrome */}
        <div
          className="border-b border-white/[0.06]"
          style={{ backgroundColor: "#111111" }}
        >
          <div className="flex items-center gap-3 px-4 py-3">
            {/* macOS window controls */}
            <div className="flex shrink-0 items-center gap-2" aria-hidden="true">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>

            {/* Address bar */}
            <div className="mx-auto flex w-full max-w-sm items-center rounded-md border border-white/[0.07] bg-white/[0.03] px-3 py-1.5">
              <span className="select-none font-mono text-[10px] text-white/25">
                ortho-intake.vercel.app
              </span>
            </div>
          </div>
        </div>

        {/* Screenshot */}
        <Image
          src="/projects/orthointake/orthointake-preview.png"
          alt="OrthoIntake clinical intake dashboard built with FHIR patient data"
          width={3360}
          height={1882}
          className="w-full"
          priority={false}
        />
      </figure>
    </a>
  );
}
