// components/ContactInfo.tsx
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import QRImage from "@/assets/QR-code.png"; // Add your QR code image in /assets
import Image from "next/image";

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
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Contact Details
        </h2>
        <p className="text-gray-500 text-center mb-12 font-inter">
          Reach us through any of the following methods for fast assistance.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              target="_blank"
              className="flex items-center gap-4 p-6 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-105 bg-white"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium">{item.value}</p>
              </div>
            </Link>
          ))}

          {/* QR Code Section */}
          <div className="col-span-2 flex gap-8 items-center justify-center p-6 rounded-xl shadow-sm hover:shadow-md transition transform hover:scale-105 bg-white">
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
          </div>
        </div>
      </div>
    </section>
  );
}
