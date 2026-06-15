import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import PageTransition from "../components/common/PageTransition";
import SEO from "../components/common/SEO";

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
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const railRef = useRef(null);
  const sectionRef = useRef(null);
  const camera = useRef({ x: 0, vx: 0, target: 0 });
  const rafId = useRef(null);
  const snapPoints = useRef([]);
  const maxScroll = useRef(0);
  const isInView = useRef(false);
  const touchStart = useRef({ x: 0, y: 0, target: 0 });
  const [category, setCategory] = useState("hall");

  const images = galleryData[category];
  const meta = categoryMeta[category];

  const measure = useCallback(() => {
    const rail = railRef.current;
    const section = sectionRef.current;
    if (!rail || !section) return;
    snapPoints.current = Array.from(rail.children).map((el) => el.offsetLeft);
    maxScroll.current = Math.max(0, rail.scrollWidth - section.clientWidth);
    camera.current.target = Math.max(0, Math.min(camera.current.target, maxScroll.current));
  }, []);

  const startSliderAnimation = useCallback(() => {
    if (rafId.current) return;

    const animate = () => {
      const rail = railRef.current;
      if (!rail) {
        rafId.current = null;
        return;
      }

      const cam = camera.current;
      cam.target = Math.max(0, Math.min(cam.target, maxScroll.current));

      const force = (cam.target - cam.x) * 0.12;
      cam.vx = (cam.vx + force) * 0.72;
      cam.x += cam.vx;

      const distance = Math.abs(cam.target - cam.x);
      if (distance < 0.35 && Math.abs(cam.vx) < 0.35) {
        cam.x = cam.target;
        cam.vx = 0;
        rail.style.transform = `translate3d(${-cam.x}px, 0, 0)`;
        rafId.current = null;
        return;
      }

      rail.style.transform = `translate3d(${-cam.x}px, 0, 0)`;
      rafId.current = requestAnimationFrame(animate);
    };

    rafId.current = requestAnimationFrame(animate);
  }, []);

  const moveSlider = useCallback((delta) => {
    const cam = camera.current;
    const next = Math.max(0, Math.min(cam.target + delta, maxScroll.current));
    const moved = Math.abs(next - cam.target) > 0.5;
    cam.target = next;
    if (moved) startSliderAnimation();
    return moved;
  }, [startSliderAnimation]);

  useEffect(() => () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
  }, []);

  useEffect(() => {
    camera.current = { x: 0, vx: 0, target: 0 };
    maxScroll.current = 0;
    if (railRef.current) {
      railRef.current.style.transform = "translate3d(0, 0, 0)";
    }
    const timeoutId = setTimeout(() => {
      measure();
      startSliderAnimation();
    }, 120);
    return () => clearTimeout(timeoutId);
  }, [category, measure, startSliderAnimation]);

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
    const section = sectionRef.current;
    if (!section) return undefined;

    const onWheel = (event) => {
      if (!isInView.current || maxScroll.current <= 0) return;

      const dominantDelta = Math.abs(event.deltaY) >= Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (Math.abs(dominantDelta) < 1) return;

      const atStart = camera.current.target <= 1;
      const atEnd = camera.current.target >= maxScroll.current - 1;
      const canConsume = (dominantDelta > 0 && !atEnd) || (dominantDelta < 0 && !atStart);

      if (!canConsume) return;
      moveSlider(dominantDelta * 0.7);
    };

    section.addEventListener("wheel", onWheel, { passive: true });
    return () => section.removeEventListener("wheel", onWheel);
  }, [moveSlider]);

  const scrollByStep = (dir) => {
    const snap = snapPoints.current;
    if (!snap.length) return;
    const step = Math.abs(snap[1] - snap[0]) || 400;
    moveSlider(dir * step);
  };

  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY, target: camera.current.target };
  };

  const handleTouchMove = (event) => {
    const touch = event.touches[0];
    const dx = touchStart.current.x - touch.clientX;
    const dy = touchStart.current.y - touch.clientY;
    if (Math.abs(dx) <= Math.abs(dy) || Math.abs(dx) < 8) return;

    const next = Math.max(0, Math.min(touchStart.current.target + dx, maxScroll.current));
    if (next !== camera.current.target) {
      camera.current.target = next;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollByStep(1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollByStep(-1);
    }
  };

  return (
    <>
      <SEO
        title="Wedding Gallery - Hall, Decor & Celebrations"
        description="View the Ayswariya Mahal wedding gallery featuring elegant halls, traditional decor, celebration moments, and premium event spaces for weddings and receptions in Chennai."
        path="/gallery"
      />
      <PageTransition>
        <main className="min-h-screen overflow-x-clip bg-[#fdfbf7] wedding-pattern-ivory">
          <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-5 pb-24 pt-32 sm:px-6 md:min-h-[600px] md:pb-28 md:pt-36 lg:min-h-[60vh] lg:pb-36 lg:pt-40">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${gallery3})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c0d11]/80 via-[#1c0d11]/70 to-[#4A0A12]" />
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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
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
                className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl md:max-lg:text-[60px]"
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

          <section
            ref={sectionRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="relative flex min-h-screen flex-col overflow-hidden bg-[radial-gradient(circle_at_50%_8%,rgba(229,199,107,0.22),transparent_30%),linear-gradient(180deg,#fdfbf7_0%,#fbf3e7_52%,#f8efe1_100%)] px-4 pb-16 pt-10 outline-none md:px-8 md:pb-[72px] md:pt-12 lg:pb-24 lg:pt-16"
            aria-label="Scrollable wedding gallery slider"
          >
            <div className="relative z-30 mx-auto flex max-w-5xl flex-col items-center text-center">
              <div className="flex w-full justify-center">
                <div className="grid grid-cols-3 gap-1 rounded-full border border-[#E5C76B]/35 bg-white/72 p-1 shadow-[0_18px_44px_rgba(122,27,41,0.12)] backdrop-blur-md">
                  {Object.keys(galleryData).map((item) => (
                    <button
                      key={item}
                      onClick={() => setCategory(item)}
                      className={`rounded-full px-3 py-2 font-body text-xs font-semibold uppercase tracking-[0.08em] transition duration-500 sm:px-5 sm:text-sm ${
                        category === item
                          ? "bg-[#E5C76B] text-[#5A111C] shadow-[0_8px_22px_rgba(201,151,59,0.28)]"
                          : "text-[#4a3623]/70 hover:bg-[#6A1724]/8 hover:text-[#6A1724]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 max-w-2xl md:mt-10 lg:mt-14">
                <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-[#C9973B] to-transparent" />
                <p className="type-eyebrow mb-3 text-[#C9973B]">{meta.subtitle}</p>
                <h2 className="font-serif text-[34px] font-semibold leading-[1.08] tracking-[0.01em] text-[#6A1724] md:text-[42px] lg:text-5xl">
                  {meta.title}
                </h2>
              </div>
            </div>

            <div
              ref={railRef}
              className="relative z-10 mt-10 flex h-[min(50vh,430px)] items-center gap-8 px-[18vw] will-change-transform sm:gap-12 md:mt-12 md:h-[390px] md:gap-12 md:px-[18vw] lg:mt-16 lg:h-[min(54vh,470px)] lg:gap-20 lg:px-[25vw]"
            >
              {images.map((img, index) => (
                <motion.div
                  key={`${category}-${img.src}`}
                  {...(isDesktop ? { initial: { opacity: 0, y: 34 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.24 }, transition: { duration: 0.85, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] } } : {})}
                  className="luxury-image-frame luxury-image-overlay relative h-[min(50vh,430px)] w-[min(76vw,340px)] flex-shrink-0 overflow-hidden rounded-xl shadow-[0_28px_70px_rgba(122,27,41,0.18)] transition duration-500 hover:-translate-y-1 md:h-[390px] md:w-[min(38vw,320px)] lg:h-[min(54vh,470px)] lg:w-[min(76vw,360px)]"
                >
                  <img
                    src={img.src}
                    alt={`${meta.title} ${index + 1}`}
                    loading="lazy"
                    decoding="async"
                    width={img.width}
                    height={img.height}
                    className="block h-full w-full object-cover object-center transition-transform duration-[1400ms] hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1c0d11]/58 via-transparent to-[#1c0d11]/8" />
                </motion.div>
              ))}
            </div>

            <div className="relative z-30 mt-8 flex justify-center gap-4 lg:pointer-events-none lg:absolute lg:inset-x-0 lg:top-[68%] lg:mt-0 lg:block">
              <button
                onClick={() => scrollByStep(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#E5C76B]/60 bg-[#4A0A12]/80 text-[#E5C76B] shadow-[0_14px_34px_rgba(63,12,21,0.22)] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white md:h-12 md:w-12 lg:pointer-events-auto lg:absolute lg:left-8 lg:-translate-y-1/2"
                aria-label="Previous gallery item"
              >
                <ChevronLeft size={24} strokeWidth={1.7} />
              </button>

              <button
                onClick={() => scrollByStep(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#E5C76B]/60 bg-[#4A0A12]/80 text-[#E5C76B] shadow-[0_14px_34px_rgba(63,12,21,0.22)] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white md:h-12 md:w-12 lg:pointer-events-auto lg:absolute lg:right-8 lg:-translate-y-1/2"
                aria-label="Next gallery item"
              >
                <ChevronRight size={24} strokeWidth={1.7} />
              </button>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#4A0A12] wedding-pattern-maroon px-5 py-16 sm:px-6 md:py-20 lg:py-40">
            <div className="relative mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-3xl text-center"
              >
                <p className="type-eyebrow mb-5 text-[#E5C76B]">Official Venue Film</p>
                <h2 className="font-serif text-[34px] font-semibold leading-[1.15] tracking-[0.01em] text-[#fdfbf7] md:text-[44px] lg:text-[58px]">
                  Experience Ayswariya Mahal
                </h2>
                <div className="mx-auto my-7 h-px w-24 bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent md:my-8" />
                <p className="font-serif text-[22px] font-medium italic leading-[1.45] text-[#E5C76B] md:text-[28px]">
                  Elegant wedding moments, grand celebrations, and timeless memories.
                </p>
                <p className="mx-auto mt-6 max-w-3xl type-body text-[#fdfbf7]/78">
                  Step inside Ayswariya Mahal and experience the elegance, grandeur, and warm hospitality that make every celebration unforgettable. From traditional weddings and receptions to family gatherings and special occasions, discover the spaces where cherished memories come to life.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.95, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-10 max-w-5xl md:mt-12 lg:mt-16"
              >
                <div className="relative overflow-hidden rounded-[28px] border border-[#E5C76B]/46 bg-[#fdfbf7]/8 p-2 shadow-[0_28px_80px_rgba(0,0,0,0.34),inset_0_0_0_1px_rgba(255,255,255,0.08)] sm:p-3 md:rounded-[34px]">
                  <span className="pointer-events-none absolute left-5 top-5 z-20 h-9 w-9 border-l border-t border-[#E5C76B]/70" />
                  <span className="pointer-events-none absolute right-5 top-5 z-20 h-9 w-9 border-r border-t border-[#E5C76B]/70" />
                  <span className="pointer-events-none absolute bottom-5 left-5 z-20 h-9 w-9 border-b border-l border-[#E5C76B]/70" />
                  <span className="pointer-events-none absolute bottom-5 right-5 z-20 h-9 w-9 border-b border-r border-[#E5C76B]/70" />

                  <div className="relative aspect-video overflow-hidden rounded-[22px] bg-[#1c0d11] md:rounded-[26px]">
                    <iframe
                      src="https://www.youtube.com/embed/SFc9F625Enk"
                      title="Experience Ayswariya Mahal official venue video"
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto mt-8 flex max-w-3xl flex-col items-center gap-5 text-center md:mt-10"
              >
                <p className="type-body text-[#fdfbf7]/78">
                  Take a virtual tour of our venue and explore the spaces that have hosted countless memorable celebrations.
                </p>
                <a
                  href="https://youtu.be/SFc9F625Enk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#E5C76B]/52 px-7 font-sans text-[12px] font-medium uppercase tracking-[0.14em] text-[#E5C76B] transition duration-300 hover:bg-[#E5C76B] hover:text-[#4A0A12]"
                >
                  Watch on YouTube
                </a>
              </motion.div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}
