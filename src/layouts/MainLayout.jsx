import { useLocation } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingEnvelope from "../components/common/FloatingEnvelope";
import MinimalFooter from "../components/common/MinimalFooter";

export default function MainLayout({ children }) {
  const location = useLocation();
  const showFooter = location.pathname === "/";
  const showMinimalFooter = !showFooter && location.pathname !== "/sowbhagya-mahal";

  return (
    <>
      <Navbar />
      {children}
      {showFooter && <Footer />}
      {showMinimalFooter && <MinimalFooter />}
      <FloatingEnvelope />
    </>
  );
}
