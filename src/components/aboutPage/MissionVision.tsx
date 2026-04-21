"use client";

import { Target, Eye } from "lucide-react";
import { motion } from "framer-motion";

const cards = [
  {
    icon: Target,
    title: "Mission",
    body: "Our mission is to expedite customs clearance and logistics operations with accuracy, compliance, and professionalism — enabling our clients to focus on growing their businesses.",
  },
  {
    icon: Eye,
    title: "Vision",
    body: "To become the leading customs clearance partner in Dubai and across the UAE, recognized for reliability, transparency, and exceptional customer service.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="sr-only">Mission &amp; Vision</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                className="relative overflow-hidden rounded-2xl p-8 bg-primary border border-accent/15 shadow-md hover:border-accent/40 transition-colors duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -4 }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 border border-accent/25 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                      <Icon className="w-5 h-5 text-accent group-hover:text-black transition-colors duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white font-poppins">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-base font-inter leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
