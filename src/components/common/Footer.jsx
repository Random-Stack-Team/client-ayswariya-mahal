import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-24 px-8 md:px-16 bg-deep-maroon border-t-double border-t-4 border-gold-leaf text-gold-leaf shadow-sm">
      <div className="font-cinzel text-2xl md:text-3xl text-gold-leaf mb-8 uppercase tracking-[0.3em] font-semibold">
        Ayswariya Mahal
      </div>
      
      <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-10 text-center">
        <Link to="/about" className="font-body text-[0.875rem] md:text-[1rem] text-ivory/80 hover:text-gold-leaf hover:drop-shadow-[0_0_8px_rgba(229,199,107,0.8)] transition-all duration-300 uppercase tracking-widest">
          The Legacy
        </Link>
        <Link to="/facilities" className="font-body text-[0.875rem] md:text-[1rem] text-ivory/80 hover:text-gold-leaf hover:drop-shadow-[0_0_8px_rgba(229,199,107,0.8)] transition-all duration-300 uppercase tracking-widest">
          Facilities
        </Link>
        <Link to="/gallery" className="font-body text-[0.875rem] md:text-[1rem] text-ivory/80 hover:text-gold-leaf hover:drop-shadow-[0_0_8px_rgba(229,199,107,0.8)] transition-all duration-300 uppercase tracking-widest">
          Gallery
        </Link>
        <Link to="/contact" className="font-body text-[0.875rem] md:text-[1rem] text-ivory/80 hover:text-gold-leaf hover:drop-shadow-[0_0_8px_rgba(229,199,107,0.8)] transition-all duration-300 uppercase tracking-widest">
          Private Tours
        </Link>
      </div>

      <div className="w-24 h-px bg-gold-leaf/40 mb-8"></div>
      
      <p className="font-body text-[0.875rem] text-ivory/60 tracking-wider">
        © MMXXVI Ayswariya Mahal. All Rights Reserved.
      </p>
    </footer>
  );
}