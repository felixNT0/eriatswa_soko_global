"use client";

import { ArrowRight, Mail } from "lucide-react";

export const Newsletter = () => {
    return (
        <section className="py-24 bg-primary text-secondary overflow-hidden relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                     <div className="max-w-xl">
                        <p className="text-secondary/70 font-bold tracking-widest uppercase text-xs mb-4">Stay Connected</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">Join The <br/> Inner Circle.</h2>
                        <p className="text-secondary/80 text-lg">
                            Be the first to know about new bespoke collections, academy enrollments, and exclusive artisan insights.
                        </p>
                     </div>

                     <div className="w-full max-w-md">
                        <form className="flex flex-col gap-4">
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary" size={20} />
                                <input 
                                    type="email" 
                                    placeholder="Enter your email address" 
                                    className="w-full bg-secondary text-primary px-12 py-4 rounded-none border border-secondary focus:outline-none focus:ring-2 focus:ring-white/50 placeholder:text-primary/50"
                                />
                            </div>
                            <button className="bg-white text-primary px-8 py-4 font-bold uppercase tracking-widest hover:bg-secondary hover:text-primary transition-colors flex items-center justify-center gap-2">
                                Subscribe <ArrowRight size={16} />
                            </button>
                        </form>
                     </div>
                </div>
            </div>
        </section>
    );
};
