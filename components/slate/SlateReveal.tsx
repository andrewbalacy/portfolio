import SlateTransition from "./SlateTransition";
import SlateWordmark from "./SlateWordmark";
import SlateHeroImage from "./SlateHeroImage";

export default function SlateReveal() {
  return (
    <section id="slate" aria-label="Slate" className="relative">
      <div className="container-portfolio pb-24 pt-20 md:pb-32 md:pt-28">
        <SlateTransition />

        {/* Chapter break — separates the editorial bridge from the product reveal */}
        <div
          className="mt-12 border-t border-border md:mt-16"
          aria-hidden="true"
        />

        <div className="mt-12 md:mt-16">
          <SlateWordmark />
        </div>

        <div className="mt-16 md:mt-24">
          <SlateHeroImage />
        </div>
      </div>
    </section>
  );
}
