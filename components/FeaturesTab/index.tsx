"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const tabs = [
  {
    id: "smart",
    label: "Smart Tendering",
    image: "/images/features/smart-tendering.svg",
    headline: "Post a Tender in Minutes. Get Competing Bids in 48 Hours.",
    para1: "Buyers post a structured RFQ with specs, quantity, delivery timelines and budget. Our AI instantly matches it to the most relevant verified vendors in your category and region.",
    para2: "No more calling 10 vendors on WhatsApp. No more incomparable quotes. Just structured, auditable, competitive bidding — done digitally.",
    bullets: [
      "Structured RFQ with specs, quantity & timelines",
      "AI matches to 24+ verified vendors instantly",
      "Full audit trail from day one",
    ],
    tag: "48h avg time to first bids",
    tagColor: "bg-blue-50 text-blue-700",
  },
  {
    id: "bidding",
    label: "Verified Bidding",
    image: "/images/features/verified-bidding.svg",
    headline: "Every Vendor Verified. Every Bid Sealed. Zero Price Fixing.",
    para1: "All vendors are verified via GST, PAN and Udyam before they can bid on a single tender. Bids are submitted sealed — no vendor sees a competitor's offer until the round closes.",
    para2: "Our AI benchmarks every bid against real market rates from industrial hubs across India, so buyers always know they're getting a genuinely competitive price.",
    bullets: [
      "GST + Udyam verified — no fake suppliers",
      "Sealed simultaneous bids — zero collusion",
      "AI price benchmarking against market rates",
    ],
    tag: "10–15% avg savings per tender",
    tagColor: "bg-green-50 text-green-700",
  },
  {
    id: "settlement",
    label: "Secure Settlement",
    image: "/images/features/secure-settlement.svg",
    headline: "Digital Contracts. Escrow Payments. Zero Risk on Every Deal.",
    para1: "Once a bid is awarded, a legally binding contract is auto-generated and signed digitally via Class 3 DSC — no paper, no courier, no delay.",
    para2: "Buyer funds are held in RBI-compliant escrow and released automatically only when delivery is confirmed. 100% payment protection for buyers. Guaranteed payment for vendors.",
    bullets: [
      "Auto-generated contracts signed via Class 3 DSC",
      "RBI-compliant escrow — funds released on delivery",
      "100% payment protection for both sides",
    ],
    tag: "₹0 payment risk on every deal",
    tagColor: "bg-amber-50 text-amber-700",
  },
];

const FeaturesTab = () => {
  const [active, setActive] = useState("smart");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="py-20 lg:py-25 bg-white">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
            <span className="w-5 h-0.5 bg-blue-700 rounded" />
            Platform Deep Dive
          </span>
          <h2 className="text-3xl font-extrabold text-[#0D1B3E] lg:text-4xl tracking-tight mb-4">
            An Active Marketplace. Not a Directory.
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            Unlike directories where you call suppliers off a list — BharatTender runs the entire deal on-platform, from tender to payment.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 border border-gray-200 rounded-xl p-1 gap-1">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  active === t.id
                    ? "bg-[#0D1B3E] text-white shadow-md"
                    : "text-gray-500 hover:text-[#0D1B3E] hover:bg-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left: copy */}
            <div>
              <h3 className="text-2xl font-extrabold text-[#0D1B3E] mb-5 leading-tight">{tab.headline}</h3>
              <p className="text-gray-500 leading-relaxed mb-4 text-sm">{tab.para1}</p>
              <p className="text-gray-500 leading-relaxed mb-7 text-sm">{tab.para2}</p>

              <ul className="flex flex-col gap-3 mb-7">
                {tab.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold text-xs flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              <span className={`inline-block text-xs font-bold px-4 py-2 rounded-full ${tab.tagColor}`}>
                📊 {tab.tag}
              </span>
            </div>

            {/* Right: real platform screenshot */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl bg-white">
              <Image
                src={tab.image}
                alt={tab.label}
                width={900}
                height={560}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesTab;
