import BlogContactCTA from "@/components/blogPage/BlogContactCTA";
import BlogHero from "@/components/blogPage/BlogHero";
import { Metadata } from "next";

// Blog data object with SEO metadata
const blogs: Record<
  string,
  {
    title: string;
    subtitle: string;
    content: string[];
    meta: {
      title: string;
      description: string;
      keywords: string[];
    };
  }
> = {
  "hatta-customs-clearance": {
    title: "How to Clear Customs at the Hatta Border",
    subtitle:
      "Step-by-step guide to smooth customs clearance at Hatta for your imports and exports.",
    content: [
      "Clearing customs at the Hatta border requires careful preparation. Businesses and individuals need to ensure all documents are accurate and complete before submission.",
      "The first step is to gather all required paperwork, including commercial invoices, packing lists, certificates of origin, and any specialized permits for restricted goods.",
      "Once documents are prepared, submit them through the Hatta customs portal or with the help of Border Link’s team. Our experts can guide you to avoid common errors and speed up approvals.",
      "Monitoring the status of your shipment is crucial. Border Link provides real-time tracking and updates to ensure your cargo moves without delays.",
      "Compliance with UAE customs regulations is mandatory. Our team ensures that all HS codes, duties, and documentation meet government standards, reducing the risk of fines or rejection.",
      "Following these steps helps ensure a seamless import/export process at Hatta, saving time and avoiding unnecessary complications.",
    ],
    meta: {
      title: "Hatta Customs Clearance Guide | Border Link Dubai",
      description:
        "Step-by-step guide on how to clear customs at the Hatta border. Ensure fast and compliant clearance for your shipments with Border Link.",
      keywords: [
        "customs clearance Hatta",
        "Hatta border import UAE",
        "Dubai logistics clearance",
        "Border Link customs guide",
      ],
    },
  },
  "dubai-municipality-approval": {
    title: "Dubai Municipality Approval Guide",
    subtitle:
      "Complete guide to obtain approvals for your goods and products in Dubai.",
    content: [
      "Dubai Municipality approvals are required for importing food, electronics, cosmetics, and other regulated products.",
      "Businesses must register their company and product with the Dubai Municipality portal. Accurate details ensure smooth processing and avoid delays.",
      "Required documents include product specifications, certifications, licenses, and invoices. Each product category may have specific requirements.",
      "After submission, approvals are reviewed for compliance with UAE laws and safety standards. Border Link ensures all documents are in order before submission.",
      "Once approved, you can proceed with shipment clearance. Proper approvals prevent fines, penalties, and rejection at the port.",
      "Border Link also assists with renewals and compliance checks to keep your business operations seamless in Dubai.",
    ],
    meta: {
      title: "Dubai Municipality Product Approval Guide | Border Link",
      description:
        "Learn how to get Dubai Municipality approvals for your products. Ensure compliance and smooth clearance with Border Link services.",
      keywords: [
        "Dubai Municipality approval",
        "product registration UAE",
        "customs approval guide Dubai",
        "Border Link approvals",
      ],
    },
  },
  "common-customs-mistakes": {
    title: "Common Mistakes in Customs Documentation",
    subtitle:
      "Avoid these common errors to ensure faster clearance and compliance.",
    content: [
      "Customs documentation mistakes are a major cause of delays in Dubai and UAE ports.",
      "Common errors include incomplete invoices, missing packing lists, and wrong HS codes.",
      "Incorrect or missing permits for restricted items can result in fines or shipment rejection.",
      "Failure to adhere to import/export regulations leads to unnecessary delays and financial penalties.",
      "Using Border Link’s checklist and expert review minimizes mistakes, ensuring faster customs clearance.",
      "Regular training for staff and proper documentation protocols are key to avoiding these common mistakes.",
    ],
    meta: {
      title: "Common Customs Documentation Mistakes | Border Link Dubai",
      description:
        "Avoid common customs documentation mistakes to speed up clearance. Learn tips and best practices from Border Link.",
      keywords: [
        "customs mistakes Dubai",
        "UAE import errors",
        "Border Link documentation guide",
        "common customs errors",
      ],
    },
  },
};

// Generate Metadata dynamically
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const blog = blogs[params.slug];

  if (!blog) {
    return {
      title: "Blog Not Found | Border Link",
      description: "The requested blog was not found.",
    };
  }

  return {
    title: blog.meta.title,
    description: blog.meta.description,
    keywords: blog.meta.keywords.join(", "),
  };
}

interface BlogPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  const blog = blogs[params.slug];

  if (!blog) {
    return <p className="text-center text-white py-20">Blog not found.</p>;
  }

  return (
    <div className="space-y-16">
      {/* Blog Hero */}
      <BlogHero title={blog.title} subtitle={blog.subtitle} />

      {/* Blog Content */}
      <section className="max-w-5xl mx-auto px-4 md:px-8 space-y-6">
        {blog.content.map((paragraph, idx) => (
          <p key={idx} className="text-gray-300 font-inter text-lg">
            {paragraph}
          </p>
        ))}
      </section>

      {/* Contact CTA */}
      <BlogContactCTA />
    </div>
  );
}
