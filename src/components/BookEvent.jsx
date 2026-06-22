"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import "@/styles/Bookevent.css";

export default function BookEvent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    event: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your event details have been submitted successfully!");
    setFormData({ name: "", email: "", event: "", message: "" });
  };

  return (
    <section className="book-event" id="book-event">
      <motion.div
        className="book-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="book-title">Book Your Event</h2>
        <p className="book-subtext">
          Let&rsquo;s make your celebration unforgettable! Fill in your details below.
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
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 20px #ff00c8",
            }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
