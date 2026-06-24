"use client";

import { motion } from "framer-motion";
import { Globe, Wand2, Workflow, Flame, Shapes, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";

const reasons = [
  {
    title: "Pan-India Presence + Global Exposure",
    desc: "With experience across India and Dubai, we blend local vibes with international style.",
    icon: Globe,
  },
  {
    title: "Custom-Curated Events",
    desc: "From soirées to brand activations, every event is custom-designed.",
    icon: Wand2,
  },
  {
    title: "Seamless Execution",
    desc: "We handle everything — concepts, styling, timelines — so you stay stress-free.",
    icon: Workflow,
  },
  {
    title: "Atmosphere Over Aesthetics",
    desc: "We don't just decorate; we create a feeling your guests will remember.",
    icon: Flame,
  },
  {
    title: "Versatile Format Expertise",
    desc: "Galas, launches, weddings, exhibitions — we know what works and how to make it shine.",
    icon: Shapes,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-black px-[8%] py-24 text-center"
    >
      {/* decorative background glows — mirrored from What We Do for rhythm */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -left-48 sm:-bottom-24 sm:-left-24 h-80 w-80 rounded-full bg-brand-pink/20 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto mb-4 flex items-center justify-center gap-3 text-brand-gold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">
          The RayPalooza Difference
        </span>
        <Sparkles className="h-4 w-4" />
      </motion.div>

      <motion.h2
        className="section-title relative z-10 inline-block bg-linear-to-r from-brand-gold via-white to-brand-pink bg-clip-text text-transparent!"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Why Choose RayPalooza?
      </motion.h2>

      <motion.p
        className="relative z-10 mx-auto mb-16 max-w-2xl text-lg italic text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
      >
        We bring your event to life — with purpose, personality, and precision.
      </motion.p>

      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
        {reasons.map((reason, index) => {
          const Icon = reason.icon;
          const isLast = index === reasons.length - 1;
          return (
            <motion.div
              key={reason.title}
              className={isLast ? "sm:col-span-2 sm:mx-auto sm:w-1/2" : ""}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <TiltCard className="group relative flex h-full items-start gap-5 overflow-hidden rounded-2xl border border-brand-pink/30 bg-white/5 p-7 text-left shadow-[0_0_20px_rgba(252,214,227,0.1)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(245,197,66,0.35)]">
                <span className="pointer-events-none absolute -bottom-6 -right-2 select-none font-[Orbitron] text-7xl font-black text-white/5">
                  0{index + 1}
                </span>

                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center">
                  <span className="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(from_0deg,#f5c542,#fcd6e3,#f5c542)] opacity-60 blur-md [animation-duration:7s]" />
                  <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#0a0a0a]">
                    <Icon className="h-6 w-6 text-brand-gold" />
                  </span>
                </div>

                <div className="relative">
                  <h3 className="mb-2 text-lg font-bold text-brand-pink">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300">{reason.desc}</p>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
