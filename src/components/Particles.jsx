"use client";

import { Sparkle } from "lucide-react";

const DOT_COUNT = 40;
const STAR_COUNT = 7;

// Deterministic pseudo-random (mulberry32-style hash) so server and client
// render identical markup — Math.sin()-based tricks drift between Node's
// and the browser's V8 for large arguments and cause hydration mismatches.
function seeded(seed) {
  let t = (seed + 0x6d2b79f5) | 0;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
}

const dots = Array.from({ length: DOT_COUNT }, (_, i) => {
  const base = i * 10;
  const duration = 12 + seeded(base + 4) * 18;
  const colorRoll = seeded(base + 7);
  return {
    left: seeded(base + 1) * 100,
    top: seeded(base + 2) * 100,
    size: 1.5 + seeded(base + 3) * 2.5,
    duration,
    delay: seeded(base + 5) * -duration,
    drift: 60 + seeded(base + 6) * 100,
    color:
      colorRoll < 0.45 ? "#fcd6e3" : colorRoll < 0.8 ? "#f5c542" : "#ffffff",
  };
});

const stars = Array.from({ length: STAR_COUNT }, (_, i) => {
  const base = 1000 + i * 10;
  const duration = 5 + seeded(base + 3) * 5;
  return {
    left: seeded(base + 1) * 100,
    top: seeded(base + 2) * 100,
    size: 10 + seeded(base + 4) * 10,
    duration,
    delay: seeded(base + 5) * -duration,
    color: seeded(base + 6) < 0.5 ? "#fcd6e3" : "#f5c542",
  };
});

export default function Particles() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 overflow-hidden"
    >
      {dots.map((d, i) => (
        <span
          key={`dot-${i}`}
          className="particle-dot absolute rounded-full"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: d.size,
            height: d.size,
            backgroundColor: d.color,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}s`,
            "--drift": `-${d.drift}px`,
          }}
        />
      ))}
      {stars.map((s, i) => (
        <Sparkle
          key={`star-${i}`}
          className="particle-star absolute"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            color: s.color,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
