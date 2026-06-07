import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart, Sparkles } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEnquiry } from "../../context/useEnquiry";

const QUOTES = [
  "Every love story deserves\na beautiful beginning.",
  "Your perfect wedding starts\nwith the perfect venue.",
  "Where traditions become\ntimeless celebrations.",
  "Begin your forever in\nroyal elegance."
];

export default function FloatingEnvelope() {
  const { isFormOpen, openForm, closeForm } = useEnquiry();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isEnvelopeVisible, setIsEnvelopeVisible] = useState(false);
  const [quote, setQuote] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  // Scroll-Based Random Appearance Logic
  useEffect(() => {
    let timeoutId;
    let hasScrolledPast = false;

    const checkScroll = () => {
      const threshold = isHome ? 3100 : window.innerHeight * 0.4;
      if (window.scrollY > threshold) {
        if (!hasScrolledPast) {
          hasScrolledPast = true;
          scheduleNext();
        }
      }
    };

    const triggerEnvelope = () => {
      if (!isFormOpen && hasScrolledPast && submitStatus === "idle") {
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
        setIsEnvelopeVisible(true);
      } else if (!isFormOpen) {
        scheduleNext();
      }
    };

    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * (12000 - 6000 + 1)) + 6000;
      timeoutId = setTimeout(triggerEnvelope, delay);
    };

    window.addEventListener("scroll", checkScroll);
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      clearTimeout(timeoutId);
    };
  }, [isEnvelopeVisible, isFormOpen, submitStatus, isHome]);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    setIsEnvelopeVisible(false);
    closeForm();
    setIsHovered(false);
    if (submitStatus !== "idle") {
      setTimeout(() => setSubmitStatus("idle"), 500);
    }
  };

  const handleEnquireClick = (e) => {
    if (e) e.stopPropagation();
    openForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus("submitting");
    setTimeout(() => {
      setSubmitStatus("success");
      setTimeout(() => {
        setSubmitStatus("sealing_paper");
        setTimeout(() => {
          setSubmitStatus("sealing_flap");
          setTimeout(() => {
            setSubmitStatus("departing");
            setTimeout(() => {
              handleClose();
              setTimeout(() => setSubmitStatus("idle"), 500);
            }, 1000);
          }, 1200);
        }, 700); 
      }, 2500);
    }, 1000);
  };

  const isExpanded = isFormOpen;
  const isVisible = isEnvelopeVisible || isFormOpen || submitStatus !== "idle";
  const isPeeking = isHovered && !isExpanded;

  const isPaperExpanded = isExpanded && submitStatus !== "sealing_paper" && submitStatus !== "sealing_flap" && submitStatus !== "departing";
  const isFlapOpen = submitStatus !== "sealing_flap" && submitStatus !== "departing";

  const springConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
  const paperSpringConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };

  const plaqueClipPath = "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)";
  const plaqueInnerClipPath = "polygon(6px 0, calc(100% - 6px) 0, 100% 6px, 100% calc(100% - 6px), calc(100% - 6px) 100%, 6px 100%, 0 calc(100% - 6px), 0 6px)";

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="fixed inset-0 bg-[#2A141A]/85 backdrop-blur-md z-[100]"
              />
            )}
          </AnimatePresence>

          <div
            className={`fixed z-[101] ${
              isExpanded
                ? "inset-0 flex items-center justify-center pointer-events-none"
                : "bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-10 md:right-10 pointer-events-none"
            }`}
          >
            <motion.div
              layout
              initial={{ y: 80, opacity: 0, scale: 0.9 }}
              animate={
                submitStatus === "departing" 
                  ? { y: -80, opacity: 0, scale: 0.5 } 
                  : { y: isExpanded ? 120 : 0, opacity: 1, scale: isExpanded ? 1 : 0.65 }
              }
              transition={submitStatus === "departing" ? { duration: 1, ease: "easeInOut" } : springConfig}
              exit={{ y: 80, opacity: 0, scale: 0.9 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative pointer-events-auto w-[280px] md:w-[340px] h-[180px] md:h-[210px]"
              style={{ perspective: 1200 }}
            >
              {/* Layer 1: Back of Envelope (Inside) */}
              <div className="absolute inset-0 bg-[#e0d0b0] border-[1px] border-[#c2a153] rounded-sm z-10 shadow-[inset_0_15px_30px_rgba(0,0,0,0.15)] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.25] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay pointer-events-none"></div>
              </div>

              {/* Layer 5: Top Flap */}
              <motion.div
                initial={false}
                animate={{ rotateX: isFlapOpen ? 180 : 0, zIndex: isFlapOpen ? 15 : 70 }}
                transition={springConfig}
                style={{ transformOrigin: "top" }}
                className="absolute top-0 inset-x-0 h-[55%] pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.2)] flex justify-center"
              >
                <div className="absolute w-full h-full bg-gradient-to-b from-[#f8b500] to-[#d4af37]" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                  <div className="absolute top-0 left-[3px] right-[3px] w-[calc(100%-6px)] h-[calc(100%-3px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                    <div className="absolute inset-0 opacity-[0.35] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#d4af37] rotate-180 flex flex-col items-center">
                      <Sparkles size={36} strokeWidth={1} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 2: The Inner Paper */}
              <motion.div
                initial={false}
                animate={{
                  y: isPaperExpanded ? -40 : isPeeking ? -50 : 0,
                  height: isPaperExpanded ? 540 : "90%",
                  width: isPaperExpanded ? 460 : "85%",
                  left: "50%",
                  x: "-50%",
                  boxShadow: isPaperExpanded ? "0 40px 80px -15px rgba(0,0,0,0.7)" : "0 -10px 20px rgba(0,0,0,0.15)",
                }}
                transition={paperSpringConfig}
                className="absolute bottom-3 bg-[#fdfbf7] flex flex-col rounded-sm overflow-hidden border border-[#d4af37]/30 antialiased"
                onClick={(e) => { if (!isExpanded) { e.stopPropagation(); openForm(); } }}
                style={{ 
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  cursor: isExpanded ? "default" : "pointer",
                  zIndex: isPaperExpanded ? 60 : 20,
                  WebkitFontSmoothing: "antialiased",
                  transform: "translateZ(0)"
                }}
              >
                {/* Ornate Inner Border */}
                <div className="absolute inset-[8px] border-[1px] border-[#d4af37]/50 pointer-events-none">
                  {/* Corner Accents */}
                  <div className="absolute -top-[1px] -left-[1px] w-3 h-3 border-t-2 border-l-2 border-[#d4af37]"></div>
                  <div className="absolute -top-[1px] -right-[1px] w-3 h-3 border-t-2 border-r-2 border-[#d4af37]"></div>
                  <div className="absolute -bottom-[1px] -left-[1px] w-3 h-3 border-b-2 border-l-2 border-[#d4af37]"></div>
                  <div className="absolute -bottom-[1px] -right-[1px] w-3 h-3 border-b-2 border-r-2 border-[#d4af37]"></div>
                </div>

                {isExpanded && submitStatus === "idle" && (
                  <button onClick={(e) => { e.stopPropagation(); handleClose(); }} className="absolute top-5 right-5 text-[#d4af37] hover:text-[#4a3623] z-50 transition-colors bg-white/70 backdrop-blur-md rounded-2xl p-1.5 shadow-sm">
                    <X size={16} strokeWidth={1.5} />
                  </button>
                )}

                <div className="relative w-full h-full flex flex-col z-30 pt-4">
                  <AnimatePresence mode="wait">
                    {!isExpanded ? (
                      <motion.div
                        key="quote"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-start text-center pt-4 px-6 h-full"
                      >
                        <div className="text-[#a67c00] mb-2"><Sparkles size={16} strokeWidth={1} /></div>
                        {/* Elegant Serif Fonts for the Envelope */}
                        <h4 className="font-serif text-[#4a3623] text-xs tracking-[0.25em] uppercase mb-1 font-semibold">Planning Your</h4>
                        <h3 className="font-serif text-[#b58c2a] text-lg md:text-xl tracking-[0.05em] uppercase mb-3 drop-shadow-sm font-medium">Dream Wedding?</h3>
                        
                        <div className="flex items-center justify-center gap-3 mb-4 w-full px-8">
                          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c2a153]/50 to-transparent flex-1"></div>
                          <div className="w-1.5 h-1.5 rotate-45 bg-[#c2a153]"></div>
                          <div className="h-[1px] bg-gradient-to-l from-transparent via-[#c2a153]/50 to-transparent flex-1"></div>
                        </div>

                        <p className="font-serif text-[#4a3623] text-sm md:text-base italic leading-relaxed px-4 whitespace-pre-line font-medium">
                          "{quote}"
                        </p>
                      </motion.div>
                    ) : submitStatus === "submitting" ? (
                      <motion.div
                        key="loading"
                        className="w-full h-full flex flex-col items-center justify-center z-30 space-y-5"
                      >
                        <div className="w-12 h-12 border-[1.5px] border-[#d4af37]/20 border-t-[#D4AF37] rounded-full animate-spin"></div>
                        <p className="font-serif text-[10px] tracking-[0.3em] text-[#d4af37] uppercase font-semibold">Sealing Petition...</p>
                      </motion.div>
                    ) : submitStatus === "success" || submitStatus.startsWith("sealing") || submitStatus === "departing" ? (
                      <motion.div
                        key="success"
                        animate={{ opacity: submitStatus.startsWith("sealing") || submitStatus === "departing" ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full flex flex-col items-center justify-center text-center p-8 z-30"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E5C76B] to-[#b38b22] flex items-center justify-center shadow-[0_10px_25px_rgba(212,175,55,0.4)] mb-8 border-[3px] border-white/60">
                          <Heart size={20} className="text-white fill-white" />
                        </div>
                        <h2 className="font-serif text-lg text-[#4a3623] tracking-[0.25em] uppercase mb-4 font-bold">Petition Received</h2>
                        <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent mb-6"></div>
                        <p className="font-serif text-[#4a3623] text-sm max-w-xs leading-loose italic">
                          Your royal request has been elegantly sealed. Our Heritage Concierge will contact you shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        className="w-full h-full px-6 py-6 z-30 flex flex-col justify-center"
                      >
                        <header className="mb-6 text-center">
                          <div className="text-[#d4af37] flex justify-center mb-2"><Sparkles size={14} strokeWidth={1} /></div>
                          <h2 className="font-serif font-bold text-base md:text-lg text-[#4a3623] tracking-[0.2em] uppercase">The Royal Petition</h2>
                          <div className="flex items-center justify-center gap-4 mt-2">
                            <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#d4af37]/60"></div>
                            <div className="w-1.5 h-1.5 rotate-45 bg-[#c2a153]"></div>
                            <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#d4af37]/60"></div>
                          </div>
                        </header>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
                            <div className="relative group">
                              <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#8a6a1c] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">Honorable Name <span className="text-[#b58c2a]">*</span></label>
                              <input type="text" required className="w-full bg-transparent border-0 border-b-[1.5px] border-[#d4af37]/30 py-2 px-1 focus:ring-0 focus:border-[#b58c2a] transition-all font-sans text-sm md:text-base text-[#4a3623] placeholder:text-[#d0c5a8]" placeholder="e.g. Anand & Priya" />
                            </div>

                            <div className="relative group">
                              <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#8a6a1c] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">Mobile Number <span className="text-[#b58c2a]">*</span></label>
                              <input type="tel" pattern="[0-9]{10,14}" title="Please enter a valid phone number" required className="w-full bg-transparent border-0 border-b-[1.5px] border-[#d4af37]/30 py-2 px-1 focus:ring-0 focus:border-[#b58c2a] transition-all font-sans text-sm md:text-base text-[#4a3623] placeholder:text-[#d0c5a8]" placeholder="+91" />
                            </div>

                            <div className="relative group">
                              <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#8a6a1c] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">Email Address <span className="text-[#b58c2a]">*</span></label>
                              <input type="email" required className="w-full bg-transparent border-0 border-b-[1.5px] border-[#d4af37]/30 py-2 px-1 focus:ring-0 focus:border-[#b58c2a] transition-all font-sans text-sm md:text-base text-[#4a3623] placeholder:text-[#d0c5a8]" placeholder="your@email.com" />
                            </div>

                            <div className="relative group">
                              <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#8a6a1c] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">Auspicious Date <span className="text-[#b58c2a]">*</span></label>
                              <input type="date" required className="w-full bg-transparent border-0 border-b-[1.5px] border-[#d4af37]/30 py-2 px-1 focus:ring-0 focus:border-[#b58c2a] transition-all font-sans text-sm md:text-base text-[#4a3623] cursor-pointer" />
                            </div>
                          </div>

                          <div className="relative group">
                            <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#8a6a1c] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">How can we help? <span className="text-[#b58c2a]">*</span></label>
                            <textarea rows="2" required className="w-full bg-transparent border-0 border-b-[1.5px] border-[#d4af37]/30 py-2 px-1 focus:ring-0 focus:border-[#b58c2a] transition-all font-sans text-sm md:text-base text-[#4a3623] placeholder:text-[#d0c5a8] resize-none" placeholder="Tell us about your requirements..."></textarea>
                          </div>

                          <div className="pt-6 pb-4 flex justify-center">
                            <button 
                              type="submit" 
                              className="relative px-12 py-3.5 overflow-hidden group border border-[#a67c00] rounded-full shadow-[0_5px_15px_rgba(212,175,55,0.3)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.5)] transition-all duration-500 transform hover:-translate-y-1 w-full max-w-[280px] bg-gradient-to-r from-[#d4af37] via-[#E5C76B] to-[#d4af37]"
                            >
                              <div className="absolute inset-0 bg-gradient-to-r from-[#E5C76B] via-[#f9f1de] to-[#E5C76B] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                              <div className="relative z-10 flex items-center justify-center">
                                <span className="font-sans text-[10px] md:text-[11px] text-[#4A0A12] font-bold tracking-[0.25em] uppercase flex items-center gap-2 whitespace-nowrap drop-shadow-sm">
                                  Seal & Submit <span className="font-sans text-[8px] md:text-[9px] font-black opacity-80">&gt;</span>
                                </span>
                              </div>
                            </button>
                          </div>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>

              {/* Layer 3: Left & Right Flaps */}
              <div className="absolute inset-0 z-30 pointer-events-none rounded-sm overflow-hidden drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                <div className="absolute left-0 top-0 w-[55%] h-full bg-gradient-to-br from-[#f8b500] to-[#d4af37]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                  <div className="absolute left-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                    <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-[55%] h-full bg-gradient-to-bl from-[#f8b500] to-[#d4af37]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                  <div className="absolute right-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                    <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                  </div>
                </div>
              </div>

              {/* Layer 4: Bottom Flap & Button */}
              <div className="absolute bottom-0 inset-x-0 h-[65%] z-40 pointer-events-none drop-shadow-[0_-5px_20px_rgba(0,0,0,0.3)] flex justify-center">
                
                <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#d4af37] to-[#fceabb]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                  <div className="absolute bottom-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-3px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                    <div className="absolute inset-0 opacity-[0.5] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
                  </div>
                </div>



                <AnimatePresence>
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-8 z-50 pointer-events-auto"
                    >
                      <button 
                        onClick={handleEnquireClick}
                        className="relative px-12 py-3 overflow-hidden group shadow-[0_5px_20px_rgba(212,175,55,0.4)] transition-all duration-500 transform hover:-translate-y-1"
                        style={{ clipPath: plaqueClipPath }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-b from-[#fceabb] to-[#d4af37] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute inset-[2px] border-[0.5px] border-[#a67c00]/60 pointer-events-none" style={{ clipPath: plaqueInnerClipPath }}></div>
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <span className="font-serif text-xs text-[#4a3623] font-bold tracking-[0.2em] uppercase drop-shadow-sm flex items-center gap-2">
                            Enquire Now <span className="font-sans text-[10px] font-black">&gt;</span>
                          </span>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Layer 6: The Seal */}
              <AnimatePresence>
                {(!isExpanded || submitStatus === "sealing_flap" || submitStatus === "departing") && (
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-[#fceabb] via-[#d4af37] to-[#8c6b16] rounded-full flex items-center justify-center z-[80] pointer-events-none shadow-[0_5px_15px_rgba(0,0,0,0.3)] border-[2px] border-[#fdfbf7]"
                  >
                    <div className="w-[36px] h-[36px] rounded-full border-[1px] border-[#8c6b16]/40 flex flex-col items-center justify-center shadow-inner bg-gradient-to-tl from-[#fdfbf7]/40 to-transparent">
                      <Heart size={10} className="text-[#4a3623] fill-[#4a3623] mb-0.5 opacity-80" />
                      <div className="flex gap-0.5 opacity-80">
                        <span className="text-[#4a3623] text-[8px] font-serif font-bold">AM</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isExpanded && (
                <button
                  onClick={handleClose}
                  className="absolute -top-2 -right-2 text-[#d4af37] hover:text-[#4a3623] z-[60] bg-[#fdfbf7] border border-[#d4af37]/40 rounded-full p-1.5 transition-colors pointer-events-auto shadow-md"
                >
                  <X size={14} strokeWidth={2} />
                </button>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
