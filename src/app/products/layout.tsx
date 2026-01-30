
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luxury Collection | Bespoke Bags & Footwear",
  description: "Explore our curated catalog of handcrafted leather bags, bespoke footwear, surprising souvenirs, and luxury bedding.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
