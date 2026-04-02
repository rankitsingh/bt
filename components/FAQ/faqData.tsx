import { FAQ } from "@/types/faq";

const faqData: FAQ[] = [
  {
    id: 1,
    quest: "How is BharatTender different from IndiaMart or TradeIndia?",
    ans: "IndiaMart is a directory — you browse listings and call suppliers on WhatsApp. BharatTender is an active deal platform. You post a structured tender, verified vendors submit sealed bids, a digital contract is signed, and payment is released from escrow only on delivery. The entire procurement cycle happens on-platform with full accountability.",
  },
  {
    id: 2,
    quest: "How are vendors verified on BharatTender?",
    ans: "Every vendor on BharatTender is verified via GST registration, PAN, and Udyam/MSME certification before they can bid on any tender. Our team manually reviews credentials within 48 hours. No fake suppliers, no unregistered businesses — just a network of legitimate, verified Indian businesses.",
  },
  {
    id: 3,
    quest: "How does the escrow payment system work?",
    ans: "When a buyer awards a tender, the payment amount is held in an RBI-compliant escrow account — not paid directly to the vendor. The funds are released automatically when the buyer confirms delivery of the order. This gives buyers 100% payment protection and guarantees vendors get paid on time, every time.",
  },
  {
    id: 4,
    quest: "What is sealed bidding and why does it matter?",
    ans: "In sealed bidding, all vendors submit their bids simultaneously without seeing each other's offers. This eliminates price fixing and collusion — vendors must put their absolute best price forward. Our AI then benchmarks all bids against real market rates from industrial hubs across India, so buyers always know they're getting a fair price.",
  },
  {
    id: 5,
    quest: "How much does it cost to post a tender or register as a vendor?",
    ans: "Posting your first tender is free. Registering as a vendor is also free. We're currently in early access — businesses and vendors who join now will be among the first on the platform and will receive priority onboarding from our team.",
  },
  {
    id: 6,
    quest: "Is BharatTender only for large businesses?",
    ans: "Not at all. BharatTender is built for India's 6.3 crore private businesses — from SMEs and MSMEs to mid-size manufacturers and traders. If you source raw materials, equipment, services or any supplies for your business, BharatTender is for you. Similarly, any GST-registered supplier or manufacturer can join as a vendor.",
  },
];

export default faqData;
