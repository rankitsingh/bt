"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Hero = () => {
  const [modalType, setModalType] = useState<"buyer" | "vendor" | null>(null);

  return (
    <>
      <section className="relative overflow-hidden bg-[#0D1B3E] pt-40 pb-20 lg:pt-48 lg:pb-28">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow blobs */}
        <div className="absolute -top-20 right-1/4 w-96 h-96 bg-[#F59E0B] rounded-full opacity-5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#1D4ED8] rounded-full opacity-8 blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
            {/* Left copy */}
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-2 text-xs font-semibold text-white/70 mb-6 bg-white/5">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse" />
                  Live Marketplace · India's Private Procurement Exchange
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
              >
                Post a Tender.{" "}
                <span className="text-[#F59E0B]">Verified Vendors</span>{" "}
                Compete.{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">You Win.</span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F59E0B] opacity-40 rounded" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-base text-white/60 leading-relaxed max-w-lg mb-8"
              >
                India's first private B2B tender marketplace — replacing WhatsApp procurement with sealed bids, verified vendors, digital contracts and escrow-secured payments. The entire deal happens on-platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <button
                  onClick={() => setModalType("buyer")}
                  className="flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-white font-semibold rounded-xl hover:bg-[#E58E08] transition-all hover:-translate-y-0.5 hover:shadow-xl text-sm"
                >
                  Post a Tender
                  <span className="bg-white/20 rounded-md px-1.5 py-0.5 text-xs">→</span>
                </button>
                <button
                  onClick={() => setModalType("vendor")}
                  className="flex items-center gap-2 px-7 py-3.5 bg-transparent text-white font-semibold border border-white/30 rounded-xl hover:bg-white/10 transition-all text-sm"
                >
                  Join as Vendor
                </button>
              </motion.div>

              {/* Proof strip */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {["#1D4ED8","#059669","#D97706","#7C3AED","#DB2777"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center text-xs font-bold text-white" style={{ background: c }}>
                      {["RS","PK","AM","SK","NR"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-white/50"><strong className="text-white">500+</strong> businesses on waitlist</span>
                <div className="w-px h-4 bg-white/20" />
                <span className="text-xs text-white/50"><strong className="text-white">3×</strong> Faster sourcing</span>
                <div className="w-px h-4 bg-white/20" />
                <span className="text-xs text-white/50"><strong className="text-white">100%</strong> Escrow secured</span>
              </motion.div>
            </div>

            {/* Right mockup */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block lg:w-1/2 mt-12 lg:mt-0 relative"
            >
              {/* Float chips */}
              <div className="absolute -left-10 top-1/4 bg-white rounded-xl p-3 shadow-solid-7 z-10 animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#ECFDF5] rounded-lg flex items-center justify-center text-sm">✅</div>
                  <div>
                    <div className="text-xs font-bold text-[#0D1B3E]">Vendor Verified</div>
                    <div className="text-[10px] text-[#757693]">GST + Udyam confirmed</div>
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 bottom-1/4 bg-white rounded-xl p-3 shadow-solid-7 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#FEF3C7] rounded-lg flex items-center justify-center text-sm">💰</div>
                  <div>
                    <div className="text-xs font-bold text-[#0D1B3E]">₹62,000 Saved</div>
                    <div className="text-[10px] text-[#757693]">vs last purchase</div>
                  </div>
                </div>
              </div>

              {/* Browser mockup */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-solid-7 border border-white/10">
                {/* Title bar */}
                <div className="bg-[#F7F8FC] border-b border-stroke h-10 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  <div className="flex-1 mx-3 bg-white rounded-md h-6 border border-stroke flex items-center px-3">
                    <span className="text-[10px] text-[#757693]">app.bharattender.ai/dashboard</span>
                  </div>
                </div>
                {/* App body */}
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="font-bold text-sm text-[#0D1B3E]">Active Tenders</div>
                      <div className="text-xs text-[#757693]">Your organisation · 3 live</div>
                    </div>
                    <span className="flex items-center gap-1.5 bg-[#ECFDF5] text-[#059669] text-xs font-bold px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 bg-[#059669] rounded-full animate-pulse" /> Live
                    </span>
                  </div>

                  {[
                    { name: "Steel Coils — Q2 Supply", meta: "Mumbai · 2 days ago", amount: "₹18.4L", bids: "12 bids", status: "Open", statusColor: "bg-[#ECFDF5] text-[#059669]" },
                    { name: "Office IT Equipment Refresh", meta: "Bengaluru · 5 days ago", amount: "₹6.2L", bids: "8 bids", status: "Review", statusColor: "bg-[#FEF3C7] text-[#B45309]" },
                    { name: "Packaging Material Batch", meta: "Surat · 10 days ago", amount: "₹3.9L", bids: "Saved ₹62K", status: "Awarded ✓", statusColor: "bg-[#F1F5F9] text-[#757693]" },
                  ].map((t, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl mb-2 border transition-all ${i === 0 ? "bg-[#EFF6FF] border-[#BFDBFE]" : "bg-[#F7F8FC] border-stroke"}`}>
                      <div>
                        <div className="text-xs font-semibold text-[#0D1B3E]">{t.name}</div>
                        <div className="text-[10px] text-[#757693] mt-0.5">{t.meta}</div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 inline-block ${t.statusColor}`}>{t.status}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#0D1B3E]">{t.amount}</div>
                        <div className="text-[10px] text-[#757693]">{t.bids}</div>
                      </div>
                    </div>
                  ))}

                  <div className="mt-3 bg-[#0D1B3E] rounded-xl p-3.5 flex items-center gap-3">
                    <span className="text-lg">🔐</span>
                    <div>
                      <div className="text-[10px] text-white/50">Escrow Balance Protected</div>
                      <div className="text-sm font-bold text-[#F59E0B]">₹22.6L secured</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-stroke bg-white py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(3).fill([
            "Post a Tender", "Verified Vendor Network", "Sealed Bid Engine",
            "Escrow-Secured Deals", "AI Matching", "Digital Contracts & DSC",
            "GST & Udyam Verified", "3× Faster Sourcing", "Pan-India Network",
          ]).flat().map((item, i) => (
            <span key={i} className="flex items-center gap-3 px-8 text-xs font-semibold text-[#757693]">
              {item} <span className="text-[#F59E0B] text-base">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalType && (
        <div className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setModalType(null)}>
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-solid-7">
            <button onClick={() => setModalType(null)} className="absolute top-4 right-4 w-8 h-8 bg-[#F7F8FC] rounded-lg flex items-center justify-center text-[#757693] hover:bg-stroke text-sm">✕</button>
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

export default Hero;
