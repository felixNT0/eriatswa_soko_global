"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const heroImages = [
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=2000", // Bag
    "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=2000", // Craft
    "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80&w=2000"  // Tools
];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden bg-background">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
         <AnimatePresence mode="wait">
            <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImages[index]})` }}
            />
         </AnimatePresence>
         <div className="absolute inset-0 bg-background/90 md:bg-background/80 backdrop-blur-[1px]" />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex md:mt-10 flex-col md:flex-row max-md:items-end md:items-center gap-6 mb-8"
        >
             <div className="h-px w-12 bg-primary hidden md:block" />
             <p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
              Handcrafted With Excellence
            </p>
        </motion.div>
        
        <h1 className="font-display font-black text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tighter uppercase text-foreground mb-8 text-balance">
            Crafted <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">To Stand Out.</span>
        </h1>

        <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
            className="flex flex-col md:flex-row gap-8 mt-12 md:items-center justify-between border-t border-border/20 pt-8"
        >
            <p className="max-w-md text-lg text-muted-foreground leading-relaxed">
                Welcome to the new standard of African luxury. Bespoke handcrafted bags, premium footwear, and the academy building the future of craftsmanship.
            </p>
            
            <a href="/products" className="group flex items-center gap-4 px-8 py-4 bg-foreground text-background font-bold uppercase tracking-widest hover:bg-primary hover:text-foreground transition-all duration-300 rounded-full">
                Explore The Gallery <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </motion.div>
      </div>
    </section>
  );
};
