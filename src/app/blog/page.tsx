import { Metadata } from "next";
import BlogContactCTA from "@/components/blogPage/BlogContactCTA";

export const metadata: Metadata = {
  title: "Blog – Customs Clearance & Logistics Guides Dubai",
  description:
    "Tips, guides, and insights on customs clearance, import/export regulations, freight forwarding, and logistics in Dubai and the UAE.",
  alternates: { canonical: "https://borderlink.info/blog" },
};
import BlogHero from "@/components/blogPage/BlogHero";
import BlogSection from "@/components/blogPage/BlogSection";
import React from "react";

const page = () => {
  return (
    <main>
      <BlogHero />
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-200 font-inter text-base md:text-lg leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-4">
          Customs, Shipping & Logistics Insights from Dubai
        </h2>
        <p className="mb-4">
          Welcome to the Border Link blog. We write practical guides and
          short articles on customs clearance in the UAE, freight forwarding
          at the Hatta border, Dubai Municipality approvals, and the latest
          trade rules you need to know.
        </p>
        <p>
          Our team works with importers, exporters, and freight forwarders
          every day. We share what we learn so you can move cargo faster, stay
          compliant, and avoid common mistakes. New posts go up every month —
          check back often or reach out if there is a topic you would like us
          to cover.
        </p>
      </section>
      <BlogSection />
      <BlogContactCTA />
    </main>
  );
};

export default page;
