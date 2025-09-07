import Image from "next/image";
import SupportImg from "@/assets/background-image3.jpg"; // replace with your square images
import TeamImg from "@/assets/background-image4.jpg";
import ProcessImg from "@/assets/background-image5.jpg";
import PartnerImg from "@/assets/background-image6.jpg";

const uspPoints = [
  {
    title: "24/7 Support",
    description: "Always available to handle urgent shipments.",
    image: SupportImg,
  },
  {
    title: "Expert Team",
    description: "Decades of combined customs clearance experience.",
    image: TeamImg,
  },
  {
    title: "Fast Processing",
    description: "Minimized delays with efficient documentation.",
    image: ProcessImg,
  },
  {
    title: "Trusted Partner",
    description: "Serving Dubai’s logistics industry for years.",
    image: PartnerImg,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-16 bg-card text-foreground">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Why Businesses Choose Border Link
        </h2>

        {/* 2x2 Grid */}
        <div className="grid gap-10 md:grid-cols-2">
          {uspPoints.map((usp, index) => (
            <div
              key={index}
              className="flex items-center gap-6 bg-background rounded-xl p-6 shadow-md border border-border hover:shadow-lg transition"
            >
              {/* Bigger Square Image */}
              <div className="w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={usp.image}
                  alt={usp.title}
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-xl font-semibold mb-2">{usp.title}</h3>
                <p className="text-muted text-base">{usp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
