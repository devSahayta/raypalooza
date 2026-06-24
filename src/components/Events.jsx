"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Sample event data — replace/extend with the client's real event roster and photos.
const events = [
  {
    id: 1,
    title: "Corporate Conference Day",
    category: "Corporate Event",
    image: "/images/01.jpg",
    location: "New Delhi, India",
    description:
      "A full-day corporate conference and networking event — end-to-end coordination from stage setup to live content capture for the brand's social channels.",
  },
  {
    id: 2,
    title: "Luxury Wedding Mandap",
    category: "Luxury Wedding",
    image: "/images/111.jpg",
    location: "India",
    description:
      "An intimate, traditional wedding ceremony styled with a floral mandap and warm ambient lighting — decor, coordination, and timeline managed start to finish.",
  },
];

export default function Events() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <section
      id="events"
      className="relative overflow-hidden bg-black px-[8%] py-24 text-center"
    >
      {/* <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-pink/20 blur-3xl" /> */}
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-pink-deep/10 blur-3xl" />

      <SectionHeading
        eyebrow="Our Work"
        title="Our Events"
        subtitle="A glimpse into the events we've curated — click a card for more details."
        gradient="from-brand-pink via-white to-brand-pink-deep"
      />

      <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((event, i) => (
          <motion.button
            key={event.id}
            type="button"
            onClick={() => setSelected(event)}
            className="group relative overflow-hidden rounded-2xl border border-brand-pink/30 text-left"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <span className="mb-1 inline-block rounded-full bg-brand-pink/90 px-3 py-1 text-xs font-semibold text-black">
                {event.category}
              </span>
              <h3 className="text-lg font-bold text-white">{event.title}</h3>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-black/80 p-4 pb-10 pt-28 sm:pb-16 sm:pt-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="relative w-full max-w-2xl shrink-0 overflow-hidden rounded-2xl border border-brand-pink/40 bg-[#0a0a0a] text-left shadow-[0_0_40px_rgba(252,214,227,0.25)]"
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close details"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-brand-pink hover:text-black"
              >
                ×
              </button>

              <div className="aspect-[16/9] w-full overflow-hidden">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8">
                <span className="mb-3 inline-block rounded-full bg-brand-pink/90 px-3 py-1 text-xs font-semibold text-black">
                  {selected.category}
                </span>
                <h3 className="mb-2 text-2xl font-bold text-brand-pink">
                  {selected.title}
                </h3>
                <p className="mb-4 text-sm uppercase tracking-wide text-brand-pink-deep">
                  {selected.location}
                </p>
                <p className="text-gray-300">{selected.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
