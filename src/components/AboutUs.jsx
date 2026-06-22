"use client";

import { motion } from "framer-motion";
import "@/styles/AboutUs.css";

export default function AboutUs() {
  return (
    <section className="aboutus-section" id="about">
      <motion.h2
        className="section-title"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        ABOUT US
      </motion.h2>

      <motion.p
        className="aboutus-text"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Welcome to <span className="highlight">RayPalooza</span>, where
        creativity meets flawless execution. We are a full-service event
        curation and brand marketing company dedicated to turning ideas into
        unforgettable experiences.
      </motion.p>

      <button className="primary-btn">Learn More</button>
    </section>
  );
}
