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
    <section className="py-20 bg-linear-to-b from-background to-secondary/10 relative">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#C5A028_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="flex flex-col md:flex-row gap-16">
                <div className="md:w-1/3">
                    <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">Our Philosophy</p>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-6">Why We <br/> Create.</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        Eriatswa Soko Global stands as a beacon of authenticity in a world of fast fashion. We believe in the power of the human hand to create objects of lasting soul and beauty.
                    </p>
                </div>
                
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {principles.map((item, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-background p-8 border border-border/10 hover:border-primary/50 transition-colors group"
                        >
                            <div className="mb-6 text-foreground group-hover:text-primary transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-display font-bold mb-4">{item.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};
