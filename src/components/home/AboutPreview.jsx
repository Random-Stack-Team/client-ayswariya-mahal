import { useNavigate } from "react-router-dom";
import aboutImg from "../../assets/images/about.jpg";
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
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 70%",
        }
      }
    );
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-surface py-32 overflow-hidden">
      {/* Decorative Gold Pattern Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-gold-leaf) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-[1280px] mx-auto px-8 md:px-16 grid lg:grid-cols-12 gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-5 space-y-8 z-10">
          <div className="w-16 h-px bg-gold-leaf stagger-reveal"></div>
          
          <p className="font-body text-gold-leaf font-semibold tracking-[0.3em] uppercase text-sm stagger-reveal">
            The Legacy
          </p>
          
          <h3 className="font-cinzel text-4xl md:text-5xl text-primary leading-tight stagger-reveal">
            A Stage for <br />
            <span className="italic text-antique-gold">Extraordinary Unions</span>
          </h3>
          
          <p className="font-body text-on-surface-variant leading-relaxed text-lg stagger-reveal">
            Built upon the foundations of timeless Dravidian architecture, Ayswariya Mahal offers a sanctuary of luxury. From the hand-carved pillars to the expansive marble stages, every inch is designed to be the backdrop of your most precious memory.
          </p>
          
          <div className="grid grid-cols-2 gap-8 pt-4 pb-8 stagger-reveal">
            <div>
              <div className="font-cinzel text-3xl text-primary mb-2">20+</div>
              <div className="font-body text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Years Legacy</div>
            </div>
            <div>
              <div className="font-cinzel text-3xl text-primary mb-2">1000+</div>
              <div className="font-body text-xs text-on-surface-variant uppercase tracking-widest font-semibold">Events Hosted</div>
            </div>
          </div>

          <button
            onClick={() => navigate("/about")}
            className="stagger-reveal inline-flex items-center gap-4 text-gold-leaf font-body text-sm font-semibold tracking-widest uppercase group hover:text-antique-gold transition-colors"
          >
            DISCOVER OUR STORY
            <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>

        {/* Image Content */}
        <div className="lg:col-span-7 relative stagger-reveal">
          <div className="aspect-[4/5] lg:aspect-square overflow-hidden border-double border-8 border-gold-leaf/30 p-4 bg-white/50 backdrop-blur-sm shadow-2xl relative">
            {/* Decorative Corner Borders */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-gold-leaf m-2"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-gold-leaf m-2"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-gold-leaf m-2"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-gold-leaf m-2"></div>
            
            <img
              src={aboutImg}
              alt="Ayswariya Mahal Interior"
              className="w-full h-full object-cover grayscale-[20%] contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
            />
          </div>
        </div>

      </div>
    </section>
  );
}