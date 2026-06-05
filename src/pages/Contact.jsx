import { motion } from "framer-motion";
import { Crown, Sparkles, ConciergeBell, Star } from "lucide-react";

export default function Contact() {
  const flowVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="bg-surface text-on-surface pt-24 pb-24 font-body overflow-x-hidden min-h-screen">
      
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={flowVariants}
        className="relative h-[400px] md:h-[614px] flex items-center justify-center overflow-hidden royal-gradient mt-8"
      >
        <div className="absolute inset-0 opacity-40">
          <img 
            alt="Palace Interior" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgnKElQmmR4Euto8q3MG_0Dv0SW27bqCqqL370gCqMGH6NsZ9syvHqur_V2md6_lfbHzVojmD8gVTo6fl1AyvXOSiaEqA3JKXRUnQ0AZ0KUcRyswA5kmRfHWrbbQTOhEwZJN37CQtECawMQYrqJ7ljBmk4npOlNCfTST7kF4yakT1YiYPgzrUdPGu1Tdv2Lpvt8fbVapLRg8jmllOrax7mEPGt7Z7IaJA3CYEGeQKdBfeR_qzL-2Y5ew_aoYjTlTvnJgNZtv2U-5U" 
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-cinzel text-4xl md:text-6xl text-gold-leaf mb-4 italic">Begin Your Legacy</h1>
          <div className="w-24 h-px bg-gold-leaf mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white font-body text-lg opacity-90 leading-relaxed">
            A union at Ayswariya Mahal is not merely an event; it is a chapter of history written in gold. Entrust your vision to our stewards and let the grand doors of the palace open for your story.
          </p>
        </div>
      </motion.section>

      {/* Main Content Area: Bento Layout */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: The Inquiry Form (8 Cols) */}
        <div className="lg:col-span-8 bg-white p-8 md:p-12 shadow-sm border-t-4 border-gold-leaf relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5">
            <Crown size={180} />
          </div>
          
          <header className="mb-12 relative z-10">
            <h2 className="font-cinzel text-4xl text-deep-maroon mb-2">The Royal Petition</h2>
            <p className="text-on-surface-variant font-body italic text-lg">Share the dimensions of your dream, and we shall craft the reality.</p>
          </header>
          
          <form className="space-y-12 relative z-10">
            {/* Group 1: The Essentials */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={flowVariants}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold-leaf font-body text-sm font-semibold tracking-widest uppercase">01. The Essentials</span>
                <div className="flex-grow h-px bg-gold-leaf/20"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <label className="block font-body text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Full Name</label>
                  <input className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body" placeholder="Lord/Lady of the Union" type="text" />
                </div>
                <div className="relative group">
                  <label className="block font-body text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Email Address</label>
                  <input className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body" placeholder="correspondence@domain.com" type="email" />
                </div>
                <div className="relative group">
                  <label className="block font-body text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Preferred Date</label>
                  <input className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body text-primary" type="date" />
                </div>
                <div className="relative group">
                  <label className="block font-body text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Estimated Guest Count</label>
                  <select className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body text-primary">
                    <option>Intimate (Under 100)</option>
                    <option>Grand (100 - 300)</option>
                    <option>Majestic (300 - 500)</option>
                    <option>Royal Imperial (500+)</option>
                  </select>
                </div>
              </div>
            </motion.section>

            {/* Group 2: The Vision */}
            <motion.section 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={flowVariants}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-gold-leaf font-body text-sm font-semibold tracking-widest uppercase">02. The Vision</span>
                <div className="flex-grow h-px bg-gold-leaf/20"></div>
              </div>
              <div className="space-y-8">
                <div className="relative group">
                  <label className="block font-body text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Type of Ceremony</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <label className="cursor-pointer group">
                      <input className="hidden peer" name="ceremony" type="radio" />
                      <div className="border border-gold-leaf/30 p-4 text-center group-hover:border-gold-leaf peer-checked:bg-deep-maroon peer-checked:text-gold-leaf transition-all">
                        <span className="block font-body text-sm font-semibold tracking-widest uppercase">Wedding</span>
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input className="hidden peer" name="ceremony" type="radio" />
                      <div className="border border-gold-leaf/30 p-4 text-center group-hover:border-gold-leaf peer-checked:bg-deep-maroon peer-checked:text-gold-leaf transition-all">
                        <span className="block font-body text-sm font-semibold tracking-widest uppercase">Engagement</span>
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input className="hidden peer" name="ceremony" type="radio" />
                      <div className="border border-gold-leaf/30 p-4 text-center group-hover:border-gold-leaf peer-checked:bg-deep-maroon peer-checked:text-gold-leaf transition-all">
                        <span className="block font-body text-sm font-semibold tracking-widest uppercase">Gala</span>
                      </div>
                    </label>
                    <label className="cursor-pointer group">
                      <input className="hidden peer" name="ceremony" type="radio" />
                      <div className="border border-gold-leaf/30 p-4 text-center group-hover:border-gold-leaf peer-checked:bg-deep-maroon peer-checked:text-gold-leaf transition-all">
                        <span className="block font-body text-sm font-semibold tracking-widest uppercase">Other</span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="relative group">
                  <label className="block font-body text-sm font-semibold tracking-widest uppercase text-on-surface-variant mb-2">Specific Requirements & Desires</label>
                  <textarea className="w-full bg-transparent border-0 border-b border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body resize-none" placeholder="Describe the atmosphere, floral preferences, or cultural nuances..." rows="4"></textarea>
                </div>
              </div>
            </motion.section>

            <div className="pt-8">
              <button className="w-full md:w-auto px-12 py-5 bg-deep-maroon text-gold-leaf font-body text-sm font-semibold uppercase tracking-[0.4em] gold-border-double hover:bg-gold-leaf hover:text-deep-maroon transition-all duration-500 active:scale-95 shadow-lg flex items-center justify-center gap-4" type="submit">
                Submit Your Vision
                <Sparkles size={20} />
              </button>
              <p className="mt-4 text-center md:text-left text-on-surface-variant/70 text-sm italic">Our Heritage Concierge will respond within 24 royal hours.</p>
            </div>
          </form>
        </div>

        {/* Right Column: Sidebar (4 Cols) */}
        <aside className="lg:col-span-4 space-y-8">
          
          {/* Concierge Card */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={flowVariants}
            className="bg-deep-maroon text-gold-leaf p-8 gold-border-double shadow-xl relative overflow-hidden group"
          >
            <div className="relative z-10">
              <ConciergeBell size={40} className="mb-6 opacity-80" />
              <h3 className="font-cinzel text-3xl mb-4">Heritage Concierge</h3>
              <p className="text-white/80 font-body mb-6 leading-relaxed">
                Every union at Ayswariya is overseen by a dedicated steward who ensures that your family's heritage is honored through every detail, from the aroma of the incense to the placement of the silk.
              </p>
              <ul className="space-y-4 text-xs font-semibold tracking-widest uppercase">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold-leaf rounded-full"></span>
                  Bespoke Floral Design
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold-leaf rounded-full"></span>
                  Ancestral Culinary Arts
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-gold-leaf rounded-full"></span>
                  Ceremonial Protocol Support
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Visual Flourish */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={flowVariants}
            className="relative h-[400px] shadow-2xl group overflow-hidden"
          >
            <img 
              alt="Traditional Decor" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_-vg2Qi5AEmKB0XvsA3skJJluSRIuWiHCOzXN4Iwb5JHcWDDEDkOYtQEQyPg3g1zqATHJa8ivFU5UgwYN-XQu2rFkExzzP16WFRxUX2XMBHEk4scuJ-8pYJ7anDogSZmNvLRcjU3pNx_9oqx9LPyAbLjzK7rJFc53HHO7H7ZGE8MY0896H77AMbJwXbVo5WyTCM6J0d8fymZxZby9wVhYVIK3IioUjKyYd-WScy7IU34sXWsB6mtnyVq7AAPJZV3psgoVhZ_bzZc" 
            />
            <div className="absolute inset-0 bg-deep-maroon/40 mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-0 p-8">
              <p className="text-white font-cinzel text-xl italic leading-tight">"Where antiquity meets your eternity."</p>
            </div>
          </motion.div>

          {/* Testimonial Tile */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={flowVariants}
            className="bg-white p-8 border-b-4 border-gold-leaf shadow-sm"
          >
            <div className="flex gap-1 text-gold-leaf mb-4">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
            </div>
            <p className="font-body italic text-on-surface-variant mb-6 text-lg">"The sheer majesty of the venue was matched only by the flawless execution of our three-day celebration. A true palace for a true union."</p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuB1HDkDsWfV0-3bDOnRGa83Tx2rBIZUJGYlHRJES644Z6JBCofPQRkzhdOkZx9ZKoYHNhXvWBwHhB1RmsBZ9nXEU_Go8LRQ94kHk9y16YxGapkJbItU7S0pgFnOirLYNSOCCO0QlBqaN3mipi5vGgsZTR0bGrNpjn7O5z3b5W6wfRfLSjBRG0ERlXm4sA6KW2RX5TcgI6nylPkLS96uPy8cIA1MUVDaZvsex5C_QfAOl8whIKtWLqWyOUYWvcry700FEiOyxqK8Y" 
                />
              </div>
              <div>
                <h4 className="font-body font-semibold tracking-widest uppercase text-deep-maroon text-xs">Priya & Arjun</h4>
                <p className="text-[10px] text-on-surface-variant/70 uppercase tracking-widest mt-1">Royal Union 2023</p>
              </div>
            </div>
          </motion.div>

        </aside>
      </div>

    </main>
  );
}