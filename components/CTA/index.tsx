"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const CTA = () => {
  const [modal, setModal] = useState<"buyer" | "vendor" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const open = (t: "buyer" | "vendor") => { setSubmitted(false); setModal(t); };

  return (
    <>
      <section className="px-4 py-16 md:px-8 2xl:px-0 bg-white">
        <div className="mx-auto max-w-c-1390">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-[#0D1B3E] px-8 py-14 lg:px-14 lg:py-16"
          >
            {/* Decorations */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#F59E0B] rounded-full opacity-[0.06] blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-10 w-60 h-60 bg-blue-500 rounded-full opacity-[0.05] blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

              {/* Left */}
              <div className="lg:max-w-[520px]">
                <span className="inline-flex items-center gap-2 bg-[#F59E0B]/15 text-[#F59E0B] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
                  <span className="w-1.5 h-1.5 bg-[#F59E0B] rounded-full animate-pulse" />
                  Early Access · Limited Spots Available
                </span>
                <h2 className="text-2xl font-extrabold text-white lg:text-3xl leading-tight mb-3 tracking-tight">
                  Stop Losing Money on WhatsApp Deals.
                  <br />
                  <span className="text-[#F59E0B]">Start Winning with BharatTender.</span>
                </h2>
                <p className="text-sm text-white/45 leading-relaxed mb-5">
                  500+ businesses already on the waitlist. The first 100 buyers get free onboarding support from our procurement team.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["✓ Free to start", "✓ No credit card", "✓ Setup in 10 mins", "✓ Cancel anytime"].map((t, i) => (
                    <span key={i} className="text-xs font-semibold text-white/35">{t}</span>
                  ))}
                </div>
              </div>

              {/* Right CTAs */}
              <div className="flex flex-col gap-3 flex-shrink-0 min-w-[220px]">
                <button
                  onClick={() => open("buyer")}
                  className="w-full py-4 px-8 bg-[#F59E0B] text-white font-bold text-sm rounded-xl hover:bg-[#E58E08] transition-all hover:-translate-y-0.5 hover:shadow-2xl text-center"
                >
                  🏢 I'm a Buyer — Post a Tender
                </button>
                <button
                  onClick={() => open("vendor")}
                  className="w-full py-4 px-8 bg-white/8 text-white/70 border border-white/15 font-semibold text-sm rounded-xl hover:bg-white/15 hover:text-white transition-all text-center"
                >
                  ⚙️ I'm a Vendor — Join Network
                </button>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
          onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="bg-white rounded-2xl w-full max-w-[440px] shadow-2xl overflow-hidden animate-fadeIn">
            <div className={`h-1.5 w-full ${modal === "buyer" ? "bg-[#0D1B3E]" : "bg-[#F59E0B]"}`} />
            <div className="p-7 relative">
              <button onClick={() => setModal(null)} className="absolute top-5 right-5 w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm font-bold hover:bg-gray-200 transition-colors">✕</button>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-5xl mb-4">{modal === "buyer" ? "🎉" : "✅"}</div>
                  <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">{modal === "buyer" ? "You're on the list!" : "Registration received!"}</h3>
                  <p className="text-sm text-gray-500 mb-4">{modal === "buyer" ? "We'll reach out within 24 hours." : "Verification within 48 hours."}</p>
                  <button onClick={() => setModal(null)} className="px-6 py-2.5 bg-[#0D1B3E] text-white rounded-lg text-sm font-semibold">Close</button>
                </div>
              ) : (
                <>
                  <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 ${modal === "buyer" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"}`}>
                    {modal === "buyer" ? "🏢 For Buyers" : "⚙️ For Vendors"}
                  </span>
                  <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1.5">
                    {modal === "buyer" ? "Post Your First Tender — Free" : "Join Verified Vendor Network"}
                  </h2>
                  <p className="text-sm text-gray-500 mb-5">{modal === "buyer" ? "Save 10–15% on your next purchase." : "Win tenders. Get paid on delivery."}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label><input type="text" placeholder="Rahul Sharma" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile *</label><input type="tel" placeholder="+91 98765 43210" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                  </div>
                  <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Business Email *</label><input type="email" placeholder="you@company.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                  <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Company *</label><input type="text" placeholder="Sharma Industries" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                  <button onClick={() => setSubmitted(true)} className={`w-full mt-5 py-4 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl ${modal === "buyer" ? "bg-[#0D1B3E] hover:bg-[#1a2f5e]" : "bg-[#F59E0B] hover:bg-[#E58E08]"}`}>
                    {modal === "buyer" ? "Post My First Tender — Free →" : "Join Vendor Network →"}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">🔒 Free to start. No credit card needed.</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;
