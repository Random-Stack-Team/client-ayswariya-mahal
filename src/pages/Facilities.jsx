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
    description: "Comfortable climate-controlled environment for guests.",
  },
  {
    image: facility2,
    width: 1448,
    height: 1086,
    icon: <Building2 size={26} />,
    title: "Spacious Event Hall",
    description: "Elegant interiors for grand celebrations.",
  },
  {
    image: facility3,
    width: 1448,
    height: 1086,
    icon: <UtensilsCrossed size={26} />,
    title: "Dining Hall",
    description: "Royal Dining Experience Setup Grandeur.",
  },
  {
    image: facility4,
    width: 1536,
    height: 1024,
    icon: <BedDouble size={26} />,
    title: "Luxury rooms ",
    description: "Luxury rooms for family stay with comfort.",
  },
  {
    image: facility5,
    width: 1536,
    height: 1024,
    icon: <Car size={26} />,
    title: "Ample Parking",
    description: "Spacious parking area.",
  },
  {
    image: facility6,
    width: 1536,
    height: 1024,
    icon: <ShieldCheck size={26} />,
    title: "CCTV Security",
    description: "24/7 surveillance system.",
  },
  {
    image: facility7,
    width: 1536,
    height: 1024,
    icon: <Zap size={26} />,
    title: "Generator Backup",
    description: "Power backup ensured.",
  },
  {
    image: facility8,
    width: 1536,
    height: 1024,
    icon: <MapPin size={26} />,
    title: "Prime Location",
    description: "Easily accessible venue.",
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

/* =========================
   TEXT SPLIT ANIMATION
========================= */
const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.28,
    },
  },
};

const wordVariant = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.92,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};


/* =========================
   TEXT COMPONENT
========================= */
const AdvancedText = ({ text }) => {
  return (
    <motion.div
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="inline-block"
      style={{ perspective: "1000px" }}
    >
      {text.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={wordVariant}
          className="inline-block mr-3"
          style={{
            transformOrigin: "bottom",
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};


export default function Facilities() {
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
        <section className="relative h-screen flex items-center justify-center overflow-hidden">

          <motion.div
            initial={{ scale: 1.25 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImg})` }}
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="relative z-10 text-center text-white px-6">

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
    <h1 className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em]">
      <AdvancedText text="Enter The Royal Palace" />
    </h1>

    {/* SUBTITLE */}
    <p className="mt-6 type-body text-white/84">
      <AdvancedText text="Scroll to experience the unfolding journey" />
    </p>

  </motion.div>

</div>

        </section>

        {/* =========================
            FACILITY CARDS
        ========================= */}
        <section className="py-32 px-6">

          <div
            className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10"
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
                className="group relative"
              >

                {/* FRAME */}
                <div className="relative rounded-[42px] bg-[#5A111C] p-[4px] shadow-2xl overflow-hidden">

                  {/* BORDER */}
                  <div className="rounded-[38px] border border-[#e5c76b]/70 overflow-hidden">

                    {/* INNER CARD */}
                    <div className="relative bg-[#fcf9f4] rounded-[36px] overflow-hidden transition-all duration-500 group-hover:-translate-y-2">

                      {/* IMAGE */}
                      <div className="relative h-44 overflow-hidden">

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
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-30">
                        <div className="w-11 h-11 rounded-full bg-[#e5c76b] flex items-center justify-center text-[#5A111C] shadow-md">
                          {item.icon}
                        </div>
                      </div>

                      {/* TEXT */}
                      <div className="p-5 text-center relative z-30">

                        <h3 className="font-serif text-[22px] font-semibold leading-[1.2] tracking-[0.01em] text-[#5A111C] mb-2">
                          {item.title}
                        </h3>

                        <p className="type-body text-[#4f4038]">
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
        <section className="relative py-40 px-6 bg-[#5A111C] overflow-hidden">

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

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
                className="rounded-xl shadow-2xl w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white"
            >
              <h2 className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] mb-6">
                Walking Through Royal Luxury
              </h2>

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

            </motion.div>

          </div>

        </section>

        {/* =========================
            EXIT
        ========================= */}
        <section className="h-[40vh] flex items-center justify-center bg-[#fcf9f4]">

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#5A111C]">
              Begin Your Celebration
            </h2>
            <p className="type-body text-[#4f4038] mt-2">
              Ready to host your next event? Contact us to check availability.
            </p>
          </motion.div>

        </section>

        </main>
      </PageTransition>
    </>
  );
}
