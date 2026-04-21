import AboutHero from "@/components/aboutPage/AboutHero";
import ContactCTA from "@/components/aboutPage/ContactCTA";
import MissionVision from "@/components/aboutPage/MissionVision";
import OurStory from "@/components/aboutPage/OurStory";
import TeamExpertise from "@/components/aboutPage/TeamExpertise";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Border Link – Dubai's Trusted Customs Broker",
  description:
    "Learn about Border Link Cargo & Customs Broker LLC – our mission, expert team, and years of experience simplifying customs clearance and logistics at Hatta and all UAE borders.",
  alternates: { canonical: "https://borderlink.info/about" },
  keywords: [
    "about Border Link Dubai",
    "customs broker company UAE",
    "logistics company Dubai",
    "Hatta border customs experts",
    "freight forwarding company UAE",
  ],
};

const page = () => {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <TeamExpertise />
      <ContactCTA />
    </main>
  );
};

export default page;
