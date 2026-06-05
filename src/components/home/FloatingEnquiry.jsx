import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquarePlus } from "lucide-react";
import { useEnquiry } from "../../context/EnquiryContext";

export default function FloatingEnquiry() {
  const { openEnquiry } = useEnquiry();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the floating box after scrolling down a bit (e.g., 300px)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed z-40 pointer-events-none w-full bottom-0 left-0 lg:bottom-12 lg:right-12 lg:left-auto lg:w-auto"
        >
          {/* Mobile Layout: Sticky Bottom Button */}
          <div className="lg:hidden w-full px-4 pb-4 pt-10 bg-gradient-to-t from-primary/90 to-transparent pointer-events-auto">
            <button
              onClick={openEnquiry}
              className="w-full flex items-center justify-center gap-3 bg-deep-maroon text-gold-leaf font-body font-semibold uppercase tracking-widest py-4 rounded-xl border border-gold-leaf/50 shadow-[0_0_15px_rgba(229,199,107,0.3)] hover:bg-gold-leaf hover:text-deep-maroon transition-all duration-500"
            >
              <MessageSquarePlus size={20} />
              Enquire Now
            </button>
          </div>

          {/* Desktop Layout: Floating Card */}
          <div className="hidden lg:flex flex-col items-end pointer-events-auto shadow-2xl relative overflow-hidden group border border-gold-leaf/30 rounded-2xl bg-surface/95 backdrop-blur-md p-6 max-w-xs hover:border-gold-leaf/60 transition-colors duration-500">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5 pointer-events-none"></div>

            <div className="relative z-10 w-full">
              <h4 className="font-cinzel text-deep-maroon text-lg font-semibold mb-1">Planning a Wedding?</h4>
              <p className="font-body text-on-surface-variant text-sm mb-5 italic">Book your venue visit today.</p>
              
              <button
                onClick={openEnquiry}
                className="w-full flex items-center justify-center gap-2 bg-deep-maroon text-gold-leaf font-body text-xs font-semibold uppercase tracking-widest py-3 rounded border border-gold-leaf/20 hover:border-gold-leaf hover:bg-gold-leaf hover:text-deep-maroon transition-all duration-500 shadow-md group-hover:shadow-[0_0_15px_rgba(229,199,107,0.4)]"
              >
                Enquire Now
                <MessageSquarePlus size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
