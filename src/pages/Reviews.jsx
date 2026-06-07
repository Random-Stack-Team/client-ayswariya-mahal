import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEnquiry } from "../context/EnquiryContext";
import heroImg from "../assets/images/facility1.webp";
import SEO from "../components/common/SEO";

const reviews = [
  {
    name: "Karthik & Priya",
    review:
      "A beautiful wedding hall with excellent facilities. The management was very supportive throughout our event.",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    review:
      "Spacious hall, ample parking, and excellent dining arrangements. Highly recommended for weddings and receptions.",
    rating: 5,
  },
  {
    name: "Meena Raj",
    review:
      "The ambience and decoration support were amazing. Our guests were impressed with the facilities.",
    rating: 5,
  },
  {
    name: "Arun & Divya",
    review:
      "Everything was well organized and the hall looked stunning. A memorable experience for our family.",
    rating: 5,
  },
  {
    name: "Vignesh",
    review:
      "Excellent maintenance, good seating capacity, and a prime location. Worth every penny.",
    rating: 5,
  },
  {
    name: "Ramya",
    review:
      "Very professional team and beautiful venue. We received many compliments from our guests.",
    rating: 5,
  },
];

export default function Reviews() {
  const { openForm } = useEnquiry();

  return (
    <>
      <SEO 
        title="Guest Reviews & Testimonials" 
        description="Read reviews from thousands of happy families who celebrated their weddings and events at Ayswariya Mahal." 
        path="/reviews"
      />
      <main className="bg-[#fdfbf7] min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[50vh] md:min-h-[60vh] mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        {/* Dark Cinematic Overlay fading into cream bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A0A12]/80 via-[#1c0d11]/70 to-[#fdfbf7]"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6 text-[#E5C76B]"
          >
            <Star size={24} strokeWidth={1} />
          </motion.div>

          <motion.p
            className="font-serif uppercase tracking-[0.4em] text-[#E5C76B] mb-6 font-bold text-sm drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Testimonials
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-display text-[#fdfbf7] drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What Our <span className="italic text-[#E5C76B]">Guests Say</span>
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg text-[#fdfbf7]/90 font-serif leading-relaxed drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Trusted by thousands of families for weddings,
            receptions, engagements, and memorable celebrations.
          </motion.p>

        </div>
      </section>

      {/* Google Rating Section */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl p-10 shadow-sm text-center">

          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={32}
                fill="#FACC15"
                color="#FACC15"
              />
            ))}
          </div>

          <h2 className="text-5xl font-bold mb-2">
            4.8 / 5
          </h2>

          <p className="text-gray-600 mb-6">
            Based on 250+ Google Reviews
          </p>

          <a
            href="#"
            className="inline-block bg-[#E5C76B] text-[#4A0A12] font-serif font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#d4af37] transition shadow-md hover:shadow-lg"
          >
            View Google Reviews
          </a>

        </div>
      </section>

      {/* Review Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-[1280px] mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-[#E5C76B]/20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="flex gap-1 mb-5">
                  {[...Array(review.rating)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={18}
                      fill="#FACC15"
                      color="#FACC15"
                    />
                  ))}
                </div>

                <p className="text-gray-600 leading-7 mb-6 font-serif italic">
                  "{review.review}"
                </p>

                <h3 className="font-semibold text-lg text-[#4A0A12]">
                  {review.name}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4A0A12] py-20 md:py-[120px] px-6 text-center border-t-4 border-double border-[#E5C76B]">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-[#E5C76B] mb-6 font-serif font-bold text-sm">
            Celebrate With Us
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-[#fdfbf7] mb-8 leading-tight">
            Let's Make Your Special Day <span className="italic text-[#E5C76B]">Memorable</span>
          </h2>
          <p className="text-[#fdfbf7]/80 leading-relaxed text-lg mb-12 font-serif max-w-2xl mx-auto">
            Join thousands of happy families who trusted Ayswariya Mahal for their most cherished celebrations. Reserve your date today.
          </p>
          <button
            onClick={openForm}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] via-[#E5C76B] to-[#d4af37] text-[#4A0A12] px-12 py-5 font-serif text-sm font-bold tracking-[0.25em] uppercase rounded-full hover:shadow-[0_8px_30px_rgba(229,199,107,0.4)] transition-all duration-500 transform hover:-translate-y-1"
          >
            Enquire Availability
          </button>
        </div>
      </section>

      </main>
    </>
  );
}