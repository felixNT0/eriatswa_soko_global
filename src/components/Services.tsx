"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Handmade Bags",
        desc: "Handbags, fashion bags, crossbody bags, travel bags, souvenir bags, and any custom bag you can imagine. We’ve got you covered.",
        tags: ["Bespoke", "Cultural"]
    },
    {
        id: "02",
        title: "Quality Footwear",
        desc: "Precision-crafted palm slippers, elegant heels, kids' footwear, and specialized rubber footwear for durability and style.",
        tags: ["Palm Slippers", "Heels"]
    },
    {
        id: "03",
        title: "Premium Bedding",
        desc: "Neatly finished bedding sets including duvets, throw pillows, bedspreads, and pillowcases for the ultimate sanctuary.",
        tags: ["Artisan", "Home"],
        highlight: true
    }
]

export const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[#0a0a09]">
        {/* Modern Mesh Gradient & Texture */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 -left-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,40,0.1),transparent_70%)]" />
            <div className="absolute -bottom-1/2 -right-1/4 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(168,162,158,0.05),transparent_70%)]" />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
        </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20 max-w-4xl">
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-8"
             >
                 <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Atelier Services</p>
             </motion.div>
             <h2 className="text-6xl md:text-8xl font-display font-black text-white uppercase leading-[0.8] tracking-tighter mb-10">
                The <span className="text-outlined">Signature</span> <br/>
                <span className="text-primary">Eriatswa.</span>
            </h2>
            <div className="h-px w-32 bg-primary/50" />
        </div>

        <div className="grid gap-px bg-white/5 border border-white/5 shadow-2xl">
            {services.map((service) => (
                <motion.div 
                    key={service.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className={`group relative bg-[#0C0A09] p-10 md:p-20 flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between hover:bg-white/[0.02] transition-all duration-700 ${service.highlight ? 'border-l-4 border-primary' : ''}`}
                >
                    <div className="lg:w-2/5">
                        <span className="text-xs font-bold text-primary mb-4 block tracking-[0.4em] uppercase opacity-60">/{service.id}</span>
                        <h3 className="text-4xl md:text-6xl font-display font-bold uppercase text-white leading-tight tracking-tight group-hover:translate-x-2 transition-transform duration-500">{service.title}</h3>
                    </div>
                    
                    <div className="lg:w-2/5">
                        <p className="text-lg text-stone-400 font-light leading-relaxed mb-8 max-w-md">{service.desc}</p>
                        <div className="flex flex-wrap gap-3">
                            {service.tags.map(tag => (
                                <span key={tag} className="px-4 py-1.5 border border-white/10 rounded-full text-[10px] text-white/50 uppercase tracking-[0.2em] group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="hidden lg:flex lg:w-1/6 items-center justify-end">
                         <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-black transition-all duration-500 hover:rotate-45">
                             <ArrowUpRight size={32} />
                         </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
