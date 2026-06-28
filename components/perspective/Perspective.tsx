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
  return (
    <section
      id="perspective"
      aria-label="The Perspective"
      className="relative"
    >
      <div className="container-portfolio py-28 md:py-36">
        <PerspectiveHeader />
        <div className="mt-16 grid grid-cols-1 gap-x-16 md:mt-20 md:grid-cols-2 lg:gap-x-24">
          {cards.map((card, index) => (
            <PerspectiveCard key={card.number} {...card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
