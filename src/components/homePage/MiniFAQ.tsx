"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How long does customs clearance take?",
    answer:
      "Typically within 24 hours for standard shipments, depending on documentation completeness and inspection requirements.",
  },
  {
    question: "Do you handle all UAE borders?",
    answer:
      "Yes — including Hatta, Dubai Port, and all major UAE entry points. We operate 24/7.",
  },
  {
    question: "Can you assist with approvals and product registration?",
    answer:
      "Absolutely. We handle Dubai Municipality approvals, Ministry clearances, and full product registration services.",
  },
];

export default function MiniFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="mini-faq" className="py-20 bg-primary/10 text-foreground">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Heading */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-muted text-sm">
            Quick answers to the most common customs queries.
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                className={`border rounded-xl overflow-hidden transition-colors duration-200 ${
                  isOpen ? "border-accent/40 bg-background" : "border-border bg-background/50"
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex justify-between items-center w-full px-5 py-4 text-left gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-sm sm:text-base pr-2">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 text-accent" />
                    ) : (
                      <Plus className="w-4 h-4 text-muted" />
                    )}
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-muted text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="/faq"
            className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-secondary transition-colors"
          >
            View All FAQs
          </a>
        </motion.div>
      </div>
    </section>
  );
}
