"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView";

// TODO: replace with the deployed Slate URL before going live
const SLATE_URL = "https://slate-xi-vert.vercel.app/";

// ─── Static mockup data ──────────────────────────────────────────────────────

const QUICK_ACTIONS = ["Daily Execution", "Logs", "Architecture"] as const;

const SYSTEM_STATE = [
  { label: "Energy", value: "9" },
  { label: "Capacity", value: "High" },
  { label: "Mode", value: "Recovery / Build" },
  { label: "Risk", value: "Low" },
  { label: "Recommendation...", value: "Recovery" },
] as const;

const SYSTEM_INSIGHTS = [
  { label: "Logged", value: "3" },
  { label: "Avg Energy", value: "7.7" },
  { label: "Work Days", value: "2" },
  { label: "Training", value: "0" },
] as const;

const HEALTH_BULLETS = [
  "Avg energy 7.7 — healthy range",
  "2 of last 7 days logged",
  "No recovery risk indicators",
] as const;

// ─── Label utility ───────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-white/30">
      {children}
    </p>
  );
}

// ─── Card shell ──────────────────────────────────────────────────────────────

function Card({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-xl border border-white/[0.07]"
      style={{ backgroundColor: "#111111" }}
    >
      <div className="border-b border-white/[0.05] px-4 py-3">
        <Label>{header}</Label>
      </div>
      {children}
    </div>
  );
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function SlateProductMockup() {
  const [ref, isVisible] = useInView(0.05);
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimatedIn, setHasAnimatedIn] = useState(false);

  // Wait for the entrance animation to finish before enabling hover effects.
  // This prevents the 300ms transitionDelay (intended for scroll-in) from
  // bleeding into hover responses.
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
      href={SLATE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Slate — opens in a new tab"
      className="focus-ring block cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure
        ref={ref}
        aria-label="Slate application interface"
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
          Slate application showing system state, next action recommendation of
          Recovery, energy score 9, capacity high, and execution health score 70
          rated Stable.
        </figcaption>

        {/* Top-edge highlight — simulates window chrome */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/[0.07]"
        />

        {/* Hover overlay — UI recedes behind dark glass, action surfaces */}
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
              transform: showHover ? "translateY(0) scale(1)" : "translateY(8px) scale(0.97)",
              transition:
                "opacity 300ms cubic-bezier(0.16,1,0.3,1), transform 300ms cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: showHover ? "50ms" : "0ms",
            }}
          >
            <div className="rounded-full border border-white/[0.18] bg-white/[0.06] px-6 py-3">
              <span className="text-sm font-medium tracking-wide text-white/90">
                Explore Slate →
              </span>
            </div>
          </div>
        </div>

        <div className="relative p-6 md:p-8">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-[3fr_2fr] md:gap-6">

            {/* ── LEFT COLUMN ─────────────────────────────────────────── */}
            <div className="flex flex-col gap-4">

              {/* Wordmark */}
              <p className="text-[2.25rem] font-bold leading-none tracking-tight text-white md:text-[2.75rem]">
                slate.
              </p>

              {/* System Online pill */}
              <div className="inline-flex items-center gap-1.5 self-start rounded-full border border-white/[0.1] px-2.5 py-1">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-green-500"
                />
                <span className="font-mono text-[9px] font-medium uppercase tracking-[0.16em] text-white/40">
                  System Online
                </span>
              </div>

              {/* Tagline */}
              <div className="space-y-0.5">
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                  Fatigue-Aware Execution Engine
                </p>
                <p className="text-[9px] uppercase tracking-[0.22em] text-white/25">
                  Capacity → Rules → Execution
                </p>
              </div>

              {/* Quick Actions */}
              <Card header="Quick Actions">
                {QUICK_ACTIONS.map((action, i) => (
                  <div
                    key={action}
                    className={`flex items-center justify-between px-4 py-3.5 ${
                      i < QUICK_ACTIONS.length - 1 ? "border-b border-white/[0.04]" : ""
                    }`}
                  >
                    <span className="text-[13px] text-white/75">{action}</span>
                    <span className="text-[11px] text-white/25">→</span>
                  </div>
                ))}
              </Card>

              {/* Next Action */}
              <Card header="Next Action">
                <div className="space-y-4 p-4">
                  {/* Recommendation */}
                  <div>
                    <Label>Recommendation</Label>
                    <p className="mt-1 text-xl font-semibold text-white/90">
                      Recovery
                    </p>
                    <p className="mt-0.5 text-[11px] leading-relaxed text-white/35">
                      Reduce load. Prepare for tomorrow.
                    </p>
                  </div>

                  {/* Start With */}
                  <div>
                    <Label>Start With</Label>
                    <p className="mt-1 font-mono text-[11px] text-white/55">
                      → movement (30-40 min)
                    </p>
                  </div>

                  {/* Estimated Effort */}
                  <div>
                    <Label>Estimated Effort</Label>
                    <p className="mt-1 text-[13px] text-white/70">Low</p>
                  </div>

                  {/* Footer action rows — decorative, not interactive */}
                  <div className="flex gap-2.5 pt-0.5">
                    {(["Execute →", "Focus Mode →"] as const).map((label) => (
                      <div
                        key={label}
                        className="rounded border border-white/[0.1] px-3 py-1.5"
                      >
                        <span className="text-[11px] text-white/40">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Bottom tagline */}
              <p className="text-[9px] uppercase tracking-[0.22em] text-white/20">
                Reduce Friction. Execute Consistently.
              </p>
            </div>

            {/* ── RIGHT COLUMN ────────────────────────────────────────── */}
            <div className="flex flex-col gap-3">

              {/* System State */}
              <Card header="System State">
                {SYSTEM_STATE.map(({ label, value }, i) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between px-4 py-2.5 ${
                      i > 0 ? "border-t border-white/[0.04]" : ""
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                      {label}
                    </span>
                    <span className="text-[12px] text-white/70">{value}</span>
                  </div>
                ))}
              </Card>

              {/* System Insights */}
              <Card header="System Insights">
                <div className="grid grid-cols-2 gap-x-4 gap-y-4 p-4">
                  {SYSTEM_INSIGHTS.map(({ label, value }) => (
                    <div key={label}>
                      <p className="mb-0.5 text-[9px] uppercase tracking-[0.15em] text-white/30">
                        {label}
                      </p>
                      <p className="text-xl font-semibold text-white/80">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between border-t border-white/[0.04] px-4 py-2.5">
                  <span className="text-[9px] uppercase tracking-[0.15em] text-white/30">
                    Top Constraint
                  </span>
                  <span className="text-[11px] text-white/40">none</span>
                </div>
              </Card>

              {/* Execution Health */}
              <Card header="Execution Health">
                <div className="p-4">
                  <div className="flex items-start justify-between gap-3">
                    {/* Score */}
                    <span className="text-[3rem] font-bold leading-none text-white">
                      70
                    </span>
                    {/* Status + description */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                        Stable
                      </p>
                      <p className="mt-1 max-w-[9rem] text-[9px] leading-relaxed text-white/30">
                        Execution stable. Monitor for fatigue accumulation.
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 space-y-1">
                    {HEALTH_BULLETS.map((line) => (
                      <p key={line} className="text-[9px] text-white/30">
                        · {line}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Recovery Risk Trend */}
                <div className="border-t border-white/[0.04] px-4 py-3">
                  <Label>Recovery Risk Trend</Label>
                  <p className="mt-1 text-[9px] text-white/20">
                    5+ sessions required
                  </p>
                </div>
              </Card>

            </div>
          </div>
        </div>
      </figure>
    </a>
  );
}
