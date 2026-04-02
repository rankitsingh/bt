import type { Metadata } from "next";
import "@/app/globals.css";
import ClientLayout from "./Provider";

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
  verification: {
    google: "bharattender-google-verification",
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

        {/* Favicon */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#0D1B3E" />

        {/* Structured Data — JSON-LD for Google + AI crawlers */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://bharattender.ai/#website",
              "url": "https://bharattender.ai",
              "name": "BharatTender",
              "description": "India's first private B2B tender marketplace",
              "publisher": { "@id": "https://bharattender.ai/#organization" },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://bharattender.ai/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "Organization",
              "@id": "https://bharattender.ai/#organization",
              "name": "BharatTender Technologies Pvt. Ltd.",
              "url": "https://bharattender.ai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://bharattender.ai/images/logo/bharattender-logo.png",
                "width": 300,
                "height": 100,
              },
              "description": "BharatTender is India's first private B2B tender marketplace connecting buyers with GST-verified vendors through sealed competitive bidding, digital contracts, and escrow-secured payments.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Gurugram",
                "addressRegion": "Haryana",
                "addressCountry": "IN",
              },
              "areaServed": "IN",
              "sameAs": [
                "https://linkedin.com/company/bharattender",
                "https://twitter.com/bharattender",
              ],
            },
            {
              "@type": "WebApplication",
              "name": "BharatTender Platform",
              "url": "https://app.bharattender.ai",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "description": "Post tenders, receive sealed bids from verified vendors, sign digital contracts, and release escrow payments on delivery.",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "INR",
                "description": "Free to post first tender. No credit card required.",
              },
              "featureList": [
                "GST and Udyam verified vendor network",
                "Sealed competitive bidding engine",
                "AI-powered tender-vendor matching",
                "Digital contracts with Class 3 DSC e-signature",
                "RBI-compliant escrow payment protection",
                "Real-time order tracking and milestone payments",
                "Multi-user org dashboard with approval workflows",
                "Pan-India industrial hub coverage",
              ],
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is BharatTender?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "BharatTender is India's first private B2B tender marketplace where businesses post tenders, GST-verified vendors submit sealed competitive bids, and deals close with digital contracts and escrow-secured payments — all on one platform.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "How much can I save using BharatTender?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Businesses typically save 10-15% on every purchase through competitive sealed bidding and AI price benchmarking against real market rates across Indian industrial hubs.",
                  },
                },
                {
                  "@type": "Question",
                  "name": "Is BharatTender free to use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Posting your first tender is completely free. No credit card required to get started.",
                  },
                },
              ],
            },
          ],
        })}} />
      </head>
      <body suppressHydrationWarning style={{ fontFamily: "'Instrument Sans', sans-serif" }}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
