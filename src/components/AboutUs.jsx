"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import "@/styles/AboutUs.css";

export default function AboutUs() {
  return (
    <section className="aboutus-section relative overflow-hidden" id="about">
      <div className="pointer-events-none absolute -left-24 -top-24 h-60 w-60 rounded-full bg-brand-pink/20 blur-3xl" />
      {/* <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-brand-pink-deep/10 blur-3xl" /> */}

      <SectionHeading
        eyebrow="Who We Are"
        title="About Us"
        gradient="from-brand-pink via-white to-brand-pink-deep"
      />

      <motion.p
        className="aboutus-text relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Welcome to <span className="highlight">RayPalooza</span>, where
        creativity meets flawless execution. We are a full-service event
        curation and brand marketing company dedicated to turning ideas into
        unforgettable experiences.
      </motion.p>

      <motion.p
        className="aboutus-text relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 1 }}
      >
        From intimate soir&eacute;es to grand-scale extravaganzas, we craft
        moments that matter &mdash; blending strategy, design, and storytelling
        to make every celebration, product launch, or wedding not just seen, but
        remembered. Spanning across India, our work adds a personalized spark to
        every event and elevates brands through meaningful connections.
      </motion.p>

      <motion.span
        className="aboutus-hashtag relative z-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        #Curating
        <wbr />
        Events
        <wbr />
        Amplifying
        <wbr />
        Brands
      </motion.span>

      <a href="#services" className="primary-btn relative z-10">
        Learn More
      </a>
    </section>
  );
}
