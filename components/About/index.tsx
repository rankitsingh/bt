"use client";
import { motion } from "framer-motion";

const problemSteps = [
  { num: "1", title: "Calls vendors on WhatsApp", desc: "Gets 5 quotes, all different, no fair way to compare pricing or quality." },
  { num: "2", title: "Picks one blindly", desc: "No verification. The vendor could be fake, unregistered, or unreliable." },
  { num: "3", title: "Pays advance by cheque", desc: "Full payment upfront. No escrow. No guarantee. No protection." },
  { num: "4", title: "Waits. And waits.", desc: "Delivery is late, partial, wrong quality — or doesn't come at all." },
  { num: "5", title: "Loses money", desc: "Vendor ghosts, overcharges, or disputes the order. No recourse.", isRed: true },
];

const stats = [
  { num: "6.3 Cr", label: "Private businesses with no procurement platform", accent: false },
  { num: "63%", label: "B2B invoices overdue or unpaid in private trade", accent: true },
  { num: "10–15%", label: "Overpaid on every purchase — zero price benchmarking", accent: true },
  { num: "₹0", label: "Payment protection for private B2B transactions today", accent: false },
];

const About = () => (
  <section className="py-20 lg:py-25 bg-white">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      {/* Header */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-4">
          <span className="w-5 h-0.5 bg-[#1D4ED8] rounded" />
          The Problem
        </span>
        <h2 className="text-3xl font-bold text-[#0D1B3E] lg:text-4xl tracking-tight mb-4">
          This Is How Private India Still Procures.
        </h2>
        <p className="text-[#757693] max-w-xl mx-auto">
          A factory owner in Surat. A trader in Ludhiana. A contractor in Hyderabad. 6.3 crore private businesses, same broken story.
        </p>
      </div>

      {/* 5-step flow */}
      <div className="relative mb-16">
        {/* Connector line */}
        <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px border-t-2 border-dashed border-stroke z-0" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
          {problemSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-base font-bold mx-auto mb-4 bg-white ${
                step.isRed
                  ? "border-red-200 text-red-500 bg-red-50"
                  : "border-stroke text-[#757693]"
              }`}>
                {step.num}
              </div>
              <h4 className={`text-sm font-bold mb-2 ${step.isRed ? "text-red-500" : "text-[#0D1B3E]"}`}>
                {step.title}
              </h4>
              <p className="text-xs text-[#757693] leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-stroke rounded-2xl overflow-hidden border border-stroke">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`bg-white hover:bg-[#F7F8FC] transition-colors p-8 lg:p-10 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 ${
              i === 0 ? "before:bg-[#F59E0B]" :
              i === 1 ? "before:bg-red-400" :
              i === 2 ? "before:bg-[#1D4ED8]" :
              "before:bg-[#059669]"
            }`}
          >
            <div className="text-3xl lg:text-4xl font-bold text-[#0D1B3E] mb-3">{s.num}</div>
            <div className="text-xs text-[#757693] leading-relaxed">{s.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-10 bg-[#0D1B3E] rounded-2xl p-7 border-l-4 border-[#F59E0B] text-center"
      >
        <p className="text-white/70 italic text-sm lg:text-base">
          "Just like GeM became the backbone of government procurement — BharatTender is building the same infrastructure for India's private enterprise."
        </p>
      </motion.div>
    </div>
  </section>
);

export default About;
