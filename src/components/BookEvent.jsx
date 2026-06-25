"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/Bookevent.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mbdvgjjp";

export default function BookEvent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", event: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="book-event" id="contact">
      <motion.div
        className="book-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="book-title">Book Your Event</h2>
        <p className="book-subtext">
          Let&rsquo;s make your celebration unforgettable! Fill in your details
          below.
        </p>

        <form className="book-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              name="event"
              placeholder="Event Type (e.g., Wedding, Corporate)"
              value={formData.event}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Your Message or Event Details"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              required
            ></textarea>
          </div>

          <motion.button
            type="submit"
            className="book-btn"
            disabled={status === "sending"}
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px #ee93bf",
            }}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>

          {status === "success" && (
            <p className="rounded-lg border border-brand-pink/40 bg-brand-pink/10 px-4 py-3 text-sm font-semibold text-brand-pink">
              Thanks! Your event details have been sent — we&rsquo;ll be in
              touch soon.
            </p>
          )}
          {status === "error" && (
            <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400">
              Something went wrong. Please try again or reach us directly at +91
              80920 90090.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
}
