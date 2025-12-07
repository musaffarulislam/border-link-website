"use client";

// components/ContactCTA.tsx
import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactCTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="rounded-lg p-12 text-center shadow-lg bg-primary"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
            Looking for a Trusted Customs Clearance Partner in Dubai?
          </h2>

          {/* Subtext */}
          <p className="text-gray-200 text-lg md:text-xl mb-8 font-inter">
            Get in touch with Border Link for reliable customs clearance and
            logistics solutions.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-amber-500 text-white font-semibold text-lg transition hover:bg-emerald-500"
          >
            Contact Us Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
