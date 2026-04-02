"use client";
import { motion } from "framer-motion";
import featuresData from "./featuresData";
import SectionHeader from "../Common/SectionHeader";

const featureIcons = ["✅", "🔐", "🤖", "✍️", "🛡️", "📊"];
const featureBg = [
  "bg-[#ECFDF5]", "bg-[#EFF6FF]", "bg-[#FFFBEB]",
  "bg-[#FEF2F2]", "bg-[#FEF3C7]", "bg-[#F5F3FF]",
];

const Feature = () => (
  <section id="features" className="py-20 lg:py-25 bg-[#F7F8FC]">
    <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
      <SectionHeader
        headerInfo={{
          title: "THE ECOSYSTEM",
          subtitle: "Everything Procurement. One Platform.",
          description:
            "We've rebuilt the entire private procurement stack — verified suppliers, sealed bidding, digital contracts, escrow payments — the way GeM transformed government buying, but for private enterprise.",
        }}
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:mt-16">
        {featuresData.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-stroke rounded-2xl p-7 hover:-translate-y-1 hover:shadow-solid-3 transition-all duration-300 group"
          >
            <div className={`w-11 h-11 ${featureBg[i]} rounded-xl flex items-center justify-center text-xl mb-5`}>
              {featureIcons[i]}
            </div>
            <h3 className="font-bold text-base text-[#0D1B3E] mb-3 group-hover:text-[#0D1B3E]">{f.title}</h3>
            <p className="text-sm text-[#757693] leading-relaxed">{f.description}</p>
            <div className="mt-4 pt-4 border-t border-stroke">
              <span className="text-xs font-bold text-[#757693]">
                {["KYC / GST Integrated", "Transparent & Auditable", "AI-Powered Matching",
                  "PKI Encrypted", "Funds Protected", "Visibility for Leaders"][i]}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Feature;
