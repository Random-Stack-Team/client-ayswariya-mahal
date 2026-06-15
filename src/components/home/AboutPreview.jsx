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

    const ctx = gsap.context(() => {
      gsap.fromTo(el.querySelectorAll(".stagger-reveal"), 
        { opacity: 0, y: 26 },
        {
          opacity: 1, 
          y: 0,
          stagger: 0.16,
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
    <section ref={sectionRef} className="relative bg-[#5A111C] py-20 overflow-hidden border-b border-[#E5C76B]/20 md:py-20 lg:py-32">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(var(--color-gold-leaf) 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-site mx-auto px-5 sm:px-6 md:px-8 lg:px-16 grid md:grid-cols-12 gap-10 md:gap-10 lg:gap-16 items-center">
        
        <div className="md:col-span-5 lg:col-span-5 space-y-8 z-10">
          <div className="order-2 lg:order-1 text-center lg:text-left stagger-reveal">
            <h2 className="font-serif text-[32px] md:text-[38px] lg:text-6xl font-semibold leading-[1.2] tracking-[0.01em] text-[#fdfbf7] mb-6 lg:mb-8 drop-shadow-sm">
              A Legacy of <br />
              <span className="italic text-[#E5C76B]">Celebrations</span>
            </h2>
            
            <p className="type-body text-[#fdfbf7]/82 mb-8 max-w-2xl mx-auto lg:mx-0">
              For over two decades, Ayswariya Mahal has been the backdrop to life's most precious moments. With our palatial architecture and unwavering commitment to excellence, we transform your dreams into timeless memories.
            </p>

            <button 
              onClick={() => navigate("/about")}
              className="inline-flex items-center gap-3 type-cta text-[#E5C76B] hover:text-white transition-colors group"
            >
              Discover Our Story
              <span className="w-12 h-px bg-[#E5C76B] group-hover:w-16 group-hover:bg-white transition-all"></span>
            </button>
          </div>
        </div>

        <div className="md:col-span-7 lg:col-span-7 relative stagger-reveal mt-8 md:mt-0">
          <div className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner aspect-[4/5] md:aspect-[5/4] lg:aspect-square p-3 lg:p-4 luxury-image-overlay">
            <img
              src={aboutImg}
              alt="Ayswariya Mahal Interior"
              loading="lazy"
              decoding="async"
              width="1360"
              height="1020"
              className="grayscale-[12%] contrast-110 hover:grayscale-0"
            />
          </div>


        </div>

      </div>
    </section>
  );
}
