// components/IndustriesHero.tsx
"use client";

import Link from "next/link";
import { Navbar } from "../common/Navbar";
import HeroBg from "@/assets/background-image6.jpg"; // replace with cargo/port bg
import Image from "next/image";

export default function IndustriesHero() {
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroBg}
            alt="Industries We Serve - Customs & Logistics"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" /> {/* Dark overlay */}
        </div>

        <div className="px-4 md:px-8 text-white max-w-3xl">
          <h1 className="!text-4xl md:!text-5xl font-bold mb-4 font-poppins">
            Industries We Serve
          </h1>
          <p className="text-lg md:text-xl mb-6 font-inter">
            At Border Link, we provide specialized customs clearance and
            logistics solutions across diverse industries. From food cargo to
            automobiles, industrial machinery, and personal goods, our expertise
            ensures smooth, compliant, and hassle-free clearance in Dubai and
            across the UAE.
          </p>
          <Link href="/contact">
            <div className="inline-block bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-500 transition">
              Get a Quote
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
