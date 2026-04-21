"use client";

import Image from "next/image";
import FoodImg from "@/assets/background-image6.jpg";
import AutoImg from "@/assets/background-image8.jpg";
import EquipmentImg from "@/assets/background-image5.jpg";
import PersonalImg from "@/assets/background-image9.jpg";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Food & Perishables",
    description: "Temperature-controlled cargo clearance.",
    image: FoodImg,
    link: "/industries#food",
  },
  {
    title: "Automotive",
    description: "Vehicle & VCC clearance services.",
    image: AutoImg,
    link: "/industries#automotive",
  },
  {
    title: "Industrial Equipment",
    description: "Oversized and specialized shipments.",
    image: EquipmentImg,
    link: "/industries#equipment",
  },
  {
    title: "Personal Goods",
    description: "Smooth clearance for relocations.",
    image: PersonalImg,
    link: "/industries#personal",
  },
];

export default function IndustriesPreview() {
  return (
    <section id="industries-preview" className="py-20 bg-background text-foreground">
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
            Industries We Serve
          </h2>
          <p className="text-muted max-w-xl mx-auto text-sm">
            Specialized customs clearance solutions for every sector.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.a
              key={index}
              href={industry.link}
              className="group relative overflow-hidden rounded-2xl h-64 cursor-pointer shadow-md block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Full-cover image */}
              <Image
                src={industry.image}
                alt={industry.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-all duration-300 group-hover:from-black/90" />

              {/* Text content pinned to bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-lg mb-1 font-poppins">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {industry.description}
                </p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a
            href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-secondary transition-colors"
          >
            View All Industries <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
