"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

// Real brand collaborations — add more entries here as the client shares them.
const partnerships = [
  {
    id: 1,
    title: "Rameo Lane",
    location: "Ranchi",
    images: [
      "/images/marketing_and_partnerships/Rameo Lane, Ranchi/RL RANCHI DHYAN POST.webp",
      "/images/marketing_and_partnerships/Rameo Lane, Ranchi/RL RANCHI Sat EVENT 25 Apr.webp",
    ],
  },
  {
    id: 2,
    title: "The Ruin House",
    location: "Ranchi",
    images: [
      "/images/marketing_and_partnerships/The Ruin House, Ranchi/IMG_8905.webp",
      "/images/marketing_and_partnerships/The Ruin House, Ranchi/IMG_8911.webp",
    ],
  },
];

export default function MarketingPartnerships() {
  const [selected, setSelected] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);

  const openPartner = (partner) => {
    setSelected(partner);
    setSlideIndex(0);
  };

  const goToSlide = useCallback(
    (next) => {
      setSlideIndex((next + selected.images.length) % selected.images.length);
    },
    [selected]
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      if (!selected) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") goToSlide(slideIndex + 1);
      if (e.key === "ArrowLeft") goToSlide(slideIndex - 1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected, slideIndex, goToSlide]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -60) goToSlide(slideIndex + 1);
    else if (info.offset.x > 60) goToSlide(slideIndex - 1);
  };

  return (
    <section
      id="partnerships"
      className="relative overflow-hidden bg-black px-[8%] py-24 text-center"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-brand-pink/20 blur-3xl" />
      {/* <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-pink-deep/10 blur-3xl" /> */}

      <SectionHeading
        eyebrow="Brand Collaborations"
        title="Marketing & Partnerships"
        subtitle="Activations and venue partnerships we've brought to life — click a card for more details."
        gradient="from-brand-pink-deep via-white to-brand-pink"
      />

      <div className="relative z-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {partnerships.map((partner, i) => (
          <motion.button
            key={partner.id}
            type="button"
            onClick={() => openPartner(partner)}
            className="group relative overflow-hidden rounded-2xl border border-brand-pink/30 text-left"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <div className="aspect-4/3 overflow-hidden">
              <img
                src={partner.images[0]}
                alt={partner.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-75"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-4">
              <span className="mb-1 inline-block rounded-full bg-brand-pink/90 px-3 py-1 text-xs font-semibold text-black">
                {partner.location}
              </span>
              <h3 className="text-lg font-bold text-white">{partner.title}</h3>
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
                className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-brand-pink hover:text-black"
              >
                ×
              </button>

              <motion.div
                className="relative aspect-4/3 w-full cursor-grab overflow-hidden bg-black active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.5}
                onDragEnd={handleDragEnd}
              >
                <AnimatePresence initial={false} mode="wait">
                  <motion.img
                    key={slideIndex}
                    src={selected.images[slideIndex]}
                    alt={`${selected.title} photo ${slideIndex + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    draggable={false}
                    className="pointer-events-none absolute inset-0 h-full w-full select-none object-cover"
                  />
                </AnimatePresence>

                {selected.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(slideIndex - 1);
                      }}
                      aria-label="Previous photo"
                      className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-brand-pink hover:text-black"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goToSlide(slideIndex + 1);
                      }}
                      aria-label="Next photo"
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition hover:bg-brand-pink hover:text-black"
                    >
                      ›
                    </button>
                    <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                      {slideIndex + 1} / {selected.images.length}
                    </span>
                  </>
                )}
              </motion.div>

              <div className="p-6 sm:p-8">
                <span className="mb-3 inline-block rounded-full bg-brand-pink/90 px-3 py-1 text-xs font-semibold text-black">
                  {selected.location}
                </span>
                <h3 className="mb-2 text-2xl font-bold text-brand-pink">
                  {selected.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
