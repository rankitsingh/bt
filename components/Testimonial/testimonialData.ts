export type Testimonial = {
  id: number;
  name: string;
  designation: string;
  image: string;
  content: string;
};

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Agarwal",
    designation: "MD, Agarwal Steel & Alloys, Ludhiana",
    image: "/images/user/user-01.png",
    content:
      "We used to spend 2–3 weeks chasing vendors on WhatsApp for every bulk order. With BharatTender, we posted a tender for HR coils, got 9 sealed bids in 48 hours, saved ₹1.8 lakhs versus our usual vendor, and the payment was fully secured in escrow. This is how procurement should work.",
  },
  {
    id: 2,
    name: "Priya Mehta",
    designation: "Procurement Head, Mehta Textiles Pvt. Ltd., Surat",
    image: "/images/user/user-02.png",
    content:
      "We had lost money twice to vendors who took advance and disappeared. BharatTender's escrow system is a game changer — our funds are protected until delivery is confirmed. Plus the vendor verification gives us confidence we're dealing with real, registered businesses.",
  },
  {
    id: 3,
    name: "Suresh Nair",
    designation: "Director, BuildRight Contractors, Hyderabad",
    image: "/images/user/user-01.png",
    content:
      "As a vendor, I was tired of cold calling and relying on personal contacts for new business. After registering on BharatTender and getting verified, I received my first tender match within a week and won a ₹12L contract. The escrow payment meant I got paid on time without any chasing.",
  },
];

export default testimonialData;
