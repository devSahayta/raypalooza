"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  gradient = "from-brand-pink via-white to-brand-gold",
}) {
  return (
    <div className="relative z-10 mx-auto mb-14 max-w-2xl text-center">
      <motion.div
        className="mb-4 flex items-center justify-center gap-3 text-brand-gold"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Sparkles className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-[0.25em]">
          {eyebrow}
        </span>
        <Sparkles className="h-4 w-4" />
      </motion.div>

      <motion.h2
        className={`section-title inline-block bg-linear-to-r ${gradient} bg-clip-text text-transparent!`}
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          className="mt-4 text-lg italic text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
