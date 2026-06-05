import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useEnquiry } from "../../context/EnquiryContext";

const QUOTES = [
  "Every love story deserves a beautiful beginning.",
  "Your perfect wedding starts with the perfect venue.",
  "Where traditions become timeless celebrations.",
  "Celebrate forever in a venue made for memories.",
  "Every grand wedding starts with a simple enquiry.",
  "A beautiful venue for a lifetime of memories.",
  "Where two families become one celebration.",
  "Begin your forever in royal elegance."
];

export default function FloatingEnvelope() {
  const { isFormOpen, openForm, closeForm } = useEnquiry();
  const [isEnvelopeVisible, setIsEnvelopeVisible] = useState(false);
  const [quote, setQuote] = useState("");

  // Random envelope appearance logic
  useEffect(() => {
    let timeoutId;
    
    const triggerEnvelope = () => {
      // Don't pop up if it's already open as a form
      if (!isFormOpen) {
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
        setIsEnvelopeVisible(true);
      }
    };

    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000; // 5s to 12s
      timeoutId = setTimeout(triggerEnvelope, delay);
    };

    if (!isEnvelopeVisible && !isFormOpen) {
      scheduleNext();
    }

    return () => clearTimeout(timeoutId);
  }, [isEnvelopeVisible, isFormOpen]);

  const handleClose = () => {
    setIsEnvelopeVisible(false);
    closeForm();
  };

  const handleEnquireClick = () => {
    openForm();
  };

  // The envelope is either in "idle" (floating corner) or "expanded" (center screen)
  const isExpanded = isFormOpen;
  const isVisible = isEnvelopeVisible || isFormOpen;

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop for Expanded State */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-[100]"
              />
            )}
          </AnimatePresence>

          {/* Envelope Container */}
          <div
            className={`fixed z-[101] transition-all duration-700 ease-in-out ${
              isExpanded
                ? "inset-0 flex items-center justify-center p-4"
                : "bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-8 md:right-8 w-[90%] md:w-[350px]"
            }`}
          >
            {/* The Envelope Base */}
            <motion.div
              layout
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: isExpanded ? 0 : [0, -10, 0], opacity: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              transition={{
                y: {
                  duration: isExpanded ? 0.6 : 4,
                  repeat: isExpanded ? 0 : Infinity,
                  ease: "easeInOut",
                },
                layout: { duration: 0.6, ease: "anticipate" }
              }}
              className={`relative bg-deep-maroon shadow-[0_10px_40px_rgba(229,199,107,0.2)] mx-auto
                ${isExpanded ? "w-full max-w-2xl min-h-[600px] rounded-xl" : "w-full h-48 rounded-lg cursor-pointer"}
                border-2 border-gold-leaf/40 overflow-hidden
              `}
            >
              {/* Floral Pattern Background */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
              
              {/* Envelope Flap (Top triangle) - Only visible when closed or animating open */}
              <AnimatePresence>
                {!isExpanded && (
                  <motion.div
                    initial={{ rotateX: 90 }}
                    animate={{ rotateX: 0 }}
                    exit={{ rotateX: 180, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute top-0 left-0 w-full h-1/2 bg-deep-maroon border-b border-gold-leaf/30 origin-top z-30 flex items-end justify-center pb-2"
                    style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
                  >
                    <div className="w-8 h-8 rounded-full border border-gold-leaf/50 flex items-center justify-center bg-primary">
                      <Sparkles size={14} className="text-gold-leaf" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close Button for Idle State */}
              {!isExpanded && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleClose();
                  }}
                  className="absolute top-2 right-2 text-gold-leaf/50 hover:text-gold-leaf z-40 p-1"
                >
                  <X size={16} />
                </button>
              )}

              {/* Invitation Paper (Slides up when expanded) */}
              <motion.div
                layout
                className={`absolute bg-surface shadow-2xl border border-gold-leaf/20 flex flex-col items-center
                  ${isExpanded ? "inset-2 md:inset-4 rounded-lg z-40 overflow-y-auto" : "inset-x-4 bottom-2 top-10 rounded-t-lg z-20"}
                `}
              >
                {/* Close Button for Expanded State */}
                {isExpanded && (
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-primary hover:text-gold-leaf transition-colors z-50 bg-white/50 backdrop-blur rounded-full p-2"
                  >
                    <X size={20} />
                  </button>
                )}

                {/* Mandala Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] rotate-180"></div>

                <div className="w-full h-full p-6 md:p-10 flex flex-col">
                  {/* IDLE STATE CONTENT */}
                  {!isExpanded ? (
                    <div className="flex-grow flex flex-col items-center justify-center text-center">
                      <h4 className="font-cinzel text-deep-maroon text-sm font-semibold mb-2">Planning Your Dream Wedding?</h4>
                      <p className="font-body text-on-surface-variant text-xs italic mb-4 px-2">"{quote}"</p>
                      <button
                        onClick={handleEnquireClick}
                        className="bg-gradient-to-r from-[#9e7d32] via-[#E5C76B] to-[#9e7d32] text-primary px-6 py-2 rounded font-body text-xs font-bold uppercase tracking-widest shadow-[0_4px_15px_rgba(229,199,107,0.3)] hover:shadow-[0_6px_20px_rgba(229,199,107,0.5)] transform hover:-translate-y-0.5 transition-all duration-300"
                      >
                        Enquire Now
                      </button>
                    </div>
                  ) : (
                    /* EXPANDED STATE (FORM) CONTENT */
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="w-full flex-grow flex flex-col"
                    >
                      <header className="mb-8 text-center mt-4">
                        <h2 className="font-cinzel text-2xl md:text-3xl text-deep-maroon mb-2">The Royal Petition</h2>
                        <p className="font-body text-on-surface-variant text-sm italic">Share the dimensions of your dream.</p>
                        <div className="w-12 h-px bg-gold-leaf mx-auto mt-4"></div>
                      </header>

                      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Full Name */}
                          <div className="relative group">
                            <label className="block font-body text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1 group-focus-within:text-gold-leaf transition-colors">Honorable Name</label>
                            <input
                              type="text"
                              required
                              className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-2 px-0 focus:ring-0 input-focus-gold transition-all text-sm font-body"
                              placeholder="e.g. Anand & Priya"
                            />
                          </div>

                          {/* Mobile Number */}
                          <div className="relative group">
                            <label className="block font-body text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1 group-focus-within:text-gold-leaf transition-colors">Mobile Number</label>
                            <input
                              type="tel"
                              required
                              className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-2 px-0 focus:ring-0 input-focus-gold transition-all text-sm font-body"
                              placeholder="+91"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          {/* Event Type */}
                          <div className="relative group">
                            <label className="block font-body text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1 group-focus-within:text-gold-leaf transition-colors">Type of Celebration</label>
                            <select className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-2 px-0 focus:ring-0 input-focus-gold transition-all text-sm font-body appearance-none">
                              <option>Wedding Ceremony</option>
                              <option>Grand Reception</option>
                              <option>Engagement</option>
                              <option>Other Event</option>
                            </select>
                          </div>

                          {/* Guest Count */}
                          <div className="relative group">
                            <label className="block font-body text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1 group-focus-within:text-gold-leaf transition-colors">Expected Guests</label>
                            <select className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-2 px-0 focus:ring-0 input-focus-gold transition-all text-sm font-body appearance-none">
                              <option>Up to 500</option>
                              <option>500 - 1000</option>
                              <option>1000+</option>
                            </select>
                          </div>
                        </div>

                        {/* Event Date */}
                        <div className="relative group">
                          <label className="block font-body text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1 group-focus-within:text-gold-leaf transition-colors">Auspicious Date</label>
                          <input
                            type="date"
                            required
                            className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-2 px-0 focus:ring-0 input-focus-gold transition-all text-sm font-body text-primary"
                          />
                        </div>

                        {/* Message */}
                        <div className="relative group">
                          <label className="block font-body text-[10px] font-semibold tracking-widest uppercase text-on-surface-variant mb-1 group-focus-within:text-gold-leaf transition-colors">Message</label>
                          <textarea
                            rows="2"
                            className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-2 px-0 focus:ring-0 input-focus-gold transition-all text-sm font-body resize-none"
                            placeholder="Any specific requirements..."
                          />
                        </div>

                        <button
                          type="submit"
                          onClick={handleClose}
                          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#9e7d32] via-[#E5C76B] to-[#9e7d32] text-primary font-body text-xs font-bold uppercase tracking-widest py-4 mt-4 rounded-sm shadow-[0_4px_20px_rgba(229,199,107,0.3)] hover:shadow-[0_6px_25px_rgba(229,199,107,0.5)] transition-all duration-500 transform hover:-translate-y-1"
                        >
                          Submit Enquiry
                          <Sparkles size={16} />
                        </button>
                      </form>
                    </motion.div>
                  )}
                </div>
              </motion.div>

              {/* Bottom Envelope Fold styling to make it look like an envelope */}
              {!isExpanded && (
                <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-gold-leaf/20 bg-deep-maroon z-30 flex items-center justify-center pointer-events-none"
                  style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}
                >
                  <div className="w-full h-full bg-black/5"></div>
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
