import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import gsap from "gsap";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <header
      id="main-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b border-gold-leaf/30 ${
        isScrolled ? "bg-primary/95 backdrop-blur-md py-4 shadow-lg shadow-black/50" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex items-center justify-between px-8 md:px-16">
        {/* Logo */}
        <div 
          onClick={() => navigate("/")}
          className="font-cinzel text-xl md:text-2xl tracking-[0.2em] text-gold-leaf uppercase cursor-pointer"
        >
          Ayswariya Mahal
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-10">
          <NavLink to="/" className={linkClass}>Palace</NavLink>
          <NavLink to="/about" className={linkClass}>Story</NavLink>
          <NavLink to="/facilities" className={linkClass}>Facilities</NavLink>
          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>
        </nav>

        {/* CTA */}
        <button
          onClick={() => navigate("/contact")}
          className="bg-deep-maroon text-gold-leaf border border-gold-leaf px-6 py-2.5 font-body text-[0.75rem] md:text-[0.875rem] font-semibold uppercase tracking-widest hover:bg-gold-leaf hover:text-deep-maroon transition-all duration-500 active:opacity-80"
        >
          Inquire
        </button>
      </div>
    </header>
  );
}

export default Navbar;