import { Metadata } from "next";
import IndustriesCTA from "@/components/industriesPage/IndustriesCTA";

export const metadata: Metadata = {
  title: "Industries We Serve – Customs Clearance Dubai",
  description:
    "Border Link provides specialized customs clearance and logistics for food cargo, automobiles, industrial machinery, pharmaceuticals, and personal goods across Dubai and the UAE.",
  alternates: { canonical: "https://borderlink.info/industries" },
};
import IndustriesHero from "@/components/industriesPage/IndustriesHero";
import IndustriesSections from "@/components/industriesPage/IndustriesSections";
import React from "react";

const page = () => {
  return (
    <main>
      <IndustriesHero />
      <IndustriesSections />
      <IndustriesCTA />
    </main>
  );
};

export default page;
