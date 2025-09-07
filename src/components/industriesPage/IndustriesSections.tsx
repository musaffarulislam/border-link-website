// components/IndustriesSections.tsx
"use client";

import { CheckCircle, Car, Wrench, Package } from "lucide-react";
import Image from "next/image";
import FoodImg from "@/assets/background-image8.jpg"; // replace with real images
import CarImg from "@/assets/background-image8.jpg";
import EquipmentImg from "@/assets/background-image9.jpg";
import PersonalImg from "@/assets/background-image5.jpg";

export default function IndustriesSections() {
  return (
    <div className="space-y-24 py-24">
      <FoodSection />
      <AutomotiveSection />
      <EquipmentSection />
      <PersonalSection />
      <GeneralCargoSection />
    </div>
  );
}

/* ---------------------- Section 1 – Food ---------------------- */
function FoodSection() {
  const highlights = [
    "Dubai Municipality food product registration.",
    "Cold chain logistics and quick clearance.",
    "Compliance with UAE food safety standards.",
  ];

  return (
    <section
      id="food"
      className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center"
    >
      {/* Left: Image */}
      <div className="h-72 md:h-96 relative rounded-lg overflow-hidden">
        <Image
          src={FoodImg}
          alt="Food & Perishables"
          fill
          className="object-cover"
        />
      </div>

      {/* Right: Text */}
      <div>
        <h2 className="text-3xl font-bold text-white font-poppins mb-4">
          Food & Perishables Cargo Clearance
        </h2>
        <p className="text-gray-300 mb-6 font-inter">
          Handling food imports requires precision and compliance with UAE’s
          stringent food safety regulations. Border Link ensures seamless
          clearance of perishables, maintaining freshness through quick
          documentation and approvals.
        </p>
        <ul className="space-y-3">
          {highlights.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-200">
              <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------- Section 2 – Automotive ---------------------- */
function AutomotiveSection() {
  const highlights = [
    "Vehicle import permits & customs clearance.",
    "Compliance with RTA & environmental regulations.",
    "Handling spare parts and bulk automotive shipments.",
  ];

  return (
    <section id="automotive" className="py-20">
      <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-white font-poppins mb-4">
            Automotive & Vehicle Clearance
          </h2>
          <p className="text-gray-300 mb-6 font-inter">
            Importing cars, spare parts, or heavy vehicles into the UAE requires
            specialized customs handling. Border Link simplifies the process,
            ensuring compliance with RTA and customs regulations for both
            individuals and businesses.
          </p>
          <ul className="space-y-3">
            {highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2 text-gray-200">
                <Car className="w-5 h-5 text-amber-500 mt-1" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-72 md:h-96 relative rounded-lg overflow-hidden">
          <Image
            src={CarImg}
            alt="Automotive Clearance"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Section 3 – Industrial Equipment ---------------------- */
function EquipmentSection() {
  const highlights = [
    "Clearance for construction & industrial machinery.",
    "HS code classification & duty compliance.",
    "Port-to-site logistics support.",
  ];

  return (
    <section
      id="equipment"
      className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center"
    >
      <div className="h-72 md:h-96 relative rounded-lg overflow-hidden">
        <Image
          src={EquipmentImg}
          alt="Industrial Equipment"
          fill
          className="object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold text-white font-poppins mb-4">
          Industrial Equipment & Machinery Clearance
        </h2>
        <p className="text-gray-300 mb-6 font-inter">
          From construction machinery to heavy-duty industrial equipment, Border
          Link ensures smooth clearance and delivery. We manage end-to-end
          logistics, covering all necessary permits and customs documentation.
        </p>
        <ul className="space-y-3">
          {highlights.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-200">
              <Wrench className="w-5 h-5 text-amber-500 mt-1" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------------- Section 4 – Personal Goods ---------------------- */
function PersonalSection() {
  const highlights = [
    "Customs clearance for personal effects.",
    "Household goods, electronics, and furniture handling.",
    "Tailored solutions for expats & relocations.",
  ];

  return (
    <section
      id="personal"
      className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center"
    >
      <div>
        <h2 className="text-3xl font-bold text-white font-poppins mb-4">
          Personal Goods & Relocation Cargo
        </h2>
        <p className="text-gray-300 mb-6 font-inter">
          Moving personal belongings or household items to the UAE? Border Link
          ensures stress-free clearance for individuals and families, with
          transparent processes and secure handling.
        </p>
        <ul className="space-y-3">
          {highlights.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-200">
              <CheckCircle className="w-5 h-5 text-amber-500 mt-1" />
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="h-72 md:h-96 relative rounded-lg overflow-hidden">
        <Image
          src={PersonalImg}
          alt="Personal Goods"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}

/* ---------------------- Section 5 – General Cargo ---------------------- */
function GeneralCargoSection() {
  const highlights = [
    { title: "Electronics", desc: "Clearance for electronics & gadgets." },
    { title: "Garments", desc: "Efficient handling of textile shipments." },
    {
      title: "Bulk Shipments",
      desc: "LCL/FCL cargo solutions for trade goods.",
    },
    {
      title: "Compliance",
      desc: "Full compliance with UAE import/export regulations.",
    },
  ];

  return (
    <section id="cargo" className="py-20 bg-primary/20">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold text-white font-poppins mb-12 text-center">
          General Cargo & Trade Goods
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-primary/30 p-6 rounded-lg shadow hover:scale-105 transition text-center"
            >
              <Package className="w-10 h-10 text-amber-500 mx-auto mb-4" />
              <h3 className="text-white font-semibold text-xl mb-2">
                {item.title}
              </h3>
              <p className="text-gray-200 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
