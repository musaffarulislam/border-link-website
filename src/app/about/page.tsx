import AboutHero from "@/components/aboutPage/AboutHero";
import ContactCTA from "@/components/aboutPage/ContactCTA";
import MissionVision from "@/components/aboutPage/MissionVision";
import OurStory from "@/components/aboutPage/OurStory";
import TeamExpertise from "@/components/aboutPage/TeamExpertise";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn more about Border Link, our mission, and our experienced team.",
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
