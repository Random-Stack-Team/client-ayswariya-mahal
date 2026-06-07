import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useState } from "react";
import { AnimatePresence } from "framer-motion";
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

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [showOpening, setShowOpening] = useState(shouldShowOpeningAnimation);

  const handleOpeningComplete = () => {
    setShowOpening(false);
  };

  return (
    <HelmetProvider>
      <EnquiryProvider>
        <Router>
          <div className={`app-reveal ${showOpening ? "app-reveal--intro" : "app-reveal--ready"}`}>
            <ScrollToTop />
            <MainLayout>
              <Suspense fallback={null}>
                <AnimatedRoutes />
              </Suspense>
            </MainLayout>
          </div>

          {showOpening && <OpeningAnimation onComplete={handleOpeningComplete} />}
        </Router>
      </EnquiryProvider>
    </HelmetProvider>
  );
}

export default App;
