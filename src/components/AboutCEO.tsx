"use client";

import { motion } from "framer-motion";

export const AboutCEO = () => {
  // Assuming 'slides' and 'current' are defined elsewhere,
  // for the purpose of this edit, we'll assume they are available.
  // If not, this part of the code would need further context or definition.
  const slides = [
    {
      content: (
        <>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-[0.9] uppercase">
            Redefining <br/> <span className="text-outlined text-transparent text-stroke-white" style={{ WebkitTextStroke: "1px white" }}>African Luxury</span>
          </h2>
           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            "At Eriatswa Soko Global, we believe that true luxury lies in the story behind the stitch. Our mission is not just to create beautiful products, but to empower a new generation of artisans who will carry the torch of African craftsmanship to the world stage."
          </p>
          <a 
            href="/about-ceo" 
            className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-primary font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all duration-300"
          >
            Read Full Profile
          </a>
        </>
      )
    }
  ];
  const current = 0; // Placeholder for current slide index

  return (
    <section id="about" className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                {/* Image Placeholder - User needs to add real image */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative aspect-[3/4] bg-stone-900 overflow-hidden group"
                >
                   <div className="absolute inset-0 bg-[url('/ceo.jpeg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   
                   <div className="absolute bottom-8 left-8">
                       <p className="text-gold font-bold tracking-widest uppercase text-sm mb-2">Founder & Creative Director</p>
                       <h3 className="text-3xl font-display font-bold text-white">Tsowa <br/> Nnawonchiko Lucy</h3>
                   </div>
                </motion.div>

                <div className="relative z-10">
                    <h2 className="text-5xl md:text-7xl font-display font-black mb-8 leading-[0.9] uppercase">
                        Redefining <br/> <span className="text-outlined text-transparent text-stroke-white" style={{ WebkitTextStroke: "1px white" }}>African Luxury</span>
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                        "At Eriatswa Soko Global, we believe that true luxury lies in the story behind the stitch. Our mission is not just to create beautiful products, but to empower a new generation of artisans who will carry the torch of African craftsmanship to the world stage."
                    </p>
                     <a 
                        href="/about-ceo" 
                        className="inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-primary font-bold uppercase tracking-widest hover:text-white hover:border-white transition-all duration-300"
                    >
                        Read Full Profile
                    </a>
                </div>
            </div>
        </div>
    </section>
  );
};
