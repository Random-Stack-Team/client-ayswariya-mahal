import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import PageTransition from "../components/common/PageTransition";

import gallery1 from "../assets/images/Gallery/hall1.jpg";
import gallery2 from "../assets/images/Gallery/hall2.jpg";
import gallery3 from "../assets/images/Gallery/hall3.jpg";
import gallery4 from "../assets/images/Gallery/hall4.jpeg";
import gallery5 from "../assets/images/Gallery/hall5.png";
import gallery6 from "../assets/images/Gallery/decor1.png";
import gallery7 from "../assets/images/Gallery/decor2.png";
import gallery8 from "../assets/images/Gallery/decor3.png";
import gallery9 from "../assets/images/Gallery/decor4.png";
import gallery10 from "../assets/images/Gallery/decor5.png";
import gallery11 from "../assets/images/Gallery/memories1.png";
import gallery12 from "../assets/images/Gallery/memories2.webp";
import gallery13 from "../assets/images/Gallery/memories3.webp";
import gallery14 from "../assets/images/Gallery/memories4.webp";
import gallery15 from "../assets/images/Gallery/memories5.webp";

const galleryData = {
  hall: [gallery1, gallery2, gallery3, gallery4, gallery5],
  decor: [gallery6, gallery7, gallery8, gallery9, gallery10],
  memories: [gallery11, gallery12, gallery13, gallery14, gallery15],
};

const categoryMeta = {
  hall: { title: "Hall Experience", subtitle: "Architectural Grandeur" },
  decor: { title: "Decor Experience", subtitle: "Art of Celebration" },
  memories: { title: "Memory Lane", subtitle: "Moments to Cherish" },
};

export default function Gallery() {
  const railRef = useRef(null);
  const [category, setCategory] = useState("hall");
  const images = galleryData[category];
  const meta = categoryMeta[category];

  const scrollByStep = (dir) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir * Math.min(460, window.innerWidth * 0.72), behavior: "smooth" });
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#fdfbf7]">
        <section className="relative mb-10 flex min-h-[50vh] items-center justify-center overflow-hidden px-6 pb-28 pt-40 md:min-h-[60vh]">
          <img
            src={gallery3}
            alt="Ayswariya Mahal gallery"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/78 via-[#3F0C15]/62 to-[#5A111C]" />

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 flex justify-center text-[#d4af37]">
              <Sparkles size={24} />
            </div>
            <p className="mb-6 font-serif text-sm font-bold uppercase tracking-[0.4em] text-[#E5C76B]">
              The Collection
            </p>
            <h1 className="font-display text-5xl leading-tight text-[#fdfbf7] md:text-7xl lg:text-8xl">
              A Gallery of <br />
              <span className="italic text-[#E5C76B]">Grandeur</span>
            </h1>
          </motion.div>
        </section>

        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute left-1/2 top-6 z-30 flex -translate-x-1/2 gap-2 rounded-full bg-white/70 px-5 py-2 shadow-[0_18px_44px_rgba(122,27,41,0.1)] backdrop-blur-md">
            {Object.keys(galleryData).map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-1 font-serif text-xs font-bold uppercase tracking-[0.16em] transition duration-500 ${
                  category === item ? "bg-[#E5C76B] text-[#5A111C]" : "text-[#4a3623]/70 hover:text-[#6A1724]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="absolute left-1/2 top-24 z-20 -translate-x-1/2 text-center">
            <h2 className="font-display text-2xl text-[#6A1724]">{meta.title}</h2>
            <p className="font-serif text-sm text-[#4a3623]/70">{meta.subtitle}</p>
          </div>

          <button
            onClick={() => scrollByStep(-1)}
            className="absolute left-2 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#E5C76B]/70 bg-[#5A111C]/72 text-[#E5C76B] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white sm:left-6"
            aria-label="Previous gallery item"
          >
            <ChevronLeft size={24} strokeWidth={1.7} />
          </button>

          <button
            onClick={() => scrollByStep(1)}
            className="absolute right-2 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#E5C76B]/70 bg-[#5A111C]/72 text-[#E5C76B] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white sm:right-6"
            aria-label="Next gallery item"
          >
            <ChevronRight size={24} strokeWidth={1.7} />
          </button>

          <div
            ref={railRef}
            className="custom-scrollbar flex min-h-screen snap-x snap-mandatory gap-8 overflow-x-auto overflow-y-hidden scroll-smooth px-[10vw] py-40 md:gap-12 md:px-[18vw]"
          >
            {images.map((img, index) => (
              <motion.div
                key={`${category}-${img}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.85, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-image-overlay relative h-[440px] w-[min(78vw,340px)] flex-shrink-0 snap-center overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(122,27,41,0.16)]"
              >
                <img
                  src={img}
                  alt={`${meta.title} ${index + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-black/10" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
