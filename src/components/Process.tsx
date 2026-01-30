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
        <section className="py-32 bg-background overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
                        <p className="text-primary font-bold tracking-widest uppercase text-[10px]">The Atelier</p>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-foreground tracking-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Process</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
                        From the initial spark of inspiration to the final polished product, our journey is one of dedication.
                    </p>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent -translate-y-1/2 z-0" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-background pt-8 md:pt-0 relative group"
                            >
                                <div className="w-12 h-12 bg-secondary text-primary font-bold flex items-center justify-center rounded-full border-4 border-background mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    {step.num}
                                </div>
                                <div className="text-center px-4">
                                    <h3 className="text-lg font-bold uppercase mb-2">{step.title}</h3>
                                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
