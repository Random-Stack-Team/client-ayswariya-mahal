import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = location.pathname === "/";
  const isScrolled = scrollY > 42;
  const navVisible = isMobileMenuOpen || scrollY < 50 || isScrollingUp;
  const solidNav = isScrolled || isMobileMenuOpen || !isHome;

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);
      setIsScrollingUp(currentY < 50 || currentY < previousY);
      previousY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    [
      "relative px-2 py-2 font-serif text-[12px] font-bold uppercase tracking-[0.24em]",
      "transition-colors duration-700 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[#e5c76b] after:transition-all after:duration-700",
      isActive
        ? `${solidNav ? "text-[#b58c2a]" : "text-[#f3d76c]"} after:w-full`
        : `${solidNav ? "text-[#4a3623]/76 hover:text-[#8b1518]" : "text-white/88 hover:text-[#f3d76c]"}`,
    ].join(" ");

  const mobileLinkClass = ({ isActive }) =>
    [
      "block py-4 text-center font-display text-2xl transition-colors duration-300",
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
            ? "border-[#d4af37]/24 bg-[#fff8ed]/90 py-3 shadow-[0_12px_32px_rgba(48,20,12,0.08)] backdrop-blur-2xl"
            : "border-white/10 bg-gradient-to-b from-[#22080c]/62 via-[#22080c]/24 to-transparent py-5 backdrop-blur-[2px]"
        }`}
      >
        <div
          className="mx-auto flex h-full w-full max-w-[1320px] items-center justify-between px-5 md:px-10 lg:px-16"
        >
          <button onClick={handleLogoClick} className="flex min-w-0 items-center gap-3 lg:min-w-[220px]">
            <img
              src={logoImg}
              alt="Ayswariya Mahal"
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
            className={`hidden min-w-[150px] border px-7 py-2.5 rounded-full font-serif text-[11px] font-bold uppercase tracking-[0.24em] transition duration-700 lg:block ${
              solidNav
                ? "border-[#8C2230] text-[#8C2230] hover:bg-[#8C2230] hover:text-[#f3d76c]"
                : "border-[#e5c76b]/80 bg-[#8C2230]/40 text-[#f3d76c] backdrop-blur-md hover:bg-[#8C2230] hover:border-[#8C2230] hover:text-white"
            }`}
          >
            Enquire
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
                  className="mt-8 border border-[#b58c2a]/60 bg-[#801c2c] px-8 py-4 font-body text-xs font-bold uppercase tracking-[0.24em] text-[#f3d76c]"
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
