import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEnquiry } from "../../context/EnquiryContext";
import logoImg from "../../assets/images/ayswariya-mahal-logo.webp";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openForm } = useEnquiry();
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (currentScrollY < 50) {
        setIsScrollingUp(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else if (currentScrollY > lastScrollY) {
        setIsScrollingUp(false);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine visibility logic
  let navVisible = true;
  if (isMobileMenuOpen) {
    navVisible = true;
  } else if (isHome) {
    if (scrollY < 2800) {
      navVisible = false;
    } else if (scrollY >= 2800 && scrollY < 3200) {
      navVisible = true; // Show exactly after gate opens
    } else {
      navVisible = isScrollingUp; // Disappear when scrolling down the rest of the page
    }
  } else {
    // Other pages: Show if at the top OR scrolling up
    navVisible = scrollY < 50 || isScrollingUp;
  }

  // Light theme link styles
  const linkClass = ({ isActive }) =>
    `font-serif text-sm font-bold tracking-[0.2em] uppercase pb-1 transition-all duration-500 ${
      isActive
        ? "text-[#b58c2a] border-b-2 border-[#b58c2a]"
        : "text-[#4a3623]/80 hover:text-[#b58c2a]"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block font-serif text-lg font-bold tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
      isActive ? "text-[#b58c2a]" : "text-[#4a3623]/80 hover:text-[#b58c2a]"
    }`;

  // If we are at the absolute top of a non-home page, maybe we want it transparent, 
  // but if we want the light redesign universally, we use the light background.
  // Actually, a subtle transparent-to-light effect is best, but since text is dark, transparent only works on light headers.
  // Let's just give it a permanent light glassmorphism to look premium and guarantee readability.
  const isScrolled = scrollY > 50;

  return (
    <div className={`fixed top-0 left-0 w-full z-50 pointer-events-none transition-transform duration-500 ease-in-out ${!navVisible ? '-translate-y-[150%]' : 'translate-y-0'}`}>
      <header
        id="main-nav"
        className={`pointer-events-auto w-full transition-all duration-500 ease-in-out border-b ${
          isScrolled || isMobileMenuOpen || !isHome
            ? "bg-[#fdfbf7]/95 backdrop-blur-xl border-[#d4af37]/30 shadow-[0_5px_20px_rgba(0,0,0,0.05)] py-3 md:py-4" 
            : "bg-[#fdfbf7]/95 backdrop-blur-xl border-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto w-full h-full flex items-center justify-between px-6 md:px-12">
          {/* Logo on the left corner */}
          <div 
            onClick={() => navigate("/")}
            className="cursor-pointer flex-shrink-0"
          >
            {/* Note: Ensure the logo image itself doesn't have white text if the background is light. If it does, we may need a CSS filter to invert it or use a different logo version. Assuming it's gold/dark. */}
            <img src={logoImg} alt="Ayswariya Mahal" className="h-10 md:h-14 object-contain drop-shadow-sm" />
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 items-center flex-1 justify-center">
            <NavLink to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/facilities" className={linkClass}>Facilities</NavLink>
            <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
            <NavLink to="/reviews" className={linkClass}>Reviews</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
          </nav>

        {/* CTA (Desktop) */}
        <button
          onClick={openForm}
          className="hidden lg:block relative px-8 py-2.5 overflow-hidden group rounded-full shadow-[0_2px_10px_rgba(212,175,55,0.2)] hover:shadow-[0_5px_15px_rgba(212,175,55,0.4)] transition-all duration-500 transform hover:-translate-y-0.5 whitespace-nowrap flex-shrink-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#e8d5b5] via-[#d4af37] to-[#e8d5b5] opacity-90 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute inset-[1px] border border-[#a67c00]/30 rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex items-center justify-center">
            <span className="font-serif text-[11px] text-[#4a3623] font-bold tracking-[0.2em] uppercase flex items-center gap-2">
              Enquire
            </span>
          </div>
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-[#4a3623] hover:text-[#d4af37] p-2 transition-colors"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#fdfbf7]/95 backdrop-blur-xl border-t border-[#d4af37]/20 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-start pt-12 h-[calc(100vh-80px)] px-6 space-y-6">
              <NavLink to="/" className={mobileLinkClass}>Home</NavLink>
              <NavLink to="/about" className={mobileLinkClass}>About</NavLink>
              <NavLink to="/facilities" className={mobileLinkClass}>Facilities</NavLink>
              <NavLink to="/gallery" className={mobileLinkClass}>Gallery</NavLink>
              <NavLink to="/reviews" className={mobileLinkClass}>Reviews</NavLink>
              <NavLink to="/contact" className={mobileLinkClass}>Contact</NavLink>
              
              <div className="w-24 h-px bg-[#d4af37]/30 my-4"></div>
              
              <button
                onClick={openForm}
                className="relative px-12 py-4 overflow-hidden group rounded-full shadow-[0_5px_15px_rgba(212,175,55,0.3)] w-full max-w-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#e8d5b5] via-[#d4af37] to-[#e8d5b5] opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute inset-[2px] border border-[#a67c00]/30 rounded-full pointer-events-none"></div>
                <div className="relative z-10 flex items-center justify-center">
                  <span className="font-serif text-sm text-[#4a3623] font-bold tracking-[0.2em] uppercase">
                    Enquire Now
                  </span>
                </div>
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