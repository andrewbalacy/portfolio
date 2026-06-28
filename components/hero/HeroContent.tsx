export default function HeroContent() {
  return (
    <div className="flex flex-col gap-6 md:gap-8">
      <p
        className="animate-fade-up text-[10px] font-medium uppercase tracking-[0.16em] text-subtle"
        style={{ animationDelay: "100ms" }}
      >
        Health Technology · AI · Software Engineering
      </p>

      <h1
        className="animate-fade-up max-w-xl text-4xl font-semibold leading-[1.1] tracking-display text-foreground sm:text-5xl lg:max-w-2xl lg:text-6xl"
        style={{ animationDelay: "200ms" }}
      >
        Building software for the problems I once experienced firsthand.
      </h1>

      <p
        className="animate-fade-up max-w-lg text-base leading-relaxed text-muted sm:text-lg"
        style={{ animationDelay: "360ms" }}
      >
        I&apos;m Andrew — a Medical Assistant turned software engineer working
        at the intersection of healthcare and artificial intelligence. My
        clinical background informs every product I build: with precision,
        systems thinking, and a deep understanding of what healthcare actually
        needs. Slate is where that story begins.
      </p>
    </div>
  );
}
