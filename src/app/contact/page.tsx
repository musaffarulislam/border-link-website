import ContactHero from "@/components/contactPage/ContactHero";
import ContactInfo from "@/components/contactPage/ContactInfo";
import ContactMap from "@/components/contactPage/ContactMap";
import OfficeHours from "@/components/contactPage/OfficeHours";
import ContactForm from "@/components/homePage/ContactForm";
import React from "react";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Border Link for customs clearance and logistics services.",
};

const page = () => {
  return (
    <main className="space-y-16">
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactInfo />
      <OfficeHours />
    </main>
  );
};

export default page;
