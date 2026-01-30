"use client";

import { motion } from "framer-motion";

const steps = [
    { num: "01", title: "Consultation", desc: "We listen to your vision and requirements." },
    { num: "02", title: "Sketching", desc: "Translating ideas into technical artistic drafts." },
    { num: "03", title: "Material Selection", desc: "Sourcing premium leathers and fabrics." },
    { num: "04", title: "Construction", desc: "Hand-cutting, stitching, and assembly." },
    { num: "05", title: "Quality Check", desc: "Rigorous inspection before delivery." },
];

export const Process = () => {
    return (
        <section className="py-20 bg-background relative overflow-hidden">
            {/* Modern Technical Background */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
                        <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">The Atelier Journey</p>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-10 text-foreground leading-[0.8] tracking-tighter">
                        Crafted With <br/> 
                        <span className="text-outlined">Devotion.</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-xl font-light">
                        From the initial spark of inspiration to the final polished product, our journey is a meticulous dance of technical mastery and heritage craftsmanship.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line - More Subtle & Modern */}
                    <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[1px] bg-linear-to-r from-transparent via-primary/20 to-transparent z-0" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 0.8 }}
                                className="relative group text-center"
                            >
                                <div className="w-20 h-20 bg-background shadow-2xl text-primary font-display font-black text-2xl flex items-center justify-center rounded-2.5xl border border-border/10 mx-auto mb-10 group-hover:bg-primary group-hover:text-black group-hover:shadow-primary/20 transition-all duration-[800ms] z-10 relative">
                                    {step.num}
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                                    <p className="text-sm text-stone-500 font-light leading-relaxed max-w-[200px] mx-auto opacity-70 group-hover:opacity-100 transition-opacity">{step.desc}</p>
                                </div>
                                <div className="mt-8 h-px w-0 bg-primary mx-auto group-hover:w-12 transition-all duration-700" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
