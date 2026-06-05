import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import FloatingEnvelope from "../components/common/FloatingEnvelope";
import { EnquiryProvider } from "../context/EnquiryContext";

export default function MainLayout({ children }) {
  return (
    <EnquiryProvider>
      <Navbar />
      {children}
      <Footer />
      <FloatingEnvelope />
    </EnquiryProvider>
  );
}