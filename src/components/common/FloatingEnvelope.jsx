import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEnquiry } from "../../context/useEnquiry";
import coupleIllustration from '../../assets/images/couple-illustration.webp';

const QUOTES = [
  "Every love story deserves\na beautiful beginning.",
  "Your perfect wedding starts\nwith the perfect venue.",
  "Where traditions become\ntimeless celebrations.",
  "Begin your forever in\nroyal elegance.",
];

const getTodayDateValue = () => {
  const today = new Date();
  const timezoneOffset = today.getTimezoneOffset() * 60000;
  return new Date(today.getTime() - timezoneOffset).toISOString().slice(0, 10);
};

export default function FloatingEnvelope() {
  const { isFormOpen, openForm, closeForm } = useEnquiry();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isEnvelopeVisible, setIsEnvelopeVisible] = useState(false);
  const [quote, setQuote] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const timersRef = useRef([]);

  const clearSubmitTimers = () => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  };

  const runLater = (callback, delay) => {
    const timerId = window.setTimeout(callback, delay);
    timersRef.current.push(timerId);
    return timerId;
  };

  useEffect(() => {
    return () => {
      timersRef.current.forEach(window.clearTimeout);
      timersRef.current = [];
    };
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1023px), (max-height: 760px)");
    const syncViewport = () => setIsCompactViewport(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
  }, []);

  // Scroll-Based Random Appearance Logic
  const hasScrolledPastRef = useRef(false);

  useEffect(() => {
    const threshold = isHome ? 3100 : window.innerHeight * 0.4;
    let timeoutId;

    const checkScroll = () => {
      if (hasScrolledPastRef.current) return;
      if (window.scrollY > threshold) {
        hasScrolledPastRef.current = true;
        window.removeEventListener("scroll", checkScroll);
        scheduleNext();
      }
    };

    const triggerEnvelope = () => {
      if (!isFormOpen && hasScrolledPastRef.current && submitStatus === "idle") {
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

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      clearTimeout(timeoutId);
    };
  }, [isFormOpen, submitStatus, isHome]);

  useEffect(() => {
    if (!isFormOpen && submitStatus === "idle") return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.paddingRight = previousBodyPaddingRight;
    };
  }, [isFormOpen, submitStatus]);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    clearSubmitTimers();
    setIsEnvelopeVisible(false);
    setIsHovered(false);
    setSubmitStatus("idle");
    closeForm();
  };

  const handleEnquireClick = (e) => {
    if (e) e.stopPropagation();
    openForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const dateInput = form.elements.eventDate;
    const todayDateValue = getTodayDateValue();

    if (dateInput.value < todayDateValue) {
      dateInput.setCustomValidity("Please choose today or a future date for your celebration.");
      dateInput.reportValidity();
      return;
    }

    dateInput.setCustomValidity("");
    clearSubmitTimers();
    setSubmitStatus("submitting");
    runLater(() => {
      setSubmitStatus("success");
      runLater(() => {
        if (isCompactViewport) {
          runLater(() => {
            handleClose();
          }, 1200);
        } else {
          setSubmitStatus("sealing_paper");
          runLater(() => {
            setSubmitStatus("sealing_flap");
            runLater(() => {
              setSubmitStatus("departing");
              runLater(() => {
                setIsEnvelopeVisible(false);
                setIsHovered(false);
                closeForm();
                setSubmitStatus("idle");
              }, 1000);
            }, 1200);
          }, 700);
        }
      }, 2500);
    }, 1000);
  };

  const isExpanded = isFormOpen || submitStatus !== "idle";
  const isVisible = isEnvelopeVisible || isExpanded;
  const isPeeking = isHovered && !isExpanded;

  const isPaperExpanded = isExpanded && submitStatus !== "sealing_paper" && submitStatus !== "sealing_flap" && submitStatus !== "departing";
  const isFlapOpen = submitStatus !== "sealing_flap" && submitStatus !== "departing";

  const springConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
  const paperSpringConfig = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
  const stateContainerClass = "w-full flex min-h-[300px] sm:min-h-[340px] md:min-h-[360px] flex-1 flex-col items-center justify-center px-6 text-center z-30";

  const expandedContent = (
    <AnimatePresence mode="wait">
      {submitStatus === "submitting" ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={`${stateContainerClass} space-y-5`}
        >
          <div className="w-12 h-12 border-[3px] border-[#4a3623]/20 border-t-[#4a3623] rounded-full animate-spin"></div>
          <p className="type-eyebrow text-[#4a3623]">Sealing Petition...</p>
        </motion.div>
      ) : submitStatus === "success" || submitStatus.startsWith("sealing") || submitStatus === "departing" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0 }}
          animate={{ opacity: submitStatus.startsWith("sealing") || submitStatus === "departing" ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={stateContainerClass}
        >
          <div className="w-16 h-16 rounded-full bg-[#d4af37] flex items-center justify-center shadow-[4px_4px_0_#4a3623] mb-6 border-[2px] border-[#4a3623]">
            <Heart size={20} className="text-[#4a3623] fill-[#4a3623]" />
          </div>
          <h2 className="font-serif font-bold text-[28px] md:text-[30px] text-[#3b2618] tracking-[0.02em] leading-[1.15]">Petition Received</h2>
          <div className="h-[2px] w-24 bg-[#4a3623] my-5"></div>
          <p className="font-body text-[16px] leading-[1.7] text-[#4a3623] max-w-[260px]">
            Your royal request has been elegantly sealed. Our Heritage Concierge will contact you shortly.
          </p>
        </motion.div>
      ) : (
        <motion.div
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="w-full px-5 pt-2 pb-10 z-30 flex flex-col justify-start sm:px-6 sm:pt-3 md:pb-12"
        >
          <header className="mb-3 text-center">
            <div className="text-[#4a3623] flex justify-center mb-1.5"><Sparkles size={18} strokeWidth={2} /></div>
            <h2 className="font-serif font-bold text-[27px] md:text-[31px] text-[#3b2618] tracking-[0.03em] leading-[1.15]">Send an Enquiry</h2>
            <div className="flex items-center justify-center gap-4 mt-3">
              <div className="w-12 h-[2px] bg-[#4a3623]"></div>
              <div className="w-2 h-2 rotate-45 bg-[#d4af37] border-[2px] border-[#4a3623]"></div>
              <div className="w-12 h-[2px] bg-[#4a3623]"></div>
            </div>
            <p className="font-body text-[14px] text-[#5a4535] leading-relaxed tracking-[0.02em] mt-3">We look forward to welcoming you</p>
          </header>

          <form className="space-y-3 pb-2 md:space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-4 md:gap-y-5">
              <div className="relative group">
                <label className="block font-body text-[13px] tracking-[0.14em] uppercase text-[#4a3623] mb-2 font-medium transition-colors group-focus-within:text-[#b58c2a]">Honorable Name <span className="text-[#b58c2a]">*</span></label>
                <input type="text" required className="min-h-11 w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-body text-[16px] leading-[1.7] text-[#4a3623] placeholder:text-[#8a7d6b]" placeholder="e.g. Anand & Priya" />
              </div>

              <div className="relative group">
                <label className="block font-body text-[13px] tracking-[0.14em] uppercase text-[#4a3623] mb-2 font-medium transition-colors group-focus-within:text-[#b58c2a]">Mobile Number <span className="text-[#b58c2a]">*</span></label>
                <input type="tel" pattern="[0-9]{10,14}" title="Please enter a valid phone number" required className="min-h-11 w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-body text-[16px] leading-[1.7] text-[#4a3623] placeholder:text-[#8a7d6b]" placeholder="+91" />
              </div>

              <div className="relative group">
                <label className="block font-body text-[13px] tracking-[0.14em] uppercase text-[#4a3623] mb-2 font-medium transition-colors group-focus-within:text-[#b58c2a]">Email Address <span className="text-[#b58c2a]">*</span></label>
                <input type="email" required className="min-h-11 w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-body text-[16px] leading-[1.7] text-[#4a3623] placeholder:text-[#8a7d6b]" placeholder="your@email.com" />
              </div>

              <div className="relative group">
                <label className="block font-body text-[13px] tracking-[0.14em] uppercase text-[#4a3623] mb-2 font-medium transition-colors group-focus-within:text-[#b58c2a]">Auspicious Date <span className="text-[#b58c2a]">*</span></label>
                <input
                  type="date"
                  name="eventDate"
                  min={getTodayDateValue()}
                  required
                  onChange={(event) => event.currentTarget.setCustomValidity("")}
                  className="min-h-11 w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-body text-[16px] leading-[1.7] text-[#4a3623] cursor-pointer"
                />
              </div>
            </div>

            <div className="relative group">
              <label className="block font-body text-[13px] tracking-[0.14em] uppercase text-[#4a3623] mb-2 font-medium transition-colors group-focus-within:text-[#b58c2a]">How can we help? <span className="text-[#b58c2a]">*</span></label>
              <textarea rows="2" required className="min-h-14 w-full bg-transparent border-0 border-b-[2px] border-[#4a3623]/30 py-2 px-1 focus:ring-0 focus:border-[#4a3623] transition-all font-body text-[16px] leading-[1.7] text-[#4a3623] placeholder:text-[#8a7d6b] resize-none" placeholder="Tell us about your requirements..."></textarea>
            </div>

            <div className="mt-7 mb-8 flex justify-center">
              <button 
                type="submit" 
                className="relative min-h-12 px-10 py-2.5 group bg-[#d4af37] rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all duration-300 w-full max-w-[240px]"
              >
                <div className="relative z-10 flex items-center justify-center">
                  <span className="type-cta text-[#4a3623] flex items-center justify-center whitespace-nowrap">
                    Seal & Submit
                  </span>
                </div>
              </button>
            </div>
          </form>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* ── Shared backdrop (mobile & desktop) ── */}
      <AnimatePresence>
        {isExpanded && (
          <motion.button
            type="button"
            aria-label="Close enquiry form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#2A141A]/85 backdrop-blur-md z-[100]"
          />
        )}
      </AnimatePresence>

      {/* ── Mobile/tablet modal (own AnimatePresence for exit animation) ── */}
      <AnimatePresence>
        {isExpanded && isCompactViewport && (
          <motion.div
            key="compact-form"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[101] inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative pointer-events-auto w-[calc(100vw-32px)] max-w-md max-h-[calc(100dvh-32px)] bg-[#fdfbf7] rounded-xl border-2 border-[#d4af37] shadow-2xl flex flex-col overflow-hidden antialiased">
              <div className="absolute inset-[6px] border-[2px] border-[#d4af37]/40 pointer-events-none rounded-lg" />

              <button
                aria-label="Close enquiry form"
                onClick={(e) => { e.stopPropagation(); handleClose(); }}
                className="absolute top-4 right-4 text-[#d4af37] hover:text-[#4a3623] z-50 transition-colors bg-white/80 rounded-full p-1.5 shadow-sm"
              >
                <X size={18} strokeWidth={1.5} />
              </button>

              <div className="relative w-full h-full min-h-0 flex-1 overflow-y-auto overscroll-contain hide-scrollbar z-30 pt-4 flex flex-col">
                {expandedContent}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Desktop envelope + collapsed envelope (all non-mobile-expanded states) ── */}
      <AnimatePresence>
        {isVisible && (!isCompactViewport || !isExpanded) && (
          <div
            className={`fixed z-[101] ${
              isExpanded
                ? "inset-0 flex items-center justify-center pointer-events-none"
                : "bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:bottom-10 md:right-10 pointer-events-none"
            }`}
          >
            <motion.div
              initial={{ x: 300, y: 0, opacity: 0, scale: 0.9 }}
              animate={
                submitStatus === "departing" 
                  ? { x: 0, y: -80, opacity: 0, scale: 0.5 } 
                  : { x: 0, y: isExpanded && !isCompactViewport ? 180 : 0, opacity: 1, scale: isExpanded ? 1 : 0.65 }
              }
              transition={submitStatus === "departing" ? { duration: 1, ease: "easeInOut" } : springConfig}
              exit={{ x: 0, y: 0, opacity: 0, scale: 0.95 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative pointer-events-auto h-[180px] w-[280px] md:h-[210px] md:w-[340px]"
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
                  <div className="absolute top-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-2px)] bg-[#d4af37]" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                    <div className="absolute top-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-2px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[#d4af37] rotate-180 flex flex-col items-center">
                        <Sparkles size={36} strokeWidth={2} />
                      </div>
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
                  width: isPaperExpanded ? (isCompactViewport ? "92vw" : 460) : "85%",
                  height: isPaperExpanded ? (isCompactViewport ? "min(620px, 80dvh)" : 580) : "90%",
                  maxWidth: "95vw",
                  maxHeight: isCompactViewport ? "80dvh" : "85vh",
                  left: "50%",
                  x: "-50%",
                  cursor: isExpanded ? "default" : "pointer",
                  zIndex: isPaperExpanded ? 60 : 20,
                  transformOrigin: "bottom center"
                }}
              >
                {/* Flat Inner Border */}
                <div className="absolute inset-[6px] border-[2px] border-[#d4af37] pointer-events-none rounded-sm"></div>

                {isExpanded && submitStatus === "idle" && (
                  <button aria-label="Close enquiry form" onClick={(e) => { e.stopPropagation(); handleClose(); }} className="absolute top-5 right-5 text-[#d4af37] hover:text-[#4a3623] z-50 transition-colors bg-white/70 backdrop-blur-md rounded-2xl p-1.5 shadow-sm">
                    <X size={16} strokeWidth={1.5} />
                  </button>
                )}

                <div className="relative w-full h-full flex flex-col z-30 pt-4 overflow-y-auto overscroll-contain hide-scrollbar">
                  {!isExpanded ? (
                    <motion.div
                      key="quote"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col items-center justify-start text-center pt-4 px-6"
                    >
                      <div className="text-[#a67c00] mb-2"><Sparkles size={16} strokeWidth={1} /></div>
                      <h4 className="type-eyebrow text-[#4a3623] mb-1">Planning Your</h4>
                      <h3 className="font-serif text-[#b58c2a] text-[22px] md:text-2xl tracking-[0.01em] mb-3 drop-shadow-sm font-semibold">Dream Wedding?</h3>
                      
                      <div className="flex items-center justify-center gap-3 mb-4 w-full px-8">
                        <div className="h-[2px] bg-[#4a3623] flex-1"></div>
                        <div className="w-2 h-2 rotate-45 bg-[#d4af37] border-[2px] border-[#4a3623]"></div>
                        <div className="h-[2px] bg-[#4a3623] flex-1"></div>
                      </div>

                      <p className="type-body text-[#4a3623] italic px-4 whitespace-pre-line">
                        "{quote}"
                      </p>
                    </motion.div>
                  ) : (
                    expandedContent
                  )}
                </div>
              </motion.div>

              {/* Layer 3: Left & Right Flaps */}
              <div className="absolute inset-0 z-30 pointer-events-none rounded-sm overflow-hidden drop-shadow-[0_4px_0_rgba(74,54,35,0.15)]">
                <div className="absolute left-0 top-0 w-[55%] h-full bg-[#4a3623]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                  <div className="absolute left-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#d4af37]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                    <div className="absolute left-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-[55%] h-full bg-[#4a3623]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                  <div className="absolute right-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#d4af37]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                    <div className="absolute right-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                    </div>
                  </div>
                </div>
              </div>

              {/* Layer 4: Bottom Flap & Button */}
              <div className="absolute bottom-0 inset-x-0 h-[65%] z-40 pointer-events-none drop-shadow-[0_-4px_0_rgba(74,54,35,0.15)] flex justify-center">
                
                <div className="absolute bottom-0 w-full h-full bg-[#4a3623]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                  <div className="absolute bottom-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-2px)] bg-[#d4af37]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                    <div className="absolute bottom-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-2px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {!isExpanded && (
                    <motion.div
                      initial={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-4 md:bottom-5 z-50 pointer-events-auto"
                    >
                      <button 
                        onClick={handleEnquireClick}
                        aria-label="Open enquiry form"
                        className="relative min-h-12 px-10 py-2.5 group pointer-events-auto bg-[#d4af37] rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <span className="type-cta text-[#4a3623] flex items-center justify-center">
                            Enquire Now
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
                      <img src={coupleIllustration} alt="Seal" loading="lazy" decoding="async" width="150" height="150" className="w-full h-full object-contain" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {!isExpanded && (
                <button
                  onClick={handleClose}
                  aria-label="Close enquiry prompt"
                  className="absolute -top-2 -right-2 text-[#d4af37] hover:text-[#4a3623] z-[60] bg-[#fdfbf7] border border-[#d4af37]/40 rounded-full p-1.5 transition-colors pointer-events-auto shadow-md"
                >
                  <X size={14} strokeWidth={2} />
                </button>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
