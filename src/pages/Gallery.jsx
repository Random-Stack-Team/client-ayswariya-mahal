import { motion } from "framer-motion";
import { useState } from "react";
import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";

const galleryImages = [
  { image: gallery1, title: "Grand Wedding Setup", category: "Hall" },
  { image: gallery2, title: "Elegant Stage Decoration", category: "Stage" },
  { image: gallery3, title: "Luxury Dining Area", category: "Dining" },
  { image: gallery4, title: "Spacious Hall Interior", category: "Hall" },
  { image: gallery5, title: "Premium Event Ambience", category: "Events" },
  { image: gallery6, title: "Palace Entrance", category: "Entrance" },
];

const categories = ["All", "Hall", "Stage", "Entrance", "Dining", "Events"];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = galleryImages.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <main className="bg-surface min-h-screen pt-32 pb-24 relative overflow-hidden">
      
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="font-body text-gold-leaf font-semibold tracking-[0.4em] uppercase text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            The Collection
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-cinzel text-primary leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            A Gallery of <span className="italic text-antique-gold">Grandeur</span>
          </motion.h1>
          <div className="w-24 h-px bg-gold-leaf mx-auto mt-8 opacity-50"></div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative z-10 px-6 mb-16">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-body text-sm tracking-[0.2em] uppercase py-2 px-4 transition-all duration-300 border-b-2 ${
                activeCategory === category
                  ? "text-gold-leaf border-gold-leaf font-semibold"
                  : "text-on-surface-variant border-transparent hover:text-antique-gold hover:border-antique-gold/50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[300px]"
          >
            {filteredImages.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={item.title}
                className={`group relative overflow-hidden bg-white shadow-xl ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'} border-4 border-white`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />

                {/* Cinematic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="absolute inset-4 border border-gold-leaf/30 scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none"></div>

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out flex flex-col items-center text-center">
                  <p className="font-body text-[0.65rem] text-gold-leaf uppercase tracking-[0.3em] font-semibold mb-2">
                    {item.category}
                  </p>
                  <h3 className="text-2xl font-cinzel text-ivory tracking-wider">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </main>
  );
}