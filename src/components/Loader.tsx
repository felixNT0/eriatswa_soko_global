"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [isMounted, setIsMounted] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load or wait for resources
    const timer = setTimeout(() => {
        setIsLoading(false); // Start exit animation
    }, 2500); // 2.5s display time

    const cleanupTimestamp = setTimeout(() => {
        setIsMounted(false); // Remove from DOM after animation
    }, 4000); // Allow time for exit animation

    return () => {
        clearTimeout(timer);
        clearTimeout(cleanupTimestamp);
    };
  }, []);

  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
           key="loader"
           initial={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.5, delay: 0.5 }} // Fade out content before split
           className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
             {/* Brand Logo/Icon Animation */}
             <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                 <img src="/icon.svg" alt="Eriatswa Soko Logo" className="w-full h-full object-contain" />
             </div>
             
             <h1 className="text-2xl font-display font-light uppercase tracking-[0.3em] text-primary">
                Eriatswa Soko
             </h1>
             <p className="text-[10px] font-bold uppercase tracking-[0.5em] mt-2 opacity-50">Global</p>
          </motion.div>
        </motion.div>
      ) : (
        <>
            {/* Top Half */}
            <motion.div
              className="fixed top-0 left-0 right-0 z-[9999] h-[50vh] bg-background border-b border-primary/20"
              initial={{ y: 0 }}
              animate={{ y: "-100%" }}
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            />

            {/* Bottom Half */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-[9999] h-[50vh] bg-background border-t border-primary/20"
              initial={{ y: 0 }}
              animate={{ y: "100%" }}
              transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
            />
        </>
      )}
    </AnimatePresence>
  );
};
