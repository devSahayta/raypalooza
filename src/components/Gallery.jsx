"use client";

import { motion } from "framer-motion";
import "@/styles/Gallery.css";

const images = [
  "/images/01.jpg",
  "/images/1000347830.png",
  "/images/111.jpg",
  "/assets/3d-hand.jpg",
  "/images/01.jpg",
  "/images/111.jpg",
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Gallery <span className="highlight"></span>
      </motion.h2>

      <div className="gallery-grid">
        {images.map((src, i) => (
          <motion.div
            className="gallery-item"
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <img src={src} alt={`Event ${i + 1}`} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
