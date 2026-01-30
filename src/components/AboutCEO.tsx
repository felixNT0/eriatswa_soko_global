"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AboutCEO = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-border/50 to-transparent" />
        
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
                {/* Museum Grade Founder Frame */}
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                   <div className="aspect-[4/5] relative z-10 overflow-hidden rounded-3xl shadow-3xl group">
                       <div className="absolute inset-0 bg-[url('/ceo.jpeg')] bg-cover bg-top scale-105 group-hover:scale-110 transition-transform duration-[2000ms] ease-out" />
                       <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80" />
                       
                       <div className="absolute bottom-12 left-12 right-12">
                           <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4">The Visionary Founder</p>
                           <h3 className="text-4xl md:text-5xl font-display font-black text-white uppercase leading-[0.8] tracking-tighter">
                               Tsowa <br/> Nnawonchiko Lucy.
                           </h3>
                       </div>
                   </div>
                   
                   {/* Decorative Frame Elements */}
                   <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-primary/20 rounded-tr-3xl pointer-events-none" />
                   <div className="absolute -bottom-6 -left-6 w-48 h-48 border-b-2 border-l-2 border-primary/20 rounded-bl-3xl pointer-events-none" />
                </motion.div>

                <div className="relative z-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-10">
                        <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">A Legacy In Every Stitch</span>
                    </div>
                    
                    <h2 className="text-6xl md:text-8xl font-display font-black mb-10 leading-[0.8] uppercase tracking-tighter">
                        Redefining <br/> 
                        <span className="text-outlined">African Luxury.</span>
                    </h2>
                    
                    <div className="space-y-8">
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light">
                            "At Eriatswa Soko Global, we believe that true luxury lies in the story behind the stitch. Our mission is to empower a generation of artisans who see their hands as tools of global influence."
                        </p>
                        
                        <div className="h-px w-full bg-linear-to-r from-border to-transparent" />
                        
                        <p className="text-stone-500 font-light leading-relaxed">
                            Founded by Mrs. Lucy Tsowa, ESG is more than a brand—it's a movement to elevate heritage craftsmanship to the world stage.
                        </p>
                    </div>

                    <div className="mt-16">
                        <a 
                            href="/about-ceo" 
                            className="group relative inline-flex items-center gap-6 text-primary font-bold uppercase tracking-[0.3em] text-[10px]"
                        >
                            <span className="relative z-10">Read Full Biography</span>
                            <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-500 overflow-hidden">
                                <ArrowRight size={16} className="group-hover:translate-x-12 transition-transform duration-500" />
                                <ArrowRight size={16} className="-translate-x-12 absolute group-hover:translate-x-0 transition-transform duration-500" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
