import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ChefHat,
  DoorOpen,
  MapPin,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Utensils,
  Zap,
} from "lucide-react";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";
import { useEnquiry } from "../context/useEnquiry";

import sowCrop from "../assets/images/sow-crop.webp";
import sowCrop2 from "../assets/images/sow-crop2.webp";
import sowCrop3 from "../assets/images/sow-crop3.webp";
import sowCrop5 from "../assets/images/sow-crop5.webp";
import facility1 from "../assets/images/Facility/facility1.webp";
import facility2 from "../assets/images/Facility/facility2.webp";
import facility3 from "../assets/images/Facility/facility3.webp";
import facility4 from "../assets/images/Facility/facility4.webp";
import facility5 from "../assets/images/Facility/facility5.webp";
import facility6 from "../assets/images/Facility/facility6.webp";

const capacities = [
  { value: "500", label: "Seated Guests", note: "Main hall comfort", image: sowCrop5 },
  { value: "200", label: "Dining Capacity", note: "Service-ready dining", image: facility1 },
  { value: "1000", label: "Floating Guests", note: "Flexible celebration flow", image: sowCrop3 },
];

const facilities = [
  { icon: Snowflake, image: facility2, title: "Centralized AC", body: "Comfortable climate control across the building for long celebrations." },
  { icon: ChefHat, image: facility3, title: "Modern Kitchen", body: "A fully equipped kitchen planned for smooth event catering." },
  { icon: DoorOpen, image: facility4, title: "Guest Rooms", body: "Luxurious rooms for families and important guests to refresh." },
  { icon: Zap, image: facility5, title: "Power Backup", body: "Generator support to keep functions running without interruption." },
  { icon: ShieldCheck, image: facility6, title: "CCTV Coverage", body: "Security coverage for a confident, well-managed venue experience." },
  { icon: Utensils, image: facility1, title: "Dining Hall", body: "A spacious dining area with practical guest movement and service flow." },
];

const highlights = [
  "Located in the same building as Ayswariya Mahal",
  "Affordable mini hall option with premium essentials",
  "Suitable for weddings, engagements, receptions and family events",
  "Easy access by road and metro for guests across Chennai",
];

const galleryImages = [
  { src: sowCrop, title: "Celebration Hall" },
  { src: sowCrop3, title: "Event Ambience" },
  { src: facility1, title: "Guest Facilities" },
];

export default function SowbhagyaMahal() {
  const containerRef = useRef(null);
  const { openForm } = useEnquiry();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-70, 70]);

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
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <>
      <SEO
        title="Sowbhagya Mahal - Premium Mini Hall for Beautiful Celebrations"
        description="Sowbhagya Mahal is a premium mini hall by Ayswariya Mahal in Chennai, offering spacious seating, dining facilities, centralized AC, modern kitchen, guest rooms, and refined hospitality for weddings and family events."
        path="/sowbhagya-mahal"
      />
      <PageTransition>
        <main ref={containerRef} className="min-h-screen overflow-hidden bg-[#fdfbf7] text-[#4a3623]">
          <section className="relative flex min-h-[92svh] items-center overflow-hidden px-5 pb-20 pt-32 text-center md:px-8 lg:px-12">
            <motion.div
              initial={{ scale: 1.12 }}
              animate={{ scale: 1.03 }}
              transition={{ duration: 8, ease: "easeOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${sowCrop2})` }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(165deg,rgba(26,10,2,0.88)_0%,rgba(90,17,28,0.72)_48%,rgba(63,12,21,0.44)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#fdfbf7] to-transparent" />

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="relative z-10 mx-auto max-w-5xl"
            >
              <motion.p variants={fadeInUp} className="type-eyebrow mb-5 text-[#D4A843]">
                Ayswariya Mahal Mini Hall
              </motion.p>
              <motion.div variants={fadeInUp} className="mx-auto mb-7 h-px w-28 bg-gradient-to-r from-transparent via-[#D4A843] to-transparent" />
              <motion.h1
                variants={fadeInUp}
                className="font-display text-[clamp(42px,8vw,88px)] font-bold leading-[1.04] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl"
              >
                Sowbhagya Mahal
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="mx-auto mt-7 max-w-3xl font-serif text-[clamp(24px,4vw,42px)] font-semibold leading-[1.18] text-[#D4A843]"
              >
                A graceful mini hall for intimate, comfortable and memorable celebrations.
              </motion.p>
              <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-2xl type-body text-[#fdfbf7]/86">
                Located in the same building as Ayswariya Mahal, Sowbhagya Mahal offers refined facilities,
                spacious planning and warm hospitality at an accessible cost.
              </motion.p>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap justify-center gap-3">
                {capacities.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="group relative overflow-hidden border border-[#D4A843]/38 bg-[#fdfbf7]/10 px-5 py-3 backdrop-blur-md"
                  >
                    <span className="absolute inset-y-0 -left-10 w-8 rotate-12 bg-white/28 blur-sm transition-transform duration-700 group-hover:translate-x-48" />
                    <span className="relative font-display text-3xl font-bold text-[#D4A843]">{item.value}</span>
                    <span className="relative ml-2 font-nav text-[12px] uppercase tracking-[0.12em] text-[#fdfbf7]/82">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeInUp} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => document.getElementById("sowbhagya-facilities")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f4dc86_0%,#D4A843_52%,#B8860B_100%)] px-8 type-cta text-[#3F0C15] shadow-[0_18px_38px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.5)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_48px_rgba(0,0,0,0.3)]"
                >
                  Explore Facilities
                </button>
                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#fdfbf7]/70 bg-[#fdfbf7]/12 px-8 type-cta text-[#fdfbf7] shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:border-[#D4A843] hover:bg-[#D4A843] hover:text-[#3F0C15]"
                >
                  Enquire Now
                </button>
              </motion.div>
            </motion.div>
          </section>

          <section className="px-5 py-18 md:px-8 md:py-24 lg:px-12">
            <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
              <motion.div
                initial={{ opacity: 0, x: -42 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <motion.div
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  whileInView={{ x: 16, y: 16, opacity: 0.24 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-0 bg-[#D4A843]"
                />
                <motion.div
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                  viewport={{ once: true, amount: 0.24 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden shadow-2xl"
                >
                  <motion.img
                    style={{ y: parallaxY }}
                    src={sowCrop5}
                    alt="Sowbhagya Mahal celebration hall"
                    loading="lazy"
                    decoding="async"
                    width="1360"
                    height="1020"
                    className="h-[360px] w-full scale-110 object-cover sm:h-[460px] lg:h-[620px]"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
              >
                <motion.p variants={fadeInUp} className="type-eyebrow mb-4 text-[#B8860B]">
                  About the Hall
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-7 font-serif text-[34px] font-semibold leading-[1.16] text-[#5A111C] md:text-5xl">
                  Equally grand, thoughtfully sized and easy to host.
                </motion.h2>
                <motion.div variants={fadeInUp} className="mb-8 h-px w-20 bg-[#B8860B]" />
                <motion.p variants={fadeInUp} className="type-body mb-5 text-[#4f4038]">
                  Sowbhagya Mahal is a stable part of Ayswariya Mahal. It is an equally grand Mahal
                  with excellent facilities at an affordable cost, created for families who want a refined
                  celebration experience in a more compact setting.
                </motion.p>
                <motion.p variants={fadeInUp} className="type-body text-[#4f4038]">
                  The hall is spacious, well architected and supported by centralized air conditioning,
                  a modern kitchen, guest rooms, generator backup, geysers, CCTV coverage, dining hall
                  and a separate rooftop garden.
                </motion.p>
              </motion.div>
            </div>
          </section>

          <section className="bg-[#5A111C] px-5 py-16 text-[#fdfbf7] md:px-8 md:py-20 lg:px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              className="mx-auto grid max-w-[1120px] gap-5 min-[390px]:grid-cols-3"
            >
              {capacities.map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeInUp}
                  whileHover={{ y: -9, scale: 1.015 }}
                  className="group relative min-h-[260px] overflow-hidden border border-[#D4A843]/28 bg-[#1A0A02] p-7 text-center shadow-[0_24px_58px_rgba(0,0,0,0.22)]"
                >
                  <img
                    src={item.image}
                    alt={`${item.label} at Sowbhagya Mahal`}
                    loading="lazy"
                    decoding="async"
                    width="1360"
                    height="1020"
                    className="absolute inset-0 h-full w-full object-cover opacity-36 transition duration-700 group-hover:scale-105 group-hover:opacity-48"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,10,2,0.52),rgba(63,12,21,0.9))]" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,168,67,0.28),transparent_44%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute left-4 top-4 h-8 w-8 border-l border-t border-[#D4A843]/45" />
                  <div className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-[#D4A843]/45" />
                  <span className="absolute inset-y-0 -left-12 w-10 rotate-12 bg-white/16 blur-sm transition-transform duration-700 group-hover:translate-x-[360px]" />
                  <div className="relative flex min-h-[204px] flex-col items-center justify-center">
                    <p className="font-display text-5xl font-bold leading-none text-[#D4A843] md:text-6xl">{item.value}</p>
                    <p className="mt-4 font-nav text-[12px] uppercase tracking-[0.16em] text-[#fdfbf7]/78">{item.label}</p>
                    <p className="mt-3 type-body text-[#fdfbf7]/68">{item.note}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          <section id="sowbhagya-facilities" className="px-5 py-20 md:px-8 md:py-28 lg:px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.14 }}
              className="mx-auto max-w-[1240px]"
            >
              <motion.div variants={fadeInUp} className="mx-auto mb-14 max-w-3xl text-center">
                <p className="type-eyebrow mb-4 text-[#B8860B]">Facilities</p>
                <h2 className="font-serif text-[34px] font-semibold leading-[1.16] text-[#5A111C] md:text-5xl">
                  Essential comforts for a complete celebration.
                </h2>
              </motion.div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {facilities.map((facility) => {
                  const Icon = facility.icon;

                  return (
                    <motion.article
                      key={facility.title}
                      variants={fadeInUp}
                      whileHover={{ y: -10, scale: 1.012 }}
                      className="group relative min-h-[420px] overflow-hidden border border-[#D4A843]/24 bg-[#fff8ed] shadow-[0_22px_54px_rgba(90,17,28,0.1)] transition-colors duration-300 hover:border-[#B8860B]/55"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={facility.image}
                          alt={`${facility.title} at Sowbhagya Mahal`}
                          loading="lazy"
                          decoding="async"
                          width="1360"
                          height="1020"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(26,10,2,0.02),rgba(63,12,21,0.62))]" />
                        <div className="absolute bottom-4 left-5 grid h-14 w-14 place-items-center rounded-full border border-[#D4A843]/55 bg-[#5A111C] text-[#D4A843] shadow-[0_14px_28px_rgba(26,10,2,0.28)] transition duration-500 group-hover:bg-[#D4A843] group-hover:text-[#5A111C]">
                          <Icon size={22} strokeWidth={1.7} aria-hidden="true" />
                        </div>
                      </div>
                      <div className="relative p-7">
                        <div className="absolute left-7 top-0 h-px w-16 bg-[#B8860B]" />
                        <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full border border-[#D4A843]/28 transition-transform duration-700 group-hover:scale-125" />
                        <h3 className="relative mb-3 font-serif text-2xl font-semibold leading-[1.15] text-[#5A111C]">{facility.title}</h3>
                        <p className="relative type-body text-[#4f4038]">{facility.body}</p>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>
          </section>

          <section className="bg-[#F0E8D8] px-5 py-20 md:px-8 md:py-28 lg:px-12">
            <div className="mx-auto grid max-w-[1240px] items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.18 }}
              >
                <motion.p variants={fadeInUp} className="type-eyebrow mb-4 text-[#B8860B]">
                  Why Choose Sowbhagya
                </motion.p>
                <motion.h2 variants={fadeInUp} className="mb-7 font-serif text-[34px] font-semibold leading-[1.16] text-[#5A111C] md:text-5xl">
                  Affordable luxury with the same trusted care.
                </motion.h2>
                <motion.div variants={fadeInUp} className="mb-8 h-px w-20 bg-[#B8860B]" />
                <motion.ul variants={staggerContainer} className="space-y-4">
                  {highlights.map((point) => (
                    <motion.li
                      key={point}
                      variants={fadeInUp}
                      whileHover={{ x: 8 }}
                      className="group flex gap-4 border-b border-[#B8860B]/12 pb-4 type-body text-[#4f4038]"
                    >
                      <span className="mt-3 h-px w-8 shrink-0 bg-[#B8860B] transition-all duration-300 group-hover:w-12" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 42 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-[#D4A843]/22" />
                <img
                  src={facility1}
                  alt="Sowbhagya Mahal guest facilities"
                  loading="lazy"
                  decoding="async"
                  width="1360"
                  height="1020"
                  className="relative h-[360px] w-full object-cover shadow-2xl sm:h-[480px]"
                />
              </motion.div>
            </div>
          </section>

          <section className="px-5 py-20 md:px-8 md:py-28 lg:px-12">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.14 }}
              className="mx-auto max-w-[1240px]"
            >
              <motion.div variants={fadeInUp} className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
                <div>
                  <p className="type-eyebrow mb-4 text-[#B8860B]">Venue Glimpses</p>
                  <h2 className="font-serif text-[34px] font-semibold leading-[1.16] text-[#5A111C] md:text-5xl">
                    Spaces made for warm family moments.
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#5A111C] px-7 type-cta text-[#D4A843] shadow-[0_14px_30px_rgba(90,17,28,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#3F0C15] hover:text-[#fdfbf7]"
                >
                  Book a Visit
                </button>
              </motion.div>

              <div className="grid gap-5 md:grid-cols-3">
                {galleryImages.map((image, index) => (
                  <motion.figure
                    key={image.title}
                    variants={fadeInUp}
                    whileHover={{ y: -10, scale: 1.01 }}
                    className={`group relative overflow-hidden shadow-[0_20px_48px_rgba(90,17,28,0.1)] ${index === 1 ? "md:mt-10" : ""}`}
                  >
                    <div className="absolute inset-0 z-10 border border-[#D4A843]/22 transition-all duration-500 group-hover:inset-3 group-hover:border-[#D4A843]/55" />
                    <img
                      src={image.src}
                      alt={image.title}
                      loading="lazy"
                      decoding="async"
                      width="1360"
                      height="1020"
                      className="h-[340px] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#3F0C15]/90 to-transparent px-5 pb-5 pt-20">
                      <span className="mb-3 block h-px w-12 bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
                      <span className="font-serif text-2xl font-semibold text-[#fdfbf7]">{image.title}</span>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </motion.div>
          </section>

          <section className="relative overflow-hidden bg-[#5A111C] px-5 py-20 text-center text-[#fdfbf7] md:px-8 md:py-28 lg:px-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,168,67,0.22),transparent_34%)]" />
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              className="relative z-10 mx-auto max-w-4xl"
            >
              <motion.div variants={fadeInUp} className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full border border-[#D4A843]/40 text-[#D4A843]">
                <Sparkles size={20} strokeWidth={1.6} aria-hidden="true" />
              </motion.div>
              <motion.h2 variants={fadeInUp} className="font-serif text-[34px] font-semibold leading-[1.16] md:text-5xl">
                Plan your celebration at <span className="italic text-[#D4A843]">Sowbhagya Mahal</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="mx-auto mt-6 max-w-2xl type-body text-[#fdfbf7]/78">
                Our management assures you that once your function is booked with us, we treat it
                with the care and attention of our own family celebration.
              </motion.p>
              <motion.div variants={fadeInUp} className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={openForm}
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#f4dc86_0%,#D4A843_52%,#B8860B_100%)] px-9 type-cta text-[#3F0C15] shadow-[0_16px_34px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.45)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_44px_rgba(0,0,0,0.3)]"
                >
                  Enquire Now
                </button>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ayswariya%20Mahal%20Arumbakkam%20Chennai"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#fdfbf7]/70 bg-[#fdfbf7]/10 px-9 type-cta text-[#fdfbf7] backdrop-blur-md transition duration-300 hover:bg-[#D4A843] hover:text-[#3F0C15]"
                >
                  <MapPin size={17} aria-hidden="true" />
                  Get Directions
                </a>
              </motion.div>
            </motion.div>
          </section>
        </main>
      </PageTransition>
    </>
  );
}
