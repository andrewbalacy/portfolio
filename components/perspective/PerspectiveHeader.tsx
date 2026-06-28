"use client";

import { useInView } from "@/hooks/useInView";

export default function PerspectiveHeader() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-[13px] font-medium uppercase tracking-[0.24em] text-subtle">
        The Perspective
      </p>
      <p className="mt-8 text-xl leading-snug text-muted">
        Before I learned how to build software, I learned what was worth
        building.
      </p>
    </div>
  );
}
