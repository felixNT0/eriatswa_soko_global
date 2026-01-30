"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export const GlobalDelivery = () => {
  return (
    <section className="py-20 bg-stone-950 relative overflow-hidden">
        {/* Cinematic Deep Global Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-linear-to-b from-stone-950 via-transparent to-stone-950" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[160px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 border border-primary/20 rounded-full px-6 py-2 mb-10 bg-primary/5 backdrop-blur-xl"
            >
                <Globe size={14} className="text-primary animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">Global Reach Logistics</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-9xl font-display font-black uppercase mb-10 max-w-5xl mx-auto leading-[0.8] tracking-tighter text-white">
                BEYOND <br/> <span className="text-outlined">BORDERS.</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto mb-16 text-stone-400 leading-relaxed">
                From our atelier in Ilorin to the global fashion capitals. We deliver the essence of Nigerian excellence to doorstep across Nigeria, Europe, and America with white-glove precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                 <a href="tel:07035467338" className="group relative bg-primary text-black px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:scale-105 transition-all duration-500 shadow-2xl overflow-hidden">
                    <span className="relative z-10">Call To Order</span>
                </a>
                <a href="https://wa.me/2347035467338" className="group relative border border-white/20 text-white px-12 py-6 rounded-full font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-white hover:text-black transition-all duration-500 shadow-xl overflow-hidden">
                    <span className="relative z-10">WhatsApp Concierge</span>
                </a>
            </div>
      </div>
    </section>
  );
};
