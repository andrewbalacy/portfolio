"use client";

import { useInView } from "@/hooks/useInView";

const DEMO_URL = "https://ortho-intake.vercel.app/";
// TODO: replace with OrthoIntake GitHub repo URL
const SOURCE_URL = "https://github.com/andrewbalacy";

const TECH_BADGES = [
  "FHIR R4",
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Clinical Decision Support",
  "Healthcare Interoperability",
] as const;

export default function OrthoIntakeHeader() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-subtle">
        FHIR-Powered Clinical Context Generator
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-heading text-foreground sm:text-4xl">
        OrthoIntake
      </h2>

      <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
        Working in orthopedics, I noticed that providers aren&apos;t missing
        information — they&apos;re missing context. OrthoIntake aggregates FHIR
        Patient, Encounter, Condition, Allergy, and Observation resources into a
        concise, clinician-oriented intake summary, surfacing the most relevant
        patient context before the visit begins.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {TECH_BADGES.map((badge) => (
          <span
            key={badge}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {badge}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href={DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-85"
        >
          View Live Demo
        </a>
        <a
          href={SOURCE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-muted transition-colors duration-200 hover:border-white/[0.14] hover:text-foreground"
        >
          View Source →
        </a>
      </div>
    </div>
  );
}
