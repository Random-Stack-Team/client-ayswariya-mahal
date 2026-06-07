import { createContext, useContext, useState } from "react";

const EnquiryContext = createContext();

export const useEnquiry = () => useContext(EnquiryContext);

export const EnquiryProvider = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <EnquiryContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </EnquiryContext.Provider>
  );
};
