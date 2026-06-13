// app/services/[serviceSlug]/page.tsx
import ApprovalsContent from "@/components/services/ApprovalsContent/ApprovalsContent";
import CustomsHero from "@/components/services/CustomHero";
import CustomsContent from "@/components/services/CustomsContent/CustomsContent";
import EServicesContent from "@/components/services/EServicesContent/EServicesContent";
import LogisticsContent from "@/components/services/LogisticsContent/LogisticsContent";
import { notFound } from "next/navigation";

interface ServiceData {
  title: string;
  description: string;
  content: React.ReactNode;
}

const services: Record<string, ServiceData> = {
  "customs-clearance": {
    title: "Customs Clearance Dubai & UAE Borders | Border Link",
    description:
      "Fast, reliable customs clearance for businesses and individuals across Dubai and all UAE borders.",
    content: <CustomsContent />,
  },
  "approvals-registrations": {
    title: "Approvals & Product Registration in Dubai | Border Link",
    description:
      "Dubai Municipality and Ministry approvals, ensuring your products comply with all UAE regulations.",
    content: <ApprovalsContent />,
  },
  "logistics-transportation": {
    title: "Logistics & Transport Dubai & GCC | Border Link",
    description:
      "Land transport, container handling, and temperature-controlled cargo across Dubai, UAE, and GCC regions.",
    content: <LogisticsContent />,
  },
  "e-services": {
    title: "24x7 E-Services for Customs & Logistics | Border Link",
    description:
      "Online customs support and documentation help for your shipments, with 24/7 tracking and clearance.",
    content: <EServicesContent />,
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ serviceSlug: slug }));
}

// ✅ Fixed metadata generation for Next.js 15
export async function generateMetadata({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params; // Await the params Promise
  const service = services[serviceSlug];
  
  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist.",
    };
  }
  
  return {
    title: {
      absolute: service.title,
    },
    description: service.description,
    alternates: {
      canonical: `https://borderlink.info/services/${serviceSlug}`,
    },
  };
}

// ✅ Fixed page component for Next.js 15
export default async function ServicePage({
  params,
}: {
  params: Promise<{ serviceSlug: string }>;
}) {
  const { serviceSlug } = await params; // Await the params Promise
  const service = services[serviceSlug];
  
  if (!service) return notFound();

  return (
    <>
      <CustomsHero title={service.title} subtitle={service.description} />
      {service.content}
    </>
  );
}