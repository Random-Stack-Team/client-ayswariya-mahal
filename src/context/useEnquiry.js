import { useContext } from "react";
import { EnquiryContext } from "./EnquiryContextValue";

export function useEnquiry() {
  return useContext(EnquiryContext);
}
