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
    "Customs Clearance Dubai",
    "Logistics Services UAE",
    "Freight Forwarding",
    "Import Export Dubai",
    "Border Link",
    "Hatta Border",
    "Customs Broker",
    "Product Registration Dubai",
    "Dubai Municipality Approval",
    "Land Transport UAE",
    "Customs Broker UAE",
    "Import Export Agent",
  ],
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Expert Customs Clearance & Logistics in Dubai | Border Link",
    description:
      "Expert customs clearance and logistics solutions in Dubai and across the UAE. Simplifies cross-border trade.",
    url: "https://borderlink.info",
    siteName: "Border Link Customs Delivery",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Customs Clearance & Logistics in Dubai | Border Link",
    description:
      "Fast & reliable customs clearance in Dubai. We handle your logistics so you don't have to.",
    // images: ["/twitter-image.jpg"], // Add if you have a specific twitter image
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

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Border Link Customs Delivery",
  image: "https://borderlink.info/icon.png",
  "@id": "https://borderlink.info",
  url: "https://borderlink.info",
  telephone: "+971566771884",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hatta Border",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "00000",
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
  sameAs: [
    "https://borderlink.info",
    // Add social profiles here if available
  ],
};
