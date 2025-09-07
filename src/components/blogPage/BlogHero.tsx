// components/BlogHero.tsx
import Link from "next/link";
import Image from "next/image";
import HeroBg from "@/assets/background-image6.jpg"; // Replace with your blog hero image
import { Navbar } from "../common/Navbar";

interface IBlogHeroProps {
  title?: string;
  subtitle?: string;
}

export default function BlogHero({ title, subtitle }: IBlogHeroProps) {
  return (
    <div>
      <Navbar />

      <section className="relative w-full h-[50vh] flex items-center justify-center text-center">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={HeroBg}
            alt="Blog & Resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/70" /> {/* Dark overlay */}
        </div>

        <div className="px-4 md:px-8 text-white max-w-3xl">
          <h1 className="!text-4xl md:!text-5xl font-bold mb-4 font-poppins">
            {title ?? "Blog & Resources"}
          </h1>
          <p className="text-lg md:text-2xl mb-6 font-inter">
            {subtitle ??
              "Stay updated with the latest guides, tips, and insights on customs clearance and importing goods in Dubai and UAE."}
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
