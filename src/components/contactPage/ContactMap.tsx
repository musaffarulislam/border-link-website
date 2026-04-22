"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Clock } from "lucide-react";
import Link from "next/link";

export default function ContactMap() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3 font-inter">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-3">
            Visit Our Office
          </h2>
          <p className="text-zinc-400 font-inter max-w-md mx-auto text-sm">
            Located in Hatta, Dubai — easily accessible from all major routes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white font-poppins">Address</h3>
              </div>
              <p className="text-zinc-400 text-sm font-inter leading-relaxed">
                Shop no.29, Hatta Souq &amp; Guest House,<br />
                Hatta, Dubai, UAE
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-sm font-bold text-white font-poppins">Office Hours</h3>
              </div>
              <div className="space-y-1.5 text-sm font-inter">
                <div className="flex justify-between text-zinc-400">
                  <span>Mon – Fri</span>
                  <span className="text-white font-medium">8:00 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Saturday</span>
                  <span className="text-white font-medium">9:00 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Sunday</span>
                  <span className="text-rose-400 font-medium">Closed</span>
                </div>
              </div>
            </div>

            <Link
              href="https://www.google.com/maps/place/Hatta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-semibold px-5 py-3.5 rounded-2xl transition-all duration-200 text-sm"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </Link>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true, amount: 0 }}
            className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl"
            style={{ minHeight: "400px" }}
          >
            <iframe
              title="Border Link Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d55.123456!3d25.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43456789abcdef%3A0xabcdef1234567890!2sBorder%20Link%20Office!5e0!3m2!1sen!2sae!4v1690000000000!5m2!1sen!2sae"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px", filter: "grayscale(20%) contrast(1.05)" }}
              allowFullScreen
              loading="lazy"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
