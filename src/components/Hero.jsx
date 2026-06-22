"use client";

import { motion } from "framer-motion";
import "@/styles/Hero.css";

export default function Hero() {
  return (
    <section className="hero-section" id="hero">
      <video
        className="hero-bg-video"
        src="/Video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {"RAY PALOOZA".split("").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, rotateX: 90 },
                visible: {
                  opacity: 1,
                  y: 0,
                  rotateX: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="split-char"
            >
              {char === " " ? " " : char}
            </motion.span>
          ))}
        </motion.h1>

        <p className="hero-subtitle">
          Events and Marketing — where imagination meets innovation.
        </p>
        <button className="hero-btn">Explore Events</button>
      </motion.div>
    </section>
  );
}
