"use client";

import { useInView } from "@/hooks/useInView";

export default function SlateWordmark() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div ref={ref}>
      <h2
        className={`text-[72px] font-semibold tracking-display text-foreground transition-[opacity,transform] duration-700 ease-out-expo sm:text-[108px] lg:text-[140px] ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        SLATE
      </h2>
      <p
        className={`mt-4 text-base text-subtle transition-[opacity,transform] duration-700 ease-out-expo sm:text-lg ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ transitionDelay: isVisible ? "180ms" : "0ms" }}
      >
        Capacity-aware execution intelligence.
      </p>
    </div>
  );
}
