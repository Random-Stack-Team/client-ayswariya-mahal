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
      "relative px-2 py-2 font-serif text-[13px] font-semibold uppercase tracking-[0.18em]",
      "antialiased transition-colors duration-700 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#e5c76b] after:transition-all after:duration-700",
      isActive
        ? `${solidNav ? "text-[#b58c2a]" : "text-[#f3d76c]"} after:w-full`
        : `${solidNav ? "text-[#4a3623]/76 hover:text-[#6A1724]" : "text-white/88 hover:text-[#f3d76c]"}`,
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block py-4 text-center font-serif text-2xl font-medium transition-colors duration-300",
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
            ? "border-[#d4af37]/24 bg-[#fff8ed]/92 py-3 shadow-[0_12px_32px_rgba(48,20,12,0.08)] backdrop-blur-2xl"
            : "border-white/10 bg-gradient-to-b from-[#3F0C15]/58 via-[#3F0C15]/22 to-transparent py-5 backdrop-blur-[2px]"
        }`}
      >
        <div
          className="mx-auto flex h-full w-full max-w-[1320px] items-center justify-between px-5 md:px-10 lg:px-16"
        >
          <button onClick={handleLogoClick} className="flex min-w-0 items-center gap-3 lg:min-w-[220px]">
            <img
              src={logoImg}
              alt="Ayswariya Mahal"
              loading="eager"
              fetchPriority="high"
              className={`h-10 object-contain transition duration-700 md:h-12 ${
                solidNav ? "drop-shadow-sm" : "brightness-[1.18] drop-shadow-[0_6px_18px_rgba(0,0,0,0.32)]"
              }`}
            />
          </button>

          <nav className="hidden items-center gap-7 lg:flex xl:gap-10">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={openForm}
            className={`hidden min-w-[164px] rounded-full border px-7 py-3 font-serif text-[11px] font-bold uppercase tracking-[0.2em] shadow-[0_12px_30px_rgba(122,27,41,0.12)] transition duration-700 lg:block ${
              solidNav
                ? "border-[#6A1724]/70 bg-[#fff8ed]/70 text-[#6A1724] hover:bg-[#6A1724] hover:text-[#f3d76c]"
                : "border-[#e5c76b]/80 bg-[#6A1724]/48 text-[#f3d76c] backdrop-blur-md hover:bg-[#6A1724] hover:border-[#6A1724] hover:text-white"
            }`}
          >
            Enquire Now
          </button>

          <button
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className={`lg:hidden transition-colors duration-300 ${solidNav ? "text-[#4a3623]" : "text-white"}`}
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="absolute left-0 top-full w-full border-t border-[#d4af37]/20 bg-[#fdf7ed]/96 px-6 py-10 shadow-[0_20px_44px_rgba(48,20,12,0.12)] backdrop-blur-2xl lg:hidden"
            >
              <div className="mx-auto flex max-w-sm flex-col">
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

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openForm();
                  }}
                  className="mt-8 rounded-full border border-[#b58c2a]/60 bg-[#6A1724] px-8 py-4 font-serif text-xs font-bold uppercase tracking-[0.2em] text-[#f3d76c]"
                >
                  Enquire Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}

export default Navbar;
