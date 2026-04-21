import { Metadata } from "next";

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://borderlink.info"),
  title: {
    default: "Expert Customs Clearance & Logistics in Dubai | Border Link",
    template: "%s | Border Link",
  },
  description:
    "Border Link Cargo & Customs Broker LLC – Fast, reliable customs clearance & logistics services at Hatta-Dubai border and all UAE ports.",
  keywords: [
    "customs clearance Dubai",
    "customs broker Dubai",
    "logistics services UAE",
    "freight forwarding Dubai",
    "import export Dubai",
    "Hatta border customs clearance",
    "Dubai customs agent",
    "UAE customs clearance company",
    "customs clearance services UAE",
    "product registration Dubai",
    "Dubai Municipality approval",
    "land transport UAE",
    "GCC logistics",
    "cross border trade UAE",
    "customs documentation Dubai",
    "import clearance UAE",
    "export clearance Dubai",
    "Border Link customs",
  ],
  alternates: {
    canonical: "https://borderlink.info",
  },
  openGraph: {
    title: "Expert Customs Clearance & Logistics in Dubai | Border Link",
    description:
      "Expert customs clearance and logistics solutions in Dubai and across the UAE. Simplifies cross-border trade.",
    url: "https://borderlink.info",
    siteName: "Border Link Customs Delivery",
    locale: "en_US",
    type: "website",
    // TODO: Add a 1200×630 image at /public/og-image.jpg for rich social sharing previews
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Border Link – Customs Clearance Dubai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Customs Clearance & Logistics in Dubai | Border Link",
    description:
      "Fast & reliable customs clearance in Dubai. We handle your logistics so you don't have to.",
    // TODO: Add same image here once created
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    name: "Border Link Cargo & Customs Broker LLC",
    alternateName: "Border Link Customs Delivery",
    description:
      "Expert customs clearance and logistics services in Dubai and across all UAE borders. Specializing in import/export customs clearance, freight forwarding, product registration, and land transport.",
    image: "https://borderlink.info/icon.png",
    logo: "https://borderlink.info/icon.png",
    "@id": "https://borderlink.info",
    url: "https://borderlink.info",
    telephone: "+971566771884",
    priceRange: "$$",
    areaServed: [
      { "@type": "City", name: "Dubai" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "AdministrativeArea", name: "GCC" },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hatta Border",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Customs Clearance & Logistics Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Customs Clearance Dubai",
            description:
              "Professional customs clearance for imports and exports at all UAE borders including Hatta.",
            url: "https://borderlink.info/services/customs-clearance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Approvals & Registrations",
            description:
              "Dubai Municipality approvals and product registration services.",
            url: "https://borderlink.info/services/approvals-registrations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Logistics & Transportation",
            description:
              "Reliable land transport and freight forwarding across the UAE and GCC.",
            url: "https://borderlink.info/services/logistics-transportation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "E-Services",
            description: "24/7 online customs documentation and e-services.",
            url: "https://borderlink.info/services/e-services",
          },
        },
      ],
    },
    // TODO: Add your social media profile URLs here for brand authority signals
    // e.g. "https://www.instagram.com/borderlink", "https://www.linkedin.com/company/borderlink"
    sameAs: ["https://borderlink.info"],
  },
];
