"use client";

import { motion } from "framer-motion";
import {
  PartyPopper,
  Rocket,
  Megaphone,
  Sparkles,
  Sparkle,
} from "lucide-react";
import TiltCard from "./TiltCard";

const categories = [
  {
    title: "Event Experiences",
    icon: PartyPopper,
    items: [
      "Gala Nights, Social Events & Milestone Parties",
      "Exhibitions, Pop-Ups & B2C Showcases",
      "Corporate Celebrations & Networking Events",
      "Engagements, Birthdays & Themed Gatherings",
      "Luxury Weddings & Private Celebrations",
    ],
  },
  {
    title: "Brand & Launch Events",
    icon: Rocket,
    items: ["Product Launches", "Store Openings", "Conferences & Seminars"],
  },
  {
    title: "Content & Marketing Add-Ons",
    icon: Megaphone,
    items: [
      "Reels, Event Coverage & Visuals",
      "Influencer Tie-ups & Social Media Support",
    ],
  },
];

export default function WhatWeDo() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black px-[8%] py-24 text-center"
    >
      {/* decorative background glows */}
      <div className="pointer-events-none absolute -left-40 -top-40 sm:-left-24 sm:-top-24 h-80 w-80 rounded-full bg-brand-pink/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 sm:-bottom-24 sm:-right-24 h-96 w-96 rounded-full bg-brand-pink-deep/10 blur-3xl" />

      <motion.div
        className="relative z-10 mx-auto mb-4 flex items-center justify-center gap-3 text-brand-pink-deep"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">
          Our Expertise
        </span>
        <Sparkles className="h-4 w-4" />
      </motion.div>

      <motion.h2
        className="section-title relative z-10 inline-block bg-linear-to-r from-brand-pink via-white to-brand-pink-deep bg-clip-text text-transparent!"
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        What We Do
      </motion.h2>

      <motion.p
        className="relative z-10 mx-auto mb-16 max-w-2xl text-lg italic text-gray-300"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.8 }}
      >
        At RayPalooza, we curate events that captivate and connect — with
        creativity, precision, and flair.
      </motion.p>

      <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.18, duration: 0.6 }}
            >
              <TiltCard className="group relative h-full overflow-hidden rounded-2xl border border-brand-pink/30 bg-white/5 p-8 text-left shadow-[0_0_20px_rgba(252,214,227,0.1)] transition-shadow duration-300 hover:shadow-[0_0_35px_rgba(252,214,227,0.45)]">
                {/* big faint index number */}
                <span className="pointer-events-none absolute -right-2 -top-6 select-none font-[Orbitron] text-7xl font-black text-white/5">
                  0{index + 1}
                </span>

                {/* icon badge with rotating glow ring */}
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
                  <span className="absolute inset-0 animate-spin rounded-full bg-[conic-gradient(from_0deg,#fcd6e3,#ee93bf,#fcd6e3)] opacity-60 blur-md [animation-duration:6s]" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0a0a0a]">
                    <Icon className="h-7 w-7 text-brand-pink" />
                  </span>
                </div>

                <h3 className="relative mb-4 text-xl font-bold text-brand-pink">
                  {category.title}
                </h3>

                <ul className="relative space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex gap-2 text-gray-300">
                      <Sparkle className="mt-1 h-4 w-4 shrink-0 text-brand-pink-deep" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
