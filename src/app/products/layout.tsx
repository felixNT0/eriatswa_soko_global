import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Eriatswa Soko Global",
    default: "Luxury Collection | Bespoke Bags & Footwear",
  },
  description:
    "Explore our curated catalog of handcrafted leather bags, bespoke footwear, surprising souvenirs, and luxury bedding. Worldwide delivery available.",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
