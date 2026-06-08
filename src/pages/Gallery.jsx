import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
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

  const images = galleryData[category];

  const camera = useRef({ x: 0, vx: 0, target: 0 });
  const rafId = useRef(null);
  const snapPoints = useRef([]);
  const isInView = useRef(false);
  const wheelLock = useRef(false);

  /* =========================
     SAFE MEASURE (FIXED)
  ========================= */
  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;

    snapPoints.current = Array.from(rail.children).map(
      (el) => el.offsetLeft
    );
  }, []);

  /* =========================
     STABLE RAF LOOP (FIXED MEMORY SAFE)
  ========================= */
  useEffect(() => {
    const animate = () => {
      const rail = railRef.current;
      if (!rail) {
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      const cam = camera.current;

      // HARD LIMITS (fix jitter bug)
      const maxScroll = 3000;
      cam.target = Math.max(-maxScroll, Math.min(cam.target, maxScroll));

      const force = (cam.target - cam.x) * 0.07;

      cam.vx += force;
      cam.vx *= 0.78;
      cam.x += cam.vx;

      gsap.set(rail, {
        x: -cam.x,
        force3D: true,
        willChange: "transform",
        overwrite: "auto",
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  /* =========================
     CATEGORY SWITCH FIX (layout sync)
  ========================= */
  useEffect(() => {
    camera.current = { x: 0, vx: 0, target: 0 };

    const t = setTimeout(() => {
      measure();
    }, 200);

    return () => clearTimeout(t);
  }, [category, measure]);

  /* =========================
     RESIZE FIX
  ========================= */
  useEffect(() => {
    const onResize = () => measure();

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  /* =========================
     SAFE SCROLL CONTROL
  ========================= */
  const scrollByStep = (dir) => {
    const snap = snapPoints.current;
    if (!snap.length) return;

    const step = Math.abs(snap[1] - snap[0]) || 400;

    camera.current.target += dir * step;
  };

  /* =========================
     INTERSECTION CONTROL
  ========================= */
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

  /* =========================
     WHEEL FIX (anti-jump + throttle)
  ========================= */
  useEffect(() => {
    const onWheel = (e) => {
      if (!isInView.current) return;
      if (wheelLock.current) return;

      wheelLock.current = true;

      camera.current.target += e.deltaY * 0.45;

      setTimeout(() => {
        wheelLock.current = false;
      }, 40);
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const meta = categoryMeta[category];

  return (
    <PageTransition>
      <main className="bg-[#fdfbf7] min-h-screen">

        {/* =========================
            HERO (LOCKED - untouched)
        ========================= */}
        <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[50vh] md:min-h-[60vh] mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${gallery3})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1c0d11]/80 via-[#1c0d11]/70 to-[#4A0A12]" />

          {/* HERO TEXT ANIMATION FIXED */}
<div className="relative z-10 max-w-4xl mx-auto text-center">

  {/* Sparkles */}
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="flex justify-center mb-6 text-[#d4af37]"
  >
    <Sparkles size={24} />
  </motion.div>

  {/* SUBTITLE FIX */}
  <motion.p
    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
    transition={{
      duration: 1,
      delay: 0.15,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="font-serif text-[#E5C76B] font-bold tracking-[0.4em] uppercase text-sm mb-6 drop-shadow-md"
  >
    The Collection
  </motion.p>

  {/* MAIN TITLE FIX (PROPER SEQUENCE ANIMATION) */}
  <motion.h1
    initial="hidden"
    animate="show"
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
          delayChildren: 0.2,
        },
      },
    }}
    className="text-5xl md:text-7xl lg:text-8xl font-display text-[#fdfbf7] leading-tight drop-shadow-2xl"
  >

    {/* LINE 1 */}
    <motion.span
      initial={{ opacity: 0, y: 60, rotateX: -30 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="block"
    >
      A Gallery of
    </motion.span>

    {/* LINE 2 */}
    <motion.span
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 1,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="italic text-[#E5C76B] block"
    >
      Grandeur
    </motion.span>

  </motion.h1>
</div>
        </section>

        {/* =========================
            GALLERY RAIL (FIXED ENGINE)
        ========================= */}
        <section ref={sectionRef} className="relative h-screen overflow-hidden">

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

          {/* LEFT */}
          <button
            onClick={() => scrollByStep(-1)}
            className="absolute left-3 top-1/2 z-50 h-12 w-12 -translate-y-1/2 rounded-full border border-[#E5C76B]/60 bg-black/35 text-[#E5C76B]"
          >
            <ChevronLeft />
          </button>

          {/* RIGHT */}
          <button
            onClick={() => scrollByStep(1)}
            className="absolute right-3 top-1/2 z-50 h-12 w-12 -translate-y-1/2 rounded-full border border-[#E5C76B]/60 bg-black/35 text-[#E5C76B]"
          >
            <ChevronRight />
          </button>

          {/* RAIL */}
          <div
            ref={railRef}
            className="absolute flex gap-20 px-[25vw] h-full items-center will-change-transform"
          >
            {images.map((img, i) => (
              <div
                key={i}
                className="relative w-[320px] h-[440px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={img}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              </div>
            ))}
          </div>
        </section>

        {/* =========================
            CORRIDOR
        ========================= */}
        <section className="relative py-40 px-6 bg-[#4A0A12] overflow-hidden">

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={gallery2}
                loading="lazy"
                decoding="async"
                className="rounded-xl shadow-2xl w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <h2 className="text-5xl font-serif mb-6">
                Walking Through Visual Elegance
              </h2>

              <ul className="space-y-4 text-white/80">
                {[
                  "Curated Wedding Moments",
                  "Luxury Event Photography",
                  "Cinematic Hall Views",
                  "Decor Excellence Captured",
                  "Real Celebration Memories"
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#E5C76B]">✦</span>
                    {t}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </section>

        {/* =========================
            EXIT
        ========================= */}
        <section className="h-[40vh] flex items-center justify-center bg-[#fcf9f4]">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-serif text-[#4A0A12]">
              End of Visual Journey
            </h2>
            <p className="text-gray-600 mt-2">
              Ayswariya Mahal — Every frame tells a royal story
            </p>
          </motion.div>

        </section>

      </main>
    </PageTransition>
  );
}