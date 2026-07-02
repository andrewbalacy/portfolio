import Hero from "@/components/hero/Hero";
import Perspective from "@/components/perspective/Perspective";
import SlateReveal from "@/components/slate/SlateReveal";
import OrthoIntakeReveal from "@/components/orthointake/OrthoIntakeReveal";
import SectionFocus from "@/components/shared/SectionFocus";

export default function Home() {
  return (
    <main>
      <SectionFocus>
        <Hero />
      </SectionFocus>
      <SectionFocus>
        <Perspective />
      </SectionFocus>
      <SectionFocus>
        <SlateReveal />
      </SectionFocus>
      <SectionFocus>
        <OrthoIntakeReveal />
      </SectionFocus>
    </main>
  );
}
