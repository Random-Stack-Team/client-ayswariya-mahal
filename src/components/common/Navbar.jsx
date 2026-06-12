import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEnquiry } from "../../context/useEnquiry";
import logoImg from "../../assets/images/ayswariya-mahal-logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

const leftLinks = links.slice(0, 3);
const rightLinks = links.slice(3);

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openForm } = useEnquiry();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = location.pathname === "/";
  const navVisible = isMobileMenuOpen || !isScrolled || isScrollingUp;
  const solidNav = isScrolled || isMobileMenuOpen || !isHome;

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    setIsScrolled(latest > 42);
    setIsScrollingUp(latest < 50 || latest < previous);
  });

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
      "block border-b border-[#d4af37]/14 py-4 text-left font-nav text-[18px] font-normal uppercase leading-[1.35] tracking-[0.105em] transition-colors duration-300",
      isActive ? "text-[#b58c2a]" : "text-[#4a3623] hover:text-[#b58c2a]",
    ].join(" ");

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    navigate("/");
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
            ? "border-[#d4af37]/28 bg-[rgba(250,247,242,0.88)] shadow-[0_18px_42px_rgba(48,20,12,0.12)] backdrop-blur-[12px] supports-[backdrop-filter]:backdrop-saturate-150"
            : "border-white/10 bg-gradient-to-b from-[#3F0C15]/60 via-[#3F0C15]/24 to-transparent backdrop-blur-[2px]"
        }`}
      >
        <div
          className={`mx-auto grid w-full max-w-[1320px] grid-cols-[1fr_auto] items-center gap-4 px-5 transition-[min-height] duration-700 md:px-9 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:px-10 xl:px-12 ${
            solidNav ? "min-h-[76px]" : "min-h-[88px]"
          }`}
        >
          <nav className="hidden items-center justify-end gap-8 pr-8 lg:flex xl:gap-11 xl:pr-12">
            {leftLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={handleLogoClick}
            className="group relative justify-self-start px-2 py-1 outline-none transition duration-500 hover:scale-[1.012] focus-visible:ring-2 focus-visible:ring-[#e5c76b]/70 lg:justify-self-center"
            aria-label="Ayswariya Mahal home"
          >
            <img
              src={logoImg}
              alt="Ayswariya Mahal"
              loading="eager"
              fetchPriority="high"
              width="654"
              height="293"
              className={`relative z-10 h-12 min-h-12 w-auto object-contain transition duration-700 md:h-[52px] lg:h-[60px] ${
                solidNav
                  ? "drop-shadow-[0_5px_12px_rgba(90,17,28,0.1)]"
                  : "brightness-[1.22] drop-shadow-[0_8px_22px_rgba(0,0,0,0.36)]"
              }`}
            />
          </button>

          <div className="hidden items-center justify-start gap-8 pl-8 lg:flex xl:gap-11 xl:pl-12">
            <nav className="flex items-center gap-8 xl:gap-11">
              {rightLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

          </div>

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
                className="absolute left-0 top-full h-screen w-screen bg-[#3F0C15]/44 backdrop-blur-[3px] lg:hidden"
              />
              <motion.div
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-0 top-full w-[min(88vw,410px)] border-l border-t border-[#d4af37]/24 bg-[rgba(250,247,242,0.96)] px-7 py-9 shadow-[-22px_24px_60px_rgba(48,20,12,0.2)] backdrop-blur-[12px] lg:hidden"
              >
                <div className="flex flex-col">
                  <div className="mb-5 flex items-center justify-between border-b border-[#d4af37]/20 pb-5">
                    <span className="font-nav text-sm font-normal uppercase tracking-[0.16em] text-[#8c6419]">
                      Menu
                    </span>
                    <span className="h-px w-16 bg-[#d4af37]/60" />
                  </div>

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
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;
