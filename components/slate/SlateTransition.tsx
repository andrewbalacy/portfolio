"use client";

import { useInView } from "@/hooks/useInView";

export default function SlateTransition() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-xl leading-snug text-muted sm:text-2xl">
        Eventually, I stopped looking for the right tool.
      </p>
      <p className="mt-2 text-xl leading-snug text-foreground sm:text-2xl">
        I built it instead.
      </p>
    </div>
  );
}
