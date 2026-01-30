"use client";

import { ArrowRight, Mail } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="py-32 bg-background relative overflow-hidden border-y border-border/10">
            {/* Artistic Swirl/Pattern Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(197,160,40,0.05),transparent_60%)]" />
            
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="max-w-6xl mx-auto glass-dark p-12 md:p-24 rounded-[3rem] border border-white/10 relative overflow-hidden bg-stone-950/80 shadow-3xl">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                         <div className="max-w-xl text-center lg:text-left">
                            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
                                <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">The Private List</p>
                            </div>
                            <h2 className="text-5xl md:text-7xl font-display font-black uppercase text-white mb-8 leading-[0.85] tracking-tighter">
                                Join The <br className="hidden md:block" /> <span className="text-outlined">Inner Circle.</span>
                            </h2>
                            <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed">
                                Curated insights from our atelier, exclusive early access to bespoke collections, and the soulful stories behind our craftsmanship.
                            </p>
                         </div>
    
                         <div className="w-full max-w-md">
                            <form className="flex flex-col sm:flex-row gap-4">
                                <div className="relative flex-1">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-primary opacity-50" size={20} />
                                    <input 
                                        type="email" 
                                        placeholder="Email Address" 
                                        className="w-full bg-stone-900/50 text-white px-14 py-6 rounded-full border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-stone-600 transition-all font-light"
                                    />
                                </div>
                                <button className="bg-primary text-black px-10 py-6 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:scale-105 transition-all duration-500 flex items-center justify-center gap-3 shadow-xl">
                                    Join <ArrowRight size={20} />
                                </button>
                            </form>
                            <p className="text-[10px] text-stone-500 uppercase tracking-widest mt-6 text-center lg:text-left opacity-60">
                                Exceptional Craftsmanship, Delivered To Your Inbox.
                            </p>
                         </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
