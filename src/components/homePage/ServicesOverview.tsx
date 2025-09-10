"use client";

import { Truck, FileCheck, Globe, Laptop } from "lucide-react"; // icons
import { motion } from "framer-motion";

const services = [
  {
    title: "Customs Clearance",
    description:
      "Smooth processing for imports & exports across all UAE borders.",
    href: "/services/customs-clearance",
    icon: Truck,
  },
  {
    title: "Approvals & Registrations",
    description: "Dubai Municipality & Ministry approvals made simple.",
    href: "/services/approvals-registrations",
    icon: FileCheck,
  },
  {
    title: "Logistics & Transportation",
    description: "Reliable transport across the UAE & GCC.",
    href: "/services/logistics-transportation",
    icon: Globe,
  },
  {
    title: "E-Services",
    description: "24/7 online support for all customs documentation.",
    href: "/services/e-services",
    icon: Laptop,
  },
];

export default function ServicesOverview() {
  return (
    <section
      id="services"
      className="py-16 lg:py-24 bg-background text-foreground"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Our Core Services
        </h1>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-card rounded-xl p-6 flex flex-col justify-between shadow-md border border-border hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="flex-grow">
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-primary text-white">
                  <service.icon size={24} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

                {/* Description */}
                <p className="text-muted text-sm mb-4">{service.description}</p>
              </div>
              {/* Link */}
              <a
                href={service.href}
                className="text-accent font-medium hover:text-secondary transition"
              >
                Learn More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
