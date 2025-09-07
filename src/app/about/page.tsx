import AboutHero from "@/components/aboutPage/AboutHero";
import ContactCTA from "@/components/aboutPage/ContactCTA";
import MissionVision from "@/components/aboutPage/MissionVision";
import OurStory from "@/components/aboutPage/OurStory";
import TeamExpertise from "@/components/aboutPage/TeamExpertise";
import React from "react";

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
