"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="pt-4 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="relative overflow-hidden rounded-2xl p-10 md:p-14 text-center bg-primary border border-accent/20 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5 pointer-events-none" />

          <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4 relative z-10">
            Looking for a Trusted Customs Clearance Partner in Dubai?
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl mx-auto font-inter relative z-10">
            Get in touch with Border Link for reliable customs clearance and
            logistics solutions.
          </p>
          <motion.div
            className="relative z-10"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-black font-bold text-base hover:bg-secondary transition-colors shadow-lg shadow-accent/25"
            >
              Contact Us Today <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
