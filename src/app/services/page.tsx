import { Metadata } from "next";
import ContactCTA from "@/components/aboutPage/ContactCTA";

export const metadata: Metadata = {
  title: {
    absolute: "Customs & Logistics Services Dubai | Border Link",
  },
  description:
    "Expert customs clearance, freight forwarding, approvals, and logistics across all UAE borders. Fast, reliable, fully compliant.",
  alternates: { canonical: "https://borderlink.info/services" },
};
import WhyChooseUs from "@/components/homePage/WhyChooseUs";
import ClearanceProcess from "@/components/services/ClearanceProcess";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesIntro from "@/components/services/ServicesIntro";

const page = () => {
  return (
    <main>
      <ServicesHero />
      <ServicesIntro />
      <WhyChooseUs />
      <ClearanceProcess />
      <ServicesFAQ />
      <ContactCTA />
    </main>
  );
};

export default page;
