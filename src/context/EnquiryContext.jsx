import { createContext, useContext, useState } from "react";

const EnquiryContext = createContext();

export const useEnquiry = () => useContext(EnquiryContext);

export const EnquiryProvider = ({ children }) => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const openEnquiry = () => setIsEnquiryOpen(true);
  const closeEnquiry = () => setIsEnquiryOpen(false);

  return (
    <EnquiryContext.Provider value={{ isEnquiryOpen, openEnquiry, closeEnquiry }}>
      {children}
    </EnquiryContext.Provider>
  );
};
