import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import { useEnquiry } from "../context/EnquiryContext";
import heroImg from "../assets/images/hero.webp";
import SEO from "../components/common/SEO";

export default function Contact() {
  const { openForm } = useEnquiry();

  return (
    <>
      <SEO 
        title="Contact Us & Booking" 
        description="Get in touch with the Heritage Concierge team at Ayswariya Mahal to plan your grand event. Send us a royal petition." 
        path="/contact"
      />
      <main className="bg-[#fdfbf7] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-40 pb-32 px-6 flex items-center justify-center min-h-[50vh] md:min-h-[60vh]">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImg})` }}
        ></div>
        {/* Dark Cinematic Overlay fading into cream bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#4A0A12]/80 via-[#1c0d11]/70 to-[#fdfbf7]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-6 text-[#E5C76B]"
          >
            <Sparkles size={24} strokeWidth={1} />
          </motion.div>
          <motion.p
            className="font-serif uppercase tracking-[0.4em] text-[#E5C76B] mb-6 font-bold text-sm drop-shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Get in Touch
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-display text-[#fdfbf7] drop-shadow-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Plan Your <span className="italic text-[#E5C76B]">Grand Event</span>
          </motion.h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="pt-32 lg:pt-40 pb-16 md:py-[96px] px-6">
        <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-12"
          >
            <div>
              <h2 className="text-4xl font-display text-on-surface mb-6">We'd Love to Hear From You</h2>
              <p className="text-gray-600 leading-8">
                Whether you're planning a grand wedding, a corporate event, or a family gathering, our Heritage Concierge team is here to assist you in making your event truly unforgettable.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl border border-gold-leaf/30 flex items-center justify-center bg-white group-hover:bg-gold-leaf group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} className="text-gold-leaf group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-display text-xl text-on-surface mb-1">Our Location</h4>
                  <p className="text-gray-600 leading-relaxed">
                    151, Jawaharlal Nehru Road,<br />
                    (100 Feet Road) MMDA Signal,<br />
                    Arumbakkam, Chennai - 600106<br />
                    <span className="italic text-sm">Landmark: Arumbakkam Metro Station</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl border border-gold-leaf/30 flex items-center justify-center bg-white group-hover:bg-gold-leaf group-hover:text-white transition-colors duration-300">
                  <Phone size={20} className="text-gold-leaf group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-display text-xl text-on-surface mb-1">Phone</h4>
                  <p className="text-gray-600">+91 87545 14611</p>
                  <p className="text-gray-600">044-24756619 / 044-24756627</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl border border-gold-leaf/30 flex items-center justify-center bg-white group-hover:bg-gold-leaf group-hover:text-white transition-colors duration-300">
                  <Mail size={20} className="text-gold-leaf group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-display text-xl text-on-surface mb-1">Email</h4>
                  <p className="text-gray-600">am2001chennai@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl border border-gold-leaf/30 flex items-center justify-center bg-white group-hover:bg-gold-leaf group-hover:text-white transition-colors duration-300">
                  <Clock size={20} className="text-gold-leaf group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-display text-xl text-on-surface mb-1">Office Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Action Area & Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col h-full space-y-8"
          >
            {/* Quick Enquiry Card */}
            <div className="bg-white p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gold-leaf/20 text-center">
              <h3 className="font-display text-3xl text-on-surface mb-4">Plan Your Celebration</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Send us a royal petition and our Heritage Concierge will get back to you with venue availability and bespoke packages.
              </p>
              <button
                onClick={openForm}
                className="w-full bg-deep-maroon text-gold-leaf py-4 rounded-full font-semibold uppercase tracking-[0.2em] text-sm hover:bg-[#E5C76B] hover:text-[#4A0A12] transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                Send an Enquiry
              </button>
            </div>

            {/* Google Map Embed */}
            <div className="flex-1 min-h-[300px] md:min-h-[400px] bg-[#E3D5B8] rounded-2xl overflow-hidden relative border border-gold-leaf/30 shadow-inner group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5775053385532!2d80.2115214!3d13.0625433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526695dd0a89ad%3A0x1b112a6d3c31ebea!2sAyswariya%20Mahal%20Marriage%20and%20Exhibition%20Hall!5e0!3m2!1sen!2sin!4v1780692465802!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full filter grayscale-[20%] contrast-125 sepia-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:sepia-0 group-hover:contrast-100"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ayswariya Mahal Location"
              ></iframe>
              {/* Optional overlay to give it a luxury tint that fades on hover */}
              <div className="absolute inset-0 bg-deep-maroon/5 mix-blend-multiply pointer-events-none group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
          </motion.div>

        </div>
      </section>

      </main>
    </>
  );
}
