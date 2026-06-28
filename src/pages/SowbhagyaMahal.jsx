import { motion } from "framer-motion";
import { Sparkles, Check } from "lucide-react";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";
import SowbhagyaFooter from "../components/common/SowbhagyaFooter";
import { useIntroReady } from "../hooks/useIntroReady";

import sowCrop5 from "../assets/images/sowbhagya-hall-generated.webp";
import sowCrop3 from "../assets/images/sowbhagya-rooftop-generated.webp";
import facility1 from "../assets/images/Facility/facility1.webp";

export default function SowbhagyaMahal() {
  const introReady = useIntroReady();
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.12,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1.30, ease: "easeOut" } },
  };

  const fadeInWide = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1.44, ease: "easeOut" } },
  };

  const imageReveal = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1.50, ease: "easeOut" } },
  };

  const revealViewport = { once: true, amount: 0.22 };

  return (
    <>
      <SEO
        title="Sowbhagya Mahal - Premium Mini Hall"
        description="Sowbhagya Mahal is an intimate hall by Ayswariya Mahal in Chennai — ideal for engagements, mini weddings, receptions, and family functions."
        path="/sowbhagya-mahal"
      />
      <PageTransition>
        <main className="min-min-h-[100dvh] overflow-x-hidden bg-[#fdfbf7]">
          
          {/* 1. Hero Section */}
          <section className="relative isolate flex min-h-[620px] items-center justify-center overflow-hidden px-5 pb-24 pt-32 sm:px-6 md:min-h-[680px] md:pb-28 md:pt-36 lg:min-h-[80vh] lg:pb-32 lg:pt-40">
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ scale: 1.12, y: -18 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={sowCrop5}
                alt=""
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>
            {/* Dark Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/88 via-[#3F0C15]/80 to-[#fdfbf7]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(212,168,67,0.08),transparent_26%),radial-gradient(circle_at_50%_46%,rgba(255,255,255,0.04),transparent_34%)]" />
            <div className="pointer-events-none absolute inset-x-6 top-8 h-px bg-[linear-gradient(90deg,transparent,rgba(229,199,107,0.88),transparent)] md:inset-x-10" />
            <div className="pointer-events-none absolute inset-x-6 bottom-8 h-px bg-[linear-gradient(90deg,transparent,rgba(229,199,107,0.64),transparent)] md:inset-x-10" />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-6 top-6 h-16 w-16 border-l-2 border-t-2 border-[#E5C76B]/90 shadow-[0_0_24px_rgba(229,199,107,0.18)] md:left-8 md:top-8 md:h-20 md:w-20 lg:left-10 lg:top-10 lg:h-24 lg:w-24"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-6 bottom-6 h-16 w-16 border-b-2 border-r-2 border-[#E5C76B]/90 shadow-[0_0_24px_rgba(229,199,107,0.18)] md:right-8 md:bottom-8 md:h-20 md:w-20 lg:right-10 lg:bottom-10 lg:h-24 lg:w-24"
            />
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="relative z-10 mx-auto mt-6 max-w-4xl text-center md:mt-8 lg:mt-10"
            >
              <motion.div variants={fadeInWide} className="mx-auto mb-6 flex justify-center text-[#E5C76B] drop-shadow-[0_0_18px_rgba(229,199,107,0.24)]">
                <Sparkles size={26} strokeWidth={1.5} />
              </motion.div>
              <motion.p variants={fadeInUp} className="type-eyebrow text-[#E5C76B] mb-6 drop-shadow-md tracking-[0.28em]">
                Introducing Ayswariya Mahal's Exclusive Mini Hall
              </motion.p>
              <motion.h1
                variants={fadeInWide}
                className="font-display text-[clamp(38px,12vw,58px)] font-bold leading-[1.05] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl md:text-[clamp(54px,7vw,68px)] lg:text-[clamp(48px,8vw,80px)]"
              >
                Sowbhagya Mahal
              </motion.h1>
              <motion.div variants={fadeInWide} className="mx-auto my-8 h-px w-28 bg-[linear-gradient(90deg,transparent,rgba(229,199,107,0.95),transparent)]" />
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-2xl font-serif text-[clamp(20px,3vw,28px)] font-medium italic text-[#E5C76B]"
              >
                An intimate hall crafted for engagements, family celebrations, and milestone moments.
              </motion.p>
              
              <motion.div variants={fadeInWide} className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => document.getElementById("sowbhagya-story")?.scrollIntoView({ behavior: "smooth" })}
                  className="group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(135deg,#f4dc86_0%,#D4A843_55%,#B8860B_100%)] px-6 type-cta text-[#3F0C15] shadow-[0_16px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_0%,rgba(255,255,255,0.42)_45%,transparent_100%)] -translate-x-[140%] transition-transform duration-1000 group-hover:translate-x-[140%]" />
                  <span className="relative z-10">Explore The Space</span>
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* 2. The Promise (Centered Quote) */}
          <section id="sowbhagya-story" className="px-5 py-16 sm:px-6 md:py-20 lg:py-32 bg-[#fdfbf7] text-[#4f4038] text-center border-b border-[#D4A843]/20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView={introReady ? "show" : undefined}
              viewport={revealViewport}
              className="mx-auto max-w-4xl"
            >
              <motion.p variants={fadeInWide} className="font-serif text-[28px] md:text-[38px] lg:text-[44px] leading-[1.35] md:leading-[1.4] italic text-[#5A111C]">
                "A tradition of hospitality in an intimate setting — designed for families who value quality, ease, and a personal touch."
              </motion.p>
            </motion.div>
          </section>

          {/* 3. Block 1: Capacities (Image Left, Text Right) - Dark Maroon */}
          <section className="px-5 py-16 sm:px-6 md:py-20 lg:py-32 bg-[#5A111C] wedding-pattern-maroon text-[#fdfbf7] overflow-hidden">
            <div className="mx-auto grid max-w-[1200px] items-center gap-10 xl:grid-cols-2 xl:gap-16">
              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView={introReady ? "show" : undefined}
                viewport={revealViewport}
                className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner group relative aspect-[4/5] w-full md:aspect-[21/9] xl:aspect-square"
              >
                <img
                  src={sowCrop5}
                  alt="Sowbhagya Mahal Grandeur"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#3F0C15]/36 to-transparent"></div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView={introReady ? "show" : undefined}
                viewport={revealViewport}
                className="lg:pl-10"
              >
                <motion.p variants={fadeInUp} className="type-eyebrow text-[#E5C76B] mb-5">
                  Room to Celebrate
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-6 lg:mb-8 font-serif text-[34px] md:text-[40px] lg:text-[56px] font-semibold leading-[1.1] text-[#fdfbf7]">
                  Space & <span className="italic text-[#E5C76B]">Ease</span>
                </motion.h2>
                <motion.div variants={fadeInUp} className="mb-7 lg:mb-10 h-px w-20 bg-[#E5C76B]" />
                
                <div className="flex flex-col gap-5 lg:gap-8">
                  <motion.div variants={fadeInUp} className="border-l border-[#E5C76B]/40 pl-6">
                    <p className="font-serif text-[34px] lg:text-[42px] font-bold leading-none text-[#E5C76B] mb-2">500</p>
                    <p className="font-sans font-medium uppercase tracking-[0.1em] text-[13px] text-[#fdfbf7]/80">Seating Capacity</p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="border-l border-[#E5C76B]/40 pl-6">
                    <p className="font-serif text-[34px] lg:text-[42px] font-bold leading-none text-[#E5C76B] mb-2">200</p>
                    <p className="font-sans font-medium uppercase tracking-[0.1em] text-[13px] text-[#fdfbf7]/80">Dining Capacity</p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="border-l border-[#E5C76B]/40 pl-6">
                    <p className="font-serif text-[34px] lg:text-[42px] font-bold leading-none text-[#E5C76B] mb-2">1000</p>
                    <p className="font-sans font-medium uppercase tracking-[0.1em] text-[13px] text-[#fdfbf7]/80">Floating Guests</p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="border-l border-[#E5C76B]/40 pl-6">
                    <p className="font-serif text-[32px] font-bold leading-none text-[#E5C76B] mb-2 italic">A/C</p>
                    <p className="font-sans font-medium uppercase tracking-[0.1em] text-[13px] text-[#fdfbf7]/80">Fully Air-Conditioned Hall</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 4. Block 2: Facilities (Text Left, Image Right) - Ivory */}
          <section className="px-5 py-16 sm:px-6 md:py-20 lg:py-32 bg-[#fdfbf7] wedding-pattern-ivory text-[#4f4038] overflow-hidden">
            <div className="mx-auto grid max-w-[1200px] items-center gap-10 xl:grid-cols-2 xl:gap-16">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView={introReady ? "show" : undefined}
                viewport={revealViewport}
                className="lg:pl-10"
              >
                <motion.p variants={fadeInUp} className="type-eyebrow text-[#D4A843] mb-5">
                  Seamless Service
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-6 lg:mb-8 font-serif text-[34px] md:text-[40px] lg:text-[56px] font-semibold leading-[1.1] text-[#5A111C]">
                  Thoughtful <span className="italic text-[#D4A843]">Amenities</span>
                </motion.h2>
                <motion.div variants={fadeInUp} className="mb-7 lg:mb-10 h-px w-20 bg-[#D4A843]" />
                
                <motion.p variants={fadeInUp} className="font-body text-[17px] md:text-[18px] leading-[1.8] md:leading-[1.9] mb-8">
                  Every detail is planned to keep your event running smoothly — from our modern kitchen and spacious dining hall to comfortable guest rooms.
                </motion.p>

                <div className="flex flex-col gap-4">
                  {[
                    "Centralized Air Conditioning across the building",
                    "Fully Equipped Modern Kitchen",
                    "Luxury Rooms & Geyser Facilities",
                    "Continuous Backup Generator",
                    "Comprehensive CCTV Coverage",
                    "Beautiful Rooftop Garden"
                  ].map((item, i) => (
                    <motion.div key={i} variants={fadeInUp} className="flex items-start gap-4">
                      <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#f5ead9] border border-[#D4A843]/30 flex items-center justify-center">
                        <Check size={12} className="text-[#D4A843]" strokeWidth={3} />
                      </div>
                      <span className="font-body text-[16px] md:text-[17px] text-[#4f4038]">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView={introReady ? "show" : undefined}
                viewport={revealViewport}
                className="group order-1 relative aspect-[4/5] w-full overflow-hidden rounded-[18px] border border-[#D4A843]/20 shadow-[0_12px_30px_rgba(63,12,21,0.18)] md:aspect-[21/9] xl:order-2 xl:aspect-square"
              >
                <div className="pointer-events-none absolute inset-0 z-20 border border-[#D4A843]/30 shadow-[inset_0_0_0_1px_rgba(212,168,67,0.1)]" />
                <div className="pointer-events-none absolute inset-x-4 top-4 z-20 h-px bg-[linear-gradient(90deg,transparent,rgba(212,168,67,0.78),transparent)] md:inset-x-6" />
                <div className="pointer-events-none absolute inset-x-4 bottom-4 z-20 h-px bg-[linear-gradient(90deg,transparent,rgba(212,168,67,0.78),transparent)] md:inset-x-6" />
                <div className="pointer-events-none absolute left-4 top-4 z-20 h-12 w-12 border-l-2 border-t-2 border-[#D4A843]/90 md:left-5 md:top-5 md:h-12 md:w-12 lg:left-6 lg:top-6 lg:h-16 lg:w-16" />
                <div className="pointer-events-none absolute right-4 bottom-4 z-20 h-12 w-12 border-b-2 border-r-2 border-[#D4A843]/90 md:right-5 md:bottom-5 md:h-12 md:w-12 lg:right-6 lg:bottom-6 lg:h-16 lg:w-16" />
                <div className="pointer-events-none absolute left-1/2 top-4 z-20 -translate-x-1/2 rounded-full border border-[#D4A843]/40 bg-[#5A111C]/70 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#D4A843] shadow-[0_8px_20px_rgba(0,0,0,0.22)]">
                  Venue Detail
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(212,168,67,0.14),transparent_58%)]"
                />
                <img
                  src={facility1}
                  alt="Sowbhagya Mahal Facilities"
                  loading="lazy"
                  className="h-full w-full scale-125 object-cover transition-transform duration-700 group-hover:scale-[1.1]"
                />
              </motion.div>
            </div>
          </section>

          {/* 5. Block 3: Occasions (Image Left, Text Right) - Warm Cream */}
          <section className="px-5 py-16 sm:px-6 md:py-20 lg:py-32 bg-[#f5ead9] wedding-pattern-gold text-[#4f4038] overflow-hidden">
            <div className="mx-auto grid max-w-[1200px] items-center gap-10 xl:grid-cols-2 xl:gap-16">
              <motion.div
                variants={imageReveal}
                initial="hidden"
                whileInView={introReady ? "show" : undefined}
                viewport={revealViewport}
                className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner group relative aspect-[4/5] w-full md:aspect-[21/9] xl:aspect-[3/4]"
              >
                <img
                  src={sowCrop3}
                  alt="Sowbhagya Mahal Events"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView={introReady ? "show" : undefined}
                viewport={revealViewport}
                className="lg:pl-10"
              >
                <motion.p variants={fadeInUp} className="type-eyebrow text-[#D4A843] mb-5">
                  An Ideal Setting
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-6 lg:mb-8 font-serif text-[34px] md:text-[40px] lg:text-[56px] font-semibold leading-[1.1] text-[#5A111C]">
                  Meaningful <span className="italic text-[#D4A843]">Occasions</span>
                </motion.h2>
                <motion.div variants={fadeInUp} className="mb-7 lg:mb-10 h-px w-20 bg-[#D4A843]" />
                
                <motion.p variants={fadeInUp} className="font-body text-[18px] md:text-[21px] lg:text-[24px] leading-[1.75] md:leading-[1.8] italic font-light mb-8">
                  Whether it's an intimate engagement, a mini wedding, or a close family celebration, Sowbhagya Mahal sets the tone.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                  {["Engagements", "Mini Weddings", "Receptions", "Birthday Functions", "Family Gatherings", "Corporate Events"].map((occ) => (
                    <span key={occ} className="min-h-11 px-4 py-2 rounded-full border border-[#D4A843]/40 bg-[#fdfbf7] text-[#5A111C] font-serif text-[16px] md:px-5 md:text-[18px]">
                      {occ}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* 6. Venue Rhythm Section */}
          <section className="relative overflow-hidden px-5 py-16 sm:px-6 md:py-20 lg:py-28 bg-[#5A111C] wedding-pattern-maroon border-t border-[#E5C76B]/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(229,199,107,0.18),transparent_34%),radial-gradient(circle_at_80%_100%,rgba(253,251,247,0.08),transparent_32%)]" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView={introReady ? "show" : undefined}
              viewport={revealViewport}
              className="relative mx-auto grid max-w-6xl items-center gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:gap-14"
            >
              <motion.div variants={fadeInUp} className="text-center lg:text-left">
                <div className="mb-6 flex justify-center text-[#E5C76B] lg:justify-start">
                  <Sparkles size={24} strokeWidth={1.5} />
                </div>
                <p className="type-eyebrow mb-5 text-[#E5C76B]">Venue Rhythm</p>
                <h2 className="font-serif text-[34px] md:text-[44px] lg:text-[54px] font-semibold leading-[1.1] text-[#fdfbf7]">
                  A seamless flow from welcome to <span className="italic text-[#E5C76B]">farewell</span>
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp} className="rounded-[28px] border border-[#E5C76B]/24 bg-[#fdfbf7]/7 p-5                 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-sm sm:p-7 md:p-8">
                <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
                  {[
                    "Arrival spaces stay clear, composed, and easy for every age group.",
                    "Dining access remains close enough for comfort without disturbing the hall.",
                    "Stage, seating, and movement zones are kept visually balanced.",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-2xl border border-[#E5C76B]/16 bg-[#3F0C15]/32 p-4 text-left">
                      <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#E5C76B] text-[#3F0C15]">
                        <Check size={15} strokeWidth={2.4} />
                      </span>
                      <p className="font-body text-[16px] leading-7 text-[#fdfbf7]/78">{item}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </section>

        </main>
        <SowbhagyaFooter />
      </PageTransition>
    </>
  );
}
