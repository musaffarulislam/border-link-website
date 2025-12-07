// components/OfficeHours.tsx
"use client";

import { Clock } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function OfficeHours() {
  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            Office Hours
          </h2>
          <p className="text-gray-300 text-center mb-12 font-inter">
            We are available to assist you during the following times:
          </p>
        </motion.div>

        {/* Hours Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hours.map((item, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="flex flex-col items-center gap-3 p-6 bg-primary/20 rounded-xl shadow hover:scale-105 transition-transform"
            >
              <Clock className="w-8 h-8 text-amber-500" />
              <h3 className="text-lg font-semibold font-poppins text-white">
                {item.day}
              </h3>
              <p className="text-gray-200 font-medium">{item.time}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
