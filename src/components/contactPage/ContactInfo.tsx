"use client";

import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight, QrCode } from "lucide-react";
import Link from "next/link";
import QRImage from "@/assets/QR-code.png";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const contactCards = [
  {
    icon: Phone,
    label: "Call Us",
    description: "Available during business hours",
    accent: "from-amber-400 to-orange-500",
    border: "hover:border-amber-500/50",
    glow: "hover:shadow-amber-500/10",
    items: [
      { label: "+971 56 677 1884", href: "tel:+971566771884" },
      { label: "+971 56 345 4684", href: "tel:+971563454684" },
      { label: "+971 52 623 2117", href: "tel:+971526232117" },
    ],
    external: false,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    description: "Chat with us anytime",
    accent: "from-green-400 to-emerald-600",
    border: "hover:border-green-500/50",
    glow: "hover:shadow-green-500/10",
    items: [
      { label: "+971 56 677 1884", href: "https://wa.me/971566771884" },
      { label: "+971 52 623 2117", href: "https://wa.me/971526232117" },
    ],
    external: true,
  },
  {
    icon: Mail,
    label: "Email Us",
    description: "We reply within 24 hours",
    accent: "from-blue-400 to-indigo-600",
    border: "hover:border-blue-500/50",
    glow: "hover:shadow-blue-500/10",
    items: [
      { label: "borderlink.hatta@gmail.com", href: "mailto:borderlink.hatta@gmail.com" },
      { label: "service@borderlink.info", href: "mailto:service@borderlink.info" },
    ],
    external: false,
  },
  {
    icon: MapPin,
    label: "Visit Us",
    description: "Hatta, Dubai, UAE",
    accent: "from-rose-400 to-red-600",
    border: "hover:border-rose-500/50",
    glow: "hover:shadow-rose-500/10",
    items: [
      { label: "Shop no.29, Hatta Souq & Guest House, Hatta, Dubai, UAE", href: "https://www.google.com/maps/place/Hatta" },
    ],
    external: true,
  },
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
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3 font-inter">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-3">
            Contact Details
          </h2>
          <p className="text-white/50 font-inter max-w-md mx-auto text-sm">
            Multiple ways to reach us — pick what works best for you.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`group relative bg-white/5 border border-white/10 ${card.border} rounded-2xl p-6 shadow-lg ${card.glow} hover:shadow-xl transition-all duration-300 overflow-hidden`}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${card.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white font-poppins leading-tight">{card.label}</h3>
                    <p className="text-xs text-white/40 font-inter">{card.description}</p>
                  </div>
                </div>

                {/* Contact chips */}
                <div className="flex flex-wrap gap-2">
                  {card.items.map((item, j) => (
                    <Link
                      key={j}
                      href={item.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className={`inline-flex items-center gap-1.5 bg-white/8 hover:bg-gradient-to-r hover:${card.accent} text-white/80 hover:text-white text-xs font-medium px-3 py-2 rounded-lg border border-white/10 hover:border-transparent transition-all duration-200`}
                    >
                      {item.label}
                      <ArrowUpRight className="w-3 h-3 flex-shrink-0 opacity-60" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* QR Code Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0 }}
          className="bg-gradient-to-r from-amber-500/15 to-amber-600/5 border border-amber-500/25 rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center gap-5"
        >
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 bg-amber-500/30 rounded-xl blur-md" />
            <Image
              src={QRImage.src}
              alt="Border Link QR Code"
              className="relative w-24 h-24 rounded-xl border border-amber-500/30"
              width={96}
              height={96}
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="flex items-center gap-2 mb-1 justify-center sm:justify-start">
              <QrCode className="w-4 h-4 text-amber-500" />
              <h3 className="text-sm font-bold text-white font-poppins">Scan Our QR Code</h3>
            </div>
            <p className="text-white/50 text-xs font-inter">
              Save our contact details instantly or visit our website on the go.
            </p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span className="text-xs text-amber-400 font-semibold font-inter">Available 24/7</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
