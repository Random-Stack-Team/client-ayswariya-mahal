import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/Gallery/decor1.png";
import img2 from "../../assets/images/Gallery/memories1.png";
import img3 from "../../assets/images/Gallery/hall4.jpeg";
import img4 from "../../assets/images/Gallery/memories5.webp";

export default function GalleryPreview() {
  const navigate = useNavigate();

  const images = [img1, img2, img3, img4];

  return (
    <section className="relative overflow-hidden py-20 md:py-[112px] bg-[linear-gradient(135deg,#3F0C15_0%,#5A111C_48%,#6A1724_100%)] border-t border-[#E5C76B]/24">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_50%_0%,#E5C76B_0_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#E5C76B]/10 to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[#E5C76B] font-bold tracking-[0.32em] uppercase text-sm mb-5"
          >
            A Glimpse of Magic
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#fff8ed] drop-shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          >
            Moments <span className="italic text-[#E5C76B]">Frozen</span> in Time
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 38, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.22 }}
              transition={{ delay: index * 0.1, duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
              className={`relative overflow-hidden rounded-2xl group luxury-image-overlay shadow-[0_26px_70px_rgba(0,0,0,0.2)] ${index === 1 || index === 3 ? 'md:mt-12' : ''}`}
            >
              <div className="aspect-[3/4]">
                <img
                  src={src}
                  alt={`Gallery Preview ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => navigate("/gallery")}
            className="border border-gold-leaf bg-[#fff8ed]/5 text-gold-leaf px-10 py-4 font-serif text-sm font-bold tracking-[0.2em] uppercase rounded-full backdrop-blur-sm hover:bg-gold-leaf hover:text-primary transition-colors duration-500"
          >
            View Full Gallery
          </button>
        </motion.div>

      </div>
    </section>
  );
}
