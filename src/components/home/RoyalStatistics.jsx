import { motion } from "framer-motion";

export default function RoyalStatistics() {
  const stats = [
    { number: "25+", label: "Years of Excellence" },
    { number: "10,000+", label: "Celebrations Hosted" },
    { number: "1500", label: "Guest Seating Capacity" },
    { number: "2500+", label: "Floating Guest Capacity" },
  ];

  return (
    <section className="py-24 bg-primary text-gold-leaf border-y border-gold-leaf/20 relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40 pointer-events-none"></div>
      
      <div className="max-w-site mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-gold-leaf/20">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.16, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center"
            >
              <h3 className="font-display text-4xl md:text-5xl mb-4 font-bold leading-[1.1] tracking-[-0.02em]">
                {stat.number}
              </h3>
              <p className="type-eyebrow max-w-[220px] text-surface-warm/84">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
