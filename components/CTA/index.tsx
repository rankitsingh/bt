"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [modalType, setModalType] = useState<"buyer" | "vendor" | null>(null);

  return (
    <>
      <section className="px-4 py-16 md:px-8 lg:py-20 2xl:px-0">
        <div className="mx-auto max-w-c-1390">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#0D1B3E] rounded-2xl px-10 py-14 lg:px-16 lg:py-16 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#F59E0B] rounded-full opacity-5 blur-2xl" />
            <div className="lg:max-w-xl relative z-10">
              <h2 className="text-2xl font-bold text-white lg:text-3xl tracking-tight mb-3">
                India's Private Businesses Deserve More Than a Phone Call.
              </h2>
              <p className="text-white/50 text-sm leading-relaxed">
                Join the waitlist — whether you're sourcing materials or supplying them, BharatTender gives you the infrastructure India's private trade has never had.
              </p>
            </div>
            <div className="flex flex-col gap-3 relative z-10 flex-shrink-0">
              <button
                onClick={() => setModalType("buyer")}
                className="px-8 py-3.5 bg-[#F59E0B] text-white font-bold rounded-xl hover:bg-[#E58E08] transition-all hover:-translate-y-0.5 text-sm min-w-[220px] text-center"
              >
                I'm a Buyer — Post a Tender
              </button>
              <button
                onClick={() => setModalType("vendor")}
                className="px-8 py-3.5 bg-transparent text-white/70 border border-white/20 font-semibold rounded-xl hover:bg-white/8 hover:text-white transition-all text-sm text-center"
              >
                I'm a Vendor — Join the Network
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {modalType && (
        <div className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setModalType(null)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-solid-7">
            <button onClick={() => setModalType(null)} className="absolute top-4 right-4 w-8 h-8 bg-[#F7F8FC] rounded-lg flex items-center justify-center text-sm text-[#757693]">✕</button>
            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 ${modalType === "buyer" ? "bg-[#EFF6FF] text-[#1D4ED8]" : "bg-[#FEF3C7] text-[#B45309]"}`}>
              {modalType === "buyer" ? "🏢 For Buyers" : "⚙️ For Vendors"}
            </span>
            <h2 className="text-2xl font-bold text-[#0D1B3E] mb-2">
              {modalType === "buyer" ? "Post Your First Tender" : "Register as Verified Vendor"}
            </h2>
            <p className="text-sm text-[#757693] mb-5">{modalType === "buyer" ? "Get started free — your first tender is on us." : "Get discovered by verified buyers. Get paid on time."}</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-[#3D4461]">Full Name *</label><input type="text" placeholder="Rahul Sharma" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-[#3D4461]">Mobile *</label><input type="tel" placeholder="+91 98765 43210" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
            </div>
            <div className="flex flex-col gap-1 mt-3"><label className="text-xs font-semibold text-[#3D4461]">Business Email *</label><input type="email" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
            <div className="flex flex-col gap-1 mt-3"><label className="text-xs font-semibold text-[#3D4461]">Company *</label><input type="text" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
            <button className={`w-full mt-5 py-3.5 rounded-xl font-bold text-white text-sm ${modalType === "buyer" ? "bg-[#0D1B3E]" : "bg-[#F59E0B]"}`}>
              {modalType === "buyer" ? "Get Early Access →" : "Register Now →"}
            </button>
            <p className="text-xs text-[#757693] text-center mt-3">🔒 Your data is 100% secure.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
