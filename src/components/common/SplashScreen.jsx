import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen({ onComplete }) {
  const [stage, setStage] = useState("draw"); // draw -> fill -> text -> exit

  useEffect(() => {
    // Sequence timing
    const timers = [
      setTimeout(() => setStage("fill"), 2500), // Draw takes 2.5s
      setTimeout(() => setStage("text"), 3500), // Fill takes 1s
      setTimeout(() => setStage("exit"), 6500), // Hold text for 3s
      setTimeout(() => onComplete(), 7500)      // Exit fade takes 1s
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  // Lotus SVG path animation
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    draw: { 
      pathLength: 1, 
      opacity: 1, 
      transition: { duration: 2, ease: "easeInOut" } 
    }
  };

  const fillVariants = {
    draw: { fill: "rgba(229, 199, 107, 0)", stroke: "#b59b54" }, // var(--color-gold-leaf) outline
    fill: { 
      fill: "rgba(229, 199, 107, 1)", // gold fill
      stroke: "rgba(229, 199, 107, 0)", 
      transition: { duration: 1, ease: "easeIn" } 
    },
    text: { 
      fill: "rgba(229, 199, 107, 1)", 
      stroke: "rgba(229, 199, 107, 0)" 
    },
    exit: { 
      fill: "rgba(229, 199, 107, 1)", 
      stroke: "rgba(229, 199, 107, 0)" 
    }
  };

  return (
    <AnimatePresence>
      {stage !== "exit" && (
        <motion.div 
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-surface-warm flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Logo Container */}
          <motion.div 
            className="flex flex-col items-center justify-center"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Elegant Lotus SVG */}
            <motion.svg 
              viewBox="0 0 200 200" 
              className="w-32 h-32 md:w-40 md:h-40 mb-8 drop-shadow-lg"
              initial="hidden"
              animate={stage}
            >
              {/* Left Petal */}
              <motion.path 
                d="M100 160C100 160 40 150 20 110C0 70 50 60 50 60C50 60 70 100 100 160Z" 
                strokeWidth="2"
                variants={pathVariants}
              />
              <motion.path 
                d="M100 160C100 160 40 150 20 110C0 70 50 60 50 60C50 60 70 100 100 160Z" 
                strokeWidth="0"
                variants={fillVariants}
              />
              
              {/* Right Petal */}
              <motion.path 
                d="M100 160C100 160 160 150 180 110C200 70 150 60 150 60C150 60 130 100 100 160Z" 
                strokeWidth="2"
                variants={pathVariants}
              />
              <motion.path 
                d="M100 160C100 160 160 150 180 110C200 70 150 60 150 60C150 60 130 100 100 160Z" 
                strokeWidth="0"
                variants={fillVariants}
              />

              {/* Center Petal (drawn last for depth) */}
              <motion.path 
                d="M100 20C100 20 60 70 60 120C60 142.091 77.9086 160 100 160C122.091 160 140 142.091 140 120C140 70 100 20 100 20Z" 
                strokeWidth="2"
                variants={pathVariants}
              />
              <motion.path 
                d="M100 20C100 20 60 70 60 120C60 142.091 77.9086 160 100 160C122.091 160 140 142.091 140 120C140 70 100 20 100 20Z" 
                strokeWidth="0"
                variants={fillVariants}
              />
            </motion.svg>

            {/* Typography Reveal */}
            <div className="flex flex-col items-center h-[100px]">
              <AnimatePresence>
                {(stage === "text" || stage === "exit") && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center"
                  >
                    <h1 className="font-display text-4xl md:text-5xl text-primary mb-3 tracking-widest uppercase">
                      Ayswariya Mahal
                    </h1>
                    <p className="font-body text-sm md:text-base text-on-surface-muted tracking-[0.2em] uppercase">
                      Where Royal Beginnings Unfold
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
