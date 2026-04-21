"use client";

import Link from "next/link";
import Image from "next/image";
import HeroBg from "@/assets/background-image6.jpg";
import { motion } from "framer-motion";

export default function FAQHero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[480px] flex items-center justify-center text-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={HeroBg}
          alt="Frequently Asked Questions - Border Link"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/40 via-transparent to-transparent" />

      {/* Content */}
      <div className="px-4 md:px-8 text-white max-w-3xl relative z-10">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-xs sm:text-sm font-medium mb-5"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-accent flex-shrink-0"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
          Common Customs & Logistics Questions
        </motion.div>

        <motion.h1
          className="!text-4xl md:!text-5xl font-bold mb-4 font-poppins leading-tight"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Frequently Asked{" "}
          <span className="text-accent relative inline-block">
            Questions
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-accent/60 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
            />
          </span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-white/85 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Get answers to common queries on customs clearance, import/export processes, and GCC-wide logistics.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/contact">
            <motion.div
              className="inline-block bg-accent text-black px-8 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-accent/25 hover:bg-secondary transition-colors"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Get a Free Quote
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
