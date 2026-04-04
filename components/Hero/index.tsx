"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { submitToSheets } from "@/lib/submitToSheets";

type ModalType = "buyer" | "vendor" | null;

const Hero = () => {
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
    if (!name.trim() || !mobile.trim() || !email.trim() || !company.trim()) {
      setError("Please fill in all required fields."); return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) { setError("Please enter a valid email."); return; }
    setError(""); setLoading(true);
    await submitToSheets({
      type: modal === "buyer" ? "Buyer" : "Vendor",
      name, mobile, email, company, city, category,
      source: "Website — Hero",
    });
    setLoading(false); setSubmitted(true);
  };

  const inputClass = "w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition";

  return (
    <>
      <section className="relative overflow-hidden bg-[#0D1B3E] pt-[100px] pb-16 lg:pt-[120px] lg:pb-24">
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute -top-40 right-1/3 w-[480px] h-[480px] bg-[#F59E0B] rounded-full opacity-[0.04] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3B82F6] rounded-full opacity-[0.05] blur-3xl pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex flex-col lg:flex-row lg:items-center gap-10 xl:gap-16">
            <div className="lg:w-[50%] xl:w-[48%]">
              <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}>
                <span className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-2 text-xs font-semibold text-white/60 mb-7">
                  <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse flex-shrink-0" />
                  India's First Private Tender Marketplace · Now Live
                </span>
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.65, delay:0.1 }} className="font-extrabold text-white leading-[1.07] tracking-tight mb-5" style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.75rem)" }}>
                Post a Tender.{" "}<span className="text-[#F59E0B]">Verified Vendors</span>{" "}Compete.{" "}
                <span className="relative">You Win.<span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#F59E0B] opacity-30 rounded-full" /></span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.18 }} className="text-lg text-white/55 mb-5 leading-snug font-medium">
                Stop buying on WhatsApp. Save 10–15% on every purchase.
              </motion.p>
              <motion.ul initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.25 }} className="flex flex-col gap-2.5 mb-8">
                {[
                  { icon:"💰", text:"Save 10–15% on every purchase with competitive sealed bids" },
                  { icon:"🔐", text:"100% payment protection — funds in escrow until delivery confirmed" },
                  { icon:"✅", text:"Only GST & Udyam verified vendors — zero fraud risk" },
                ].map((b, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/65">
                    <span className="text-base leading-none mt-0.5 flex-shrink-0">{b.icon}</span>{b.text}
                  </li>
                ))}
              </motion.ul>
              <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.32 }} className="flex flex-wrap gap-3 mb-8">
                <button onClick={() => open("buyer")} className="group flex items-center gap-2.5 px-6 py-3.5 bg-[#F59E0B] text-white font-bold rounded-xl text-sm hover:bg-[#E58E08] transition-all hover:-translate-y-0.5 hover:shadow-2xl">
                  Get Onboarded — Free<span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </button>
                <button onClick={() => open("vendor")} className="flex items-center gap-2 px-6 py-3.5 bg-white/10 text-white font-semibold border border-white/20 rounded-xl text-sm hover:bg-white/18 transition-all">
                  Join as Vendor
                </button>
              </motion.div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.8, delay:0.5 }} className="flex flex-wrap items-center gap-5 pt-5 border-t border-white/10">
                <div className="flex -space-x-2.5">
                  {["#1D4ED8","#059669","#D97706","#7C3AED","#DB2777"].map((c, i) => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-[#0D1B3E] flex items-center justify-center text-[10px] font-bold text-white flex-shrink-0" style={{ background:c }}>
                      {["RS","PK","AM","SK","NR"][i]}
                    </div>
                  ))}
                </div>
                <span className="text-xs text-white/45"><span className="font-bold text-white/80">500+</span> businesses on waitlist</span>
              </motion.div>
            </div>

            {/* Platform mockup */}
            <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.75, delay:0.28 }} className="hidden lg:block lg:w-[50%] xl:w-[52%] relative">
              <div className="absolute -left-8 top-[22%] bg-white rounded-2xl px-4 py-3 shadow-2xl z-20 border border-gray-100" style={{ animation:"floatY1 5s ease-in-out infinite" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-green-50 rounded-xl flex items-center justify-center text-base flex-shrink-0">✅</div>
                  <div><div className="text-xs font-bold text-[#0D1B3E]">Vendor Verified</div><div className="text-[10px] text-gray-400 mt-0.5">GST + Udyam confirmed</div></div>
                </div>
              </div>
              <div className="absolute -right-4 bottom-[22%] bg-white rounded-2xl px-4 py-3 shadow-2xl z-20 border border-gray-100" style={{ animation:"floatY2 6s ease-in-out infinite" }}>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 bg-amber-50 rounded-xl flex items-center justify-center text-base flex-shrink-0">💰</div>
                  <div><div className="text-xs font-bold text-[#0D1B3E]">₹62,000 Saved</div><div className="text-[10px] text-gray-400 mt-0.5">vs. last purchase</div></div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.4)] border border-white/8 bg-white">
                <div className="bg-gray-50 border-b border-gray-200 h-10 flex items-center px-4 gap-2">
                  <div className="flex gap-1.5"><div className="w-3 h-3 rounded-full bg-[#FF5F56]" /><div className="w-3 h-3 rounded-full bg-[#FFBD2E]" /><div className="w-3 h-3 rounded-full bg-[#27C93F]" /></div>
                  <div className="flex-1 mx-3 bg-white rounded-md h-6 border border-gray-200 flex items-center px-3 gap-1.5">
                    <span className="text-[10px] text-gray-400">🔒 app.bharattender.ai/dashboard</span>
                  </div>
                </div>
                <div className="p-5 bg-white">
                  <div className="flex items-center justify-between mb-4">
                    <div><p className="font-bold text-sm text-[#0D1B3E]">Active Tenders</p><p className="text-[11px] text-gray-400 mt-0.5">Sharma Industries · 3 live</p></div>
                    <div className="flex items-center gap-1.5 bg-green-50 text-green-600 text-[11px] font-bold px-3 py-1.5 rounded-full"><span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />Live</div>
                  </div>
                  {[
                    { name:"Steel Coils — Q2 Supply", meta:"Mumbai · 2 days ago", amount:"₹18.4L", bids:"12 bids", status:"Bidding Open", sc:"bg-green-50 text-green-700", active:true },
                    { name:"Office IT Equipment", meta:"Bengaluru · 5 days ago", amount:"₹6.2L", bids:"8 bids", status:"Under Review", sc:"bg-amber-50 text-amber-700", active:false },
                    { name:"Packaging Material Sep", meta:"Surat · 10 days ago", amount:"₹3.9L", bids:"Saved ₹62,000", status:"Awarded ✓", sc:"bg-blue-50 text-blue-700", active:false },
                  ].map((t, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-xl mb-2 border ${t.active ? "bg-blue-50 border-blue-200" : "bg-gray-50 border-gray-100"}`}>
                      <div className="flex-1 min-w-0 pr-3">
                        <p className="text-xs font-semibold text-[#0D1B3E] truncate">{t.name}</p>
                        <p className="text-[10px] text-gray-400 mt-0.5">{t.meta}</p>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full mt-1.5 inline-block ${t.sc}`}>{t.status}</span>
                      </div>
                      <div className="text-right flex-shrink-0"><p className="text-sm font-bold text-[#0D1B3E]">{t.amount}</p><p className="text-[10px] text-gray-400 mt-0.5">{t.bids}</p></div>
                    </div>
                  ))}
                  <div className="mt-3 bg-[#0D1B3E] rounded-xl p-4 flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#F59E0B]/20 rounded-xl flex items-center justify-center text-lg flex-shrink-0">🔐</div>
                    <div><p className="text-[10px] text-white/50 font-medium">Escrow Balance · Protected</p><p className="text-base font-extrabold text-[#F59E0B]">₹22.6L secured</p></div>
                    <div className="ml-auto text-right"><p className="text-[10px] text-white/40">Payment risk</p><p className="text-xs font-bold text-green-400">₹0</p></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-white border-y border-gray-100 py-3.5">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(4).fill(["Post a Tender","Verified Vendor Network","Sealed Bid Engine","Escrow-Secured Payments","AI Price Matching","Digital DSC Contracts","GST & Udyam Verified","3× Faster Sourcing","10–15% Cost Savings","Pan-India Coverage"]).flat().map((item, i) => (
            <span key={i} className="inline-flex items-center gap-3 px-8 text-xs font-semibold text-gray-400">{item}<span className="text-[#F59E0B] text-xs">✦</span></span>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4" style={{ background:"rgba(0,0,0,0.65)", backdropFilter:"blur(6px)" }} onClick={(e) => e.target === e.currentTarget && setModal(null)}>
          <div className="bg-white rounded-2xl w-full max-w-[440px] shadow-2xl overflow-hidden">
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
                  <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1">{modal === "buyer" ? "Get Onboarded — Free" : "Join Verified Vendor Network"}</h2>
                  <p className="text-sm text-gray-500 mb-5">{modal === "buyer" ? "Save 10–15% on your next purchase." : "Win tenders. Get paid on delivery."}</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label><input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Rahul Sharma" className={inputClass} /></div>
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile *</label><input value={mobile} onChange={e => setMobile(e.target.value)} type="tel" placeholder="+91 98765 43210" className={inputClass} /></div>
                  </div>
                  <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Business Email *</label><input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@company.com" className={inputClass} /></div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Company *</label><input value={company} onChange={e => setCompany(e.target.value)} type="text" placeholder="Sharma Industries" className={inputClass} /></div>
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">City</label><input value={city} onChange={e => setCity(e.target.value)} type="text" placeholder="Mumbai" className={inputClass} /></div>
                  </div>
                  <div className="mt-3">
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{modal === "buyer" ? "What do you procure?" : "What do you supply?"}</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className={inputClass + " bg-white"}>
                      <option value="">Select category</option>
                      {["Raw Materials & Commodities","Industrial Equipment","IT Hardware & Software","Logistics & Transport","Construction & Infrastructure","Packaging & FMCG","Textiles & Apparel","Other"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                  {error && <p className="text-xs text-red-500 mt-3 font-medium">⚠️ {error}</p>}
                  <button onClick={handleSubmit} disabled={loading} className={`w-full mt-4 py-4 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 ${modal === "buyer" ? "bg-[#0D1B3E] hover:bg-[#1a2f5e]" : "bg-[#F59E0B] hover:bg-[#E58E08]"}`}>
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

export default Hero;
