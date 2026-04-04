"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-25 bg-[#F7F8FC]">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-4">
              <span className="w-5 h-0.5 bg-[#1D4ED8] rounded" />
              Get In Touch
            </span>
            <h2 className="text-3xl font-bold text-[#0D1B3E] lg:text-4xl tracking-tight mb-5">
              Have Questions?<br />We're Here to Help.
            </h2>
            <p className="text-[#757693] leading-relaxed mb-8">
              Whether you're a buyer looking to post your first tender or a vendor wanting to get verified and win business — reach out and our team will get back to you within 24 hours.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { icon: "📧", label: "Email", value: "hello@bharattender.ai" },
                { icon: "📞", label: "Phone", value: "+91 98765 43210" },
                { icon: "📍", label: "Location", value: "Gurugram, Haryana, India" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-stroke rounded-xl flex items-center justify-center text-lg">{c.icon}</div>
                  <div>
                    <div className="text-xs font-semibold text-[#757693]">{c.label}</div>
                    <div className="text-sm font-medium text-[#0D1B3E]">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border border-stroke rounded-2xl p-8 shadow-solid-3"
          >
            {submitted ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">Message Received!</h3>
                <p className="text-[#757693] text-sm">Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-[#0D1B3E] mb-6">Send us a message</h3>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-[#3D4461]">Full Name</label><input type="text" placeholder="Rahul Sharma" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
                  <div className="flex flex-col gap-1"><label className="text-xs font-semibold text-[#3D4461]">Mobile</label><input type="tel" placeholder="+91 98765 43210" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
                </div>
                <div className="flex flex-col gap-1 mb-3"><label className="text-xs font-semibold text-[#3D4461]">Email</label><input type="email" placeholder="you@company.com" className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E]" /></div>
                <div className="flex flex-col gap-1 mb-5"><label className="text-xs font-semibold text-[#3D4461]">Message</label><textarea rows={4} placeholder="Tell us about your procurement needs or how you can supply..." className="px-3 py-2.5 border border-stroke rounded-lg text-sm outline-none focus:border-[#0D1B3E] resize-none" /></div>
                <button onClick={() => setSubmitted(true)} className="w-full py-3.5 bg-[#0D1B3E] text-white font-bold rounded-xl hover:bg-[#1a2f5e] transition-all hover:-translate-y-0.5 text-sm">
                  Send Message →
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
