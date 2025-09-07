"use client";

import Image from "next/image";
import ContactImg from "@/assets/background-image3.jpg";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-card text-foreground">
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-10 items-stretch">
        {/* Left Side - Image */}
        <div className="hidden md:flex flex-1 relative">
          <div className="absolute inset-0">
            <Image
              src={ContactImg}
              alt="Contact Border Link"
              className="w-full h-full rounded-xl shadow-lg object-cover"
              fill
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
