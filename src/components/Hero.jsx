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
        <motion.img
          src="/logo-transparentbg.png"
          alt="Ray Palooza"
          className="hero-logo"
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />

        <motion.p
          className="hero-hashtag"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          #Curating
          <wbr />
          Events
          <wbr />
          Amplifying
          <wbr />
          Brands
        </motion.p>

        <button
          className="hero-btn"
          onClick={() => (window.location.href = "#events")}
        >
          Explore Events
        </button>
      </motion.div>
    </section>
  );
}
