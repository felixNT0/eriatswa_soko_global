"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center overflow-hidden hover:border-primary transition-colors"
    >
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: theme === "dark" ? 1 : 0, opacity: theme === "dark" ? 1 : 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 flex items-center justify-center"
        >
            <Moon className="h-[1.2rem] w-[1.2rem] text-primary" />
        </motion.div>
        
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: theme === "light" ? 1 : 0, opacity: theme === "light" ? 1 : 0 }}
            transition={{ duration: 0.2 }}
             className="absolute inset-0 flex items-center justify-center"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] text-primary" />
        </motion.div>
        <span className="sr-only">Toggle theme</span>
    </button>
  );
}
