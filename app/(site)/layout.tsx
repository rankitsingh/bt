import type { Metadata } from "next";
import "@/app/globals.css";
import ClientLayout from "./Provider";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "BharatTender — India's #1 B2B Tender Marketplace | Save 10-15% on Every Purchase",
  description:
    "Post a tender, get competing bids from verified vendors, sign digital contracts, and pay safely through escrow. BharatTender is India's first private procurement marketplace — replacing WhatsApp deals with 100% secure, transparent bidding.",
  keywords: [
    "B2B tender marketplace India",
    "private procurement platform",
    "vendor bidding India",
    "tender posting platform",
    "GST verified vendors India",
    "sealed bid procurement",
    "escrow payment B2B India",
    "BharatTender",
    "GeM for private business",
    "digital procurement India",
    "buy sell tender India",
    "procurement marketplace SME MSME",
    "verified vendor network India",
    "online tender platform",
  ],
  authors: [{ name: "BharatTender Technologies Pvt. Ltd." }],
  creator: "BharatTender",
  publisher: "BharatTender Technologies Pvt. Ltd.",
  metadataBase: new URL("https://bharattender.ai"),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bharattender.ai",
    siteName: "BharatTender",
    title: "BharatTender — India's #1 B2B Tender Marketplace",
    description:
      "Post a tender. Get competing bids from verified vendors. Pay safely through escrow. India's first private procurement marketplace — 100% secure, 10-15% cheaper.",
    images: [{
      url: "/images/logo/bharattender-logo.png",
      width: 1200,
      height: 630,
      alt: "BharatTender — India's Private B2B Tender Marketplace",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BharatTender — Post Tenders. Verified Vendors Compete. You Win.",
    description: "India's first private B2B tender marketplace. Save 10-15% on every purchase with sealed competitive bids and escrow-secured payments.",
    images: ["/images/logo/bharattender-logo.png"],
    creator: "@bharattender",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "Business",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Instrument+Sans:wght@400;500;600&display=swap" rel="stylesheet" />

        {/* Favicon — explicit override for all browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0D1B3E" />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://bharattender.ai/#website",
              "url": "https://bharattender.ai",
              "name": "BharatTender",
              "description": "India's first private B2B tender marketplace",
            },
            {
              "@type": "Organization",
              "@id": "https://bharattender.ai/#organization",
              "name": "BharatTender Technologies Pvt. Ltd.",
              "url": "https://bharattender.ai",
              "logo": "https://bharattender.ai/images/logo/bharattender-logo.png",
              "description": "BharatTender is India's first private B2B tender marketplace.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "addressCountry": "IN",
              },
            },
          ],
        })}} />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
        <ClientLayout>{children}</ClientLayout>
        <SpeedInsights />
      </body>
    </html>
  );
}
