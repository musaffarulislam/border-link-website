import IndustriesCTA from "@/components/industriesPage/IndustriesCTA";
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
