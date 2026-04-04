import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Post a Tender in Minutes. Get Competing Bids in 48 Hours.",
    desc1: `Buyers post a structured RFQ with specs, quantity, delivery timelines and budget. Our platform instantly matches it to the most relevant verified vendors in your category and region.`,
    desc2: `No more calling 10 vendors on WhatsApp. No more incomparable quotes. Just structured, auditable, competitive bidding — done digitally.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Every Vendor Verified. Every Bid Sealed. Zero Price Fixing.",
    desc1: `All vendors are verified via GST, PAN and Udyam before they can bid on a single tender. Bids are submitted sealed — no vendor sees a competitor's offer until the round closes.`,
    desc2: `Our AI benchmarks every bid against real market rates from industrial hubs across India, so buyers always know they're getting a genuinely competitive price.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabThree",
    title: "Digital Contracts, Escrow Payments. Zero Risk on Every Deal.",
    desc1: `Once a bid is awarded, a legally binding contract is auto-generated and signed digitally via Class 3 DSC — no paper, no courier, no delay.`,
    desc2: `Buyer funds are held in RBI-compliant escrow and released automatically only when delivery is confirmed. 100% payment protection for buyers. Guaranteed payment for vendors.`,
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
];

export default featuresTabData;
