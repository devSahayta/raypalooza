"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import "@/styles/Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <Link href="/">
            <img src="/logo.png" alt="RAY PALOOZA" />
          </Link>
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <motion.nav
          className={`nav ${menuOpen ? "active" : ""}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            "Home",
            "About",
            "Journey",
            "Services",
            "Events",
            "Partnerships",
            "Contact",
          ].map(
            (item, index) => (
              <motion.a
                key={item}
                href={item === "Home" ? "#hero" : `#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                whileHover={{
                  scale: 1.1,
                  color: "#fcd6e3",
                  textShadow: "0 0 8px #fcd6e3",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {item}
              </motion.a>
            ),
          )}
        </motion.nav>
      </div>
    </header>
  );
}
