"use client";

import { useInView } from "@/hooks/useInView";

interface PerspectiveCardProps {
  number: string;
  title: string;
  body: string;
  index: number;
}

export default function PerspectiveCard({
  number,
  title,
  body,
  index,
}: PerspectiveCardProps) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`border-t border-border pb-12 pt-8 transition-[opacity,transform] duration-700 ease-out-expo md:pb-14 md:pt-10 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
        {number}
      </p>
      <h3 className="mt-4 text-3xl font-semibold tracking-heading text-foreground sm:text-4xl">
        {title}
      </h3>
      <p className="mt-5 text-base leading-relaxed text-muted">
        {body}
      </p>
    </div>
  );
}
