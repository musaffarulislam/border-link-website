import { Metadata } from "next";

export const siteMetadata: Metadata = {
  // ... existing metadata ...
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
