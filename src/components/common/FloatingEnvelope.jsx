import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles } from "lucide-react";
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
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Random envelope appearance logic
  useEffect(() => {
    let timeoutId;
    const triggerEnvelope = () => {
      if (!isFormOpen) {
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
        setIsEnvelopeVisible(true);
      }
    };
    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * (12000 - 5000 + 1)) + 5000;
      timeoutId = setTimeout(triggerEnvelope, delay);
    };
    if (!isEnvelopeVisible && !isFormOpen) {
      scheduleNext();
    }
    return () => clearTimeout(timeoutId);
  }, [isEnvelopeVisible, isFormOpen]);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsEnvelopeVisible(false);
    closeForm();
    setIsHovered(false);
  };

  const handleEnquireClick = (e) => {
    if (e) e.stopPropagation();
    openForm();
  };

  const isExpanded = isFormOpen;
  const isVisible = isEnvelopeVisible || isFormOpen;
  const isPeeking = isHovered && !isExpanded;

  const paperExpandedHeight = windowWidth < 768 ? "500px" : "600px";
  const paperExpandedWidth = windowWidth < 768 ? "340px" : "550px";

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

          {/* Envelope Positioner */}
          <div
            className={`fixed z-[101] transition-all duration-700 ease-in-out pointer-events-none ${
              isExpanded
                ? "inset-0 flex flex-col items-center justify-end md:justify-center pb-10 md:pb-0"
                : "bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-8 md:right-8"
            }`}
          >
            <motion.div
              layout
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.9 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`relative pointer-events-auto ${
                isExpanded ? "w-[340px] md:w-[450px] h-[220px]" : "w-[340px] h-[220px]"
              }`}
              style={{ perspective: 1200 }}
            >
              {/* Layer 1: Back of Envelope */}
              <div className="absolute inset-0 bg-[#f4eee0] border-2 border-[#D4AF37] rounded-md z-10 shadow-inner overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay pointer-events-none"></div>
              </div>

              {/* Layer 2: The Inner Paper */}
              <motion.div
                initial={false}
                animate={{
                  y: isExpanded ? (windowWidth < 768 ? -220 : -320) : isPeeking ? -50 : 0,
                  height: isExpanded ? paperExpandedHeight : "90%",
                  width: isExpanded ? paperExpandedWidth : "92%",
                  left: "50%",
                  x: "-50%",
                  boxShadow: isExpanded ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)" : "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-2 bg-[#FCFBF4] border border-[#D4AF37] z-20 flex flex-col rounded shadow-xl"
                onClick={() => { if (!isExpanded) openForm(); }}
                style={{ cursor: isExpanded ? "default" : "pointer" }}
              >
                {/* Thin inner gold border */}
                <div className="absolute inset-1.5 border border-[#D4AF37]/30 pointer-events-none rounded-sm"></div>

                {isExpanded && (
                  <button onClick={handleClose} className="absolute top-4 right-4 text-[#D4AF37] hover:text-deep-maroon z-50 transition-colors">
                    <X size={20} />
                  </button>
                )}

                <div className="relative w-full h-full flex flex-col">
                  <AnimatePresence mode="wait">
                    {!isExpanded ? (
                      // IDLE / PEEK STATE PAPER CONTENT
                      <motion.div
                        key="quote"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col items-center justify-start text-center pt-6 px-6 h-full"
                      >
                        <div className="text-[#D4AF37] mb-2"><Sparkles size={16} /></div>
                        <h4 className="font-cinzel text-deep-maroon text-xs md:text-sm font-bold tracking-[0.2em] mb-2 uppercase">Planning Your<br />Dream Wedding?</h4>
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <div className="w-8 h-px bg-[#D4AF37]/50"></div>
                          <Heart size={8} className="text-[#D4AF37] fill-[#D4AF37]" />
                          <div className="w-8 h-px bg-[#D4AF37]/50"></div>
                        </div>
                        <p className="font-body text-[#7a6a4f] text-[11px] italic leading-relaxed">"{quote}"</p>
                      </motion.div>
                    ) : (
                      // EXPANDED STATE (FORM) CONTENT
                      <motion.div
                        key="form"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="w-full h-full p-6 md:p-10 overflow-y-auto"
                      >
                        <header className="mb-6 text-center">
                          <div className="text-[#D4AF37] flex justify-center mb-2"><Sparkles size={20} /></div>
                          <h2 className="font-cinzel text-xl md:text-2xl text-deep-maroon font-bold tracking-widest uppercase">The Royal Petition</h2>
                          <div className="flex items-center justify-center gap-3 mt-3">
                            <div className="w-12 h-px bg-[#D4AF37]/50"></div>
                            <Heart size={10} className="text-[#D4AF37] fill-[#D4AF37]" />
                            <div className="w-12 h-px bg-[#D4AF37]/50"></div>
                          </div>
                        </header>

                        <form className="space-y-4 md:space-y-6" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="relative group">
                              <label className="block font-body text-[9px] font-bold tracking-widest uppercase text-[#7a6a4f] mb-1 group-focus-within:text-[#D4AF37] transition-colors">Honorable Name</label>
                              <input type="text" required className="w-full bg-transparent border-0 border-b border-[#D4AF37]/40 py-2 px-0 focus:ring-0 focus:border-[#D4AF37] transition-all text-sm font-body text-primary placeholder:text-primary/30" placeholder="e.g. Anand & Priya" />
                            </div>
                            <div className="relative group">
                              <label className="block font-body text-[9px] font-bold tracking-widest uppercase text-[#7a6a4f] mb-1 group-focus-within:text-[#D4AF37] transition-colors">Mobile Number</label>
                              <input type="tel" required className="w-full bg-transparent border-0 border-b border-[#D4AF37]/40 py-2 px-0 focus:ring-0 focus:border-[#D4AF37] transition-all text-sm font-body text-primary placeholder:text-primary/30" placeholder="+91" />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                            <div className="relative group">
                              <label className="block font-body text-[9px] font-bold tracking-widest uppercase text-[#7a6a4f] mb-1 group-focus-within:text-[#D4AF37] transition-colors">Celebration Type</label>
                              <select className="w-full bg-transparent border-0 border-b border-[#D4AF37]/40 py-2 px-0 focus:ring-0 focus:border-[#D4AF37] transition-all text-sm font-body text-primary appearance-none">
                                <option>Wedding Ceremony</option>
                                <option>Grand Reception</option>
                                <option>Engagement</option>
                              </select>
                            </div>
                            <div className="relative group">
                              <label className="block font-body text-[9px] font-bold tracking-widest uppercase text-[#7a6a4f] mb-1 group-focus-within:text-[#D4AF37] transition-colors">Expected Guests</label>
                              <select className="w-full bg-transparent border-0 border-b border-[#D4AF37]/40 py-2 px-0 focus:ring-0 focus:border-[#D4AF37] transition-all text-sm font-body text-primary appearance-none">
                                <option>Up to 500</option>
                                <option>500 - 1000</option>
                                <option>1000+</option>
                              </select>
                            </div>
                          </div>

                          <div className="relative group">
                            <label className="block font-body text-[9px] font-bold tracking-widest uppercase text-[#7a6a4f] mb-1 group-focus-within:text-[#D4AF37] transition-colors">Auspicious Date</label>
                            <input type="date" required className="w-full bg-transparent border-0 border-b border-[#D4AF37]/40 py-2 px-0 focus:ring-0 focus:border-[#D4AF37] transition-all text-sm font-body text-primary" />
                          </div>

                          <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#cca53f] via-[#E5C76B] to-[#cca53f] text-deep-maroon font-cinzel text-xs font-bold tracking-widest py-3.5 mt-2 rounded shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 border border-white/40">
                            Submit Enquiry <span className="text-[10px]">▶</span>
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Layer 3: Left & Right Flaps */}
              <div className="absolute inset-0 z-30 pointer-events-none rounded-b-md overflow-hidden drop-shadow-md">
                <div className="absolute left-0 top-0 w-[55%] h-full bg-[#f4eee0] border-r-2 border-[#D4AF37] origin-left" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                </div>
                <div className="absolute right-0 top-0 w-[55%] h-full bg-[#f4eee0] border-l-2 border-[#D4AF37] origin-right" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                </div>
              </div>

              {/* Layer 4: Bottom Flap & Button */}
              <div className="absolute bottom-0 inset-x-0 h-[65%] z-40 pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.1)] flex justify-center">
                <div className="absolute bottom-0 w-full h-full bg-[#fdfbf7] border-t-2 border-[#D4AF37]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                  <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                </div>
                
                {/* Wax Seal */}
                <div className="absolute top-[-24px] w-14 h-14 bg-gradient-to-br from-[#E5C76B] via-[#D4AF37] to-[#aa851d] rounded-full border-2 border-white/60 shadow-[0_4px_10px_rgba(0,0,0,0.2)] flex items-center justify-center z-50">
                  <div className="w-10 h-10 rounded-full border border-deep-maroon/20 flex items-center justify-center">
                    <Heart size={16} className="text-deep-maroon fill-deep-maroon opacity-80" />
                  </div>
                </div>

                {/* The "ENQUIRE NOW" Button */}
                <AnimatePresence>
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute bottom-4 z-50 pointer-events-auto"
                    >
                      <button 
                        onClick={handleEnquireClick}
                        className="bg-gradient-to-r from-[#cca53f] via-[#E5C76B] to-[#cca53f] text-deep-maroon px-8 py-2.5 rounded shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] border border-[#fff]/40 font-cinzel font-bold text-xs tracking-widest flex items-center gap-2 transform transition-all duration-300"
                      >
                        ENQUIRE NOW <span className="text-[10px]">▶</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Layer 5: Top Flap */}
              <motion.div
                initial={false}
                animate={{ rotateX: isExpanded || isPeeking ? 180 : 0, zIndex: isExpanded || isPeeking ? 10 : 50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
                className="absolute top-0 inset-x-0 h-[55%] pointer-events-none drop-shadow-[0_5px_15px_rgba(0,0,0,0.15)]"
              >
                <div className="w-full h-full bg-[#fdfbf7] border-b-2 border-[#D4AF37]" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                  <div className="absolute inset-0 opacity-15 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                </div>
              </motion.div>

              {/* Close Button for Idle Envelope */}
              {!isExpanded && (
                <button
                  onClick={handleClose}
                  className="absolute top-2 right-2 text-[#D4AF37] hover:text-deep-maroon z-[60] bg-white/50 backdrop-blur rounded-full p-1 transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
