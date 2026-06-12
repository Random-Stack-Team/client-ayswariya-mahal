import { useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingEnvelope from "../components/common/FloatingEnvelope";

export default function MainLayout({ children }) {
  const location = useLocation();
  const showFooter = location.pathname === "/";

  return (
    <>
      <Navbar />
      {children}
      {showFooter && <Footer />}
      <FloatingEnvelope />
    </>
  );
}
