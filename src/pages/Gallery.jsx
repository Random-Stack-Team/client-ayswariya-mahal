import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import gallery1 from "../assets/images/gallery1.webp";
import gallery2 from "../assets/images/gallery2.webp";
import gallery3 from "../assets/images/gallery3.webp";
import gallery4 from "../assets/images/gallery4.webp";
import gallery5 from "../assets/images/gallery5.webp";
import gallery6 from "../assets/images/gallery6.webp";
import { Sparkles } from "lucide-react";
import SEO from "../components/common/SEO";

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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.4 } }
  };

  return (
    <>
      <SEO 
        title="Gallery & Portfolio" 
        description="View our extensive gallery of grand weddings, elegant receptions, and corporate events hosted at Ayswariya Mahal." 
        path="/gallery"
      />
      <main className="bg-[#4A0A12] min-h-screen pt-40 pb-32 relative overflow-hidden">
      
      {/* Decorative BG */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${gallery3})` }}
      ></div>
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#d4af37]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#801c2c]/40 rounded-full blur-[150px] pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[50vh] md:min-h-[60vh] mb-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${gallery3})` }}
        ></div>
        {/* Dark Cinematic Overlay fading into deep maroon bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c0d11]/80 via-[#1c0d11]/70 to-[#4A0A12]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6 text-[#d4af37]"
          >
            <Sparkles size={24} strokeWidth={1} />
          </motion.div>
          <motion.p
            className="font-serif text-[#E5C76B] font-bold tracking-[0.4em] uppercase text-sm mb-6 drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            The Collection
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-display text-[#fdfbf7] leading-tight drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            A Gallery of <br/><span className="italic text-[#E5C76B]">Grandeur</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="w-24 h-px bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent mx-auto mt-10"
          ></motion.div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="relative z-10 px-6 mb-20">
        <div className="max-w-[1280px] mx-auto flex flex-wrap justify-center gap-4 md:gap-8">
          {categories.map((category, index) => (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`font-serif text-sm tracking-[0.2em] uppercase py-2 px-4 transition-all duration-500 border-b-2 ${
                activeCategory === category
                  ? "text-[#E5C76B] border-[#E5C76B] font-bold drop-shadow-[0_0_8px_rgba(229,199,107,0.5)]"
                  : "text-[#fdfbf7]/60 border-transparent hover:text-[#d4af37] hover:border-[#d4af37]/50"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </section>

      {/* Masonry Gallery Grid */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[350px]"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item, index) => (
                <motion.div
                  layout
                  variants={itemVariants}
                  key={item.title}
                  className={`group relative overflow-hidden rounded-sm bg-[#2A141A] shadow-2xl ${index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1 md:row-span-1'} border border-[#d4af37]/20`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />

                  {/* Cinematic Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4A0A12] via-[#4A0A12]/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />
                  
                  {/* Glowing Border effect */}
                  <div className="absolute inset-5 border-[1px] border-[#E5C76B]/40 scale-105 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 pointer-events-none z-20">
                     {/* Corner Accents */}
                    <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-[#E5C76B]"></div>
                    <div className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-[#E5C76B]"></div>
                    <div className="absolute -bottom-[1px] -left-[1px] w-4 h-4 border-b-2 border-l-2 border-[#E5C76B]"></div>
                    <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-[#E5C76B]"></div>
                  </div>

                  {/* Text Content */}
                  <div className="absolute bottom-0 left-0 w-full p-10 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out flex flex-col items-center text-center z-30">
                    <p className="font-serif text-[10px] text-[#E5C76B] uppercase tracking-[0.4em] font-bold mb-3 drop-shadow-md">
                      {item.category}
                    </p>
                    <h3 className="text-3xl font-display text-[#fdfbf7] tracking-wider drop-shadow-lg">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      </main>
    </>
  );
}