import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEnquiry } from "../context/useEnquiry";
import heroImg from "../assets/images/facility1.webp";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";

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
      <PageTransition>
        <main className="bg-[#fdfbf7] min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[50vh] md:min-h-[60vh] mb-12">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        {/* Dark Cinematic Overlay fading into cream bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/80 via-[#3F0C15]/70 to-[#fdfbf7]"></div>

        <div className="relative z-10 max-w-[1280px] mx-auto text-center">

          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
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

<<<<<<< Updated upstream
      {/* Google Rating Section */}
      <section className="px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.28 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto bg-white rounded-2xl p-10 shadow-sm text-center"
        >
=======
      {/* Google Rating Section (PREMIUM UPGRADE) */}
<section className="px-6 pb-24">
  <div className="max-w-5xl mx-auto relative">
>>>>>>> Stashed changes

    {/* Glow background */}
    <div className="absolute -inset-1 bg-gradient-to-r from-[#E5C76B]/20 via-transparent to-[#E5C76B]/20 blur-2xl opacity-60 rounded-2xl" />

    {/* Card */}
    <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 text-center shadow-xl border border-[#E5C76B]/20 overflow-hidden">

      {/* Top luxury line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent" />

<<<<<<< Updated upstream
          <a
            href="#"
            className="inline-block bg-[#E5C76B] text-[#5A111C] font-serif font-bold uppercase tracking-widest px-8 py-4 rounded-full hover:bg-[#d4af37] transition shadow-md hover:shadow-lg"
          >
            View Google Reviews
          </a>

        </motion.div>
      </section>
=======
      {/* Stars */}
      <div className="flex justify-center gap-1 mb-5">
        {[...Array(5)].map((_, index) => {
          const rating = 4.2;

          const fillLevel = () => {
            if (index + 1 <= Math.floor(rating)) return 100;
            if (index < rating) return (rating % 1) * 100;
            return 0;
          };
>>>>>>> Stashed changes

          const fill = fillLevel();

          return (
            <div key={index} className="relative">
              <Star size={34} color="#E5E7EB" />

              <div
                className="absolute top-0 left-0 overflow-hidden"
                style={{ width: `${fill}%` }}
              >
                <Star size={34} fill="#FACC15" color="#FACC15" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Rating */}
      <h2 className="text-6xl font-bold text-[#4A0A12] mb-2 tracking-tight">
        4.2 <span className="text-3xl text-gray-500">/ 5</span>
      </h2>

      {/* Subtitle */}
      <p className="text-gray-600 mb-8 text-lg">
        Based on <span className="font-semibold text-[#4A0A12]">1,670+</span> Google Reviews
      </p>

<<<<<<< Updated upstream
                <h3 className="font-semibold text-lg text-[#5A111C]">
                  {review.name}
                </h3>
=======
    
>>>>>>> Stashed changes

      {/* Button */}
      <a
        href="#"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] via-[#E5C76B] to-[#d4af37] text-[#4A0A12] font-serif font-bold uppercase tracking-widest px-10 py-4 rounded-full hover:shadow-[0_10px_40px_rgba(229,199,107,0.4)] transition-all duration-500 hover:-translate-y-1"
      >
        View Google Reviews
      </a>

    </div>
  </div>
</section>


      {/* Review Cards - PREMIUM UPGRADE */}
<section className="pb-24 px-6">
  <div className="max-w-[1280px] mx-auto">

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {reviews.map((review, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="relative group"
        >

          {/* Glow Background Layer */}
          <div className="absolute -inset-1 bg-gradient-to-r from-[#E5C76B]/20 via-transparent to-[#E5C76B]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-700" />

          {/* Card */}
          <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-lg border border-[#E5C76B]/20 overflow-hidden">

            {/* Top Glow Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent opacity-60" />

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(review.rating)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 + i * 0.05 }}
                >
                  <Star
                    size={18}
                    fill="#FACC15"
                    color="#FACC15"
                    className="drop-shadow-sm"
                  />
                </motion.div>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-600 leading-7 mb-6 font-serif italic text-[15px] tracking-wide">
              “{review.review}”
            </p>

            {/* Divider */}
            <div className="w-12 h-[2px] bg-[#E5C76B]/40 mb-4" />

            {/* Name */}
            <h3 className="font-semibold text-[#4A0A12] text-lg tracking-wide">
              {review.name}
            </h3>

          </div>
        </motion.div>
      ))}

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-[#5A111C] py-20 md:py-[120px] px-6 text-center border-t-4 border-double border-[#E5C76B]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.24 }}
          transition={{ duration: 0.92, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
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
            className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] via-[#E5C76B] to-[#d4af37] text-[#5A111C] px-12 py-5 font-serif text-sm font-bold tracking-[0.25em] uppercase rounded-full hover:shadow-[0_8px_30px_rgba(229,199,107,0.4)] transition-all duration-500 transform hover:-translate-y-1"
          >
            Enquire Availability
          </button>
        </motion.div>
      </section>

        </main>
      </PageTransition>
    </>
  );
}
