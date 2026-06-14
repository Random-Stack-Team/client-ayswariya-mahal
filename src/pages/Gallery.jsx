import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import PageTransition from "../components/common/PageTransition";
import SEO from "../components/common/SEO";
import { useEnquiry } from "../context/useEnquiry";

import gallery1 from "../assets/images/Gallery/hall1.webp";
import gallery2 from "../assets/images/Gallery/hall2.webp";
import gallery3 from "../assets/images/Gallery/hall3.webp";
import gallery4 from "../assets/images/Gallery/hall4.webp";
import gallery5 from "../assets/images/Gallery/hall5.webp";
import gallery6 from "../assets/images/Gallery/decor1.webp";
import gallery7 from "../assets/images/Gallery/decor2.webp";
import gallery8 from "../assets/images/Gallery/decor3.webp";
import gallery9 from "../assets/images/Gallery/decor4.webp";
import gallery10 from "../assets/images/Gallery/decor5.webp";
import gallery11 from "../assets/images/Gallery/memories1.webp";
import gallery12 from "../assets/images/Gallery/memories2.webp";
import gallery13 from "../assets/images/Gallery/memories3.webp";
import gallery14 from "../assets/images/Gallery/memories4.webp";
import gallery15 from "../assets/images/Gallery/memories5.webp";

const galleryData = {
  hall: [
    { src: gallery1, width: 1333, height: 1000 },
    { src: gallery2, width: 1500, height: 996 },
    { src: gallery3, width: 4000, height: 3000 },
    { src: gallery4, width: 1024, height: 768 },
    { src: gallery5, width: 1448, height: 1086 },
  ],
  decor: [
    { src: gallery6, width: 1537, height: 1023 },
    { src: gallery7, width: 1537, height: 1023 },
    { src: gallery8, width: 1537, height: 1023 },
    { src: gallery9, width: 1254, height: 1254 },
    { src: gallery10, width: 1122, height: 1402 },
  ],
  memories: [
    { src: gallery11, width: 1023, height: 1537 },
    { src: gallery12, width: 1360, height: 907 },
    { src: gallery13, width: 662, height: 496 },
    { src: gallery14, width: 1360, height: 1020 },
    { src: gallery15, width: 765, height: 1020 },
  ],
};

const categoryMeta = {
  hall: { title: "Hall Experience", subtitle: "Architectural Grandeur" },
  decor: { title: "Decor Experience", subtitle: "Art of Celebration" },
  memories: { title: "Memory Lane", subtitle: "Moments to Cherish" },
};

export default function Gallery() {
  const railRef = useRef(null);
  const { openForm } = useEnquiry();
  const sectionRef = useRef(null);
  const camera = useRef({ x: 0, vx: 0, target: 0 });
  const rafId = useRef(null);
  const snapPoints = useRef([]);
  const isInView = useRef(false);
  const wheelLock = useRef(false);
  const [category, setCategory] = useState("hall");

  const images = galleryData[category];
  const meta = categoryMeta[category];

  const measure = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    snapPoints.current = Array.from(rail.children).map((el) => el.offsetLeft);
  }, []);

  useEffect(() => {
    const animate = () => {
      const rail = railRef.current;
      if (!rail) {
        rafId.current = requestAnimationFrame(animate);
        return;
      }

      const cam = camera.current;
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

  useEffect(() => {
    camera.current = { x: 0, vx: 0, target: 0 };
    const timeoutId = setTimeout(measure, 200);
    return () => clearTimeout(timeoutId);
  }, [category, measure]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

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
    const onWheel = (event) => {
      if (!isInView.current || wheelLock.current) return;
      wheelLock.current = true;
      camera.current.target += event.deltaY * 0.45;
      setTimeout(() => {
        wheelLock.current = false;
      }, 40);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);

  const scrollByStep = (dir) => {
    const snap = snapPoints.current;
    if (!snap.length) return;
    const step = Math.abs(snap[1] - snap[0]) || 400;
    camera.current.target += dir * step;
  };

  return (
    <>
      <SEO
        title="Wedding Gallery - Hall, Decor & Celebrations"
        description="View the Ayswariya Mahal wedding gallery featuring elegant halls, traditional decor, celebration moments, and premium event spaces for weddings and receptions in Chennai."
        path="/gallery"
      />
      <PageTransition>
        <main className="min-h-screen overflow-hidden bg-[#fdfbf7]">
          <section className="relative mb-16 flex min-h-[50vh] items-center justify-center overflow-hidden px-6 pb-32 pt-40 md:min-h-[60vh]">
            <div
              className="absolute inset-0 bg-cover bg-center bg-fixed"
              style={{ backgroundImage: `url(${gallery3})` }}
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] bg-[linear-gradient(180deg,rgba(253,251,247,0)_0%,rgba(253,251,247,0.12)_24%,rgba(253,251,247,0.42)_58%,rgba(253,251,247,1)_100%)]" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6 flex justify-center text-[#d4af37]"
              >
                <Sparkles size={24} />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 type-eyebrow text-[#E5C76B] drop-shadow-md"
              >
                The Collection
              </motion.p>

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
                className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl"
              >
                <motion.span
                  initial={{ opacity: 0, y: 60, rotateX: -30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  A Gallery of
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 60, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="block italic text-[#E5C76B]"
                >
                  Grandeur
                </motion.span>
              </motion.h1>
            </div>
          </section>

          <section ref={sectionRef} className="relative h-screen overflow-hidden">
            <div className="absolute left-1/2 top-6 z-30 flex -translate-x-1/2 gap-2 rounded-full bg-white/20 px-5 py-2 shadow-[0_18px_44px_rgba(122,27,41,0.1)] backdrop-blur-md">
              {Object.keys(galleryData).map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-1 font-body text-sm font-medium uppercase tracking-[0.08em] transition duration-500 ${
                    category === item ? "bg-[#E5C76B] text-[#5A111C]" : "text-[#4a3623]/70 hover:text-[#6A1724]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="absolute left-1/2 top-24 z-20 -translate-x-1/2 text-center">
              <h2 className="font-serif text-2xl font-semibold leading-[1.2] tracking-[0.01em] text-[#6A1724]">
                {meta.title}
              </h2>
              <p className="type-small text-[#4a3623]/76">{meta.subtitle}</p>
            </div>

            <button
              onClick={() => scrollByStep(-1)}
              className="absolute left-3 top-1/2 z-50 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#E5C76B]/60 bg-black/35 text-[#E5C76B] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white"
              aria-label="Previous gallery item"
            >
              <ChevronLeft size={24} strokeWidth={1.7} />
            </button>

            <button
              onClick={() => scrollByStep(1)}
              className="absolute right-3 top-1/2 z-50 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-[#E5C76B]/60 bg-black/35 text-[#E5C76B] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white"
              aria-label="Next gallery item"
            >
              <ChevronRight size={24} strokeWidth={1.7} />
            </button>

            <div ref={railRef} className="absolute flex h-full items-center gap-20 px-[25vw] will-change-transform">
              {images.map((img, index) => (
                <motion.div
                  key={`${category}-${img.src}`}
                  initial={{ opacity: 0, y: 34 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 0.85, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="luxury-image-overlay relative h-[440px] w-[min(78vw,340px)] flex-shrink-0 overflow-hidden rounded-2xl shadow-[0_24px_60px_rgba(122,27,41,0.16)]"
                >
                  <img
                    src={img.src}
                    alt={`${meta.title} ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    width={img.width}
                    height={img.height}
                    className="block h-full w-full scale-110 object-cover object-center transition-transform duration-[1400ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
                </motion.div>
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#4A0A12] px-6 py-40">
            <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1 }}
              >
                <img
                  src={gallery2}
                  loading="lazy"
                  decoding="async"
                  width="1500"
                  height="996"
                  alt="Ayswariya Mahal visual elegance"
                  className="h-full w-full rounded-xl object-cover shadow-2xl"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1 }}
                className="text-white"
              >
                <h2 className="mb-6 font-serif text-[32px] font-semibold leading-[1.2] tracking-[0.01em] md:text-5xl">
                  Walking Through Visual Elegance
                </h2>

                <ul className="space-y-4 type-body text-white/84">
                  {[
                    "Curated Wedding Moments",
                    "Luxury Event Photography",
                    "Cinematic Hall Views",
                    "Decor Excellence Captured",
                    "Real Celebration Memories",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-[#E5C76B]">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          <section className="flex h-[40vh] items-center justify-center bg-[#fcf9f4]">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center">
              <h2 className="font-serif text-[32px] font-semibold leading-[1.2] tracking-[0.01em] text-[#4A0A12] md:text-5xl">
                Imagine Your Event Here
              </h2>
              <p className="mt-2 type-body text-[#4f4038]">Every celebration at Ayswariya Mahal becomes a story worth sharing.</p>
              <div className="mt-6">
                <button onClick={openForm} className="px-8 py-3 bg-[#d4af37] text-[#3F0C15] font-semibold rounded-full hover:bg-[#e5c76b] transition-colors duration-300">
                  Enquire Now
                </button>
              </div>
            </motion.div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}
