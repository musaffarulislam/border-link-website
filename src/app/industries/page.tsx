import { Metadata } from "next";
import IndustriesCTA from "@/components/industriesPage/IndustriesCTA";

export const metadata: Metadata = {
  title: "Industries We Serve – Customs Clearance Dubai",
  description:
    "Border Link provides specialized customs clearance for food, automobiles, machinery, pharmaceuticals, and personal goods across Dubai and the UAE.",
  alternates: { canonical: "https://borderlink.info/industries" },
};
import IndustriesHero from "@/components/industriesPage/IndustriesHero";
import IndustriesSections from "@/components/industriesPage/IndustriesSections";
import React from "react";

const page = () => {
  return (
    <main>
      <IndustriesHero />
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-200 font-inter text-base md:text-lg leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-4">
          Specialist Customs Clearance Across Every Major Industry
        </h2>
        <p className="mb-4">
          Different cargo means different rules. Border Link has cleared
          thousands of shipments across food, vehicles, machinery, personal
          effects, and general trade goods. We know the documents, the
          permits, and the inspection steps for each.
        </p>
        <p>
          Below you will find the industries we serve most often. If your
          goods do not fit one of these, just ask — chances are we have
          handled it before.
        </p>
      </section>
      <IndustriesSections />
      <IndustriesCTA />
    </main>
  );
};

export default page;
