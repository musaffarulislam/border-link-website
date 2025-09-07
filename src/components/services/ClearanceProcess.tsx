// components/ClearanceProcess.tsx
import { CheckCircle } from "lucide-react";

const steps = [
  "Documentation Review",
  "Submission to Customs Authorities",
  "Shipment Inspection (if needed)",
  "Clearance Approval",
  "Delivery / Handover",
];

export default function ClearanceProcess() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-12">
          Our Clearance Process
        </h2>

        {/* Timeline */}
        <div className="max-md:hidden flex flex-col md:flex-row items-center justify-between relative">
          {/* Horizontal line for timeline */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-700 z-0"></div>

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center relative z-10 mb-10 md:mb-0"
            >
              {/* Step circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-amber-500 text-white text-lg font-bold mb-4 transition transform hover:scale-110">
                {idx + 1}
              </div>

              {/* Step title */}
              <p className="text-white font-inter text-center max-w-xs">
                {step}
              </p>

              {/* Optional check icon for completed effect */}
              <CheckCircle className="hidden md:block w-6 h-6 text-emerald-500 mt-2" />
            </div>
          ))}
        </div>

        {/* Mobile view: vertical steps */}
        <div className="md:hidden mt-8 flex flex-col gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-primary/20 p-4 rounded-lg"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold">
                {idx + 1}
              </div>
              <p className="text-white font-inter">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
