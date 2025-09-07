// components/CustomsHero.tsx
import Link from "next/link";
import { Navbar } from "../common/Navbar";
import HeroBg from "@/assets/background-image6.jpg";
import Image from "next/image";

interface ICustomHeroProps {
  title: string;
  subtitle: string;
}

export default function CustomsHero({ title, subtitle }: ICustomHeroProps) {
  return (
    <div>
      <Navbar />
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroBg}
            alt="Customs Clearance & Logistics Services Dubai"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/80" /> {/* Dark overlay */}
        </div>
        <div className="absolute inset-0 -z-10 bg-primary/30" /> {/* Overlay */}
        <div className="px-4 md:px-8 text-white max-w-2xl">
          <h1 className="!text-4xl md:!text-5xl font-bold mb-4 font-poppins">
            {title ?? "Customs Clearance in Dubai & UAE Borders"}
          </h1>
          <p className="text-lg md:text-2xl mb-6 font-inter">
            {subtitle ??
              "Fast, reliable, and fully compliant customs clearance services for businesses and individuals."}
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
