"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does customs clearance take?",
    answer: "Typically within 24 hours, depending on documentation.",
  },
  {
    question: "Do you handle all UAE borders?",
    answer: "Yes, including Hatta, Dubai, and other entry points.",
  },
  {
    question: "Can you assist with approvals?",
    answer:
      "Yes, we handle Dubai Municipality, Ministry, and product registrations.",
  },
];

export default function MiniFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="mini-faq" className="py-20 bg-card text-foreground">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg shadow-sm bg-background"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Animate answer with Framer Motion */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 pb-4 text-muted text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA to full FAQ page */}
        <div className="mt-8 text-center">
          <a
            href="/faq"
            className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-secondary transition"
          >
            View All FAQs
          </a>
        </div>
      </div>
    </section>
  );
}
