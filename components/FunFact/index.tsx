"use client";
import { motion } from "framer-motion";

const stats = [
  { num: "₹110L Cr", label: "India's annual private B2B procurement market", color: "before:bg-[#F59E0B]" },
  { num: "6.3 Cr", label: "Businesses with zero digital procurement solution today", color: "before:bg-[#60A5FA]" },
  { num: "63%", label: "B2B invoices that are overdue or unpaid in private trade", color: "before:bg-[#34D399]" },
  { num: "3×", label: "Faster sourcing cycles on BharatTender vs manual procurement", color: "before:bg-[#F87171]" },
];

const FunFact = () => (
  <section className="bg-[#0D1B3E] py-20 lg:py-25">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl font-bold text-white lg:text-4xl tracking-tight mb-4">
          The Scale of What We're Solving.
        </h2>
        <p className="text-white/40 max-w-xl mx-auto">
          India's private procurement is a ₹110 Lakh Crore market — still running on WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className={`relative bg-white/4 hover:bg-white/8 transition-colors p-10 text-center before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:w-10 before:h-1 before:rounded-b-sm ${s.color}`}
          >
            <div className="text-4xl font-bold text-white mb-3 lg:text-5xl">{s.num}</div>
            <div className="text-sm text-white/40 leading-relaxed">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FunFact;
