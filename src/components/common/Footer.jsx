import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";
import siteConfig from "../../config/site";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-8 md:py-10 px-6 md:px-12 bg-[#4A0A12] border-t border-[#d4af37]/30 text-[#d4af37] shadow-[0_-5px_20px_rgba(0,0,0,0.1)] relative z-50">
      <div className="font-display text-xl md:text-2xl text-[#E5C76B] mb-5 uppercase tracking-[0.2em] font-semibold drop-shadow-sm">
        Ayswariya Mahal
      </div>
      
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
        © MMXXVI Ayswariya Mahal. All Rights Reserved.
      </p>
    </footer>
  );
}