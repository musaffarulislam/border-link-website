import ContactHero from "@/components/contactPage/ContactHero";
import ContactInfo from "@/components/contactPage/ContactInfo";
import ContactMap from "@/components/contactPage/ContactMap";
import ContactSection from "@/components/homePage/ContactCTA";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Border Link – Customs Clearance Dubai",
  description:
    "Contact Border Link Cargo & Customs Broker LLC for fast customs clearance, freight forwarding, and logistics across Dubai and UAE borders. Call, WhatsApp, or email us.",
  alternates: { canonical: "https://borderlink.info/contact" },
  keywords: [
    "contact customs broker Dubai",
    "Border Link contact",
    "customs clearance inquiry UAE",
    "freight forwarding quote Dubai",
    "logistics help UAE",
  ],
};

const page = () => {
  return (
    <main className="space-y-16">
      <ContactHero />
      <ContactSection />
      <ContactMap />
      <ContactInfo />
    </main>
  );
};

export default page;
