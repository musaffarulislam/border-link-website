import ContactHero from "@/components/contactPage/ContactHero";
import ContactInfo from "@/components/contactPage/ContactInfo";
import ContactMap from "@/components/contactPage/ContactMap";
import ContactSection from "@/components/homePage/ContactCTA";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Border Link Customs Broker Dubai",
  description:
    "Contact Border Link Cargo & Customs Broker LLC for fast customs clearance, freight forwarding, and logistics across Dubai and UAE. Call, WhatsApp, or email us.",
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
      <section className="max-w-4xl mx-auto px-6 py-12 text-gray-200 font-inter text-base md:text-lg leading-relaxed">
        <h2 className="text-2xl md:text-3xl font-poppins font-bold text-white mb-4">
          Reach Our Customs & Logistics Team in Dubai
        </h2>
        <p className="mb-4">
          Border Link Cargo &amp; Customs Broker LLC is your direct point of
          contact for customs clearance, freight forwarding, and logistics
          services across the UAE and GCC. Our office sits at the Hatta border
          crossing, so we can handle your cargo the moment it arrives.
        </p>
        <p className="mb-4">
          Whether you need a quick quote, help with a stuck shipment, or advice
          on Dubai Municipality approvals, our team is on call seven days a
          week. Call us, send a WhatsApp message, or fill in the contact form
          above. We usually reply within a few business hours.
        </p>
        <p>
          We work with importers, exporters, freight forwarders, and individual
          shippers. No job is too small. Reach out today and let us take the
          stress out of your next shipment.
        </p>
      </section>
    </main>
  );
};

export default page;
