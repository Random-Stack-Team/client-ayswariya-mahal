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

const FLOW = {
  closed: "closed",
  opening: "opening",
  open: "open",
  submitting: "submitting",
  success: "success",
  closing: "closing",
};

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
  const [flowState, setFlowState] = useState(FLOW.closed);
  const [closingContentState, setClosingContentState] = useState(FLOW.open);
  const [isMobileViewport, setIsMobileViewport] = useState(() => window.matchMedia("(max-width: 767px)").matches);
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
    if (!isFormOpen || flowState !== FLOW.closed) return undefined;

    const timer = window.setTimeout(() => setFlowState(FLOW.open), 550);
    return () => window.clearTimeout(timer);
  }, [flowState, isFormOpen]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const syncViewport = () => setIsMobileViewport(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener("change", syncViewport);

    return () => mediaQuery.removeEventListener("change", syncViewport);
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
      if (!isFormOpen && hasScrolledPastRef.current && flowState === FLOW.closed) {
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
        setIsEnvelopeVisible(true);
      } else if (!isFormOpen) {
        scheduleNext();
      }
    };

    const scheduleNext = () => {
      // Pops up randomly between 25s and 45s
      const delay = Math.floor(Math.random() * (45000 - 25000 + 1)) + 25000;
      timeoutId = setTimeout(triggerEnvelope, delay);
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", checkScroll);
      clearTimeout(timeoutId);
    };
  }, [flowState, isFormOpen, isHome]);

  useEffect(() => {
    if (!isFormOpen && flowState === FLOW.closed) return undefined;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow");
      document.body.style.removeProperty("padding-right");
    };
  }, [flowState, isFormOpen]);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    clearSubmitTimers();
    setIsEnvelopeVisible(false);
    setIsHovered(false);

    if (!isFormOpen && flowState === FLOW.closed) return;

    setClosingContentState(flowState === FLOW.closed ? FLOW.opening : flowState);
    setFlowState(FLOW.closing);
    runLater(() => {
      closeForm();
      setFlowState(FLOW.closed);
    }, 350);
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
    setFlowState(FLOW.submitting);
    runLater(() => {
      setFlowState(FLOW.success);
      runLater(() => {
        handleClose();
      }, 2500);
    }, 1000);
  };

  const isExpanded = isFormOpen || flowState !== FLOW.closed;
  const isVisible = isEnvelopeVisible || isExpanded;
  const isPeeking = isHovered && !isExpanded;

  const isFlapOpen = true;

  const springConfig = { duration: 1.10, ease: [0.16, 1, 0.3, 1] };
  const paperSpringConfig = { duration: 1.30, ease: "easeOut" };
  const contentRevealConfig = { duration: 1.00, ease: "easeOut" };
  const loadingRevealConfig = { duration: 0.50, ease: "easeOut" };
  const successRevealConfig = { duration: 0.60, ease: "easeOut" };
  const closeConfig = { duration: 0.70, ease: "easeOut" };
  const stateContainerClass = "w-full flex min-h-[300px] sm:min-h-[340px] md:min-h-[360px] flex-1 flex-col items-center justify-center px-6 text-center z-30";
  const effectiveFlowState = isFormOpen && flowState === FLOW.closed ? FLOW.opening : flowState;
  const contentState = flowState === FLOW.closing ? closingContentState : effectiveFlowState;
  const compactLabelClass = isMobileViewport
    ? "mb-0.5 block font-body text-[10px] font-medium uppercase tracking-[0.1em] text-[#4a3623] transition-colors group-focus-within:text-[#b58c2a] md:mb-2 md:text-[13px] md:tracking-[0.14em]"
    : "mb-1 block font-body text-[11px] font-medium uppercase tracking-[0.14em] text-[#4a3623] transition-colors group-focus-within:text-[#b58c2a] md:mb-2 md:text-[13px]";
  const compactInputClass = isMobileViewport
    ? "min-h-8 h-8 w-full border-0 border-b-[1px] border-[#4a3623]/30 bg-transparent px-1 py-0.5 font-body text-[13px] leading-[1.3] text-[#4a3623] transition-all placeholder:text-[#8a7d6b] focus:border-[#4a3623] focus:ring-0 md:min-h-11 md:py-2 md:text-[16px] md:leading-[1.7]"
    : "min-h-9 w-full border-0 border-b-[2px] border-[#4a3623]/30 bg-transparent px-1 py-1 font-body text-[14px] leading-[1.4] text-[#4a3623] transition-all placeholder:text-[#8a7d6b] focus:border-[#4a3623] focus:ring-0 md:min-h-11 md:py-2 md:text-[16px] md:leading-[1.7]";

  const expandedContent = (
    <AnimatePresence mode="popLayout">
      {contentState === FLOW.submitting ? (
        <motion.div
          key="loading"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.50, ease: "easeOut" } }}
          transition={loadingRevealConfig}
          className={`${stateContainerClass} space-y-5`}
        >
          <div className="w-12 h-12 border-[3px] border-[#4a3623]/20 border-t-[#4a3623] rounded-full animate-spin"></div>
          <p className="type-eyebrow text-[#4a3623]">Sealing Petition...</p>
        </motion.div>
      ) : contentState === FLOW.success ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, transition: { duration: 0.60, ease: "easeOut" } }}
          transition={successRevealConfig}
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
      ) : contentState === FLOW.opening || contentState === FLOW.open ? (
        <motion.div
            key="form"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, transition: { duration: 0.50, ease: "easeOut" } }}
            transition={{ duration: 0.90, delay: contentState === FLOW.opening ? 0.22 : 0, ease: "easeOut" }}
            className={`z-30 flex w-full flex-col justify-start md:px-6 md:pb-12 md:pt-3 ${isMobileViewport ? "px-3 pb-2 pt-0" : "px-3.5 pb-3 pt-0"}`}
          >
            <header className={`${isMobileViewport ? "mb-1" : "mb-1.5"} text-center md:mb-3`}>
              <div className={`${isMobileViewport ? "hidden" : "mb-1 flex"} justify-center text-[#4a3623] md:mb-1.5 md:flex`}><Sparkles size={18} strokeWidth={2} /></div>
              <h2 className={`font-serif font-bold leading-[1.15] tracking-[0.03em] text-[#3b2618] md:text-[31px] ${isMobileViewport ? "text-[20px]" : "text-[22px]"}`}>Send an Enquiry</h2>
              <div className={`${isMobileViewport ? "mt-1 mb-2" : "mt-2"} flex items-center justify-center gap-3 md:mt-3 md:gap-4`}>
                <div className="w-12 h-[1px] bg-[#4a3623]"></div>
                <div className="w-1.5 h-1.5 rotate-45 bg-[#d4af37] border-[1px] border-[#4a3623]"></div>
                <div className="w-12 h-[1px] bg-[#4a3623]"></div>
              </div>
              <p className="mt-3 hidden font-body text-[14px] leading-relaxed tracking-[0.02em] text-[#5a4535] md:block">We look forward to welcoming you</p>
            </header>

            <form className={`${isMobileViewport ? "space-y-1" : "space-y-1.5"} pb-0 md:space-y-4 md:pb-2`} onSubmit={handleSubmit}>
              <div className={`grid gap-x-3 md:grid-cols-2 md:gap-x-5 md:gap-y-5 ${isMobileViewport ? "grid-cols-2 gap-y-1" : "grid-cols-1 gap-y-1.5"}`}>
              <div className="relative group">
                <label className={compactLabelClass}>Honorable Name <span className="text-[#b58c2a]">*</span></label>
                <input type="text" required className={compactInputClass} placeholder="e.g. Anand & Priya" />
              </div>

              <div className="relative group">
                <label className={compactLabelClass}>Mobile Number <span className="text-[#b58c2a]">*</span></label>
                <input type="tel" pattern="[0-9]{10,14}" title="Please enter a valid phone number" required className={compactInputClass} placeholder="+91" />
              </div>

              <div className="relative group">
                <label className={compactLabelClass}>Email Address <span className="text-[#b58c2a]">*</span></label>
                <input type="email" required className={compactInputClass} placeholder="your@email.com" />
              </div>

              <div className="relative group">
                <label className={compactLabelClass}>Auspicious Date <span className="text-[#b58c2a]">*</span></label>
                <input
                  type="date"
                  name="eventDate"
                  min={getTodayDateValue()}
                  required
                  onChange={(event) => event.currentTarget.setCustomValidity("")}
                  className={`${compactInputClass} cursor-pointer`}
                />
              </div>
            </div>

            <div className="relative group">
              <label className={compactLabelClass}>How can we help? <span className="text-[#b58c2a]">*</span></label>
              <textarea rows="2" required className={`${isMobileViewport ? "h-[64px] min-h-[64px] text-[13px] leading-[1.3] py-1" : "h-16 min-h-16 text-[14px] leading-[1.4] py-1"} w-full resize-none border-0 border-b-[1px] border-[#4a3623]/30 bg-transparent px-1 font-body text-[#4a3623] transition-all placeholder:text-[#8a7d6b] focus:border-[#4a3623] focus:ring-0 md:h-full md:min-h-14 md:py-2 md:text-[16px] md:leading-[1.7]`} placeholder="Tell us about your requirements..."></textarea>
            </div>

            <div className={`${isMobileViewport ? "mb-1 mt-3" : "mb-2 mt-3"} flex justify-center md:mb-8 md:mt-7`}>
              <button 
                type="submit" 
                className={`group relative w-full max-w-[240px] rounded-full bg-[#d4af37] shadow-[0_4px_15px_rgba(212,175,55,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] ${isMobileViewport ? "h-[44px] px-8" : "min-h-11 px-10 py-2"} md:min-h-12 md:py-2.5`}
              >
                <div className="relative z-10 flex h-auto items-center justify-center">
                  <span className="type-cta text-[#4a3623] flex items-center justify-center whitespace-nowrap">
                    Seal & Submit
                  </span>
                </div>
              </button>
            </div>
          </form>
        </motion.div>
      ) : null}
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
            animate={{ opacity: flowState === FLOW.closing ? 0 : 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: flowState === FLOW.closing ? 0.35 : 0.25, ease: "easeOut" }}
            onClick={handleClose}
            className="fixed inset-0 bg-[#2A141A]/85 z-[100]"
          />
        )}
      </AnimatePresence>

      {/* ── Mobile/tablet modal (own AnimatePresence for exit animation) ── */}
      <AnimatePresence>
        {isExpanded && (
          <div
            key="expanded-envelope-form"
            className={`pointer-events-none fixed inset-0 flex items-center justify-center overflow-hidden px-4 py-4 ${isMobileViewport ? "z-[9999]" : "z-[101]"}`}
            style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
          >
            <motion.div
              initial={{ opacity: 0, y: isCompactViewport ? 14 : 16, scale: isCompactViewport ? 0.97 : 0.96 }}
              animate={flowState === FLOW.closing
                ? { opacity: 0, y: 8, scale: 0.98 }
                : { opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.98 }}
              transition={flowState === FLOW.closing
                ? closeConfig
                : { duration: isCompactViewport ? 0.45 : 0.55, ease: [0.16, 1, 0.3, 1] }}
              className={`relative z-30 pointer-events-auto flex w-full flex-col overflow-hidden rounded-xl border-2 border-[#d4af37] bg-[#fdfbf7] shadow-2xl antialiased ${
                isCompactViewport
                  ? "h-auto max-h-[calc(100dvh-32px)] max-w-[360px] md:h-[680px] md:max-h-[calc(100dvh-48px)] md:max-w-lg"
                  : "h-[580px] max-h-[calc(100dvh-48px)] max-w-[460px]"
              }`}
            >
              <div className="absolute inset-[6px] border-[2px] border-[#d4af37]/40 pointer-events-none rounded-lg" />

              <button
                aria-label="Close enquiry form"
                onClick={(e) => { e.stopPropagation(); handleClose(); }}
                className="absolute right-3 top-3 z-50 rounded-full bg-white/80 p-1.5 text-[#d4af37] shadow-sm transition-colors hover:text-[#4a3623] md:right-4 md:top-4"
              >
                <X size={18} strokeWidth={1.5} />
              </button>

              <div className="relative z-30 flex min-h-0 w-full flex-col overflow-y-auto pt-3 md:flex-1 md:pt-4 hide-scrollbar">
                {expandedContent}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ── Mobile/tablet floating button (unexpanded) ── */}
      <AnimatePresence>
        {isVisible && isMobileViewport && !isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={flowState === FLOW.closing ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={springConfig}
            className="fixed inset-x-0 bottom-0 z-[99] flex justify-center pointer-events-none pb-6"
            style={{ height: "100dvh", alignItems: "flex-end" }}
          >
            <button
              onClick={handleEnquireClick}
              aria-label="Open enquiry form"
              className="relative w-full max-w-[320px] h-[48px] px-6 pointer-events-auto bg-[#d4af37] rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] transition-all duration-300"
            >
              <span className="type-cta text-[#4a3623] flex h-auto items-center justify-center font-bold tracking-wider">
                Enquire Now
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Desktop envelope + collapsed envelope (all non-mobile-expanded states) ── */}
      <AnimatePresence>
        {isVisible && !isExpanded && !isMobileViewport && (
          <div className="fixed inset-0 pointer-events-none z-[101]" style={{ height: "100dvh" }}>
            <div
              className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none md:left-auto md:translate-x-0 md:bottom-10 md:right-10"
              style={isCompactViewport ? { bottom: "5rem" } : undefined}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.62, y: 12 }}
              animate={flowState === FLOW.closing
                ? { x: 0, y: 0, opacity: 0, scale: 0.62 }
                : { x: 0, y: 0, opacity: 1, scale: 0.65 }}
              transition={flowState === FLOW.closing ? closeConfig : springConfig}
              exit={{ opacity: 0, scale: 0.98, y: 0 }}
              style={{ transformOrigin: isCompactViewport ? "bottom center" : "center center" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative pointer-events-auto h-[180px] w-[280px] md:h-[210px] md:w-[340px]"
            >
              {/* Layer 1: Back of Envelope (Inside) */}
              <div className="absolute inset-0 bg-[#e0d0b0] border-[2px] border-[#4a3623] rounded-sm z-10 overflow-hidden shadow-[inset_0_4px_0_rgba(0,0,0,0.1)]">
              </div>

              {/* Layer 5: Top Flap */}
              <div className="absolute inset-x-0 top-0 h-[60%] z-[70] pointer-events-none drop-shadow-[0_6px_0_rgba(74,54,35,0.25)]">
                <motion.div
                  initial={false}
                  animate={{
                    rotateX: isPaperExpanded ? 180 : 0,
                    y: isPaperExpanded ? -20 : 0
                  }}
                  transition={springConfig}
                  style={{ transformOrigin: "top center", transformStyle: "preserve-3d" }}
                  className="absolute inset-0"
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
              </div>

              {/* Layer 2: The Inner Paper */}
              <motion.div
                layout
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
                      exit={{ opacity: 0, transition: { duration: 0.50, ease: "easeOut" } }}
                      className="flex flex-col items-center justify-center h-full px-2"
                    >
                      <div className="mb-3 text-[#d4af37]">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
                      </div>
                      <p className="font-sans font-medium uppercase tracking-[0.15em] text-[11px] text-[#8b6f3c] mb-2 text-center">
                        PLANNING YOUR
                      </p>
                      <h4 className="font-display font-medium text-2xl text-[#d4af37] mb-5 text-center">
                        Dream Wedding?
                      </h4>
                      <div className="w-16 h-px bg-[#d4af37]/40 mb-5"></div>
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
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
