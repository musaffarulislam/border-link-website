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
      <BlogSection />
      <BlogContactCTA />
    </main>
  );
};

export default page;
