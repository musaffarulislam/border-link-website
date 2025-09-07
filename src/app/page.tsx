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
