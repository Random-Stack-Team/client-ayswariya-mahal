import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEnquiry } from "../../context/useEnquiry";
import coupleIllustration from '../../assets/images/couple-illustration.png';

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

  useEffect(() => {
    if (isFormOpen || submitStatus !== "idle") {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isFormOpen, submitStatus]);

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
                  : { y: isExpanded ? 180 : 0, opacity: 1, scale: isExpanded ? 1 : 0.65 }
              }
              transition={submitStatus === "departing" ? { duration: 1, ease: "easeInOut" } : springConfig}
              exit={{ y: 80, opacity: 0, scale: 0.9 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative pointer-events-auto w-[280px] md:w-[340px] h-[180px] md:h-[210px]"
              style={{ perspective: 1200 }}
            >
              {/* Layer 1: Back of Envelope (Inside) */}
              <div className="absolute inset-0 bg-[#e0d0b0] border-[2px] border-[#4a3623] rounded-sm z-10 overflow-hidden shadow-[inset_0_4px_0_rgba(0,0,0,0.1)]">
              </div>

              {/* Layer 5: Top Flap */}
              <motion.div
                initial={false}
                animate={{ rotateX: isFlapOpen ? 180 : 0, zIndex: isFlapOpen ? 15 : 70 }}
                transition={springConfig}
                style={{ transformOrigin: "top" }}
                className="absolute top-0 inset-x-0 h-[55%] pointer-events-none drop-shadow-[0_4px_0_rgba(74,54,35,0.2)] flex justify-center"
              >
                <div className="absolute w-full h-full bg-[#4a3623]" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                  <div className="absolute top-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-2px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#d4af37] rotate-180 flex flex-col items-center">
                      <Sparkles size={36} strokeWidth={2} />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Layer 2: The Inner Paper */}
              <motion.div
                layout
                initial={false}
                animate={{
                  y: isPaperExpanded ? -40 : isPeeking ? -50 : 0,
                  boxShadow: isPaperExpanded ? "8px 8px 0px rgba(74,54,35,0.2)" : "0 0 0 transparent",
                }}
                transition={paperSpringConfig}
                className="absolute bottom-3 bg-[#fdfbf7] flex flex-col rounded-sm overflow-hidden border-[2px] border-[#4a3623] antialiased pointer-events-auto shrink-0"
                onClick={(e) => { if (!isExpanded) { e.stopPropagation(); openForm(); } }}
                style={{ 
                  width: isPaperExpanded ? 460 : "85%",
                  height: isPaperExpanded ? 540 : "90%",
                  maxWidth: "95vw",
                  maxHeight: "85vh",
                  left: "50%",
                  x: "-50%",
                  cursor: isExpanded ? "default" : "pointer",
                  zIndex: isPaperExpanded ? 60 : 20,
                  WebkitFontSmoothing: "antialiased",
                  transformOrigin: "bottom center"
                }}
              >
                {/* Flat Inner Border */}
                <div className="absolute inset-[6px] border-[2px] border-[#d4af37] pointer-events-none rounded-sm"></div>

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
                          <div className="h-[2px] bg-[#4a3623] flex-1"></div>
                          <div className="w-2 h-2 rotate-45 bg-[#d4af37] border-[2px] border-[#4a3623]"></div>
                          <div className="h-[2px] bg-[#4a3623] flex-1"></div>
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
                        <div className="w-12 h-12 border-[3px] border-[#4a3623]/20 border-t-[#4a3623] rounded-full animate-spin"></div>
                        <p className="font-serif text-[10px] tracking-[0.3em] text-[#4a3623] uppercase font-bold">Sealing Petition...</p>
                      </motion.div>
                    ) : submitStatus === "success" || submitStatus.startsWith("sealing") || submitStatus === "departing" ? (
                      <motion.div
                        key="success"
                        animate={{ opacity: submitStatus.startsWith("sealing") || submitStatus === "departing" ? 0 : 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full flex flex-col items-center justify-center text-center p-8 z-30"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center shadow-[4px_4px_0_#4a3623] mb-8 border-[2px] border-[#4a3623]">
                          <Heart size={20} className="text-[#4a3623] fill-[#4a3623]" />
                        </div>
                        <h2 className="font-serif text-lg text-[#4a3623] tracking-[0.25em] uppercase mb-4 font-bold">Petition Received</h2>
                        <div className="h-[2px] w-24 bg-[#4a3623] mb-6"></div>
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
                          <div className="text-[#4a3623] flex justify-center mb-2"><Sparkles size={18} strokeWidth={2} /></div>
                          <h2 className="font-serif font-bold text-base md:text-lg text-[#4a3623] tracking-[0.2em] uppercase">The Royal Petition</h2>
                          <div className="flex items-center justify-center gap-4 mt-3">
                            <div className="w-12 h-[2px] bg-[#4a3623]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#d4af37] border-[2px] border-[#4a3623]"></div>
                            <div className="w-12 h-[2px] bg-[#4a3623]"></div>
                          </div>
                        </header>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-6">
                            <div className="relative group">
                              <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#4a3623] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">Honorable Name <span className="text-[#b58c2a]">*</span></label>
                              <input type="text" required className="w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-sans text-sm md:text-base text-[#4a3623] placeholder:text-[#a89d8c]" placeholder="e.g. Anand & Priya" />
                            </div>

                            <div className="relative group">
                              <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#4a3623] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">Mobile Number <span className="text-[#b58c2a]">*</span></label>
                              <input type="tel" pattern="[0-9]{10,14}" title="Please enter a valid phone number" required className="w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-sans text-sm md:text-base text-[#4a3623] placeholder:text-[#a89d8c]" placeholder="+91" />
                            </div>

                            <div className="relative group">
                              <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#4a3623] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">Email Address <span className="text-[#b58c2a]">*</span></label>
                              <input type="email" required className="w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-sans text-sm md:text-base text-[#4a3623] placeholder:text-[#a89d8c]" placeholder="your@email.com" />
                            </div>

                            <div className="relative group">
                              <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#4a3623] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">Auspicious Date <span className="text-[#b58c2a]">*</span></label>
                              <input type="date" required className="w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-sans text-sm md:text-base text-[#4a3623] cursor-pointer" />
                            </div>
                          </div>

                          <div className="relative group pt-1">
                            <label className="block font-sans text-[11px] tracking-[0.15em] uppercase text-[#4a3623] mb-1.5 font-bold transition-colors group-focus-within:text-[#b58c2a]">How can we help? <span className="text-[#b58c2a]">*</span></label>
                            <textarea rows="2" required className="w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-sans text-sm md:text-base text-[#4a3623] placeholder:text-[#a89d8c] resize-none" placeholder="Tell us about your requirements..."></textarea>
                          </div>

                          <div className="pt-6 pb-2 flex justify-center">
                            <button 
                              type="submit" 
                              className="relative px-12 py-3.5 group bg-[#d4af37] border-[2px] border-[#4a3623] rounded-sm shadow-[4px_4px_0_#4a3623] hover:shadow-[2px_2px_0_#4a3623] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 w-full max-w-[280px]"
                            >
                              <div className="relative z-10 flex items-center justify-center">
                                <span className="font-sans text-[10px] md:text-[11px] text-[#4a3623] font-bold tracking-[0.25em] uppercase flex items-center gap-2 whitespace-nowrap">
                                  Seal & Submit <span className="font-sans text-[8px] md:text-[9px] font-black">&gt;</span>
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
              <div className="absolute inset-0 z-30 pointer-events-none rounded-sm overflow-hidden drop-shadow-[0_4px_0_rgba(74,54,35,0.15)]">
                <div className="absolute left-0 top-0 w-[55%] h-full bg-[#4a3623]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                  <div className="absolute left-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-[55%] h-full bg-[#4a3623]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                  <div className="absolute right-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                  </div>
                </div>
              </div>

              {/* Layer 4: Bottom Flap & Button */}
              <div className="absolute bottom-0 inset-x-0 h-[65%] z-40 pointer-events-none drop-shadow-[0_-4px_0_rgba(74,54,35,0.15)] flex justify-center">
                
                <div className="absolute bottom-0 w-full h-full bg-[#4a3623]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                  <div className="absolute bottom-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-2px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
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
                        className="relative px-12 py-3 group shadow-[4px_4px_0_#4a3623] hover:shadow-[2px_2px_0_#4a3623] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-300 pointer-events-auto bg-[#d4af37] border-[2px] border-[#4a3623] rounded-sm"
                      >
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <span className="font-serif text-xs text-[#4a3623] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
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
                    className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center z-[80] pointer-events-none shadow-[3px_3px_0_rgba(74,54,35,0.3)] border-[2px] border-[#4a3623]"
                  >
                    <div className="w-[36px] h-[36px] rounded-full border-[2px] border-[#4a3623] flex flex-col items-center justify-center bg-[#fdfbf7] overflow-hidden p-0.5">
                      <img src={coupleIllustration} alt="Seal" className="w-full h-full object-contain" />
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
