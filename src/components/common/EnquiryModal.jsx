import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useEnquiry } from "../../context/EnquiryContext";

export default function EnquiryModal() {
  const { isEnquiryOpen, closeEnquiry } = useEnquiry();

  return (
    <AnimatePresence>
      {isEnquiryOpen && (
        <>
          {/* Dark Blurred Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeEnquiry}
            className="fixed inset-0 bg-primary/80 backdrop-blur-sm z-[100]"
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 md:p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-surface w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl border-4 border-double border-gold-leaf/60 relative pointer-events-auto"
            >
              {/* Close Button */}
              <button
                onClick={closeEnquiry}
                className="absolute top-4 right-4 text-primary hover:text-gold-leaf transition-colors duration-300 z-10 bg-white/50 backdrop-blur rounded-full p-2"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 rounded-tr-xl pointer-events-none"></div>

                <header className="mb-10 text-center">
                  <h2 className="font-cinzel text-3xl md:text-4xl text-deep-maroon mb-2 drop-shadow-sm">The Royal Petition</h2>
                  <p className="font-body text-on-surface-variant italic">Share the dimensions of your dream, and we shall craft the reality.</p>
                  <div className="w-16 h-px bg-gold-leaf mx-auto mt-6"></div>
                </header>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Full Name */}
                    <div className="relative group">
                      <label className="block font-body text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-gold-leaf">Honorable Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-transparent border-0 border-b-2 border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body placeholder:text-primary/20"
                        placeholder="e.g. Anand & Priya"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div className="relative group">
                      <label className="block font-body text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-gold-leaf">Mobile Number</label>
                      <input
                        type="tel"
                        required
                        className="w-full bg-transparent border-0 border-b-2 border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body placeholder:text-primary/20"
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Event Type */}
                    <div className="relative group">
                      <label className="block font-body text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-gold-leaf">Type of Celebration</label>
                      <select className="w-full bg-transparent border-0 border-b-2 border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body appearance-none">
                        <option>Wedding Ceremony</option>
                        <option>Grand Reception</option>
                        <option>Engagement</option>
                        <option>Corporate Event</option>
                        <option>Other Event</option>
                      </select>
                    </div>

                    {/* Guest Count */}
                    <div className="relative group">
                      <label className="block font-body text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-gold-leaf">Expected Guests</label>
                      <select className="w-full bg-transparent border-0 border-b-2 border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body appearance-none">
                        <option>Up to 500</option>
                        <option>500 - 1000</option>
                        <option>1000 - 1500</option>
                        <option>1500+</option>
                      </select>
                    </div>
                  </div>

                  {/* Event Date */}
                  <div className="relative group">
                    <label className="block font-body text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-gold-leaf">Auspicious Date</label>
                    <input
                      type="date"
                      required
                      className="w-full bg-transparent border-0 border-b-2 border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body"
                    />
                  </div>

                  {/* Message */}
                  <div className="relative group">
                    <label className="block font-body text-xs font-semibold tracking-widest uppercase text-on-surface-variant mb-2 transition-colors group-focus-within:text-gold-leaf">Special Requirements</label>
                    <textarea
                      rows="3"
                      className="w-full bg-transparent border-0 border-b-2 border-gold-leaf/30 py-3 px-0 focus:ring-0 input-focus-gold transition-all text-lg font-body resize-none placeholder:text-primary/20"
                      placeholder="Describe the atmosphere, floral preferences, or cultural nuances..."
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={closeEnquiry}
                    className="w-full flex items-center justify-center gap-3 bg-deep-maroon text-gold-leaf font-body text-sm font-semibold uppercase tracking-[0.4em] py-5 mt-6 border-2 border-transparent hover:border-gold-leaf hover:bg-gold-leaf hover:text-deep-maroon transition-all duration-500 active:scale-95 shadow-lg rounded-sm"
                  >
                    Submit Enquiry
                    <Sparkles size={20} />
                  </button>
                  <p className="text-center text-on-surface-variant/70 text-xs italic mt-4">
                    Our Heritage Concierge will respond within 24 royal hours.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
