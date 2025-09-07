// components/ContactHero.tsx
import Link from "next/link";
import Image from "next/image";
import HeroBg from "@/assets/background-image8.jpg"; // Replace with your hero image path
import { Navbar } from "../common/Navbar";

export default function ContactHero() {
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[60vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroBg}
            alt="Contact Border Link for Customs Clearance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
        </div>

        {/* Text Content */}
        <div className="px-4 md:px-8 text-white max-w-3xl">
          <h1 className="!text-4xl md:!text-5xl font-bold mb-4 font-poppins">
            Get in Touch with Border Link
          </h1>
          <p className="text-lg md:text-2xl mb-6 font-inter">
            We’re here to assist you with all your customs clearance, logistics,
            and approvals. Reach out today for expert guidance and hassle-free
            services across Dubai and UAE borders.
          </p>

          {/* CTA Button */}
          <Link href="#contact-form">
            <div className="inline-block bg-amber-500 text-white px-6 py-3 rounded-md font-medium hover:bg-emerald-500 transition">
              Submit Inquiry
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
