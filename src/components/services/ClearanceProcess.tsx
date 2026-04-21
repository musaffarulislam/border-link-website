"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  "Documentation Review",
  "Submission to Customs",
  "Inspection (if needed)",
  "Clearance Approval",
  "Delivery & Handover",
];

export default function ClearanceProcess() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-3">
            Our Clearance Process
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            A streamlined, transparent process from start to finish.
          </p>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden md:flex items-start justify-between relative gap-4">
          {/* Connector line */}
          <motion.div
            className="absolute top-7 left-[7%] right-[7%] h-0.5 bg-gradient-to-r from-accent/30 via-accent to-accent/30"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{ transformOrigin: "left" }}
          />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center flex-1 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + idx * 0.15 }}
            >
              {/* Circle */}
              <motion.div
                className="w-14 h-14 flex items-center justify-center rounded-full bg-accent text-black text-lg font-bold mb-4 shadow-lg shadow-accent/30"
                whileHover={{ scale: 1.1 }}
              >
                {idx + 1}
              </motion.div>

              {/* Label */}
              <p className="text-white text-sm text-center font-medium max-w-[100px] leading-snug">
                {step}
              </p>

              {/* Check icon */}
              <CheckCircle2 className="w-5 h-5 text-secondary mt-2" />
            </motion.div>
          ))}
        </div>

        {/* Mobile vertical steps */}
        <div className="md:hidden flex flex-col gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-4 bg-primary/20 border border-border rounded-xl p-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-accent text-black font-bold text-sm shadow-md shadow-accent/20">
                {idx + 1}
              </div>
              <p className="text-white text-sm font-medium">{step}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
