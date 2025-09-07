"use client";

import Link from "next/link";
import ServicesFAQ from "./ServicesFAQ"; // FAQ is separate
import { CheckCircle, Shield, Clock } from "lucide-react";

export default function ApprovalsContent() {
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
          Streamlined Approvals & Registration
        </h2>
        <p className="text-gray-300 font-inter">
          Border Link assists businesses with Dubai Municipality and Ministry
          approvals, ensuring all product registrations and legal documentation
          are fully compliant and processed efficiently.
        </p>
      </div>
    </section>
  );
}

// Benefits Section
function Benefits() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Accurate Documentation",
      desc: "Ensure all approvals meet UAE regulations.",
    },
    {
      icon: Shield,
      title: "Compliance Guaranteed",
      desc: "All processes follow Dubai Municipality & Ministry rules.",
    },
    {
      icon: Clock,
      title: "Fast Processing",
      desc: "Minimize delays with efficient handling of applications.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white font-poppins text-center mb-12">
          Why Choose Our Approval Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        Get Hassle-Free Approvals & Registrations Today
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
