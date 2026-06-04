import { motion } from "framer-motion";
import {
  Building2,
  Car,
  ShieldCheck,
  Zap,
  UtensilsCrossed,
  BedDouble,
  AirVent,
  MapPin,
} from "lucide-react";

const facilities = [
  {
    icon: <AirVent size={36} />,
    title: "Centralized Air Conditioning",
    description:
      "Comfortable climate-controlled environment for guests throughout the event.",
  },
  {
    icon: <Building2 size={36} />,
    title: "Spacious Event Hall",
    description:
      "Accommodates large gatherings with ample seating and elegant interiors.",
  },
  {
    icon: <UtensilsCrossed size={36} />,
    title: "Dining Hall",
    description:
      "Dedicated dining area designed for smooth guest experience and service.",
  },
  {
    icon: <BedDouble size={36} />,
    title: "Guest Rooms",
    description:
      "Comfortable rooms available for bride, groom, and family members.",
  },
  {
    icon: <Car size={36} />,
    title: "Ample Parking",
    description:
      "Large parking area ensuring convenience for all guests attending events.",
  },
  {
    icon: <ShieldCheck size={36} />,
    title: "CCTV Security",
    description:
      "24/7 surveillance and security systems for a safe environment.",
  },
  {
    icon: <Zap size={36} />,
    title: "Generator Backup",
    description:
      "Uninterrupted celebrations with reliable power backup facilities.",
  },
  {
    icon: <MapPin size={36} />,
    title: "Prime Location",
    description:
      "Conveniently located with excellent accessibility and transport connectivity.",
  },
];

export default function Facilities() {
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
            Our Facilities
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl font-serif text-[#111111]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Designed For Grand Celebrations
          </motion.h1>

          <motion.p
            className="mt-6 max-w-3xl mx-auto text-lg text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Every facility at Ayswariya Mahal is thoughtfully designed
            to ensure a comfortable, memorable, and seamless experience
            for every guest.
          </motion.p>

        </div>
      </section>

      {/* Facilities Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >
                <div className="text-[#C8A97E] mb-5">
                  {facility.icon}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-[#111111]">
                  {facility.title}
                </h3>

                <p className="text-gray-600 leading-7">
                  {facility.description}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* Highlight Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f29c3e8f1f"
              alt="Wedding Hall"
              className="rounded-3xl w-full h-[500px] object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[0.3em] text-[#C8A97E] mb-4">
              Why Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-serif mb-8">
              Everything You Need Under One Roof
            </h2>

            <ul className="space-y-4 text-gray-700">

              <li>✓ Seating Capacity up to 1500 Guests</li>
              <li>✓ Floating Capacity up to 2500 Guests</li>
              <li>✓ Fully Air Conditioned Hall</li>
              <li>✓ Spacious Dining Area</li>
              <li>✓ Premium Guest Rooms</li>
              <li>✓ CCTV Surveillance</li>
              <li>✓ Power Backup Facility</li>
              <li>✓ Large Parking Space</li>

            </ul>

          </motion.div>

        </div>
      </section>

    </main>
  );
}