import { motion } from "framer-motion";
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
import facilitiesImg from "../assets/images/facility1.webp";
import bgImg from "../assets/images/facility.webp";
import SEO from "../components/common/SEO";

const facilities = [
  {
    icon: <AirVent size={36} strokeWidth={1.5} />,
    title: "Centralized Air Conditioning",
    description: "Comfortable climate-controlled environment for guests throughout the event.",
  },
  {
    icon: <Building2 size={36} strokeWidth={1.5} />,
    title: "Spacious Event Hall",
    description: "Accommodates large gatherings with ample seating and elegant interiors.",
  },
  {
    icon: <UtensilsCrossed size={36} strokeWidth={1.5} />,
    title: "Dining Hall",
    description: "Dedicated dining area designed for smooth guest experience and service.",
  },
  {
    icon: <BedDouble size={36} strokeWidth={1.5} />,
    title: "Guest Rooms",
    description: "Premium, comfortable rooms available for bride, groom, and family members.",
  },
  {
    icon: <Car size={36} strokeWidth={1.5} />,
    title: "Ample Parking",
    description: "Large parking area ensuring convenience and safety for all guests.",
  },
  {
    icon: <ShieldCheck size={36} strokeWidth={1.5} />,
    title: "CCTV Security",
    description: "24/7 surveillance and professional security systems for a safe environment.",
  },
  {
    icon: <Zap size={36} strokeWidth={1.5} />,
    title: "Generator Backup",
    description: "Uninterrupted celebrations with robust and reliable power backup facilities.",
  },
  {
    icon: <MapPin size={36} strokeWidth={1.5} />,
    title: "Prime Location",
    description: "Conveniently located with excellent accessibility and transport connectivity.",
  },
];

export default function Facilities() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <>
      <SEO 
        title="Premium Event Facilities" 
        description="Explore our world-class amenities including a 1500-seater hall, spacious dining, premium guest rooms, and state-of-the-art infrastructure." 
        path="/facilities"
      />
      <main className="bg-[#fdfbf7] min-h-screen">

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bgImg})` }}
        ></div>
        {/* Dark Cinematic Overlay fading into page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A0A12]/80 via-[#1c0d11]/70 to-[#fdfbf7]"></div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-[1280px] mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6 text-[#E5C76B]">
            <Sparkles size={24} strokeWidth={1} />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="font-serif uppercase tracking-[0.4em] text-[#E5C76B] mb-6 font-bold text-sm drop-shadow-md"
          >
            Our Facilities
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-[#fdfbf7] drop-shadow-2xl leading-tight"
          >
            Designed For <br/><span className="italic text-[#E5C76B]">Grand Celebrations</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-[#fdfbf7]/90 font-serif leading-relaxed drop-shadow-md"
          >
            Every facility at Ayswariya Mahal is thoughtfully designed
            to ensure a comfortable, memorable, and absolutely seamless experience
            for every guest.
          </motion.p>
        </motion.div>
      </section>

      {/* Facilities Grid */}
      <section className="pb-32 px-6 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                variants={fadeInUp}
                className="group relative bg-white rounded-sm p-8 border-[1px] border-[#d4af37]/20 shadow-[0_5px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(212,175,55,0.15)] transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#fdfbf7] to-[#f9f1de] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-[#fdfbf7] border border-[#d4af37]/30 flex items-center justify-center text-[#b58c2a] mb-6 group-hover:scale-110 group-hover:bg-[#d4af37] group-hover:text-white transition-all duration-500 shadow-sm">
                    {facility.icon}
                  </div>

                  <h3 className="font-display text-2xl mb-3 text-[#4a3623] group-hover:text-[#8a6a1c] transition-colors">
                    {facility.title}
                  </h3>

                  <p className="font-serif text-[#5c4a3d] leading-relaxed text-sm">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlight Section (Dark Maroon) */}
      <section className="bg-[#4A0A12] py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
        
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#E5C76B] rounded-sm transform -translate-x-4 translate-y-4 opacity-20"></div>
            <div className="relative overflow-hidden rounded-sm shadow-2xl border border-[#E5C76B]/20">
              <img
                src={facilitiesImg}
                alt="Premium Facilities"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.p variants={fadeInUp} className="font-serif uppercase tracking-[0.3em] text-[#E5C76B] mb-4 font-bold text-sm">
              Why Choose Us
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-display text-[#fdfbf7] mb-10 leading-tight">
              Everything You Need <br/><span className="italic text-[#E5C76B]">Under One Roof</span>
            </motion.h2>

            <motion.ul variants={staggerContainer} className="grid sm:grid-cols-2 gap-y-6 gap-x-4 text-[#fdfbf7]/90 font-serif text-lg">
              {[
                "Seating Capacity up to 1500",
                "Floating Capacity up to 2500",
                "Fully Air Conditioned Hall",
                "Spacious Dining Area",
                "Premium Guest Rooms",
                "CCTV Surveillance",
                "Power Backup Facility",
                "Large Parking Space"
              ].map((item, i) => (
                <motion.li key={i} variants={fadeInUp} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E5C76B]/20 flex items-center justify-center text-[#E5C76B] text-sm">✓</span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>

          </motion.div>

        </div>
      </section>

      </main>
    </>
  );
}