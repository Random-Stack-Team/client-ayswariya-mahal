import { useNavigate } from "react-router-dom";
import aboutImg from "../../assets/images/about.jpg";
export default function AboutPreview() {
  const navigate = useNavigate();


  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <img
         src={aboutImg}
          alt="hall"
         className="rounded-3xl object-cover w-full h-full"
        />
        </div>

        <div className="flex flex-col justify-center">
          <p className="uppercase tracking-widest text-gold">
            About Us
          </p>

          <h2 className="text-5xl font-serif my-4">
            More Than A Wedding Hall
          </h2>

          <p className="text-gray-600 leading-8">
            Since 2001, Ayswariya Mahal has been
            hosting unforgettable weddings,
            receptions, engagements and family
            celebrations.
          </p>

          <button
        onClick={() => navigate("/about")}
        className="mt-6 px-6 py-3 border border-[#C8A97E] text-[#C8A97E] rounded-full hover:bg-[#C8A97E] hover:text-white transition duration-300"
           >
          Learn More
         </button>
        </div>

      </div>
    </section>
  );
}