import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Reviews from "../pages/Reviews";
import About from "../pages/About";
import Facilities from "../pages/Facilities";
import Contact from "../pages/Contact";

const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.6, ease: "easeInOut" }
};

const PageWrapper = ({ children }) => (
  <motion.div {...pageTransition}>
    {children}
  </motion.div>
);

import { useEffect } from "react";

export default function AppRoutes() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        
        <Route
          path="/"
          element={
            <MainLayout>
              <PageWrapper>
                <Home />
              </PageWrapper>
            </MainLayout>
          }
        />

        <Route
          path="/gallery"
          element={
            <MainLayout>
              <PageWrapper>
                <Gallery />
              </PageWrapper>
            </MainLayout>
          }
        />

        <Route
          path="/reviews"
          element={
            <MainLayout>
              <PageWrapper>
                <Reviews />
              </PageWrapper>
            </MainLayout>
          }
        />

        <Route
          path="/about"
          element={
            <MainLayout>
              <PageWrapper>
                <About />
              </PageWrapper>
            </MainLayout>
          }
        />

        <Route
          path="/facilities"
          element={
            <MainLayout>
              <PageWrapper>
                <Facilities />
              </PageWrapper>
            </MainLayout>
          }
        />

        <Route
          path="/contact"
          element={
            <MainLayout>
              <PageWrapper>
                <Contact />
              </PageWrapper>
            </MainLayout>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}