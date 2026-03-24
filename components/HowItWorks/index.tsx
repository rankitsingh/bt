"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const buyerSteps = [
  { num: "01", title: "Create a Tender", desc: "Post an RFQ with specs, quantity, delivery timelines and budget through a structured, fully auditable form.", tag: "Org Dashboard · Multi-user", icon: "📋" },
  { num: "02", title: "AI Matches Verified Vendors", desc: "Agentic AI instantly matches your tender to pre-verified vendors by category, location and performance rating. Zero fake suppliers.", tag: "GST + Udyam Integrated", icon: "🤖" },
  { num: "03", title: "Sealed Competitive Bidding", desc: "Vendors submit sealed bids simultaneously. AI benchmarks pricing against market rates. Full audit trail. Zero collusion.", tag: "Transparency Audit · PKI Encrypted", icon: "🔐" },
  { num: "04", title: "Award & Digital Contract", desc: "Select the best bid. Contract auto-generated and signed digitally via Class 3 DSC. Legally binding, no paperwork.", tag: "DSC · Legally Binding", icon: "✍️" },
  { num: "05", title: "Escrow Payment on Delivery", desc: "Funds locked in RBI-compliant escrow. Released automatically upon delivery milestone confirmation. 100% security.", tag: "RBI Compliant · Funds Protected", icon: "🛡️" },
];

const vendorSteps = [
  { num: "01", title: "Register & Get Verified", desc: "Submit your GST, Udyam and PAN details. Our team verifies your credentials within 48 hours.", tag: "GST + Udyam + PAN", icon: "✅" },
  { num: "02", title: "Get Matched to Tenders", desc: "AI matches you to relevant tenders in your category and location. No cold calling, no chasing buyers.", tag: "AI-Powered Matching", icon: "🎯" },
  { num: "03", title: "Submit Sealed Competitive Bid", desc: "Submit your best sealed bid with pricing commitment. Compete fairly on a level playing field.", tag: "Fair & Transparent", icon: "📊" },
  { num: "04", title: "Win Contract & E-Sign", desc: "Get notified when your bid wins. Sign the digital contract instantly via your DSC.", tag: "Instant Notification", icon: "🏆" },
  { num: "05", title: "Get Paid via Escrow", desc: "Deliver the order and get paid automatically from escrow on delivery confirmation. Zero payment risk.", tag: "Guaranteed Payment", icon: "💰" },
];

const HowItWorks = () => {
  const [tab, setTab] = useState<"buyer" | "vendor">("buyer");
  const [activeStep, setActiveStep] = useState(0);
  const steps = tab === "buyer" ? buyerSteps : vendorSteps;

  return (
    <section id="howitworks" className="py-20 lg:py-25 bg-white">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-4">
            <span className="w-5 h-0.5 bg-[#1D4ED8] rounded" />
            Process
          </span>
          <h2 className="text-3xl font-bold text-[#0D1B3E] lg:text-4xl tracking-tight mb-4">
            One Platform. Two Sides. Every Deal Done Right.
          </h2>
          <p className="text-[#757693] max-w-xl mx-auto">
            From sourcing to settlement in weeks, not months — a seamless end-to-end procurement lifecycle.
          </p>
          {/* Tab switcher */}
          <div className="inline-flex mt-8 bg-[#F7F8FC] border border-stroke rounded-xl p-1 gap-1">
            <button
              onClick={() => { setTab("buyer"); setActiveStep(0); }}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${tab === "buyer" ? "bg-[#0D1B3E] text-white shadow-md" : "text-[#757693] hover:text-[#0D1B3E]"}`}
            >
              🏢 I'm a Buyer
            </button>
            <button
              onClick={() => { setTab("vendor"); setActiveStep(0); }}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all ${tab === "vendor" ? "bg-[#0D1B3E] text-white shadow-md" : "text-[#757693] hover:text-[#0D1B3E]"}`}
            >
              ⚙️ I'm a Vendor
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Steps */}
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className={`flex gap-5 py-5 px-4 rounded-xl cursor-pointer transition-all border mb-2 ${activeStep === i ? "bg-[#F7F8FC] border-[#0D1B3E]/20" : "border-transparent hover:bg-[#F7F8FC]"}`}
              >
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0 transition-all ${activeStep === i ? "border-[#0D1B3E] bg-[#0D1B3E] text-white" : "border-stroke text-[#757693]"}`}>
                  {step.num}
                </div>
                <div>
                  <div className={`font-bold text-base mb-1 transition-colors ${activeStep === i ? "text-[#0D1B3E]" : "text-[#757693]"}`}>{step.title}</div>
                  <div className="text-sm text-[#757693] leading-relaxed">{step.desc}</div>
                  <span className="mt-2 inline-block text-xs font-semibold text-[#757693] bg-[#F7F8FC] border border-stroke px-2.5 py-1 rounded-full">{step.tag}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Visual panel */}
          <div className="sticky top-28">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${tab}-${activeStep}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-stroke rounded-2xl p-8 shadow-solid-3 min-h-64 flex flex-col justify-center"
              >
                <div className="text-5xl mb-5">{steps[activeStep].icon}</div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-3">{steps[activeStep].title}</h3>
                <p className="text-[#757693] leading-relaxed mb-6">{steps[activeStep].desc}</p>
                <div className="flex flex-col gap-2.5">
                  {["Structured & auditable process", "Verified participants only", "End-to-end accountability"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-[#3D4461]">
                      <span className="text-[#059669] font-bold">✓</span>
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-5 border-t border-stroke flex items-center justify-between">
                  <span className="text-xs font-semibold text-[#757693]">Step {activeStep + 1} of {steps.length}</span>
                  <div className="flex gap-1.5">
                    {steps.map((_, i) => (
                      <div key={i} onClick={() => setActiveStep(i)} className={`h-1.5 rounded-full cursor-pointer transition-all ${i === activeStep ? "w-6 bg-[#0D1B3E]" : "w-1.5 bg-stroke"}`} />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
