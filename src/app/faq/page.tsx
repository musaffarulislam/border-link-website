import FAQContactCTA from "@/components/faqPage/FAQContactCTA";
import FAQHero from "@/components/faqPage/FAQHero";
import FAQSection from "@/components/faqPage/FAQSection";
import React from "react";

const page = () => {
  return (
    <main>
      <FAQHero />
      <FAQSection />
      <FAQContactCTA />
    </main>
  );
};

export default page;
