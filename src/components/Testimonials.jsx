"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

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
];

const Stars = () => (
  <div className="mb-5 flex gap-1.5">
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

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black px-[8%] py-24 text-center"
    >
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-brand-pink/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand-pink-deep/10 blur-3xl" />

      <SectionHeading
        eyebrow="Kind Words"
        title="What Clients Say"
        subtitle="Hear directly from the artists and brands we've partnered with."
        gradient="from-brand-pink via-white to-brand-pink-deep"
      />

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            className="flex flex-col rounded-2xl border border-brand-pink/25 bg-white/[0.04] p-8 text-left backdrop-blur-sm"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Stars />

            <div className="relative mb-6 grow">
              {/* Prominent quote mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -left-1 -top-2 select-none font-serif text-7xl leading-none text-brand-pink/50"
                style={{ textShadow: "0 0 20px rgba(252,214,227,0.35)" }}
              >
                &ldquo;
              </span>
              <p className="relative z-10 pt-6 text-sm leading-relaxed text-gray-300 sm:text-base">
                {t.quote}
              </p>
            </div>

            <div className="mt-auto flex items-center gap-4 border-t border-brand-pink/20 pt-5">
              <Avatar initials={t.initials} />
              <div>
                <p className="font-bold text-brand-pink">{t.name}</p>
                {t.role && (
                  <p className="mt-0.5 text-sm text-gray-500">{t.role}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
