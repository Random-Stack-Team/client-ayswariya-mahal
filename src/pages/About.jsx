import { motion } from "framer-motion";

export default function About() {
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
            About Us
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-serif text-[#111111]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A Legacy of Celebrations
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            For over two decades, Ayswariya Mahal has been the
            destination for unforgettable weddings, receptions,
            engagements, and family celebrations.
          </motion.p>

        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f29c3e8f1f"
              alt="Wedding Hall"
              className="rounded-3xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#C8A97E] uppercase tracking-[0.3em] mb-4">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Creating Memorable Moments Since 2001
            </h2>

            <p className="text-gray-600 leading-8 mb-6">
              Ayswariya Mahal was established with a vision to provide
              families with a beautiful venue where life’s most cherished
              celebrations can take place.
            </p>

            <p className="text-gray-600 leading-8">
              With spacious interiors, modern facilities, and a commitment
              to excellence, we have proudly hosted thousands of successful
              weddings and events over the years.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-serif text-[#C8A97E]">25+</h3>
              <p className="mt-2 text-gray-600">Years Experience</p>
            </div>

            <div>
              <h3 className="text-5xl font-serif text-[#C8A97E]">
                10,000+
              </h3>
              <p className="mt-2 text-gray-600">Events Hosted</p>
            </div>

            <div>
              <h3 className="text-5xl font-serif text-[#C8A97E]">
                1500
              </h3>
              <p className="mt-2 text-gray-600">Seating Capacity</p>
            </div>

            <div>
              <h3 className="text-5xl font-serif text-[#C8A97E]">
                2500
              </h3>
              <p className="mt-2 text-gray-600">Floating Guests</p>
            </div>

          </div>

        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-[#C8A97E] mb-4">
            Our Mission
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-8">
            Turning Special Moments Into Lifelong Memories
          </h2>

          <p className="text-gray-600 leading-8">
            We strive to provide exceptional hospitality, premium
            facilities, and a welcoming environment that helps every
            family celebrate their most important milestones with joy
            and confidence.
          </p>

        </div>
      </section>

    </main>
  );
}