import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import img1 from "../../assets/images/Gallery/decor1.webp";
import img2 from "../../assets/images/Gallery/memories1.webp";
import img3 from "../../assets/images/Gallery/hall4.webp";
import img4 from "../../assets/images/Gallery/memories5.webp";

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.24 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 1.70, ease: [0.16, 1, 0.3, 1] } }
};

export default function GalleryPreview() {
  const navigate = useNavigate();

  const images = [img1, img2, img3, img4];

  return (
    <section className="relative overflow-hidden py-20 md:py-24 lg:py-[112px] bg-[linear-gradient(135deg,#3F0C15_0%,#5A111C_48%,#6A1724_100%)] border-t border-[#E5C76B]/24">
      <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_50%_0%,#E5C76B_0_1px,transparent_1px)] [background-size:34px_34px]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#E5C76B]/10 to-transparent" />

      <div className="max-w-site mx-auto px-6 relative z-10">
        
        <div className="text-center mb-10 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.20, ease: [0.16, 1, 0.3, 1] }}
            className="type-eyebrow text-[#E5C76B] mb-5"
          >
            A Glimpse of Magic
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 1.40, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[32px] md:text-[42px] lg:text-6xl font-semibold leading-[1.2] tracking-[0.01em] text-[#fff8ed] drop-shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
          >
            Moments <span className="italic text-[#E5C76B]">Frozen</span> in Time
          </motion.h2>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
            className={`luxury-image-frame luxury-image-frame--banner relative aspect-[4/5] overflow-hidden group shadow-[0_16px_36px_rgba(0,0,0,0.18)] md:aspect-[4/5] lg:aspect-[3/4] ${index === 1 || index === 3 ? 'lg:mt-12' : ''}`}
          >
              <img
                src={src}
                alt={`Gallery Preview ${index + 1}`}
                loading="lazy"
                decoding="async"
                width={index === 0 ? 1537 : index === 1 ? 1023 : index === 2 ? 1024 : 765}
                height={index === 0 ? 1023 : index === 1 ? 1537 : index === 2 ? 768 : 1020}
                className="absolute inset-0 block h-full w-full object-cover object-center brightness-[0.78] contrast-[1.08] saturate-[0.65] sepia-[35%] grayscale-[58%] group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-[1.12] group-hover:sepia-0 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 z-[2] bg-[linear-gradient(135deg,rgba(90,17,28,0.54),rgba(229,199,107,0.24)_54%,rgba(255,248,237,0.06))] mix-blend-color opacity-80 transition-opacity duration-[1100ms] group-hover:opacity-0"></div>
              <div className="absolute inset-0 z-[3] border border-[#E5C76B]/0 transition-colors duration-700 group-hover:border-[#E5C76B]/45"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.7 }}
          transition={{ duration: 1.20, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => navigate("/gallery")}
            className="min-h-12 border border-gold-leaf bg-[#fff8ed]/5 text-gold-leaf px-8 py-4 type-cta rounded-full backdrop-blur-sm hover:bg-gold-leaf hover:text-primary transition-colors duration-500 sm:px-10"
          >
            View Full Gallery
          </button>
        </motion.div>

      </div>
    </section>
  );
}
