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
      "The UAE Federal Customs Authority updates import and export rules often. They aim to match world trade standards and keep the country safe. Any business that trades across borders must stay current with these changes.",
      "All goods entering the UAE must be declared to customs within 14 days of arrival. If you declare late, you may face fines. For commercial shipments, you must file the declaration online through the UAE customs portal.",
      "Most goods in the UAE face a 5% import duty under the GCC Common External Tariff. But tobacco is taxed at 100%, alcohol at 50%, and some food items at other rates. Goods in free zones are free from duty until they move to the mainland.",
      "Exporters from the UAE need an export declaration for every commercial shipment. For re-exports, you must show proof of the original import and the duty you paid. The UAE also has free trade deals with many countries, which can lower your duty.",
      "Restricted goods need approval before they cross the border. These include medicines, food, chemicals, and electronics. You must get clearance from MOHAP, Dubai Municipality, or ESMA first.",
      "Border Link stays on top of every change to UAE customs rules. Our team makes sure your cargo follows the law. This helps you avoid fines, delays, and rejection at the border. Reach out for a free compliance check.",
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
      "Customs duties are taxes on goods that cross a border. In the UAE, these duties follow the GCC Common Customs Law. The Federal Customs Authority runs the system.",
      "The standard UAE duty is 5% of the CIF value. CIF stands for Cost, Insurance, and Freight. So you pay 5% on the goods, the shipping, and the insurance to the UAE port.",
      "Some goods have very different rates. Tobacco is 100%. Alcohol is 50%. Some food items are 0%. Goods from other GCC states with a valid certificate of origin are usually exempt.",
      "Free zone firms in Dubai and other emirates can bring in goods duty-free. But the goods must stay in the free zone. Once they move to the mainland, the duty applies.",
      "Excise tax is separate from customs duty. It covers carbonated drinks (50%), energy drinks (100%), tobacco (100%), and e-smoking devices (100%).",
      "Paying the wrong duty or hiding the real value can lead to big fines. Border Link's team calculates the right amount for you. We also show you legal ways to lower your duty through proper tariff codes.",
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
    title: "Hatta Border Crossing Guide for Trade & Travel",
    subtitle:
      "Your complete guide to using the Hatta border crossing for trade, travel, and logistics between Dubai and Oman.",
    datePublished: "2025-03-01",
    content: [
      "The Hatta border crossing sits about 130 km from Dubai city center. It lies in the Hajar Mountains. The crossing links Dubai to the Omani enclave of Madha and to the rest of Oman.",
      "For cargo, the Hatta crossing is open 24 hours a day, 7 days a week. Traders and logistics firms use it to move goods between the UAE and Oman. It is much less busy than the larger ports.",
      "Vehicles crossing at Hatta need valid UAE registration and insurance. They also need all cargo papers. Commercial trucks must carry a customs declaration, packing list, commercial invoice, and certificate of origin.",
      "Clearance at Hatta usually takes 1 to 4 hours for ready shipments. Border Link is at Shop no.29, Hatta Souq & Guest House, only minutes from the border. So we can clear your cargo fast.",
      "Common goods cleared at Hatta include building materials, food, machinery, vehicles, personal effects, and general cargo. Border Link handles all of these. We know the rules for each type.",
      "New to exporting? Or a large trading firm? Border Link can help either way. We offer reliable clearance, freight forwarding, and logistics at Hatta. Drop by or call us for same-day help.",
    ],
    meta: {
      title: "Hatta Border Crossing Guide – Trade & Travel",
      description:
        "Complete guide to the Hatta border crossing for trade and travel. Border Link handles customs clearance and freight forwarding at Hatta border.",
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
    title: "How to Choose a Customs Broker in Dubai",
    subtitle:
      "Key factors to consider when selecting a customs broker for your business in Dubai and the UAE.",
    datePublished: "2025-04-01",
    content: [
      "Picking the right customs broker in Dubai can really shape your supply chain. A good broker saves you time, money, and stress. A bad one can mean costly delays and fines.",
      "First, check that the broker is licensed. All customs agents in the UAE must be registered with the UAE Federal Customs Authority. Ask for the license number and check it on the FCA website.",
      "Experience matters. Look for a broker who has worked with your type of goods before. A broker who handles food may not be the best fit for heavy machinery or hazardous materials.",
      "Communication is key. Your broker should be easy to reach, especially when a shipment is urgent. Ask how fast they reply and how they handle rush jobs.",
      "Pricing should be clear. Get a full quote that lists all fees — customs, handling, and service. Stay away from brokers who are vague about costs, since hidden fees can add up fast.",
      "Border Link is a licensed broker based at Hatta, Dubai. We have years of experience with imports, exports, re-exports, and transit cargo. Our pricing is clear, our team is on call 24/7, and we follow every UAE rule. Reach out for a free chat about your needs.",
    ],
    meta: {
      title: "How to Choose a Customs Broker in Dubai | Border Link",
      description:
        "Learn how to choose the right customs broker in Dubai. Border Link is a licensed, experienced broker at Hatta with clear pricing and fast clearance.",
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
