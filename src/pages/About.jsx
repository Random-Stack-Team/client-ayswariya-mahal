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
        <main className="min-h-[100dvh] overflow-x-hidden bg-[#fdfbf7] wedding-pattern-ivory">

      {/* Hero Section */}
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden px-5 pb-16 pt-24 sm:min-h-[520px] sm:px-6 sm:pb-20 sm:pt-28 md:min-h-[560px] md:pb-24 md:pt-32 lg:min-h-[600px] lg:pb-28 lg:pt-36 xl:min-h-[70vh] xl:pb-32 xl:pt-40">
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/80 via-[#3F0C15]/70 to-[#fdfbf7]"></div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="relative z-10 max-w-site mx-auto text-center px-4"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-4 sm:mb-5 md:mb-6 text-[#E5C76B]">
            <Sparkles size={20} strokeWidth={1} className="sm:hidden" />
            <Sparkles size={24} strokeWidth={1} className="hidden sm:block" />
          </motion.div>
          <motion.p
            variants={fadeInUp}
            className="type-eyebrow text-[#E5C76B] mb-4 sm:mb-5 md:mb-6 drop-shadow-md"
          >
            About Us
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="font-display text-[clamp(28px,10vw,42px)] sm:text-[clamp(32px,10vw,48px)] md:text-[clamp(36px,9vw,56px)] lg:text-[clamp(40px,8vw,68px)] xl:text-[clamp(44px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl"
          >
            A Legacy of <br/><span className="italic text-[#E5C76B]">Celebrations</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-[28rem] type-body text-[#fdfbf7]/90 drop-shadow-md sm:mt-6 sm:max-w-[32rem] md:mt-7 md:max-w-xl lg:mt-8 lg:max-w-2xl"
          >
            For over twenty years, families have trusted Ayswariya Mahal for their most significant weddings, receptions, engagements, and gatherings.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="px-5 py-12 sm:px-6 sm:py-16 md:py-20 lg:py-28 xl:py-32">
        <div className="max-w-site mx-auto grid gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:grid-cols-[1.2fr_1fr] xl:gap-20 items-center">

          <div className="relative">
            <div className="absolute inset-0 bg-[#d4af37] rounded-sm transform translate-x-2 translate-y-2 opacity-20 sm:translate-x-3 sm:translate-y-3 md:translate-x-4 md:translate-y-4"></div>
            <div className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner luxury-image-overlay aspect-[4/3] sm:aspect-[3/2] lg:aspect-[4/3]">
              <img
                src={aboutImg}
                alt="Ayswariya Mahal Story"
                loading="lazy"
                decoding="async"
                width="1360"
                height="1020"
                className="h-full w-full scale-105 object-cover sm:scale-110"
              />
            </div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="relative z-10 text-center md:text-left"
          >
            <motion.p variants={fadeInUp} className="type-eyebrow text-[#b58c2a] mb-3 sm:mb-4">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeInUp} className="font-serif text-[26px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] mb-5 sm:mb-6 md:mb-7 lg:mb-8">
              Building Trust <span className="italic text-[#b58c2a]">Since 2001</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mx-auto md:mx-0 mb-5 h-[1px] w-16 bg-[#d4af37] sm:mb-6 md:mb-7 lg:mb-8"></motion.div>
            <motion.p variants={fadeInUp} className="type-body text-[#4f4038] mb-5 sm:mb-6 md:mb-6 md:max-w-[34rem] lg:max-w-none">
              Ayswariya Mahal was founded with a clear purpose: to give families a distinguished venue for life's most meaningful occasions.
            </motion.p>
            <motion.p variants={fadeInUp} className="type-body text-[#4f4038] md:max-w-[34rem] lg:max-w-none">
              With spacious interiors, modern amenities, and consistent service, we have hosted thousands of weddings and events — earning a reputation as one of Chennai's most trusted venues.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* Celebration Pillars */}
      <section className="py-12 sm:py-14 md:py-16 lg:py-20 xl:py-[72px] px-5 sm:px-6 bg-[#f5ead9] wedding-pattern-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-5 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_center,rgba(212,168,67,0.05),transparent_60%)] pointer-events-none"></div>

        <div className="max-w-site mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16"
          >
            <motion.h2 variants={fadeInUp} className="font-serif text-[26px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[44px] font-semibold leading-[1.2] tracking-[0.01em] text-[#5A111C] mb-3 sm:mb-4">
              What We Stand For
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-px bg-[#D4A843] mx-auto mb-5 sm:mb-6"></motion.div>
            <motion.p variants={fadeInUp} className="font-body text-[#4f4038] text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto italic font-light px-4 sm:px-0">
              Each event at Ayswariya Mahal is shaped by care, respect for tradition, and the closeness of family.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={revealViewport}
                  transition={{ duration: 1.20, ease: "easeOut", delay: index * 0.1 }}
                  className="group relative flex flex-col items-center text-center p-5 sm:p-6 md:p-7 lg:p-8 bg-[#fdfbf7] rounded-xl sm:rounded-2xl border border-[#d4af37]/40 shadow-[0_8px_20px_rgba(90,17,28,0.06)] hover:shadow-[0_12px_24px_rgba(212,168,67,0.15)] transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-[#d4af37]/30 rounded-tl-sm opacity-50"></div>
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-[#d4af37]/30 rounded-tr-sm opacity-50"></div>
                  <div className="absolute bottom-3 left-3 w-4 h-4 border-b border-l border-[#d4af37]/30 rounded-bl-sm opacity-50"></div>
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-[#d4af37]/30 rounded-br-sm opacity-50"></div>
                  
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,168,67,0.08),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-[#d4af37]/30 flex items-center justify-center bg-[#fff8ed] mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                      <Icon className="text-[#d4af37]" size={18} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold leading-[1.2] text-[#5A111C] mb-3 sm:mb-4">
                      {pillar.title}
                    </h3>
                    
                    <div className="w-10 h-px bg-[#d4af37]/50 mb-4 sm:mb-5"></div>
                    
                    <p className="font-body text-[#4f4038] leading-[1.7] text-[14px] sm:text-[15px] md:text-[16px]">
                      {pillar.body}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Philosophy & Mission */}
      <section className="py-10 sm:py-12 md:py-16 lg:py-20 px-5 sm:px-6 bg-[#5A111C] wedding-pattern-maroon relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(229,199,107,0.15),transparent_50%)] pointer-events-none" />
        <div className="absolute -bottom-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_50%_100%,rgba(229,199,107,0.08),transparent_40%)] pointer-events-none" />

        <div className="max-w-site mx-auto relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          >
            {/* Philosophy Card */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-5 sm:p-6 md:p-8 lg:p-10 border border-[#D4A843]/20 bg-gradient-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.08)] group"
            >
              <div className="absolute top-0 left-6 sm:left-8 w-10 sm:w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-16 sm:group-hover:w-20" />
              <div className="absolute top-6 sm:top-8 left-0 w-px h-10 sm:h-12 bg-[#D4A843]/50" />
              <div className="absolute bottom-0 right-6 sm:right-8 w-10 sm:w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-16 sm:group-hover:w-20" />
              <div className="absolute bottom-6 sm:bottom-8 right-0 w-px h-10 sm:h-12 bg-[#D4A843]/50" />
              
              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                <Sparkles size={18} className="text-[#D4A843] sm:hidden" strokeWidth={1.5} />
                <Sparkles size={20} className="hidden sm:block text-[#D4A843]" strokeWidth={1.5} />
                <h2 className="font-serif text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-4xl font-semibold leading-[1.2] text-[#fdfbf7]">
                  Our Philosophy
                </h2>
              </div>
              <p className="type-body text-[#fdfbf7]/85 leading-relaxed text-[15px] sm:text-base">
                Every family carries its own traditions. We shape each gathering to honour yours.
              </p>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              variants={fadeInUp}
              className="relative p-5 sm:p-6 md:p-8 lg:p-10 border border-[#D4A843]/20 bg-gradient-to-br from-[#ffffff]/5 to-transparent backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.08)] group"
            >
              <div className="absolute top-0 left-6 sm:left-8 w-10 sm:w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-16 sm:group-hover:w-20" />
              <div className="absolute top-6 sm:top-8 left-0 w-px h-10 sm:h-12 bg-[#D4A843]/50" />
              <div className="absolute bottom-0 right-6 sm:right-8 w-10 sm:w-12 h-px bg-[#D4A843] transition-all duration-500 group-hover:w-16 sm:group-hover:w-20" />
              <div className="absolute bottom-6 sm:bottom-8 right-0 w-px h-10 sm:h-12 bg-[#D4A843]/50" />

              <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                <Sparkles size={18} className="text-[#D4A843] sm:hidden" strokeWidth={1.5} />
                <Sparkles size={20} className="hidden sm:block text-[#D4A843]" strokeWidth={1.5} />
                <h2 className="font-serif text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] xl:text-4xl font-semibold leading-[1.2] text-[#fdfbf7]">
                  Our Mission
                </h2>
              </div>
              <p className="type-body text-[#fdfbf7]/85 leading-relaxed text-[15px] sm:text-base">
                To build gathering spaces where families connect, celebrations feel effortless, and every detail reflects genuine care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Kerala Jewellers Section */}
      <section className="relative overflow-hidden bg-[#f5ead9] wedding-pattern-gold px-5 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
        <div
          aria-hidden="true"
          className="absolute right-[8%] top-10 h-72 w-72 rounded-full bg-[#D4A843]/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent"
        />

        <div className="max-w-site mx-auto grid items-center gap-8 sm:gap-10 md:gap-12 xl:grid-cols-2 xl:gap-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={revealViewport}
            className="relative z-10 text-center md:text-left order-2 xl:order-1"
          >
            <motion.p variants={fadeInUp} className="type-eyebrow mb-2 sm:mb-3 md:mb-4 text-[#B8860B]">
              Our Family of Brands
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mb-4 sm:mb-5 md:mb-6 font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] lg:mb-7 xl:text-5xl">
              Kerala <span className="italic text-[#B8860B]">Jewellers</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mx-auto md:mx-0 mb-4 sm:mb-5 h-[1px] w-16 bg-[#B8860B] sm:mb-6 md:mb-6 lg:mb-7" />
            <motion.p variants={fadeInUp} className="type-body mb-3 sm:mb-4 text-[#4f4038] text-[15px] sm:text-base md:max-w-[34rem] lg:max-w-none">
              A trusted name in fine jewellery, Kerala Jewellers brings decades of heritage craftsmanship to every collection. From gold and diamond to platinum and silver, each piece is curated for life's most meaningful occasions.
            </motion.p>
            <motion.p variants={fadeInUp} className="type-body mb-5 sm:mb-6 text-[#4f4038] text-[15px] sm:text-base md:max-w-[34rem] lg:max-w-none">
              Known for bridal jewellery expertise and certified authenticity, Kerala Jewellers is a destination for families who value tradition, quality, and timeless design.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="https://www.keralajewellers.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] sm:min-h-[48px] md:min-h-12 w-full sm:w-auto items-center justify-center rounded-full bg-[#D4A843] px-6 sm:px-8 font-sans font-medium text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-[#3F0C15] shadow-[0_10px_20px_rgba(90,17,28,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B8860B] hover:text-[#fdfbf7]"
              >
                Explore Kerala Jewellers
              </a>
            </motion.div>
          </motion.div>

          <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px] order-1 xl:order-2">
            <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-xl sm:rounded-[14px] bg-[#D4A843]/20" />
            <div className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner luxury-image-overlay aspect-[4/3] sm:aspect-[16/10]">
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
            <div className="absolute -bottom-4 left-3 sm:-bottom-5 sm:left-5 md:-bottom-6 md:left-6 lg:-bottom-6 lg:left-8 rounded-xl sm:rounded-2xl border border-[#D4A843]/20 bg-gradient-to-br from-[#5A111C] to-[#3F0C15] px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 text-[#fdfbf7] shadow-[0_12px_32px_rgba(90,17,28,0.25),0_0_0_1px_rgba(212,168,67,0.1)] backdrop-blur-md">
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                <div className="grid h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 place-items-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#D4A843]/20 to-[#D4A843]/5 border border-[#D4A843]/25 text-[#D4A843]">
                  <GemIcon size={14} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-none tracking-tight text-[#E5C76B]">Since 1995</p>
                  <p className="mt-0.5 sm:mt-1 font-sans text-[7px] sm:text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#fdfbf7]/60">
                    Trusted Heritage
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pebbles Service Apartments Section */}
      <section className="relative overflow-hidden bg-[#fdfbf7] px-5 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
        <div
          aria-hidden="true"
          className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-[#5A111C]/5 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-0 right-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent"
        />

        <div className="max-w-site mx-auto grid items-center gap-8 sm:gap-10 md:gap-12 xl:grid-cols-2 xl:gap-16">
          <div className="relative mx-auto w-full max-w-[360px] sm:max-w-[420px] md:max-w-[520px] lg:max-w-[620px]">
            <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-3 sm:translate-y-3 rounded-xl sm:rounded-[14px] bg-[#5A111C]/10" />
            <div className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner luxury-image-overlay aspect-[4/3] sm:aspect-[16/10]">
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
            <div className="absolute -bottom-4 left-3 sm:-bottom-5 sm:left-5 md:-bottom-6 md:left-6 lg:-bottom-6 lg:left-8 rounded-xl sm:rounded-2xl border border-[#D4A843]/20 bg-gradient-to-br from-[#5A111C] to-[#3F0C15] px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 text-[#fdfbf7] shadow-[0_12px_32px_rgba(90,17,28,0.25),0_0_0_1px_rgba(212,168,67,0.1)] backdrop-blur-md">
              <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3">
                <div className="grid h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 place-items-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#D4A843]/20 to-[#D4A843]/5 border border-[#D4A843]/25 text-[#D4A843]">
                  <Home size={14} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-none tracking-tight text-[#E5C76B]">Home Away</p>
                  <p className="mt-0.5 sm:mt-1 font-sans text-[7px] sm:text-[8px] md:text-[9px] font-semibold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-[#fdfbf7]/60">
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
            <motion.p variants={fadeInUp} className="type-eyebrow mb-2 sm:mb-3 md:mb-4 text-[#B8860B]">
              Our Family of Brands
            </motion.p>
            <motion.h2 variants={fadeInUp} className="mb-4 sm:mb-5 md:mb-6 font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] lg:mb-7 xl:text-5xl">
              Pebbles <span className="italic text-[#B8860B]">Service Apartments</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="mx-auto md:mx-0 mb-4 sm:mb-5 h-[1px] w-16 bg-[#B8860B] sm:mb-6 md:mb-6 lg:mb-7" />
            <motion.p variants={fadeInUp} className="type-body mb-3 sm:mb-4 text-[#4f4038] text-[15px] sm:text-base md:max-w-[34rem] lg:max-w-none">
              The hospitality arm of our family, Pebbles Service Apartments offers fully furnished accommodation in Chennai. Ideal for families, business travellers, and extended stays.
            </motion.p>
            <motion.p variants={fadeInUp} className="type-body mb-5 sm:mb-6 text-[#4f4038] text-[15px] sm:text-base md:max-w-[34rem] lg:max-w-none">
              With a convenient location and warm hospitality, Pebbles complements our group's commitment to guest comfort — making every stay feel like home.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="https://www.pebblesserviceapartments.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] sm:min-h-[48px] md:min-h-12 w-full sm:w-auto items-center justify-center rounded-full bg-[#D4A843] px-6 sm:px-8 font-sans font-medium text-[11px] sm:text-[12px] md:text-[13px] uppercase tracking-[0.12em] text-[#3F0C15] shadow-[0_10px_20px_rgba(90,17,28,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B8860B] hover:text-[#fdfbf7]"
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
