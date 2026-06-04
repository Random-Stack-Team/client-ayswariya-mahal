import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, CalendarDays, Users, Type } from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-surface min-h-screen pt-32 pb-24">
      {/* Decorative BG */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-primary rounded-b-[50%] scale-150 origin-top -translate-y-64 pointer-events-none opacity-90"></div>

      {/* Hero Section */}
      <section className="relative z-10 px-6 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            className="font-body text-gold-leaf font-semibold tracking-[0.4em] uppercase text-sm mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Connect With Us
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-cinzel text-surface-bright leading-tight drop-shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Plan Your <span className="italic text-antique-gold">Royal Celebration</span>
          </motion.h1>
          <div className="w-24 h-px bg-gold-leaf mx-auto mt-8 opacity-50"></div>
        </div>
      </section>

      <section className="relative z-10 px-6">
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-12 gap-16">

          {/* Contact Details Column */}
          <motion.div
            className="lg:col-span-5 bg-deep-maroon text-ivory rounded-t-full rounded-b-3xl p-12 md:p-16 flex flex-col items-center text-center shadow-[0_20px_50px_rgba(74,10,18,0.2)] border border-gold-leaf/20 relative overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Inner Border */}
            <div className="absolute inset-4 rounded-t-full rounded-b-2xl border border-gold-leaf/10 pointer-events-none"></div>

            <h2 className="text-3xl md:text-4xl font-cinzel text-gold-leaf mb-12 mt-16">
              Palace Directory
            </h2>

            <div className="space-y-10 w-full">
              <div className="flex flex-col items-center gap-3">
                <MapPin size={24} className="text-gold-leaf" />
                <h3 className="font-cinzel text-xl text-antique-gold">Location</h3>
                <p className="font-body text-ivory/80 leading-relaxed text-sm">
                  Ayswariya Mahal,<br />
                  Trichy Road, Arumbakkam,<br />
                  Chennai 600106
                </p>
              </div>

              <div className="w-12 h-px bg-gold-leaf/30 mx-auto"></div>

              <div className="flex flex-col items-center gap-3">
                <Phone size={24} className="text-gold-leaf" />
                <h3 className="font-cinzel text-xl text-antique-gold">Direct Line</h3>
                <p className="font-body text-ivory/80 leading-relaxed text-sm">
                  +91 98765 43210
                </p>
              </div>

              <div className="w-12 h-px bg-gold-leaf/30 mx-auto"></div>

              <div className="flex flex-col items-center gap-3">
                <Mail size={24} className="text-gold-leaf" />
                <h3 className="font-cinzel text-xl text-antique-gold">Electronic Mail</h3>
                <p className="font-body text-ivory/80 leading-relaxed text-sm">
                  royal@ayswariyamahal.com
                </p>
              </div>
            </div>
          </motion.div>

          {/* Enquiry Form Column */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-gold-leaf/10 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 rounded-tr-3xl"></div>
              
              <h2 className="text-3xl md:text-4xl font-cinzel text-primary mb-2">Request an Audience</h2>
              <p className="font-body text-on-surface-variant mb-10">We invite you to share the details of your upcoming celebration.</p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <label className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2 block">Honorable Name</label>
                    <input
                      type="text"
                      className="w-full bg-surface border-b-2 border-gold-leaf/30 py-3 px-4 font-body focus:outline-none focus:border-gold-leaf transition-colors text-primary placeholder-primary/30"
                      placeholder="e.g. Anand & Priya"
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <label className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2 block">Contact Number</label>
                    <input
                      type="tel"
                      className="w-full bg-surface border-b-2 border-gold-leaf/30 py-3 px-4 font-body focus:outline-none focus:border-gold-leaf transition-colors text-primary placeholder-primary/30"
                      placeholder="+91"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Event Type */}
                  <div className="relative">
                    <label className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2 block">Type of Celebration</label>
                    <select className="w-full bg-surface border-b-2 border-gold-leaf/30 py-3 px-4 font-body focus:outline-none focus:border-gold-leaf transition-colors text-primary appearance-none">
                      <option>Wedding Ceremony</option>
                      <option>Grand Reception</option>
                      <option>Engagement</option>
                      <option>Corporate Event</option>
                      <option>Other Event</option>
                    </select>
                  </div>

                  {/* Guest Count */}
                  <div className="relative">
                    <label className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2 block">Expected Guests</label>
                    <select className="w-full bg-surface border-b-2 border-gold-leaf/30 py-3 px-4 font-body focus:outline-none focus:border-gold-leaf transition-colors text-primary appearance-none">
                      <option>Up to 500</option>
                      <option>500 - 1000</option>
                      <option>1000 - 1500</option>
                      <option>1500+</option>
                    </select>
                  </div>
                </div>

                {/* Event Date */}
                <div className="relative">
                  <label className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2 block">Auspicious Date</label>
                  <input
                    type="date"
                    className="w-full bg-surface border-b-2 border-gold-leaf/30 py-3 px-4 font-body focus:outline-none focus:border-gold-leaf transition-colors text-primary"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="font-body text-xs uppercase tracking-widest text-on-surface-variant font-semibold mb-2 block">Special Requests</label>
                  <textarea
                    rows="4"
                    className="w-full bg-surface border-2 border-gold-leaf/30 rounded-xl py-3 px-4 font-body focus:outline-none focus:border-gold-leaf transition-colors text-primary placeholder-primary/30 resize-none"
                    placeholder="Tell us about any specific requirements, traditions, or catering needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#9e7d32] via-[#E5C76B] to-[#9e7d32] text-primary font-cinzel text-lg font-bold py-5 rounded-xl hover:shadow-[0_10px_30px_rgba(229,199,107,0.4)] hover:scale-[1.02] transition-all duration-300 tracking-wider uppercase mt-4"
                >
                  BOOK YOUR CELEBRATION
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mt-24 px-6 relative z-10">
        <div className="max-w-[1280px] mx-auto relative rounded-3xl overflow-hidden border-8 border-gold-leaf/20 shadow-2xl">
          <div className="absolute inset-0 bg-primary/10 pointer-events-none mix-blend-multiply"></div>
          <iframe
            title="Ayswariya Mahal Location"
            src="https://maps.google.com/maps?q=Ayswariya%20Mahal%20Arumbakkam%20Chennai%20600106&output=embed"
            className="w-full h-[500px] border-0 grayscale opacity-90 contrast-125 hover:grayscale-0 transition-all duration-1000"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  );
}