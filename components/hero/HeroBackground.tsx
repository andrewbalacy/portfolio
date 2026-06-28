export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Overhead radial — primary depth source, slightly stronger than before */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255, 255, 255, 0.07) 0%, transparent 60%)",
        }}
      />
      {/* Center atmosphere — barely-there ambient glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 50% 38%, rgba(255, 255, 255, 0.025) 0%, transparent 70%)",
        }}
      />
      {/* Film grain — felt more than noticed */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="hero-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#hero-grain)" />
      </svg>
      {/* Bottom fade — smooths transition into the next section */}
      <div
        className="absolute inset-x-0 bottom-0 h-48"
        style={{
          background:
            "linear-gradient(to top, var(--color-background), transparent)",
        }}
      />
    </div>
  );
}
