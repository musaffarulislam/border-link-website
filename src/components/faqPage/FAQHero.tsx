// components/FAQHero.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import HeroBg from "@/assets/background-image6.jpg"; // Replace with your blog hero image
import { Navbar } from "../common/Navbar";
import { motion } from "framer-motion";

export default function FAQHero() {
  return (
    <div>
      <Navbar />

      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroBg}
            alt="Blog & Resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
        </div>

        <motion.div
          className="px-4 md:px-8 text-white max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="!text-4xl md:!text-5xl font-bold mb-4 font-poppins">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-2xl mb-6 font-inter">
            Get answers to common queries on customs clearance, import/export
            processes, and GCC-wide logistics.
          </p>
          <Link href="/contact">
            <div className="inline-block bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-500 transition">
              Get a Quote
            </div>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
