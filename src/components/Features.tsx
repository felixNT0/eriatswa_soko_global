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
    <section className="py-20 bg-background relative border-t border-border/10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((f, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-secondary/20 p-8 border border-border/10 hover:border-primary/30 transition-colors group"
                    >
                        <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center mb-6 rounded-full group-hover:scale-110 transition-transform">
                            {f.icon}
                        </div>
                        <h3 className="text-xl font-display font-bold uppercase mb-3 text-foreground">{f.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};
