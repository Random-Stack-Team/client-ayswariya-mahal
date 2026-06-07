import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import gsap from "gsap";

/* =========================
   IMAGES
========================= */
import gallery1 from "../assets/images/Gallery/hall1.jpg";
import gallery2 from "../assets/images/Gallery/hall2.jpg";
import gallery3 from "../assets/images/Gallery/hall3.jpg";
import gallery4 from "../assets/images/Gallery/hall4.jpeg";
import gallery5 from "../assets/images/Gallery/hall5.png";
import gallery6 from "../assets/images/Gallery/decor1.png";
import gallery7 from "../assets/images/Gallery/decor2.png";
import gallery8 from "../assets/images/Gallery/decor3.png";
import gallery9 from "../assets/images/Gallery/decor4.png";
import gallery10 from "../assets/images/Gallery/decor5.png";
import gallery11 from "../assets/images/Gallery/memories1.png";
import gallery12 from "../assets/images/Gallery/memories2.webp";
import gallery13 from "../assets/images/Gallery/memories3.webp";
import gallery14 from "../assets/images/Gallery/memories4.webp";
import gallery15 from "../assets/images/Gallery/memories5.webp";


/* =========================
   DATA
========================= */
const galleryData = {
  hall: [gallery1, gallery2, gallery3, gallery4, gallery5],
  decor: [gallery6, gallery7, gallery8, gallery9, gallery10],
  memories: [gallery11, gallery12, gallery13, gallery14, gallery15],
};

const categoryMeta = {
  hall: { title: "Hall Experience", subtitle: "Architectural Grandeur" },
  decor: { title: "Decor Experience", subtitle: "Art of Celebration" },
  memories: { title: "Memory Lane", subtitle: "Moments to Cherish" },
};

export default function Facilities() {
  const railRef = useRef(null);
  const sectionRef = useRef(null);

  const [category, setCategory] = useState("hall");
  const [activeIndex, setActiveIndex] = useState(0);

  const images = galleryData[category];

  const camera = useRef({ x: 0, vx: 0, target: 0 });
  const rafId = useRef(null);
  const snapPoints = useRef([]);
  const isInView = useRef(false);

  /* =========================
     MEASURE
  ========================= */
  const measure = () => {
    const rail = railRef.current;
    if (!rail) return;

    snapPoints.current = Array.from(rail.children).map(
      (el) => el.offsetLeft
    );
  };

  /* =========================
     CAMERA LOOP
  ========================= */
  const animate = () => {
    const rail = railRef.current;
    if (!rail) {
      rafId.current = requestAnimationFrame(animate);
      return;
    }

    const cam = camera.current;

    const force = (cam.target - cam.x) * 0.1;
    cam.vx += force;
    cam.vx *= 0.78;
    cam.x += cam.vx;

    gsap.set(rail, {
      x: -cam.x,
      force3D: true,
    });

    const snap = snapPoints.current;

    let closest = 0;
    let min = Infinity;

    for (let i = 0; i < snap.length; i++) {
      const d = Math.abs(cam.x - snap[i]);
      if (d < min) {
        min = d;
        closest = i;
      }
    }

    setActiveIndex(closest);

    rafId.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, []);

  useEffect(() => {
    camera.current = { x: 0, vx: 0, target: 0 };
    setActiveIndex(0);
    requestAnimationFrame(measure);
  }, [category]);

  const scrollByStep = (dir) => {
    const snap = snapPoints.current;
    if (!snap.length) return;

    const step = snap[1] - snap[0] || 400;
    camera.current.target += dir * step;
  };

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting;
      },
      { threshold: 0.4 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onWheel = (e) => {
      if (!isInView.current) return;
      camera.current.target += e.deltaY * 0.9;
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const meta = categoryMeta[category];

  return (
    <main className="bg-[#fdfbf7] min-h-screen">

      {/* HERO (unchanged) */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[50vh] md:min-h-[60vh] mb-16">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${gallery3})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c0d11]/80 via-[#1c0d11]/70 to-[#4A0A12]" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div className="flex justify-center mb-6 text-[#d4af37]">
            <Sparkles size={24} />
          </motion.div>

          <motion.p className="font-serif text-[#E5C76B] font-bold tracking-[0.4em] uppercase text-sm mb-6">
            The Collection
          </motion.p>

          <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-display text-[#fdfbf7] leading-tight">
            A Gallery of <br />
            <span className="italic text-[#E5C76B]">Grandeur</span>
          </motion.h1>
        </div>
      </section>

      {/* GALLERY */}
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden"
      >

        {/* CATEGORY */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
          {Object.keys(galleryData).map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`px-4 py-1 rounded-full text-sm ${
                category === item
                  ? "bg-[#E5C76B] text-black"
                  : "text-black/70"
              }`}
            >
              {item.toUpperCase()}
            </button>
          ))}
        </div>

        {/* TITLE */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-20">
          <h2 className="text-2xl text-[#E5C76B]">{meta.title}</h2>
          <p className="text-sm opacity-70">{meta.subtitle}</p>
        </div>

        {/* =========================
            LEFT BUTTON (FIXED TO GALLERY EDGE)
        ========================= */}
        <button
          onClick={() => scrollByStep(-1)}
          className="button absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[999]"
        >
          <div className="button-box">
            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/>
              </svg>
            </span>

            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/>
              </svg>
            </span>
          </div>
        </button>

        {/* =========================
            RIGHT BUTTON (FIXED TO GALLERY EDGE)
        ========================= */}
        <button
          onClick={() => scrollByStep(1)}
          className="button rotate-180 absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[999]"
        >
          <div className="button-box">
            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/>
              </svg>
            </span>

            <span className="button-elem">
              <svg viewBox="0 0 46 40">
                <path d="M46 20.038c0-.7-.3-1.5-.8-2.1l-16-17c-1.1-1-3.2-1.4-4.4-.3-1.2 1.1-1.2 3.3 0 4.4l11.3 11.9H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h33.1l-11.3 11.9c-1 1-1.2 3.3 0 4.4 1.2 1.1 3.3.8 4.4-.3l16-17c.5-.5.8-1.1.8-1.9z"/>
              </svg>
            </span>
          </div>
        </button>

        {/* RAIL */}
        <div
          ref={railRef}
          className="absolute flex gap-20 px-[25vw] h-full items-center will-change-transform"
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="relative w-[320px] h-[440px] flex-shrink-0 rounded-2xl overflow-hidden"
            >
              <img src={img} className="w-full h-full object-cover scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}