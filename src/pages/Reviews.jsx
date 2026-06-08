import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useEnquiry } from "../context/EnquiryContext";
import SEO from "../components/common/SEO";

const googleReviewUrl =
  "https://www.google.com/maps/place/Ayswariya+Mahal+Marriage+and+Exhibition+Hall/@13.0625433,80.2115214,17z/data=!4m8!3m7!1s0x3a526695dd0a89ad:0x1b112a6d3c31ebea!8m2!3d13.0625433!4d80.2115214!9m1!1b1!16s%2Fg%2F1tcz6rhq?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D";

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
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

  const currentReview = reviews[activeReview];

  return (
    
    <>
      <SEO
        title="Guest Reviews & Testimonials"
        description="Read reviews from thousands of happy families who celebrated their weddings and events at Ayswariya Mahal."
        path="/reviews"
      />

      <main className="bg-[#fdfbf7] min-h-screen overflow-hidden pt-32 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1400px] bg-gradient-to-b from-[#4A0A12]/28 via-[#6a1a24]/18 via-[#f7f0e4]/10 to-[#fdfbf7]"></div>
        </div>

        <section className="px-6 pb-28 relative z-20">
          <motion.div
            className="max-w-[1320px] mx-auto bg-gradient-to-br from-[#fffdf7] via-[#faf6ea] to-[#f5ecd1] rounded-[2.5rem] p-10 md:p-16 lg:p-20 shadow-[0_35px_110px_rgba(74,10,18,0.14)] border border-[#E5C76B]/20 relative overflow-hidden"
            initial={{ opacity: 0, y: 70, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="absolute top-0 left-1/2 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E5C76B]/70 to-transparent"></div>
            <div className="absolute bottom-0 left-1/2 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E5C76B]/70 to-transparent"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#E5C76B]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#4A0A12]/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: -16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                className="flex justify-center mb-6 text-[#E5C76B]"
              >
                <Star size={26} strokeWidth={1} />
              </motion.div>

              <motion.p
                className="font-serif uppercase tracking-[0.4em] text-[#E5C76B] mb-6 font-bold text-sm drop-shadow-md"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.15 }}
              >
                Testimonials
              </motion.p>

              <motion.h1
                className="text-5xl md:text-7xl font-display text-[#4A0A12] drop-shadow-sm"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.2 }}
              >
                What Our{" "}
                <span className="italic text-[#E5C76B]">Guests Say</span>
              </motion.h1>

              <motion.p
                className="mt-7 max-w-3xl mx-auto text-lg text-gray-600 font-serif leading-relaxed"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Trusted by thousands of families for weddings, receptions,
                engagements, and memorable celebrations.
              </motion.p>

              <motion.div
                className="mt-12 bg-[#fffdf8]/90 rounded-[2rem] p-8 md:p-10 text-center border border-[#E5C76B]/30 shadow-sm max-w-2xl mx-auto backdrop-blur-sm"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        scale: 0.6,
                        rotate: -20,
                        color: "#ffffff",
                        filter: "drop-shadow(0 0 0px rgba(250,204,21,0))",
                      }}
                      animate={{
                        scale: 1,
                        rotate: 0,
                        color: "#FACC15",
                        opacity: index < 4 ? 1 : 0.35,
                        filter:
                          index < 4
                            ? "drop-shadow(0 0 12px rgba(250,204,21,0.75))"
                            : "drop-shadow(0 0 5px rgba(250,204,21,0.25))",
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.6 + index * 0.15,
                        ease: "backOut",
                      }}
                    >
                      <Star
                        size={32}
                        fill="currentColor"
                        color="currentColor"
                      />
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-5xl font-bold mb-2">4.2 / 5</h2>

                <p className="text-gray-600 mb-7">
                  Based on 1600+ Google Reviews
                </p>

                <a
                  href={googleReviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#E5C76B] text-[#4A0A12] font-serif font-bold uppercase tracking-widest px-7 py-4 rounded-full hover:bg-[#d4af37] transition shadow-md hover:shadow-lg"
                >
                  View Google Reviews
                </a>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="pb-24 px-6 relative z-10">
          <div className="max-w-[1180px] mx-auto">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                <p className="font-serif uppercase tracking-[0.4em] text-[#E5C76B] mb-5 font-bold text-sm">
                  Guest Reviews
                </p>

                <h2 className="text-4xl md:text-5xl font-display text-[#4A0A12] mb-6 leading-tight">
                  Real Words From{" "}
                  <span className="italic text-[#E5C76B]">
                    Happy Families
                  </span>
                </h2>

                <p className="text-gray-600 leading-8 text-lg font-serif max-w-md">
                  Every celebration at Ayswariya Mahal becomes a memory. Hear
                  from the families who trusted us for their special occasions.
                </p>
              </motion.div>

              <div className="relative min-h-[380px] flex items-center justify-center">

  <button
    onClick={prevReview}
    className="absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/40 backdrop-blur-md border border-[#E5C76B]/20 flex items-center justify-center text-[#4A0A12]/70 hover:bg-white/60 transition-all duration-300"
  >
    <ChevronLeft size={18} />
  </button>

  <button
    onClick={nextReview}
    className="absolute right-0 md:-right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/40 backdrop-blur-md border border-[#E5C76B]/20 flex items-center justify-center text-[#4A0A12]/70 hover:bg-white/60 transition-all duration-300"
  >
    <ChevronRight size={18} />
  </button>

  <AnimatePresence mode="wait">
                  <motion.div
                    key={activeReview}
                    className="w-full max-w-2xl bg-[#fffdf8] p-8 md:p-10 rounded-[2rem] shadow-[0_24px_70px_rgba(74,10,18,0.14)] border border-[#E5C76B]/30 relative overflow-hidden"
                    initial={{ opacity: 0, x: 65, scale: 0.98 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -65, scale: 0.98 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <div className="absolute inset-3 rounded-[1.5rem] border border-[#E5C76B]/25 pointer-events-none"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent"></div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[3px] bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent"></div>
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#E5C76B]/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-5 right-8 text-[#E5C76B]/25 text-7xl font-serif">
                      “
                    </div>

                    <div className="flex gap-1 mb-8 relative z-10">
                      {[...Array(currentReview.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          size={20}
                          fill="#FACC15"
                          color="#FACC15"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 leading-8 mb-8 font-serif italic text-lg relative z-10">
                      "{currentReview.review}"
                    </p>

                    <h3 className="font-semibold text-xl text-[#4A0A12] relative z-10">
                      {currentReview.name}
                    </h3>
                  </motion.div>
                </AnimatePresence>

                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveReview(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        activeReview === index
                          ? "w-8 bg-[#E5C76B]"
                          : "w-2 bg-[#4A0A12]/25"
                      }`}
                      aria-label={`Show review ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#4A0A12] py-20 md:py-[120px] px-6 text-center border-t-4 border-double border-[#E5C76B] relative z-10">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
          >
            <p className="uppercase tracking-[0.4em] text-[#E5C76B] mb-6 font-serif font-bold text-sm">
              Celebrate With Us
            </p>

            <h2 className="text-4xl md:text-5xl font-display text-[#fdfbf7] mb-8 leading-tight">
              Let's Make Your Special Day{" "}
              <span className="italic text-[#E5C76B]">Memorable</span>
            </h2>

            <p className="text-[#fdfbf7]/80 leading-relaxed text-lg mb-12 font-serif max-w-2xl mx-auto">
              Join thousands of happy families who trusted Ayswariya Mahal for
              their most cherished celebrations. Reserve your date today.
            </p>

            <button
              onClick={openForm}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#d4af37] via-[#E5C76B] to-[#d4af37] text-[#4A0A12] px-12 py-5 font-serif text-sm font-bold tracking-[0.25em] uppercase rounded-full hover:shadow-[0_8px_30px_rgba(229,199,107,0.4)] transition-all duration-500 transform hover:-translate-y-1"
            >
              Enquire Availability
            </button>
          </motion.div>
        </section>
      </main>
    </>
  );
}