"use client";

import Image from "next/image";
import AboutImage from "@/assets/background-image2.jpg";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-16 lg:py-24 bg-background text-foreground"
    >
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-muted leading-relaxed mb-6">
            Border Link Cargo & Customs Broker LLC is a Dubai-based company
            specializing in customs clearance and logistics solutions. With a
            team of experienced professionals and up-to-date knowledge of UAE
            regulations, we ensure your shipments are processed efficiently and
            without delays.
          </p>
          <a
            href="/about"
            className="inline-block px-6 py-3 rounded-lg bg-accent text-black font-semibold shadow-lg hover:bg-secondary transition"
          >
            Learn More
          </a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative w-full h-80 md:h-[400px] rounded-2xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src={AboutImage}
            alt="Border Link Team at Hatta Border"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
