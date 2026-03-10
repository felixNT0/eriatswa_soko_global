"use client";

import { motion } from "framer-motion";
import { BedDouble, Footprints, ShoppingBag } from "lucide-react";

const products = [
  {
    id: 1,
    category: "Handcrafted Bags",
    description:
      "Stylish and durable. From traveling and tote bags to customized school and lunch bags. Every piece is handcrafted with excellence.",
    icon: <ShoppingBag size={32} className="text-foreground" />,
  },
  {
    id: 2,
    category: "Quality Footwear",
    description:
      "Comfortable and durable footwear for Men, Women, and Children, including high-quality leather and rubber footwear.",
    icon: <Footprints size={32} className="text-foreground" />,
  },
  {
    id: 3,
    category: "Bedding & Leather",
    description:
      "Luxury Bedding Collections for all bed sizes. Plus premium Bag Leather & Accessories for makers and creatives.",
    icon: <BedDouble size={32} className="text-foreground" />,
  },
];

export const ProductShowcase = () => {
  return (
    <section id="products" className="py-32 bg-background relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="space-y-4">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
              Our Collection
            </p>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground">
              Curated Excellence
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed text-sm md:text-base">
            Are you looking for quality products that combine style, durability,
            and affordability? Look no further! Eriatswa Soko Global has exactly
            what you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group p-10 bg-secondary/5 dark:bg-white/5 border border-transparent hover:border-primary/30 transition-all duration-500 hover:shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_10px_40px_-15px_rgba(255,215,0,0.05)]"
            >
              <div className="mb-8 p-4 bg-background inline-block rounded-full shadow-sm group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>

              <h3 className="text-xl font-serif mb-4 group-hover:text-primary transition-colors">
                {item.category}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-8">
                {item.description}
              </p>

              <span className="text-xs font-bold uppercase tracking-widest text-foreground pb-1 border-b border-muted group-hover:border-primary transition-all">
                View Catalog
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
