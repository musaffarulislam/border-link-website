// components/WhyChooseUs.tsx
import { Users, Clock, Truck, Headphones } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    description: "Experienced professionals with deep UAE customs knowledge.",
    icon: Users,
  },
  {
    title: "Fast Clearance",
    description: "Minimized delays with accurate documentation.",
    icon: Clock,
  },
  {
    title: "Reliable Logistics",
    description: "Efficient transport across UAE & GCC.",
    icon: Truck,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock online assistance for critical shipments.",
    icon: Headphones,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-primary/20">
      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-12">
          Why Businesses Trust Border Link
        </h2>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-xl p-6 shadow-lg bg-primary hover:bg-primary/80 transition transform hover:-translate-y-2 cursor-pointer"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-500 mb-4 mx-auto transition group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 font-poppins">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 font-inter">
                  {feature.description}
                </p>

                {/* Optional Hover Overlay */}
                <div className="absolute inset-0 rounded-xl bg-black/10 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
