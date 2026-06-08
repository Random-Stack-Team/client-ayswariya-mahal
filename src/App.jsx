import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import { EnquiryProvider } from "./context/EnquiryContext";
import OpeningAnimation from "./components/common/OpeningAnimation";

import Home from "./pages/Home";
import About from "./pages/About";
import Facilities from "./pages/Facilities";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";

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
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
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

  useLayoutEffect(() => {
    if (!showOpening) {
      document.documentElement.classList.remove("intro-scroll-lock");
      return undefined;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;

    document.documentElement.classList.add("intro-scroll-lock");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.classList.remove("intro-scroll-lock");
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
    };
  }, [showOpening]);

  const handleOpeningComplete = () => {
    setShowOpening(false);
  };

  return (
    <HelmetProvider>
      <EnquiryProvider>
        <Router>
          <div className={`app-reveal ${showOpening ? "app-reveal--intro" : "app-reveal--ready"}`}>
            <MainLayout>
              <AnimatedRoutes />
            </MainLayout>
          </div>

          {showOpening && <OpeningAnimation onComplete={handleOpeningComplete} />}
        </Router>
      </EnquiryProvider>
    </HelmetProvider>
  );
}

export default App;
