import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingEnvelope from "../components/common/FloatingEnvelope";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatingEnvelope />
    </>
  );
}
