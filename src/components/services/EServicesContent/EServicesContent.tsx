"use client";

import Link from "next/link";
import { Globe, Clock, CheckCircle, FileText } from "lucide-react";
import ServicesFAQ from "../ServicesFAQ";

export default function EServicesContent() {
  return (
    <div className="space-y-24">
      <Overview />
      <Benefits />
      <ServicesFAQ />
      <CTA />
    </div>
  );
}

// Overview Section
function Overview() {
  return (
    <section className="text-center flex py-16 px-4 md:px-8 items-center justify-center">
      <div className="space-y-4 w-full md:w-3/4 lg:w-2/4">
        <h2 className="text-3xl font-bold font-poppins text-white">
          Seamless Online Customs Support
        </h2>
        <p className="text-gray-300 font-inter">
          Our E-Services platform allows businesses and individuals to submit
          documents, track shipments, and communicate with our customs experts
          anytime. Experience faster approvals and minimized errors with our
          secure online system.
        </p>
      </div>
    </section>
  );
}

// Benefits Section
function Benefits() {
  const benefits = [
    {
      icon: Globe,
      title: "Global Access",
      desc: "Manage your customs and logistics operations from anywhere.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      desc: "Track shipments and submit requests at any time.",
    },
    {
      icon: CheckCircle,
      title: "Accurate Processing",
      desc: "Reduce errors with step-by-step online guidance.",
    },
    {
      icon: FileText,
      title: "Documentation Assistance",
      desc: "Upload, verify, and manage all required customs documents digitally.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white font-poppins text-center mb-12">
          Why Choose Our E-Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="bg-primary/20 p-6 rounded-lg shadow hover:scale-105 transition"
            >
              <item.icon className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-16 bg-primary rounded-lg mx-4 md:mx-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white font-poppins">
        Experience Hassle-Free Online Customs Management
      </h2>
      <p className="text-gray-200 mb-6 font-inter">
        Get started with our E-Services platform and simplify your customs
        clearance process today.
      </p>
      <Link href="/contact">
        <div className="inline-block bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-500 transition">
          Contact Us Today
        </div>
      </Link>
    </section>
  );
}
