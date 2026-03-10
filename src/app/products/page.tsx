import { Metadata } from "next";
import ProductsPageClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Our Products | Handmade Bags, Footwear & Bedding",
  description:
    "Explore Eriatswa Soko Global's premium catalogue. From stylish handmade bags and quality footwear to beautiful bedding and leather accessories. Handcrafted with excellence.",
  openGraph: {
    title: "Our Products | Eriatswa Soko Global",
    description:
      "Explore our premium catalogue of handmade bags, quality footwear, and luxury bedding sets. Custom designs and bulk orders available.",
    images: [
      "https://images.unsplash.com/photo-1584917663908-21f1b2746f3a?auto=format&fit=crop&q=80&w=800",
    ],
  },
};

const categories = [
  {
    id: "bags",
    name: "Handmade Bags",
    description:
      "From stylish handbags to durable traveling bags and customized tote bags. Every piece is handcrafted with excellence.",
  },
  {
    id: "footwear",
    name: "Quality Footwear",
    description:
      "Comfortable and durable footwear for Men, Women, and Children. Refined leather works and durable rubber footwear.",
  },
  {
    id: "bedding",
    name: "Beautiful Bedding",
    description:
      "Duvets, Throw Pillows, Bedsheets, and Pillowcases for all bed sizes. Transform your bedroom into a sanctuary.",
  },
  {
    id: "accessories",
    name: "Leather & Accessories",
    description:
      "Premium leather materials and essential bag accessories. Perfect for bag makers, creatives, and entrepreneurs.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: categories.map((category, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: category.name,
    description: category.description,
    url: `https://eriatswa-soko-global.vercel.app/products#${category.id}`,
  })),
};

export default function ProductsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductsPageClient />
    </>
  );
}
