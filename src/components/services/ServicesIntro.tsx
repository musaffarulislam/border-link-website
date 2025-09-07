// components/ServicesIntro.tsx
import Link from "next/link";
import { Package, FileText, Truck, Laptop } from "lucide-react"; // Using Lucide icons

const services = [
  {
    title: "Customs Clearance",
    description: "Smooth import/export clearance across UAE borders.",
    href: "/services/customs-clearance",
    icon: Package,
  },
  {
    title: "Approvals & Registrations",
    description: "Dubai Municipality & Ministry approvals simplified.",
    href: "/services/approvals-registrations",
    icon: FileText,
  },
  {
    title: "Logistics & Transportation",
    description:
      "Land transport, container handling, temperature-controlled cargo.",
    href: "/services/logistics-transportation",
    icon: Truck,
  },
  {
    title: "E-Services",
    description: "24/7 online customs support & documentation assistance.",
    href: "/services/e-services",
    icon: Laptop,
  },
];

export default function ServicesIntro() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Intro Paragraph */}
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-4">
          Trusted Customs & Logistics Partner in Dubai
        </h2>
        <p className="text-gray-300 text-lg md:text-xl mb-12 font-inter max-w-2xl mx-auto">
          Border Link Cargo & Customs Broker LLC specializes in seamless customs
          clearance and end-to-end logistics solutions. Our experienced team
          ensures your shipments are processed efficiently and comply with all
          UAE regulations.
        </p>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <Link
                key={idx}
                href={service.href}
                className="group relative rounded-xl p-6 shadow-lg bg-primary cursor-pointer hover:shadow-2xl transform hover:-translate-y-2 transition"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-500 mb-4 mx-auto transition group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white text-center font-poppins mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-200 text-center font-inter">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-4 text-amber-400 text-center font-medium group-hover:text-emerald-400 transition">
                  Learn More →
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 rounded-xl bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
