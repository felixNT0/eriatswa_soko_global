"use client";

import { motion } from "framer-motion";
import { Award, Gem, Scissors, Truck } from "lucide-react";

const features = [
    {
        icon: <Scissors size={32} />,
        title: "Bespoke Craftsmanship",
        desc: "Every item is handmade with precision, tailored specifically to your taste and needs."
    },
    {
        icon: <Gem size={32} />,
        title: "Premium Materials",
        desc: "We source only the finest authentic leather and fabrics to ensure durability and elegance."
    },
    {
        icon: <Award size={32} />,
        title: "Certified Excellence",
        desc: "Founded by a government-appointed council member, ensuring the highest industry standards."
    },
    {
        icon: <Truck size={32} />,
        title: "Global Logistics",
        desc: "Whether you are in Nigeria or any other country, our trusted partners deliver your luxury securely."
    }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-border/10">
        {/* Modern Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,40,0.05),transparent_70%)]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/10 border border-border/10 overflow-hidden shadow-2xl">
                {features.map((f, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="bg-background p-10 md:p-12 hover:bg-secondary/30 transition-all duration-500 group relative"
                    >
                        <div className="relative z-10">
                            <div className="w-12 h-12 text-primary flex items-start justify-start mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                {f.icon}
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-[0.2em] mb-4 text-foreground group-hover:text-primary transition-colors">{f.title}</h3>
                            <p className="text-muted-foreground text-xs leading-relaxed font-light">{f.desc}</p>
                        </div>
                        
                        {/* Interactive Border Accent */}
                        <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700 ease-in-out" />
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};
