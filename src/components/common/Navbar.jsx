import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-3xl font-semibold">
          Ayswariya Mahal
        </h1>

        <ul className="hidden md:flex gap-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/facilities">Facilities</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        <button className="bg-gold px-5 py-2 rounded-full text-white">
          Book Now
        </button>

      </nav>
    </header>
  );
}