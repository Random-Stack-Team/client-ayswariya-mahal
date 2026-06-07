import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import heroImage from "../../assets/images/hero.webp";

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
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const petalsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, { scale: 1.08, filter: "brightness(0.74) saturate(1.05)" });
      gsap.set(contentRef.current?.children || [], { opacity: 1, y: 14 });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .to(imageRef.current, {
          scale: 1,
          filter: "brightness(0.84) saturate(1.06)",
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#2a1116]">
      <div className="absolute inset-0">
        <img
          ref={imageRef}
          src={heroImage}
          alt="Ayswariya Mahal wedding stage"
          className="h-full w-full object-cover will-change-transform"
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

      <div className="relative z-10 flex min-h-screen items-end px-6 pb-24 pt-32 md:items-center md:px-12 md:pb-0 lg:px-20">
        <div ref={contentRef} className="max-w-[880px] text-left text-white">
          <p className="mb-6 font-body text-xs font-semibold uppercase tracking-[0.46em] text-[#f1d56d] md:text-sm">
            Established 2001
          </p>

          <h1 className="font-display text-[clamp(3.1rem,4.6vw,5rem)] font-semibold leading-[1.02] text-white drop-shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
            Where Ancestral Echoes
            <br />
            Meet <span className="italic">Eternal Vows.</span>
          </h1>

          <p className="mt-7 max-w-xl font-body text-base leading-8 text-white/78 md:text-lg">
            A refined wedding destination for timeless ceremonies, grand receptions, and celebrations shaped with grace.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              onClick={() => navigate("/facilities")}
              className="border border-[#e5c76b] bg-[#801c2c]/88 px-9 py-4 font-body text-xs font-bold uppercase tracking-[0.28em] text-[#f3d76c] shadow-[0_18px_38px_rgba(44,4,12,0.25)] transition duration-500 hover:-translate-y-1 hover:bg-[#9a2335] hover:text-white"
            >
              Explore the Grounds
            </button>

            <button
              onClick={() => navigate("/about")}
              className="border border-[#e5c76b]/80 bg-black/10 px-9 py-4 font-body text-xs font-bold uppercase tracking-[0.28em] text-[#f3d76c] backdrop-blur-sm transition duration-500 hover:-translate-y-1 hover:bg-[#f8f4ec] hover:text-[#5d201d]"
            >
              The Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
