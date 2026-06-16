import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useLayoutEffect, useState, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import { EnquiryProvider } from "./context/EnquiryContext";
import OpeningAnimation from "./components/common/OpeningAnimation";
import ScrollToTop from "./components/common/ScrollToTop";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Reviews = lazy(() => import("./pages/Reviews"));
const SowbhagyaMahal = lazy(() => import("./pages/SowbhagyaMahal"));

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

function RouteLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-10 w-10 animate-pulse rounded-full bg-[#E5C76B]/40" />
        <p className="font-serif text-sm italic text-[#6A1724]/50">Loading...</p>
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  return (
    <Suspense fallback={<RouteLoader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/sowbhagya-mahal" element={<SowbhagyaMahal />} />
      </Routes>
    </Suspense>
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
          <ScrollToTop />
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
