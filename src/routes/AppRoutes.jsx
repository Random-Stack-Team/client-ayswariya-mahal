import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Facilities from "../pages/Facilities";
import Gallery from "../pages/Gallery";
import Reviews from "../pages/Reviews";
import Contact from "../pages/Contact";
import BookNow from "../pages/BookNow";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/facilities" element={<Facilities />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/book-now" element={<BookNow />} />
    </Routes>
  );
}