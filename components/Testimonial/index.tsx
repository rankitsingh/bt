"use client";
import { motion } from "framer-motion";
import testimonialData from "./testimonialData";

const Testimonial = () => (
  <section className="py-20 lg:py-25 bg-white">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#1D4ED8] mb-4">
          <span className="w-5 h-0.5 bg-[#1D4ED8] rounded" />
          What They Say
        </span>
        <h2 className="text-3xl font-bold text-[#0D1B3E] lg:text-4xl tracking-tight">
          Businesses Already Seeing the Difference.
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonialData.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#F7F8FC] border border-stroke rounded-2xl p-6 hover:shadow-solid-3 transition-all"
          >
            <div className="flex gap-1 mb-4">
              {Array(5).fill(null).map((_, j) => <span key={j} className="text-[#F59E0B] text-sm">★</span>)}
            </div>
            <p className="text-sm text-[#3D4461] leading-relaxed mb-5 italic">"{t.content}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-stroke">
              <div className="w-9 h-9 rounded-full bg-[#0D1B3E] flex items-center justify-center text-white text-xs font-bold">
                {t.name.split(" ").map(n => n[0]).join("").slice(0,2)}
              </div>
              <div>
                <div className="text-sm font-bold text-[#0D1B3E]">{t.name}</div>
                <div className="text-xs text-[#757693]">{t.designation}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonial;
