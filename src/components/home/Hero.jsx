import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import heroImage from "../../assets/images/hero.webp";
import { useEnquiry } from "../../context/useEnquiry";

const petals = [
  { left: "9%", top: "72%", size: 20, delay: 0.1, drift: 24 },
  { left: "16%", top: "33%", size: 18, delay: 0.35, drift: 18 },
  { left: "31%", top: "44%", size: 17, delay: 0.65, drift: 28 },
  { left: "48%", top: "51%", size: 19, delay: 0.2, drift: 22 },
  { left: "61%", top: "34%", size: 18, delay: 0.55, drift: 20 },
  { left: "78%", top: "45%", size: 16, delay: 0.85, drift: 26 },
  { left: "91%", top: "43%", size: 19, delay: 0.45, drift: 18 },
  { left: "68%", top: "82%", size: 18, delay: 1, drift: 24 },
];

export default function Hero() {
  const navigate = useNavigate();
  const { openForm } = useEnquiry();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const petalsRef = useRef([]);

  const animCtx = useRef(null);

  useEffect(() => {
    const startAnimation = () => {
      const ctx = gsap.context(() => {
        gsap.set(imageRef.current, { scale: 1.08 });
        gsap.set(contentRef.current?.children || [], { opacity: 0, y: 20 });

        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .to(imageRef.current, {
            scale: 1,
            duration: 2.4,
          })
          .to(
            contentRef.current?.children || [],
            {
              opacity: 1,
              y: 0,
              duration: 1.35,
              stagger: 0.18,
            },
            "-=1.55"
          );

        if (isDesktop) {
          petalsRef.current.forEach((petal, index) => {
            if (!petal) return;
            const drift = petals[index].drift;

            gsap.to(petal, {
              y: `-=${drift}`,
              x: index % 2 ? "+=12" : "-=10",
              rotation: index % 2 ? 10 : -12,
              duration: 5.2 + index * 0.22,
              delay: petals[index].delay,
              ease: "sine.inOut",
              repeat: -1,
              yoyo: true,
            });
          });
        }
      });
      animCtx.current = ctx;
    };

    const cleanup = () => {
      if (animCtx.current) {
        animCtx.current.revert();
        animCtx.current = null;
      }
    };

    if (document.documentElement.classList.contains("intro-scroll-lock")) {
      const observer = new MutationObserver(() => {
        if (!document.documentElement.classList.contains("intro-scroll-lock")) {
          observer.disconnect();
          startAnimation();
        }
      });
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => {
        observer.disconnect();
        cleanup();
      };
    } else {
      startAnimation();
      return cleanup;
    }
  }, [isDesktop]);

  return (
    <>
    <section className="relative min-h-[680px] overflow-hidden bg-[#2a1116] md:min-h-[760px] lg:min-h-screen">
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Ayswariya Mahal wedding stage"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          width="1920"
          height="1440"
          className="h-full w-full object-cover will-change-transform [filter:brightness(0.84)_saturate(1.06)]"
        />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,8,10,0.78)_0%,rgba(58,20,16,0.43)_38%,rgba(20,8,8,0.2)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-[44vh] bg-[linear-gradient(180deg,rgba(20,5,8,0.9)_0%,rgba(69,14,24,0.52)_34%,rgba(69,14,24,0.18)_68%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.08)_42%,rgba(0,0,0,0.58)_100%)]" />

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {petals.map((petal, index) => (
          <span
            key={`${petal.left}-${petal.top}`}
            ref={(node) => {
              petalsRef.current[index] = node;
            }}
            className="absolute rounded-full bg-[#e889a9]/80 shadow-[0_0_18px_rgba(232,137,169,0.45)] blur-[0.1px]"
            style={{
              left: petal.left,
              top: petal.top,
              width: petal.size,
              height: petal.size,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-[680px] items-end px-5 pb-20 pt-28 sm:px-6 md:min-h-[760px] md:items-center md:px-12 md:pb-0 lg:min-h-screen lg:px-20">
        <div ref={contentRef} className="max-w-[880px] text-left text-white md:max-lg:max-w-[680px]">
          <p className="mb-6 type-eyebrow text-[#f1d56d]">
            Established 2001
          </p>

          <h1 className="font-display text-[clamp(34px,11vw,56px)] font-bold leading-[1.08] tracking-[-0.02em] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)] md:text-[clamp(48px,6.2vw,64px)] md:leading-[1.1] lg:text-[clamp(44px,7vw,76px)]">
            Where Ancestral Echoes
            <br />
            Meet <span className="italic">Eternal Vows.</span>
          </h1>

          <p className="mt-7 max-w-xl type-body text-white/82">
            A refined wedding destination for timeless ceremonies, grand receptions, and celebrations shaped with grace.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row md:mt-10">
            <button
              onClick={() => navigate("/facilities")}
              className="relative inline-flex items-center justify-center min-h-10 overflow-hidden group border border-[#e5c76b] bg-[#6A1724]/88 px-6 py-3 type-cta text-[#f3d76c] shadow-[0_18px_38px_rgba(44,4,12,0.25)] transition duration-500 hover:-translate-y-1 hover:bg-[#9a2335] hover:text-white sm:px-8"
            >
              <span className="relative z-10">Explore the Grounds</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-[#E5C76B]/40 to-transparent -translate-x-[150%] skew-x-[-20deg] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out"></div>
            </button>

            <button
              onClick={() => openForm()}
              className="relative inline-flex items-center justify-center min-h-10 overflow-hidden group bg-gradient-to-r from-[#E5C76B] via-[#F3D76C] to-[#C9973B] px-6 py-3 type-cta text-[#3F0C15] font-bold shadow-[0_0_20px_rgba(229,199,107,0.4)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(243,215,108,0.7)] hover:scale-[1.02] sm:px-8"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Check Availability
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </button>
          </div>
          <p className="mt-6 type-small text-white/70">📍 Arumbakkam, Chennai</p>
        </div>
      </div>
    </section>


    </>
  );
}
