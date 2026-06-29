"use client";

import { useInView } from "@/hooks/useInView";
import PerspectiveHeader from "./PerspectiveHeader";
import PerspectiveCard from "./PerspectiveCard";

const cards = [
  {
    number: "01",
    title: "Healthcare",
    body: "Working directly with patients taught me that great care depends on the systems behind it.",
  },
  {
    number: "02",
    title: "Health Informatics",
    body: "I became fascinated by the technology, workflows, and decisions that shape healthcare long before a patient is seen.",
  },
  {
    number: "03",
    title: "Software",
    body: "I realized I could build the tools I wished existed, so I began learning software engineering and creating products from the ground up.",
  },
  {
    number: "04",
    title: "AI",
    body: "Today, I'm exploring how intelligent systems can make better decisions while keeping real people at the center of every product.",
  },
];

export default function Perspective() {
  const [gridRef, isVisible] = useInView(0.1);

  return (
    <section
      id="perspective"
      aria-label="The Perspective"
      className="relative"
    >
      <div className="container-portfolio py-32 md:py-40">
        <PerspectiveHeader />

        {/* Single editorial rule — one chapter break, not four card borders */}
        <div className="mt-10 border-t border-border md:mt-14" />

        <div
          ref={gridRef}
          className="mt-8 grid grid-cols-1 gap-x-16 md:mt-10 md:grid-cols-2 lg:gap-x-24"
        >
          {cards.map((card, index) => (
            <PerspectiveCard
              key={card.number}
              {...card}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
