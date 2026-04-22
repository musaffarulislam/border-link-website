"use client";

import React from "react";
import Image from "next/image";
import BackgroundImage1 from "@/assets/background-image1.jpg";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[580px] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage1}
          alt="Dubai Customs Clearance and Logistics Services - Border Link"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-transparent z-0" />

      {/* Animated rings — hidden on mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none hidden sm:block">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute rounded-full border border-accent/20"
            style={{
              width: `${90 + i * 65}px`,
              height: `${90 + i * 65}px`,
              right: `${6 + i * 7}%`,
              top: `${14 + (i % 3) * 16}%`,
            }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 22 + i * 5, repeat: Infinity, ease: "linear" }}
          />
        ))}
        {[...Array(7)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute rounded-full bg-accent"
            style={{
              width: "3px",
              height: "3px",
              left: `${8 + i * 12}%`,
              top: `${22 + (i % 4) * 14}%`,
            }}
            animate={{ opacity: [0, 0.7, 0], scale: [0.5, 2, 0.5] }}
            transition={{
              duration: 2.8 + i * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main content — takes all remaining height, centres content */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-xs sm:text-sm font-medium mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"
              animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            Dubai&apos;s Trusted Customs &amp; Logistics Partner
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="!text-3xl sm:!text-5xl lg:!text-6xl font-poppins font-bold text-white leading-tight mb-4"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease: "easeOut" }}
          >
            Customs Clearance &{" "}
            <span className="text-accent relative inline-block">
              Logistics Services
              <motion.span
                className="absolute -bottom-1 left-0 h-0.5 bg-accent/60 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 1.1, ease: "easeOut" }}
              />
            </span>
            <span className="block !text-2xl sm:!text-4xl lg:!text-5xl text-white/80 font-semibold mt-1">
              in Dubai &amp; All UAE Borders
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-md"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.48 }}
          >
            Fast, reliable, and professional customs clearance at the Hatta–Dubai
            border and all UAE ports. We simplify cross-border trade for
            businesses of every size.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="mt-8 flex flex-col items-center gap-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
          >
            {/* Row 1 */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-64 sm:w-auto">
              <motion.a
                href="/contact"
                className="w-full sm:w-auto text-center px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-accent text-black font-bold text-sm shadow-lg shadow-accent/25 hover:bg-secondary transition-all duration-200"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get a Free Quote
              </motion.a>
              <motion.a
                href="https://wa.me/971566771884"
                className="w-full sm:w-auto text-center px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-green-500/20 text-green-400 font-bold text-sm border border-green-500/40 hover:bg-green-500/30 transition-all duration-200"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                WhatsApp Us
              </motion.a>
            </div>
            {/* Row 2 */}
            <motion.a
              href="/brochure.pdf"
              download="Border Link Company Profile.pdf"
              className="w-64 sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-xl bg-transparent text-white font-bold text-sm border border-white/30 hover:bg-white/10 transition-all duration-200"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <Download className="w-4 h-4" />
              Download Brochure
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — always pinned to bottom of section via flex */}
      <motion.div
        className="relative z-10 flex flex-col items-center pb-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-white/35 text-xs tracking-widest uppercase mb-1">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-white/35 w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
