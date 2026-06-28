import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import sowCrop2 from "../../assets/images/sowbhagya mahal intro.webp";
import { Building2, UtensilsCrossed, Trees } from "lucide-react";

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

export default function SowbhagyaIntro() {
  return (
    <section className="relative overflow-hidden bg-[#f5ead9] wedding-pattern-gold px-5 pt-14 pb-[calc(3.5rem+env(safe-area-inset-bottom))] sm:px-6 sm:pt-16 sm:pb-[calc(4rem+env(safe-area-inset-bottom))] md:px-8 md:pt-[68px] md:pb-[calc(4.25rem+env(safe-area-inset-bottom))] lg:px-16 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute left-[8%] top-10 h-72 w-72 rounded-full bg-[#D4A843]/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 h-px w-1/2 bg-gradient-to-r from-transparent via-[#D4A843]/70 to-transparent"
      />

      <div className="max-w-site mx-auto grid items-center gap-10 sm:gap-12 md:gap-12 xl:grid-cols-2 xl:gap-16">
        <div
          className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] md:max-w-[620px] md:max-lg:max-w-[820px] lg:max-w-[620px]"
        >
          <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[14px] bg-[#D4A843]/20" />
            <div
              className="luxury-image-frame luxury-image-frame--soft luxury-image-frame--banner luxury-image-overlay md:max-lg:aspect-[16/10]"
            >
            <img
              src={sowCrop2}
              alt="Sowbhagya Mahal luxury venue interior"
              loading="lazy"
              decoding="async"
              width="1360"
              height="1020"
              className="h-[280px] sm:h-[340px] md:h-[380px] lg:h-[500px] w-full object-cover object-center brightness-95 contrast-[1.08]"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(63,12,21,0.04)_0%,rgba(63,12,21,0.18)_100%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,168,67,0.16),transparent_28%)]" />
          </div>
          <div
            className="absolute -bottom-4 left-4 sm:-bottom-5 sm:left-6 md:left-8 lg:left-8 rounded-xl border border-[#D4A843]/35 bg-[#5A111C]/95 px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 text-[#fdfbf7] shadow-[0_10px_24px_rgba(63,12,21,0.2)] backdrop-blur-sm"
          >
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="grid h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 place-items-center rounded-full border border-[#D4A843]/30 text-[#D4A843]">
                <Building2 size={14} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <p className="font-display text-xl sm:text-2xl md:text-3xl font-semibold leading-none text-[#D4A843]">500</p>
                <p className="mt-0.5 sm:mt-1 font-sans text-[9px] sm:text-[10px] font-medium uppercase tracking-[0.16em] text-[#fdfbf7]/82">
                  Seated Guests
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
            Sowbhagya Mahal
          </motion.p>
          <motion.h2 variants={fadeInUp} className="mb-5 sm:mb-6 font-serif text-[26px] sm:text-[30px] md:text-[36px] font-semibold leading-[1.2] tracking-[0.01em] text-[#4a3623] lg:mb-7 lg:text-5xl">
            An Intimate Hall for <span className="italic text-[#B8860B]">Memorable Milestones</span>
          </motion.h2>
          <motion.div variants={fadeInUp} className="mx-auto md:mx-0 mb-5 sm:mb-6 h-[1px] w-16 bg-[#B8860B] lg:mb-7" />
          <motion.p variants={fadeInUp} className="type-body mb-4 sm:mb-5 text-[#4f4038] md:max-w-[34rem] lg:max-w-none">
            Sowbhagya Mahal is a refined extension of Ayswariya Mahal — a dedicated hall with the same standard of care, at a more accessible price.
          </motion.p>
          <motion.p variants={fadeInUp} className="type-body mb-6 sm:mb-7 text-[#4f4038] md:max-w-[34rem] lg:max-w-none">
            The hall accommodates 500 seated guests, 200 for dining, and up to 1000 floating. Features include centralized air conditioning, a well-equipped kitchen, guest rooms, backup power, CCTV, and a rooftop garden.
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-6 sm:mb-8 grid grid-cols-3 gap-3 sm:gap-4 md:gap-4 xl:grid-cols-3 xl:gap-4">
            {[
              { number: "500", label: "Seating", icon: Building2 },
              { number: "200", label: "Dining", icon: UtensilsCrossed },
              { number: "1000", label: "Floating", icon: Trees },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-[12px] sm:rounded-[16px] border border-[#D4A843]/55 bg-[linear-gradient(180deg,#fffaf2_0%,#f7eddc_100%)] px-2 py-3 sm:px-4 sm:py-3 text-center shadow-[0_6px_16px_rgba(90,17,28,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#B8860B]/70 hover:shadow-[0_10px_20px_rgba(90,17,28,0.1)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,168,67,0.08),transparent_46%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute left-2 top-2 h-3 w-3 sm:left-3 sm:top-3 sm:h-4 sm:w-4 rounded-tl-[6px] border-l border-t border-[#D4A843]/70" />
                <div className="absolute right-2 top-2 h-3 w-3 sm:right-3 sm:top-3 sm:h-4 sm:w-4 rounded-tr-[6px] border-r border-t border-[#D4A843]/70" />
                <div className="absolute bottom-2 left-2 h-3 w-3 sm:bottom-3 sm:left-3 sm:h-4 sm:w-4 rounded-bl-[6px] border-b border-l border-[#D4A843]/70" />
                <div className="absolute bottom-2 right-2 h-3 w-3 sm:bottom-3 sm:right-3 sm:h-4 sm:w-4 rounded-br-[6px] border-b border-r border-[#D4A843]/70" />

                <div className="relative mx-auto mb-2 grid h-9 w-9 sm:h-10 sm:w-10 md:mx-auto md:mb-2.5 md:h-12 md:w-12 place-items-center rounded-full bg-[#5A111C] text-[#D4A843] shadow-[0_10px_20px_rgba(90,17,28,0.18)]">
                  <stat.icon size={14} strokeWidth={2} aria-hidden="true" className="md:hidden" />
                  <stat.icon size={17} strokeWidth={2} aria-hidden="true" className="hidden md:block" />
                </div>
                <p className="relative mb-0.5 font-display text-lg sm:text-xl md:text-[clamp(1.9rem,2.4vw,2.4rem)] font-semibold leading-none text-[#5A111C]">
                  {stat.number}
                </p>
                <p className="relative font-sans text-[8px] sm:text-[9px] md:text-[10px] font-medium uppercase tracking-[0.12em] sm:tracking-[0.16em] text-[#B8860B]">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Link
              to="/sowbhagya-mahal"
              className="inline-flex min-h-[48px] sm:min-h-12 w-full items-center justify-center rounded-full bg-[#D4A843] px-6 sm:px-8 font-sans font-medium text-[12px] sm:text-[13px] uppercase tracking-[0.12em] text-[#3F0C15] shadow-[0_10px_20px_rgba(90,17,28,0.14)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#B8860B] hover:text-[#fdfbf7] sm:w-auto"
            >
              Explore Sowbhagya Mahal
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
