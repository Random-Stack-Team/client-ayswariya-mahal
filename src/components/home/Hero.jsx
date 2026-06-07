import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import heroImage from "../../assets/images/hero.webp";

export default function Hero() {
  const textRef = useRef(null);
  const imageWrapperRef = useRef(null);

  const navigate = useNavigate();

  // 🎬 GSAP INTRO (FIXED + SAFE)
useEffect(() => {
  const tl = gsap.timeline();

  const image = imageWrapperRef.current;
  const textElements = textRef.current?.children;

  if (!image || !textElements) return;

  // Set initial states (important for consistency)
  gsap.set(image, { opacity: 0, scale: 1.2, filter: "blur(10px)" });
  gsap.set(textElements, { opacity: 0, y: 80, rotateX: 20 });

  // Background animation
  tl.to(image, {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    duration: 2,
    ease: "power3.out",
  });

  // Text animation
  tl.to(
    textElements,
    {
      opacity: 1,
      y: 0,
      rotateX: 0,
      stagger: 0.12,
      duration: 1.2,
      ease: "power3.out",
    },
    "-=1"
  );
}, []);

  // 🌊 SMOOTH PARALLAX (FIXED - NO JUMPING)
  useEffect(() => {
  let currentY = 0;
  let targetY = 0;

  const handleScroll = () => {
    targetY = window.scrollY;
  };

  const animate = () => {
    currentY += (targetY - currentY) * 0.06;

    if (imageWrapperRef.current) {
      imageWrapperRef.current.style.transform =
        `translate3d(0, ${currentY * 0.2}px, 0)`;
    }

    requestAnimationFrame(animate);
  };

  window.addEventListener("scroll", handleScroll);
  animate();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <section className="relative h-screen overflow-hidden">

      {/* 🖼️ Background */}
      <div ref={imageWrapperRef} className="absolute inset-0 w-full h-full overflow-hidden">
  <img
    src={heroImage}
    alt="Ayswariya Mahal"
    className="w-full h-full object-cover scale-110 will-change-transform"
  />
</div>

      {/* 🌑 Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70" />

      {/* ✨ Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">

        <div ref={textRef} className="text-white">

          <p className="uppercase tracking-[0.4em] text-white/70 mb-4">
            Since 2001
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display drop-shadow-2xl">
            Ayswariya Mahal
          </h1>

          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">
            Luxury Wedding Venue • Timeless Celebrations • Premium Experience
          </p>

          <div className="mt-10 flex gap-4 justify-center">

            <button
         onClick={() => navigate("/facilities")}
         className="px-8 py-4 bg-gold-leaf text-white rounded-2xl hover:scale-105 transition"
         >
          Explore Venue
         </button>

          <button
         onClick={() => navigate("/contact")}
         className="px-8 py-4 border border-white text-white rounded-2xl hover:bg-white hover:text-black transition"
         >
          Plan Your Event
         </button>

          </div>

        </div>

      </div>

    </section>
  );
}