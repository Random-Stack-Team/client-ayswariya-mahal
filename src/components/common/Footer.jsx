import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import siteConfig from "../../config/site";
import logoImg from "../../assets/images/ayswariya-mahal-logo.webp";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 md:py-10 px-6 md:px-12 bg-[#4A0A12] border-t border-[#d4af37]/30 text-[#d4af37] shadow-[0_-5px_20px_rgba(0,0,0,0.1)] relative z-50">
      <Link to="/" className="mb-5 inline-flex">
        <img
          src={logoImg}
          alt="Ayswariya Mahal"
          className="h-14 w-auto brightness-[1.32] contrast-[1.08] drop-shadow-[0_8px_22px_rgba(0,0,0,0.24)]"
        />
      </Link>
      
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-6 text-center">
        <Link to="/about" className="font-serif text-xs md:text-sm text-[#fdfbf7]/80 hover:text-[#E5C76B] transition-all duration-300 uppercase tracking-widest font-bold">
          The Legacy
        </Link>
        <Link to="/facilities" className="font-serif text-xs md:text-sm text-[#fdfbf7]/80 hover:text-[#E5C76B] transition-all duration-300 uppercase tracking-widest font-bold">
          Facilities
        </Link>
        <Link to="/gallery" className="font-serif text-xs md:text-sm text-[#fdfbf7]/80 hover:text-[#E5C76B] transition-all duration-300 uppercase tracking-widest font-bold">
          Gallery
        </Link>
        <Link to="/contact" className="font-serif text-xs md:text-sm text-[#fdfbf7]/80 hover:text-[#E5C76B] transition-all duration-300 uppercase tracking-widest font-bold">
          Private Tours
        </Link>
      </div>

      {/* Social Links */}
      <div className="flex gap-6 mb-6">
        <a href={siteConfig.socials.facebook} target="_blank" rel="noreferrer" className="text-[#fdfbf7]/80 hover:text-[#E5C76B] transition-colors">
          <Facebook size={20} />
        </a>
        <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="text-[#fdfbf7]/80 hover:text-[#E5C76B] transition-colors">
          <Instagram size={20} />
        </a>
        <a href={siteConfig.socials.youtube} target="_blank" rel="noreferrer" className="text-[#fdfbf7]/80 hover:text-[#E5C76B] transition-colors">
          <Youtube size={20} />
        </a>
      </div>

      <div className="w-16 h-px bg-[#E5C76B]/20 mb-5"></div>
      
      <p className="font-serif text-[10px] md:text-xs text-[#fdfbf7]/50 tracking-[0.1em] uppercase">
        Copyright MMXXVI Ayswariya Mahal. All Rights Reserved.
      </p>
    </footer>
  );
}
