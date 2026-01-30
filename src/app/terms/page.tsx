import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms of service for purchasing products and enrolling in the Eriatswa Soko Academy.",
};

export default function Terms() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-32">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">Terms & Conditions</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <p>
            Welcome to Eriatswa Soko Global. By accessing our website and purchasing our products, you agree to be bound by the following terms and conditions.
          </p>
          
          <h3>1. Products & Bespoke Orders</h3>
          <p>
            All our products are handcrafted. Slight variations in color, texture, and finish are inherent to the leather and materials used, adding to the unique character of each piece. Bespoke orders are non-refundable once production has commenced.
          </p>

          <h3>2. Delivery</h3>
          <p>
            We deliver predominantly within Nigeria (Lagos, Ilorin, and nationwide) and globally. Delivery times provided are estimates and may vary based on location and logistics.
          </p>

          <h3>3. Academy Enrollment</h3>
          <p>
            Enrollment in our Physical or Online academy implies a commitment to the curriculum. Fees paid are generally non-refundable unless otherwise stated in writing.
          </p>

          <h3>4. Intellectual Property</h3>
          <p>
            All content on this website, including designs, text, graphics, and logos, is the property of Eriatswa Soko Global and is protected by copyright laws.
          </p>

          <h3>5. Governing Law</h3>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
