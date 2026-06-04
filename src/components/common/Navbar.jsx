import { NavLink } from "react-router-dom";

function Navbar() {
  const linkClass = ({ isActive }) =>
    `transition duration-300 ${
      isActive ? "text-yellow-400" : "text-white hover:text-yellow-400"
    }`;

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <div className="text-white font-serif text-xl tracking-widest">
          AYSWARIYA MAHAL
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm uppercase tracking-wider">

          <NavLink to="/" className={linkClass}>Home</NavLink>

          <NavLink to="/gallery" className={linkClass}>Gallery</NavLink>

          <NavLink to="/reviews" className={linkClass}>Reviews</NavLink>

          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <NavLink to="/about" className={linkClass}>About</NavLink>

          <NavLink to="/facilities" className={linkClass}>Facilities</NavLink>

          <NavLink to="/book" className={linkClass}>Book Now</NavLink>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;