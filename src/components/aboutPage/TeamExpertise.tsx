// // components/TeamExpertise.tsx
// import Image from "next/image";
// import Mohammed from "@/assets/background-image6.jpg"; // replace with real images
// import Sarah from "@/assets/background-image8.jpg";
// import Ahmed from "@/assets/background-image4.jpg";
// import { User } from "lucide-react";

// const teamMembers = [
//   { name: "Mohammed Ali", role: "Operations Head", img: Mohammed },
//   { name: "Sarah Khan", role: "Customs Specialist", img: Sarah },
//   { name: "Ahmed Rahman", role: "Logistics Coordinator", img: Ahmed },
// ];

// export default function TeamExpertise() {
//   return (
//     <section className="py-16">
//       <div className="container mx-auto px-4 md:px-8">
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6 text-center">
//           Our Team & Expertise
//         </h2>
//         <p className="text-gray-300 text-center mb-12 font-inter max-w-2xl mx-auto">
//           At Border Link, our strength lies in our people. Our skilled professionals bring decades of combined experience in customs, logistics, and compliance. Their in-depth knowledge of UAE regulations ensures smooth operations for every shipment.
//         </p>

//         {/* Team Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {teamMembers.map((member, idx) => (
//             <div
//               key={idx}
//               className="relative rounded-lg overflow-hidden shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl group cursor-pointer"
//             >
//               {/* Team Image */}
//               {member.img ? (
//                 <Image
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//                   width={400}
//                   height={400}
//                 />
//               ) : (
//                 <div className="w-full h-64 flex items-center justify-center bg-gray-700">
//                   <User className="w-16 h-16 text-gray-400" />
//                 </div>
//               )}

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                 {/* Placeholder for social icons or action buttons */}
//                 <p className="text-white font-semibold text-lg">Connect</p>
//               </div>

//               {/* Name & Role */}
//               <div className="p-4 bg-primary">
//                 <h3 className="text-xl font-semibold text-white font-poppins">
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-200 font-inter">{member.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// components/TeamExpertise.tsx
import { User, Users, Briefcase } from "lucide-react";

const teamMembers = [
  { name: "Mohammed Ali", role: "Operations Head", icon: User },
  { name: "Sarah Khan", role: "Customs Specialist", icon: Users },
  { name: "Ahmed Rahman", role: "Logistics Coordinator", icon: Briefcase },
];

export default function TeamExpertise() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white font-poppins mb-6 text-center">
          Our Team & Expertise
        </h2>
        <p className="text-gray-300 text-center mb-12 font-inter max-w-2xl mx-auto">
          At Border Link, our strength lies in our people. Our skilled
          professionals bring decades of combined experience in customs,
          logistics, and compliance. Their in-depth knowledge of UAE regulations
          ensures smooth operations for every shipment.
        </p>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => {
            const Icon = member.icon;
            return (
              <div
                key={idx}
                className="relative rounded-lg p-8 shadow-lg transform transition hover:-translate-y-2 hover:shadow-2xl bg-primary cursor-pointer group"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-amber-500 mb-4 mx-auto transition group-hover:scale-110">
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-semibold text-white text-center font-poppins mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-200 text-center font-inter">
                  {member.role}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-lg bg-black/20 opacity-0 group-hover:opacity-100 transition"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
