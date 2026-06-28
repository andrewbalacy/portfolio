import HeroBackground from "./HeroBackground";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-dvh flex-col overflow-hidden"
    >
      <HeroBackground />

      {/* pt-14 offsets the fixed navigation (h-14 = 56px) */}
      <div className="relative z-10 flex flex-1 flex-col justify-center pt-14">
        <div className="container-portfolio py-20 md:py-24">
          <div className="flex flex-col gap-10 md:gap-12">
            <HeroContent />
            <HeroActions />
          </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-12">
        <ScrollIndicator />
      </div>
    </section>
  );
}
