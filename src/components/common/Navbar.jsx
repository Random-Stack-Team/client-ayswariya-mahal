import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEnquiry } from "../../context/useEnquiry";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import ayswariyaLogo from "../../assets/images/ayswariya-mahal-logo.webp";
import sowbhagyaLogo from "../../assets/images/sowbhagya-mahal-logo.webp";

const links = [
  { to: "/", label: "Venue" },
  { to: "/about", label: "Legacy" },
  { to: "/facilities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Enquiry" },
];

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openForm } = useEnquiry();
  const isHome = location.pathname === "/";
  const navVisible = isMobileMenuOpen || !isScrolled || isScrollingUp;
  const solidNav = isScrolled || isMobileMenuOpen || !isHome;

  const scrollState = useRef({ isScrolled: false, isScrollingUp: true });
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    const nextScrolled = latest > 42;
    const nextScrollingUp = latest < 50 || latest < previous;
    const current = scrollState.current;
    if (nextScrolled !== current.isScrolled) {
      current.isScrolled = nextScrolled;
      setIsScrolled(nextScrolled);
    }
    if (nextScrollingUp !== current.isScrollingUp) {
      current.isScrollingUp = nextScrollingUp;
      setIsScrollingUp(nextScrollingUp);
    }
  });

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onDesktop = () => setIsMobileMenuOpen(false);
    mq.addEventListener("change", onDesktop);
    return () => mq.removeEventListener("change", onDesktop);
  }, []);

  const linkClass = ({ isActive }) =>
    [
      "relative px-1 py-2 font-nav text-[13px] font-normal uppercase tracking-[0.105em]",
      "antialiased transition-colors duration-700 after:absolute after:-bottom-0.5 after:left-1/2 after:h-px after:w-0 after:-translate-x-1/2 after:bg-[#e5c76b] after:transition-all after:duration-700",
      isActive
        ? `${solidNav ? "text-[#8c6419]" : "text-[#f3d76c]"} after:w-8`
        : `${solidNav ? "text-[#4a3623]/76 hover:text-[#6A1724]" : "text-white/88 hover:text-[#f3d76c]"}`,
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block border-b border-[#d4af37]/14 py-4 pl-3 text-left font-nav text-[18px] font-normal uppercase leading-[1.35] tracking-[0.105em] transition-all duration-300",
      isActive
        ? "border-l-[3px] border-[#d4af37] text-[#8c6419] bg-gradient-to-r from-[#d4af37]/8 to-transparent"
        : "border-l-[3px] border-transparent text-[#4a3623] hover:bg-[#d4af37]/4 hover:text-[#6A1724]",
    ].join(" ");

  const handleAyswariyaClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
  };

  const handleSowbhagyaClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/sowbhagya-mahal");
  };

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-50 w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        navVisible ? "translate-y-0" : "-translate-y-[130%]"
      }`}
    >
      <header
        id="main-nav"
        className={`pointer-events-auto border-b transition-all duration-700 ${
          solidNav
            ? "border-[#d4af37]/28 bg-[rgba(250,247,242,0.88)] shadow-[0_12px_24px_rgba(48,20,12,0.1)] backdrop-blur-[4px]"
            : "border-white/10 bg-gradient-to-b from-[#3F0C15]/60 via-[#3F0C15]/24 to-transparent backdrop-blur-[1px]"
        }`}
      >
        <div
          className={`mx-auto grid w-full max-w-[1320px] items-center gap-4 px-4 transition-[min-height] duration-700 sm:px-5 md:px-8 lg:px-10 xl:px-12 grid-cols-[auto_1fr_auto] ${
            solidNav ? "min-h-[68px] md:min-h-[76px]" : "min-h-[76px] md:min-h-[88px]"
          }`}
        >
          <div className={`flex items-center gap-2 sm:gap-3 ${isMobileMenuOpen ? "invisible" : ""}`}>
            <button
              onClick={handleAyswariyaClick}
              className={`group relative min-h-11 justify-self-start px-1 py-1 outline-none transition duration-500 hover:scale-[1.012] focus-visible:ring-2 focus-visible:ring-[#e5c76b]/70 sm:px-2`}
              aria-label="Ayswariya Mahal home"
            >
              <img
                src={ayswariyaLogo}
                alt="Ayswariya Mahal"
                loading="eager"
                fetchPriority="high"
                width="654"
                height="293"
                className={`relative z-10 h-10 min-h-10 w-auto max-w-[130px] object-contain transition duration-700 sm:h-11 sm:min-h-11 sm:max-w-[150px] md:h-[48px] md:min-h-[48px] md:max-w-[170px] lg:h-[60px] lg:min-h-[60px] lg:max-w-none ${
                  solidNav
                    ? "drop-shadow-[0_5px_12px_rgba(90,17,28,0.1)]"
                    : "brightness-[1.22] drop-shadow-[0_8px_22px_rgba(0,0,0,0.36)]"
                }`}
              />
            </button>

            <div className="h-5 w-px bg-[#d4af37]/50 lg:hidden" aria-hidden="true" />

            <button
              onClick={handleSowbhagyaClick}
              className={`group relative min-h-11 px-1 py-1 outline-none transition duration-500 hover:scale-[1.012] focus-visible:ring-2 focus-visible:ring-[#e5c76b]/70 sm:px-2 lg:hidden`}
              aria-label="Sowbhagya Mahal"
            >
              <img
                src={sowbhagyaLogo}
                alt="Sowbhagya Mahal"
                loading="eager"
                width="654"
                height="293"
                className={`relative z-10 h-10 min-h-10 w-auto max-w-[130px] object-contain transition duration-700 sm:h-11 sm:min-h-11 sm:max-w-[150px] md:h-[48px] md:min-h-[48px] md:max-w-[170px] ${
                  solidNav
                    ? "drop-shadow-[0_5px_12px_rgba(90,17,28,0.1)]"
                    : "brightness-[1.22] drop-shadow-[0_8px_22px_rgba(0,0,0,0.36)]"
                }`}
              />
            </button>
          </div>

          <nav className="hidden items-center justify-center gap-8 lg:flex xl:gap-11">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <button
              onClick={handleSowbhagyaClick}
              className={`group relative min-h-11 px-1 py-1 outline-none transition duration-500 hover:scale-[1.012] focus-visible:ring-2 focus-visible:ring-[#e5c76b]/70 sm:px-2 hidden lg:block`}
              aria-label="Sowbhagya Mahal"
            >
              <img
                src={sowbhagyaLogo}
                alt="Sowbhagya Mahal"
                loading="eager"
                width="654"
                height="293"
                className={`relative z-10 h-[60px] min-h-[60px] w-auto object-contain transition duration-700 ${
                  solidNav
                    ? "drop-shadow-[0_5px_12px_rgba(90,17,28,0.1)]"
                    : "brightness-[1.22] drop-shadow-[0_8px_22px_rgba(0,0,0,0.36)]"
                }`}
              />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className={`grid h-11 w-11 place-items-center rounded-full border justify-self-end transition-colors duration-300 lg:hidden ${
                solidNav
                  ? "border-[#d4af37]/45 bg-white/35 text-[#4a3623]"
                  : "border-white/24 bg-white/10 text-white backdrop-blur-md"
              }`}
              aria-label="Toggle navigation"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close navigation"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-[#3F0C15]/44 backdrop-blur-[3px] lg:hidden"
              />
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="fixed right-0 top-0 h-[100dvh] w-[min(90vw,420px)] overflow-y-auto border-l border-[#d4af37]/24 bg-gradient-to-b from-[#fdfaf3] via-[#fcf9f4] to-[#f9f4eb] shadow-[-22px_24px_60px_rgba(48,20,12,0.25)] lg:hidden"
                style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
              >
                <div className="flex h-full flex-col justify-between px-5 py-6 sm:px-7 sm:py-9">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <button onClick={handleAyswariyaClick}>
                          <img src={ayswariyaLogo} alt="Ayswariya Mahal" className="h-10 w-auto" />
                        </button>
                        <div className="h-5 w-px bg-[#d4af37]/50" aria-hidden="true" />
                        <button onClick={handleSowbhagyaClick}>
                          <img src={sowbhagyaLogo} alt="Sowbhagya Mahal" className="h-10 w-auto" />
                        </button>
                      </div>
                      <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="grid h-11 w-11 place-items-center text-[#5A111C]/70 hover:text-[#5A111C] transition-colors rounded-full hover:bg-[#d4af37]/10"
                        aria-label="Close navigation"
                      >
                        <X size={24} />
                      </button>
                    </div>
                    <div className="flex items-center gap-3 w-full">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
                      <div className="h-2 w-2 rotate-45 border border-[#d4af37] bg-[#d4af37]/20" />
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-center gap-1">
                    {links.map((link) => (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        className={mobileLinkClass}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.label}
                      </NavLink>
                    ))}
                  </div>

                  <div className="flex flex-col items-center gap-5 pt-6 border-t border-[#d4af37]/20">
                    <button
                      onClick={() => { setIsMobileMenuOpen(false); openForm(); }}
                      className="flex w-full items-center justify-center gap-3 min-h-[50px] rounded-full bg-gradient-to-r from-[#d4af37] to-[#e5c76b] text-[#3F0C15] font-semibold tracking-[0.08em] uppercase shadow-lg shadow-[#d4af37]/30 hover:shadow-xl hover:shadow-[#d4af37]/40 transition-all duration-300 hover:-translate-y-0.5"
                    >
                      <Sparkles size={18} />
                      Plan Your Wedding
                    </button>
                    <p className="type-small text-[#8c6419]/60 text-center">
                      Ayswariya Mahal — Est. 2001
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;
