"use client";

import { motion } from "framer-motion";

const team = [
    {
        name: "Blessing Nnawonchiko Tsowa",
        role: "Managing Director / Co-founder",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600&h=800"
    },
    {
        name: "Felix Kolo Tsowa",
        role: "Co-founder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=262626&fit=crop&q=80&w=600&h=800"
    },
    {
        name: "Mary Paul",
        role: "Chief Operating Officer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=800"
    },
    {
        name: "Emmanuel Kolo Tsowa",
        role: "Head of Media",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=800"
    },
    {
        name: "Paul Zhiri",
        role: "Strategic Adviser",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800"
    }
];

export const Team = () => {
  return (
    <section className="py-32 bg-linear-to-b from-background to-secondary/10 border-t border-border/10 relative">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                     <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">The Collective</p>
                     <h2 className="text-4xl md:text-5xl font-display font-bold uppercase">Meet The <br/> Team.</h2>
                </div>
                <p className="text-muted-foreground max-w-sm text-right md:text-left">
                    The strategic minds and creative hands driving Eriatswa Soko Global forward.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {team.map((member, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="group"
                    >
                        <div className="aspect-[3/4] overflow-hidden mb-6 bg-secondary relative rounded-lg">
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${member.image})` }}
                            />
                        </div>
                        <h3 className="text-sm font-display font-bold uppercase leading-tight">{member.name}</h3>
                        <p className="text-[10px] text-primary uppercase tracking-widest mt-1 font-bold">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};
