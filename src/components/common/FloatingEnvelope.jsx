import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight, Heart, Sparkles, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEnquiry } from "../../context/useEnquiry";
import coupleIllustration from '../../assets/images/couple-illustration.webp';

const QUOTES = [
  "Your wedding deserves a setting\nas sacred as your vows.",
  "A palatial venue where traditions\nare honoured and celebrations unfold.",
  "From sacred ceremonies to grand\nreceptions — your story starts here.",
  "Begin your journey at\nAyswariya Mahal.",
];

const INITIAL_FORM_VALUES = {
  name: "",
  phone: "",
  email: "",
  eventDate: "",
  message: "",
};

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

const toDateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatSelectedDate = (dateKey) => {
  if (!dateKey) return "Choose your event date";
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(year, month - 1, day));
};

function ThemedCalendar({ selectedDate, minimumDate, viewMonth, onViewMonthChange, onSelect, position }) {
  const year = viewMonth.getFullYear();
  const month = viewMonth.getMonth();
  const firstGridDate = new Date(year, month, 1 - new Date(year, month, 1).getDay());
  const days = Array.from({ length: 42 }, (_, index) => {
    const date = new Date(firstGridDate);
    date.setDate(firstGridDate.getDate() + index);
    return date;
  });
  const minimumMonth = new Date(`${minimumDate}T00:00:00`);
  const previousMonthDisabled = year === minimumMonth.getFullYear() && month === minimumMonth.getMonth();

  const changeMonth = (offset) => {
    onViewMonthChange(new Date(year, month + offset, 1));
  };

  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 4, scale: 0.98 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
      className="fixed z-[140] rounded-xl border border-[#b58c2a]/45 bg-[#fffaf0] p-3 shadow-[0_8px_24px_rgba(61,42,29,0.18)]"
      style={{ left: position.left, top: position.top, width: position.width, willChange: "transform" }}
      role="dialog"
      aria-label="Choose event date"
    >
      <div className="mb-2 flex items-center justify-between border-b border-[#b58c2a]/25 pb-2">
        <button type="button" onClick={() => changeMonth(-1)} disabled={previousMonthDisabled} aria-label="Previous month" className="flex h-8 w-8 items-center justify-center rounded-full text-[#6f5012] transition-colors hover:bg-[#ead9ad] disabled:cursor-not-allowed disabled:opacity-30">
          <ChevronLeft size={17} />
        </button>
        <p className="font-serif text-lg font-semibold leading-6 tracking-[0.01em] text-[#3d2a1d]">
          {viewMonth.toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
        </p>
        <button type="button" onClick={() => changeMonth(1)} aria-label="Next month" className="flex h-8 w-8 items-center justify-center rounded-full text-[#6f5012] transition-colors hover:bg-[#ead9ad]">
          <ChevronRight size={17} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1" aria-hidden="true">
        {WEEKDAYS.map((weekday, index) => (
          <span key={`${weekday}-${index}`} className="flex h-6 items-center justify-center font-body text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#8a704e]">{weekday}</span>
        ))}
      </div>

      <div className="mt-1 grid grid-cols-7 gap-1">
        {days.map((date) => {
          const dateKey = toDateKey(date);
          const isCurrentMonth = date.getMonth() === month;
          const isDisabled = dateKey < minimumDate;
          const isSelected = dateKey === selectedDate;

          return (
            <button
              key={dateKey}
              type="button"
              disabled={isDisabled}
              onClick={() => onSelect(dateKey)}
              aria-label={date.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}
              aria-pressed={isSelected}
              className={`flex h-8 w-8 items-center justify-center justify-self-center rounded-full font-body text-xs font-semibold transition-colors ${
                isSelected
                  ? "bg-[#b58c2a] text-[#fffaf0] shadow-[0_3px_8px_rgba(181,140,42,0.35)]"
                  : isDisabled
                    ? "cursor-not-allowed text-[#a89d8c]/45"
                    : isCurrentMonth
                      ? "text-[#3d2a1d] hover:bg-[#ead9ad]"
                      : "text-[#8a704e]/45 hover:bg-[#f1e7cc]"
              }`}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </motion.div>,
    document.body
  );
}

const validateForm = (values) => {
  const errors = {};
  const normalizedPhone = values.phone.replace(/\s+/g, "");
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

  if (values.name.trim().length < 2) errors.name = "Please enter at least 2 characters.";
  if (!/^(?:\+91)?[6-9]\d{9}$/.test(normalizedPhone)) {
    errors.phone = "Enter a valid Indian mobile number.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.eventDate) errors.eventDate = "Please select your event date.";
  else if (values.eventDate < localToday) errors.eventDate = "Please choose today or a future date.";
  if (values.message.trim().length < 10) errors.message = "Please share at least 10 characters.";

  return errors;
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
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [formErrors, setFormErrors] = useState({});
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => new Date());
  const [calendarPosition, setCalendarPosition] = useState(null);
  const fieldRefs = useRef({});
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

  useEffect(() => {
    let timeoutId;
    let hasScrolledPast = false;
    let ticking = false;

    const checkScroll = () => {
      ticking = false;
      const threshold = isHome ? 3100 : window.innerHeight * 0.4;
      if (window.scrollY > threshold) {
        if (!hasScrolledPast) {
          hasScrolledPast = true;
          scheduleNext();
        }
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(checkScroll);
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
      const delay = Math.floor(Math.random() * (10000 - 5000 + 1)) + 5000;
      timeoutId = setTimeout(triggerEnvelope, delay);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
    };
  }, [isEnvelopeVisible, isFormOpen, submitStatus, isHome]);

  useEffect(() => {
    if (!isFormOpen && submitStatus === "idle") return undefined;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    requestAnimationFrame(() => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    });

    return () => {
      requestAnimationFrame(() => {
        document.body.style.overflow = previousBodyOverflow;
        document.documentElement.style.overflow = previousHtmlOverflow;
      });
    };
  }, [isFormOpen, submitStatus]);

  const handleClose = (e) => {
    if (e) e.stopPropagation();
    clearSubmitTimers();
    setIsEnvelopeVisible(false);
    setIsHovered(false);
    setSubmitStatus("idle");
    setFormValues(INITIAL_FORM_VALUES);
    setFormErrors({});
    setIsCalendarOpen(false);
    closeForm();
  };

  const handleEnquireClick = (e) => {
    if (e) e.stopPropagation();
    openForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formValues);

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const firstInvalidField = Object.keys(errors)[0];
      fieldRefs.current[firstInvalidField]?.focus();
      return;
    }

    clearSubmitTimers();
    setSubmitStatus("submitting");
    runLater(() => {
      setSubmitStatus("success");
      runLater(() => {
        setSubmitStatus("sealing_paper");
        runLater(() => {
          setSubmitStatus("sealing_flap");
          runLater(() => {
            setSubmitStatus("departing");
            runLater(() => {
              setIsEnvelopeVisible(false);
              setIsHovered(false);
              setFormValues(INITIAL_FORM_VALUES);
              setFormErrors({});
              setIsCalendarOpen(false);
              closeForm();
              setSubmitStatus("idle");
            }, 1200);
          }, 800);
        }, 600);
      }, 1500);
    }, 800);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setFormErrors((current) => {
      if (!current[name]) return current;
      const nextErrors = { ...current };
      delete nextErrors[name];
      return nextErrors;
    });
  };

  const handleDateSelect = (date) => {
    setFormValues((current) => ({ ...current, eventDate: date }));
    setFormErrors((current) => {
      if (!current.eventDate) return current;
      const nextErrors = { ...current };
      delete nextErrors.eventDate;
      return nextErrors;
    });
    setIsCalendarOpen(false);
    fieldRefs.current.eventDate?.focus();
  };

  const toggleCalendar = () => {
    if (!isCalendarOpen) {
      const selected = formValues.eventDate
        ? new Date(`${formValues.eventDate}T00:00:00`)
        : new Date();
      setCalendarMonth(new Date(selected.getFullYear(), selected.getMonth(), 1));
      const fieldRect = fieldRefs.current.eventDate?.getBoundingClientRect();
      if (fieldRect) {
        const width = Math.min(280, window.innerWidth - 32);
        const estimatedHeight = 280;
        const spaceBelow = window.innerHeight - fieldRect.bottom - 16;
        const top = spaceBelow >= estimatedHeight
          ? fieldRect.bottom + 8
          : Math.max(16, fieldRect.top - estimatedHeight - 8);
        const left = Math.min(
          Math.max(16, fieldRect.right - width),
          window.innerWidth - width - 16
        );
        setCalendarPosition({ left, top, width });
      }
    }
    setIsCalendarOpen((current) => !current);
  };

  const today = new Date();
  const minimumEventDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

  const isExpanded = isFormOpen || submitStatus !== "idle";
  const isVisible = isEnvelopeVisible || isExpanded;
  const isPeeking = isHovered && !isExpanded;

  const isPaperExpanded = isExpanded && submitStatus !== "sealing_paper" && submitStatus !== "sealing_flap" && submitStatus !== "departing";
  const isFlapOpen = submitStatus !== "sealing_flap" && submitStatus !== "departing";

  const springConfig = { type: "spring", stiffness: 120, damping: 20, mass: 1.2 };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          <AnimatePresence>
            {isExpanded && (
              <motion.button
                type="button"
                aria-label="Close enquiry form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="fixed inset-0 bg-[#2A141A]/85 z-[100]"
                style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }}
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
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={
                submitStatus === "departing"
                  ? { opacity: [1, 0, 0], scale: [1, 0.95, 0.9], x: [0, 0, 100], y: [0, 0, 0] }
                  : { opacity: 1, y: 0, x: 0, scale: isExpanded ? 1 : 0.65 }
              }
              transition={
                submitStatus === "departing"
                  ? { duration: 1.2, times: [0, 0.5, 1], ease: "easeInOut" }
                  : springConfig
              }
              exit={{ opacity: 0, scale: 0.9, y: 0 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative pointer-events-auto"
              style={{
                width: isCompactViewport ? 240 : 300,
                height: isCompactViewport ? 180 : 210,
                perspective: 1200,
                willChange: "transform",
                transform: "translateZ(0)",
              }}
            >
              {/* Layer 1: Back of Envelope (Inside) */}
              <div className="absolute inset-0 bg-[#e0d0b0] border-[2px] border-[#4a3623] rounded-sm z-10 overflow-hidden shadow-[inset_0_4px_0_rgba(0,0,0,0.1)]">
              </div>

              {/* Layer 5: Top Flap */}
              <motion.div
                initial={false}
                animate={{ rotateX: isFlapOpen ? 180 : 0, zIndex: isFlapOpen ? 15 : 70 }}
                transition={springConfig}
                style={{ transformOrigin: "top", willChange: "transform" }}
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
                initial={false}
                animate={{
                  y: isPaperExpanded ? "-50%" : (isPeeking ? "-40%" : "0%"),
                  boxShadow: isPaperExpanded ? "8px 8px 0px rgba(74,54,35,0.2)" : "0 0 0 transparent",
                }}
                transition={{ type: "spring", stiffness: 100, damping: 18, mass: 1.4 }}
                className="absolute bg-[#fdfbf7] flex flex-col rounded-sm overflow-hidden border-[2px] border-[#4a3623] antialiased pointer-events-auto shrink-0"
                onClick={(e) => { if (!isExpanded) { e.stopPropagation(); openForm(); } }}
                style={{
                  left: "50%",
                  bottom: isPaperExpanded ? undefined : "12px",
                  top: isPaperExpanded ? "50%" : undefined,
                  width: isPaperExpanded
                    ? (isCompactViewport ? "min(88vw, 340px)" : 440)
                    : "85%",
                  height: isPaperExpanded
                    ? (isCompactViewport ? "min(88vh, 600px)" : 580)
                    : "90%",
                  maxWidth: "95vw",
                  x: "-50%",
                  cursor: isExpanded ? "default" : "pointer",
                  zIndex: isPaperExpanded ? 60 : 20,
                  WebkitFontSmoothing: "antialiased",
                  transformOrigin: "bottom center",
                  willChange: "transform",
                }}
              >
                {/* Flat Inner Border */}
                <div className="absolute inset-[6px] border-[2px] border-[#d4af37] pointer-events-none rounded-sm"></div>

                {isExpanded && submitStatus === "idle" && (
                  <button aria-label="Close enquiry form" onClick={(e) => { e.stopPropagation(); handleClose(); }} className="absolute top-5 right-5 text-[#d4af37] hover:text-[#4a3623] z-50 transition-colors bg-white/70 backdrop-blur-md rounded-2xl p-1.5 shadow-sm">
                    <X size={16} strokeWidth={1.5} />
                  </button>
                )}

                <div className="relative w-full h-full flex flex-col z-30 pt-4 pb-4">
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
                        <h4 className="type-eyebrow text-[#4a3623] mb-1">Planning Your</h4>
                        <h3 className="font-serif text-[#b58c2a] text-[22px] md:text-2xl tracking-[0.01em] mb-3 drop-shadow-sm font-semibold">Planning Your Celebration?</h3>

                        <div className="flex items-center justify-center gap-3 mb-4 w-full px-8">
                          <div className="h-[2px] bg-[#4a3623] flex-1"></div>
                          <div className="w-2 h-2 rotate-45 bg-[#d4af37] border-[2px] border-[#4a3623]"></div>
                          <div className="h-[2px] bg-[#4a3623] flex-1"></div>
                        </div>

                        <p className="type-body text-[#4a3623] italic px-4 whitespace-pre-line">
                          "{quote}"
                        </p>
                      </motion.div>
                    ) : submitStatus === "submitting" ? (
                      <motion.div
                        key="loading"
                        className="w-full h-full flex flex-col items-center justify-center z-30 space-y-5"
                      >
                        <div className="w-12 h-12 border-[3px] border-[#4a3623]/20 border-t-[#4a3623] rounded-full animate-spin"></div>
                        <p className="font-body text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-[#3d2a1d]">Sealing Your Enquiry...</p>
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
                        <h2 className="mb-4 font-display text-2xl font-semibold leading-tight tracking-[-0.01em] text-[#3d2a1d]">Enquiry Received</h2>
                        <div className="h-[2px] w-24 bg-[#4a3623] mb-6"></div>
                        <p className="max-w-xs font-body text-base leading-7 tracking-[0.01em] text-[#4a3623] italic">
                          Your request has been carefully sealed. Our Heritage Concierge will be in touch shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        className="z-30 flex flex-1 min-h-0 w-full flex-col px-5 py-4 sm:px-6"
                      >
                        <header className="mb-3 text-center shrink-0">
                          <div className="text-[#4a3623] flex justify-center mb-2"><Sparkles size={18} strokeWidth={2} /></div>
                          <h2 className="font-display text-[1.6rem] sm:text-[1.7rem] font-semibold leading-tight tracking-[-0.01em] text-[#3d2a1d]">Send an Enquiry</h2>
                          <p className="mt-1 font-body text-xs sm:text-sm leading-relaxed tracking-[0.01em] text-[#654d39]">Share your occasion details with us.</p>
                          <div className="flex items-center justify-center gap-4 mt-2">
                            <div className="w-10 sm:w-12 h-[2px] bg-[#4a3623]"></div>
                            <div className="w-2 h-2 rotate-45 bg-[#d4af37] border-[2px] border-[#4a3623]"></div>
                            <div className="w-10 sm:w-12 h-[2px] bg-[#4a3623]"></div>
                          </div>
                        </header>

                        <form className="flex-1 flex flex-col" onSubmit={handleSubmit} noValidate>
                          <div className="flex-1 grid grid-cols-1 gap-x-5 gap-y-4 sm:gap-y-5 md:grid-cols-2 content-start">
                            <div className="relative group">
                              <label htmlFor="enquiry-name" className="mb-1.5 block font-body text-[0.7rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#4a3623] transition-colors group-focus-within:text-[#9a741d]">Your Name <span className="text-[#9a741d]">*</span></label>
                              <input ref={(node) => { fieldRefs.current.name = node; }} id="enquiry-name" name="name" value={formValues.name} onChange={handleFieldChange} type="text" required minLength="2" aria-invalid={Boolean(formErrors.name)} aria-describedby={formErrors.name ? "enquiry-name-error" : undefined} className={`min-h-10 sm:min-h-11 w-full border-0 border-b-2 bg-transparent px-1 py-2 font-body text-sm sm:text-base font-medium leading-6 tracking-[0.01em] text-[#3d2a1d] outline-none transition-colors placeholder:text-[#766858] focus:ring-0 ${formErrors.name ? "border-[#9f2f2f]" : "border-[#4a3623]/35 focus:border-[#9a741d]"}`} placeholder="e.g. Anand & Priya" />
                              {formErrors.name && <p id="enquiry-name-error" className="absolute -bottom-4 left-0 font-body text-[0.7rem] font-medium leading-4 text-[#9f2f2f]">{formErrors.name}</p>}
                            </div>

                            <div className="relative group">
                              <label htmlFor="enquiry-phone" className="mb-1.5 block font-body text-[0.7rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#4a3623] transition-colors group-focus-within:text-[#9a741d]">Mobile Number <span className="text-[#9a741d]">*</span></label>
                              <input ref={(node) => { fieldRefs.current.phone = node; }} id="enquiry-phone" name="phone" value={formValues.phone} onChange={handleFieldChange} type="tel" inputMode="tel" autoComplete="tel" required aria-invalid={Boolean(formErrors.phone)} aria-describedby={formErrors.phone ? "enquiry-phone-error" : undefined} className={`min-h-10 sm:min-h-11 w-full border-0 border-b-2 bg-transparent px-1 py-2 font-body text-sm sm:text-base font-medium leading-6 tracking-[0.01em] text-[#3d2a1d] outline-none transition-colors placeholder:text-[#766858] focus:ring-0 ${formErrors.phone ? "border-[#9f2f2f]" : "border-[#4a3623]/35 focus:border-[#9a741d]"}`} placeholder="+91 9876543210" />
                              {formErrors.phone && <p id="enquiry-phone-error" className="absolute -bottom-4 left-0 font-body text-[0.7rem] font-medium leading-4 text-[#9f2f2f]">{formErrors.phone}</p>}
                            </div>

                            <div className="relative group">
                              <label htmlFor="enquiry-email" className="mb-1.5 block font-body text-[0.7rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#4a3623] transition-colors group-focus-within:text-[#9a741d]">Email Address <span className="text-[#9a741d]">*</span></label>
                              <input ref={(node) => { fieldRefs.current.email = node; }} id="enquiry-email" name="email" value={formValues.email} onChange={handleFieldChange} type="email" autoComplete="email" required aria-invalid={Boolean(formErrors.email)} aria-describedby={formErrors.email ? "enquiry-email-error" : undefined} className={`min-h-10 sm:min-h-11 w-full border-0 border-b-2 bg-transparent px-1 py-2 font-body text-sm sm:text-base font-medium leading-6 tracking-[0.01em] text-[#3d2a1d] outline-none transition-colors placeholder:text-[#766858] focus:ring-0 ${formErrors.email ? "border-[#9f2f2f]" : "border-[#4a3623]/35 focus:border-[#9a741d]"}`} placeholder="your@email.com" />
                              {formErrors.email && <p id="enquiry-email-error" className="absolute -bottom-4 left-0 font-body text-[0.7rem] font-medium leading-4 text-[#9f2f2f]">{formErrors.email}</p>}
                            </div>

                            <div className="relative group">
                              <label htmlFor="enquiry-date" className="mb-1.5 block font-body text-[0.7rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#4a3623] transition-colors group-focus-within:text-[#9a741d]">Auspicious Date <span className="text-[#9a741d]">*</span></label>
                              <div className="relative">
                                <button ref={(node) => { fieldRefs.current.eventDate = node; }} id="enquiry-date" type="button" onClick={toggleCalendar} aria-haspopup="dialog" aria-expanded={isCalendarOpen} aria-invalid={Boolean(formErrors.eventDate)} aria-describedby={formErrors.eventDate ? "enquiry-date-error" : undefined} className={`flex min-h-10 sm:min-h-11 w-full cursor-pointer items-center border-0 border-b-2 bg-[#fbf6ea]/55 px-1 py-2 pr-11 text-left font-body text-sm sm:text-base font-medium leading-6 tracking-[0.01em] outline-none transition-colors focus:ring-0 ${formValues.eventDate ? "text-[#3d2a1d]" : "text-[#766858]"} ${formErrors.eventDate ? "border-[#9f2f2f]" : "border-[#4a3623]/35 focus:border-[#9a741d]"}`}>
                                  <span className="normal-case">{formatSelectedDate(formValues.eventDate)}</span>
                                </button>
                                <CalendarDays aria-hidden="true" size={19} strokeWidth={1.7} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9a741d] transition-colors group-focus-within:text-[#6f5012]" />
                                <AnimatePresence>
                                  {isCalendarOpen && calendarPosition && (
                                    <ThemedCalendar
                                      selectedDate={formValues.eventDate}
                                      minimumDate={minimumEventDate}
                                      viewMonth={calendarMonth}
                                      onViewMonthChange={setCalendarMonth}
                                      onSelect={handleDateSelect}
                                      position={calendarPosition}
                                    />
                                  )}
                                </AnimatePresence>
                              </div>
                              {formErrors.eventDate && <p id="enquiry-date-error" className="absolute -bottom-4 left-0 font-body text-[0.7rem] font-medium leading-4 text-[#9f2f2f]">{formErrors.eventDate}</p>}
                            </div>
                          </div>

                          <div className="relative group mt-auto pt-4 sm:pt-5">
                            <label htmlFor="enquiry-message" className="mb-1.5 block font-body text-[0.7rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#4a3623] transition-colors group-focus-within:text-[#9a741d]">How can we help? <span className="text-[#9a741d]">*</span></label>
                            <textarea ref={(node) => { fieldRefs.current.message = node; }} id="enquiry-message" name="message" value={formValues.message} onChange={handleFieldChange} rows="2" required minLength="10" aria-invalid={Boolean(formErrors.message)} aria-describedby={formErrors.message ? "enquiry-message-error" : undefined} className={`min-h-14 sm:min-h-16 w-full resize-none border-0 border-b-2 bg-transparent px-1 py-2 font-body text-sm sm:text-base font-medium leading-6 tracking-[0.01em] text-[#3d2a1d] outline-none transition-colors placeholder:text-[#766858] focus:ring-0 ${formErrors.message ? "border-[#9f2f2f]" : "border-[#4a3623]/35 focus:border-[#9a741d]"}`} placeholder="Tell us about your requirements..."></textarea>
                            {formErrors.message && <p id="enquiry-message-error" className="absolute -bottom-4 left-0 font-body text-[0.7rem] font-medium leading-4 text-[#9f2f2f]">{formErrors.message}</p>}
                          </div>

                          <div className="flex justify-center pt-2 pb-1 shrink-0">
                            <button
                              type="submit"
                              className="relative min-h-11 sm:min-h-12 px-10 py-2.5 group bg-[#d4af37] rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all duration-300 w-full max-w-[240px]"
                            >
                              <div className="relative z-10 flex items-center justify-center">
                                <span className="font-body text-[0.75rem] sm:text-[0.78rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#3d2a1d] flex items-center justify-center whitespace-nowrap">
                                  Seal & Submit
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
                    className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#d4af37] rounded-full flex items-center justify-center z-[80] pointer-events-none shadow-[2px_2px_0_rgba(74,54,35,0.2)] border-[2px] border-[#4a3623]"
                    style={{ willChange: "transform" }}
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
        </>
      )}
    </AnimatePresence>
  );
}
