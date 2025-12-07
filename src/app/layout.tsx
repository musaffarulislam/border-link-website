import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { jsonLd } from "./schema";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // Regular, SemiBold, Bold
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://borderlink.info"),
  title: {
    default: "Border Link | Customs Clearance & Logistics Dubai",
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
  ],
  openGraph: {
    title: "Border Link | Customs Clearance & Logistics Dubai",
    description:
      "Expert customs clearance and logistics solutions in Dubai and across the UAE. Simplifies cross-border trade.",
    url: "https://borderlink.info",
    siteName: "Border Link Customs Delivery",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Border Link | Customs Clearance & Logistics Dubai",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
