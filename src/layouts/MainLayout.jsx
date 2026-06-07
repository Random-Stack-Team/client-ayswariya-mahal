import Navbar from "../components/common/Navbar";
import FloatingEnvelope from "../components/common/FloatingEnvelope";
import { EnquiryProvider } from "../context/EnquiryContext";

export default function MainLayout({ children }) {
  return (
    <EnquiryProvider>
      <Navbar />
      {children}
      <FloatingEnvelope />
    </EnquiryProvider>
  );
}