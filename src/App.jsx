import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import MainLayout from "./layouts/MainLayout";
import { EnquiryProvider } from "./context/EnquiryContext";
import ScrollToTop from "./components/common/ScrollToTop";

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

function App() {
  return (
    <HelmetProvider>
      <EnquiryProvider>
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
      </EnquiryProvider>
    </HelmetProvider>
  );
}

export default App;