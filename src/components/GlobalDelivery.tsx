"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const GlobalDelivery = () => {
  return (
    <section className="py-20 bg-primary text-secondary overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply opacity-20" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 border border-secondary/20 rounded-full px-6 py-2 mb-8 bg-secondary/10 backdrop-blur-md"
            >
                <Globe size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">Global Reach</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase mb-6 max-w-4xl mx-auto leading-[0.9]">
                Delivery All Over <br/> Nigeria & The World.
            </h2>
            <p className="text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 opacity-80">
                From Ilorin and Lagos to your doorstep anywhere in Nigeria. We also have a proven track record of delivering to clients across Europe and America.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
                 <a href="tel:07035467338" className="inline-block bg-secondary text-primary px-10 py-4 font-bold uppercase tracking-widest hover:bg-white transition-colors">
                    Call To Order
                </a>
                <a href="https://wa.me/2347035467338" className="inline-block border border-secondary text-secondary px-10 py-4 font-bold uppercase tracking-widest hover:bg-secondary/10 transition-colors">
                    WhatsApp Us
                </a>
            </div>
      </div>
    </section>
  );
};
