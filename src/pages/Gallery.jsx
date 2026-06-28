import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, Flower2, Landmark, Sparkles, UtensilsCrossed } from "lucide-react";
import PageTransition from "../components/common/PageTransition";
import SEO from "../components/common/SEO";
import { useIntroReady } from "../hooks/useIntroReady";

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
  hall: { title: "The Grand Hall", subtitle: "Scale & Architecture" },
  decor: { title: "Décor & Styling", subtitle: "Art of the Occasion" },
  memories: { title: "Celebration Moments", subtitle: "Candid & Captured" },
};

const galleryHighlights = [
  { label: "Wedding Décor", icon: Flower2 },
  { label: "Reception Moments", icon: Camera },
  { label: "Stage & Hall Details", icon: Landmark },
  { label: "Dining Experiences", icon: UtensilsCrossed },
];

const heroContainerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.12,
    },
  },
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.50, ease: "easeOut" },
  },
};

export default function Gallery() {
  const introReady = useIntroReady();
  const [heroReady, setHeroReady] = useState(false);
  const railRef = useRef(null);
  const sectionRef = useRef(null);
  const camera = useRef({ x: 0, vx: 0, target: 0 });
  const rafId = useRef(null);
  const snapPoints = useRef([]);
  const maxScroll = useRef(0);
  const isInView = useRef(false);
  const touchStart = useRef({ x: 0, y: 0, target: 0 });
  const [category, setCategory] = useState("hall");

  useEffect(() => {
    if (!introReady) return undefined;

    let secondFrame;
    let startTimer;
    const firstFrame = requestAnimationFrame(() => {
      secondFrame = requestAnimationFrame(() => {
        startTimer = window.setTimeout(() => {
          setHeroReady(true);
        }, 160);
      });
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      if (secondFrame) cancelAnimationFrame(secondFrame);
      if (startTimer) window.clearTimeout(startTimer);
    };
  }, [introReady]);

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
      if (!rail || !isInView.current) {
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
        description="Browse the Ayswariya Mahal gallery — grand halls, traditional décor, and candid moments from weddings, receptions, and family events in Chennai."
        path="/gallery"
      />
      <PageTransition>
        <main className="min-h-[100dvh] overflow-x-hidden bg-[#fdfbf7] wedding-pattern-ivory">
          <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-5 pb-24 pt-32 sm:px-6 md:min-h-[600px] md:pb-28 md:pt-36 lg:min-h-[60vh] lg:pb-36 lg:pt-40">
            <img
              src={gallery6}
              alt="Ayswariya Mahal gallery"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c0d11]/80 via-[#1c0d11]/70 to-[#4A0A12]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] bg-[linear-gradient(180deg,rgba(253,251,247,0)_0%,rgba(253,251,247,0.12)_24%,rgba(253,251,247,0.42)_58%,rgba(253,251,247,1)_100%)]" />

            <motion.div
              variants={heroContainerVariants}
              initial="hidden"
              animate={heroReady ? "show" : "hidden"}
              className="relative z-10 mx-auto max-w-4xl text-center"
            >
              <motion.div
                variants={heroItemVariants}
                className="mb-6 flex justify-center text-[#d4af37]"
              >
                <Sparkles size={24} />
              </motion.div>

              <motion.p
                variants={heroItemVariants}
                className="mb-6 type-eyebrow text-[#E5C76B] drop-shadow-md"
              >
                The Collection
              </motion.p>

              <motion.h1
                variants={heroItemVariants}
                className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl md:max-lg:text-[60px]"
              >
                <span className="block">
                  A Gallery of
                </span>
                <span className="block italic text-[#E5C76B]">
                  Splendor
                </span>
              </motion.h1>
            </motion.div>
          </section>

          <section
            ref={sectionRef}
            tabIndex={0}
            onKeyDown={handleKeyDown}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            className="relative flex min-h-[100dvh] flex-col overflow-hidden bg-[radial-gradient(circle_at_50%_8%,rgba(229,199,107,0.22),transparent_30%),linear-gradient(180deg,#fdfbf7_0%,#fbf3e7_52%,#f8efe1_100%)] px-4 pb-16 pt-10 outline-none md:px-8 md:pb-[72px] md:pt-12 lg:pb-24 lg:pt-16"
            aria-label="Scrollable wedding gallery slider"
          >
            <div className="relative z-30 mx-auto flex max-w-5xl flex-col items-center text-center">
              <div className="flex w-full justify-center">
                <div                   className="grid grid-cols-3 gap-1 rounded-full border border-[#E5C76B]/35 bg-white/72 p-1 shadow-[0_8px_20px_rgba(122,27,41,0.1)]">
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
                      {categoryMeta[item]?.title || item}
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

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.36, ease: "easeOut" }}
              className="relative z-10"
            >
              <div
                ref={railRef}
                className="mt-10 flex h-[min(50vh,430px)] items-center gap-8 px-[18vw] will-change-transform sm:gap-12 md:mt-12 md:h-[390px] md:gap-12 md:px-[18vw] xl:mt-16 xl:h-[min(54vh,470px)] xl:gap-20 xl:px-[25vw]"
              >
                {images.map((img, index) => (
                  <div
                    key={`${category}-${img.src}`}
                    className="luxury-image-frame luxury-image-overlay relative h-[min(50vh,430px)] w-[min(76vw,340px)] flex-shrink-0 overflow-hidden rounded-xl shadow-[0_12px_32px_rgba(122,27,41,0.15)] transition duration-500 hover:-translate-y-1 md:h-[390px] md:w-[min(38vw,320px)] xl:h-[min(54vh,470px)] xl:w-[min(76vw,360px)]"
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
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="relative z-30 mt-8 flex justify-center gap-4 xl:pointer-events-none xl:absolute xl:inset-x-0 xl:top-[68%] xl:mt-0 xl:block">
              <button
                onClick={() => scrollByStep(-1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#E5C76B]/60 bg-[#4A0A12]/80 text-[#E5C76B] shadow-[0_14px_34px_rgba(63,12,21,0.22)] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white md:h-12 md:w-12 xl:pointer-events-auto xl:absolute xl:left-8 xl:-translate-y-1/2"
                aria-label="Previous gallery item"
              >
                <ChevronLeft size={24} strokeWidth={1.7} />
              </button>

              <button
                onClick={() => scrollByStep(1)}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#E5C76B]/60 bg-[#4A0A12]/80 text-[#E5C76B] shadow-[0_14px_34px_rgba(63,12,21,0.22)] backdrop-blur-md transition duration-500 hover:bg-[#6A1724] hover:text-white md:h-12 md:w-12 xl:pointer-events-auto xl:absolute xl:right-8 xl:-translate-y-1/2"
                aria-label="Next gallery item"
              >
                <ChevronRight size={24} strokeWidth={1.7} />
              </button>
            </div>
          </section>

          <section className="relative overflow-hidden bg-[#4A0A12] wedding-pattern-maroon px-5 py-12 sm:px-6 md:py-16 lg:py-20">
            <div className="relative mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="mx-auto max-w-3xl text-center"
              >
                <p className="type-eyebrow mb-4 text-[#E5C76B]">Highlights in Detail</p>
                <h2 className="font-serif text-[34px] font-semibold leading-[1.15] tracking-[0.01em] text-[#fdfbf7] md:text-[44px] lg:text-[52px]">
                  Moments From Ayswariya Mahal
                </h2>
                <div className="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-[#E5C76B] to-transparent" />
                <p className="mx-auto max-w-3xl type-body text-[#fdfbf7]/78">
                  A collection of weddings, receptions, décor, and the halls behind every celebration.
                </p>
              </motion.div>

              <div className="relative mt-9 grid grid-cols-2 gap-x-4 gap-y-8 border-y border-[#E5C76B]/18 py-7 md:mt-11 md:grid-cols-4 md:gap-0 md:py-8">
                {galleryHighlights.map(({ label, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative flex flex-col items-center px-2 text-center md:px-5"
                  >
                    <span className="mb-4 text-[#E5C76B]">
                      <Icon size={25} strokeWidth={1.25} />
                    </span>
                    <span className="mb-3 h-px w-10 bg-gradient-to-r from-transparent via-[#E5C76B]/80 to-transparent" />
                    <span className="max-w-[150px] font-serif text-[17px] font-medium leading-snug text-[#fdfbf7]/88 md:text-[19px]">
                      {label}
                    </span>
                    {index < galleryHighlights.length - 1 && (
                      <span className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-[#E5C76B]/24 to-transparent md:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}
