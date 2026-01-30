"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Collection", href: "/products" },
    { name: "Academy", href: "#academy" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-6 px-6 md:px-12 backdrop-blur-xl bg-background/70 border-b border-foreground/5 transition-all duration-300 supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1920px] mx-auto flex justify-between items-center relative">
        <Link href="/" className="z-50 relative group">
           <div className="flex flex-col leading-none">
             <h1 className="text-2xl md:text-3xl font-display font-black tracking-tighter uppercase text-foreground group-hover:text-primary transition-colors">
               Eriatswa
             </h1>
             <span className="text-[10px] font-sans font-bold tracking-[0.4em] block text-primary group-hover:text-foreground transition-colors">SOKO GLOBAL</span>
           </div>
        </Link>
        
        {/* Desktop Menu - Standard Professional Layout */}
        <div className="hidden md:flex items-center gap-12">
            <div className="flex gap-8">
                {navLinks.map((link) => (
                    <Link key={link.name} href={link.href} className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group py-2">
                        {link.name}
                        <span className="absolute bottom-0 left-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                ))}
            </div>
            
            <div className="h-6 w-px bg-border" />
            
            <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden z-50">
            <ThemeToggle />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
        </div>
      </div>

       {/* Full Screen Menu */}
       <AnimatePresence>
        {isOpen && (
            <motion.div 
               initial={{ opacity: 0, y: -20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3 }}
               className="fixed inset-0 top-[88px] bg-background border-t border-border/10 z-40 flex flex-col md:hidden p-6 gap-6"
            >
                {navLinks.map((link) => (
                    <Link 
                       key={link.name} 
                       href={link.href} 
                       onClick={() => setIsOpen(false)}
                       className="text-3xl font-display font-black text-foreground hover:text-primary transition-colors uppercase border-b border-border/10 pb-4"
                    >
                        {link.name}
                    </Link>
                ))}
            </motion.div>
        )}
       </AnimatePresence>
    </nav>
  );
};
