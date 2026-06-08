import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import RoyalStatistics from "../components/home/RoyalStatistics";
import FacilitiesPreview from "../components/home/FacilitiesPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import ContactCTA from "../components/home/ContactCTA";
import SEO from "../components/common/SEO";

import PageTransition from "../components/common/PageTransition";

export default function Home() {
  return (
    <>
      <SEO 
        title="Premium Wedding & Event Venue in Chennai" 
        description="Ayswariya Mahal is a premium wedding and event venue in Chennai for weddings, receptions, engagements, and family celebrations with elegant interiors, spacious seating, dining facilities, and refined hospitality." 
      />
      <PageTransition>
        <Hero />
        <AboutPreview />
        <RoyalStatistics />
        <FacilitiesPreview />
        <GalleryPreview />
        <ContactCTA />
      </PageTransition>
    </>
  );
}
