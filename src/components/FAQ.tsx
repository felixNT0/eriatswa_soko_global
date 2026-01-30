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
    <section className="py-20 bg-background relative overflow-hidden">
        {/* Subtle Technical Pattern */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="mb-20">
                <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
                    <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Private Concierge / FAQ</p>
                </div>
                <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-10 text-foreground leading-[0.8] tracking-tighter">
                    Essential <br/> 
                    <span className="text-outlined">Inquiries.</span>
                </h2>
                <div className="h-px w-32 bg-primary opacity-30" />
            </div>

            <div className="max-w-5xl grid gap-6">
                {faqs.map((item, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className={`group border-b border-border/10 transition-all duration-700 ${
                            active === i ? "pb-12" : "pb-8"
                        }`}
                    >
                        <button 
                            onClick={() => setActive(active === i ? null : i)}
                            className="w-full flex justify-between items-center text-left py-4"
                        >
                            <span className={`text-2xl md:text-3xl font-display font-bold uppercase transition-all duration-500 tracking-tight ${
                                active === i ? "text-primary" : "text-foreground group-hover:text-primary group-hover:pl-4"
                            }`}>
                                {item.q}
                            </span>
                            <div className={`w-12 h-12 rounded-full border border-border/10 flex items-center justify-center transition-all duration-500 ${
                                active === i ? "rotate-45 bg-primary border-primary text-black" : "rotate-0 text-primary group-hover:border-primary/50"
                            }`}>
                                <Plus size={20} />
                            </div>
                        </button>
                        
                        <AnimatePresence>
                            {active === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pt-8 max-w-3xl">
                                        <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-light">
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
