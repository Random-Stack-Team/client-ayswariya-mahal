import { motion } from "framer-motion";
import aboutImg from "../assets/images/about.webp";
import heroImg from "../assets/images/Gallery/hall5.webp";
import keralaJewellersImg from "../assets/images/kerala intro.webp";
import pebblesImg from "../assets/images/pebbels intro.webp";
import { Sparkles, Flower2, HeartHandshake, Gem, GemIcon, Home } from "lucide-react";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";

export default function About() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.12
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1.36, ease: "easeOut" } }
  };

  const revealViewport = { once: true, amount: 0.18 };

  const pillars = [
    {
      title: "Tradition with Grace",
      body: "We honour Indian tradition with spaces designed for sacred rituals, family unions, and lasting memories.",
      icon: Flower2,
    },
    {
      title: "Care in Every Detail",
      body: "From arrival to farewell, every detail is handled with care, precision, and warmth.",
      icon: HeartHandshake,
    },
    {
      title: "Stories That Stay",
      body: "We shape the space where vows, union, and memory converge.",
      icon: Gem,
    },
  ];

  return (
    <>
      <SEO 
        title="About Us - Premium Wedding Venue Legacy" 
        description="Discover Ayswariya Mahal, a trusted Chennai wedding venue with over two decades of distinguished gatherings, refined event spaces, thoughtful hospitality, and facilities for weddings, receptions, and family functions." 
        path="/about"
      />
      <PageTransition>
        <main className="min-h-[100dvh] overflow-x-hidden bg-[#fdfbf7] wedding-pattern-ivory ">

      {/* Hero Section */}
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden px-5 pb-20 pt-28 sm:min-h-[560px] sm:px-6 sm:pb-24 sm:pt-32 md:min-h-[600px] md:pb-24 md:pt-[8.5rem] xl:min-h-[70vh] xl:pb-32 xl:pt-40">
        <motion.img
          src={heroImg}
          alt="Ayswariya Mahal venue"
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1448"
          height="1086"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
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
            className="font-display text-[clamp(34px,11vw,52px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl md:max-lg:text-[58px] lg:text-[clamp(34px,7vw,76px)]"
          >
            A Legacy of <br/><span className="italic text-[#E5C76B]">Celebrations</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-[34rem] type-body text-[#fdfbf7]/90 drop-shadow-md md:mt-7 md:max-w-xl lg:mt-8 lg:max-w-2xl"
          >
            For over twenty years, families have trusted Ayswariya Mahal for their most significant weddings, receptions, engagements, and gatherings.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="px-5 py-14 sm:px-6 sm:py-16 md:py-[72px] lg:py-32">
        <div className="max-w-site mx-auto grid gap-11 xl:grid-cols-[1.2fr_1fr] xl:gap-20 items-center">

          <div
            className="relative"
          >
            <div className="absolute inset-0 bg-[#d4af37] rounded-sm transform translate-x-2 translate-y-2 opacity-20 sm:translate-x-4 sm:translate-y-4"></div>
            <div className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner luxury-image-overlay">
              <img
                src={aboutImg}
                alt="Ayswariya Mahal Story"
                loading="lazy"
                decoding="async"
                width="1360"
                height="1020"
                className="h-[380px] w-full scale-110 object-cover sm:h-[460px] md:h-[500px] lg:h-[680px]"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 h-24 w-24 opacity-10 pointer-events-none md:-bottom-6 md:-left-6 md:h-28 md:w-28 lg:-bottom-10 lg:-left-10 lg:h-40 lg:w-40"></div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="relative z-10 text-center md:text-left"
          >
            <motion.p variants={fadeInUp} className="type-eyebrow text-[#b58c2a] mb-4">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[30px] sm:text-[32px] md:text-[36px] lg:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] mb-6 md:mb-7 lg:mb-8">
              Building Trust <span className="italic text-[#b58c2a]">Since 2001</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mx-auto h-[1px] w-16 bg-[#d4af37] mb-6 md:mx-0 md:mb-7 lg:mb-8"></motion.div>
            <motion.p variants={fadeInUp} className="type-body text-[#4f4038] mb-6 md:max-w-[34rem] lg:max-w-none">
              Ayswariya Mahal was founded with a clear purpose: to give families a distinguished venue for life's most meaningful occasions.
            </motion.p>
            <motion.p variants={fadeInUp} className="type-body text-[#4f4038] md:max-w-[34rem] lg:max-w-none">
              With spacious interiors, modern amenities, and consistent service, we have hosted thousands of weddings and events — earning a reputation as one of Chennai's most trusted venues.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* Celebration Pillars - Premium Wedding Card Layout */}
      <section className="py-[52px] md:py-16 lg:py-[72px] px-5 sm:px-6 bg-[#f5ead9] wedding-pattern-gold relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(212,168,67,0.05),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-site mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="text-center mb-10 md:mb-12 lg:mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-[30px] sm:text-[32px] md:text-[38px] lg:text-[44px] font-semibold leading-[1.2] tracking-[0.01em] text-[#5A111C] mb-4">
              What We Stand For
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-px bg-[#D4A843] mx-auto mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="font-body text-[#4f4038] text-base md:text-lg lg:text-xl max-w-2xl mx-auto italic font-light">
              Each event at Ayswariya Mahal is shaped by care, respect for tradition, and the closeness of family.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 xl:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 1.20, ease: "easeOut", delay: index * 0.1 }}
                  className={`group relative flex flex-col items-center text-center p-[22px] md:p-[24px] lg:p-[28px] bg-[#fdfbf7] rounded-[12px] border border-[#d4af37]/40 shadow-[0_8px_20px_rgba(90,17,28,0.06)] hover:shadow-[0_12px_24px_rgba(212,168,67,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden ${index === 2 ? "md:col-span-2 xl:col-span-1" : ""}`}
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
                    
                    <h3 className="font-serif text-2xl md:max-lg:text-[23px] font-semibold leading-[1.2] text-[#5A111C] mb-4">
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
      <section className="py-12 md:py-14 lg:py-20 px-5 sm:px-6 bg-[#5A111C] wedding-pattern-maroon relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,199,107,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute -bottom-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_100%,rgba(229,199,107,0.08),transparent_40%)] pointer-events-none" />

        <div className="max-w-site mx-auto flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-20 relative z-10">
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="w-full max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-8"
          >
            {/* Philosophy Card */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-6 md:p-7 lg:p-10 border border-[#D4A843]/20 bg-gradient-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.08)] group"
            >
              <div className="absolute top-0 left-8 w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
              <div className="absolute top-8 left-0 w-px h-12 bg-[#D4A843]/50" />
              <div className="absolute bottom-0 right-8 w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
              <div className="absolute bottom-8 right-0 w-px h-12 bg-[#D4A843]/50" />
              
              <div className="flex items-center gap-3 mb-5">
                <Sparkles size={20} className="text-[#D4A843]" strokeWidth={1.5} />
                <h2 className="font-serif text-[28px] md:text-[32px] lg:text-4xl font-semibold leading-[1.2] text-[#fdfbf7]">
                  Our Philosophy
                </h2>
              </div>
              <p className="type-body text-[#fdfbf7]/85 leading-relaxed">
                Every family carries its own traditions. We shape each gathering to honour yours.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-6 md:p-7 lg:p-10 border border-[#D4A843]/20 bg-gradient-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.08)] group"
            >
              <div className="absolute top-0 left-8 w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
              <div className="absolute top-8 left-0 w-px h-12 bg-[#D4A843]/50" />
              <div className="absolute bottom-0 right-8 w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-20" />
              <div className="absolute bottom-8 right-0 w-px h-12 bg-[#D4A843]/50" />

              <div className="flex items-center gap-3 mb-5">
                <Sparkles size={20} className="text-[#D4A843]" strokeWidth={1.5} />
                <h2 className="font-serif text-[28px] md:text-[32px] lg:text-4xl font-semibold leading-[1.2] text-[#fdfbf7]">
                  Our Mission
                </h2>
              </div>
              <p className="type-body text-[#fdfbf7]/85 leading-relaxed">
                To build gathering spaces where families connect, celebrations feel effortless, and every detail reflects genuine care.
              </p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Kerala Jewellers Section */}
      <section className="relative overflow-hidden bg-[#f5ead9] wedding-pattern-gold px-5 pt-14 pb-[calc(3.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:pt-16 sm:pb-[calc(4rem+env(safe-area-inset-bottom))] md:px-8 md:pt-[68px] md:pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:px-16 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute right-[8%] top-10 h-72 w-72 rounded-full bg-[#D4A843]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent"
        />

        <div className="max-w-site mx-auto grid items-center gap-10 sm:gap-12 md:gap-12 xl:grid-cols-2 xl:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="relative z-10 text-center md:text-left order-2 xl:order-1"
          >
            <motion.p variants={fadeInUp} className="type-eyebrow mb-3 sm:mb-4 text-[#B8860B]">
              Our Family of Brands
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mb-5 sm:mb-6 font-serif text-[26px] sm:text-[30px] md:text-[36px] font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] lg:mb-7 lg:text-5xl">
              Kerala <span className="italic text-[#B8860B]">Jewellers</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mx-auto md:mx-0 mb-5 sm:mb-6 h-[1px] w-16 bg-[#B8860B] lg:mb-7" />
            <motion.p variants={fadeInUp} className="type-body mb-4 sm:mb-5 text-[#4f4038] md:max-w-[34rem] lg:max-w-none">
              A trusted name in fine jewellery, Kerala Jewellers brings decades of heritage craftsmanship to every collection. From gold and diamond to platinum and silver, each piece is curated for life's most meaningful occasions.
            </motion.p>
            <motion.p variants={fadeInUp} className="type-body mb-6 sm:mb-7 text-[#4f4038] md:max-w-[34rem] lg:max-w-none">
              Known for bridal jewellery expertise and certified authenticity, Kerala Jewellers is a destination for families who value tradition, quality, and timeless design.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="https://www.keralajewellers.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] sm:min-h-12 w-full items-center justify-center rounded-full bg-[#D4A843] px-6 sm:px-8 font-sans font-medium text-[12px] sm:text-[13px] uppercase tracking-[0.12em] text-[#3F0C15] shadow-[0_10px_20px_rgba(90,17,28,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B8860B] hover:text-[#fdfbf7] sm:w-auto"
              >
                Explore Kerala Jewellers
              </a>
            </motion.div>
          </motion.div>

          <div
            className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px] md:max-lg:max-w-[820px] lg:max-w-[620px] order-1 xl:order-2"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[14px] bg-[#D4A843]/20" />
              <div
                className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner luxury-image-overlay aspect-[4/3] sm:aspect-[16/10]"
              >
              <img
                src={keralaJewellersImg}
                alt="Kerala Jewellers showroom"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center brightness-95 contrast-[1.08]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(63,12,21,0.04)_0%,rgba(63,12,21,0.18)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,168,67,0.16),transparent_28%)]" />
            </div>
            <div
              className="absolute -bottom-5 left-4 sm:-bottom-6 sm:left-6 md:left-8 lg:left-8 rounded-2xl border border-[#D4A843]/20 bg-gradient-to-br from-[#5A111C] to-[#3F0C15] px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 text-[#fdfbf7] shadow-[0_12px_32px_rgba(90,17,28,0.25),0_0_0_1px_rgba(212,168,67,0.1)] backdrop-blur-md"
            >
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="grid h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 place-items-center rounded-xl bg-gradient-to-br from-[#D4A843]/20 to-[#D4A843]/5 border border-[#D4A843]/25 text-[#D4A843]">
                  <GemIcon size={16} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-lg sm:text-xl md:text-2xl font-bold leading-none tracking-tight text-[#E5C76B]">Since 1995</p>
                  <p className="mt-1 font-sans text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.2em] text-[#fdfbf7]/60">
                    Trusted Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pebbles Service Apartments Section */}
      <section className="relative overflow-hidden bg-[#fdfbf7] px-5 pt-14 pb-[calc(3.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:pt-16 sm:pb-[calc(4rem+env(safe-area-inset-bottom))] md:px-8 md:pt-[68px] md:pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:px-16 lg:py-28">
        <div
          aria-hidden="true"
          className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-[#5A111C]/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent"
        />

        <div className="max-w-site mx-auto grid items-center gap-10 sm:gap-12 md:gap-12 xl:grid-cols-2 xl:gap-16">
          <div
            className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px] md:max-lg:max-w-[820px] lg:max-w-[620px]"
          >
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[14px] bg-[#5A111C]/10" />
              <div
                className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner luxury-image-overlay aspect-[4/3] sm:aspect-[16/10]"
              >
              <img
                src={pebblesImg}
                alt="Pebbles Service Apartments interior"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center brightness-95 contrast-[1.08]"
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(63,12,21,0.04)_0%,rgba(63,12,21,0.18)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,168,67,0.16),transparent_28%)]" />
            </div>
            <div
              className="absolute -bottom-5 left-4 sm:-bottom-6 sm:left-6 md:left-8 lg:left-8 rounded-2xl border border-[#D4A843]/20 bg-gradient-to-br from-[#5A111C] to-[#3F0C15] px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 text-[#fdfbf7] shadow-[0_12px_32px_rgba(90,17,28,0.25),0_0_0_1px_rgba(212,168,67,0.1)] backdrop-blur-md"
            >
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className="grid h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11 place-items-center rounded-xl bg-gradient-to-br from-[#D4A843]/20 to-[#D4A843]/5 border border-[#D4A843]/25 text-[#D4A843]">
                  <Home size={16} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-lg sm:text-xl md:text-2xl font-bold leading-none tracking-tight text-[#E5C76B]">Home Away</p>
                  <p className="mt-1 font-sans text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.2em] text-[#fdfbf7]/60">
                    From Home
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="relative z-10 text-center md:text-left"
          >
            <motion.p variants={fadeInUp} className="type-eyebrow mb-3 sm:mb-4 text-[#B8860B]">
              Our Family of Brands
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mb-5 sm:mb-6 font-serif text-[26px] sm:text-[30px] md:text-[36px] font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] lg:mb-7 lg:text-5xl">
              Pebbles <span className="italic text-[#B8860B]">Service Apartments</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mx-auto md:mx-0 mb-5 sm:mb-6 h-[1px] w-16 bg-[#B8860B] lg:mb-7" />
            <motion.p variants={fadeInUp} className="type-body mb-4 sm:mb-5 text-[#4f4038] md:max-w-[34rem] lg:max-w-none">
              The hospitality arm of our family, Pebbles Service Apartments offers fully furnished accommodation in Chennai. Ideal for families, business travellers, and extended stays.
            </motion.p>
            <motion.p variants={fadeInUp} className="type-body mb-6 sm:mb-7 text-[#4f4038] md:max-w-[34rem] lg:max-w-none">
              With a convenient location and warm hospitality, Pebbles complements our group's commitment to guest comfort — making every stay feel like home.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="https://www.pebblesserviceapartments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] sm:min-h-12 w-full items-center justify-center rounded-full bg-[#D4A843] px-6 sm:px-8 font-sans font-medium text-[12px] sm:text-[13px] uppercase tracking-[0.12em] text-[#3F0C15] shadow-[0_10px_20px_rgba(90,17,28,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B8860B] hover:text-[#fdfbf7] sm:w-auto"
              >
                Explore Pebbles Service Apartments
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      </main>
      </PageTransition>
    </>
  );
}
