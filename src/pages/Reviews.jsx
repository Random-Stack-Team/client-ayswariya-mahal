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

          {/* HERO */}
          <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[50vh] md:min-h-[60vh] mb-12">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${heroImg})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/80 via-[#3F0C15]/70 to-[#fdfbf7]" />

            <div className="relative z-10 max-w-[1280px] mx-auto text-center">

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex justify-center mb-6 text-[#E5C76B]"
              >
                <Star size={24} strokeWidth={1} />
              </motion.div>

              <motion.p className="font-serif uppercase tracking-[0.4em] text-[#E5C76B] mb-6 font-bold text-sm">
                Testimonials
              </motion.p>

              <motion.h1 className="text-5xl md:text-7xl font-display text-[#fdfbf7]">
                What Our <span className="italic text-[#E5C76B]">Guests Say</span>
              </motion.h1>

              <motion.p className="mt-6 max-w-3xl mx-auto text-lg text-[#fdfbf7]/90 font-serif">
                Trusted by thousands of families for weddings, receptions, engagements, and memorable celebrations.
              </motion.p>

            </div>
          </section>

          {/* GOOGLE RATING */}
          <section className="px-6 pb-20">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-5xl mx-auto bg-white rounded-2xl p-10 shadow-sm text-center"
            >
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={32} fill="#FACC15" color="#FACC15" />
                ))}
              </div>

              <h2 className="text-5xl font-bold mb-2">4.8 / 5</h2>

              <p className="text-gray-600 mb-6">
                Based on 250+ Google Reviews
              </p>

              <a
                href="#"
                className="inline-block bg-[#E5C76B] text-[#5A111C] font-serif font-bold uppercase px-8 py-4 rounded-full"
              >
                View Google Reviews
              </a>
            </motion.div>
          </section>

          {/* REVIEWS */}
          <section className="pb-24 px-6">
            <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl border border-[#E5C76B]/20"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#FACC15" color="#FACC15" />
                    ))}
                  </div>

                  <p className="text-gray-600 italic mb-6">
                    "{review.review}"
                  </p>

                  <h3 className="font-semibold text-[#5A111C]">
                    {review.name}
                  </h3>
                </motion.div>
              ))}

            </div>
          </section>

          {/* CTA */}
          <section className="bg-[#5A111C] py-20 text-center">
            <button
              onClick={openForm}
              className="bg-[#E5C76B] px-10 py-4 font-bold uppercase rounded-full"
            >
              Enquire Availability
            </button>
          </section>

        </main>
      </PageTransition>
    </>
  );
}