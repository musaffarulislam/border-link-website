"use client";

import { Shield, Clock, Zap, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const uspPoints = [
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Always available to handle urgent shipments and time-sensitive clearances.",
  },
  {
    icon: Shield,
    title: "Expert Team",
    description:
      "Seasoned professionals with deep knowledge of UAE customs regulations.",
  },
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "Minimized delays through efficient documentation and strong authority relationships.",
  },
  {
    icon: Handshake,
    title: "Trusted Partner",
    description:
      "Serving Dubai's import/export community with reliability and transparency.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-3">
            Why Businesses Choose Border Link
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm">
            We make customs clearance simple, fast, and stress-free.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {uspPoints.map((usp, index) => (
            <motion.div
              key={index}
              className="group bg-primary/30 border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon row with step number */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-accent/15 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-black transition-all duration-300 flex-shrink-0">
                  <usp.icon size={20} />
                </div>
                <span className="text-2xl font-black text-accent/30 leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div>
                <h3 className="font-bold text-base font-poppins mb-2">
                  {usp.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
