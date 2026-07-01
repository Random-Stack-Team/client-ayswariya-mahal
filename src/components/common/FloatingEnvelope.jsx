import { useEffect, useRef, useState, useCallback } from "react";
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

/*
  Animation phases:
  closed           – envelope hidden
  envelopeOpening  – envelope appears, flap opens
  formEmerging     – form slides up from envelope to center
  formVisible      – form fully visible, envelope light behind
  submitting       – loading spinner
  success          – success message
  formReturning    – form shrinks back into envelope
  envelopeClosing  – envelope fades out
*/
const PHASE = {
  CLOSED: "closed",
  ENVELOPE_OPENING: "envelopeOpening",
  FORM_EMERGING: "formEmerging",
  FORM_VISIBLE: "formVisible",
  SUBMITTING: "submitting",
  SUCCESS: "success",
  FORM_RETURNING: "formReturning",
  ENVELOPE_CLOSING: "envelopeClosing",
};

const isFormShowing = (phase) =>
  phase === PHASE.FORM_EMERGING ||
  phase === PHASE.FORM_VISIBLE ||
  phase === PHASE.SUBMITTING ||
  phase === PHASE.SUCCESS ||
  phase === PHASE.FORM_RETURNING;


export default function FloatingEnvelope() {
  const { isFormOpen, openForm, closeForm } = useEnquiry();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [phase, setPhase] = useState(PHASE.CLOSED);
  const [quote, setQuote] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isCompactViewport, setIsCompactViewport] = useState(false);
  const [formValues, setFormValues] = useState(INITIAL_FORM_VALUES);
  const [formErrors, setFormErrors] = useState({});
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(() => new Date());
  const [calendarPosition, setCalendarPosition] = useState(null);
  const [envelopePromptVisible, setEnvelopePromptVisible] = useState(false);

  const fieldRefs = useRef({});
  const timersRef = useRef([]);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];
  }, []);

  const runLater = useCallback((callback, delay) => {
    const timerId = window.setTimeout(callback, delay);
    timersRef.current.push(timerId);
    return timerId;
  }, []);

  useEffect(() => () => { clearTimers(); }, [clearTimers]);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px), (max-height: 760px)");
    const sync = () => setIsCompactViewport(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Scroll-triggered envelope prompt
  useEffect(() => {
    let timeoutId;
    let hasScrolledPast = false;
    let ticking = false;

    const checkScroll = () => {
      ticking = false;
      const threshold = isHome ? 3100 : window.innerHeight * 0.4;
      if (window.scrollY > threshold && !hasScrolledPast) {
        hasScrolledPast = true;
        scheduleNext();
      }
    };

    const onScroll = () => {
      if (!ticking) { ticking = true; requestAnimationFrame(checkScroll); }
    };

    const triggerPrompt = () => {
      if (phase === PHASE.CLOSED && hasScrolledPast) {
        setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
        setEnvelopePromptVisible(true);
      } else if (phase === PHASE.CLOSED) {
        scheduleNext();
      }
    };

    const scheduleNext = () => {
      const delay = Math.floor(Math.random() * 5000) + 5000;
      timeoutId = setTimeout(triggerPrompt, delay);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    checkScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(timeoutId);
    };
  }, [phase, isHome]);

  // Body scroll lock when form is showing
  useEffect(() => {
    if (!isFormShowing(phase) && phase !== PHASE.SUBMITTING && phase !== PHASE.SUCCESS) return undefined;
    const prev = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    requestAnimationFrame(() => {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    });
    return () => {
      requestAnimationFrame(() => {
        document.body.style.overflow = prev;
        document.documentElement.style.overflow = prevHtml;
      });
    };
  }, [phase]);

  // Phase transitions when isFormOpen changes
  useEffect(() => {
    if (isFormOpen && phase === PHASE.CLOSED) {
      queueMicrotask(() => {
        setPhase(PHASE.ENVELOPE_OPENING);
        runLater(() => setPhase(PHASE.FORM_EMERGING), 600);
        runLater(() => setPhase(PHASE.FORM_VISIBLE), 1400);
      });
    }
  }, [isFormOpen, phase, runLater]);

  const handleClose = useCallback((e) => {
    if (e) e.stopPropagation();
    clearTimers();

    if (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS) {
      setPhase(PHASE.FORM_RETURNING);
      runLater(() => setPhase(PHASE.ENVELOPE_CLOSING), 800);
      runLater(() => {
        setPhase(PHASE.CLOSED);
        setFormValues(INITIAL_FORM_VALUES);
        setFormErrors({});
        setIsCalendarOpen(false);
        setIsHovered(false);
        closeForm();
      }, 1400);
    } else {
      setEnvelopePromptVisible(false);
      setPhase(PHASE.ENVELOPE_CLOSING);
      runLater(() => {
        setPhase(PHASE.CLOSED);
        setIsHovered(false);
        closeForm();
      }, 600);
    }
  }, [phase, clearTimers, runLater, closeForm]);

  const handleEnquireClick = useCallback((e) => {
    if (e) e.stopPropagation();
    setEnvelopePromptVisible(false);
    openForm();
  }, [openForm]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const errors = validateForm(formValues);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      const first = Object.keys(errors)[0];
      fieldRefs.current[first]?.focus();
      return;
    }

    clearTimers();
    setPhase(PHASE.SUBMITTING);
    runLater(() => {
      setPhase(PHASE.SUCCESS);
      runLater(() => {
        setPhase(PHASE.FORM_RETURNING);
        runLater(() => {
          setPhase(PHASE.ENVELOPE_CLOSING);
          runLater(() => {
            setPhase(PHASE.CLOSED);
            setFormValues(INITIAL_FORM_VALUES);
            setFormErrors({});
            setIsCalendarOpen(false);
            setIsHovered(false);
            closeForm();
          }, 800);
        }, 800);
      }, 1500);
    }, 1000);
  }, [formValues, clearTimers, runLater, closeForm]);

  const handleFieldChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormValues((c) => ({ ...c, [name]: value }));
    setFormErrors((c) => {
      if (!c[name]) return c;
      const next = { ...c };
      delete next[name];
      return next;
    });
  }, []);

  const handleDateSelect = useCallback((date) => {
    setFormValues((c) => ({ ...c, eventDate: date }));
    setFormErrors((c) => {
      if (!c.eventDate) return c;
      const next = { ...c };
      delete next.eventDate;
      return next;
    });
    setIsCalendarOpen(false);
    fieldRefs.current.eventDate?.focus();
  }, []);

  const toggleCalendar = useCallback(() => {
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
    setIsCalendarOpen((c) => !c);
  }, [isCalendarOpen, formValues.eventDate]);

  const today = new Date();
  const minimumEventDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);

  const anyVisible = phase !== PHASE.CLOSED || envelopePromptVisible;
  const showBackdrop = isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS;
  const isFlapOpen = phase !== PHASE.ENVELOPE_CLOSING && phase !== PHASE.CLOSED;

  const envelopeAnim = (() => {
    if (phase === PHASE.ENVELOPE_OPENING) return { opacity: 1, scale: 1, y: 0 };
    if (phase === PHASE.FORM_EMERGING) return { opacity: 1, scale: 1, y: 0 };
    if (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS) return { opacity: 1, scale: 1, y: 0 };
    if (phase === PHASE.FORM_RETURNING) return { opacity: 1, scale: 0.65, y: 80 };
    if (phase === PHASE.ENVELOPE_CLOSING) return { opacity: 0, scale: 0.65, y: 80 };
    if (envelopePromptVisible) return { opacity: 1, scale: 0.65, y: 0 };
    return { opacity: 0, scale: 0.65, y: 40 };
  })();

  const envelopeDecorOpacity = (() => {
    if (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS) return 0.25;
    if (phase === PHASE.FORM_RETURNING) return 0.6;
    return 1;
  })();

  const envelopeContainerClass = (() => {
    if (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS || phase === PHASE.FORM_RETURNING) {
      return "fixed inset-0 z-[101] flex items-center justify-center pointer-events-none";
    }
    return "fixed z-[101] pointer-events-none bottom-5 right-4 sm:bottom-6 sm:right-6 md:bottom-10 md:right-10";
  })();

  return (
    <AnimatePresence>
      {anyVisible && (
        <>
          {/* Backdrop */}
          <AnimatePresence>
            {showBackdrop && (
              <motion.button
                type="button"
                aria-label="Close enquiry form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                onClick={handleClose}
                className="fixed inset-0 bg-[#2A141A]/85 z-[100]"
                style={{ WebkitBackdropFilter: "blur(4px)", backdropFilter: "blur(4px)" }}
              />
            )}
          </AnimatePresence>

          {/* Envelope Container */}
          <div className={envelopeContainerClass}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={envelopeAnim}
              exit={{ opacity: 0, scale: 0.8, y: 40 }}
              transition={{ type: "spring", stiffness: 90, damping: 18, mass: 1.2 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative pointer-events-auto"
              style={{
                width: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS || phase === PHASE.FORM_RETURNING)
                  ? (isCompactViewport ? "min(92vw, 340px)" : 440)
                  : (isCompactViewport ? 200 : 280),
                height: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS || phase === PHASE.FORM_RETURNING)
                  ? (isCompactViewport ? "min(85vh, 580px)" : 580)
                  : (isCompactViewport ? 150 : 200),
                perspective: 1200,
                willChange: "transform",
              }}
            >
              {/* Envelope back */}
              <div
                className="absolute inset-0 bg-[#e0d0b0] border-[2px] border-[#4a3623] rounded-sm z-10 overflow-hidden shadow-[inset_0_4px_0_rgba(0,0,0,0.1)]"
                style={{ opacity: envelopeDecorOpacity, transition: "opacity 0.6s ease" }}
              />

              {/* Top Flap */}
              <motion.div
                initial={false}
                animate={{ rotateX: isFlapOpen ? 180 : 0, zIndex: isFlapOpen ? 15 : 70 }}
                transition={{ type: "spring", stiffness: 100, damping: 16, mass: 1 }}
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

              {/* Inner Paper / Form */}
              <motion.div
                initial={false}
                animate={{
                  y: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS)
                    ? "-50%"
                    : (isHovered && !isFormShowing(phase) ? "-35%" : "0%"),
                  boxShadow: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS)
                    ? "8px 8px 0px rgba(74,54,35,0.2)"
                    : "0 0 0 transparent",
                }}
                transition={{ type: "spring", stiffness: 100, damping: 18, mass: 1.4 }}
                className="absolute bg-[#fdfbf7] flex flex-col rounded-sm overflow-hidden border-[2px] border-[#4a3623] antialiased pointer-events-auto shrink-0"
                onClick={(e) => {
                  if (!isFormShowing(phase) && phase !== PHASE.SUBMITTING && phase !== PHASE.SUCCESS) {
                    e.stopPropagation();
                    openForm();
                  }
                }}
                style={{
                  left: "50%",
                  bottom: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS) ? undefined : "12px",
                  top: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS) ? "50%" : undefined,
                  width: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS)
                    ? (isCompactViewport ? "min(92vw, 340px)" : 440)
                    : "85%",
                  height: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS)
                    ? (isCompactViewport ? "min(85vh, 580px)" : 580)
                    : "88%",
                  maxWidth: "95vw",
                  x: "-50%",
                  cursor: isFormShowing(phase) ? "default" : "pointer",
                  zIndex: (isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS) ? 60 : 20,
                  WebkitFontSmoothing: "antialiased",
                  transformOrigin: "bottom center",
                  willChange: "transform",
                }}
              >
                {/* Gold inner border */}
                <div className="absolute inset-[6px] border-[2px] border-[#d4af37] pointer-events-none rounded-sm" />

                {/* Close button */}
                {(isFormShowing(phase) || phase === PHASE.SUBMITTING || phase === PHASE.SUCCESS) && (
                  <button aria-label="Close enquiry form" onClick={(e) => { e.stopPropagation(); handleClose(); }} className="absolute top-3 right-3 sm:top-5 sm:right-5 text-[#d4af37] hover:text-[#4a3623] z-50 transition-colors bg-white/70 backdrop-blur-md rounded-2xl p-1 sm:p-1.5 shadow-sm">
                    <X size={14} strokeWidth={1.5} className="sm:hidden" />
                    <X size={16} strokeWidth={1.5} className="hidden sm:block" />
                  </button>
                )}

                <div className="relative w-full h-full flex flex-col z-30 pt-3 sm:pt-4 pb-3 sm:pb-4">
                  <AnimatePresence mode="wait">
                    {!isFormShowing(phase) && phase !== PHASE.SUBMITTING && phase !== PHASE.SUCCESS ? (
                      <motion.div
                        key="quote"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col items-center justify-start text-center pt-3 sm:pt-4 px-4 sm:px-6 h-full"
                      >
                        <div className="text-[#a67c00] mb-1.5 sm:mb-2"><Sparkles size={14} strokeWidth={1} className="sm:hidden" /><Sparkles size={16} strokeWidth={1} className="hidden sm:block" /></div>
                        <h4 className="type-eyebrow text-[#4a3623] mb-0.5 sm:mb-1 text-[9px] sm:text-[10px]">Planning Your</h4>
                        <h3 className="font-serif text-[#b58c2a] text-[16px] sm:text-[18px] md:text-2xl tracking-[0.01em] mb-2 sm:mb-3 drop-shadow-sm font-semibold">Planning Your Celebration?</h3>

                        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4 w-full px-4 sm:px-8">
                          <div className="h-[2px] bg-[#4a3623] flex-1"></div>
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#d4af37] border-[2px] border-[#4a3623]"></div>
                          <div className="h-[2px] bg-[#4a3623] flex-1"></div>
                        </div>

                        <p className="type-body text-[#4a3623] italic px-2 sm:px-4 whitespace-pre-line text-[12px] sm:text-sm">
                          &ldquo;{quote}&rdquo;
                        </p>
                      </motion.div>
                    ) : phase === PHASE.SUBMITTING ? (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full h-full flex flex-col items-center justify-center z-30 space-y-4 sm:space-y-5"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 border-[3px] border-[#4a3623]/20 border-t-[#4a3623] rounded-full animate-spin"></div>
                        <p className="font-body text-[10px] sm:text-xs font-semibold uppercase leading-5 tracking-[0.14em] text-[#3d2a1d]">Sealing Your Enquiry...</p>
                      </motion.div>
                    ) : phase === PHASE.SUCCESS ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full flex flex-col items-center justify-center text-center p-6 sm:p-8 z-30"
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#d4af37] flex items-center justify-center shadow-[4px_4px_0_#4a3623] mb-5 sm:mb-6 md:mb-8 border-[2px] border-[#4a3623]">
                          <Heart size={16} className="text-[#4a3623] fill-[#4a3623] sm:hidden" />
                          <Heart size={18} className="hidden sm:block text-[#4a3623] fill-[#4a3623]" />
                        </div>
                        <h2 className="mb-3 sm:mb-4 font-display text-xl sm:text-2xl font-semibold leading-tight tracking-[-0.01em] text-[#3d2a1d]">Enquiry Received</h2>
                        <div className="h-[2px] w-16 sm:w-20 md:w-24 bg-[#4a3623] mb-4 sm:mb-5 md:mb-6"></div>
                        <p className="max-w-xs font-body text-sm sm:text-base leading-6 sm:leading-7 tracking-[0.01em] text-[#4a3623] italic">
                          Your request has been carefully sealed. Our Heritage Concierge will be in touch shortly.
                        </p>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="form"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="z-30 flex flex-1 min-h-0 w-full flex-col px-4 py-3 sm:px-5 sm:py-4 md:px-6"
                      >
                        <header className="mb-2 sm:mb-3 text-center shrink-0">
                          <div className="text-[#4a3623] flex justify-center mb-1.5 sm:mb-2"><Sparkles size={16} strokeWidth={2} className="sm:hidden" /><Sparkles size={18} strokeWidth={2} className="hidden sm:block" /></div>
                          <h2 className="font-display text-[1.3rem] sm:text-[1.5rem] md:text-[1.7rem] font-semibold leading-tight tracking-[-0.01em] text-[#3d2a1d]">Send an Enquiry</h2>
                          <p className="mt-0.5 sm:mt-1 font-body text-[10px] sm:text-xs md:text-sm leading-relaxed tracking-[0.01em] text-[#654d39]">Share your occasion details with us.</p>
                          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-1.5 sm:mt-2">
                            <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-[#4a3623]"></div>
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rotate-45 bg-[#d4af37] border-[2px] border-[#4a3623]"></div>
                            <div className="w-8 sm:w-10 md:w-12 h-[2px] bg-[#4a3623]"></div>
                          </div>
                        </header>

                        <form className="flex-1 flex flex-col" onSubmit={handleSubmit} noValidate>
                          <div className="flex-1 grid grid-cols-1 gap-x-4 gap-y-3 sm:gap-x-5 sm:gap-y-4 md:gap-y-5 md:grid-cols-2 content-start">
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

                          <div className="flex justify-center pt-2 sm:pt-3 pb-1 shrink-0">
                            <button
                              type="submit"
                              className="relative min-h-10 sm:min-h-11 md:min-h-12 px-8 sm:px-10 py-2 sm:py-2.5 group bg-[#d4af37] rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all duration-300 w-full max-w-[200px] sm:max-w-[240px]"
                            >
                              <div className="relative z-10 flex items-center justify-center">
                                <span className="font-body text-[0.7rem] sm:text-[0.75rem] md:text-[0.78rem] font-semibold uppercase leading-5 tracking-[0.12em] text-[#3d2a1d] flex items-center justify-center whitespace-nowrap">
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

              {/* Left & Right Flaps */}
              <div
                className="absolute inset-0 z-30 pointer-events-none rounded-sm overflow-hidden drop-shadow-[0_4px_0_rgba(74,54,35,0.15)]"
                style={{ opacity: envelopeDecorOpacity, transition: "opacity 0.6s ease" }}
              >
                <div className="absolute left-0 top-0 w-[55%] h-full bg-[#4a3623]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                  <div className="absolute left-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#d4af37]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}>
                    <div className="absolute left-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }} />
                  </div>
                </div>
                <div className="absolute right-0 top-0 w-[55%] h-full bg-[#4a3623]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                  <div className="absolute right-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#d4af37]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}>
                    <div className="absolute right-0 top-[2px] bottom-[2px] w-[calc(100%-3px)] h-[calc(100%-4px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }} />
                  </div>
                </div>
              </div>

              {/* Bottom Flap & Enquire Now Button */}
              <div
                className="absolute bottom-0 inset-x-0 h-[65%] z-40 pointer-events-none drop-shadow-[0_-4px_0_rgba(74,54,35,0.15)] flex justify-center"
                style={{ opacity: envelopeDecorOpacity, transition: "opacity 0.6s ease" }}
              >
                <div className="absolute bottom-0 w-full h-full bg-[#4a3623]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                  <div className="absolute bottom-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-2px)] bg-[#d4af37]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }}>
                    <div className="absolute bottom-0 left-[2px] right-[2px] w-[calc(100%-4px)] h-[calc(100%-2px)] bg-[#fdfbf7]" style={{ clipPath: "polygon(0 100%, 50% 0, 100% 100%)" }} />
                  </div>
                </div>

                <AnimatePresence>
                  {!isFormShowing(phase) && phase !== PHASE.SUBMITTING && phase !== PHASE.SUCCESS && (
                    <motion.div
                      initial={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute bottom-1 sm:bottom-2 md:bottom-3 z-50 pointer-events-auto left-1/2 -translate-x-1/2"
                    >
                      <button
                        onClick={handleEnquireClick}
                        aria-label="Open enquiry form"
                        className="relative min-h-10 sm:min-h-12 px-6 sm:px-10 py-2 sm:py-2.5 group pointer-events-auto bg-[#d4af37] rounded-full shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <div className="relative z-10 flex flex-col items-center justify-center">
                          <span className="type-cta text-[#4a3623] flex items-center justify-center text-[11px] sm:text-xs">
                            Enquire Now
                          </span>
                        </div>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Seal */}
              <AnimatePresence>
                {!isFormShowing(phase) && phase !== PHASE.SUBMITTING && phase !== PHASE.SUCCESS && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#d4af37] rounded-full flex items-center justify-center z-[80] pointer-events-none shadow-[2px_2px_0_rgba(74,54,35,0.2)] border-[2px] border-[#4a3623]"
                    style={{ willChange: "transform" }}
                  >
                    <div className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] md:w-[36px] md:h-[36px] rounded-full border-[2px] border-[#4a3623] flex flex-col items-center justify-center bg-[#fdfbf7] overflow-hidden p-0.5">
                      <img src={coupleIllustration} alt="Seal" loading="lazy" decoding="async" width="150" height="150" className="w-full h-full object-contain" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Close prompt button */}
              {envelopePromptVisible && !isFormShowing(phase) && phase !== PHASE.SUBMITTING && phase !== PHASE.SUCCESS && (
                <button
                  onClick={handleClose}
                  aria-label="Close enquiry prompt"
                  className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 text-[#d4af37] hover:text-[#4a3623] z-[60] bg-[#fdfbf7] border border-[#d4af37]/40 rounded-full p-1 sm:p-1.5 transition-colors pointer-events-auto shadow-md"
                >
                  <X size={12} strokeWidth={2} className="sm:hidden" />
                  <X size={14} strokeWidth={2} className="hidden sm:block" />
                </button>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
