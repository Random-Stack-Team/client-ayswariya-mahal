import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.jpg"; // Replace with your image

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Background Image */}
      <motion.img
        src={heroImage}
        alt="Ayswariya Mahal"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 8,
          ease: "easeOut",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
        >
          <motion.p
            className="uppercase tracking-[0.3em] text-white/80 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Since 2001
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white font-serif"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 1,
            }}
          >
            Ayswariya Mahal
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
          >
            Creating Timeless Celebrations and Memorable Moments
            for Thousands of Families.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 1.1,
              duration: 1,
            }}
          >
            <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition">
              Explore Venue
            </button>

            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition">
              Book Now
            </button>
          </motion.div>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <div className="w-6 h-10 border border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>

    </section>
  );
}