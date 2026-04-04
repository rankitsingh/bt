"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { submitToSheets } from "@/lib/submitToSheets";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim()) { setError("Please fill in your name and email."); return; }
    setError(""); setLoading(true);
    await submitToSheets({
      type: "Contact",
      name, mobile, email, message,
      source: "Website — Contact Section",
    });
    setLoading(false); setSubmitted(true);
  };

  const inputClass = "w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm outline-none focus:border-[#0D1B3E] focus:ring-2 focus:ring-[#0D1B3E]/10 transition";

  return (
    <section id="contact" className="py-20 lg:py-25 bg-gray-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 mb-4">
              <span className="w-5 h-0.5 bg-blue-700 rounded" />Get In Touch
            </span>
            <h2 className="text-3xl font-extrabold text-[#0D1B3E] lg:text-4xl tracking-tight mb-5">Have Questions?<br />We're Here to Help.</h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-sm">Whether you're a buyer looking to get onboarded or a vendor wanting to get verified — reach out and our team will get back to you within 24 hours.</p>
            <div className="flex flex-col gap-4">
              {[
                { icon:"📧", label:"Email", value:"hello@bharattender.ai" },
                { icon:"📞", label:"Phone", value:"+91 98765 43210" },
                { icon:"📍", label:"Location", value:"Gurugram, Haryana, India" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-gray-200 rounded-xl flex items-center justify-center text-lg shadow-sm">{c.icon}</div>
                  <div><div className="text-xs font-semibold text-gray-400">{c.label}</div><div className="text-sm font-medium text-[#0D1B3E]">{c.value}</div></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} transition={{ duration:0.6 }} viewport={{ once:true }}
            className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">Message Received!</h3>
                <p className="text-gray-500 text-sm">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-[#0D1B3E] mb-6">Send us a message</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name *</label><input value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Rahul Sharma" className={inputClass} /></div>
                  <div><label className="text-xs font-semibold text-gray-600 mb-1 block">Mobile</label><input value={mobile} onChange={e=>setMobile(e.target.value)} type="tel" placeholder="+91 98765 43210" className={inputClass} /></div>
                </div>
                <div className="mb-3"><label className="text-xs font-semibold text-gray-600 mb-1 block">Email *</label><input value={email} onChange={e=>setEmail(e.target.value)} type="email" placeholder="you@company.com" className={inputClass} /></div>
                <div className="mb-4"><label className="text-xs font-semibold text-gray-600 mb-1 block">Message</label><textarea value={message} onChange={e=>setMessage(e.target.value)} rows={4} placeholder="Tell us about your procurement needs or how you supply..." className={inputClass + " resize-none"} /></div>
                {error && <p className="text-xs text-red-500 mb-3 font-medium">⚠️ {error}</p>}
                <button onClick={handleSubmit} disabled={loading} className="w-full py-3.5 bg-[#0D1B3E] text-white font-bold rounded-xl hover:bg-[#1a2f5e] transition-all hover:-translate-y-0.5 text-sm disabled:opacity-60">
                  {loading ? "Sending..." : "Send Message →"}
                </button>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
