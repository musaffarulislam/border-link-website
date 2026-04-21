"use client";

import Image from "next/image";
import ContactImg from "@/assets/background-image3.jpg";
import ContactForm from "./ContactForm";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Call Us",
    lines: [
      { text: "+971 56 677 1884", href: "tel:+971566771884" },
      { text: "+971 52 623 2117", href: "tel:+971526232117" },
      { text: "+971 56 345 4684", href: "tel:+971563454684" },
    ],
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    lines: [
      { text: "+971 56 677 1884", href: "https://wa.me/971566771884", external: true },
      { text: "+971 52 623 2117", href: "https://wa.me/971526232117", external: true },
    ],
  },
  {
    icon: Mail,
    label: "Email",
    lines: [
      { text: "service@borderlink.info", href: "mailto:service@borderlink.info" },
    ],
  },
  {
    icon: MapPin,
    label: "Location",
    lines: [
      { text: "Hatta Border, Dubai, UAE", href: "#" },
    ],
  },
  {
    icon: Clock,
    label: "Hours",
    lines: [
      { text: "Open 24 / 7", href: "#" },
    ],
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6">
        {/* Section label */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-2">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold">
            Request a Free Quote
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* ── LEFT PANEL ── */}
          <motion.div
            className="relative rounded-2xl overflow-hidden min-h-[520px] flex flex-col justify-end"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Background image */}
            <Image
              src={ContactImg}
              alt="Border Link Customs Clearance Office"
              fill
              className="object-cover"
            />

            {/* Gradient overlay — darker for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/50" />

            {/* Contact info over the image */}
            <div className="relative z-10 p-7">
              <h3 className="text-2xl font-bold text-white font-poppins mb-1 drop-shadow-lg">
                Contact Information
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Reach out via any channel — we&apos;re available 24/7.
              </p>

              <div className="space-y-4">
                {contactDetails.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                      className="flex items-start gap-3"
                    >
                      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
                        <Icon className="w-4 h-4 text-black" />
                      </div>
                      <div>
                        <p className="text-xs text-white/60 font-semibold uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {item.lines.map((line, j) => {
                            const isLink = line.href !== "#";
                            if (isLink) {
                              return (
                                <a
                                  key={j}
                                  href={line.href}
                                  target={"external" in line && line.external ? "_blank" : undefined}
                                  rel={"external" in line && line.external ? "noopener noreferrer" : undefined}
                                  className="inline-block bg-accent hover:bg-secondary text-black text-xs font-bold px-2.5 py-1 rounded-md leading-tight transition-colors"
                                >
                                  {line.text}
                                </a>
                              );
                            }
                            return (
                              <span
                                key={j}
                                className="inline-block bg-accent text-black text-xs font-bold px-2.5 py-1 rounded-md leading-tight"
                              >
                                {line.text}
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social / WhatsApp CTA */}
              <motion.a
                href="https://wa.me/971566771884"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </motion.a>
            </div>
          </motion.div>

          {/* ── RIGHT PANEL — Form ── */}
          <motion.div
            className="bg-primary/30 border border-border rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
