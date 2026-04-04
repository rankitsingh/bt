"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { submitToSheets } from "@/lib/submitToSheets";

type ModalType = "buyer" | "vendor" | null;

const Audience = () => {
  const [modal, setModal] = useState<ModalType>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const open = (t: ModalType) => {
    setSubmitted(false); setLoading(false);
    setName(""); setMobile(""); setEmail(""); setCompany(""); setCity(""); setCategory(""); setError("");
    setModal(t);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !mobile.trim() || !email.trim() || !company.trim()) { setError("Please fill all required fields."); return; }
    if (!/\S+@\S+\.\S+/.test(email)) { setError("Please enter a valid email."); return; }
    setError(""); setLoading(true);
    await submitToSheets({
      type: modal === "buyer" ? "Buyer" : "Vendor",
      name, mobile, email, company, city, category,
      source: "Website — Audience Section",
    });
    setLoading(false); setSubmitted(true);
  };

  const inputClass = "w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition";

  return (
    <>
      <section id="audience" className="py-20 lg:py-25 bg-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="text-center mb-14">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
              <span className="w-5 h-0.5 bg-blue-700 rounded" />Join BharatTender
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D1B3E] lg:text-4xl tracking-tight">
              Built for Both Sides of India's Procurement Chain.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Buyer */}
            <motion.div initial={{ opacity:0, x:-32 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}
              className="bg-[#0D1B3E] rounded-2xl p-10 relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#F59E0B] rounded-full opacity-5" />
              <span className="inline-flex items-center gap-2 bg-[#F59E0B]/20 text-[#F59E0B] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">🏢 For Buyers & Enterprises</span>
              <h3 className="text-2xl font-bold text-white mb-5 leading-tight">Source Smarter.<br />Pay Safer.</h3>
              <ul className="flex flex-col gap-3 mb-8">
                {["Get onboarded and receive sealed competitive bids from verified vendors","Access 10,000+ GST-verified suppliers across India's industrial hubs","Save 10–15% on every procurement cycle with AI price benchmarking","100% payment security via RBI-compliant escrow accounts","Digital contracts signed via Class 3 DSC — no paperwork ever"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="w-5 h-5 bg-[#F59E0B]/25 rounded-full flex items-center justify-center text-[#F59E0B] font-bold text-xs flex-shrink-0 mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={() => open("buyer")} className="w-full py-3.5 bg-[#F59E0B] text-white font-bold rounded-xl hover:bg-[#E58E08] transition-all hover:-translate-y-0.5 hover:shadow-xl text-sm">
                Get Onboarded — Free →
              </button>
            </motion.div>

            {/* Vendor */}
            <motion.div initial={{ opacity:0, x:32 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}
              className="bg-white border-2 border-gray-200 rounded-2xl p-10 relative overflow-hidden hover:border-[#0D1B3E] transition-colors">
              <span className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-6">⚙️ For Vendors & Suppliers</span>
              <h3 className="text-2xl font-bold text-[#0D1B3E] mb-5 leading-tight">Win More Contracts.<br />Get Paid on Time.</h3>
              <ul className="flex flex-col gap-3 mb-8">
                {["Bid on tenders from verified private businesses across India","Get discovered by buyers in your industry category and region","Guaranteed payment via escrow — released automatically on delivery","Build a verified digital reputation with buyer ratings and reviews","Zero advance payment risk — 100% secure transactions every time"].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
                    <span className="w-5 h-5 bg-green-50 rounded-full flex items-center justify-center text-green-600 font-bold text-xs flex-shrink-0 mt-0.5">✓</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={() => open("vendor")} className="w-full py-3.5 bg-[#0D1B3E] text-white font-bold rounded-xl hover:bg-[#1a2f5e] transition-all hover:-translate-y-0.5 hover:shadow-xl text-sm">
                Register as Verified Vendor →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4" style={{ background:"rgba(0,0,0,0.65)", backdropFilter:"blur(6px)" }} onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="bg-white rounded-2xl w-full max-w-[440px] shadow-2xl overflow-hidden">
            <div className={`h-1.5 w-full ${modal === "buyer" ? "bg-[#0D1B3E]" : "bg-[#F59E0B]"}`} />
            <div className="p-7 relative">
              <button onClick={() => setModal(null)} className="absolute top-5 right-5 w-8 h-8 bg-gray-100 rounded-lg text-gray-500 text-sm font-bold flex items-center justify-center">✕</button>
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
                  <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1">{modal === "buyer" ? "Get Onboarded — Free" : "Join Vendor Network"}</h2>
                  <p className="text-sm text-gray-500 mb-5">{modal === "buyer" ? "Save 10–15% on your next purchase." : "Win tenders. Get paid on delivery."}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label><input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Rahul Sharma" className={inputClass} /></div>
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile *</label><input value={mobile} onChange={e=>setMobile(e.target.value)} type="tel" placeholder="+91 98765 43210" className={inputClass} /></div>
                  </div>
                  <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Business Email *</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@company.com" className={inputClass} /></div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Company *</label><input value={company} onChange={e=>setCompany(e.target.value)} type="text" placeholder="Sharma Industries" className={inputClass} /></div>
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">City</label><input value={city} onChange={e=>setCity(e.target.value)} type="text" placeholder="Mumbai" className={inputClass} /></div>
                  </div>
                  <div className="mt-3">
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{modal === "buyer" ? "What do you procure?" : "What do you supply?"}</label>
                    <select value={category} onChange={e=>setCategory(e.target.value)} className={inputClass + " bg-white"}>
                      <option value="">Select category</option>
                      {["Raw Materials & Commodities","Industrial Equipment","IT Hardware & Software","Logistics & Transport","Construction & Infrastructure","Packaging & FMCG","Textiles & Apparel","Other"].map(o=><option key={o}>{o}</option>)}
                    </select>
                  </div>
                  {error && <p className="text-xs text-red-500 mt-3 font-medium">⚠️ {error}</p>}
                  <button onClick={handleSubmit} disabled={loading} className={`w-full mt-4 py-4 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 disabled:opacity-60 ${modal === "buyer" ? "bg-[#0D1B3E] hover:bg-[#1a2f5e]" : "bg-[#F59E0B] hover:bg-[#E58E08]"}`}>
                    {loading ? "Submitting..." : modal === "buyer" ? "Get Onboarded — Free →" : "Join Vendor Network →"}
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

export default Audience;
