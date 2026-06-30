export default function HeroActions() {
  return (
    <div
      className="animate-fade-up flex flex-wrap items-center gap-5"
      style={{ animationDelay: "580ms" }}
    >
      <a
        href="#slate"
        className="focus-ring inline-flex h-11 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-85"
      >
        Explore Slate
      </a>
      <a
        href="/Andrew_Balacy_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open Andrew Balacy resume PDF in a new tab."
        className="focus-ring inline-flex h-11 items-center rounded-full border border-border px-6 text-sm font-medium text-muted transition-colors duration-200 hover:border-white/[0.14] hover:text-foreground"
      >
        View Resume →
      </a>
    </div>
  );
}
