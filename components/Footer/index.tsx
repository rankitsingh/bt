"use client";

const Footer = () => (
  <footer className="border-t border-stroke bg-white py-10">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-[#0D1B3E] rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#F59E0B] rounded-tl-md" />
          <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="relative z-10">
            <rect x="1" y="1" width="7" height="7" rx="1.5" fill="white" opacity="0.9"/>
            <rect x="10" y="1" width="7" height="7" rx="1.5" fill="white" opacity="0.9"/>
            <rect x="1" y="10" width="7" height="7" rx="1.5" fill="white" opacity="0.9"/>
          </svg>
        </div>
        <span className="font-bold text-[#0D1B3E]">Bharat<span className="text-[#F59E0B]">Tender</span>.ai</span>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {["Privacy Policy", "Terms of Use", "About", "Contact", "Careers"].map((link) => (
          <a key={link} href="#" className="text-sm text-[#757693] hover:text-[#0D1B3E] transition-colors">{link}</a>
        ))}
      </div>
      <p className="text-xs text-[#757693]">
        © 2026 BharatTender Technologies Pvt. Ltd.
      </p>
    </div>
  </footer>
);

export default Footer;
