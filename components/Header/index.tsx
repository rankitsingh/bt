"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const [modalType, setModalType] = useState<"buyer" | "vendor" | null>(null);
  const pathUrl = usePathname();

  useEffect(() => {
    const handleScroll = () => setStickyMenu(window.scrollY >= 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-99999 w-full transition-all duration-300 ${
          stickyMenu
            ? "bg-white/95 backdrop-blur-md shadow-solid-2 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#0D1B3E] rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#F59E0B] rounded-tl-md" />
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="relative z-10">
                <rect x="1" y="1" width="7" height="7" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="10" y="1" width="7" height="7" rx="1.5" fill="white" opacity="0.9"/>
                <rect x="1" y="10" width="7" height="7" rx="1.5" fill="white" opacity="0.9"/>
              </svg>
            </div>
            <span className="font-bold text-xl text-[#0D1B3E] tracking-tight">
              Bharat<span className="text-[#F59E0B]">Tender</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {menuData.map((item) => (
              <Link
                key={item.id}
                href={item.path || "#"}
                className="text-sm font-medium text-[#757693] hover:text-[#0D1B3E] transition-colors relative group"
              >
                {item.title}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-[#0D1B3E] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden xl:flex items-center gap-3">
            <button
              onClick={() => setModalType("vendor")}
              className="px-5 py-2.5 text-sm font-semibold text-[#0D1B3E] border-1.5 border-[#0D1B3E] rounded-lg hover:bg-[#0D1B3E] hover:text-white transition-all duration-200"
            >
              Join as Vendor
            </button>
            <button
              onClick={() => setModalType("buyer")}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0D1B3E] rounded-lg hover:bg-[#1a2f5e] transition-all duration-200 shadow-md"
            >
              Post a Tender →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-[#0D1B3E] transition-all ${navigationOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 bg-[#0D1B3E] transition-all ${navigationOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 bg-[#0D1B3E] transition-all ${navigationOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {navigationOpen && (
          <div className="xl:hidden bg-white border-t border-stroke px-4 py-6 flex flex-col gap-4">
            {menuData.map((item) => (
              <Link key={item.id} href={item.path || "#"} className="text-sm font-medium text-[#0D1B3E]" onClick={() => setNavigationOpen(false)}>
                {item.title}
              </Link>
            ))}
            <button onClick={() => { setModalType("vendor"); setNavigationOpen(false); }} className="px-5 py-2.5 text-sm font-semibold text-[#0D1B3E] border border-[#0D1B3E] rounded-lg">
              Join as Vendor
            </button>
            <button onClick={() => { setModalType("buyer"); setNavigationOpen(false); }} className="px-5 py-2.5 text-sm font-semibold text-white bg-[#0D1B3E] rounded-lg">
              Post a Tender →
            </button>
          </div>
        )}
      </header>

      {/* Lead Modals */}
      {modalType && (
        <div
          className="fixed inset-0 z-[999999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && setModalType(null)}
        >
          <div className="bg-white rounded-2xl p-8 w-full max-w-md relative shadow-solid-7 animate-fadeIn">
            <button
              onClick={() => setModalType(null)}
              className="absolute top-4 right-4 w-8 h-8 bg-[#F7F8FC] rounded-lg flex items-center justify-center text-[#757693] hover:bg-stroke transition-colors"
            >
              ✕
            </button>

            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 ${
              modalType === "buyer" ? "bg-[#EFF6FF] text-[#1D4ED8]" : "bg-[#FEF3C7] text-[#B45309]"
            }`}>
              {modalType === "buyer" ? "🏢 For Buyers" : "⚙️ For Vendors"}
            </span>

            <h2 className="text-2xl font-bold text-[#0D1B3E] mb-2">
              {modalType === "buyer" ? "Post Your First Tender" : "Register as Verified Vendor"}
            </h2>
            <p className="text-sm text-[#757693] mb-6">
              {modalType === "buyer"
                ? "Join India's smartest procurement marketplace. Get started free."
                : "Get discovered by verified buyers. Get paid on time, every time."}
            </p>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#3D4461]">Full Name *</label>
                <input type="text" placeholder="Rahul Sharma" className="px-3 py-2.5 border border-stroke rounded-lg text-sm focus:border-[#0D1B3E] outline-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#3D4461]">Mobile *</label>
                <input type="tel" placeholder="+91 98765 43210" className="px-3 py-2.5 border border-stroke rounded-lg text-sm focus:border-[#0D1B3E] outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mt-3">
              <label className="text-xs font-semibold text-[#3D4461]">Business Email *</label>
              <input type="email" placeholder="you@company.com" className="px-3 py-2.5 border border-stroke rounded-lg text-sm focus:border-[#0D1B3E] outline-none" />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#3D4461]">Company Name *</label>
                <input type="text" placeholder="Sharma Industries" className="px-3 py-2.5 border border-stroke rounded-lg text-sm focus:border-[#0D1B3E] outline-none" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-[#3D4461]">City</label>
                <input type="text" placeholder="Mumbai" className="px-3 py-2.5 border border-stroke rounded-lg text-sm focus:border-[#0D1B3E] outline-none" />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 mt-3">
              <label className="text-xs font-semibold text-[#3D4461]">
                {modalType === "buyer" ? "What do you procure?" : "What do you supply?"}
              </label>
              <select className="px-3 py-2.5 border border-stroke rounded-lg text-sm focus:border-[#0D1B3E] outline-none appearance-none bg-white">
                <option value="">Select a category</option>
                <option>Raw Materials & Commodities</option>
                <option>Industrial Equipment & Machinery</option>
                <option>IT Hardware & Software</option>
                <option>Logistics & Transport Services</option>
                <option>Construction & Infrastructure</option>
                <option>Packaging & FMCG Supplies</option>
                <option>Textiles & Apparel</option>
                <option>Other</option>
              </select>
            </div>

            <button
              className={`w-full mt-5 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:-translate-y-0.5 ${
                modalType === "buyer" ? "bg-[#0D1B3E] hover:shadow-solid-7" : "bg-[#F59E0B] hover:shadow-solid-7"
              }`}
            >
              {modalType === "buyer" ? "Get Early Access →" : "Register Now →"}
            </button>
            <p className="text-xs text-[#757693] text-center mt-3">
              🔒 Your data is 100% secure. We never share your information.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
