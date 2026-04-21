"use client";

import Image from "next/image";
import AboutImage from "@/assets/background-image2.jpg";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Licensed customs broker operating in Dubai & UAE",
  "Specialists in Hatta border clearance",
  "Dubai Municipality & Ministry approvals",
  "24/7 availability for urgent shipments",
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background text-foreground">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0 }}
        >
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-3">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-5 leading-tight">
            Dubai&apos;s Trusted Customs &amp; Logistics Experts
          </h2>
          <p className="text-muted leading-relaxed mb-6 text-sm">
            Border Link Cargo &amp; Customs Broker LLC is a Dubai-based company
            specializing in customs clearance and logistics solutions. With a
            team of experienced professionals and up-to-date knowledge of UAE
            regulations, we ensure your shipments are processed efficiently and
            without delays.
          </p>

          {/* Key points */}
          <ul className="space-y-2 mb-8">
            {points.map((point, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-2 text-sm text-muted"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
              >
                <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                {point}
              </motion.li>
            ))}
          </ul>

          <motion.a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-black font-bold shadow-md hover:bg-secondary transition-colors"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="relative w-full h-80 md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true, amount: 0 }}
        >
          <Image
            src={AboutImage}
            alt="Border Link Team at Hatta Border Customs"
            fill
            className="object-cover"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
