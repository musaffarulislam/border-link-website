// components/OurStory.tsx
import Image from "next/image";
import StoryImage from "@/assets/background-image5.jpg"; // Replace with your image path

export default function OurStory() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-10">
        {/* Left Column: Text */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6">
            Our Story
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-inter">
            Border Link Cargo & Customs Broker LLC was established in Hatta,
            Dubai, with a clear mission: to simplify and streamline customs
            clearance for businesses and individuals. With deep expertise in UAE
            customs regulations and years of operational excellence, we have
            grown into one of Dubai’s trusted partners for smooth import and
            export processes.
          </p>
        </div>

        {/* Right Column: Image */}
        <div className="md:w-1/2 relative w-full h-64 md:h-96">
          <Image
            src={StoryImage}
            alt="Border Link Operations"
            fill
            className="object-cover rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
