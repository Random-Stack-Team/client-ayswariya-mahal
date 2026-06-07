import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, UtensilsCrossed, Crown, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

import hallImage from "../../assets/images/Facility/facility2.png";
import diningImage from "../../assets/images/Facility/facility3.png"
import suitesImage from "../../assets/images/Facility/facility4.png";
import valetImage from "../../assets/images/Facility/facility5.png";
const IMAGES = {
  hall: hallImage,
  dining: diningImage,
  suites: suitesImage,
  valet: valetImage
};

export default function FacilitiesPreview() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll(".bento-item"), 
      { opacity: 0, y: 50 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.2,
        duration: 1.45,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-[#fdfbf7] relative overflow-hidden">
      {/* Decorative Gold Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-gold-leaf) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 bento-item">
          <div>
            <p className="font-body text-gold-leaf font-semibold tracking-[0.3em] uppercase text-sm mb-4">
              Palace Amenities
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-primary leading-tight">
              A Symphony of <br />
              <span className="italic text-antique-gold">Grandeur</span>
            </h2>
          </div>
          <button 
            onClick={() => navigate("/facilities")}
            className="hidden md:flex items-center gap-3 text-primary font-body text-sm font-semibold tracking-widest uppercase group hover:text-gold-leaf transition-colors mt-6 md:mt-0 border-b border-primary hover:border-gold-leaf pb-1"
          >
            Explore All Facilities
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:h-[600px]">
          
          {/* Main Feature: Grand Hall (Left 60%) */}
          <div className="bento-item md:col-span-12 lg:col-span-7 relative group overflow-hidden bg-primary h-[400px] lg:h-full cursor-pointer luxury-image-overlay" onClick={() => navigate("/facilities")}>
            <img src={IMAGES.hall} alt="Grand Marriage Hall" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1600ms] group-hover:scale-110 opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            {/* Elegant Double Border */}
            <div className="absolute inset-4 border border-gold-leaf/20 group-hover:border-gold-leaf/60 transition-colors duration-700 pointer-events-none mix-blend-overlay"></div>
            
            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
              <span className="font-body text-xs text-gold-leaf tracking-[0.3em] uppercase mb-3 block">Capacity: 1000+ Guests</span>
              <h3 className="font-display text-3xl md:text-4xl text-white mb-4">The Grand Hall</h3>
              <p className="font-body text-white/80 max-w-md leading-relaxed hidden md:block">
                A breathtaking, centrally air-conditioned sanctuary designed with towering pillars, magnificent chandeliers, and timeless Dravidian architecture.
              </p>
            </div>
          </div>

          {/* Right Side Column (40%) */}
          <div className="md:col-span-12 lg:col-span-5 grid grid-rows-2 gap-4 md:gap-6 h-full">
            
            {/* Royal Dining (Top half) */}
            <div className="bento-item relative group overflow-hidden bg-primary h-[300px] lg:h-auto cursor-pointer luxury-image-overlay" onClick={() => navigate("/facilities")}>
              <img src={IMAGES.dining} alt="Royal Dining Hall" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-[0.86]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20"></div>
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold-leaf">
                <UtensilsCrossed size={20} />
              </div>

              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-display text-2xl text-white mb-2">Royal Dining</h3>
                <p className="font-body text-white/70 text-sm">Traditional seating and grand buffet arrangements.</p>
              </div>
            </div>

            {/* Bottom Row: Suites & Valet */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 h-[250px] lg:h-auto">
              
              {/* Luxury Suites */}
              <div className="bento-item relative group overflow-hidden bg-primary cursor-pointer luxury-image-overlay" onClick={() => navigate("/facilities")}>
                <img src={IMAGES.suites} alt="Luxury Suites" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-70 grayscale-[20%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <Crown size={28} className="text-gold-leaf mb-4 group-hover:-translate-y-1 transition-transform" />
                  <h3 className="font-display text-lg text-white">Premium Suites</h3>
                </div>
              </div>

              {/* Valet Parking */}
              <div className="bento-item relative group overflow-hidden bg-deep-maroon cursor-pointer luxury-image-overlay" onClick={() => navigate("/facilities")}>
                <img src={IMAGES.valet} alt="Valet Parking" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105 opacity-55 mix-blend-luminosity" />
                
                {/* Gold corner accents */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-leaf/50"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-leaf/50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <Car size={28} className="text-gold-leaf mb-4 group-hover:-translate-y-1 transition-transform" />
                  <h3 className="font-display text-lg text-gold-leaf">Valet Parking</h3>
                  <p className="font-body text-white/50 text-[10px] uppercase tracking-widest mt-2 hidden sm:block">Secure & Spacious</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden bento-item">
          <button 
            onClick={() => navigate("/facilities")}
            className="inline-flex items-center gap-3 text-primary font-body text-sm font-semibold tracking-widest uppercase border border-primary px-8 py-3 hover:bg-primary hover:text-gold-leaf transition-colors"
          >
            Explore All Facilities
          </button>
        </div>

      </div>
    </section>
  );
}
