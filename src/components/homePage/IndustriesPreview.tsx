"use client";

import Image from "next/image";
import FoodImg from "@/assets/background-image6.jpg"; // replace with your images
import AutoImg from "@/assets/background-image8.jpg";
import EquipmentImg from "@/assets/background-image8.jpg";
import PersonalImg from "@/assets/background-image9.jpg";
import { motion } from "framer-motion";

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
    description: "Handling oversized and specialized shipments.",
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
    <section
      id="industries-preview"
      className="py-20 bg-background text-foreground"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-poppins font-bold text-center mb-12">
          Industries We Serve
        </h2>

        {/* Grid of industries */}
        <div className="grid gap-8 md:grid-cols-2">
          {industries.map((industry, index) => (
            <motion.a
              key={index}
              href={industry.link}
              className="group bg-card border border-border rounded-xl shadow-md hover:shadow-lg transition overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Image */}
              <div className="w-full h-40 relative">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
                <p className="text-muted text-sm">{industry.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: industries.length * 0.15 }}
        >
          <a
            href="/industries"
            className="inline-block px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow hover:bg-secondary transition"
          >
            View All Industries
          </a>
        </motion.div>
      </div>
    </section>
  );
}
