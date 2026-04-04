"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

type ModalType = "auth" | "contact" | null;

const Modal = ({ type, onClose }: { type: ModalType; onClose: () => void }) => {
  const [submitted, setSubmitted] = useState(false);
  const [authTab, setAuthTab] = useState<"signin" | "signup">("signup");

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!type) return null;

  return (
    <div
      className="fixed inset-0 z-[999999] flex items-center justify-center p-4"
      style={{ background: "rgba(10,15,30,0.7)", backdropFilter: "blur(8px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl w-full max-w-[420px] shadow-2xl overflow-hidden animate-fadeIn">
        <div className={`h-1.5 w-full ${type === "auth" ? "bg-[#0D1B3E]" : "bg-[#F59E0B]"}`} />
        <div className="p-7 relative">
          <button onClick={onClose} className="absolute top-5 right-5 w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm font-bold transition-colors">✕</button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">{type === "auth" ? "🎉" : "📩"}</div>
              <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">{type === "auth" ? "You're on the list!" : "Message sent!"}</h3>
              <p className="text-sm text-gray-500 mb-5">{type === "auth" ? "We'll reach out within 24 hours to set up your account." : "Our team will get back to you within 2 hours."}</p>
              <button onClick={onClose} className="px-6 py-2.5 bg-[#0D1B3E] text-white rounded-lg text-sm font-semibold">Close</button>
            </div>
          ) : type === "auth" ? (
            <>
              {/* Sign In / Sign Up tabs */}
              <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
                <button onClick={() => setAuthTab("signup")} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${authTab === "signup" ? "bg-white text-[#0D1B3E] shadow-sm" : "text-gray-500"}`}>Get Onboarded</button>
                <button onClick={() => setAuthTab("signin")} className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${authTab === "signin" ? "bg-white text-[#0D1B3E] shadow-sm" : "text-gray-500"}`}>Sign In</button>
              </div>

              {authTab === "signup" ? (
                <>
                  <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1">Get Onboarded</h2>
                  <p className="text-sm text-gray-500 mb-5">Join BharatTender — free to start, no credit card needed.</p>
                  <div className="flex gap-2 mb-4">
                    {["Buyer", "Vendor"].map((role) => (
                      <label key={role} className="flex-1 flex items-center gap-2 border border-gray-200 rounded-lg p-3 cursor-pointer hover:border-[#0D1B3E] transition-colors">
                        <input type="radio" name="role" value={role.toLowerCase()} className="accent-[#0D1B3E]" defaultChecked={role === "Buyer"} />
                        <span className="text-sm font-semibold text-[#0D1B3E]">{role === "Buyer" ? "🏢 Buyer" : "⚙️ Vendor"}</span>
                      </label>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label><input type="text" placeholder="Rahul Sharma" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                    <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile *</label><input type="tel" placeholder="+91 98765 43210" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                  </div>
                  <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Business Email *</label><input type="email" placeholder="you@company.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                  <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Company Name *</label><input type="text" placeholder="Sharma Industries Pvt. Ltd." className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                  <button onClick={() => setSubmitted(true)} className="w-full mt-5 py-3.5 rounded-xl font-bold text-white text-sm bg-[#0D1B3E] hover:bg-[#1a2f5e] transition-all hover:-translate-y-0.5 hover:shadow-xl">
                    Get Onboarded — Free →
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">🔒 No spam. No credit card. 100% secure.</p>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1">Welcome Back</h2>
                  <p className="text-sm text-gray-500 mb-5">Sign in to your BharatTender account.</p>
                  <div className="mt-1"><label className="text-xs font-semibold text-gray-600 mb-1 block">Email</label><input type="email" placeholder="you@company.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                  <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Password</label><input type="password" placeholder="••••••••" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                  <div className="flex justify-end mt-1"><button className="text-xs text-[#0D1B3E] font-semibold hover:underline">Forgot password?</button></div>
                  <button onClick={() => setSubmitted(true)} className="w-full mt-5 py-3.5 rounded-xl font-bold text-white text-sm bg-[#0D1B3E] hover:bg-[#1a2f5e] transition-all hover:-translate-y-0.5">
                    Sign In →
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-3">Don't have an account? <button onClick={() => setAuthTab("signup")} className="text-[#0D1B3E] font-semibold underline">Get Onboarded</button></p>
                </>
              )}
            </>
          ) : (
            <>
              <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 bg-amber-50 text-amber-700">📞 Talk to Us</span>
              <h2 className="text-xl font-extrabold text-[#0D1B3E] mb-1">Get in Touch</h2>
              <p className="text-sm text-gray-500 mb-5">Questions about BharatTender? Our team calls back within 2 hours.</p>
              <div className="grid grid-cols-2 gap-3">
                <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label><input type="text" placeholder="Rahul Sharma" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
                <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile *</label><input type="tel" placeholder="+91 98765 43210" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
              </div>
              <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Email *</label><input type="email" placeholder="you@company.com" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition" /></div>
              <div className="mt-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Message</label><textarea rows={3} placeholder="How can we help?" className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] transition resize-none" /></div>
              <button onClick={() => setSubmitted(true)} className="w-full mt-5 py-3.5 rounded-xl font-bold text-white text-sm bg-[#F59E0B] hover:bg-[#E58E08] transition-all hover:-translate-y-0.5 hover:shadow-xl">
                Send Message →
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

          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo/bharattender-logo.png"
              alt="BharatTender"
              width={160}
              height={44}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-7">
            {menuData.map((item) => (
              <Link key={item.id} href={item.path || "#"}
                className={`text-sm font-medium transition-colors relative pb-0.5 group ${pathUrl === item.path ? "text-[#0D1B3E] font-semibold" : "text-gray-500 hover:text-[#0D1B3E]"}`}
              >
                {item.title}
                <span className="absolute -bottom-px left-0 w-0 h-0.5 bg-[#F59E0B] group-hover:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs — only 2 buttons */}
          <div className="hidden xl:flex items-center gap-2.5">
            <button
              onClick={() => setModal("auth")}
              className="px-5 py-2.5 text-sm font-semibold text-[#0D1B3E] border border-gray-200 rounded-lg hover:border-[#0D1B3E] hover:bg-gray-50 transition-all"
            >
              Sign In / Get Onboarded
            </button>
            <button
              onClick={() => setModal("contact")}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-[#F59E0B] rounded-lg hover:bg-[#E58E08] transition-all shadow-sm"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile hamburger */}
          <button className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all ${navOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all ${navOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-full bg-[#0D1B3E] rounded transition-all ${navOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
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
