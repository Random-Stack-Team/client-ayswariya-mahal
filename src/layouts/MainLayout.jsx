import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import EnquiryModal from "../components/common/EnquiryModal";
import { EnquiryProvider } from "../context/EnquiryContext";

export default function MainLayout({ children }) {
  return (
    <EnquiryProvider>
      <Navbar />
      {children}
      <Footer />
      <EnquiryModal />
    </EnquiryProvider>
  );
}