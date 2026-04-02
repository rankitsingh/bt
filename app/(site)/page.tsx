import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import About from "@/components/About";
import Feature from "@/components/Features";
import FeaturesTab from "@/components/FeaturesTab";
import HowItWorks from "@/components/HowItWorks";
import FunFact from "@/components/FunFact";
import Audience from "@/components/Audience";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "BharatTender — India's Private B2B Tender Marketplace",
  description:
    "Post a tender. Verified vendors compete with sealed bids. Pay only on delivery. India's first private procurement marketplace replacing WhatsApp deals with verified bidding, digital contracts and escrow-secured payments.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <Feature />
      <FeaturesTab />
      <HowItWorks />
      <FunFact />
      <Audience />
      <Testimonial />
      <CTA />
      <FAQ />
      <Contact />
    </main>
  );
}
