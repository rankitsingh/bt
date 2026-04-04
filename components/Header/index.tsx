"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";
import { submitToSheets } from "@/lib/submitToSheets";

type ModalType = "auth" | "contact" | null;

const Modal = ({ type, onClose }: { type: ModalType; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signup");
  const [role, setRole] = useState<"Buyer" | "Vendor">("Buyer");

  // Form fields
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!type) return null;

  const validate = () => {
    if (!name.trim()) return "Please enter your full name.";
    if (!mobile.trim()) return "Please enter your mobile number.";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return "Please enter a valid email.";
    if (type === "auth" && authTab === "signup" && !company.trim()) return "Please enter your company name.";
    return "";
  };

  const handleSubmit = async () => {
    const err = validate();
    if (err) { setError(err); return; }
    setError("");
    setLoading(true);

    await submitToSheets({
      type: type === "contact" ? "Contact" : role,
      name,
      mobile,
      email,
      company,
      city,
      category,
      message,
      source: "Website — Header",
    });

    setLoading(false);
    setSubmitted(true);
  };

  const inputClass = "w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] focus:ring-2 focus:ring-[#0D1B3E]/10 transition";

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
      style={{ background: "rgba(10,15,30,0.72)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-[420px] shadow-2xl overflow-hidden">
        <div className={`h-1.5 w-full ${type === "auth" ? "bg-[#0D1B3E]" : "bg-[#F59E0B]"}`} />
        <div className="p-7 relative">
          <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm font-bold transition-colors">✕</button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">{type === "auth" ? "🎉" : "📩"}</div>
              <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">
                {type === "auth" ? "You're on the list!" : "Message sent!"}
              </h3>
              <p className="text-sm text-gray-500 mb-5">
                {type === "auth"
                  ? "We'll reach out within 24 hours to set up your account."
                  : "Our team will get back to you within 2 hours."}
              </p>
              <button onClick={onClose} className="px-6 py-2.5 bg-[#0D1B3E] text-white rounded-lg text-sm font-semibold">Close</button>
            </div>
          ) : type === "auth" ? (
            <>
              {/* Tab switcher */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-5">
                <button onClick={() => setAuthTab("signup")} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${authTab === "signup" ? "bg-white text-[#0D1B3E] shadow-sm" : "text-gray-500"}`}>Get Onboarded</button>
                <button onClick={() => setAuthTab("signin")} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${authTab === "signin" ? "bg-white text-[#0D1B3E] shadow-sm" : "text-gray-500"}`}>Sign In</button>
              </div>

              {authTab === "signup" ? (
                <>
                  <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1">Get Onboarded</h2>
                  <p className="text-sm text-gray-500 mb-4">Free to start — no credit card needed.</p>

                  {/* Role selector */}
                  <div className="flex gap-2 mb-4">
                    {(["Buyer", "Vendor"] as const).map((r) => (
                      <label key={r} className={`flex-1 flex items-center gap-2 border rounded-lg p-3 cursor-pointer transition-all ${role === r ? "border-[#0D1B3E] bg-[#F7F8FC]" : "border-gray-200 hover:border-gray-300"}`}>
                        <input type="radio" name="role" value={r} checked={role === r} onChange={() => setRole(r)} className="accent-[#0D1B3E]" />
                        <span className="text-sm font-semibold text-[#0D1B3E]">{r === "Buyer" ? "🏢 Buyer" : "⚙️ Vendor"}</span>
                      </label>
                    ))}
                  </div>

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
                    <label className="text-xs font-semibold text-gray-600 mb-1 block">{role === "Buyer" ? "What do you procure?" : "What do you supply?"}</label>
                    <select value={category} onChange={e => setCategory(e.target.value)} className={inputClass + " bg-white"}>
                      <option value="">Select category</option>
                      {["Raw Materials & Commodities","Industrial Equipment","IT Hardware & Software","Logistics & Transport","Construction & Infrastructure","Packaging & FMCG","Textiles & Apparel","Other"].map(o => <option key={o}>{o}</option>)}
                    </select>
                  </div>

                  {error && <p className="text-xs text-red-500 mt-3 font-medium">⚠️ {error}</p>}

                  <button onClick={handleSubmit} disabled={loading} className="w-full mt-4 py-3.5 rounded-xl font-bold text-white text-sm bg-[#0D1B3E] hover:bg-[#1a2f5e] disabled:opacity-60 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                    {loading ? "Submitting..." : "Get Onboarded — Free →"}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">🔒 No spam. No credit card. 100% secure.</p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1">Welcome Back</h2>
                  <p className="text-sm text-gray-500 mb-5">Sign in to your BharatTender account.</p>
                  <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Email</label><input type="email" placeholder="you@company.com" className={inputClass} /></div>
                  <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Password</label><input type="password" placeholder="••••••••" className={inputClass} /></div>
                  <div className="flex justify-end mt-1"><button className="text-xs text-[#0D1B3E] font-semibold hover:underline">Forgot password?</button></div>
                  <button className="w-full mt-4 py-3.5 rounded-xl font-bold text-white text-sm bg-[#0D1B3E] hover:bg-[#1a2f5e] transition-all hover:-translate-y-0.5">Sign In →</button>
                  <p className="text-xs text-gray-400 text-center mt-3">Don't have an account? <button onClick={() => setAuthTab("signup")} className="text-[#0D1B3E] font-semibold underline">Get Onboarded</button></p>
                </>
              )}
            </>
          ) : (
            <>
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 bg-amber-50 text-amber-700">📞 Talk to Us</span>
              <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1">Get in Touch</h2>
              <p className="text-sm text-gray-500 mb-5">Our team calls back within 2 hours on business days.</p>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label><input value={name} onChange={e => setName(e.target.value)} type="text" placeholder="Rahul Sharma" className={inputClass} /></div>
                <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile *</label><input value={mobile} onChange={e => setMobile(e.target.value)} type="tel" placeholder="+91 98765 43210" className={inputClass} /></div>
              </div>
              <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Email *</label><input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="you@company.com" className={inputClass} /></div>
              <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Message</label><textarea value={message} onChange={e => setMessage(e.target.value)} rows={3} placeholder="How can we help?" className={inputClass + " resize-none"} /></div>
              {error && <p className="text-xs text-red-500 mt-3 font-medium">⚠️ {error}</p>}
              <button onClick={handleSubmit} disabled={loading} className="w-full mt-4 py-3.5 rounded-xl font-bold text-white text-sm bg-[#F59E0B] hover:bg-[#E58E08] disabled:opacity-60 transition-all hover:-translate-y-0.5 hover:shadow-xl">
                {loading ? "Sending..." : "Send Message →"}
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">🔒 No spam. We only call if you want us to.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [modal, setModal] = useState<ModalType>(null);
  const pathUrl = usePathname();

  return (
    <>
      <header className="fixed left-0 top-0 z-99999 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex items-center justify-between h-[68px]">
          <a href="/" className="flex items-center flex-shrink-0">
            <Image src="/images/logo/bharattender-logo.png" alt="BharatTender" width={160} height={44} className="h-10 w-auto object-contain" priority />
          </a>
          <nav className="hidden xl:flex items-center gap-7">
            {menuData.map((item) => (
              <Link key={item.id} href={item.path || "#"} className={`text-sm font-medium transition-colors relative pb-0.5 group ${pathUrl === item.path ? "text-[#0D1B3E] font-semibold" : "text-gray-500 hover:text-[#0D1B3E]"}`}>
                {item.title}
                <span className="absolute -bottom-px left-0 w-0 h-0.5 bg-[#F59E0B] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>
          <div className="hidden xl:flex items-center gap-2.5">
            <button onClick={() => setModal("auth")} className="px-5 py-2.5 text-sm font-semibold text-[#0D1B3E] border border-gray-200 rounded-lg hover:border-[#0D1B3E] hover:bg-gray-50 transition-all">
              Sign In / Get Onboarded
            </button>
            <button onClick={() => setModal("contact")} className="px-5 py-2.5 text-sm font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#E58E08] transition-all shadow-sm">
              Contact Us
            </button>
          </div>
          <button className="xl:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setNavOpen(!navOpen)}>
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all ${navOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all ${navOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all ${navOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
        {navOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-4 py-5 flex flex-col gap-3 shadow-lg">
            {menuData.map((item) => (
              <Link key={item.id} href={item.path || "#"} className="text-sm font-medium text-gray-700 py-1" onClick={() => setNavOpen(false)}>{item.title}</Link>
            ))}
            <div className="flex flex-col gap-2 pt-3 border-t border-gray-100">
              <button onClick={() => { setModal("auth"); setNavOpen(false); }} className="w-full py-3 text-sm font-semibold text-[#0D1B3E] border border-gray-200 rounded-lg">Sign In / Get Onboarded</button>
              <button onClick={() => { setModal("contact"); setNavOpen(false); }} className="w-full py-3 text-sm font-semibold text-white bg-[#F59E0B] rounded-lg">Contact Us</button>
            </div>
          </div>
        )}
      </header>
      <Modal type={modal} onClose={() => setModal(null)} />
    </>
  );
};

export default Header;
