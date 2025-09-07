// components/BlogContactCTA.tsx
import Link from "next/link";

export default function FAQContactCTA() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="rounded-lg p-12 text-center shadow-lg bg-primary">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
            Need More Help?
          </h2>

          {/* Subtext */}
          <p className="text-gray-200 text-lg md:text-xl mb-8 font-inter">
            Get in touch with Border Link for personalized support on customs
            clearance and logistics.
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block px-8 py-4 rounded-lg bg-amber-500 text-white font-semibold text-lg transition hover:bg-emerald-500"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </section>
  );
}
