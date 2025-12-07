"use client";

// components/MissionVision.tsx
import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionVision() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <h2 className="sr-only">Mission & Vision</h2>

        {/* Cards Container */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Mission Card */}
          <motion.div
            className="md:w-1/2 rounded-lg p-8 shadow-lg bg-primary transform transition hover:-translate-y-2 hover:shadow-2xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Target className="text-amber-500 w-8 h-8 mr-3" />
              <h3 className="text-2xl font-semibold text-white font-poppins">
                Mission
              </h3>
            </div>
            <p className="text-gray-200 text-lg font-inter">
              Our mission is to expedite customs clearance and logistics
              operations with accuracy, compliance, and professionalism —
              enabling our clients to focus on growing their businesses.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="md:w-1/2 rounded-lg p-8 shadow-lg bg-primary transform transition hover:-translate-y-2 hover:shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <Eye className="text-amber-500 w-8 h-8 mr-3" />
              <h3 className="text-2xl font-semibold text-white font-poppins">
                Vision
              </h3>
            </div>
            <p className="text-gray-200 text-lg font-inter">
              To become the leading customs clearance partner in Dubai and
              across the UAE, recognized for reliability, transparency, and
              exceptional customer service.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
