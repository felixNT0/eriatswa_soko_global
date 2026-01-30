"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Laptop, MapPin } from "lucide-react";

export const Academy = () => {
  return (
    <section id="academy" className="py-24 relative overflow-hidden bg-[#F5F5F0] dark:bg-background transition-colors duration-500">
       {/* Background */}
       <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605218427368-439492e6205e?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-fixed bg-center opacity-5 dark:opacity-10" />
       <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background dark:via-background/95 opacity-90" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
                <p className="text-primary font-bold tracking-widest uppercase text-[10px]">The Academy</p>
             </div>
             <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-foreground tracking-tight">
                Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">The Craft.</span>
             </h2>
             <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
                Whether you are in Nigeria or abroad, our curriculum is designed to transform you into a master artisan. Choose your path to excellence.
             </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Physical Mode */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 p-10 md:p-12 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                    <MapPin size={180} />
                </div>
                
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-yellow-600 rounded-2xl flex items-center justify-center text-black mb-8 shadow-lg shadow-primary/20 rotate-3 group-hover:rotate-0 transition-transform duration-500">
                        <MapPin size={32} />
                    </div>
                    <h3 className="text-4xl font-display font-bold uppercase mb-2 text-foreground">Physical <br/> Training</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-8 px-3 py-1 bg-primary/10 inline-block rounded">Lagos & Ilorin</p>
                    
                    <ul className="space-y-5 mb-12">
                        {["Hands-on Guidance", "Material Sourcing Trips", "Industrial Machine Access", "Physical Certification"].map((item) => (
                            <li key={item} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-primary" />
                                </div>
                                <span className="text-base text-foreground/80 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <a href="#contact" className="w-full inline-flex items-center justify-center gap-3 bg-foreground text-background py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary hover:text-foreground transition-all duration-300">
                        Enroll Now <ArrowRight size={18} />
                    </a>
                </div>
            </motion.div>

            {/* Online Mode */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative bg-gradient-to-br from-stone-100/50 to-white/20 dark:from-stone-900/50 dark:to-black/20 backdrop-blur-xl border border-white/20 dark:border-white/10 p-10 md:p-12 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 p-8 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                    <Laptop size={180} />
                </div>
                
                <div className="relative z-10">
                    <div className="w-16 h-16 bg-white dark:bg-stone-800 rounded-2xl flex items-center justify-center text-foreground mb-8 shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-500">
                         <Laptop size={32} />
                    </div>
                    <h3 className="text-4xl font-display font-bold uppercase mb-2">Online <br/> Program</h3>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-8 px-3 py-1 bg-secondary inline-block rounded">Global Access</p>
                    
                    <ul className="space-y-5 mb-12">
                        {["Live Virtual Classes", "Downloadable Patterns", "Community Mentorship", "Digital Certification"].map((item) => (
                            <li key={item} className="flex items-center gap-4">
                                <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                                    <Check size={12} className="text-foreground" />
                                </div>
                                <span className="text-base text-foreground/80 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <a href="#contact" className="w-full inline-flex items-center justify-center gap-3 border border-foreground/20 text-foreground py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300">
                        Start Learning <ArrowRight size={18} />
                    </a>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};
