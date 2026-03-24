"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import featuresTabData from "./featuresTabData";
import Image from "next/image";

const FeaturesTab = () => {
  const [activeTab, setActiveTab] = useState("tabOne");

  const tabs = [
    { id: "tabOne", label: "Smart Tendering" },
    { id: "tabTwo", label: "Verified Bidding" },
    { id: "tabThree", label: "Secure Settlement" },
  ];

  const active = featuresTabData.find((t) => t.id === activeTab);

  return (
    <section className="py-20 lg:py-25 bg-white">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-4">
            <span className="w-5 h-0.5 bg-[#1D4ED8] rounded" />
            Platform Deep Dive
          </span>
          <h2 className="text-3xl font-bold text-[#0D1B3E] lg:text-4xl tracking-tight">
            An Active Marketplace. Not a Directory.
          </h2>
          <p className="text-[#757693] mt-4 max-w-xl mx-auto">
            Unlike directories where you call suppliers off a list — BharatTender runs the entire deal on-platform, from tender to payment.
          </p>
        </div>

        {/* Tab buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-[#F7F8FC] border border-stroke rounded-xl p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0D1B3E] text-white shadow-md"
                    : "text-[#757693] hover:text-[#0D1B3E]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {active && (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-[#0D1B3E] mb-5 leading-tight">{active.title}</h3>
              <p className="text-[#757693] leading-relaxed mb-4">{active.desc1}</p>
              <p className="text-[#757693] leading-relaxed">{active.desc2}</p>
              <div className="mt-8 flex flex-col gap-3">
                {[
                  "End-to-end accountability on every deal",
                  "No WhatsApp, no cheques, no uncertainty",
                  "Built for India's private businesses",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-[#3D4461]">
                    <span className="w-5 h-5 bg-[#ECFDF5] rounded-full flex items-center justify-center text-[#059669] font-bold text-xs">✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-stroke shadow-solid-3">
              <Image
                src={active.image}
                alt={active.title}
                width={700}
                height={444}
                className="w-full dark:hidden"
              />
              <Image
                src={active.imageDark}
                alt={active.title}
                width={700}
                height={444}
                className="w-full hidden dark:block"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturesTab;
