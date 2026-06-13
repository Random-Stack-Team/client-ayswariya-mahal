import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/about.webp";
import heroImg from "../assets/images/hero.webp";
import sowCrop3 from "../assets/images/sow-crop3.jpg";
import { Sparkles, Flower2, HeartHandshake, Gem } from "lucide-react";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";

export default function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

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

  const pillars = [
    {
      title: "Tradition with Grace",
      body: "We honour the beauty of Indian celebrations with spaces designed for rituals, family gatherings, and timeless memories.",
      icon: Flower2,
    },
    {
      title: "Care in Every Detail",
      body: "From the first welcome to the final farewell, every moment is handled with warmth, attention, and quiet elegance.",
      icon: HeartHandshake,
    },
    {
      title: "Memories That Last",
      body: "We create the setting where promises are made, families come together, and celebrations become stories remembered for generations.",
      icon: Gem,
    },
  ];

  return (
    <>
      <SEO 
        title="About Us - Premium Wedding Venue Legacy" 
        description="Discover Ayswariya Mahal, a trusted Chennai wedding venue with over two decades of celebrations, elegant event spaces, thoughtful hospitality, and facilities for weddings, receptions, and family functions." 
        path="/about"
      />
      <PageTransition>
        <main className="bg-[#fdfbf7] min-h-screen overflow-hidden" ref={containerRef}>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        {/* Dark Cinematic Overlay fading into page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/80 via-[#3F0C15]/70 to-[#fdfbf7]"></div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-site mx-auto text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6 text-[#E5C76B]">
            <Sparkles size={24} strokeWidth={1} />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="type-eyebrow text-[#E5C76B] mb-6 drop-shadow-md"
          >
            About Us
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl"
          >
            A Legacy of <br/><span className="italic text-[#E5C76B]">Celebrations</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-2xl mx-auto type-body text-[#fdfbf7]/90 drop-shadow-md"
          >
            For over two decades, Ayswariya Mahal has been the
            destination for unforgettable weddings, receptions,
            engagements, and family celebrations.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-site mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#d4af37] rounded-sm transform translate-x-4 translate-y-4 opacity-20"></div>
            <div className="relative overflow-hidden rounded-sm shadow-2xl luxury-image-overlay">
              <motion.img
                style={{ y: parallaxY }}
                src={aboutImg}
                alt="Ayswariya Mahal Story"
                loading="lazy"
                decoding="async"
                width="1360"
                height="1020"
                className="w-full h-[600px] object-cover scale-110"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-10 pointer-events-none"></div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="relative z-10"
          >
            <motion.p variants={fadeInUp} className="type-eyebrow text-[#b58c2a] mb-4">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] mb-8">
              Creating Memorable Moments <span className="italic text-[#b58c2a]">Since 2001</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-[1px] bg-[#d4af37] mb-8"></motion.div>
            <motion.p variants={fadeInUp} className="type-body text-[#4f4038] mb-6">
              Ayswariya Mahal was established with a vision to provide
              families with a beautiful venue where life's most cherished
              celebrations can take place.
            </motion.p>
            <motion.p variants={fadeInUp} className="type-body text-[#4f4038]">
              With spacious interiors, modern facilities, and a commitment
              to excellence, we have proudly hosted thousands of successful
              weddings and events over the years, becoming a cornerstone of joyous celebrations.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* Celebration Pillars - Premium Wedding Card Layout */}
      <section className="py-[52px] md:py-[72px] px-6 bg-[#f5ead9] relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(212,168,67,0.05),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-site mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-12 md:mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-[32px] md:text-[44px] font-semibold leading-[1.2] tracking-[0.01em] text-[#5A111C] mb-4">
              Our Promise to Every Celebration
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-px bg-[#D4A843] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="font-body text-[#4f4038] text-lg md:text-xl max-w-2xl mx-auto italic font-light">
              Every event at Ayswariya Mahal is shaped with care, tradition, and the warmth of family.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                  className="group relative flex flex-col items-center text-center p-[22px] md:p-[28px] bg-[#fdfbf7] rounded-[12px] border border-[#d4af37]/40 shadow-[0_12px_30px_rgba(90,17,28,0.06)] hover:shadow-[0_20px_40px_rgba(212,168,67,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Decorative thin gold top border glow */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Subtle corner ornaments */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#d4af37]/30 rounded-tl-sm opacity-50"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#d4af37]/30 rounded-tr-sm opacity-50"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#d4af37]/30 rounded-bl-sm opacity-50"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#d4af37]/30 rounded-br-sm opacity-50"></div>
                  
                  {/* Soft background glow on hover */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,67,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#fff8ed] mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Icon className="text-[#d4af37]" size={20} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-serif text-2xl font-semibold leading-[1.2] text-[#5A111C] mb-4">
                      {pillar.title}
                    </h3>
                    
                    <div className="w-10 h-px bg-[#d4af37]/50 mb-5"></div>
                    
                    <p className="font-body text-[#4f4038] leading-[1.7] text-[15px] md:text-[16px]">
                      {pillar.body}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy & Mission Redesign - Maroon Theme */}
      <section className="py-12 md:py-16 lg:py-20 px-6 bg-[#5A111C] relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,199,107,0.15),transparent_50%)] pointer-events-none"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_100%,rgba(229,199,107,0.08),transparent_40%)] pointer-events-none"
        />

        <div className="max-w-site mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20 relative z-10">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full max-w-5xl mx-auto space-y-8"
          >
            {/* Philosophy Card */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-8 md:p-10 border border-[#D4A843]/20 bg-gradient-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.1)] group"
            >
              <div className="absolute top-0 left-8 w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
              <div className="absolute top-8 left-0 w-px h-12 bg-[#D4A843]/50" />
              <div className="absolute bottom-0 right-8 w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
              <div className="absolute bottom-8 right-0 w-px h-12 bg-[#D4A843]/50" />
              
              <div className="flex items-center gap-3 mb-5">
                <Sparkles size={20} className="text-[#D4A843]" strokeWidth={1.5} />
                <h2 className="font-serif text-[28px] md:text-4xl font-semibold leading-[1.2] text-[#fdfbf7]">
                  Our Philosophy
                </h2>
              </div>
              <p className="type-body text-[#fdfbf7]/85 leading-relaxed">
                Every celebration deserves to feel personal, graceful, and unforgettable. At Ayswariya Mahal, we craft each event with care, tradition, and attention to every meaningful detail.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-8 md:p-10 border border-[#D4A843]/20 bg-gradient-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.1)] group"
            >
              <div className="absolute top-0 left-8 w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
              <div className="absolute top-8 left-0 w-px h-12 bg-[#D4A843]/50" />
              <div className="absolute bottom-0 right-8 w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
              <div className="absolute bottom-8 right-0 w-px h-12 bg-[#D4A843]/50" />

              <div className="flex items-center gap-3 mb-5">
                <Sparkles size={20} className="text-[#D4A843]" strokeWidth={1.5} />
                <h2 className="font-serif text-[28px] md:text-4xl font-semibold leading-[1.2] text-[#fdfbf7]">
                  Our Mission
                </h2>
              </div>
              <p className="type-body text-[#fdfbf7]/85 leading-relaxed">
                To create elegant celebration spaces where families gather, memories are made, and every occasion is handled with warmth, dignity, and excellence.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Sowbhagya Mahal Intro Section */}
      <section className="relative overflow-hidden bg-[#f5ead9] px-6 py-20 md:py-28">
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-[#D4A843]/20 blur-3xl"
        />
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute bottom-0 right-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent"
        />

        <div className="max-w-site mx-auto grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -48, rotate: -1.5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, rotate: -0.5 }}
            className="relative"
          >
            <motion.div
              initial={{ x: 18, y: 18, opacity: 0 }}
              whileInView={{ x: 12, y: 12, opacity: 0.26 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.15 }}
              className="absolute inset-0 rounded-sm bg-[#D4A843]"
            />
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-sm shadow-2xl luxury-image-overlay"
            >
              <motion.img
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1.04 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                src={sowCrop3}
                alt="Sowbhagya Mahal"
                loading="lazy"
                decoding="async"
                width="1360"
                height="1020"
                className="h-[360px] w-full object-cover sm:h-[460px] md:h-[560px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.35 }}
              className="absolute -bottom-6 left-5 border border-[#D4A843]/40 bg-[#5A111C] px-5 py-4 text-[#fdfbf7] shadow-[0_18px_36px_rgba(63,12,21,0.24)] sm:left-8"
            >
              <p className="font-display text-3xl font-bold leading-none text-[#D4A843]">500</p>
              <p className="mt-1 font-sans font-medium uppercase tracking-[0.08em] text-[11px] uppercase tracking-[0.16em]">Seated Guests</p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            className="relative z-10"
          >
            <motion.p variants={fadeInUp} className="type-eyebrow mb-4 text-[#B8860B]">
              Introducing Sowbhagya Mahal
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mb-7 font-serif text-[32px] font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] md:text-5xl">
              A Premium Mini Hall for <span className="italic text-[#B8860B]">Beautiful Celebrations</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mb-7 h-[1px] w-16 bg-[#B8860B]" />
            <motion.p variants={fadeInUp} className="type-body mb-5 text-[#4f4038]">
              Sowbhagya Mahal is a stable part of Ayswariya Mahal. It is an equally grand Mahal with equally good facilities at affordable cost.
            </motion.p>
            <motion.p variants={fadeInUp} className="type-body mb-7 text-[#4f4038]">
              Our hall is spacious with a seating capacity of 500 guests, dining capacity 200 and floating capacity of 1000, supported by centralized air conditioning, modern kitchen, guest rooms, backup generator, geysers, CCTV coverage, spacious dining and a separate rooftop garden.
            </motion.p>

            <motion.div variants={fadeInUp} className="mb-8 grid grid-cols-1 gap-4 min-[390px]:grid-cols-3">
              {[
                ["500", "Seating"],
                ["200", "Dining"],
                ["1000", "Floating"],
              ].map(([number, label]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -6 }}
                  className="border border-[#D4A843]/28 bg-[#fff8ed]/74 p-4 text-center shadow-[0_14px_34px_rgba(90,17,28,0.08)]"
                >
                  <p className="mb-1 font-display text-2xl font-bold text-[#5A111C]">{number}</p>
                  <p className="font-sans font-medium uppercase tracking-[0.08em] text-[11px] uppercase tracking-[0.14em] text-[#B8860B]">{label} Capacity</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Link
                to="/sowbhagya-mahal"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#D4A843] px-8 font-sans font-medium uppercase tracking-[0.08em] text-[13px] uppercase tracking-[0.12em] text-[#3F0C15] shadow-[0_16px_34px_rgba(90,17,28,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B8860B] hover:text-[#fdfbf7]"
              >
                Explore Sowbhagya Mahal
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </main>
      </PageTransition>
    </>
  );
}
