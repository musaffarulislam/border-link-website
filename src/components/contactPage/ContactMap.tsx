// components/ContactMap.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8 space-y-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            Visit Our Office
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8 font-inter">
            We are located in the heart of Dubai, easily accessible from all
            major routes. Drop by for consultations or document submissions
            during office hours.
          </p>
        </motion.div>

        {/* Google Map Embed */}
        <motion.div
          className="w-full h-96 rounded-lg overflow-hidden border border-border shadow-md"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <iframe
            title="Border Link Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d55.123456!3d25.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43456789abcdef%3A0xabcdef1234567890!2sBorder%20Link%20Office!5e0!3m2!1sen!2sae!4v1690000000000!5m2!1sen!2sae"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
