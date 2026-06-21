import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useLayoutEffect, useState, lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import { EnquiryProvider } from "./context/EnquiryContext";
import OpeningAnimation from "./components/common/OpeningAnimation";
import ScrollToTop from "./components/common/ScrollToTop";
import { routeLoaders, warmPrimaryRoutes } from "./utils/routePrefetch";

const Home = lazy(routeLoaders["/"]);
const About = lazy(routeLoaders["/about"]);
const Facilities = lazy(routeLoaders["/facilities"]);
const Gallery = lazy(routeLoaders["/gallery"]);
const Contact = lazy(routeLoaders["/contact"]);
const Reviews = lazy(routeLoaders["/reviews"]);
const SowbhagyaMahal = lazy(routeLoaders["/sowbhagya-mahal"]);

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

  useEffect(() => {
    if (showOpening) return undefined;

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(warmPrimaryRoutes, { timeout: 3000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(warmPrimaryRoutes, 1500);
    return () => window.clearTimeout(timeoutId);
  }, [showOpening]);

  useLayoutEffect(() => {
    if (!showOpening) {
      document.documentElement.classList.remove("intro-scroll-lock");
      return undefined;
    }

    document.documentElement.classList.add("intro-scroll-lock");
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.documentElement.classList.remove("intro-scroll-lock");
      document.body.style.removeProperty("overflow");
      document.documentElement.style.removeProperty("overflow");
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
