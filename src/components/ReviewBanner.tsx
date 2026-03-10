"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Star, Users } from "lucide-react";

export const ReviewBanner = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center justify-between gap-12 border border-border/50 bg-white/5 backdrop-blur-md rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
        >
          {/* Rating Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.1 * i,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  <Star className="w-6 h-6 fill-primary text-primary" />
                </motion.div>
              ))}
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2">
              Excellent 4.9/5
            </h3>
            <p className="text-stone-400 font-light tracking-wide italic">
              "The gold standard for African vocational excellence."
            </p>
          </div>

          {/* Stats Section */}
          <div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Users size={24} />
              </div>
              <span className="text-3xl font-display font-black text-foreground">
                500+
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                Graduates
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <CheckCircle size={24} />
              </div>
              <span className="text-3xl font-display font-black text-foreground">
                98%
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                Success Rate
              </span>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                <Award size={24} />
              </div>
              <span className="text-3xl font-display font-black text-foreground">
                15+
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
                Awards
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
