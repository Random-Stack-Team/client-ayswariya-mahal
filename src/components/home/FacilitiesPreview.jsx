import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, UtensilsCrossed, Crown, Car } from "lucide-react";
import { useNavigate } from "react-router-dom";
import hallImage from "../../assets/images/Facility/facility2.webp";
import diningImage from "../../assets/images/Facility/facility3.webp";
import suitesImage from "../../assets/images/Facility/facility4.webp";
import valetImage from "../../assets/images/Facility/facility5.webp";

gsap.registerPlugin(ScrollTrigger);
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

    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll(".bento-item"), 
        { opacity: 0, y: 36 },
        {
          opacity: 1, 
          y: 0,
          stagger: 0.14,
          duration: 1.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 72%",
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 md:py-24 lg:py-32 bg-[#fdfbf7] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-gold-leaf) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-site mx-auto w-full px-5 sm:px-6 md:max-lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-12 lg:mb-16 bento-item">
          <div>
            <p className="type-eyebrow text-gold-leaf mb-4">
              Palace Amenities
            </p>
            <h2 className="font-serif text-[32px] md:text-[40px] lg:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-primary">
              A Symphony of <br />
              <span className="italic text-antique-gold">Grandeur</span>
            </h2>
          </div>
          <button 
            onClick={() => navigate("/facilities")}
            className="hidden md:flex items-center gap-3 text-primary type-cta group hover:text-gold-leaf transition-colors mt-6 md:mt-0 border-b border-primary hover:border-gold-leaf pb-1"
          >
            Explore All Facilities
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:h-[600px]">
          
          <div className="bento-item md:col-span-12 lg:col-span-7 relative group overflow-hidden bg-primary h-[300px] sm:h-[320px] md:h-[320px] lg:h-full cursor-pointer luxury-image-frame luxury-image-frame--banner luxury-image-overlay" onClick={() => navigate("/facilities")}>
            <img src={IMAGES.hall} alt="Grand Marriage Hall" loading="lazy" decoding="async" width="1448" height="1086" className="absolute inset-0 w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            <div className="absolute inset-4 border border-gold-leaf/20 group-hover:border-gold-leaf/60 transition-colors duration-700 pointer-events-none mix-blend-overlay"></div>
            
            <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:p-12 w-full">
              <span className="type-eyebrow text-gold-leaf mb-3 block">Capacity: 1000+ Guests</span>
              <h3 className="font-serif text-2xl md:text-[32px] lg:text-4xl font-semibold leading-[1.2] text-white mb-4">The Grand Hall</h3>
              <p className="type-body text-white/82 max-w-md hidden md:block">
                A breathtaking, centrally air-conditioned sanctuary designed with towering pillars, magnificent chandeliers, and timeless Dravidian architecture.
              </p>
            </div>
          </div>

          <div className="md:col-span-12 lg:col-span-5 grid gap-4 md:gap-6 lg:grid-rows-2 lg:h-full">
            
            <div className="bento-item relative group overflow-hidden bg-primary h-[300px] sm:h-[320px] md:h-[320px] lg:h-auto cursor-pointer luxury-image-frame luxury-image-frame--banner luxury-image-overlay" onClick={() => navigate("/facilities")}>
              <img src={IMAGES.dining} alt="Royal Dining Hall" loading="lazy" decoding="async" width="1448" height="1086" className="absolute inset-0 w-full h-full object-cover opacity-[0.86]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/20"></div>
              
              <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-gold-leaf">
                <UtensilsCrossed size={20} />
              </div>

              <div className="absolute bottom-0 left-0 p-6 md:p-7 lg:p-8 w-full">
                <h3 className="font-serif text-2xl font-semibold leading-[1.2] text-white mb-2">Royal Dining</h3>
                <p className="type-body text-white/76">Traditional seating and grand buffet arrangements.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 lg:gap-6 h-auto lg:h-auto">
              
              <div className="bento-item relative group h-[300px] sm:h-[320px] md:h-[320px] lg:h-auto lg:min-h-[220px] overflow-hidden bg-primary cursor-pointer luxury-image-frame luxury-image-frame--banner luxury-image-overlay" onClick={() => navigate("/facilities")}>
                <img src={IMAGES.suites} alt="Luxury Suites" loading="lazy" decoding="async" width="1536" height="1024" className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale-[20%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <Crown size={28} className="text-gold-leaf mb-4 group-hover:-translate-y-1 transition-transform" />
                  <h3 className="font-serif text-[22px] font-semibold leading-[1.2] text-white">Premium Suites</h3>
                </div>
              </div>

              <div className="bento-item relative group h-[300px] sm:h-[320px] md:h-[320px] lg:h-auto lg:min-h-[220px] overflow-hidden bg-deep-maroon cursor-pointer luxury-image-frame luxury-image-frame--banner luxury-image-overlay" onClick={() => navigate("/facilities")}>
                <img src={IMAGES.valet} alt="Valet Parking" loading="lazy" decoding="async" width="1536" height="1024" className="absolute inset-0 w-full h-full object-cover opacity-55 mix-blend-luminosity" />
                
                <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-leaf/50"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-leaf/50"></div>

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                  <Car size={28} className="text-gold-leaf mb-4 group-hover:-translate-y-1 transition-transform" />
                  <h3 className="font-serif text-[22px] font-semibold leading-[1.2] text-gold-leaf">Valet Parking</h3>
                  <p className="type-small text-white/62 uppercase tracking-[0.08em] mt-2 hidden sm:block">Secure & Spacious</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center md:hidden bento-item">
          <button 
            onClick={() => navigate("/facilities")}
            className="inline-flex min-h-12 items-center gap-3 text-primary type-cta border border-primary px-8 py-3 hover:bg-primary hover:text-gold-leaf transition-colors"
          >
            Explore All Facilities
          </button>
        </div>

      </div>
    </section>
  );
}
