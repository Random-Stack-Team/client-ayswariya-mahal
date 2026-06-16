import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

const statVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
};

export default function RoyalStatistics() {
  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "10,000+", label: "Celebrations Hosted" },
    { number: "1500", label: "Guest Seating Capacity" },
    { number: "2500+", label: "Floating Guest Capacity" },
  ];

  return (
    <section className="py-16 bg-primary text-gold-leaf border-y border-gold-leaf/20 relative overflow-hidden md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
      
      <div className="max-w-site mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-5 gap-y-10 text-center divide-x-0 md:divide-x divide-gold-leaf/20 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={statVariants}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 font-bold leading-[1.1] tracking-[-0.02em]">
                {stat.number}
              </h3>
              <p className="type-eyebrow max-w-[220px] text-[#D4A843]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}