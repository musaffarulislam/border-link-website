import { Metadata } from "next";
import FAQContactCTA from "@/components/faqPage/FAQContactCTA";
import FAQHero from "@/components/faqPage/FAQHero";
import FAQSection from "@/components/faqPage/FAQSection";
import React from "react";

export const metadata: Metadata = {
  title: "FAQ – Customs Clearance & Logistics Dubai",
  description:
    "Answers to frequently asked questions about customs clearance, import/export processes, freight forwarding, and logistics across Dubai and the UAE.",
  alternates: { canonical: "https://borderlink.info/faq" },
  keywords: [
    "customs clearance FAQ Dubai",
    "UAE import export questions",
    "Hatta border customs FAQ",
    "freight forwarding Dubai questions",
    "logistics UAE help",
  ],
};

// FAQ rich snippet — eligible for Google FAQ rich results in SERPs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What documents are needed for customs clearance in Dubai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Required documents include commercial invoices, packing lists, permits, certificates of origin, and any specialized approvals depending on cargo type.",
      },
    },
    {
      "@type": "Question",
      name: "How long does clearance take at the Hatta border?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Typically within 24–48 hours for standard shipments, depending on documentation and cargo type.",
      },
    },
    {
      "@type": "Question",
      name: "What are the costs involved?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Costs vary based on cargo type, customs duties, and handling fees. Contact us for a detailed quote.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer GCC-wide clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide customs clearance and logistics solutions across the UAE and GCC countries.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track my shipment online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, our 24/7 E-Services platform allows you to track and manage your shipment in real-time.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get Dubai Municipality approval?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our team assists with product registration and submission of required forms for Dubai Municipality approval.",
      },
    },
    {
      "@type": "Question",
      name: "What is the process for vehicle import?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle all permits, RTA compliance checks, and customs clearance for vehicles, spare parts, and heavy equipment.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer expedited clearance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide priority services for urgent shipments at additional cost.",
      },
    },
    {
      "@type": "Question",
      name: "Can you handle e-commerce shipments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we provide customs clearance for e-commerce goods, including small parcels and bulk shipments.",
      },
    },
    {
      "@type": "Question",
      name: "Can you assist with free zone imports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We manage clearance and logistics for cargo entering UAE free zones efficiently.",
      },
    },
  ],
};

const page = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQHero />
      <FAQSection />
      <FAQContactCTA />
    </main>
  );
};

export default page;
