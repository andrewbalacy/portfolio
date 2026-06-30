import SlateTransition from "./SlateTransition";
import SlateWordmark from "./SlateWordmark";
import SlateProductMockup from "./SlateProductMockup";

export default function SlateReveal() {
  return (
    <section id="slate" aria-label="Slate" className="relative snap-section">
      <div className="container-portfolio pb-24 pt-20 md:pb-32 md:pt-28">
        <SlateTransition />

        {/* Chapter break — editorial rule, width intentionally shorter than full */}
        <div className="mt-14 md:mt-20" aria-hidden="true">
          <div className="w-24 border-t border-border" />
        </div>

        <div className="mt-6 md:mt-8">
          <SlateWordmark />
        </div>

        <div className="mt-6 md:mt-10">
          <SlateProductMockup />
        </div>
      </div>
    </section>
  );
}
