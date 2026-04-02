"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

type ModalType = "buyer" | "vendor" | "contact" | null;

const Modal = ({ type, onClose }: { type: ModalType; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  if (!type) return null;

  const config = {
    buyer: {
      pill: "🏢 For Buyers",
      pillClass: "bg-blue-50 text-blue-700",
      bar: "bg-[#0D1B3E]",
      title: "Post Your First Tender — Free",
      sub: "Save 10–15% on your next purchase. Set up in 10 minutes.",
      btn: "bg-[#0D1B3E] hover:bg-[#1a2f5e]",
      btnText: "Post My First Tender — Free →",
      successTitle: "You're on the list! 🎉",
      successMsg: "Our team will reach out within 24 hours to set up your account.",
    },
    vendor: {
      pill: "⚙️ For Vendors",
      pillClass: "bg-amber-50 text-amber-700",
      bar: "bg-[#F59E0B]",
      title: "Join India's Verified Vendor Network",
      sub: "Win tenders from verified businesses. Get paid on delivery. Zero payment risk.",
      btn: "bg-[#F59E0B] hover:bg-[#E58E08]",
      btnText: "Join Vendor Network →",
      successTitle: "Registration received! ✅",
      successMsg: "Our verification team will onboard you within 48 hours.",
    },
    contact: {
      pill: "📞 Talk to Us",
      pillClass: "bg-green-50 text-green-700",
      bar: "bg-[#059669]",
      title: "Get in Touch",
      sub: "Questions? Our team calls back within 2 hours on business days.",
      btn: "bg-[#0D1B3E] hover:bg-[#1a2f5e]",
      btnText: "Send Message →",
      successTitle: "Message sent! 📩",
      successMsg: "We'll get back to you within 2 hours.",
    },
  };

  const c = config[type];

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-[440px] shadow-2xl overflow-hidden animate-fadeIn">
        {/* Top colour bar */}
        <div className={`h-1.5 w-full ${c.bar}`} />

        <div className="p-7">
          <button
            onClick={onClose}
            className="absolute top-[calc(1.5rem+6px)] right-6 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm font-bold transition-colors"
          >
            ✕
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">{c.successTitle}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{c.successMsg}</p>
              <button onClick={onClose} className="mt-6 px-6 py-2.5 bg-[#0D1B3E] text-white rounded-lg text-sm font-semibold">Close</button>
            </div>
          ) : (
            <>
              <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 ${c.pillClass}`}>
                {c.pill}
              </span>
              <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1.5">{c.title}</h2>
              <p className="text-sm text-gray-500 mb-5 leading-relaxed">{c.sub}</p>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label>
                  <input type="text" placeholder="Rahul Sharma" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] focus:ring-2 focus:ring-[#0D1B3E]/10 transition" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile *</label>
                  <input type="tel" placeholder="+91 98765 43210" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] focus:ring-2 focus:ring-[#0D1B3E]/10 transition" />
                </div>
              </div>

              <div className="mt-3">
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Business Email *</label>
                <input type="email" placeholder="you@company.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Company *</label>
                  <input type="text" placeholder="Sharma Industries" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">City</label>
                  <input type="text" placeholder="Mumbai" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" />
                </div>
              </div>

              {type !== "contact" && (
                <div className="mt-3">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">
                    {type === "buyer" ? "What do you procure?" : "What do you supply?"}
                  </label>
                  <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] bg-white transition">
                    <option value="">Select category</option>
                    {["Raw Materials & Commodities","Industrial Equipment","IT Hardware & Software","Logistics & Transport","Construction & Infrastructure","Packaging & FMCG","Textiles & Apparel","Other"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
              )}

              {type === "contact" && (
                <div className="mt-3">
                  <label className="text-xs font-semibold text-gray-600 mb-1 block">Message</label>
                  <textarea rows={3} placeholder="How can we help you?" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] resize-none transition" />
                </div>
              )}

              <button
                onClick={() => setSubmitted(true)}
                className={`w-full mt-5 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl ${c.btn}`}
              >
                {c.btnText}
              </button>
              <p className="text-xs text-gray-400 text-center mt-3">🔒 No spam. No credit card. 100% secure.</p>
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

  // Close modal on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setModal(null); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      {/* ── HEADER — always white, always visible, never transparent ── */}
      <header className="fixed left-0 top-0 z-99999 w-full bg-white border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo/bharattender-logo.png"
              alt="BharatTender"
              width={168}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-7">
            {menuData.map((item) => (
              <Link
                key={item.id}
                href={item.path || "#"}
                className={`text-sm font-medium transition-colors relative pb-0.5 group ${
                  pathUrl === item.path ? "text-[#0D1B3E] font-semibold" : "text-gray-500 hover:text-[#0D1B3E]"
                }`}
              >
                {item.title}
                <span className="absolute -bottom-px left-0 w-0 h-0.5 bg-[#F59E0B] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-2.5">
            <button
              onClick={() => setModal("vendor")}
              className="px-4 py-2.5 text-sm font-semibold text-[#0D1B3E] border border-gray-200 rounded-lg hover:border-[#0D1B3E] hover:bg-gray-50 transition-all duration-200"
            >
              Join as Vendor
            </button>
            <button
              onClick={() => setModal("buyer")}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-[#0D1B3E] rounded-lg hover:bg-[#1a2f5e] transition-all duration-200 shadow-sm"
            >
              Post a Tender
            </button>
            <button
              onClick={() => setModal("contact")}
              className="px-4 py-2.5 text-sm font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#E58E08] transition-all duration-200 shadow-sm"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all duration-300 ${navOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all duration-300 ${navOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all duration-300 ${navOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        {navOpen && (
          <div className="xl:hidden bg-white border-t border-gray-100 shadow-lg px-4 py-5 flex flex-col gap-3">
            {menuData.map((item) => (
              <Link key={item.id} href={item.path || "#"} className="text-sm font-medium text-gray-700 py-1.5 hover:text-[#0D1B3E] transition-colors" onClick={() => setNavOpen(false)}>
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col gap-2.5 pt-3 border-t border-gray-100 mt-1">
              <button onClick={() => { setModal("vendor"); setNavOpen(false); }} className="w-full py-3 text-sm font-semibold text-[#0D1B3E] border border-gray-200 rounded-lg">
                Join as Vendor
              </button>
              <button onClick={() => { setModal("buyer"); setNavOpen(false); }} className="w-full py-3 text-sm font-semibold text-white bg-[#0D1B3E] rounded-lg">
                Post a Tender
              </button>
              <button onClick={() => { setModal("contact"); setNavOpen(false); }} className="w-full py-3 text-sm font-semibold text-white bg-[#F59E0B] rounded-lg">
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modal */}
      <Modal type={modal} onClose={() => setModal(null)} />
    </>
  );
};

export default Header;
