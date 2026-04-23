import BlogContactCTA from "@/components/blogPage/BlogContactCTA";
import BlogHero from "@/components/blogPage/BlogHero";
import { Metadata } from "next";

const BASE_URL = "https://borderlink.info";

// Blog data object with SEO metadata
const blogs: Record<
  string,
  {
    title: string;
    subtitle: string;
    content: string[];
    datePublished: string;
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
    datePublished: "2024-11-01",
    content: [
      "Clearing customs at the Hatta border requires careful preparation. Businesses and individuals need to ensure all documents are accurate and complete before submission.",
      "The first step is to gather all required paperwork, including commercial invoices, packing lists, certificates of origin, and any specialized permits for restricted goods.",
      "Once documents are prepared, submit them through the Hatta customs portal or with the help of Border Link's team. Our experts can guide you to avoid common errors and speed up approvals.",
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
    datePublished: "2024-11-15",
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
    datePublished: "2024-12-01",
    content: [
      "Customs documentation mistakes are a major cause of delays in Dubai and UAE ports.",
      "Common errors include incomplete invoices, missing packing lists, and wrong HS codes.",
      "Incorrect or missing permits for restricted items can result in fines or shipment rejection.",
      "Failure to adhere to import/export regulations leads to unnecessary delays and financial penalties.",
      "Using Border Links checklist and expert review minimizes mistakes, ensuring faster customs clearance.",
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

  "freight-forwarding-hatta-border": {
    title: "Freight Forwarding at Hatta Border: Complete Guide",
    subtitle:
      "Everything businesses need to know about freight forwarding through the Hatta border crossing in Dubai.",
    datePublished: "2025-01-10",
    content: [
      "The Hatta border crossing is one of the most strategically important trade routes between the UAE and Oman. Freight forwarding through Hatta requires knowledge of both UAE and Omani customs regulations to ensure smooth transit.",
      "Freight forwarding at Hatta border involves coordinating transportation, documentation, and customs clearance for goods moving across the border. A professional freight forwarder like Border Link manages the entire process on your behalf.",
      "Key documents required for freight forwarding at Hatta include: commercial invoice, bill of lading or airway bill, packing list, certificate of origin, and any applicable permits for restricted goods.",
      "Transit cargo moving through Hatta to Oman or other GCC countries requires a transit declaration and customs bond. Border Link handles all transit formalities, ensuring your cargo reaches its destination without unnecessary stops.",
      "Businesses importing goods through Hatta benefit from faster processing times compared to Dubai ports. The border is less congested, and with a trusted freight forwarder, clearance can be completed within hours.",
      "Border Link's freight forwarding team at Hatta has years of experience handling all types of cargo including general goods, perishables, construction materials, and personal effects. Contact us today for a free freight forwarding quote.",
    ],
    meta: {
      title: "Freight Forwarding Hatta Border Dubai | Border Link",
      description:
        "Complete guide to freight forwarding at Hatta border. Border Link provides fast, reliable freight forwarding services at the Hatta–Dubai border crossing.",
      keywords: [
        "freight forwarding Hatta border",
        "Hatta border freight forwarder",
        "freight forwarding Dubai Hatta",
        "cargo forwarding Hatta UAE",
        "Hatta border crossing logistics",
      ],
    },
  },

  "cargo-clearance-uae-borders": {
    title: "Cargo Clearance at UAE Borders: What You Need to Know",
    subtitle:
      "A practical guide to clearing cargo at UAE land borders including Hatta, Al Ghuwaifat, and Wajajah.",
    datePublished: "2025-01-20",
    content: [
      "The UAE has several land border crossings that handle significant cargo volumes every day. Understanding the cargo clearance process at these borders is essential for importers, exporters, and logistics companies.",
      "The main UAE land border crossings for cargo include: Hatta border (Dubai–Oman), Al Ghuwaifat (UAE–Saudi Arabia), Wajajah (UAE–Oman), and Khatam Al Shukla (Abu Dhabi–Oman). Each has its own procedures and working hours.",
      "Cargo clearance at UAE borders requires submission of customs declarations through the UAE Federal Customs Authority system. All goods must be declared with accurate HS codes, values, and country of origin.",
      "Import duties at UAE borders are generally 5% of the customs value for most goods. However, some items such as alcohol, tobacco, and pork products attract higher duties, while GCC-origin goods may be exempt under the GCC Common Customs Law.",
      "Prohibited and restricted goods require special permits before they can be cleared at any UAE border. These include medicines, food items, electronics, and hazardous materials. Border Link ensures all permits are obtained in advance.",
      "Border Link specializes in cargo clearance at the Hatta border crossing. Our team is available daily to handle your shipments, ensuring fast processing, correct documentation, and full compliance with UAE customs regulations.",
    ],
    meta: {
      title: "Cargo Clearance UAE Borders Guide | Border Link",
      description:
        "Learn how cargo clearance works at UAE land borders. Border Link provides expert customs clearance at Hatta and all major UAE border crossings.",
      keywords: [
        "cargo clearance UAE border",
        "UAE land border customs clearance",
        "cargo clearance Hatta",
        "UAE border crossing cargo",
        "customs clearance UAE borders",
      ],
    },
  },

  "uae-import-export-regulations-2025": {
    title: "UAE Import and Export Regulations 2025: Complete Guide",
    subtitle:
      "Stay compliant with the latest UAE customs regulations for importing and exporting goods in 2025.",
    datePublished: "2025-02-01",
    content: [
      "The UAE Federal Customs Authority regularly updates import and export regulations to align with international trade standards and national security requirements. Staying up to date is essential for any business involved in cross-border trade.",
      "All goods entering the UAE must be declared to customs within 14 days of arrival. Late declarations can result in penalties. Electronic declaration through the UAE customs portal is mandatory for commercial shipments.",
      "Import duties in the UAE are standardized at 5% for most goods under the GCC Common External Tariff. Exceptions include tobacco (100%), alcohol (50%), and certain food products. Free zone imports are exempt from customs duties until goods enter the mainland.",
      "Exporters from the UAE must obtain an export declaration for all commercial shipments. Re-exports require proof of original import and customs payment. The UAE has free trade agreements with several countries offering reduced duty rates.",
      "Restricted goods — including medicines, food items, chemicals, and electronics — require pre-approval from relevant UAE authorities such as MOHAP, Dubai Municipality, or ESMA before they can be imported or exported.",
      "Border Link keeps up to date with all changes to UAE customs regulations. Our team ensures your shipments are always compliant, avoiding fines, delays, and rejection at the border. Contact us for a compliance consultation.",
    ],
    meta: {
      title: "UAE Import Export Regulations 2025 | Border Link Dubai",
      description:
        "Complete guide to UAE import and export regulations in 2025. Stay compliant with customs duties, restricted goods, and declaration requirements.",
      keywords: [
        "UAE import export regulations 2025",
        "UAE customs regulations",
        "import rules UAE",
        "export regulations Dubai",
        "UAE customs compliance",
      ],
    },
  },

  "customs-duties-uae-guide": {
    title: "Understanding Customs Duties in the UAE",
    subtitle:
      "A clear breakdown of how customs duties work in the UAE and how to calculate them for your shipments.",
    datePublished: "2025-02-15",
    content: [
      "Customs duties are taxes applied to goods when they cross international borders. In the UAE, customs duties are governed by the GCC Common Customs Law and administered by the Federal Customs Authority.",
      "The standard customs duty rate in the UAE is 5% of the CIF (Cost, Insurance, and Freight) value of goods. This means you pay 5% on the total cost of the goods including shipping and insurance to the UAE port.",
      "Some goods attract different duty rates: tobacco products are taxed at 100%, alcoholic beverages at 50%, and certain food items at 0%. GCC-origin goods with a valid certificate of origin are typically exempt from customs duties.",
      "Free zone companies in Dubai and other UAE emirates can import goods without paying customs duties, as long as goods remain within the free zone. Duties apply when goods move from the free zone to the UAE mainland.",
      "Excise tax also applies to certain goods in the UAE — carbonated drinks (50%), energy drinks (100%), tobacco (100%), and electronic smoking devices (100%). This is separate from customs duties.",
      "Incorrect duty payment or under-declaration of value can result in significant penalties. Border Link's customs experts calculate duties accurately and advise on legal methods to minimize duty liability through proper tariff classification.",
    ],
    meta: {
      title: "UAE Customs Duties Guide – How They Work | Border Link",
      description:
        "Understand how customs duties work in the UAE. Learn duty rates, calculations, and exemptions. Border Link helps businesses manage duty costs.",
      keywords: [
        "customs duties UAE",
        "UAE import duty rate",
        "how customs duties work UAE",
        "customs duty calculation Dubai",
        "UAE tariff rates",
      ],
    },
  },

  "hatta-border-crossing-guide": {
    title: "Hatta Border Crossing: Everything You Need to Know",
    subtitle:
      "Your complete guide to using the Hatta border crossing for trade, travel, and logistics between Dubai and Oman.",
    datePublished: "2025-03-01",
    content: [
      "The Hatta border crossing is located approximately 130 km from Dubai city center, nestled in the Hajar Mountains. It serves as a key land route connecting Dubai to the Omani enclave of Madha and beyond to mainland Oman.",
      "For commercial cargo, the Hatta border crossing is open 24 hours a day, 7 days a week. Traders and logistics companies use this route to move goods between the UAE and Oman efficiently, avoiding the congestion of larger ports.",
      "Vehicles crossing at Hatta border must have valid UAE vehicle registration, insurance, and all cargo documentation. Commercial trucks require a customs declaration, packing list, commercial invoice, and certificate of origin.",
      "The customs clearance process at Hatta typically takes 1–4 hours for prepared shipments. Border Link is located directly at Shop no.29, Hatta Souq & Guest House, just minutes from the border crossing, allowing us to handle your clearance quickly.",
      "Goods commonly cleared at Hatta border include construction materials, food products, machinery, vehicles, personal effects, and general merchandise. Border Link has experience with all categories and knows the specific requirements for each.",
      "Whether you are a first-time exporter or an established trading company, Border Link provides reliable customs clearance, freight forwarding, and logistics support at Hatta. Visit us or call for same-day assistance.",
    ],
    meta: {
      title: "Hatta Border Crossing Guide – Trade & Logistics | Border Link",
      description:
        "Complete guide to the Hatta border crossing for trade and logistics. Border Link provides customs clearance and freight forwarding at Hatta border.",
      keywords: [
        "Hatta border crossing",
        "Hatta border Dubai Oman",
        "Hatta border crossing guide",
        "customs clearance Hatta border crossing",
        "Hatta border logistics",
      ],
    },
  },

  "document-requirements-uae-customs": {
    title: "Required Documents for UAE Customs Clearance",
    subtitle:
      "A complete checklist of documents needed to clear goods through UAE customs quickly and without delays.",
    datePublished: "2025-03-15",
    content: [
      "Having the correct documents is the single most important factor in achieving fast customs clearance in the UAE. Missing or incorrect documents are the leading cause of shipment delays at all UAE entry points.",
      "The core documents required for UAE import customs clearance are: commercial invoice (showing value, quantity, description, and country of origin), packing list, bill of lading or airway bill, and certificate of origin.",
      "For specific product categories, additional documents are required. Food items need a health certificate and often a Dubai Municipality or ADDC approval. Electronics require ESMA type approval. Medicines require MOHAP import permit.",
      "The commercial invoice must show the correct HS (Harmonized System) code for each product. Using the wrong HS code is one of the most common and costly customs mistakes, leading to incorrect duty assessment and potential penalties.",
      "For re-exports, you will need the original import declaration, proof of duty payment, and a re-export declaration. Transit cargo requires a transit declaration and a customs guarantee or bond.",
      "Border Link provides a full document review service before submission to UAE customs. Our team checks every document for accuracy, ensuring your shipment is cleared first time without rejection or delay.",
    ],
    meta: {
      title: "Required Documents for UAE Customs Clearance | Border Link",
      description:
        "Complete checklist of documents needed for UAE customs clearance. Avoid delays with Border Link's expert document review and clearance service.",
      keywords: [
        "UAE customs clearance documents",
        "documents required UAE import",
        "customs clearance checklist UAE",
        "import documents Dubai",
        "UAE customs documentation requirements",
      ],
    },
  },

  "choosing-customs-broker-dubai": {
    title: "How to Choose the Right Customs Broker in Dubai",
    subtitle:
      "Key factors to consider when selecting a customs broker for your business in Dubai and the UAE.",
    datePublished: "2025-04-01",
    content: [
      "Choosing the right customs broker in Dubai can make a significant difference to your supply chain efficiency and compliance. A good broker saves you time, money, and stress — a poor one can cause costly delays and penalties.",
      "The first thing to verify is whether the customs broker is licensed by the UAE Federal Customs Authority. All customs agents operating in the UAE must be officially registered. Ask for their license number and verify it on the FCA website.",
      "Experience matters in customs clearance. Look for a broker with proven experience in your specific product category. A broker familiar with food imports may not be the best choice for industrial machinery or hazardous materials.",
      "Communication and responsiveness are critical. Your customs broker should be reachable when you need them, especially for time-sensitive shipments. Ask potential brokers about their response times and how they handle urgent clearances.",
      "Transparency in pricing is essential. Get a detailed quote that includes all customs fees, handling charges, and service fees. Avoid brokers who are vague about costs — hidden fees can significantly increase your total logistics cost.",
      "Border Link is a licensed customs broker based at Hatta, Dubai, with years of experience handling imports, exports, re-exports, and transit cargo. We offer transparent pricing, 24/7 support, and guaranteed compliance. Contact us for a free consultation.",
    ],
    meta: {
      title: "How to Choose a Customs Broker in Dubai | Border Link",
      description:
        "Learn how to choose the right customs broker in Dubai. Border Link is a licensed, experienced customs broker at Hatta offering transparent pricing and fast clearance.",
      keywords: [
        "customs broker Dubai",
        "how to choose customs broker UAE",
        "licensed customs broker Dubai",
        "best customs broker Hatta",
        "customs agent Dubai UAE",
      ],
    },
  },
};

// Pre-render all blog posts at build time
export async function generateStaticParams() {
  return Object.keys(blogs).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = blogs[slug];

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
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: blog.meta.title,
      description: blog.meta.description,
      url: `${BASE_URL}/blog/${slug}`,
      type: "article",
      publishedTime: blog.datePublished,
      siteName: "Border Link Customs Delivery",
    },
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = blogs[slug];

  if (!blog) {
    return <p className="text-center text-white py-20">Blog not found.</p>;
  }

  // Article JSON-LD — enables Google Article rich results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.meta.title,
    description: blog.meta.description,
    url: `${BASE_URL}/blog/${slug}`,
    datePublished: blog.datePublished,
    dateModified: blog.datePublished,
    author: {
      "@type": "Organization",
      name: "Border Link Cargo & Customs Broker LLC",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Border Link Cargo & Customs Broker LLC",
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/icon.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${slug}`,
    },
    keywords: blog.meta.keywords.join(", "),
  };

  return (
    <div className="space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogHero title={blog.title} subtitle={blog.subtitle} />
      <section className="max-w-5xl mx-auto px-4 md:px-8 space-y-6">
        {blog.content.map((paragraph, idx) => (
          <p key={idx} className="text-gray-300 font-inter text-lg">
            {paragraph}
          </p>
        ))}
      </section>
      <BlogContactCTA />
    </div>
  );
}
