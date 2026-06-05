import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import leftGate from "../../assets/images/left_palace_gate.png";
import rightGate from "../../assets/images/right_palace_gate.png";

gsap.registerPlugin(ScrollTrigger);

export default function GateExperience() {
  const navigate = useNavigate();
  const sceneRef = useRef(null);
  const portalRef = useRef(null);
  const gateLeftRef = useRef(null);
  const gateRightRef = useRef(null);
  const palaceInteriorRef = useRef(null);
  const brandingOverlayRef = useRef(null);
  const heroContentRef = useRef(null);
  const mainTitleRef = useRef(null);
  const scrollPromptRef = useRef(null);
  const petalsLayerRef = useRef(null);
  const ray1Ref = useRef(null);
  const ray2Ref = useRef(null);

  const INTERIOR_IMAGE = "https://lh3.googleusercontent.com/aida/AP1WRLutNoJBuHaED1BOfPNnOxaeRPfbHr0h0_InNkXAbMXe6x4NkkTKZ9L14_d5QwFuAkhbI6M9SDQDrbEH2yyZT-I43ByPT-uebEkSwI884S9pVXh_OgablN25ITB-KCEdUZSx-xMj_fitQhZPOo4xVIm-d-QXZ9A7ihuNQrMMh_QGjP_8IDsmUNXTMz81WuT1sNf_qHnlghARzypiWXqyQG5ESTP1O-0IFZ6wMqKU3QLMMmN_Sp2OqvBdpoo";

  useEffect(() => {
    // 1. Initial Entrance Animation
    const tlInit = gsap.timeline();
    tlInit
      .to(mainTitleRef.current, { opacity: 1, y: 0, duration: 1.5, ease: "power3.out", delay: 0.5 })
      .to(scrollPromptRef.current, { opacity: 1, duration: 1 }, "-=0.5");

    // 2. Particle/Petal Creation
    const petalContainer = petalsLayerRef.current;
    if (petalContainer) {
      petalContainer.innerHTML = ''; // Clean up on re-render
      for (let i = 0; i < 30; i++) {
        const petal = document.createElement("div");
        petal.className = "petal w-4 h-4 rounded-full opacity-70"; 
        petal.style.background = "linear-gradient(135deg, #ffc0cb 0%, #ff69b4 100%)";
        petal.style.left = Math.random() * 100 + "%";
        petal.style.top = Math.random() * 100 + "%";
        petalContainer.appendChild(petal);

        gsap.to(petal, {
          y: "+=200",
          x: "+=80",
          rotation: 360,
          duration: 6 + Math.random() * 8,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 5,
        });
      }
    }

    // 3. Main Scroll Animation
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: sceneRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: portalRef.current,
        anticipatePin: 1,
      },
    });

    mainTl
      // Phase 1: Fade out branding, begin rays
      .to(brandingOverlayRef.current, { opacity: 0, duration: 0.3 })
      .to([ray1Ref.current, ray2Ref.current], { opacity: 0.6, duration: 0.5 }, 0)
      
      // Phase 2: Open the gates in 3D
      // Left gate rotates left, Right gate rotates right, mimicking a real double door
      .to(gateLeftRef.current, { rotateY: -100, x: "-10%", duration: 1, ease: "power2.inOut" }, 0.2)
      .to(gateRightRef.current, { rotateY: 100, x: "10%", duration: 1, ease: "power2.inOut" }, 0.2)
      
      // Phase 3: Reveal and zoom into palace interior
      .to(palaceInteriorRef.current, { opacity: 1, scale: 1, duration: 1 }, 0.4)
      
      // Phase 4: Final Hero Transition
      .to("#main-nav", { opacity: 1, duration: 0.5 }, 0.8) // Un-hide the global navbar
      .to(heroContentRef.current, { opacity: 1, y: 0, pointerEvents: "auto", duration: 0.5 }, 1)
      .to(palaceInteriorRef.current, { filter: "brightness(0.6)", duration: 0.5 }, 1);

    // Parallax mouse effect for gates (clean up on unmount)
    const handleMouseMove = (e) => {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      gsap.to(".gate-door-wrapper", { x: moveX, y: moveY, duration: 2, ease: "power2.out" });
    };
    
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      mainTl.kill();
      tlInit.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={sceneRef} className="relative w-full h-[3072px] bg-primary">
      <div ref={portalRef} className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black [perspective:2000px]">
        
        {/* Atmosphere: God Rays */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div ref={ray1Ref} className="god-ray absolute -top-1/2 left-1/4 w-32 h-[200%] opacity-0"></div>
          <div ref={ray2Ref} className="god-ray absolute -top-1/2 right-1/4 w-48 h-[200%] opacity-0"></div>
        </div>

        {/* Petals Container */}
        <div ref={petalsLayerRef} className="absolute inset-0 z-20 pointer-events-none"></div>

        {/* Background Scene: The Mahal Interior */}
        <div ref={palaceInteriorRef} className="absolute inset-0 z-0 opacity-0 scale-110">
          <img 
            src={INTERIOR_IMAGE} 
            alt="Palace Interior"
            className="w-full h-full object-cover brightness-75" 
          />
        </div>

        {/* 3D Gates */}
        <div className="gate-door-wrapper absolute inset-0 z-10 flex w-full h-full overflow-hidden [transform-style:preserve-3d]">
          {/* Left Gate */}
          <div ref={gateLeftRef} className="w-1/2 h-full relative origin-left bg-black border-r border-gold-leaf/20 overflow-hidden [transform-style:preserve-3d]">
            <img 
              src={leftGate} 
              alt="Left Palace Gate"
              className="absolute top-0 left-0 h-full w-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
          </div>
          
          {/* Right Gate */}
          <div ref={gateRightRef} className="w-1/2 h-full relative origin-right bg-black border-l border-gold-leaf/20 overflow-hidden [transform-style:preserve-3d]">
            <img 
              src={rightGate} 
              alt="Right Palace Gate"
              className="absolute top-0 right-0 h-full w-full object-cover" 
            />
            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
          </div>
        </div>

        {/* Center Branding */}
        <div ref={brandingOverlayRef} className="absolute inset-0 z-30 flex flex-col items-center justify-center text-center px-4 pointer-events-none">
          <h1 ref={mainTitleRef} style={{ opacity: 0, transform: "translateY(30px)" }} className="font-cinzel text-5xl md:text-[4rem] text-gold-leaf tracking-[0.1em] mb-4 leading-tight">
            <span className="text-white drop-shadow-2xl font-medium tracking-normal">Welcome To</span><br/>
            <span className="gold-text-gradient font-semibold">Ayswariya Mahal</span>
          </h1>
          
          <div ref={scrollPromptRef} style={{ opacity: 0 }} className="mt-12">
            <p className="font-cormorant text-sm md:text-base text-gold-leaf/90 tracking-[0.2em] font-medium mb-4 uppercase">
              Scroll To Enter The Legacy
            </p>
            <div className="scroll-indicator flex flex-col items-center">
              <span className="text-gold-leaf text-4xl font-light">↓</span>
            </div>
          </div>
        </div>

        {/* Final Hero Overlay (Homepage Start) */}
        <div ref={heroContentRef} className="absolute inset-0 z-40 bg-transparent flex flex-col justify-center px-8 md:px-16 opacity-0 pointer-events-none">
          <div className="max-w-2xl mt-32">
            <span className="font-cormorant text-[0.875rem] font-semibold text-gold-leaf tracking-[0.3em] uppercase block mb-4">
              Established 2001
            </span>
            <h2 className="font-cinzel text-5xl md:text-[3.5rem] text-surface-bright leading-[1.1] mb-8 font-medium">
              Where Ancestral Echoes Meet <span className="italic text-antique-gold font-normal">Eternal Vows.</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => navigate("/facilities")}
                className="bg-deep-maroon text-gold-leaf border border-gold-leaf px-8 py-3.5 font-cormorant text-[0.875rem] font-semibold uppercase tracking-[0.2em] hover:bg-gold-leaf hover:text-deep-maroon transition-all duration-500 active:opacity-80"
              >
                Explore the Grounds
              </button>
              <button 
                onClick={() => navigate("/about")}
                className="border border-gold-leaf text-gold-leaf px-8 py-3.5 font-cormorant text-[0.875rem] font-semibold uppercase tracking-[0.2em] hover:bg-gold-leaf/10 transition-all duration-500"
              >
                The Story
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
