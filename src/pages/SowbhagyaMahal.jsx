import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MapPin } from "lucide-react";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";
import { useEnquiry } from "../context/useEnquiry";

// Import images

import sowCrop2 from "../assets/images/sow-crop2.webp";
import sowCrop5 from "../assets/images/sow-crop5.webp";
import facility1 from "../assets/images/Facility/facility1.webp";


export default function SowbhagyaMahal() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const { openForm } = useEnquiry();

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.24,
        delayChildren: 0.08
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 1.15, ease: [0.16, 1, 0.3, 1] } }
  };



  const facilities = [
    { title: "500 Guests", subtitle: "Seating Capacity" },
    { title: "200 Guests", subtitle: "Dining Capacity" },
    { title: "1000", subtitle: "Floating Guest Capacity" },
    { title: "Centralized AC", subtitle: "Building" },
  ];

  const facilityCards = [
    { icon: "🌬️", title: "Centralized Air Conditioning" },
    { icon: "🍽️", title: "Fully Equipped Modern Kitchen" },
    { icon: "🛏️", title: "Luxurious Guest Rooms" },
    { icon: "⚡", title: "Backup Generator" },
    { icon: "🚿", title: "Geysers" },
    { icon: "📹", title: "CCTV Coverage" },
    { icon: "🪑", title: "Spacious Dining Hall" },
    { icon: "🌳", title: "Separate Rooftop Garden" },
    { icon: "🚗", title: "Easy Road Connectivity" },
    { icon: "🚇", title: "Metro Accessibility" },
  ];

  const whyChoosePoints = [
    "Same trusted management as Ayswariya Mahal",
    "Located in the same building",
    "Affordable cost without compromising comfort",
    "Modern architecture",
    "Suitable for weddings and family functions",
    "Easy accessibility by metro and road transport",
    "Peaceful and auspicious ambience",
    "Family-like hospitality from the management"
  ];

  const galleryItems = [
    { title: "Hall Interior", icon: "🏛️" },
    { title: "Wedding Stage", icon: "🎭" },
    { title: "Dining Area", icon: "🍴" },
    { title: "Rooftop Garden", icon: "🌺" },
    { title: "Guest Rooms", icon: "🛏️" },
    { title: "Lighting & Decor", icon: "✨" },
  ];

  return (
    <>
      <SEO 
        title="Sowbhagya Mahal - Premium Mini Hall for Beautiful Celebrations" 
        description="Sowbhagya Mahal is a proud part of Ayswariya Mahal. An equally grand mini hall with excellent facilities at affordable cost, perfect for weddings, engagements, receptions, birthday functions, and family gatherings."
        path="/sowbhagya-mahal"
      />
      <PageTransition>
        <main className="bg-[#fdfbf7] min-h-screen overflow-hidden" ref={containerRef}>

          {/* 1. Hero Section */}
          <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${sowCrop2})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/80 via-[#3F0C15]/70 to-[#fdfbf7]"></div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="relative z-10 max-w-[1280px] mx-auto text-center"
            >
              <motion.p
                variants={fadeInUp}
                className="type-eyebrow text-[#E5C76B] mb-6 drop-shadow-md"
              >
                Premium Mini Hall
              </motion.p>
              <motion.h1
                variants={fadeInUp}
                className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl"
              >
                Sowbhagya Mahal
              </motion.h1>
              <motion.h2
                variants={fadeInUp}
                className="font-serif text-[clamp(20px,4vw,36px)] font-semibold leading-[1.2] text-[#E5C76B] mt-4 drop-shadow-lg"
              >
                A Premium Mini Hall for Beautiful Celebrations
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mt-8 max-w-2xl mx-auto type-body text-[#fdfbf7]/90 drop-shadow-md"
              >
                Sowbhagya Mahal is a proud part of Ayswariya Mahal. It is an equally grand mini hall with excellent facilities at an affordable cost, perfect for weddings, engagements, receptions, birthday functions, family gatherings, and special celebrations.
              </motion.p>

              {/* Highlight Badges */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="mt-12 flex flex-wrap gap-4 justify-center"
              >
                {[
                  { label: "500 Seating Capacity" },
                  { label: "200 Dining Capacity" },
                  { label: "1000 Floating Guests" }
                ].map((badge) => (
                  <motion.div
                    key={badge.label}
                    variants={fadeInUp}
                    className="px-6 py-3 bg-[#d4af37]/20 border border-[#d4af37]/40 rounded-full backdrop-blur-sm"
                  >
                    <p className="text-[#E5C76B] font-semibold text-sm">{badge.label}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="mt-12 flex flex-wrap gap-4 justify-center"
              >
                <motion.button
                  variants={fadeInUp}
                  onClick={() => document.getElementById('facilities')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-3 bg-[#d4af37] text-[#3F0C15] font-semibold rounded-full hover:bg-[#e5c76b] transition-colors duration-300"
                >
                  Explore Facilities
                </motion.button>
                <motion.button
                  variants={fadeInUp}
                  onClick={openForm}
                  className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37]/10 transition-colors duration-300"
                >
                  Enquire Now
                </motion.button>
              </motion.div>
            </motion.div>
          </section>

          {/* 2. About Section */}
          <section className="py-24 md:py-32 px-6">
            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#d4af37] rounded-sm transform translate-x-4 translate-y-4 opacity-20"></div>
                <div className="relative overflow-hidden rounded-sm shadow-2xl">
                  <motion.img
                    style={{ y: parallaxY }}
                    src={sowCrop5}
                    alt="Sowbhagya Mahal About"
                    loading="lazy"
                    decoding="async"
                    width="1360"
                    height="1020"
                    className="w-full h-[600px] object-cover scale-110"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                className="relative z-10"
              >
                <motion.p variants={fadeInUp} className="type-eyebrow text-[#b58c2a] mb-4">
                  About Sowbhagya Mahal
                </motion.p>
                <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] mb-8">
                  A Grand Mini Hall with <span className="italic text-[#b58c2a]">Modern Comfort</span>
                </motion.h2>
                <motion.div variants={fadeInUp} className="w-16 h-[1px] bg-[#d4af37] mb-8"></motion.div>
                <motion.p variants={fadeInUp} className="type-body text-[#4f4038] mb-6">
                  Sowbhagya Mahal is located in the same building as Ayswariya Mahal and offers a spacious, elegant, and comfortable celebration space. It is designed for families who want a premium venue experience with modern facilities and warm hospitality at an affordable cost.
                </motion.p>
                <motion.p variants={fadeInUp} className="type-body text-[#4f4038]">
                  The hall includes centralized air conditioning, a fully equipped modern kitchen, luxurious guest rooms, backup generator, geysers, CCTV coverage, spacious dining hall, and a separate rooftop garden.
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* 3. Capacity Section */}
          <section id="facilities" className="py-24 md:py-32 px-6 bg-[#f5ead9]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-[1280px] mx-auto"
            >
              <motion.p variants={fadeInUp} className="type-eyebrow text-[#6A1724] mb-4 text-center">
                Venue Capacity
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] text-center mb-16">
                Premium Capacity for <span className="italic text-[#b58c2a]">Every Celebration</span>
              </motion.h2>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {facilities.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="relative overflow-hidden rounded-sm bg-white/60 backdrop-blur-sm p-8 border border-[#d4af37]/28 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent pointer-events-none"></div>
                    <div className="relative z-10">
                      <h3 className="font-display text-[clamp(28px,4vw,48px)] font-bold text-[#6A1724] mb-2">
                        {item.title}
                      </h3>
                      <p className="type-eyebrow text-[#b58c2a]">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 4. Facilities Section */}
          <section className="py-24 md:py-32 px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-[1280px] mx-auto"
            >
              <motion.p variants={fadeInUp} className="type-eyebrow text-[#b58c2a] mb-4 text-center">
                What We Offer
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] text-center mb-16">
                Comprehensive Facilities for <span className="italic text-[#b58c2a]">Seamless Events</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {facilityCards.map((facility, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="p-6 rounded-sm bg-[#fff8ed] border border-[#d4af37]/20 hover:border-[#d4af37]/60 hover:shadow-lg transition-all duration-300 text-center"
                  >
                    <div className="text-4xl mb-4">{facility.icon}</div>
                    <p className="font-semibold text-[#4a3623] text-sm">{facility.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* 5. Why Choose Sowbhagya Mahal */}
          <section className="py-24 md:py-32 px-6 bg-[#f5ead9]">
            <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute inset-0 bg-[#d4af37] rounded-sm transform translate-x-4 translate-y-4 opacity-20"></div>
                <div className="relative overflow-hidden rounded-sm shadow-2xl">
                  <img
                    src={facility1}
                    alt="Why Choose Sowbhagya Mahal"
                    loading="lazy"
                    decoding="async"
                    width="1360"
                    height="1020"
                    className="w-full h-[600px] object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
              >
                <motion.p variants={fadeInUp} className="type-eyebrow text-[#6A1724] mb-4">
                  Why Choose Us
                </motion.p>
                <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] mb-8">
                  Trusted Excellence, <span className="italic text-[#b58c2a]">Affordable Luxury</span>
                </motion.h2>
                <motion.div variants={fadeInUp} className="w-16 h-[1px] bg-[#d4af37] mb-8"></motion.div>

                <ul className="space-y-4">
                  {whyChoosePoints.map((point, idx) => (
                    <motion.li
                      key={idx}
                      variants={fadeInUp}
                      className="flex items-start gap-4 type-body text-[#4f4038]"
                    >
                      <span className="text-[#d4af37] font-bold mt-1">•</span>
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </section>

          {/* 6. Experience Section */}
          <section className="py-32 md:py-48 bg-[#5A111C] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-4xl mx-auto text-center px-6 relative z-10"
            >
              <motion.p variants={fadeInUp} className="type-eyebrow text-[#E5C76B] mb-6">
                Our Promise
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#fdfbf7] mb-10 drop-shadow-lg">
                Celebrate Peacefully, Remember <span className="italic text-[#E5C76B]">Forever</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="type-body text-[#fdfbf7]/82 max-w-3xl mx-auto">
                Our management believes every function should be treated like our own family celebration. From the moment you book your event, we take care of the comfort, coordination, and hospitality needed to create a happy, peaceful, and memorable experience.
              </motion.p>
            </motion.div>
          </section>

          {/* 7. Gallery Preview */}
          <section className="py-24 md:py-32 px-6">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-[1280px] mx-auto"
            >
              <motion.p variants={fadeInUp} className="type-eyebrow text-[#b58c2a] mb-4 text-center">
                Gallery Preview
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] text-center mb-16">
                Visual Stories of <span className="italic text-[#b58c2a]">Beautiful Events</span>
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {galleryItems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="relative h-64 rounded-sm overflow-hidden bg-gradient-to-br from-[#d4af37]/20 to-[#917B7B]/20 border border-[#d4af37]/20 flex items-center justify-center cursor-pointer hover:border-[#d4af37]/60 transition-all duration-300 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5A111C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 text-center">
                      <div className="text-5xl mb-4">{item.icon}</div>
                      <p className="font-semibold text-[#4a3623] group-hover:text-[#d4af37] transition-colors">{item.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={fadeInUp} className="text-center">
                <button className="px-8 py-3 bg-[#d4af37] text-[#3F0C15] font-semibold rounded-full hover:bg-[#e5c76b] transition-colors duration-300">
                  View Gallery
                </button>
              </motion.div>
            </motion.div>
          </section>

          {/* 8. Location Section */}
          <section className="py-24 md:py-32 px-6 bg-[#f5ead9]">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-[1280px] mx-auto text-center"
            >
              <motion.p variants={fadeInUp} className="type-eyebrow text-[#6A1724] mb-4">
                Location
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] mb-8">
                Easy to Reach, Convenient for <span className="italic text-[#b58c2a]">Every Guest</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="type-body text-[#4f4038] max-w-2xl mx-auto mb-8">
                Sowbhagya Mahal has excellent connectivity through road and metro, making it convenient for guests arriving from different parts of the city.
              </motion.p>
              <motion.button
                variants={fadeInUp}
                className="px-8 py-3 border-2 border-[#d4af37] text-[#d4af37] font-semibold rounded-full hover:bg-[#d4af37]/10 transition-colors duration-300 inline-flex items-center gap-2"
              >
                <MapPin size={20} />
                Get Directions
              </motion.button>
            </motion.div>
          </section>

          {/* 9. Final Enquiry CTA */}
          <section className="py-32 md:py-48 bg-gradient-to-br from-[#5A111C] to-[#3F0C15] relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="max-w-4xl mx-auto text-center px-6 relative z-10"
            >
              <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#fdfbf7] mb-8">
                Plan Your Celebration at <span className="italic text-[#E5C76B]">Sowbhagya Mahal</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="type-body text-[#fdfbf7]/82 max-w-3xl mx-auto mb-10">
                Book your wedding, reception, engagement, birthday function, or family event with Sowbhagya Mahal and enjoy a premium celebration experience with comfort, elegance, and care.
              </motion.p>
              <motion.button
                variants={fadeInUp}
                onClick={openForm}
                className="px-12 py-4 bg-[#d4af37] text-[#3F0C15] font-semibold rounded-full hover:bg-[#e5c76b] transition-colors duration-300 text-lg"
              >
                Enquire Now
              </motion.button>
            </motion.div>
          </section>

        </main>
      </PageTransition>
    </>
  );
}
