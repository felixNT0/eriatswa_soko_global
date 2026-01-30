"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for aesthetic changes
  if (typeof window !== "undefined") {
    window.onscroll = () => {
      setScrolled(window.scrollY > 50);
    };
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "Academy", href: "#academy" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
        scrolled ? "py-4 bg-background/80 backdrop-blur-2xl shadow-2xl border-b border-white/5" : "py-8 bg-transparent"
    }`}>
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 md:px-12">
        <Link href="/" className="z-50 relative group">
           <div className="flex flex-col leading-none">
             <h1 className="text-2xl md:text-3xl font-display font-black tracking-tighter uppercase text-foreground group-hover:text-primary transition-colors duration-500">
               Eriatswa
             </h1>
             <span className="text-[10px] font-sans font-bold tracking-[0.4em] block text-primary group-hover:text-foreground transition-colors duration-500">SOKO GLOBAL</span>
           </div>
        </Link>
        
        {/* Desktop Menu - High-End Boutique Layout */}
        <div className="hidden md:flex items-center gap-16">
            <div className="flex gap-10">
                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href} 
                        className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all relative group py-2"
                    >
                        <span className="relative z-10">{link.name}</span>
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500" />
                    </Link>
                ))}
            </div>
            
            <div className="flex items-center gap-8">
                <div className="h-4 w-px bg-border/20" />
                <ThemeToggle />
                {/* <Link href="/products" className="bg-primary hover:bg-white text-black text-[10px] font-bold uppercase tracking-widest px-8 py-3 rounded-full transition-all duration-500 hover:scale-105 active:scale-95 shadow-xl">
                    The Atelier
                </Link> */}
            </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-6 md:hidden z-50">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="w-12 h-12 rounded-full border border-border/10 flex items-center justify-center text-foreground hover:text-primary transition-all"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </div>
      </div>

       {/* Full Screen Menu - High-Fashion Aesthetic */}
       <AnimatePresence>
        {isOpen && (
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
               className="fixed inset-0 bg-background/98 backdrop-blur-3xl z-40 flex flex-col md:hidden pt-40 px-12 gap-12"
            >
                <div className="flex flex-col gap-10">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                        >
                            <Link 
                                href={link.href} 
                                onClick={() => setIsOpen(false)}
                                className="text-6xl font-display font-black text-foreground hover:text-primary transition-colors uppercase tracking-tighter leading-none"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                </div>
                
                <div className="mt-auto pb-20 space-y-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">Mastery Over Mass</p>
                    <div className="h-px w-full bg-linear-to-r from-primary/30 to-transparent" />
                    <div className="flex gap-8 text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
                        <span>Lagos</span>
                        <span>London</span>
                        <span>New York</span>
                    </div>
                </div>
            </motion.div>
        )}
       </AnimatePresence>
    </nav>
  );
};
