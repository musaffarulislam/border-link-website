// components/OfficeHours.tsx
import { Clock } from "lucide-react";

export default function OfficeHours() {
  const hours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "10:00 AM - 2:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold font-poppins text-center mb-4">
          Office Hours
        </h2>
        <p className="text-gray-300 text-center mb-12 font-inter">
          We are available to assist you during the following times:
        </p>

        {/* Hours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {hours.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 p-6 bg-primary/20 rounded-xl shadow hover:scale-105 transition-transform"
            >
              <Clock className="w-8 h-8 text-amber-500" />
              <h3 className="text-lg font-semibold font-poppins text-white">
                {item.day}
              </h3>
              <p className="text-gray-200 font-medium">{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
