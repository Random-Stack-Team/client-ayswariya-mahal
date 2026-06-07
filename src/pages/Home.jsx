import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import RoyalStatistics from "../components/home/RoyalStatistics";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import ContactCTA from "../components/home/ContactCTA";
import SEO from "../components/common/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="Luxury Wedding Hall in Chennai" 
        description="Experience grandeur at Ayswariya Mahal. The perfect destination for royal weddings, grand receptions, and premium corporate events." 
      />
      <Hero />
      <AboutPreview />
      <RoyalStatistics />
      <FacilitiesPreview />
      <GalleryPreview />
      <ContactCTA />
    </>
  );
}