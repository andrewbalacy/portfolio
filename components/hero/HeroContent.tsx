export default function HeroContent() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <h1
        className="animate-fade-up-slow max-w-2xl text-4xl font-semibold leading-[1.2] tracking-display sm:text-5xl lg:max-w-3xl lg:text-6xl"
        style={{ animationDelay: "80ms" }}
      >
        <span className="text-foreground/60">
          Healthcare taught me the problem.
        </span>
        <br />
        <span className="text-foreground">
          Software lets me build the solution.
        </span>
      </h1>

      <p
        className="animate-fade-up max-w-lg text-base leading-relaxed text-muted sm:text-lg"
        style={{ animationDelay: "380ms" }}
      >
        I spent years working in healthcare, close enough to care delivery to
        see where systems fail and what that costs. I build at the intersection
        of clinical knowledge, product thinking, and AI to solve problems I once
        encountered firsthand.
      </p>
    </div>
  );
}
