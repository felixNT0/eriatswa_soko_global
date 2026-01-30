"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

const categories = [
  {
    id: "bags",
    name: "Handmade Bags",
    description: "Architectural silhouettes crafted in premium leather and exotic textures. Our signature bags are designed to be heirloom pieces.",
    items: [
      { name: "The 'Zaria' Tote", image: "https://images.unsplash.com/photo-1584917663908-21f1b2746f3a?auto=format&fit=crop&q=80&w=800", tag: "Iconic" },
      { name: "Marigold Crossbody", image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800", tag: "Atelier" },
      { name: "Executive Satchel", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800", tag: "Bespoke" },
      { name: "Heritage Duffel", image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800", tag: "Travel" },
      { name: "Obsidian Clutch", image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&q=80&w=800", tag: "Nocturnal" },
      { name: "Sovereign Backpack", image: "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&q=80&w=800", tag: "Modern" },
      { name: "Artisan Belt Bag", image: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800", tag: "Street" },
      { name: "Luxe Shopper", image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&q=80&w=800", tag: "Classic" }
    ]
  },
  {
    id: "footwear",
    name: "Quality Footwear",
    description: "Precision-engineered footwear combining ergonomic comfort with high-fashion Nigerian aesthetics.",
    items: [
      { name: "Onyx Palm Slippers", image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&q=80&w=800", tag: "Heritage" },
      { name: "Royal Stiletto", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800", tag: "Gala" },
      { name: "Sand-Dune Loafers", image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800", tag: "Bespoke" },
      { name: "Kids' Artisan Sandals", image: "https://images.unsplash.com/photo-1520639889313-7272a74b1c73?auto=format&fit=crop&q=80&w=800", tag: "Young" },
      { name: "Velvet Mules", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800", tag: "Luxury" },
      { name: "Desert Boots", image: "https://images.unsplash.com/photo-1520639889313-7272a74b1c73?auto=format&fit=crop&q=80&w=800", tag: "Rugged" },
      { name: "Glitter Court Shoes", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800", tag: "Vogue" },
      { name: "Artisan Slides", image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800", tag: "Summer" }
    ]
  },
  {
    id: "bedding",
    name: "Bedding Sets",
    description: "Sanctuary-grade linens and textiles designed for the ultimate rest. Hand-finished with obsessive attention to detail.",
    items: [
      { name: "Egyptian Cotton Set", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", tag: "Royal" },
      { name: "Silk Pillowcase Pair", image: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=800", tag: "Anti-Aging" },
      { name: "Jacquard Duvet Set", image: "https://images.unsplash.com/photo-1522771753035-1a5b6562f3ba?auto=format&fit=crop&q=80&w=800", tag: "Legacy" },
      { name: "Heritage Throw Pillow", image: "https://images.unsplash.com/photo-1584132867664-85b6e9a8057e?auto=format&fit=crop&q=80&w=800", tag: "Artisan" },
      { name: "Minimalist Linen Set", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", tag: "Zen" },
      { name: "Quilted Velvet Spread", image: "https://images.unsplash.com/photo-1531835597964-67aa32200ec0?auto=format&fit=crop&q=80&w=800", tag: "Winter" },
      { name: "Bespoke Baby Bedding", image: "https://images.unsplash.com/photo-1522771753035-1a5b6562f3ba?auto=format&fit=crop&q=80&w=800", tag: "Nursery" },
      { name: "Atmosphere Bolster", image: "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=800", tag: "Support" }
    ]
  },
  {
    id: "gifting",
    name: "Corporate Gifting",
    description: "Statement-making leather souvenirs that embody your organization's commitment to excellence.",
    items: [
      { name: "Hand-Stitched Journal", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", tag: "Executive" },
      { name: "Summit Document Case", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800", tag: "Diplomat" },
      { name: "Passport & Luggage Set", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800", tag: "Elite" },
      { name: "Premium Card Wallet", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800", tag: "Classic" },
      { name: "Desk Blotter Set", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800", tag: "Bespoke" },
      { name: "Keyring & Fob Duo", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=800", tag: "Souvenir" },
      { name: "Tech Organizer Case", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=800", tag: "Utility" },
      { name: "Personalized Gift Box", image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=800", tag: "Presentation" }
    ]
  }
];

export default function ProductsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Header */}
      <section className="pt-48 pb-32 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,40,0.1),transparent_70%)]" />
          
          <div className="relative z-10 max-w-5xl mx-auto">
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-8">
                 <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">Premium Collections</p>
              </div>
              <h1 className="text-7xl md:text-9xl font-display font-black uppercase mb-10 leading-[0.8] tracking-tighter">
                The <span className="text-outlined">Handcrafted</span> <br className="hidden md:block" /> Catalogue.
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
                 Explore our curated legacy of excellence. From bespoke leather pieces to masterfully finished bedding, each item is a testament to the power in every stitch.
              </p>
              <div className="h-px w-24 bg-primary mx-auto opacity-50" />
          </div>
      </section>

      {/* Categories sections */}
      <div className="space-y-48 pb-40">
        {categories.map((category) => (
          <section key={category.id} className="container mx-auto px-6 md:px-12">
            <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div className="max-w-xl">
                    <span className="text-[10px] font-bold text-primary tracking-[0.4em] uppercase mb-4 block opacity-60">Category</span>
                    <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">{category.name}</h2>
                    <p className="text-muted-foreground font-light text-xl leading-relaxed">{category.description}</p>
                </div>
                <div className="h-px flex-1 bg-linear-to-r from-border/20 via-border/10 to-transparent hidden lg:block mb-8" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-12">
                {category.items.map((product, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05, duration: 0.6 }}
                        className="group"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary mb-8 relative shadow-2xl border border-border/10">
                            <div 
                               className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                               style={{ backgroundImage: `url(${product.image})` }}
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute top-8 left-8 bg-background/90 backdrop-blur-xl px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary shadow-xl border border-white/10">
                                {product.tag}
                            </div>
                        </div>
                        
                        <div className="space-y-3 px-2">
                            <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                                {product.name}
                            </h3>
                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 transition-all group-hover:text-primary">
                                <span className="h-px w-8 bg-current opacity-30 group-hover:w-12 transition-all" />
                                Custom Request
                            </div>
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
