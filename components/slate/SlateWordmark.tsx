"use client";

import { useInView } from "@/hooks/useInView";

export default function SlateWordmark() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div ref={ref}>
      <h2
        className={`text-2xl font-semibold tracking-tight text-foreground transition-[opacity,transform] duration-700 ease-out-expo sm:text-3xl ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Slate
      </h2>
      <p
        className={`mt-3 text-base leading-relaxed text-subtle transition-[opacity,transform] duration-700 ease-out-expo sm:text-lg ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
        style={{ transitionDelay: isVisible ? "180ms" : "0ms" }}
      >
        A personal execution system
        <br />
        built around the way I actually work.
      </p>
    </div>
  );
}
