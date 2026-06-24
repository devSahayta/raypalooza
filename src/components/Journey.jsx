"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const slides = [
  {
    src: "/images/journey/journey-1.png",
    alt: "Every event is a story — here's ours. Crafting vibes that stay with you.",
  },
  {
    src: "/images/journey/journey-2.png",
    alt: "Sounds backed by beatmakers — a few of the many amazing DJs we've had the chance to work with.",
  },
  {
    src: "/images/journey/journey-3.png",
    alt: "Artists we've worked with — amazing DJs we've had the chance to work with.",
  },
  {
    src: "/images/journey/journey-4.png",
    alt: "Marketing that brings impact.",
  },
  {
    src: "/images/journey/journey-5.png",
    alt: "Brand presence for clients who wanted more than just posts.",
  },
  {
    src: "/images/journey/journey-6.png",
    alt: "Places we've hosted events — from rooftops to basements, each space brought a different energy.",
  },
  {
    src: "/images/journey/journey-7.png",
    alt: "We've just gotten started, let's build your next unforgettable vibe!",
  },
];

const AUTO_SLIDE_INTERVAL = 4500;

export default function Journey() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = (next) => {
    setIndex((next + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -60) goTo(index + 1);
    else if (info.offset.x > 60) goTo(index - 1);
  };

  return (
    <section
      id="journey"
      className="relative overflow-hidden bg-black px-[8%] py-24 text-center"
    >
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
      {/* <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-brand-pink/20 blur-3xl" /> */}

      <SectionHeading
        eyebrow="Our Story"
        title="Our Journey"
        subtitle="Every event is a story — here's a glimpse of where RayPalooza has been."
        gradient="from-brand-gold via-white to-brand-pink"
      />

      <div
        className="relative z-10 mx-auto w-full max-w-95"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="relative aspect-[4/5] cursor-grab overflow-hidden rounded-2xl border border-brand-pink/30 shadow-[0_0_30px_rgba(252,214,227,0.15)] active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.5}
          onDragStart={() => setIsPaused(true)}
          onDragEnd={(...args) => {
            handleDragEnd(...args);
            setIsPaused(false);
          }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.img
              key={index}
              src={slides[index].src}
              alt={slides[index].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              draggable={false}
              className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
            />
          </AnimatePresence>
        </motion.div>

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-brand-pink backdrop-blur transition hover:bg-brand-pink hover:text-black"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-brand-pink backdrop-blur transition hover:bg-brand-pink hover:text-black"
        >
          ›
        </button>
      </div>

      <div className="relative z-10 mt-6 flex items-center justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-brand-pink" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>

      <p className="relative z-10 mt-3 text-sm text-gray-500">
        {index + 1} / {slides.length}
      </p>
    </section>
  );
}
