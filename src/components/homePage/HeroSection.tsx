import React from "react";
import Image from "next/image";
import BackgroundImage1 from "@/assets/background-image1.jpg";
import { Navbar } from "../common/Navbar";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={BackgroundImage1}
          alt="Background"
          fill
          priority
          className="object-cover opacity-50"
        />
      </div>

      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Navbar on top */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <Navbar />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="!text-3xl lg:!text-5xl font-poppins font-bold text-white">
          Customs Clearance & Logistics Services in Dubai
        </h1>
        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Fast, reliable, and professional customs clearance at the Hatta–Dubai
          border and all UAE borders.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 rounded-xl bg-accent text-black font-semibold shadow-lg hover:bg-secondary transition"
          >
            Get a Quote
          </a>
          <a
            href="https://wa.me/971566771884"
            className="px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-lg hover:bg-secondary transition"
          >
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
