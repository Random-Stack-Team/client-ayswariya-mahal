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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-16 h-px bg-gold-leaf mx-auto mb-8"></div>
          
          <h2 className="font-display text-4xl md:text-4xl text-gold-leaf mb-6">
            Begin Your Forever
          </h2>
          
          <p className="font-body text-surface-warm/80 text-lg md:text-xl mb-12 leading-relaxed">
            Let us craft the perfect backdrop for your most precious memories. 
            Reach out to our event specialists to reserve your date at Ayswariya Mahal.
          </p>

          <button
            onClick={openForm}
            className="bg-gold-leaf text-primary px-12 py-5 font-body text-sm font-semibold tracking-[0.2em] uppercase rounded-full hover:bg-white transition-colors duration-500 shadow-[0_0_30px_rgba(229,199,107,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          >
            Enquire Availability
          </button>
        </motion.div>
      </div>
    </section>
  );
}
