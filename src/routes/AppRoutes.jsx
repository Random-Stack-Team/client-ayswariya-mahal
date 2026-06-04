import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Reviews from "../pages/Reviews";
import About from "../pages/About";
import Facilities from "../pages/Facilities";
import BookNow from "../pages/BookNow";

export default function AppRoutes() {
  return (
    <Routes>
      
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />

      <Route
        path="/contact"
        element={
          <MainLayout>
            <Contact />
          </MainLayout>
        }
      />

      <Route
        path="/gallery"
        element={
          <MainLayout>
            <Gallery />
          </MainLayout>
        }
      />

      <Route
        path="/reviews"
        element={
          <MainLayout>
            <Reviews />
          </MainLayout>
        }
      />



   <Route
   path="/about"
   element={
    <MainLayout>
      <About />
    </MainLayout>
   }
   />

  <Route
  path="/facilities"
  element={
    <MainLayout>
      <Facilities />
    </MainLayout>
  }
  />

    <Route
  path="/book"
  element={
    <MainLayout>
      <BookNow />
    </MainLayout>
  }
/>

    </Routes>
  );
}