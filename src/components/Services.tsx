"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const services = [
    {
        id: "01",
        title: "Bespoke Design",
        desc: "Custom commissions for individuals who value exclusivity.",
        tags: ["Handbags", "Footwear"]
    },
    {
        id: "02",
        title: "Corporate Orders",
        desc: "High-volume production for brands and events requiring premium quality.",
        tags: ["Souvenirs", "Gifting"]
    },
    {
        id: "03",
        title: "Training Academy",
        desc: "Hands-on apprenticeship for aspiring artisans. Learn the art of shoemaking and bag crafting.",
        tags: ["Education", "Certification"],
        highlight: true
    }
]

export const Services = () => {
  return (
    <section id="services" className="py-20 relative overflow-hidden">
        {/* Background Texture */}
      <div className="absolute inset-0 bg-[#0C0A09]" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/leather.png')] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-20">
             <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase mb-8">
                What We Do
            </h2>
            <div className="h-px w-full bg-linear-to-r from-white/20 to-transparent" />
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10">
            {services.map((service) => (
                <motion.div 
                    key={service.id}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className={`group relative bg-background p-8 md:p-16 flex flex-col md:flex-row gap-8 justify-between hover:bg-white/5 transition-colors duration-500 ${service.highlight ? 'border-l-4 border-primary' : ''}`}
                >
                    <div className="md:w-1/3">
                        <span className="text-sm font-bold text-primary mb-2 block tracking-widest">/{service.id}</span>
                        <h3 className="text-3xl md:text-5xl font-display font-bold uppercase">{service.title}</h3>
                    </div>
                    
                    <div className="md:w-1/3">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                        <div className="flex gap-2">
                            {service.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 border border-white/10 rounded-full text-xs uppercase tracking-widest">{tag}</span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:w-1/6 flex items-start justify-end">
                         <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                             <ArrowUpRight size={24} />
                         </div>
                    </div>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
