import Navbar from "../components/common/Navbar";
import GateExperience from "../components/home/GateExperience";
import AboutPreview from "../components/home/AboutPreview";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import Footer from "../components/common/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <GateExperience />
      <AboutPreview />
      <FacilitiesPreview />
      <Footer />
    </>
  );
}