import { motion } from "framer-motion";
import { useEnquiry } from "../../context/useEnquiry";

export default function ContactCTA() {
  const { openForm } = useEnquiry();

  return (
    <section className="relative py-24 md:py-32 bg-primary overflow-hidden border-t border-gold-leaf/20">
      {/* Decorative Gold Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-gold-leaf) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>
      
      <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.7 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-16 h-px bg-gold-leaf mx-auto mb-8 origin-center"
          />
          
          <h2 className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-gold-leaf mb-6">
            Begin Your Forever
          </h2>
          
          <p className="type-body text-surface-warm/82 mb-12">
            Let us craft the perfect backdrop for your most precious memories. 
            Reach out to our event specialists to reserve your date at Ayswariya Mahal.
          </p>

          <motion.button
            whileHover={{ y: -4, scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            onClick={openForm}
            className="bg-gold-leaf text-primary px-12 py-5 type-cta rounded-full hover:bg-white transition-colors duration-500 shadow-[0_0_30px_rgba(229,199,107,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            Enquire Availability
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
