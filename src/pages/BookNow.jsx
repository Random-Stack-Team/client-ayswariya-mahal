import { motion } from "framer-motion";
import { Calendar, Users, Phone, Mail } from "lucide-react";

export default function BookNow() {
  return (
    <main className="bg-[#F7F4EF] min-h-screen">

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <motion.p
            className="uppercase tracking-[0.3em] text-[#C8A97E] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Reserve Your Date
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-serif text-[#111111]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Book Your Special Event
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Share your event details and our team will contact you
            to confirm availability and discuss your requirements.
          </motion.p>

        </div>
      </section>

      {/* Booking Form */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            className="bg-white rounded-3xl shadow-sm p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h2 className="text-3xl font-serif mb-8">
              Event Booking Request
            </h2>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="block mb-2 font-medium">
                  Mobile Number *
                </label>

                <div className="relative">
                  <Phone
                    size={18}
                    className="absolute left-4 top-5 text-gray-400"
                  />

                  <input
                    type="tel"
                    required
                    placeholder="Enter mobile number"
                    className="w-full pl-12 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-5 text-gray-400"
                  />

                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="w-full pl-12 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block mb-2 font-medium">
                  Event Date
                </label>

                <div className="relative">
                  <Calendar
                    size={18}
                    className="absolute left-4 top-5 text-gray-400"
                  />

                  <input
                    type="date"
                    className="w-full pl-12 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                  />
                </div>
              </div>

              {/* Event Type */}
              <div>
                <label className="block mb-2 font-medium">
                  Event Type
                </label>

                <select className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E]">
                  <option>Wedding</option>
                  <option>Reception</option>
                  <option>Engagement</option>
                  <option>Birthday Celebration</option>
                  <option>Corporate Event</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Session */}
              <div>
                <label className="block mb-2 font-medium">
                  Preferred Session
                </label>

                <select className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E]">
                  <option>Morning</option>
                  <option>Evening</option>
                  <option>Night</option>
                </select>
              </div>

              {/* Guests */}
              <div>
                <label className="block mb-2 font-medium">
                  Expected Guests
                </label>

                <div className="relative">
                  <Users
                    size={18}
                    className="absolute left-4 top-5 text-gray-400"
                  />

                  <input
                    type="number"
                    placeholder="Number of guests"
                    className="w-full pl-12 p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                  />
                </div>
              </div>

              {/* Facilities */}
              <div>
                <label className="block mb-4 font-medium">
                  Required Facilities
                </label>

                <div className="grid md:grid-cols-2 gap-4">

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Air Conditioning
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Dining Hall
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Guest Rooms
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Generator Backup
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Parking Facility
                  </label>

                  <label className="flex items-center gap-3">
                    <input type="checkbox" />
                    Decoration Support
                  </label>

                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block mb-2 font-medium">
                  Additional Requirements
                </label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your event requirements..."
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#C8A97E]"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-[#C8A97E] text-white py-4 rounded-xl hover:scale-[1.02] transition"
              >
                Check Availability
              </button>

            </form>

          </motion.div>

        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-center text-4xl md:text-5xl font-serif mb-16">
            How Booking Works
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            <div className="text-center">
              <div className="text-5xl font-serif text-[#C8A97E] mb-4">
                1
              </div>
              <p>Submit Booking Request</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-serif text-[#C8A97E] mb-4">
                2
              </div>
              <p>Availability Verification</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-serif text-[#C8A97E] mb-4">
                3
              </div>
              <p>Our Team Contacts You</p>
            </div>

            <div className="text-center">
              <div className="text-5xl font-serif text-[#C8A97E] mb-4">
                4
              </div>
              <p>Booking Confirmation</p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}