import { motion } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function PageTransition({ children, className = "" }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");
  const duration = isDesktop ? 0.65 : isTablet ? 0.35 : 0.25;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
