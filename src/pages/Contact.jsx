import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import heroImg from "../assets/images/Gallery/hall4.webp";
import SEO from "../components/common/SEO";
import PageTransition from "../components/common/PageTransition";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "Wedding",
    date: "",
    message: "",
  });

  const handleChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Endpoint not configured — UI only. Wire to Google Apps Script URL when provided.
    alert("Thank you for your enquiry. Our team will contact you shortly.");
    setForm({ name: "", phone: "", email: "", eventType: "Wedding", date: "", message: "" });
  };

  return (
    <>
      <SEO 
        title="Contact & Enquiry - Book Your Wedding Visit" 
        description="Contact Ayswariya Mahal in Chennai to enquire about wedding hall availability, guest capacity, dining facilities, event packages, and venue visits for weddings, receptions, and family gatherings." 
        path="/contact"
      />
      <PageTransition>
        <main className="bg-[#fdfbf7] wedding-pattern-ivory min-h-[100dvh]">
      {/* Hero Section */}
      <section className="relative flex min-h-[520px] items-center justify-center px-5 pb-24 pt-32 sm:px-6 md:min-h-[580px] md:pb-28 md:pt-36 lg:min-h-[60vh] lg:pb-32 lg:pt-40">
        <img
          src={heroImg}
          alt="Ayswariya Mahal location"
          loading="eager"
          fetchPriority="high"
          decoding="async"
          width="1536"
          height="1024"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Dark Cinematic Overlay fading into cream bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#5A111C]/80 via-[#3F0C15]/70 to-[#fdfbf7]"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6 text-[#E5C76B]">
            <Sparkles size={24} strokeWidth={1} />
          </div>
          <p
            className="type-eyebrow text-[#E5C76B] mb-6 drop-shadow-md"
          >
            Get in Touch
          </p>

          <h1
            className="font-display text-[clamp(34px,7vw,76px)] font-bold leading-[1.1] tracking-[-0.02em] text-[#fdfbf7] drop-shadow-2xl md:max-lg:text-[58px]"
          >
            Let's Plan <span className="italic text-[#E5C76B]">Something Beautiful</span>
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="px-5 pb-16 pt-16 sm:px-6 md:py-[72px] lg:pt-40">
        <div className="max-w-site mx-auto grid items-center gap-10 xl:grid-cols-2 xl:gap-16">
          
          {/* Contact Information */}
          <div
            className="flex flex-col space-y-8 md:space-y-10 lg:space-y-12"
          >
            <div>
              <h2 className="font-serif text-[32px] md:text-[40px] lg:text-5xl font-semibold leading-[1.2] tracking-[0.01em] text-[#5A111C] mb-6">Begin Your Journey</h2>
              <p className="type-body text-[#4f4038]">
                Whether you're planning a wedding, reception, or family celebration, our team is here to help you find the perfect setting.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl border border-gold-leaf/30 flex items-center justify-center bg-white group-hover:bg-gold-leaf group-hover:text-white transition-colors duration-300">
                  <MapPin size={20} className="text-gold-leaf group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-[22px] font-semibold leading-[1.2] text-[#5A111C] mb-1">Our Location</h4>
                  <p className="type-body text-[#4f4038]">
                    151, Jawaharlal Nehru Road,<br />
                    (100 Feet Road) MMDA Signal,<br />
                    Arumbakkam, Chennai - 600106<br />
                    <span className="italic text-base">Landmark: Arumbakkam Metro Station</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl border border-gold-leaf/30 flex items-center justify-center bg-white group-hover:bg-gold-leaf group-hover:text-white transition-colors duration-300">
                  <Phone size={20} className="text-gold-leaf group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-[22px] font-semibold leading-[1.2] text-[#5A111C] mb-1">Phone</h4>
                  <p className="type-body text-[#4f4038]">+91 87545 14611</p>
                  <p className="type-body text-[#4f4038]">044-24756619 / 044-24756627</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl border border-gold-leaf/30 flex items-center justify-center bg-white group-hover:bg-gold-leaf group-hover:text-white transition-colors duration-300">
                  <Mail size={20} className="text-gold-leaf group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-[22px] font-semibold leading-[1.2] text-[#5A111C] mb-1">Email</h4>
                  <p className="type-body text-[#4f4038]">am2001chennai@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 shrink-0 rounded-2xl border border-gold-leaf/30 flex items-center justify-center bg-white group-hover:bg-gold-leaf group-hover:text-white transition-colors duration-300">
                  <Clock size={20} className="text-gold-leaf group-hover:text-white" />
                </div>
                <div>
                  <h4 className="font-serif text-[22px] font-semibold leading-[1.2] text-[#5A111C] mb-1">Office Hours</h4>
                  <p className="type-body text-[#4f4038]">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                  <p className="type-body text-[#4f4038]">Sunday: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

          </div>

          {/* Action Area & Map Placeholder */}
          <div
            className="flex flex-col h-auto space-y-8"
          >
            {/* Inline Enquiry Form */}
            <form onSubmit={handleSubmit} className="bg-white p-5 sm:p-7 md:p-7 lg:p-10 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gold-leaf/20">
              <h3 className="font-serif text-2xl md:text-[28px] lg:text-3xl font-semibold leading-[1.2] tracking-[0.01em] text-[#5A111C] mb-4 text-center">Send an Enquiry</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" aria-label="Full name" className="min-h-12 rounded border border-[#e8e2d7] bg-[#fffdf8] p-3 text-[#4f4038] placeholder:text-[#8a7d6b] focus:border-[#D4A843] focus:outline-none" />
                <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" aria-label="Phone number" className="min-h-12 rounded border border-[#e8e2d7] bg-[#fffdf8] p-3 text-[#4f4038] placeholder:text-[#8a7d6b] focus:border-[#D4A843] focus:outline-none" />
                <input name="email" value={form.email} onChange={handleChange} required placeholder="Email" type="email" aria-label="Email address" className="min-h-12 rounded border border-[#e8e2d7] bg-[#fffdf8] p-3 text-[#4f4038] placeholder:text-[#8a7d6b] focus:border-[#D4A843] focus:outline-none" />
                <select name="eventType" value={form.eventType} onChange={handleChange} className="min-h-12 rounded border border-[#e8e2d7] bg-[#fffdf8] p-3 text-[#4f4038] focus:border-[#D4A843] focus:outline-none">
                  <option>Wedding</option>
                  <option>Reception</option>
                  <option>Engagement</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
                <input name="date" value={form.date} onChange={handleChange} type="date" className="min-h-12 rounded border border-[#e8e2d7] bg-[#fffdf8] p-3 text-[#4f4038] focus:border-[#D4A843] focus:outline-none md:col-span-2" />
                <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" rows={3} aria-label="Your message" className="min-h-24 rounded border border-[#e8e2d7] bg-[#fffdf8] p-3 text-[#4f4038] placeholder:text-[#8a7d6b] focus:border-[#D4A843] focus:outline-none md:col-span-2" />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="min-h-12 w-full max-w-[240px] bg-deep-maroon text-gold-leaf py-3 rounded-full type-cta hover:bg-[#E5C76B] hover:text-[#5A111C] transition-colors duration-300 shadow-md">
                  Send Enquiry
                </button>
              </div>
            </form>

            {/* Google Map Embed */}
            <div className="flex-1 min-h-[300px] md:min-h-[340px] lg:min-h-[400px] bg-[#E3D5B8] rounded-2xl overflow-hidden relative border border-gold-leaf/30 shadow-inner group">
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
          </div>

        </div>
      </section>

        </main>
      </PageTransition>
    </>
  );
}
