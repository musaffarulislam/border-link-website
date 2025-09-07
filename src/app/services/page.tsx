import ContactCTA from "@/components/aboutPage/ContactCTA";
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
