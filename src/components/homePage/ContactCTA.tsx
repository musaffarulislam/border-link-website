"use client";

import Image from "next/image";
import ContactImg from "@/assets/background-image3.jpg"; // replace with your image
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-card text-foreground">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="hidden md:block h-full">
          <Image
            src={ContactImg}
            alt="Contact Border Link"
            className="h-full w-full rounded-xl shadow-lg object-cover"
          />
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
