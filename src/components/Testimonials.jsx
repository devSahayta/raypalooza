"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const AUTO_SLIDE_INTERVAL = 6000;

const testimonials = [
  {
    id: 1,
    quote:
      "Huge shoutout to the Raypalooza team for putting together an absolutely killer experience. Rabab and I recently DJed one of their shows, and the level of production completely blew our expectations out of the water. From the stage setup to the flawless curation of the crowd and the overall energy in the room, everything was top-notch. As artists, having that kind of dialed-in environment makes all the difference when you're behind the decks. It was hands down our best Hangout Sounds show so far. Massive respect to Shreyal and Raypalooza for knowing exactly how to curate an unforgettable vibe.",
    name: "DJ Nake",
    role: "",
    initials: "DN",
  },
  {
    id: 2,
    quote:
      "We have worked with Shreyal and the Raypalooza team on multiple projects, and what stands out most is how personally invested she becomes in each one. She understands the vision well, translates it thoughtfully into the space, and takes complete ownership of the execution. She is hands-on, dependable, and quick to resolve any issues that arise. Knowing that she genuinely cares about the outcome takes a lot of the stress away and makes working with her both easy and reassuring. We would gladly recommend Raypalooza to anyone looking for a creative and committed event partner.",
    name: "Shubham Gupta",
    role: "Saraswaan Jewellers",
    initials: "SG",
  },
  {
    id: 3,
    quote:
      "Still not over this show! Our Ranchi debut was honestly the best 🫶🏻\n\nHuge shoutout to the Raypalooza team for putting together such a beautiful night. Everything just felt right. The production, the crowd, the energy, the whole experience. You could tell how much thought went into every little detail. It was all so beautifully curated ✨♥️\n\nAs an artist, shows like these are the best because everything just flows exactly how you'd hope it would. Definitely one of my favourite Hangout gigs we've done!\n\nAnd it wasn't just the show. The next day they took us to an old age home, which was such a wholesome experience. It made the whole trip feel like so much more than just another gig. It genuinely felt like home. Warm, fuzzy, and so much fun 🥹🤍\n\nBig love to Shreyal and the entire Raypalooza crew. You guys absolutely killed it. Can't wait to be back 🤍",
    name: "DJ Rabab Randhawa",
    role: "",
    initials: "RR",
  },
];

const Stars = () => (
  <div className="mb-5 flex justify-center gap-1.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-6 w-6 text-brand-pink drop-shadow-[0_0_6px_#fcd6e3]"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Avatar = ({ initials }) => (
  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-pink/40 bg-brand-pink/10 text-sm font-bold tracking-widest text-brand-pink shadow-[0_0_12px_rgba(252,214,227,0.3)]">
    {initials}
  </div>
);

const variants = {
  enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
  center: { opacity: 1, x: 0 },
  exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const go = useCallback((dir) => {
    setDirection(dir);
    setIndex(
      (prev) => (prev + dir + testimonials.length) % testimonials.length,
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => go(1), AUTO_SLIDE_INTERVAL);
    return () => clearInterval(id);
  }, [isPaused, go]);

  const t = testimonials[index];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black px-[8%] py-24 text-center"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-pink/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-pink-deep/10 blur-3xl" />

      <SectionHeading
        eyebrow="Trusted Voices"
        title="Real experiences. Genuine partnerships"
        subtitle="Hear what artists, brands, and clients have to say about working with Raypalooza."
        gradient="from-brand-pink via-white to-brand-pink-deep"
      />

      <div
        className="relative z-10 mx-auto max-w-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Arrows */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
          className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-pink/30 bg-black/60 text-xl text-white backdrop-blur transition hover:bg-brand-pink hover:text-black sm:-left-8"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next testimonial"
          className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-pink/30 bg-black/60 text-xl text-white backdrop-blur transition hover:bg-brand-pink hover:text-black sm:-right-8"
        >
          ›
        </button>

        {/* Card */}
        <div className="overflow-hidden px-6">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={t.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) go(1);
                else if (info.offset.x > 50) go(-1);
              }}
              onDragStart={() => setIsPaused(true)}
              className="cursor-grab rounded-2xl border border-brand-pink/25 bg-white/4 p-8 text-left backdrop-blur-sm active:cursor-grabbing"
            >
              <Stars />

              <div className="relative mb-6">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-1 -top-2 select-none font-serif text-7xl leading-none text-brand-pink/50"
                  style={{ textShadow: "0 0 20px rgba(252,214,227,0.35)" }}
                >
                  &ldquo;
                </span>
                <div className="relative z-10 space-y-3 pt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                  {t.quote.split("\n\n").map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 border-t border-brand-pink/20 pt-5">
                <Avatar initials={t.initials} />
                <div>
                  <p className="font-bold text-brand-pink">{t.name}</p>
                  {t.role && (
                    <p className="mt-0.5 text-sm text-gray-500">{t.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index
                  ? "w-6 bg-brand-pink shadow-[0_0_8px_#fcd6e3]"
                  : "w-2 bg-brand-pink/30 hover:bg-brand-pink/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
