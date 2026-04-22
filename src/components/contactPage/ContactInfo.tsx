"use client";

import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import QRImage from "@/assets/QR-code.png";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const phoneNumbers = [
  { number: "+971 56 771 1884", href: "tel:+97156771884" },
  { number: "+971 56 345 4684", href: "tel:+971563454684" },
  { number: "+971 52 623 2117", href: "tel:+971526232117" },
];

const whatsappNumbers = [
  { number: "+971 56 677 1884", href: "https://wa.me/971566771884" },
  { number: "+971 52 623 2117", href: "https://wa.me/971526232117" },
];

const emailAddresses = [
  { address: "borderlink.hatta@gmail.com", href: "mailto:borderlink.hatta@gmail.com" },
  { address: "service@borderlink.info", href: "mailto:service@borderlink.info" },
];

export default function ContactInfo() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
            Contact Details
          </h2>
          <p className="text-gray-400 text-center mb-12 font-inter">
            Reach us through any of the following methods for fast assistance.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {/* Phone Numbers */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-amber-500 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black font-poppins">Phone</h3>
            </div>
            <div className="flex flex-col gap-2">
              {phoneNumbers.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="inline-flex items-center gap-2 bg-black/10 hover:bg-black/20 text-black font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  {item.number}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* WhatsApp Numbers */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-amber-500 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black font-poppins">WhatsApp</h3>
            </div>
            <div className="flex flex-col gap-2">
              {whatsappNumbers.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-black/10 hover:bg-black/20 text-black font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4 flex-shrink-0" />
                  {item.number}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={itemVariants}
            className="p-6 rounded-2xl bg-amber-500 shadow-md"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-bold text-black font-poppins">Email</h3>
            </div>
            <div className="flex flex-col gap-2">
              {emailAddresses.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="inline-flex items-center gap-2 bg-black/10 hover:bg-black/20 text-black font-semibold px-4 py-2.5 rounded-xl transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  {item.address}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Address */}
          <motion.div variants={itemVariants}>
            <Link
              href="https://www.google.com/maps/place/Hatta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 rounded-2xl bg-amber-500 shadow-md hover:bg-amber-400 transition-colors h-full"
            >
              <div className="w-10 h-10 rounded-full bg-black/15 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-black" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-black font-poppins mb-1">Address</h3>
                <p className="text-black/80 font-semibold text-sm">
                  Shop no.29 Hatta Souq and Guest House,<br />Hatta, Dubai, UAE
                </p>
              </div>
            </Link>
          </motion.div>

          {/* QR Code */}
          <motion.div
            className="col-span-1 md:col-span-2 flex gap-8 items-center justify-center p-6 rounded-2xl bg-amber-500 shadow-md"
            variants={itemVariants}
          >
            <Image
              src={QRImage.src}
              alt="Border Link QR Code"
              className="w-36 h-36 rounded-xl"
              width={144}
              height={144}
            />
            <div>
              <h3 className="text-lg font-bold text-black font-poppins mb-2">Scan QR Code</h3>
              <p className="text-black/80 font-medium text-sm max-w-xs">
                Scan to save our contact details or visit our website quickly.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
