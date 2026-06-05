import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useEnquiry } from "../../context/EnquiryContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { openForm } = useEnquiry();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // For the GateExperience animation compatibility
  useEffect(() => {
    if (isHome) {
      gsap.set("#main-nav", { opacity: 0 });
    } else {
      gsap.set("#main-nav", { opacity: 1 });
    }
  }, [isHome]);

  const linkClass = ({ isActive }) =>
    `font-body text-[0.875rem] font-semibold tracking-[0.3em] uppercase pb-1 transition-all duration-500 ${
      isActive
        ? "text-gold-leaf border-b-2 border-gold-leaf"
        : "text-ivory/80 hover:text-gold-leaf hover:drop-shadow-[0_0_8px_rgba(229,199,107,0.8)]"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block font-body text-xl font-semibold tracking-[0.2em] uppercase py-4 transition-all duration-300 ${
      isActive ? "text-gold-leaf" : "text-ivory/80 hover:text-gold-leaf"
    }`;

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-in-out border-b border-gold-leaf/30 ${
        isScrolled || isMobileMenuOpen ? "bg-primary/95 backdrop-blur-md shadow-lg shadow-black/50" : "bg-transparent"
      } py-4 md:py-6`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-16">
        {/* Logo */}
        <div 
          onClick={() => navigate("/")}
          className="font-cinzel text-xl md:text-2xl tracking-[0.2em] text-gold-leaf uppercase cursor-pointer"
        >
          Ayswariya Mahal
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex gap-10 items-center">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About Us</NavLink>
          <NavLink to="/facilities" className={linkClass}>Facilities</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
          <NavLink to="/reviews" className={linkClass}>Review</NavLink>
        </nav>

        {/* CTA (Desktop) */}
        <button
          onClick={openForm}
          className="hidden lg:block bg-deep-maroon text-gold-leaf border border-gold-leaf px-8 py-3 font-body text-[0.875rem] font-semibold uppercase tracking-widest rounded-full hover:bg-gold-leaf hover:text-deep-maroon hover:shadow-[0_0_20px_rgba(229,199,107,0.4)] transition-all duration-500 active:scale-95 transform hover:-translate-y-1"
        >
          Enquire Now
        </button>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-gold-leaf p-2"
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
            className="lg:hidden absolute top-full left-0 w-full bg-primary/95 backdrop-blur-xl border-t border-gold-leaf/20 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 space-y-6">
              <NavLink to="/" className={mobileLinkClass}>Home</NavLink>
              <NavLink to="/about" className={mobileLinkClass}>About Us</NavLink>
              <NavLink to="/facilities" className={mobileLinkClass}>Facilities</NavLink>
              <NavLink to="/gallery" className={mobileLinkClass}>Gallery</NavLink>
              <NavLink to="/reviews" className={mobileLinkClass}>Review</NavLink>
              
              <div className="w-24 h-px bg-gold-leaf/30 my-4"></div>
              
              <button
                onClick={openForm}
                className="bg-deep-maroon text-gold-leaf border border-gold-leaf px-10 py-4 font-body text-lg font-semibold uppercase tracking-widest rounded-full hover:bg-gold-leaf hover:text-deep-maroon transition-all duration-500 w-full max-w-sm"
              >
                Enquire Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;