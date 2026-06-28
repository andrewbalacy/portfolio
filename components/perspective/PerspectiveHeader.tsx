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
      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
        The Perspective
      </p>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">
        Every product I build starts with a problem I experienced firsthand.
      </p>
    </div>
  );
}
