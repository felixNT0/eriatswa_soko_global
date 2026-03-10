"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const categories = [
  {
    id: "bags",
    name: "Stylish & Durable Handmade Bags",
    description:
      "Are you looking for quality products that combine style, durability, and affordability? Look no further! Our bag collection includes Handbags, Traveling Bags, Tote Bags (Plain & Customized), Unisex Cross Bags, School Bags, Lunch Bags and more.",
    items: [
      {
        name: "Premium Handbag",
        image:
          "https://images.unsplash.com/photo-1584917663908-21f1b2746f3a?auto=format&fit=crop&q=80&w=800",
        tag: "Elegant",
      },
      {
        name: "Heritage Traveling Bag",
        image:
          "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
        tag: "Durable",
      },
      {
        name: "Customized Tote Bag",
        image:
          "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
        tag: "Bespoke",
      },
      {
        name: "Unisex Cross Bag",
        image:
          "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
        tag: "Versatile",
      },
      {
        name: "Artisan School Bag",
        image:
          "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&q=80&w=800",
        tag: "Reliable",
      },
      {
        name: "Premium Lunch Bag",
        image:
          "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800",
        tag: "Compact",
      },
    ],
  },
  {
    id: "footwear",
    name: "Quality Footwear",
    description:
      "Comfortable and durable footwear for Men, Women, and Children. Our selection includes high-quality leather works and different types of durable rubber footwear.",
    items: [
      {
        name: "Men's Leather Loafers",
        image:
          "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800",
        tag: "Classic",
      },
      {
        name: "Women's Royal Sandals",
        image:
          "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
        tag: "Premium",
      },
      {
        name: "Children's Durable Shoes",
        image:
          "https://images.unsplash.com/photo-1520639889313-7272a74b1c73?auto=format&fit=crop&q=80&w=800",
        tag: "Rugged",
      },
      {
        name: "Everyday Rubber Slides",
        image:
          "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800",
        tag: "Essential",
      },
    ],
  },
  {
    id: "bedding",
    name: "Beautiful Bedding Collections",
    description:
      "Transform your bedroom with our premium collections: Duvets, Throw Pillows, Bedsheets, and Pillowcases for all bed sizes.",
    items: [
      {
        name: "Royal Duvet Set",
        image:
          "https://images.unsplash.com/photo-1522771753035-1a5b6562f3ba?auto=format&fit=crop&q=80&w=800",
        tag: "Luxury",
      },
      {
        name: "Artisan Throw Pillow",
        image:
          "https://images.unsplash.com/photo-1584132867664-85b6e9a8057e?auto=format&fit=crop&q=80&w=800",
        tag: "Decorative",
      },
      {
        name: "Premium Linen Set",
        image:
          "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
        tag: "Comfort",
      },
      {
        name: "Satin Pillowcase Pair",
        image:
          "https://images.unsplash.com/photo-1595853035070-59a39fe84de3?auto=format&fit=crop&q=80&w=800",
        tag: "Delicate",
      },
    ],
  },
  {
    id: "accessories",
    name: "Bag Leather & Accessories",
    description:
      "Perfect for bag makers, creatives, and fashion entrepreneurs. We provide premium leather hide, high-quality buckles, and artisan straps.",
    items: [
      {
        name: "Full Grain Leather Hide",
        image:
          "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800",
        tag: "Raw",
      },
      {
        name: "Premium Bag Buckles",
        image:
          "https://images.unsplash.com/photo-1621252179027-94459d27d3ee?auto=format&fit=crop&q=80&w=800",
        tag: "Utility",
      },
      {
        name: "Artisan Bag Straps",
        image:
          "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=800",
        tag: "Finished",
      },
    ],
  },
];

export default function ProductsPageClient() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      {/* Header */}
      <section className="pt-48 pb-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,40,0.1),transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-md mb-8">
            <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
              Premium Products
            </p>
          </div>
          <h1 className="text-7xl md:text-9xl font-display font-black uppercase mb-10 leading-[0.8] tracking-tighter">
            The <span className="text-outlined">Handcrafted</span>{" "}
            <br className="hidden md:block" /> Catalogue.
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-12">
            Explore our curated legacy of excellence. From handmade bags and
            quality footwear to beautiful bedding products.
            <strong> Custom designs </strong> available and{" "}
            <strong> bulk orders </strong> accepted.
          </p>
          <div className="h-px w-24 bg-primary mx-auto opacity-50" />
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-24 px-6 md:px-12 bg-background">
        <div className="container mx-auto">
          <div className="space-y-32">
            {categories.map((category) => (
              <div key={category.id} id={category.id} className="scroll-mt-32">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                  <div className="max-w-2xl">
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
                      <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                        Category
                      </p>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 leading-[0.8] tracking-tighter">
                      {category.name}
                    </h2>
                    <p className="text-muted-foreground text-lg font-light leading-relaxed">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                  {category.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="group cursor-pointer"
                      itemScope
                      itemType="https://schema.org/Product"
                    >
                      <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                          __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Product",
                            name: item.name,
                            description: `${item.name} - Handcrafted ${category.name} by Eriatswa Soko Global.`,
                            image: item.image,
                            brand: {
                              "@type": "Brand",
                              name: "Eriatswa Soko Global",
                            },
                            category: category.name,
                          }),
                        }}
                      />
                      <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-secondary relative mb-6 shadow-2xl border border-white/5">
                        <img
                          src={item.image}
                          alt={`${item.name} - Handcrafted ${category.name} by Eriatswa Soko Global`}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          itemProp="image"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                        <div className="absolute top-6 right-6">
                          <span className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest text-white">
                            {item.tag}
                          </span>
                        </div>
                      </div>
                      <h3
                        className="text-xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors"
                        itemProp="name"
                      >
                        {item.name}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Section */}
      <section className="py-32 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
                <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                  Exceptional Value
                </p>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-12 leading-[0.8] tracking-tighter">
                Why Choose <br />
                <span className="text-outlined">Eriatswa.</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  {
                    title: "Quality Materials",
                    desc: "Sourced from the finest hides and durable fabrics.",
                  },
                  {
                    title: "Neat Finishing",
                    desc: "Professional craftsmanship in every single stitch.",
                  },
                  {
                    title: "Affordable Prices",
                    desc: "Luxury handcrafted goods that won't break the bank.",
                  },
                  {
                    title: "Reliable Service",
                    desc: "Consistency and excellence in every delivery.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rotate-45" />
                      <h4 className="font-bold uppercase tracking-widest text-sm">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-12 rounded-[3rem] backdrop-blur-xl">
              <h3 className="text-3xl font-display font-bold uppercase mb-8 tracking-tight">
                Special Services
              </h3>
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-black shrink-0 font-bold">
                    CD
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight mb-2">
                      Custom Designs Available
                    </h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      Need something unique? We bring your vision to life with
                      bespoke tailoring.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white shrink-0 font-bold border border-white/10">
                    BO
                  </div>
                  <div>
                    <h4 className="text-lg font-bold uppercase tracking-tight mb-2">
                      Bulk Orders Accepted
                    </h4>
                    <p className="text-stone-400 text-sm leading-relaxed">
                      Perfect for retailers, corporate gifts, and large-scale
                      fashion events.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-primary font-bold tracking-widest uppercase text-xs">
                  Ready To Partner?
                </p>
                <a
                  href="/#contact"
                  className="inline-block mt-4 text-white hover:text-primary transition-colors font-light italic border-b border-primary/20 pb-1"
                >
                  Speak with our concierge →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
