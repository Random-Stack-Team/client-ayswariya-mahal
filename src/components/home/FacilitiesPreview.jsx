import {
  ParkingCircle,
  Shield,
  Zap,
  Building2,
  UtensilsCrossed,
  Crown
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const facilities = [
  {
    icon: <Building2 size={32} className="text-gold-leaf group-hover:text-ivory transition-colors duration-500" />,
    title: "Grand Marriage Hall",
    description: "Centrally air-conditioned grand hall with a capacity of 1000+ guests."
  },
  {
    icon: <UtensilsCrossed size={32} className="text-gold-leaf group-hover:text-ivory transition-colors duration-500" />,
    title: "Royal Dining Hall",
    description: "Spacious traditional and buffet dining areas to serve authentic feasts."
  },
  {
    icon: <Crown size={32} className="text-gold-leaf group-hover:text-ivory transition-colors duration-500" />,
    title: "Luxury Suites",
    description: "Premium A/C suites for the bride and groom with all modern amenities."
  },
  {
    icon: <ParkingCircle size={32} className="text-gold-leaf group-hover:text-ivory transition-colors duration-500" />,
    title: "Valet Parking",
    description: "Secure and expansive parking facility with dedicated valet services."
  },
];

export default function FacilitiesPreview() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll(".facility-card"), 
      { opacity: 0, y: 40 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-primary relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-surface to-primary"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-16 relative z-10">
        
        <div className="text-center mb-20">
          <p className="font-body text-gold-leaf font-semibold tracking-[0.3em] uppercase text-sm mb-4">
            Palace Amenities
          </p>
          <h2 className="text-4xl md:text-5xl font-cinzel text-surface-bright">
            Premium Facilities
          </h2>
          <div className="w-24 h-px bg-gold-leaf mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilities.map((item, idx) => (
            <div
              key={idx}
              className="facility-card group relative bg-white/5 backdrop-blur-md border border-gold-leaf/20 p-8 hover:bg-gold-leaf/20 hover:border-gold-leaf/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(229,199,107,0.15)] flex flex-col items-center text-center overflow-hidden"
            >
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold-leaf/0 via-gold-leaf/0 to-gold-leaf/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="mb-6 p-4 bg-deep-maroon/50 rounded-full border border-gold-leaf/20 group-hover:scale-110 group-hover:bg-deep-maroon transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-cinzel text-surface-bright mb-3 tracking-wide">
                {item.title}
              </h3>
              
              <p className="text-ivory/60 font-body text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}