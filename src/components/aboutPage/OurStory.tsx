"use client";

// components/OurStory.tsx
import Image from "next/image";
import StoryImage from "@/assets/background-image5.jpg"; // Replace with your image path
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left Column: Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-inter">
            Border Link Cargo & Customs Broker LLC was established in Hatta,
            Dubai, with a clear mission: to simplify and streamline customs
            clearance for businesses and individuals. With deep expertise in UAE
            customs regulations and years of operational excellence, we have
            grown into one of Dubai’s trusted partners for smooth import and
            export processes.
          </p>
        </motion.div>

        {/* Right Column: Image */}
        <motion.div
          className="md:w-1/2 relative w-full h-64 md:h-96"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Image
            src={StoryImage}
            alt="Border Link Operations"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
