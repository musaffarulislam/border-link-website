"use client";

import Link from "next/link";
import { Truck, MapPin, CalendarCheck, Shield } from "lucide-react";
import ServicesFAQ from "../ServicesFAQ";

export default function LogisticsContent() {
  return (
    <div className="space-y-24">
      <Hero />
      <Overview />
      <Benefits />
      <ServicesFAQ />
      <CTA />
    </div>
  );
}

/* ---------------------- Hero Section ---------------------- */
function Hero() {
  return (
    <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
      <div className="px-4 md:px-8 text-white max-w-2xl">
        <h1 className="!text-4xl font-bold mb-4 font-poppins">
          Logistics & Transportation Services
        </h1>
        <p className="text-lg md:text-2xl mb-6 font-inter">
          Reliable land transport, container handling, and
          temperature-controlled cargo across UAE & GCC.
        </p>
        <Link href="/contact">
          <div className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary transition">
            Get a Quote
          </div>
        </Link>
      </div>
    </section>
  );
}

/* ---------------------- Overview Section ---------------------- */
function Overview() {
  return (
    <section className="text-center flex py-16 px-4 md:px-8 items-center justify-center">
      <div className="space-y-4 w-full md:w-3/4 lg:w-2/4">
        <h2 className="text-3xl font-bold font-poppins text-white">
          Seamless Logistics Operations
        </h2>
        <p className="text-gray-300 font-inter">
          Border Link ensures efficient transportation and logistics management
          across UAE & GCC. Our fleet and skilled team handle every shipment
          with care, ensuring timely delivery and full compliance with
          regulations.
        </p>
      </div>
    </section>
  );
}

/* ---------------------- Benefits Section ---------------------- */
function Benefits() {
  const benefits = [
    {
      icon: <MapPin className="w-8 h-8 text-amber-500" />,
      title: "Wide Coverage",
      desc: "Serving UAE and GCC with local & cross-border logistics.",
    },
    {
      icon: <CalendarCheck className="w-8 h-8 text-amber-500" />,
      title: "On-Time Delivery",
      desc: "Ensuring timely delivery with real-time tracking.",
    },
    {
      icon: <Shield className="w-8 h-8 text-amber-500" />,
      title: "Safe & Secure",
      desc: "Temperature-controlled & containerized cargo for protection.",
    },
  ];

  return (
    <section className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 font-poppins text-center">
        Why Choose Our Logistics Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {benefits.map((b, idx) => (
          <div
            key={idx}
            className="bg-primary/20 p-6 rounded-lg text-center shadow hover:scale-105 transition-transform"
          >
            <div className="mb-4 flex justify-center">{b.icon}</div>
            <h3 className="text-xl font-semibold mb-2 font-poppins">
              {b.title}
            </h3>
            <p className="text-gray-200 font-inter">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------- CTA Section ---------------------- */
function CTA() {
  return (
    <section className="py-16 bg-primary rounded-lg mx-4 md:mx-8 text-center">
      <h2 className="text-3xl font-bold mb-4 text-white font-poppins">
        Ready to Move Your Cargo Efficiently?
      </h2>
      <p className="text-gray-200 mb-6 font-inter">
        Contact Border Link today for reliable logistics and transportation
        solutions across UAE & GCC.
      </p>
      <Link href="/contact">
        <div className="inline-block bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-500 transition">
          Contact Us
        </div>
      </Link>
    </section>
  );
}
