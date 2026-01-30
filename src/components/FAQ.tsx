"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "Do you ship internationally?",
        a: "Yes. Eriatswa Soko Global delivers worldwide. We work with trusted logistics partners to ensure your luxury items arrive safely, whether you are in London, New York, or Dubai."
    },
    {
        q: "How long does a bespoke order take?",
        a: "Calculated perfection takes time. Typically, a custom bag takes 2-3 weeks from consultation to delivery, depending on the complexity and material sourcing."
    },
    {
        q: "Can I enroll in the academy with no prior experience?",
        a: "Absolutely. Our curriculum is designed to take you from novice to certified artisan. We start with the fundamentals of leather crafting."
    },
    {
        q: "Do you accept bulk corporate orders?",
        a: "Yes. We specialize in high-end corporate gifting and souvenirs. We can emboss your company logo and customize colors to match your brand identity."
    },
    {
        q: "What is the difference between Online and Physical training?",
        a: "Physical training happens in our Lagos atelier with hands-on machine access. Online training offers flexibility with pre-recorded high-definition modules and virtual mentorship."
    },
    {
        q: "Is there a certificate upon completion?",
        a: "Yes. All students who successfully complete their project assessments receive a recognized certificate from the Eriatswa Soko Academy."
    }
];

export const FAQ = () => {
  const [active, setActive] = useState<number | null>(0);

  return (
    <section className="py-24 bg-secondary/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-20">
                <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
                    <p className="text-primary font-bold tracking-widest uppercase text-[10px]">Inquiries</p>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-foreground tracking-tight">
                    Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Questions.</span>
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg md:text-xl font-light">
                    Everything you need to know about our products, global shipping, and training academy.
                </p>
            </div>

            <div className="max-w-4xl mx-auto grid gap-4">
                {faqs.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`group rounded-2xl border transition-all duration-300 ${
                            active === i 
                            ? "bg-white dark:bg-white/5 border-primary shadow-xl shadow-primary/5" 
                            : "bg-white/40 dark:bg-stone-900/40 border-border/10 hover:border-border/30"
                        }`}
                    >
                        <button 
                            onClick={() => setActive(active === i ? null : i)}
                            className="w-full flex justify-between items-center text-left p-6 md:p-8"
                        >
                            <span className={`text-lg md:text-xl font-display font-bold uppercase transition-colors duration-300 ${
                                active === i ? "text-primary" : "text-foreground group-hover:text-primary"
                            }`}>
                                {item.q}
                            </span>
                            <div className={`w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center transition-transform duration-500 ${
                                active === i ? "rotate-45 bg-primary text-black" : "rotate-0 text-primary"
                            }`}>
                                <Plus size={18} />
                            </div>
                        </button>
                        
                        <AnimatePresence>
                            {active === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 md:px-8 pb-8">
                                        <div className="h-px w-full bg-border/10 mb-6" />
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">
                                            {item.a}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};
