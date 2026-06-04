import { motion } from "framer-motion";

// Replace these with your actual images
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const galleryImages = [
  {
    image: gallery1,
    title: "Grand Wedding Setup",
  },
  {
    image: gallery2,
    title: "Elegant Stage Decoration",
  },
  {
    image: gallery3,
    title: "Luxury Dining Area",
  },
  {
    image: gallery4,
    title: "Spacious Hall Interior",
  },
  {
    image: gallery5,
    title: "Premium Event Ambience",
  },
  {
    image: gallery6,
    title: "Memorable Celebrations",
  },
];

export default function Gallery() {
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
            Gallery
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-serif text-[#111111]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Moments That Last Forever
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Explore the beauty, elegance, and grandeur of Ayswariya Mahal
            through our collection of memorable celebrations and events.
          </motion.p>

        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {galleryImages.map((item, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition duration-500" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 p-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                  <h3 className="text-2xl font-serif">
                    {item.title}
                  </h3>
                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-[#C8A97E] mb-4">
            Your Celebration Awaits
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Create Beautiful Memories With Us
          </h2>

          <p className="text-gray-600 leading-8 mb-10">
            From weddings and receptions to engagements and family events,
            Ayswariya Mahal provides the perfect setting for your special day.
          </p>

          <button className="bg-[#C8A97E] text-white px-8 py-4 rounded-full hover:scale-105 transition">
            Contact Us
          </button>

        </div>
      </section>

    </main>
  );
}