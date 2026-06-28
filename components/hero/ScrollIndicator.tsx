export default function ScrollIndicator() {
  return (
    <div
      className="animate-fade-in flex flex-col items-center gap-2"
      style={{ animationDelay: "840ms" }}
      aria-hidden="true"
    >
      <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-subtle">
        Scroll
      </span>
      <svg
        className="animate-bob text-subtle"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 1l6 6 6-6" />
      </svg>
    </div>
  );
}
