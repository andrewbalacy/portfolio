"use client";

import { useInView } from "@/hooks/useInView";

interface PerspectiveCardProps {
  number: string;
  title: string;
  body: string;
  index: number;
  featured?: boolean;
}

export default function PerspectiveCard({
  number,
  title,
  body,
  index,
  featured = false,
}: PerspectiveCardProps) {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      className={`pb-14 pt-10 transition-[opacity,transform] duration-700 ease-out-expo md:pb-16 md:pt-12 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: isVisible ? `${index * 80}ms` : "0ms" }}
    >
      <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-subtle">
        {number}
      </p>
      <h3
        className={`tracking-heading text-foreground ${
          featured
            ? "mt-5 text-3xl font-semibold sm:text-4xl"
            : "mt-4 text-3xl font-semibold sm:text-4xl"
        }`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed text-muted ${
          featured ? "mt-6 text-lg" : "mt-5 text-base"
        }`}
      >
        {body}
      </p>
    </div>
  );
}
