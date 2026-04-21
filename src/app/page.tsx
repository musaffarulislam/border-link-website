import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Customs Clearance & Logistics in Dubai | Border Link",
  description:
    "Border Link Cargo & Customs Broker LLC – Fast, reliable customs clearance at the Hatta–Dubai border and all UAE ports. Expert import/export, freight forwarding, product registration, and land transport services.",
  alternates: { canonical: "https://borderlink.info" },
  keywords: [
    "customs clearance Dubai",
    "customs broker Dubai",
    "Hatta border customs clearance",
    "logistics services UAE",
    "freight forwarding Dubai",
    "import export UAE",
    "Dubai customs agent",
    "product registration Dubai",
    "Dubai Municipality approval",
    "GCC logistics",
    "cross border trade UAE",
  ],
  openGraph: {
    title: "Expert Customs Clearance & Logistics in Dubai | Border Link",
    description:
      "Fast, reliable customs clearance at the Hatta–Dubai border and all UAE ports. We simplify cross-border trade for businesses of every size.",
    url: "https://borderlink.info",
    type: "website",
  },
};

import AboutSection from "@/components/homePage/AboutSection";
import ContactCTA from "@/components/homePage/ContactCTA";
import HeroSection from "@/components/homePage/HeroSection";
import IndustriesPreview from "@/components/homePage/IndustriesPreview";
import MiniFAQ from "@/components/homePage/MiniFAQ";
import ServicesOverview from "@/components/homePage/ServicesOverview";
import Testimonials from "@/components/homePage/Testimonials";
import WhyChooseUs from "@/components/homePage/WhyChooseUs";

export default function Hero() {
  return (
    <main>
      <HeroSection />
      <div className="max-w-screen-xl mx-auto">
        <AboutSection />
        <ServicesOverview />
        <WhyChooseUs />
        <IndustriesPreview />
        <Testimonials />
        <MiniFAQ />
        <ContactCTA />
      </div>
    </main>
  );
}
