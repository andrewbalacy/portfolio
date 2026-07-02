import OrthoIntakeTransition from "./OrthoIntakeTransition";
import OrthoIntakeHeader from "./OrthoIntakeHeader";
import OrthoIntakeBrowserFrame from "./OrthoIntakeBrowserFrame";

export default function OrthoIntakeReveal() {
  return (
    <section id="orthointake" aria-label="OrthoIntake" className="relative snap-section">
      <div className="container-portfolio pb-24 pt-20 md:pb-32 md:pt-28">
        <OrthoIntakeTransition />

        {/* Chapter break — mirrors Slate's editorial rule */}
        <div className="mt-14 md:mt-20" aria-hidden="true">
          <div className="w-24 border-t border-border" />
        </div>

        <div className="mt-6 md:mt-8">
          <OrthoIntakeHeader />
        </div>

        <div className="mt-10 md:mt-14">
          <OrthoIntakeBrowserFrame />
        </div>
      </div>
    </section>
  );
}
