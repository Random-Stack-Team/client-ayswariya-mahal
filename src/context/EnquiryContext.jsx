import { useState } from "react";
import { EnquiryContext } from "./EnquiryContextValue";

export function EnquiryProvider({ children }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

  return (
    <EnquiryContext.Provider value={{ isFormOpen, openForm, closeForm }}>
      {children}
    </EnquiryContext.Provider>
  );
}
