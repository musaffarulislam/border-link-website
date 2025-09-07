// components/IndustriesCTA.tsx
import Link from "next/link";

export default function IndustriesCTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="rounded-lg p-12 text-center shadow-lg bg-primary">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
            Need Industry-Specific Clearance Support?
          </h2>

          {/* Subtext */}
          <p className="text-gray-200 text-lg md:text-xl mb-8 font-inter">
            Border Link offers customized solutions for businesses and
            individuals across multiple industries in Dubai and UAE. Get in
            touch today to ensure your cargo moves without delays.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-amber-500 text-white font-semibold text-lg transition hover:bg-emerald-500"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
