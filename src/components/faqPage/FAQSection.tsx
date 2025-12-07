// components/FAQSection.tsx
"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What documents are needed for customs clearance in Dubai?",
    answer:
      "Required documents include commercial invoices, packing lists, permits, certificates of origin, and any specialized approvals depending on cargo type.",
  },
  {
    question: "How long does clearance take at the Hatta border?",
    answer:
      "Typically within 24–48 hours for standard shipments, depending on documentation and cargo type.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "Costs vary based on cargo type, customs duties, and handling fees. Contact us for a detailed quote.",
  },
  {
    question: "Do you offer GCC-wide clearance?",
    answer:
      "Yes, we provide customs clearance and logistics solutions across the UAE and GCC countries.",
  },
  {
    question: "Can I track my shipment online?",
    answer:
      "Yes, our 24/7 E-Services platform allows you to track and manage your shipment in real-time.",
  },
  {
    question: "Do you handle perishable goods?",
    answer:
      "Absolutely. We provide cold chain logistics for food and perishables to maintain freshness.",
  },
  {
    question: "How do I get Dubai Municipality approval?",
    answer:
      "Our team assists with product registration and submission of required forms for Dubai Municipality approval.",
  },
  {
    question: "What is the process for vehicle import?",
    answer:
      "We handle all permits, RTA compliance checks, and customs clearance for vehicles, spare parts, and heavy equipment.",
  },
  {
    question: "Do you provide document verification services?",
    answer:
      "Yes, we verify all shipping and customs documents to ensure compliance and reduce clearance delays.",
  },
  {
    question: "Are hazardous materials handled?",
    answer:
      "Yes, but special permits and safety regulations apply. Contact us to discuss your specific cargo.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept bank transfers, credit/debit cards, and corporate invoicing for regular clients.",
  },
  {
    question: "Can I clear cargo on my own?",
    answer:
      "While possible, it’s often faster and more secure to use professional customs services like Border Link.",
  },
  {
    question: "Do you assist with bulk shipments?",
    answer:
      "Yes, we handle LCL, FCL, and large-volume shipments across UAE ports.",
  },
  {
    question: "How do I contact your support team?",
    answer:
      "You can reach us via our website, email, or phone. Our team is available 24/7 for queries.",
  },
  {
    question: "Is insurance required for customs clearance?",
    answer:
      "Insurance is recommended for high-value cargo. We can guide you on options and requirements.",
  },
  {
    question: "How do I calculate customs duty?",
    answer:
      "Duty depends on HS codes, cargo type, and CIF value. Our team can provide accurate calculations.",
  },
  {
    question: "Can you handle e-commerce shipments?",
    answer:
      "Yes, we provide customs clearance for e-commerce goods, including small parcels and bulk shipments.",
  },
  {
    question: "What are the restricted items?",
    answer:
      "Certain chemicals, pharmaceuticals, and regulated goods require permits. We advise before shipment to ensure compliance.",
  },
  {
    question: "Do you offer expedited clearance?",
    answer:
      "Yes, we provide priority services for urgent shipments at additional cost.",
  },
  {
    question: "Can you assist with free zone imports?",
    answer:
      "Absolutely. We manage clearance and logistics for cargo entering UAE free zones efficiently.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section id="faq" className="py-20 bg-card text-foreground">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="border border-border rounded-lg shadow-sm bg-background"
              variants={itemVariants}
            >
              <button
                onClick={() => toggleFAQ(idx)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <span className="font-medium">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === idx && (
                <div className="px-4 pb-4 text-muted text-sm">{faq.answer}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
