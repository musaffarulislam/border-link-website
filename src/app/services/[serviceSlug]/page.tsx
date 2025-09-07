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
  content: any;
}

const services: Record<string, ServiceData> = {
  "customs-clearance": {
    title: "Customs Clearance in Dubai & UAE Borders",
    description:
      "Fast, reliable, and fully compliant customs clearance services for businesses and individuals across Dubai and UAE borders.",
    content: <CustomsContent />,
  },
  "approvals-registrations": {
    title: "Approvals & Product Registration in Dubai",
    description:
      "Simplifying Dubai Municipality & Ministry approvals, ensuring your shipments and products comply with all UAE regulations efficiently.",
    content: <ApprovalsContent />,
  },
  "logistics-transportation": {
    title: "Logistics & Transportation Services in Dubai & GCC",
    description:
      "Comprehensive land transport, container handling, and temperature-controlled cargo solutions across Dubai, UAE, and GCC regions.",
    content: <LogisticsContent />,
  },
  "e-services": {
    title: "24x7 E-Services for Customs & Logistics",
    description:
      "Online customs support and documentation assistance for your shipments, with 24/7 tracking, approvals, and clearance management.",
    content: <EServicesContent />,
  },
};

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ serviceSlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { serviceSlug: string };
}) {
  const service = services[params.serviceSlug];
  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service does not exist.",
    };
  }
  return {
    title: service.title,
    description: service.description,
  };
}

export default function ServicePage({
  params,
}: {
  params: { serviceSlug: string };
}) {
  const service = services[params.serviceSlug];
  if (!service) return notFound();

  return (
    <>
      <CustomsHero title={service.title} subtitle={service.description} />
      {service.content}
    </>
  );
}
