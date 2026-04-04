"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className="bg-[#0D1B3E] pt-12 pb-8">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">

      {/* Top row */}
      <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 border-b border-white/10">

        {/* Brand */}
        <div className="lg:max-w-xs">
          <div className="mb-5">
            <Image
              src="/images/logo/bharattender-logo.png"
              alt="BharatTender"
              width={160}
              height={44}
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </div>
          <p className="text-sm text-white/45 leading-relaxed mb-5">
            India's first private B2B tender marketplace — replacing WhatsApp procurement with verified bidding, digital contracts and escrow-secured payments.
          </p>
          <div className="flex gap-3">
            {["in", "tw", "yt"].map((s) => (
              <div key={s} className="w-8 h-8 bg-white/8 rounded-lg flex items-center justify-center hover:bg-white/15 transition-colors cursor-pointer">
                <span className="text-white/50 text-xs font-bold uppercase">{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Platform</h4>
            {["How It Works", "For Buyers", "For Vendors", "Pricing"].map((l) => (
              <Link key={l} href="#" className="block text-sm text-white/55 hover:text-white transition-colors mb-2.5">{l}</Link>
            ))}
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Company</h4>
            {["About Us", "Careers", "Press", "Contact"].map((l) => (
              <Link key={l} href="#" className="block text-sm text-white/55 hover:text-white transition-colors mb-2.5">{l}</Link>
            ))}
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Legal</h4>
            {["Privacy Policy", "Terms of Use", "Refund Policy", "Cookie Policy"].map((l) => (
              <Link key={l} href="#" className="block text-sm text-white/55 hover:text-white transition-colors mb-2.5">{l}</Link>
            ))}
          </div>
        </div>

        {/* CTA block */}
        <div className="lg:min-w-[220px]">
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">Get Started</h4>
          <p className="text-sm text-white/45 mb-4">Join 500+ businesses already on the waitlist.</p>
          <div className="flex flex-col gap-2.5">
            <a href="#" className="w-full py-3 bg-[#F59E0B] text-white text-sm font-bold rounded-xl text-center hover:bg-[#E58E08] transition-all">
              Get Onboarded — Free
            </a>
            <a href="#" className="w-full py-3 bg-white/8 text-white/70 text-sm font-semibold rounded-xl text-center border border-white/15 hover:bg-white/15 transition-all">
              Join as Vendor
            </a>
          </div>
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
        <p className="text-xs text-white/30">© 2026 BharatTender Technologies Pvt. Ltd. · CIN: U74999HR2026PTC000001</p>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-xs text-white/30">All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
