"use client";

import { motion } from "framer-motion";
import { Instagram, Linkedin, Twitter } from "lucide-react";

const team = [
    {
        name: "Blessing Nnawonchiko Tsowa",
        role: "Managing Director / Co-founder",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=600&h=800",
        socials: { instagram: "#", linkedin: "#", twitter: "#" }
    },
    {
        name: "Felix Kolo Tsowa",
        role: "Co-founder",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?bg=262626&fit=crop&q=80&w=600&h=800",
        socials: { instagram: "#", linkedin: "#", twitter: "#" }
    },
    {
        name: "Mary Paul",
        role: "Chief Operating Officer",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600&h=800",
        socials: { instagram: "#", linkedin: "#", twitter: "#" }
    },
    {
        name: "Emmanuel Kolo Tsowa",
        role: "Head of Media",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=800",
        socials: { instagram: "#", linkedin: "#", twitter: "#" }
    },
    {
        name: "Paul Zhiri",
        role: "Strategic Adviser",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=600&h=800",
        socials: { instagram: "#", linkedin: "#", twitter: "#" }
    }
];

export const Team = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-border/10">
        {/* Luxury Texture Contrast */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div className="max-md:w-full max-md:text-center">
                     <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">The Collective</p>
                     <h2 className="text-5xl md:text-5xl font-display font-black uppercase tracking-tighter">Meet The <br className="hidden md:block" /> Team.</h2>
                </div>
                <p className="text-muted-foreground max-w-sm text-center md:text-left font-light leading-relaxed">
                    The strategic minds and creative hands driving Eriatswa Soko Global forward.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                {team.map((member, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group"
                    >
                        <div className="aspect-[3/4] overflow-hidden mb-6 bg-secondary relative rounded-2xl shadow-lg border border-border/10">
                            <div 
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-110 grayscale md:group-hover:grayscale-0"
                                style={{ backgroundImage: `url(${member.image})` }}
                            />
                            {/* Social Overlay - Visible on mobile by default, hover on desktop */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 gap-4">
                                <motion.a 
                                    href={member.socials.instagram} 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                                >
                                    <Instagram size={18} />
                                </motion.a>
                                <motion.a 
                                    href={member.socials.linkedin} 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                                >
                                    <Linkedin size={18} />
                                </motion.a>
                                <motion.a 
                                    href={member.socials.twitter} 
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                                >
                                    <Twitter size={18} />
                                </motion.a>
                            </div>
                        </div>
                        <div className="max-md:text-center px-2">
                            <h3 className="text-lg font-display font-bold uppercase leading-tight tracking-tight group-hover:text-primary transition-colors">{member.name}</h3>
                            <p className="text-[10px] text-primary uppercase tracking-widest mt-1 font-bold">{member.role}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};
