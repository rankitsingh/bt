"use client";
import { industryData } from "./brandData";

const Brands = () => (
  <section className="py-12 border-b border-stroke bg-white">
    <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center">
      <p className="text-sm text-[#757693] mb-8 font-medium">
        Businesses from across India's industrial hubs are already on the platform
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        {industryData.map((item, i) => (
          <div key={i} className="flex items-center gap-2 border border-stroke rounded-full px-4 py-2 text-sm font-medium text-[#3D4461] hover:border-[#0D1B3E] hover:text-[#0D1B3E] transition-all cursor-default">
            <span>{item.icon}</span>
            {item.name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Brands;
