"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const categories = [
  {
    id: "bags",
    name: "Bespoke Bags",
    description: "Hand-stitched leather pieces designed for longevity and status.",
    items: [
      { name: "The 'Zaria' Tote", image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&q=80&w=800", tag: "Best Seller" },
      { name: "Executive Briefcase", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800", tag: "Corporate" },
      { name: "Gold-Trimmed Clutch", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800", tag: "Luxury" },
      { name: "Weekend Traveler", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800", tag: "Travel" },
      { name: "Artisan Crossbody", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", tag: "Essential" },
      { name: "Midnight Satchel", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800", tag: "Limited" }
    ]
  },
  {
    id: "footwear",
    name: "Bespoke Footwear",
    description: "Custom-fit shoes crafted using traditional techniques and modern flair.",
    items: [
      { name: "Onyx Loafers", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=800", tag: "Men" },
      { name: "Royal Mules", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800", tag: "Women" },
      { name: "Heritage Oxfords", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800", tag: "Premium" },
      { name: "Desert Chelsea", image: "https://images.unsplash.com/photo-1520639889313-7272a74b1c73?auto=format&fit=crop&q=80&w=800", tag: "Handmade" }
    ]
  },
  {
    id: "bedding",
    name: "Luxury Bedding",
    description: "Premium cotton and silk sets for the ultimate comfort experience.",
    items: [
      { name: "Silk Duvet Set (King)", image: "https://images.unsplash.com/photo-1522771753035-1a5b6562f3ba?auto=format&fit=crop&q=80&w=800", tag: "Home" },
      { name: "Atelier Cotton Set", image: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=800", tag: "Handcrafted" },
      { name: "Velvet Accent Pillows", image: "https://images.unsplash.com/photo-1584132867664-85b6e9a8057e?auto=format&fit=crop&q=80&w=800", tag: "Decor" }
    ]
  },
  {
    id: "gifting",
    name: "Corporate Gifting",
    description: "Memorable leather souvenirs for summits, weddings, and executive retreats.",
    items: [
      { name: "Custom Leather Journal", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", tag: "Souvenir" },
      { name: "Gold-Stamped Passport Holder", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800", tag: "Travel" },
      { name: "Executive Blotter Set", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800", tag: "Office" }
    ]
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-32 px-6 md:px-12 text-center bg-secondary/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
          <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
                 <p className="text-primary font-bold tracking-widest uppercase text-[10px]">The Catalog</p>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black uppercase mb-6 tracking-tighter">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Collection.</span>
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
                 Explore our curated catalog of handcrafted excellence. From bespoke leather pieces to luxury home essentials, each item is a testament to Nigerian craftsmanship.
              </p>
          </div>
      </section>

      {/* Categories sections */}
      <div className="space-y-32 pb-40">
        {categories.map((category) => (
          <section key={category.id} className="container mx-auto px-6 md:px-12">
            <div className="mb-16 border-b border-border/10 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4">{category.name}</h2>
                    <p className="text-muted-foreground font-light text-lg">{category.description}</p>
                </div>
                <div className="hidden md:block h-px flex-1 bg-linear-to-r from-border/10 to-transparent mx-12" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {category.items.map((product, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="group"
                    >
                        <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-secondary mb-6 relative">
                            <div 
                               className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                               style={{ backgroundImage: `url(${product.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-lg">
                                {product.tag}
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                                {product.name}
                            </h3>
                            <button className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground group-hover:underline underline-offset-4">
                                Inquire About Bespoke Order
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
          </section>
        ))}
      </div>

      <Footer />
    </main>
  );
}
