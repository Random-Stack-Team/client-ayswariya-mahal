import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <FacilitiesPreview />
      <Footer />
    </>
  );
}