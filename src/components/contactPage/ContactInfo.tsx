"use client";

import { Phone, MessageCircle, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import QRImage from "@/assets/QR-code.png";
import Image from "next/image";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const phoneNumbers = [
  { number: "+971 56 677 1884", href: "tel:+971566771884" },
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

function ContactCard({
  icon: Icon,
  label,
  iconColor,
  children,
}: {
  icon: React.ElementType;
  label: string;
  iconColor: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className="group relative bg-white/5 border border-white/10 hover:border-amber-500/60 rounded-2xl p-6 shadow-lg hover:shadow-amber-500/10 hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-5">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColor}`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-base font-bold text-white font-poppins">{label}</h3>
          <p className="text-xs text-white/40 font-inter">Click to connect</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </motion.div>
  );
}

function ActionLink({
  href,
  label,
  external,
}: {
  href: string;
  label: string;
  external?: boolean;
}) {
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group/link flex items-center justify-between gap-2 bg-white/8 hover:bg-amber-500 text-white/70 hover:text-black font-medium px-4 py-3 rounded-xl transition-all duration-200 text-sm"
    >
      <span>{label}</span>
      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all duration-200" />
    </Link>
  );
}

export default function ContactInfo() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-widest text-amber-500 uppercase mb-3 font-inter">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-3">
            Contact Details
          </h2>
          <p className="text-white/50 font-inter max-w-md mx-auto text-sm">
            Reach us through any of the following channels for fast assistance.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0 }}
        >
          {/* Phone */}
          <ContactCard icon={Phone} label="Call Us" iconColor="bg-gradient-to-br from-amber-400 to-amber-600">
            {phoneNumbers.map((item, i) => (
              <ActionLink key={i} href={item.href} label={item.number} />
            ))}
          </ContactCard>

          {/* WhatsApp */}
          <ContactCard icon={MessageCircle} label="WhatsApp" iconColor="bg-gradient-to-br from-green-500 to-emerald-700">
            {whatsappNumbers.map((item, i) => (
              <ActionLink key={i} href={item.href} label={item.number} external />
            ))}
          </ContactCard>

          {/* Email */}
          <ContactCard icon={Mail} label="Email Us" iconColor="bg-gradient-to-br from-blue-500 to-indigo-700">
            {emailAddresses.map((item, i) => (
              <ActionLink key={i} href={item.href} label={item.address} />
            ))}
          </ContactCard>

          {/* Address */}
          <motion.div
            variants={itemVariants}
            className="group bg-white/5 border border-white/10 hover:border-amber-500/60 rounded-2xl p-6 shadow-lg hover:shadow-amber-500/10 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-rose-500 to-red-700">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-poppins">Our Location</h3>
                <p className="text-xs text-white/40 font-inter">Hatta, Dubai, UAE</p>
              </div>
            </div>
            <div className="bg-white/8 rounded-xl p-4 mb-3">
              <p className="text-white/70 text-sm font-inter leading-relaxed">
                Shop no.29, Hatta Souq &amp; Guest House,<br />
                Hatta, Dubai, UAE
              </p>
            </div>
            <Link
              href="https://www.google.com/maps/place/Hatta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-2 bg-white/8 hover:bg-amber-500 text-white/70 hover:text-black font-medium px-4 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" />
            </Link>
          </motion.div>

          {/* QR Code — row layout */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 md:col-span-2 bg-white/5 border border-white/10 hover:border-amber-500/60 rounded-2xl p-8 shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center gap-8"
          >
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-amber-500/20 rounded-2xl blur-xl" />
              <Image
                src={QRImage.src}
                alt="Border Link QR Code"
                className="relative w-36 h-36 rounded-xl border border-white/15"
                width={144}
                height={144}
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white font-poppins mb-2">Scan QR Code</h3>
              <p className="text-white/50 font-inter text-sm max-w-sm leading-relaxed">
                Scan to instantly save our contact details or visit our website. Quick and hassle-free.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-xs text-amber-500 font-semibold font-inter">Available 24/7</span>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
