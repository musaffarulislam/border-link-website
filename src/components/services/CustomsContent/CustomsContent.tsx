// app/services/[serviceSlug]/CustomsContent.tsx
"use client";

import Link from "next/link";
import { CheckCircle, Shield, Clock, FileText } from "lucide-react";
import ServicesFAQ from "../ServicesFAQ";

export default function CustomsContent() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="space-y-4">
        <Overview />
        <Benefits />
        <ServicesFAQ />
        <CTA />
      </div>
    </div>
  );
}

/* --------------------------------- */
/* Subcomponents for CustomsContent  */
/* --------------------------------- */

function Overview() {
  return (
    <section className="text-center flex py-16 px-4 md:px-8 items-center justify-center">
      <div className="space-y-4  w-full md:w-3/4 lg:w-2/4">
        <h2 className="text-3xl font-bold font-poppins text-white">
          Seamless Customs Clearance Process
        </h2>
        <p className="text-gray-300 font-inter">
          Border Link ensures every shipment is processed efficiently, following
          UAE customs regulations. We handle documentation, approvals, and
          clearance, minimizing delays and compliance risks.
        </p>
      </div>
    </section>
  );
}

function Benefits() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Accurate Documentation",
      description: "Ensure all paperwork is precise and complete.",
    },
    {
      icon: Clock,
      title: "Fast Processing Times",
      description: "Minimize delays and expedite clearance.",
    },
    {
      icon: Shield,
      title: "Compliance Guaranteed",
      description: "Full adherence to UAE customs regulations.",
    },
    {
      icon: FileText,
      title: "Expert Support",
      description: "Professional guidance for import/export operations.",
    },
  ];

  return (
    <section className="py-16 container mx-auto px-4 md:px-8">
      <h2 className="text-3xl font-bold font-poppins text-white text-center mb-12">
        Why Choose Our Customs Clearance Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="bg-card p-6 rounded-xl shadow-lg hover:scale-105 transition"
          >
            <b.icon className="w-12 h-12 text-amber-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">{b.title}</h3>
            <p className="text-gray-300 font-inter">{b.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 bg-primary rounded-lg mx-4 md:mx-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white font-poppins">
        Get Hassle-Free Customs Clearance Today
      </h2>
      <p className="text-gray-200 mb-6 font-inter">
        Contact Border Link for fast, reliable, and compliant customs clearance
        solutions across Dubai and UAE borders.
      </p>
      <Link href="/contact">
        <div className="inline-block bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-500 transition">
          Contact Us Today
        </div>
      </Link>
    </section>
  );
}
