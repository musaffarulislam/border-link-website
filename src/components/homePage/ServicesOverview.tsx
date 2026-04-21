"use client";

import { Truck, FileCheck, Globe, Laptop, ArrowRight } from "lucide-react";
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
    <section id="services" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-3">
            Our Core Services
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm">
            End-to-end customs clearance and logistics solutions across Dubai
            and the UAE.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.href}
              className="group relative bg-primary/40 border border-border rounded-2xl p-6 flex flex-col gap-4 hover:border-accent/40 hover:bg-primary/60 transition-all duration-300 shadow-sm hover:shadow-accent/10 hover:shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <motion.div
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-accent/15 text-accent border border-accent/20 group-hover:bg-accent group-hover:text-black transition-all duration-300"
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
              >
                <service.icon size={22} />
              </motion.div>

              {/* Title */}
              <h3 className="text-base font-bold text-foreground font-poppins">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Link */}
              <span className="inline-flex items-center gap-1 text-accent text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                Learn More <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
