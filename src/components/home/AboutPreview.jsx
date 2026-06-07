import { useNavigate } from "react-router-dom";
import aboutImg from "../../assets/images/about.webp";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    gsap.fromTo(el.querySelectorAll(".stagger-reveal"), 
      { opacity: 0, y: 30 },
      {
        opacity: 1, 
        y: 0,
        stagger: 0.18,
        duration: 1.35,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#4A0A12] py-32 overflow-hidden border-b border-[#E5C76B]/20">
      {/* Decorative Gold Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-gold-leaf) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-16 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-5 space-y-8 z-10">
          <div className="order-2 lg:order-1 text-center lg:text-left stagger-reveal">
            <h2 className="text-5xl lg:text-7xl font-display text-[#fdfbf7] mb-8 leading-tight drop-shadow-sm">
              A Legacy of <br />
              <span className="italic text-[#E5C76B]">Celebrations</span>
            </h2>
            
            <p className="font-serif text-lg text-[#fdfbf7]/80 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
              For over two decades, Ayswariya Mahal has been the backdrop to life's most precious moments. With our palatial architecture and unwavering commitment to excellence, we transform your dreams into timeless memories.
            </p>

            <button 
              onClick={() => navigate("/about")}
              className="inline-flex items-center gap-3 font-serif text-sm font-bold tracking-[0.2em] uppercase text-[#E5C76B] hover:text-white transition-colors group"
            >
              Discover Our Story
              <span className="w-12 h-px bg-[#E5C76B] group-hover:w-16 group-hover:bg-white transition-all"></span>
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-7 relative stagger-reveal">
          <div className="aspect-[4/5] lg:aspect-square overflow-hidden border-double border-8 border-gold-leaf/30 p-4 bg-white/50 backdrop-blur-sm shadow-2xl relative luxury-image-overlay">
            {/* Decorative Corner Borders */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-leaf m-2"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-leaf m-2"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-leaf m-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-leaf m-2"></div>
            
            <img
              src={aboutImg}
              alt="Ayswariya Mahal Interior"
              className="w-full h-full object-cover grayscale-[12%] contrast-110 hover:grayscale-0 hover:scale-105 transition-all duration-[1600ms]"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
