"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    name: "Mrs. Folake Adebayo",
    role: "CEO, L'Avyanna Interiors, Lagos",
    content: "I needed bespoke leather souvenirs for my daughter's wedding. Eriatswa Soko not only delivered on time, but the quality was miles ahead of what I usually import. Proudly Nigerian excellence."
  },
  {
    name: "Ibrahim Musa",
    role: "Lead Architect, Abuja",
    content: "The handcrafted briefcase I ordered is a masterpiece. It commands respect in every boardroom I enter. Seeing 'Made in Nigeria' with this level of finish is inspiring."
  },
  {
    name: "Chidinma Okafor",
    role: "Academy Graduate, Class of '24",
    content: "Before the academy, I was just sketching designs. Now, I run my own shoemaking business in Enugu. The physical training in Ilorin was intense but worth every Kobo."
  },
  {
    name: "Alhaji Yusuf Dankwambo",
    role: "Government Official, Kano",
    content: "We commissioned 200 leather jotters for a state summit. The precision, the branding, the packaging—everything shouted luxury. Eriatswa is a national treasure."
  },
  {
    name: "Tega Oghenekaro",
    role: "Fashion Blogger, Lagos",
    content: "I've reviewed luxury bags from Milan to New York. The 'Zaria' tote stands toe-to-toe with them. The leather texture is buttery soft, and the gold hardware is solid."
  },
  {
    name: "Biodun & Tiwa",
    role: "Couple, Wedding Souvenirs",
    content: "Our guests won't stop talking about the custom leather keyholders. Elegant, durable, and perfectly branded. Thank you Mrs. Lucy for making our day special."
  }
];

export const Testimonials = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-950 relative overflow-hidden">
        {/* Luxury Paper Texture */}
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
             <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8">
                <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">The Collective Voice</p>
             </div>
             <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-foreground tracking-tighter leading-none">
                Mastery <span className="text-outlined">Recognized.</span>
             </h2>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[300px] flex items-center justify-center">
            <AnimatePresence mode="wait">
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <div className="flex justify-center gap-1 text-primary mb-8">
                        {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={20} fill="currentColor" />)}
                    </div>
                    
                    <p className="text-2xl md:text-4xl font-display font-bold text-foreground leading-tight mb-10">
                        "{testimonials[index].content}"
                    </p>
                    
                    <div>
                        <h4 className="font-bold uppercase text-lg">{testimonials[index].name}</h4>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest mt-2">{testimonials[index].role}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
            
            <div className="absolute bottom-[-40px] flex gap-2">
                {testimonials.map((_, i) => (
                    <button 
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-primary" : "w-2 bg-border"}`}
                    />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
