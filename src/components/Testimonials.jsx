"use client";

import { motion } from "framer-motion";
import "@/styles/Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    feedback:
      "Ray Palooza made my wedding magical! Every detail was perfect — elegant and dreamy.",
  },
  {
    name: "Rahul Verma",
    feedback:
      "Our corporate event was next level! Amazing stage setup and flawless management.",
  },
  {
    name: "Aisha Khan",
    feedback:
      "Loved the energy they bring! The lighting and vibe made the party unforgettable!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonials">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Client Testimonials <span className="highlight"> </span>
      </motion.h2>

      <div className="testimonials-container">
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-card"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.3, duration: 0.6 }}
          >
            <p>&quot;{t.feedback}&quot;</p>
            <h4>- {t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
