import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aboutImg from "../assets/images/about.webp";
import heroImg from "../assets/images/hero.webp";
import { Sparkles } from "lucide-react";
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
      title: "Thoughtful Hospitality",
      body: "From the first enquiry to the final send-off, our team keeps every guest movement, family ritual, and event moment cared for with calm attention.",
    },
    {
      title: "Flexible Celebration Spaces",
      body: "Our halls are planned for weddings, receptions, engagements, corporate gatherings, and intimate family ceremonies with practical flow and elegant ambience.",
    },
    {
      title: "Tradition With Comfort",
      body: "Ayswariya Mahal blends ceremonial warmth with modern essentials, giving families a venue that feels familiar, refined, and easy to host in.",
    },
  ];

  return (
    <>
      <SEO 
        title="Our Heritage & Legacy" 
        description="Discover the story behind Ayswariya Mahal. Over two decades of architectural excellence and unforgettable celebrations." 
        path="/about"
      />
      <PageTransition>
        <main className="bg-[#fdfbf7] min-h-screen overflow-hidden" ref={containerRef}>

      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[60vh] md:min-h-[70vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
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
            About Us
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-display text-[#fdfbf7] leading-tight drop-shadow-2xl"
          >
            A Legacy of <br/><span className="italic text-[#E5C76B]">Celebrations</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-8 max-w-2xl mx-auto text-lg md:text-xl text-[#fdfbf7]/90 font-serif leading-relaxed drop-shadow-md"
          >
            For over two decades, Ayswariya Mahal has been the
            destination for unforgettable weddings, receptions,
            engagements, and family celebrations.
          </motion.p>
        </motion.div>
      </section>

      {/* Story Section */}
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
            <div className="relative overflow-hidden rounded-sm shadow-2xl luxury-image-overlay">
              <motion.img
                style={{ y: parallaxY }}
                src={aboutImg}
                alt="Ayswariya Mahal Story"
                loading="lazy"
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
            <motion.p variants={fadeInUp} className="font-serif text-[#b58c2a] uppercase tracking-[0.3em] font-bold text-sm mb-4">
              Our Story
            </motion.p>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl lg:text-6xl font-display text-[#4a3623] leading-tight mb-8">
              Creating Memorable Moments <span className="italic text-[#b58c2a]">Since 2001</span>
            </motion.h2>
            <motion.div variants={fadeInUp} className="w-16 h-[1px] bg-[#d4af37] mb-8"></motion.div>
            <motion.p variants={fadeInUp} className="text-[#5c4a3d] font-serif text-lg leading-loose mb-6">
              Ayswariya Mahal was established with a vision to provide
              families with a beautiful venue where life's most cherished
              celebrations can take place.
            </motion.p>
            <motion.p variants={fadeInUp} className="text-[#5c4a3d] font-serif text-lg leading-loose">
              With spacious interiors, modern facilities, and a commitment
              to excellence, we have proudly hosted thousands of successful
              weddings and events over the years, becoming a cornerstone of joyous celebrations.
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* Experience Pillars */}
      <section className="py-24 md:py-32 px-6 bg-[#f5ead9] relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(128,28,44,0.08),transparent_42%,rgba(229,199,107,0.16))]"></div>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-[1280px] mx-auto relative z-10"
        >
          <motion.p variants={fadeInUp} className="font-serif text-[#8b1518] uppercase tracking-[0.3em] font-bold text-sm mb-4 text-center">
            Why Families Choose Us
          </motion.p>
          <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl text-[#4a3623] text-center mb-16 leading-tight">
            Designed for Graceful, <span className="italic text-[#b58c2a]">Effortless Hosting</span>
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => (
              <motion.article
                key={pillar.title}
                variants={fadeInUp}
                className="border border-[#d4af37]/28 bg-[#fff8ed]/72 p-8 shadow-[0_18px_44px_rgba(74,10,18,0.08)] backdrop-blur-sm"
              >
                <div className="mb-6 h-px w-16 bg-[#b58c2a]"></div>
                <h3 className="font-display text-2xl text-[#7f1115] mb-4">{pillar.title}</h3>
                <p className="font-serif text-[#5c4a3d] leading-loose">{pillar.body}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Dark Maroon Statistics */}
      <section className="py-24 md:py-32 bg-[#4A0A12] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] mix-blend-overlay"></div>
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center"
          >
            <motion.div variants={fadeInUp}>
              <h3 className="text-5xl md:text-7xl font-display text-[#E5C76B] mb-4">25<span className="text-3xl">+</span></h3>
              <p className="font-serif tracking-[0.2em] text-[#fdfbf7]/80 uppercase text-xs font-bold">Years Experience</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-5xl md:text-7xl font-display text-[#E5C76B] mb-4">10k<span className="text-3xl">+</span></h3>
              <p className="font-serif tracking-[0.2em] text-[#fdfbf7]/80 uppercase text-xs font-bold">Events Hosted</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-5xl md:text-7xl font-display text-[#E5C76B] mb-4">1500</h3>
              <p className="font-serif tracking-[0.2em] text-[#fdfbf7]/80 uppercase text-xs font-bold">Seating Capacity</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <h3 className="text-5xl md:text-7xl font-display text-[#E5C76B] mb-4">2500</h3>
              <p className="font-serif tracking-[0.2em] text-[#fdfbf7]/80 uppercase text-xs font-bold">Floating Guests</p>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Deep Maroon Mission */}
      <section className="py-32 md:py-48 bg-[#4A0A12] relative overflow-hidden border-t border-[#d4af37]/20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none"></div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto text-center px-6 relative z-10"
        >
          <motion.div variants={fadeInUp} className="flex justify-center mb-6 text-[#E5C76B]">
            <Sparkles size={24} strokeWidth={1} />
          </motion.div>
          <motion.p variants={fadeInUp} className="font-serif uppercase tracking-[0.3em] text-[#E5C76B] mb-6 font-bold text-sm">
            Our Mission
          </motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-display text-[#fdfbf7] leading-tight mb-10 drop-shadow-lg">
            Turning Special Moments Into <br/><span className="italic text-[#E5C76B]">Lifelong Memories</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-[#fdfbf7]/80 font-serif text-xl leading-loose max-w-3xl mx-auto font-medium">
            We strive to provide exceptional hospitality, premium
            facilities, and a welcoming environment that helps every
            family celebrate their most important milestones with joy
            and absolute confidence.
          </motion.p>
        </motion.div>
      </section>

      </main>
      </PageTransition>
    </>
  );
}
