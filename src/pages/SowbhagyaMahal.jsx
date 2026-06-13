import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Check } from "lucide-react";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";
import SowbhagyaFooter from "../components/common/SowbhagyaFooter";
import { useEnquiry } from "../context/useEnquiry";

import sowCrop2 from "../assets/images/sow-crop2.jpg";
import sowCrop5 from "../assets/images/sow-crop5.jpg";
import sowCrop3 from "../assets/images/sow-crop3.jpg";
import facility1 from "../assets/images/Facility/facility1.webp";

export default function SowbhagyaMahal() {
  const containerRef = useRef(null);
  const { openForm } = useEnquiry();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-70, 70]);
  const parallaxYReverse = useTransform(scrollYProgress, [0, 1], [70, -70]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.08,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <SEO
        title="Sowbhagya Mahal - Premium Mini Hall"
        description="Sowbhagya Mahal is an elegant mini hall by Ayswariya Mahal in Chennai, perfect for intimate celebrations, family gatherings, and graceful occasions."
        path="/sowbhagya-mahal"
      />
      <PageTransition>
        <main ref={containerRef} className="min-h-screen overflow-hidden bg-[#fdfbf7]">
          
          {/* 1. Hero Section */}
          <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[70vh] md:min-h-[80vh]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${sowCrop2})` }}
            ></div>
            {/* Dark Cinematic Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/85 via-[#3F0C15]/80 to-[#fdfbf7]"></div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="relative z-10 mx-auto max-w-4xl text-center mt-10"
            >
              <motion.div variants={fadeInUp} className="mx-auto mb-6 flex justify-center text-[#E5C76B]">
                <Sparkles size={24} strokeWidth={1.5} />
              </motion.div>
              <motion.p
                variants={fadeInUp}
                className="type-eyebrow text-[#E5C76B] mb-6 drop-shadow-md"
              >
                Ayswariya Mahal Mini Hall
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="font-display text-[clamp(42px,8vw,80px)] font-bold leading-[1.1] tracking-[-0.01em] text-[#fdfbf7] drop-shadow-2xl"
              >
                Sowbhagya Mahal
              </motion.h1>
              <motion.div variants={fadeInUp} className="mx-auto my-8 h-px w-24 bg-[#E5C76B]/50" />
              <motion.p
                variants={fadeInUp}
                className="mx-auto max-w-2xl font-serif text-[clamp(20px,3vw,28px)] font-medium italic text-[#E5C76B]"
              >
                An elegant mini hall crafted for intimate celebrations, family gatherings, and graceful occasions.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="mt-12 flex justify-center">
                <button
                  type="button"
                  onClick={() => document.getElementById("sowbhagya-story")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex min-h-[48px] md:min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f4dc86_0%,#D4A843_55%,#B8860B_100%)] px-8 type-cta text-[#3F0C15] shadow-[0_16px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
                >
                  Explore The Space
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* 2. The Promise (Centered Quote) */}
          <section id="sowbhagya-story" className="px-6 py-24 md:py-32 bg-[#fdfbf7] text-[#4f4038] text-center border-b border-[#D4A843]/20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto max-w-4xl"
            >
              <motion.p variants={fadeInUp} className="font-serif text-[32px] md:text-[44px] leading-[1.4] italic text-[#5A111C]">
                "A legacy of warmth in an intimate setting, designed for families who value elegance, comfort, and tradition at an affordable scale."
              </motion.p>
            </motion.div>
          </section>

          {/* 3. Block 1: Capacities (Image Left, Text Right) - Dark Maroon */}
          <section className="px-6 py-24 md:py-32 bg-[#5A111C] text-[#fdfbf7] overflow-hidden">
            <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden aspect-[4/5] md:aspect-square w-full shadow-2xl"
              >
                <motion.img
                  style={{ y: parallaxY }}
                  src={sowCrop5}
                  alt="Sowbhagya Mahal Grandeur"
                  loading="lazy"
                  className="h-full w-full scale-125 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3F0C15]/60 to-transparent"></div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:pl-10"
              >
                <motion.p variants={fadeInUp} className="type-eyebrow text-[#E5C76B] mb-5">
                  Grand Proportions
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-8 font-serif text-[40px] md:text-[56px] font-semibold leading-[1.1] text-[#fdfbf7]">
                  Space & <span className="italic text-[#E5C76B]">Comfort</span>
                </motion.h2>
                <motion.div variants={fadeInUp} className="mb-10 h-px w-20 bg-[#E5C76B]" />
                
                <div className="flex flex-col gap-8">
                  <motion.div variants={fadeInUp} className="border-l border-[#E5C76B]/40 pl-6">
                    <p className="font-serif text-[42px] font-bold leading-none text-[#E5C76B] mb-2">500</p>
                    <p className="font-sans font-medium uppercase tracking-[0.1em] text-[13px] text-[#fdfbf7]/80">Seating Capacity</p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="border-l border-[#E5C76B]/40 pl-6">
                    <p className="font-serif text-[42px] font-bold leading-none text-[#E5C76B] mb-2">200</p>
                    <p className="font-sans font-medium uppercase tracking-[0.1em] text-[13px] text-[#fdfbf7]/80">Dining Capacity</p>
                  </motion.div>
                  <motion.div variants={fadeInUp} className="border-l border-[#E5C76B]/40 pl-6">
                    <p className="font-serif text-[42px] font-bold leading-none text-[#E5C76B] mb-2">1000</p>
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
          <section className="px-6 py-24 md:py-32 bg-[#fdfbf7] text-[#4f4038] overflow-hidden">
            <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="order-2 lg:order-1 lg:pr-10"
              >
                <motion.p variants={fadeInUp} className="type-eyebrow text-[#D4A843] mb-5">
                  Seamless Celebrations
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-8 font-serif text-[40px] md:text-[56px] font-semibold leading-[1.1] text-[#5A111C]">
                  Premium <span className="italic text-[#D4A843]">Facilities</span>
                </motion.h2>
                <motion.div variants={fadeInUp} className="mb-10 h-px w-20 bg-[#D4A843]" />
                
                <motion.p variants={fadeInUp} className="font-body text-[18px] leading-[1.9] mb-8">
                  Every detail is curated to ensure your event flows beautifully. From our fully equipped modern kitchen and spacious dining hall to luxurious rooms for guests, we prioritize comfort.
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
                      <span className="font-body text-[17px] text-[#4f4038]">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="order-1 lg:order-2 relative overflow-hidden aspect-[4/5] md:aspect-square w-full shadow-[0_20px_50px_rgba(90,17,28,0.08)] border border-[#D4A843]/20"
              >
                <motion.img
                  style={{ y: parallaxYReverse }}
                  src={facility1}
                  alt="Sowbhagya Mahal Facilities"
                  loading="lazy"
                  className="h-full w-full scale-125 object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* 5. Block 3: Occasions (Image Left, Text Right) - Warm Cream */}
          <section className="px-6 py-24 md:py-32 bg-[#f5ead9] text-[#4f4038] overflow-hidden">
            <div className="mx-auto grid max-w-[1200px] items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4] w-full shadow-[0_20px_50px_rgba(90,17,28,0.06)] border border-[#D4A843]/20"
              >
                <motion.img
                  style={{ y: parallaxY }}
                  src={sowCrop3}
                  alt="Sowbhagya Mahal Events"
                  loading="lazy"
                  className="h-full w-full scale-125 object-cover"
                />
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="lg:pl-10"
              >
                <motion.p variants={fadeInUp} className="type-eyebrow text-[#D4A843] mb-5">
                  The Perfect Setting
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-8 font-serif text-[40px] md:text-[56px] font-semibold leading-[1.1] text-[#5A111C]">
                  Meaningful <span className="italic text-[#D4A843]">Occasions</span>
                </motion.h2>
                <motion.div variants={fadeInUp} className="mb-10 h-px w-20 bg-[#D4A843]" />
                
                <motion.p variants={fadeInUp} className="font-body text-[20px] md:text-[24px] leading-[1.8] italic font-light mb-8">
                  Whether it is the intimate joy of an engagement, the quiet elegance of a mini wedding, or the warmth of a family gathering, Sowbhagya Mahal brings grace to every celebration.
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                  {["Engagements", "Mini Weddings", "Receptions", "Birthday Functions", "Family Gatherings", "Corporate Events"].map((occ) => (
                    <span key={occ} className="px-5 py-2 rounded-full border border-[#D4A843]/40 bg-[#fdfbf7] text-[#5A111C] font-serif text-[18px]">
                      {occ}
                    </span>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* 6. CTA Section */}
          <section className="px-6 py-24 md:py-32 bg-[#5A111C] text-center border-t border-[#E5C76B]/20">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mx-auto max-w-3xl"
            >
              <motion.div variants={fadeInUp} className="mx-auto mb-6 flex justify-center text-[#E5C76B]">
                <Sparkles size={24} strokeWidth={1.5} />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="mb-8 font-serif text-[40px] md:text-[56px] font-semibold leading-[1.1] text-[#fdfbf7]">
                Plan Your Celebration at <span className="italic text-[#E5C76B]">Sowbhagya Mahal</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mb-12 font-body text-xl text-[#fdfbf7]/80 max-w-xl mx-auto leading-relaxed">
                A graceful space for intimate events, crafted with the trust and hospitality of Ayswariya Mahal.
              </motion.p>
              <motion.button
                variants={fadeInUp}
                type="button"
                onClick={openForm}
                className="inline-flex min-h-[54px] md:min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f4dc86_0%,#D4A843_55%,#B8860B_100%)] px-10 type-cta text-[#3F0C15] shadow-[0_16px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.3)]"
              >
                Enquire Availability
              </motion.button>
            </motion.div>
          </section>

        </main>
        <SowbhagyaFooter />
      </PageTransition>
    </>
  );
}
