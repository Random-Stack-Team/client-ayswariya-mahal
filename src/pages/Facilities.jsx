import { motion } from "framer-motion";
import PageTransition from "../components/common/PageTransition";

import {
  Building2,
  Car,
  ShieldCheck,
  Zap,
  UtensilsCrossed,
  BedDouble,
  AirVent,
  MapPin,
  Sparkles
} from "lucide-react";

import facility1 from "../assets/images/Facility/facility1.webp";
import facility2 from "../assets/images/Facility/facility2.webp";
import facility3 from "../assets/images/Facility/facility3.webp";
import facility4 from "../assets/images/Facility/facility4.webp";
import facility5 from "../assets/images/Facility/facility5.webp";
import facility6 from "../assets/images/Facility/facility6.webp";
import facility7 from "../assets/images/Facility/facility7.webp";
import facility8 from "../assets/images/Facility/facility8.webp";




import bgImg from "../assets/images/facility.webp";

import SEO from "../components/common/SEO";
import { useEnquiry } from "../context/useEnquiry";

/* =========================
   DATA
========================= */
const facilities = [
  {
    image: facility1,
    width: 1537,
    height: 1023,
    icon: <AirVent size={26} />,
    title: "Centralized AC",
    description: "A fully climate-controlled setting for a comfortable gathering from start to finish.",
  },
  {
    image: facility2,
    width: 1448,
    height: 1086,
    icon: <Building2 size={26} />,
    title: "Spacious Event Hall",
    description: "A generous main hall designed to frame weddings, receptions, and milestone occasions with grace.",
  },
  {
    image: facility3,
    width: 1448,
    height: 1086,
    icon: <UtensilsCrossed size={26} />,
    title: "Dining Hall",
    description: "Thoughtfully arranged dining space for smooth service and a refined guest experience.",
  },
  {
    image: facility4,
    width: 1536,
    height: 1024,
    icon: <BedDouble size={26} />,
    title: "Luxury Rooms",
    description: "Welcoming guest rooms prepared for family comfort and privacy.",
  },
  {
    image: facility5,
    width: 1536,
    height: 1024,
    icon: <Car size={26} />,
    title: "Ample Parking",
    description: "Ample parking that makes arrival and departure easy for every guest.",
  },
  {
    image: facility6,
    width: 1536,
    height: 1024,
    icon: <ShieldCheck size={26} />,
    title: "CCTV Security",
    description: "Round-the-clock security coverage for added peace of mind.",
  },
  {
    image: facility7,
    width: 1536,
    height: 1024,
    icon: <Zap size={26} />,
    title: "Generator Backup",
    description: "Reliable generator support to keep celebrations uninterrupted.",
  },
  {
    image: facility8,
    width: 1536,
    height: 1024,
    icon: <MapPin size={26} />,
    title: "Prime Location",
    description: "A centrally connected venue with convenient access for local and out-of-town guests.",
  },
];

/* =========================
   CARD ANIMATION
========================= */
const cardMotion = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 46,
  },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: i * 0.07,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export default function Facilities() {
  const { openForm } = useEnquiry();
  return (
    <>
      <SEO
        title="Wedding Hall Facilities & Guest Amenities"
        description="Explore Ayswariya Mahal facilities including spacious event halls, centralized air conditioning, royal dining, luxury rooms, ample parking, CCTV security, generator backup, and prime Chennai access."
        path="/facilities"
      />

      <PageTransition>
        <main className="relative min-h-screen bg-[#fcf9f4] overflow-x-hidden">

        {/* =========================
            HERO
        ========================= */}
        <section className="relative flex min-h-[600px] items-center justify-center overflow-hidden md:min-h-[680px] lg:min-h-screen">

          <motion.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
          />

          <div className="absolute inset-0 bg-black/55" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] bg-[linear-gradient(180deg,rgba(253,251,247,0)_0%,rgba(253,251,247,0.12)_24%,rgba(253,251,247,0.42)_58%,rgba(253,251,247,1)_100%)]" />

          <div className="relative z-10 text-center text-white px-5 sm:px-6">

  {/* ICON + TEXT SYNC WRAPPER */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.6 }}
  >

    {/* ICON (SYNCHRONIZED FIRST) */}
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          scale: 0.4,
          rotate: -90,
          filter: "blur(8px)",
        },
        show: {
          opacity: 1,
          scale: 1,
          rotate: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.9,
            ease: [0.25, 1, 0.3, 1],
          },
        },
      }}
      className="flex justify-center mb-6 text-[#E5C76B]"
    >
      <Sparkles size={28} />
    </motion.div>

    {/* TITLE */}
    <h1 className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] md:max-lg:text-[60px]">
      <span className="text-white">
        Where Grand
      </span>{" "}
      <span className="text-[#E5C76B]">
        Celebrations Come to Life
      </span>
    </h1>

    {/* SUBTITLE */}
    <p className="mt-6 type-body text-white/84 max-w-3xl mx-auto">
      Discover thoughtfully crafted spaces designed for unforgettable weddings, receptions, and cherished family moments.
    </p>

    <p className="mt-4 type-small text-white/70">
      Every detail is shaped to make your celebration feel effortless, elegant, and memorable.
    </p>

  </motion.div>

</div>

        </section>

        {/* =========================
            FACILITY CARDS
        ========================= */}
        <section className="py-16 px-5 sm:px-6 md:py-20 lg:py-24 xl:py-32">

          <div
            className="mx-auto grid max-w-[520px] grid-cols-1 items-stretch gap-7 md:max-w-4xl md:grid-cols-2 md:gap-8 lg:max-w-5xl lg:grid-cols-2 xl:max-w-7xl xl:grid-cols-4 xl:gap-10"
            style={{ perspective: "1400px" }}
          >

            {facilities.map((item, i) => (

              <motion.div
                key={i}
                custom={i}
                variants={cardMotion}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="group relative h-full"
              >

                {/* FRAME */}
                <div className="relative h-full rounded-[28px] bg-[#5A111C]/86 p-[2px] shadow-[0_20px_50px_rgba(63,12,21,0.12)] overflow-hidden md:p-[3px] xl:rounded-[40px]">

                  {/* BORDER */}
                  <div className="h-full rounded-[25px] border border-[#e5c76b]/42 overflow-hidden xl:rounded-[37px]">

                    {/* INNER CARD */}
                    <div className="relative flex h-full min-h-[430px] flex-col overflow-hidden rounded-[23px] bg-[#fcf9f4] transition-all duration-500 group-hover:-translate-y-1 md:min-h-[440px] xl:min-h-0 xl:rounded-[35px]">

                      {/* IMAGE */}
                      <div className="relative h-52 flex-shrink-0 overflow-hidden sm:h-56 md:h-48 lg:h-52 xl:h-44">

                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          width={item.width}
                          height={item.height}
                          className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#5A111C]/70 to-transparent" />

                      </div>

                      {/* ICON */}
                      <div className="absolute top-4 left-1/2 z-30 -translate-x-1/2">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#e5c76b] text-[#5A111C] shadow-md md:h-12 md:w-12 xl:h-11 xl:w-11">
                          {item.icon}
                        </div>
                      </div>

                      {/* TEXT */}
                      <div className="relative z-30 flex flex-1 flex-col justify-start gap-3 px-6 py-7 text-center md:px-7 md:py-7 xl:justify-between xl:p-5">

                        <h3 className="mb-2 font-serif text-[24px] font-semibold leading-[1.2] tracking-[0.01em] text-[#5A111C] xl:text-[22px]">
                          {item.title}
                        </h3>

                        <p className="type-body text-[#4f4038] md:max-lg:text-[16px] md:max-lg:leading-[1.75]">
                          {item.description}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </section>

        {/* =========================
            CORRIDOR SECTION
        ========================= */}
        <section className="relative px-5 pt-16 pb-[calc(4rem+env(safe-area-inset-bottom))] sm:px-6 md:pt-20 md:pb-[calc(5rem+env(safe-area-inset-bottom))] lg:py-40 bg-gradient-to-b from-[#5A111C] via-[#5A111C] to-[#4a0f18] overflow-hidden">

          <div className="max-w-6xl mx-auto grid md:grid-cols-[0.95fr_1fr] lg:grid-cols-2 gap-10 md:gap-10 lg:gap-16 items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src={facility1}
                loading="lazy"
                decoding="async"
                width="1537"
                height="1023"
                alt="Facilities Corridor"
                className="h-[320px] w-full rounded-xl object-cover shadow-2xl sm:h-[380px] md:h-[360px] lg:h-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <h2 className="font-serif text-[32px] md:text-[40px] lg:text-5xl font-semibold leading-[1.2] tracking-[0.01em] mb-6">
                Begin Your Celebration
              </h2>

              <p className="type-body text-white/82 mb-6 max-w-xl">
                A refined invitation to begin planning a celebration shaped with care, hospitality, and timeless elegance.
              </p>

              <ul className="space-y-4 type-body text-white/84">
                {[
                  "1500+ Guest Capacity",
                  "Royal Dining Experience",
                  "Premium Guest Rooms",
                  "Grand Parking Space",
                  "Traditional + Modern Blend"
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#E5C76B]">✦</span>
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button onClick={openForm} className="min-h-12 w-full px-8 py-3.5 bg-[#d4af37] text-[#3F0C15] font-semibold rounded-full hover:bg-[#e5c76b] transition-all duration-300 shadow-lg shadow-[#3F0C15]/20 sm:w-auto">
                  Book a Visit
                </button>
              </div>
            </motion.div>

          </div>

        </section>

        </main>
      </PageTransition>
    </>
  );
}
