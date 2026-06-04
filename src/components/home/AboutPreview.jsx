export default function AboutPreview() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <div>
          <img
            src="/about.jpg"
            alt="hall"
            className="rounded-3xl"
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

          <button className="mt-8 border border-black px-6 py-3 w-fit rounded-full">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}