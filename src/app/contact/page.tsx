import ContactHero from "@/components/contactPage/ContactHero";
import ContactInfo from "@/components/contactPage/ContactInfo";
import ContactMap from "@/components/contactPage/ContactMap";
import OfficeHours from "@/components/contactPage/OfficeHours";
import ContactForm from "@/components/homePage/ContactForm";
import React from "react";

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
