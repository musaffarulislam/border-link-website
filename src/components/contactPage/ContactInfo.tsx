"use client";

// components/ContactInfo.tsx
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import QRImage from "@/assets/QR-code.png"; // Add your QR code image in /assets
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ContactInfo() {
  const contacts = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Phone",
      value: "+971 56 771 1884, +971 56 345 4684, +971 52 623 2117",
      link: "tel:+97156771884",
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      title: "WhatsApp",
      value: "+971 56 345 4684, +971 52 623 2117",
      link: "https://wa.me/971563454684",
    },
    {
      icon: <Mail className="w-6 h-6 text-secondary" />,
      title: "Email",
      value: "service@borderlink.info",
      link: "mailto:service@borderlink.info",
    },
    {
      icon: <MapPin className="w-6 h-6 text-amber-500" />,
      title: "Address",
      value: "Shop no.29 Hatta Souq and Guest House, Hatta, Dubai, UAE",
      link: "https://www.google.com/maps/place/Hatta",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            Contact Details
          </h2>
          <p className="text-gray-500 text-center mb-12 font-inter">
            Reach us through any of the following methods for fast assistance.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contacts.map((item, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Link
                href={item.link}
                target="_blank"
                className="flex items-center gap-4 p-6 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-105 bg-white h-full"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-medium">{item.value}</p>
                </div>
              </Link>
            </motion.div>
          ))}

          {/* QR Code Section */}
          <motion.div
            className="col-span-1 md:col-span-2 flex gap-8 items-center justify-center p-6 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-105 bg-white"
            variants={itemVariants}
          >
            <div className="mb-3">
              <Image
                src={QRImage.src}
                alt="Border Link QR Code"
                className="w-40 h-40"
                width={160}
                height={160}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Scan QR
              </h3>
              <p className="text-gray-600 text-center">
                Scan to save our contact details or visit our website quickly.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
