import {
  ParkingCircle,
  Shield,
  Zap,
  Building2
} from "lucide-react";

const facilities = [
  {
    icon: <Building2 />,
    title: "Centralized AC",
  },
  {
    icon: <ParkingCircle />,
    title: "Spacious Parking",
  },
  {
    icon: <Shield />,
    title: "24/7 CCTV",
  },
  {
    icon: <Zap />,
    title: "Generator Backup",
  },
];

export default function FacilitiesPreview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl text-center font-serif mb-16">
          Premium Facilities
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {facilities.map((item) => (
            <div
              key={item.title}
              className="border p-8 rounded-3xl hover:shadow-lg transition"
            >
              <div className="mb-4">
                {item.icon}
              </div>

              <h3 className="text-xl font-medium">
                {item.title}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}