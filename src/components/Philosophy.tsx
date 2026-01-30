"use client";

import { motion } from "framer-motion";
import { Gem, Hammer, Lightbulb } from "lucide-react";

const principles = [
    {
        icon: <Lightbulb size={32} />,
        title: "Innovation",
        desc: "Merging traditional African artistry with contemporary global aesthetics."
    },
    {
        icon: <Hammer size={32} />,
        title: "Craftsmanship",
        desc: "Every stitch is intentional. We reject mass production in favor of mastery."
    },
    {
        icon: <Gem size={32} />,
        title: "Excellence",
        desc: "Only the finest materials touch our worktables. Quality is our signature."
    }
];

export const Philosophy = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Sophisticated Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')] pointer-events-none" />
      <div className="absolute -bottom-1/2 -left-1/4 w-full h-full bg-primary/5 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col lg:flex-row gap-24 items-start">
                <div className="lg:w-2/5 sticky top-32">
                    <div className="inline-block px-4 py-1 border border-primary/30 rounded-full mb-8">
                        <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">The ESG Creed</p>
                    </div>
                    <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-10 leading-[0.8] tracking-tighter">
                        Why We <br/> 
                        <span className="text-outlined">Create.</span>
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-xl font-light max-w-md">
                        Eriatswa Soko Global stands as a beacon of authenticity in a world of fast fashion. We believe in the power of the human hand to create objects of lasting soul and beauty.
                    </p>
                    
                    <div className="mt-12 flex items-center gap-6">
                        <div className="h-px w-12 bg-primary" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Mastery Over Mass</span>
                    </div>
                </div>
                
                <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-px bg-border/20 border border-border/10 shadow-3xl">
                    {principles.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="bg-background p-12 hover:bg-secondary/10 transition-all duration-500 group"
                        >
                            <div className="mb-10 text-primary opacity-40 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-2xl font-display font-bold uppercase mb-6 tracking-tight group-hover:text-primary transition-colors">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed font-light">{item.desc}</p>
                            
                            <div className="mt-10 h-0.5 w-0 bg-primary group-hover:w-16 transition-all duration-700" />
                        </motion.div>
                    ))}
                    
                    {/* Artistic Placeholder Card to complete the grid if odd number */}
                    <div className="hidden md:flex bg-secondary/5 p-12 items-center justify-center border-l border-border/10 grayscale opacity-20">
                         <span className="text-8xl font-display font-black">ESG</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
