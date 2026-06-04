import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <main className="bg-[#F7F4EF] min-h-screen">

      {/* Hero */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.p
            className="uppercase tracking-[0.3em] text-[#C8A97E] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Contact Us
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-serif text-[#111111]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Let's Plan Your Celebration
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Get in touch with our team to discuss your wedding,
            reception, engagement, or special event.
          </motion.p>

        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Contact Details */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-sm"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-serif mb-8">
              Contact Information
            </h2>

            <div className="space-y-8">

              <div className="flex gap-5">
                <Phone
                  size={28}
                  className="text-[#C8A97E]"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    Phone Number
                  </h3>

                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Mail
                  size={28}
                  className="text-[#C8A97E]"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    Email Address
                  </h3>

                  <p className="text-gray-600">
                    info@ayswariyamahal.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin
                  size={28}
                  className="text-[#C8A97E]"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    Location
                  </h3>

                  <p className="text-gray-600">
                    Ayswariya Mahal,
                    Trichy Road,
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock
                  size={28}
                  className="text-[#C8A97E]"
                />

                <div>
                  <h3 className="font-semibold text-lg">
                    Office Hours
                  </h3>

                  <p className="text-gray-600">
                    Monday - Sunday
                  </p>

                  <p className="text-gray-600">
                    9:00 AM - 9:00 PM
                  </p>
                </div>
              </div>

            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-3xl p-10 shadow-sm"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-serif mb-8">
              Send an Enquiry
            </h2>

            <form className="space-y-6">

              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <div>
                <textarea
                  rows="5"
                  placeholder="Tell us about your event..."
                  className="w-full border border-gray-200 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C8A97E] text-white py-4 rounded-xl hover:scale-[1.02] transition"
              >
                Send Enquiry
              </button>

            </form>

          </motion.div>

        </div>
      </section>

      {/* Map Section */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">

            <iframe
              title="Ayswariya Mahal Location"
              src="https://maps.google.com/maps?q=Trichy&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            />

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-[#C8A97E] mb-4">
            Book Your Event
          </p>

          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            Your Perfect Celebration Starts Here
          </h2>

          <p className="text-gray-600 leading-8 mb-10">
            Contact us today and let us help you create
            unforgettable memories for your special occasion.
          </p>

          <a
            href="tel:+919876543210"
            className="inline-block bg-[#C8A97E] text-white px-8 py-4 rounded-full hover:scale-105 transition"
          >
            Call Now
          </a>

        </div>
      </section>

    </main>
  );
}