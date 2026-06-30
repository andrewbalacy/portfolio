"use client";

import { useInView } from "@/hooks/useInView";

export default function SlateWordmark() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div ref={ref}>
      <p
        className={`text-base leading-relaxed text-muted transition-[opacity,transform] duration-700 ease-out-expo sm:text-lg ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
        }`}
      >
        A personal execution system
        <br />
        built around the way I actually work.
      </p>
    </div>
  );
}
