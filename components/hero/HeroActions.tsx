export default function HeroActions() {
  return (
    <div
      className="animate-fade-up flex flex-wrap items-center gap-4"
      style={{ animationDelay: "520ms" }}
    >
      <a
        href="#slate"
        className="focus-ring inline-flex h-10 items-center rounded-full bg-foreground px-6 text-sm font-medium text-background transition-opacity hover:opacity-80"
      >
        View Slate
      </a>
      <a
        href="/resume"
        className="focus-ring inline-flex h-10 items-center rounded-full border border-border px-6 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-foreground"
      >
        Resume
      </a>
    </div>
  );
}
