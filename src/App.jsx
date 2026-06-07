import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import { EnquiryProvider } from "./context/EnquiryContext";
import ScrollToTop from "./components/common/ScrollToTop";
import OpeningAnimation from "./components/common/OpeningAnimation";

// Lazy-loaded routes for Fast Loading Speed
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Reviews = lazy(() => import("./pages/Reviews"));

// A simple fallback spinner for lazy loaded routes
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
    <div className="w-12 h-12 border-4 border-[#E5C76B] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const shouldShowOpeningAnimation = () => {
  const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");

  // The intro is controlled at the app shell level, not by the Home route.
  // That keeps navbar Home clicks and internal navigation from replaying it.
  const navigationEntry = window.performance?.getEntriesByType("navigation")?.[0];
  const navType = navigationEntry?.type || "";
  const shouldShow = !hasSeenIntro || navType === "reload";

  if (shouldShow) {
    sessionStorage.setItem("hasSeenIntro", "true");
  }

  return shouldShow;
};

function App() {
  const [showSplash, setShowSplash] = useState(shouldShowOpeningAnimation);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <HelmetProvider>
      <EnquiryProvider>
        {showSplash ? (
          <OpeningAnimation onComplete={handleSplashComplete} />
        ) : (
          <Router>
            <ScrollToTop />
            <MainLayout>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/facilities" element={<Facilities />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/reviews" element={<Reviews />} />
                </Routes>
              </Suspense>
            </MainLayout>
          </Router>
        )}
      </EnquiryProvider>
    </HelmetProvider>
  );
}

export default App;
