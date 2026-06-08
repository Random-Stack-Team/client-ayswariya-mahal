import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import PageTransition from "../components/common/PageTransition";

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

export default function Gallery() {
  const railRef = useRef(null);
  const [category, setCategory] = useState("hall");
  const images = galleryData[category];

  const camera = useRef({ x: 0, vx: 0, target: 0 });
  const rafId = useRef(null);
  const snapPoints = useRef([]);
  const isInView = useRef(false);

  /* ======================================================
     SAFE MEASURE (FIXED)
  ====================================================== */
  const measure = useCallback(() => {
  const meta = categoryMeta[category];

  const scrollByStep = (dir) => {
    const rail = railRef.current;
    if (!rail) return;

    snapPoints.current = Array.from(rail.children).map(
      (el) => el.offsetLeft
    );
  }, []);

  /* ======================================================
     RAIL ENGINE (FIXED STABILITY)
  ====================================================== */
  useEffect(() => {

    const animate = () => {

      const rail = railRef.current;
      if (!rail) {
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      const cam = camera.current;

      // ❗ LIMIT DRIFT (BUG FIX)
      cam.target = Math.max(-2000, Math.min(cam.target, 2000));

      const force = (cam.target - cam.x) * 0.08;

      cam.vx += force;
      cam.vx *= 0.82;
      cam.x += cam.vx;

      // ❗ SAFE GSAP UPDATE (NO OVERWRITE BUG)
      gsap.set(rail, {
        x: -cam.x,
        overwrite: "auto",
        force3D: true,
      });

      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId.current);

  }, []);

  /* ======================================================
     CATEGORY RESET (FIXED TIMING ISSUE)
  ====================================================== */
  useEffect(() => {
    camera.current = { x: 0, vx: 0, target: 0 };

    // FIX: wait DOM render
    setTimeout(() => measure(), 100);

  }, [category, measure]);

  /* ======================================================
     RESIZE FIX (IMPORTANT BUG FIX)
  ====================================================== */
  useEffect(() => {
    const handleResize = () => measure();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, [measure]);

  /* ======================================================
     SCROLL CONTROL
  ====================================================== */
  const scrollByStep = (dir) => {
    const snap = snapPoints.current;
    if (!snap.length) return;

    const step = snap[1] - snap[0] || 400;
    camera.current.target += dir * step;
  };

  /* ======================================================
     WHEEL CONTROL (SAFE)
  ====================================================== */
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

      camera.current.target += e.deltaY * 0.6; // smoother (bug fix)
    };

    window.addEventListener("wheel", onWheel, { passive: true });

    return () => window.removeEventListener("wheel", onWheel);

  }, []);

  const meta = categoryMeta[category];
    rail.scrollBy({ left: dir * Math.min(460, window.innerWidth * 0.72), behavior: "smooth" });
  };

  return (
    <PageTransition>
      <main className="bg-[#fdfbf7] min-h-screen">

        {/* =========================
            HERO (UNCHANGED)
        ========================= */}
        <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[50vh] md:min-h-[60vh] mb-16">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{ backgroundImage: `url(${gallery3})` }}
          />

          <div className="absolute inset-0 bg-gradient-to-b from-[#1c0d11]/80 via-[#1c0d11]/70 to-[#4A0A12]" />
      <main className="min-h-screen bg-[#fdfbf7]">
        <section className="relative mb-10 flex min-h-[50vh] items-center justify-center overflow-hidden px-6 pb-28 pt-40 md:min-h-[60vh]">
          <img
            src={gallery3}
            alt="Ayswariya Mahal gallery"
            loading="eager"
            fetchPriority="high"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/78 via-[#3F0C15]/62 to-[#5A111C]" />

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
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 flex justify-center text-[#d4af37]">
              <Sparkles size={24} />
            </div>
            <p className="mb-6 font-serif text-sm font-bold uppercase tracking-[0.4em] text-[#E5C76B]">
              The Collection
            </p>
            <h1 className="font-display text-5xl leading-tight text-[#fdfbf7] md:text-7xl lg:text-8xl">
              A Gallery of <br />
              <span className="italic text-[#E5C76B]">Grandeur</span>
            </h1>
          </motion.div>
        </section>

        {/* =========================
            GALLERY RAIL
        ========================= */}
        <section
          ref={sectionRef}
          className="relative h-screen overflow-hidden"
        >

          {/* CATEGORY SWITCH */}
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
        <section className="relative min-h-screen overflow-hidden">
          <div className="absolute left-1/2 top-6 z-30 flex -translate-x-1/2 gap-2 rounded-full bg-white/70 px-5 py-2 shadow-[0_18px_44px_rgba(122,27,41,0.1)] backdrop-blur-md">
            {Object.keys(galleryData).map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-full px-4 py-1 font-serif text-xs font-bold uppercase tracking-[0.16em] transition duration-500 ${
                  category === item ? "bg-[#E5C76B] text-[#5A111C]" : "text-[#4a3623]/70 hover:text-[#6A1724]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* TITLE */}
          <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center z-20">
            <h2 className="text-2xl text-[#E5C76B]">{meta.title}</h2>
            <p className="text-sm opacity-70">{meta.subtitle}</p>
          </div>
          <div className="absolute left-1/2 top-24 z-20 -translate-x-1/2 text-center">
            <h2 className="font-display text-2xl text-[#6A1724]">{meta.title}</h2>
            <p className="font-serif text-sm text-[#4a3623]/70">{meta.subtitle}</p>
          </div>

          {/* NAV BUTTONS */}
          <button
          onClick={() => scrollByStep(-1)}
          className="absolute left-2 top-1/2 z-[999] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#E5C76B]/60 bg-black/35 text-[#E5C76B] backdrop-blur-md transition duration-300 hover:bg-[#801c2c] hover:text-white sm:left-6"
          aria-label="Previous gallery item"
        >
          <ChevronLeft size={24} strokeWidth={1.7} />
        </button>
          <button
            onClick={() => scrollByStep(-1)}
            className="absolute left-2 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#E5C76B]/70 bg-[#5A111C]/72 text-[#E5C76B] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white sm:left-6"
            aria-label="Previous gallery item"
          >
            <ChevronLeft size={24} strokeWidth={1.7} />
          </button>

          <button
          onClick={() => scrollByStep(1)}
          className="absolute right-2 top-1/2 z-[999] grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#E5C76B]/60 bg-black/35 text-[#E5C76B] backdrop-blur-md transition duration-300 hover:bg-[#801c2c] hover:text-white sm:right-6"
          aria-label="Next gallery item"
        >
          <ChevronRight size={24} strokeWidth={1.7} />
        </button>
          <button
            onClick={() => scrollByStep(1)}
            className="absolute right-2 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#E5C76B]/70 bg-[#5A111C]/72 text-[#E5C76B] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white sm:right-6"
            aria-label="Next gallery item"
          >
            <ChevronRight size={24} strokeWidth={1.7} />
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
    GALLERY EXPERIENCE SECTION
========================= */}
<section className="relative py-40 px-6 bg-[#4A0A12] overflow-hidden">

  <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <img
        src={gallery1}
        loading="lazy"
        alt="Gallery Experience"
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
    GALLERY EXIT SECTION
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


          <div
            ref={railRef}
            className="custom-scrollbar flex min-h-screen snap-x snap-mandatory gap-8 overflow-x-auto overflow-y-hidden scroll-smooth px-[10vw] py-40 md:gap-12 md:px-[18vw]"
          >
            {images.map((img, index) => (
              <motion.div
                key={`${category}-${img}`}
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.24 }}
                transition={{ duration: 0.85, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="luxury-image-overlay relative h-[440px] w-[min(78vw,340px)] flex-shrink-0 snap-center overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(122,27,41,0.16)]"
              >
                <img
                  src={img}
                  alt={`${meta.title} ${index + 1}`}
                  loading="lazy"
                  className="block h-full w-full object-cover object-center transition-transform duration-[1400ms] hover:scale-105"
                  onError={(event) => {
                    event.currentTarget.style.opacity = "0";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-black/10" />
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
}