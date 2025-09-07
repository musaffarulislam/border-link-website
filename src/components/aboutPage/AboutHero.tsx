// components/AboutHero.tsx
import Link from "next/link";
import Image from "next/image";
import HeroBg from "@/assets/background-image2.jpg"; // Replace with your hero image path
import { Navbar } from "../common/Navbar";

export default function AboutHero() {
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroBg}
            alt="Border Link Cargo & Customs Broker"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
        </div>

        {/* Content */}
        <div className="px-4 md:px-8 text-white max-w-2xl">
          <h1 className="!text-4xl font-bold mb-4">
            About Border Link Cargo & Customs Broker LLC
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Simplifying customs clearance and logistics across Dubai for
            businesses and individuals.
          </p>
          <Link href="/contact">
            <div className="inline-block bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-secondary  transition">
              Contact Us
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
