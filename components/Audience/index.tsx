"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Audience = () => {
  const [modalType, setModalType] = useState<"buyer" | "vendor" | null>(null);

  return (
    <>
      <section id="audience" className="py-20 lg:py-25 bg-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-4">
              <span className="w-5 h-0.5 bg-[#1D4ED8] rounded" />
              Join BharatTender
            </span>
            <h2 className="text-3xl font-bold text-[#0D1B3E] lg:text-4xl tracking-tight">
              Built for Both Sides of India's Procurement Chain.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Buyer card */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#0D1B3E] rounded-2xl p-10 relative overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#F59E0B] rounded-full opacity-5" />
              <span className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                🏢 For Buyers & Enterprises
              </span>
              <h3 className="text-2xl font-bold text-white mb-5 leading-tight">
                Source Smarter.<br />Pay Safer.
              </h3>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Post tenders and receive sealed competitive bids from verified vendors",
                  "Access 10,000+ GST-verified suppliers across India's industrial hubs",
                  "Save 10–15% on every procurement cycle with AI price benchmarking",
                  "100% payment security via RBI-compliant escrow accounts",
                  "Digital contracts signed via Class 3 DSC — no paperwork ever",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="w-5 h-5 bg-[#F59E0B]/25 rounded-full flex items-center justify-center text-[#F59E0B] font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModalType("buyer")}
                className="w-full py-3.5 bg-[#F59E0B] text-white font-bold rounded-xl hover:bg-[#E58E08] transition-all hover:-translate-y-0.5 hover:shadow-xl text-sm"
              >
                Post Your First Tender — Free →
              </button>
            </motion.div>

            {/* Vendor card */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-stroke rounded-2xl p-10 relative overflow-hidden hover:border-[#0D1B3E] transition-colors"
            >
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-[#0D1B3E] rounded-full opacity-4" />
              <span className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">
                ⚙️ For Vendors & Suppliers
              </span>
              <h3 className="text-2xl font-bold text-[#0D1B3E] mb-5 leading-tight">
                Win More Contracts.<br />Get Paid on Time.
              </h3>
              <ul className="flex flex-col gap-3 mb-8">
                {[
                  "Bid on tenders from verified private businesses across India",
                  "Get discovered by buyers in your industry category and region",
                  "Guaranteed payment via escrow — released automatically on delivery",
                  "Build a verified digital reputation with buyer ratings and reviews",
                  "Zero advance payment risk — 100% secure transactions every time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#757693]">
                    <span className="w-5 h-5 bg-[#ECFDF5] rounded-full flex items-center justify-center text-[#059669] font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setModalType("vendor")}
                className="w-full py-3.5 bg-[#0D1B3E] text-white font-bold rounded-xl hover:bg-[#1a2f5e] transition-all hover:-translate-y-0.5 hover:shadow-solid-7 text-sm"
              >
                Register as Verified Vendor →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setModalType(null)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-solid-7">
            <button onClick={() => setModalType(null)} className="absolute top-4 right-4 w-8 h-8 bg-[#F7F8FC] rounded-lg flex items-center justify-center text-[#757693] text-sm">✕</button>
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
            <div className="flex flex-col gap-1 mt-3"><label className="text-xs font-semibold text-[#3D4461]">Business Email *</label><input type="email" placeholder="you@company.com" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-[#3D4461]">Company *</label><input type="text" placeholder="Sharma Industries" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
              <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-[#3D4461]">City</label><input type="text" placeholder="Mumbai" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
            </div>
            <div className="flex flex-col gap-1 mt-3">
              <label className="text-xs font-semibold text-[#3D4461]">{modalType === "buyer" ? "What do you procure?" : "What do you supply?"}</label>
              <select className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E] bg-white">
                <option>Select category</option>
                <option>Raw Materials & Commodities</option>
                <option>Industrial Equipment & Machinery</option>
                <option>IT Hardware & Software</option>
                <option>Logistics & Transport</option>
                <option>Construction & Infrastructure</option>
                <option>Packaging & FMCG</option>
                <option>Textiles & Apparel</option>
                <option>Other</option>
              </select>
            </div>
            <button className={`w-full mt-5 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 ${modalType === "buyer" ? "bg-[#0D1B3E]" : "bg-[#F59E0B]"}`}>
              {modalType === "buyer" ? "Get Early Access →" : "Register Now →"}
            </button>
            <p className="text-xs text-[#757693] text-center mt-3">🔒 Your data is 100% secure.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Audience;
