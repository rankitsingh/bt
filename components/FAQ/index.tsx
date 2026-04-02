"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "./faqData";
import SectionHeader from "../Common/SectionHeader";

const FAQ = () => {
  const [openId, setOpenId] = useState<number | null>(1);

  return (
    <section id="faq" className="py-20 lg:py-25 bg-[#F7F8FC]">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <SectionHeader
          headerInfo={{
            title: "FAQ",
            subtitle: "Frequently Asked Questions",
            description: "Everything you need to know about how BharatTender works for buyers and vendors.",
          }}
        />

        <div className="mt-12 max-w-3xl mx-auto flex flex-col gap-3">
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className={`bg-white border rounded-xl overflow-hidden transition-all ${
                openId === faq.id ? "border-[#0D1B3E]/20 shadow-solid-2" : "border-stroke"
              }`}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-semibold text-sm text-[#0D1B3E] pr-4">{faq.quest}</span>
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all font-bold text-sm ${
                  openId === faq.id
                    ? "bg-[#0D1B3E] text-white"
                    : "bg-[#F7F8FC] text-[#757693] border border-stroke"
                }`}>
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence>
                {openId === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-sm text-[#757693] leading-relaxed border-t border-stroke pt-4">
                      {faq.ans}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
