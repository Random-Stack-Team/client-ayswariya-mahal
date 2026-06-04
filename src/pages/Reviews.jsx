import { motion } from "framer-motion";
import { Star } from "lucide-react";

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
  return (
    <main className="bg-[#F7F4EF] min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.p
            className="uppercase tracking-[0.3em] text-[#C8A97E] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Testimonials
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-serif text-[#111111]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            What Our Guests Say
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
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
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-10 shadow-sm text-center">

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
            className="inline-block bg-[#C8A97E] text-white px-8 py-4 rounded-full hover:scale-105 transition"
          >
            View Google Reviews
          </a>

        </div>
      </section>

      {/* Review Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {reviews.map((review, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-500"
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

                <p className="text-gray-600 leading-7 mb-6">
                  "{review.review}"
                </p>

                <h3 className="font-semibold text-lg">
                  {review.name}
                </h3>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-[#C8A97E] mb-4">
            Celebrate With Us
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Let's Make Your Special Day Memorable
          </h2>

          <p className="text-gray-600 leading-8 mb-10">
            Join thousands of happy families who trusted
            Ayswariya Mahal for their most cherished celebrations.
          </p>

          <button className="bg-[#C8A97E] text-white px-8 py-4 rounded-full hover:scale-105 transition">
            Contact Us
          </button>

        </div>
      </section>

    </main>
  );
}