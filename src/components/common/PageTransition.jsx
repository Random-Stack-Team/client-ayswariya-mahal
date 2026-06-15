import { motion } from "framer-motion";

export default function PageTransition({ children, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      className={`w-full h-full ${className}`}
    >
      {children}
    </motion.div>
  );
}
