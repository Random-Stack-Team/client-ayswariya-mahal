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
    <section className="py-16 md:py-[96px] bg-[#2A141A] border-t border-[#E5C76B]/20">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-gold-leaf font-semibold tracking-[0.3em] uppercase text-sm mb-4"
          >
            A Glimpse of Magic
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-[#fdfbf7] drop-shadow-sm"
          >
            Moments Frozen in Time
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`relative overflow-hidden rounded-2xl group ${index === 1 || index === 3 ? 'md:mt-12' : ''}`}
            >
              <div className="aspect-[3/4]">
                <img
                  src={src}
                  alt={`Gallery Preview ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => navigate("/gallery")}
            className="border border-gold-leaf text-gold-leaf px-10 py-4 font-body text-sm font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-gold-leaf hover:text-primary transition-colors duration-500"
          >
            View Full Gallery
          </button>
        </div>

      </div>
    </section>
  );
}
