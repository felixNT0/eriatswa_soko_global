"use client";

import { motion, useInView, useSpring } from "framer-motion";
import React, { useEffect } from "react";



export const Stats = () => {
    return (
      <section className="py-20 border-y border-border/10 bg-background overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-around items-center gap-12">
              <StatItem value={500000} label="Products Delivered" suffix="+" />
              <StatItem value={100} label="Trained & Certified" suffix="+" />
          </div>
        </div>
      </section>
    );
};

const StatItem = ({ value, label, suffix }: { value: number, label: string, suffix: string }) => {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });
    
    // We use a spring for smooth counting
    const springValue = useSpring(0, {
        stiffness: 50,
        damping: 20,
        duration: 2.5
    });

    // Formatting effect
    const [displayValue, setDisplayValue] = React.useState("0");

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    useEffect(() => {
        const unsubscribe = springValue.on("change", (latest) => {
            if (value > 10000) {
                 // For large numbers like 500k, we want to format nicely (e.g. 500k)
                 // But user asked for count up TO the number. 
                 // Let's settle for simplified 'k' formatting or standard locale string if requested, 
                 // but typically 500k+ implies strict formatting.
                 // Let's do raw number format with locale for the count up visuals.
                 setDisplayValue(Math.floor(latest).toLocaleString() + suffix); 
                 
                 // If we strictly want "500k", we can conditionally format at the end, 
                 // but smooth counting looks best with numbers.
                 if (latest >= value) {
                     if (value >= 1000) {
                         setDisplayValue((value / 1000).toFixed(0) + "k" + suffix);
                     } else {
                         setDisplayValue(value.toString() + suffix);
                     }
                 } else {
                    setDisplayValue(Math.floor(latest).toLocaleString());
                 }
            } else {
                 setDisplayValue(Math.floor(latest).toFixed(0) + suffix);
            }
        });
        return () => unsubscribe();
    }, [springValue, value, suffix]);

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
        >
            <h3 className="text-6xl md:text-8xl font-display font-black text-foreground tabular-nums">
                {displayValue}
            </h3>
            <p className="text-primary font-bold uppercase tracking-[0.2em] text-sm mt-2">{label}</p>
        </motion.div>
    );
};
