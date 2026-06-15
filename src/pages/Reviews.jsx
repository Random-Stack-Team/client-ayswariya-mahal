import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { useEnquiry } from "../context/useEnquiry";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";

const googleReviewUrl =
  "https://www.google.com/maps/place/Ayswariya+Mahal+Marriage+and+Exhibition+Hall/@13.0625433,80.2115214,17z/data=!4m8!3m7!1s0x3a526695dd0a89ad:0x1b112a6d3c31ebea!8m2!3d13.0625433!4d80.2115214!9m1!1b1!16s%2Fg%2F1tcz6rhq?hl=en&entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D";

const reviews = [
  {
    name: "Karthik & Priya",
    review: "A beautiful wedding hall with excellent facilities. The management was very supportive throughout our event.",
    rating: 5,
    date: "March 2026",
  },
  {
    name: "Suresh Kumar",
    review: "Spacious hall, ample parking, and excellent dining arrangements. Highly recommended for weddings and receptions.",
    rating: 4,
    date: "January 2026",
  },
  {
    name: "Meena Raj",
    review: "The ambience and decoration support were amazing. Our guests were impressed with the facilities.",
    rating: 5,
    date: "February 2026",
  },
  {
    name: "Arun & Divya",
    review: "Everything was well organized and the hall looked stunning. A memorable experience for our family.",
    rating: 5,
    date: "April 2026",
  },
  {
    name: "Vignesh",
    review: "Excellent maintenance, good seating capacity, and a prime location. Worth every penny.",
    rating: 5,
    date: "May 2026",
  },
  {
    name: "Ramya",
    review: "Very professional team and beautiful venue. We received many compliments from our guests.",
    rating: 4,
    date: "December 2025",
  },
];

export default function Reviews() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const { openForm } = useEnquiry();
  const [activeReview, setActiveReview] = useState(0);
  const currentReview = reviews[activeReview];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <>
      <SEO
        title="Guest Reviews & Testimonials"
        description="Read guest reviews and testimonials from families who celebrated weddings, receptions, engagements, and special events at Ayswariya Mahal in Chennai."
        path="/reviews"
      />
      <PageTransition>
        <main className="relative min-h-screen overflow-x-clip bg-[#fdfbf7] pt-24 md:pt-28 lg:pt-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-0 top-0 h-[1400px] w-full bg-gradient-to-b from-[#4A0A12]/28 via-[#6a1a24]/18 via-[#f7f0e4]/10 to-[#fdfbf7]" />
          </div>

          <section className="relative z-20 px-5 pb-16 sm:px-6 md:pb-20 lg:pb-28">
            <motion.div
              className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[1.5rem] border border-[#E5C76B]/20 bg-gradient-to-br from-[#fffdf7] via-[#faf6ea] to-[#f5ecd1] p-5 text-center shadow-[0_35px_110px_rgba(74,10,18,0.14)] sm:p-8 md:rounded-[2rem] md:p-10 lg:rounded-[2.5rem] lg:p-20"
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="absolute left-1/2 top-0 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E5C76B]/70 to-transparent" />
              <div className="absolute bottom-0 left-1/2 h-1 w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E5C76B]/70 to-transparent" />
              <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#E5C76B]/10 blur-3xl" />
              <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#4A0A12]/5 blur-3xl" />

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: -16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
                  className="mb-6 flex justify-center text-[#E5C76B]"
                >
                  <Star size={26} strokeWidth={1} />
                </motion.div>

                <motion.p
                  className="mb-6 type-eyebrow text-[#E5C76B] drop-shadow-md"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15 }}
                >
                  Testimonials
                </motion.p>

                <motion.h1
                  className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#4A0A12] drop-shadow-sm md:max-lg:text-[58px]"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.2 }}
                >
                  What Our <span className="italic text-[#E5C76B]">Guests Say</span>
                </motion.h1>

                <motion.p
                  className="mx-auto mt-7 max-w-3xl type-body text-[#4f4038]"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Trusted by thousands of families for weddings, receptions, engagements, and memorable celebrations.
                </motion.p>

                <motion.div
                  className="mx-auto mt-8 max-w-2xl rounded-[1.5rem] border border-[#E5C76B]/30 bg-[#fffdf8]/90 p-5 text-center shadow-sm backdrop-blur-sm sm:p-7 md:mt-10 md:rounded-[2rem] md:p-8 lg:mt-12 lg:p-10"
                  initial={{ opacity: 0, y: 35, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                  <div className="mb-5 flex justify-center gap-1" aria-label="4.2 out of 5 star rating">
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
                        transition={{ duration: 0.45, delay: 0.6 + index * 0.15, ease: "backOut" }}
                      >
                        <Star size={32} fill="currentColor" color="currentColor" />
                      </motion.div>
                    ))}
                  </div>

                  <h2 className="mb-2 font-display text-4xl font-bold leading-[1.1] tracking-[-0.02em] text-[#4A0A12] md:text-5xl">
                    4.2 / 5
                  </h2>

                  <p className="mb-7 type-body text-[#4f4038]">Based on 1600+ Google Reviews</p>

                  <a
                    href={googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#E5C76B] px-7 py-4 type-cta text-[#4A0A12] shadow-md transition hover:bg-[#d4af37] hover:shadow-lg"
                  >
                    View Google Reviews
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </section>

          <section className="relative z-10 px-5 pb-16 sm:px-6 md:pb-24">
            <div className="mx-auto max-w-[1180px]">
              <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
                <motion.div
                  {...(isDesktop ? { initial: { opacity: 0, x: -40 }, whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.55, ease: "easeOut" } } : {})}
                >
                  <p className="mb-5 type-eyebrow text-[#E5C76B]">Guest Reviews</p>

                  <h2 className="mb-6 font-serif text-[32px] font-semibold leading-[1.2] tracking-[0.01em] text-[#4A0A12] md:text-[40px] lg:text-5xl">
                    Real Words From <span className="italic text-[#E5C76B]">Happy Families</span>
                  </h2>

                  <p className="max-w-md type-body text-[#4f4038]">
                    Every celebration at Ayswariya Mahal becomes a memory. Hear from the families who trusted us for their special occasions.
                  </p>
                </motion.div>

                <div className="relative flex min-h-[360px] items-center justify-center px-8 md:min-h-[380px] md:px-0">
                  <button
                    onClick={prevReview}
                    aria-label="Previous review"
                    className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5C76B]/20 bg-white/70 text-[#4A0A12]/70 backdrop-blur-md transition-all duration-300 hover:bg-white/80 md:-left-8 md:bg-white/40"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={nextReview}
                    aria-label="Next review"
                    className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E5C76B]/20 bg-white/70 text-[#4A0A12]/70 backdrop-blur-md transition-all duration-300 hover:bg-white/80 md:-right-8 md:bg-white/40"
                  >
                    <ChevronRight size={18} />
                  </button>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeReview}
                      className="relative w-full max-w-2xl overflow-hidden rounded-[1.5rem] border border-[#E5C76B]/30 bg-[#fffdf8] p-5 shadow-[0_24px_70px_rgba(74,10,18,0.14)] sm:p-7 md:rounded-[2rem] md:p-8 lg:p-10"
                      initial={{ opacity: 0, x: 65, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -65, scale: 0.98 }}
                      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="pointer-events-none absolute inset-3 rounded-[1.5rem] border border-[#E5C76B]/25" />
                      <div className="absolute left-1/2 top-0 h-[3px] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent" />
                      <div className="absolute bottom-0 left-1/2 h-[3px] w-32 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent" />
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#E5C76B]/10 blur-2xl" />
                      <div className="absolute bottom-5 right-8 font-serif text-7xl text-[#E5C76B]/25">"</div>

                      <div className="relative z-10 mb-8 flex gap-1" aria-label={`${currentReview.rating} star review`}>
                        {[...Array(currentReview.rating)].map((_, starIndex) => (
                          <Star key={starIndex} size={20} fill="#FACC15" color="#FACC15" />
                        ))}
                      </div>

                      <p className="relative z-10 mb-8 type-body text-[#4f4038] italic">"{currentReview.review}"</p>

                      <h3 className="relative z-10 font-serif text-[22px] font-semibold leading-[1.2] text-[#4A0A12]">
                        {currentReview.name}
                      </h3>
                      <p className="type-small text-[#4f4038] mt-1">{currentReview.date}</p>
                    </motion.div>
                  </AnimatePresence>

                  <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 gap-2">
                    {reviews.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveReview(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeReview === index ? "w-8 bg-[#E5C76B]" : "w-2 bg-[#4A0A12]/25"
                        }`}
                        aria-label={`Show review ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative z-10 border-t-4 border-double border-[#E5C76B] bg-[#4A0A12] px-5 pt-16 pb-[calc(4rem+env(safe-area-inset-bottom))] text-center sm:px-6 md:pt-20 md:pb-[calc(5rem+env(safe-area-inset-bottom))] lg:py-[120px]">
            <motion.div
              className="mx-auto max-w-4xl"
              {...(isDesktop ? { initial: { opacity: 0, y: 45 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.25 }, transition: { duration: 0.55 } } : {})}
            >
              <p className="mb-6 type-eyebrow text-[#E5C76B]">Celebrate With Us</p>

              <h2 className="mb-8 font-serif text-[32px] font-semibold leading-[1.2] tracking-[0.01em] text-[#fdfbf7] md:text-[40px] lg:text-5xl">
                Let's Make Your Special Day <span className="italic text-[#E5C76B]">Memorable</span>
              </h2>

              <p className="mx-auto mb-12 max-w-2xl type-body text-[#fdfbf7]/82">
                Join thousands of happy families who trusted Ayswariya Mahal for their most cherished celebrations. Reserve your date today.
              </p>

              <button
                onClick={openForm}
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#d4af37] via-[#E5C76B] to-[#d4af37] px-8 py-5 type-cta text-[#4A0A12] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(229,199,107,0.4)] sm:w-auto md:px-12"
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
