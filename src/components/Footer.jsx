"use client";

import { motion } from "framer-motion";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Events", href: "#events" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-brand-pink/20 bg-black px-[8%] py-16">
      <motion.div
        className="mx-auto grid max-w-6xl grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:text-left"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col items-center sm:items-start">
          <img
            src="/logo.png"
            alt="RAY PALOOZA"
            className="h-16 w-auto object-contain"
          />
          <p className="mt-4 text-gray-400">
            Events and Marketing — where imagination meets innovation.
          </p>
          <p className="mt-3 max-w-full wrap-break-word font-semibold text-brand-pink-deep">
            #Curating
            <wbr />
            Events
            <wbr />
            Amplifying
            <wbr />
            Brands
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-brand-pink">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-gray-400 transition hover:text-brand-pink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-brand-pink">Contact Us</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>
              <a
                href="tel:+919229989327"
                className="transition hover:text-brand-pink"
              >
                +91 92299 89327
              </a>
            </li>
            <li>
              <a
                href="mailto:raypaloozaeventsmarketing@gmail.com"
                className="break-all transition hover:text-brand-pink"
              >
                raypaloozaeventsmarketing@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      <p className="mt-12 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} RAY PALOOZA. All Rights Reserved.
      </p>
      <p className="mt-2 text-center text-sm text-gray-500">
        Developed by{" "}
        <a
          href="https://sahayta.co.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold transition hover:text-brand-pink"
        >
          Sahayta
        </a>
      </p>
    </footer>
  );
}
