"use client";

import { useInView } from "@/hooks/useInView";

export default function OrthoIntakeTransition() {
  const [ref, isVisible] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out-expo ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <p className="text-xl leading-snug text-muted sm:text-2xl">
        Building Slate changed how I thought about information.
      </p>
      <p className="mt-2 text-xl font-semibold leading-snug text-foreground sm:text-2xl">
        Then I started looking beyond myself.
      </p>
    </div>
  );
}
