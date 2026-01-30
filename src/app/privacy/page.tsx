import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Eriatswa Soko Global collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <div className="container mx-auto px-6 md:px-12 py-32">
        <h1 className="text-4xl md:text-6xl font-display font-bold uppercase mb-8">Privacy Policy</h1>
        <div className="prose prose-lg dark:prose-invert">
          <p>Effective Date: {new Date().toLocaleDateString()}</p>
          <p>
            At Eriatswa Soko Global, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or purchase our bespoke products.
          </p>
          
          <h3>1. Information We Collect</h3>
          <p>
            We may collect personal information such as your name, email address, phone number, and shipping address when you place an order or inquire about our academy.
          </p>

          <h3>2. How We Use Your Information</h3>
          <ul>
            <li>To process and deliver your orders.</li>
            <li>To communicate with you regarding your purchase or academy enrollment.</li>
            <li>To improve our website and customer service.</li>
          </ul>

          <h3>3. Data Protection</h3>
          <p>
            We implement standard security measures to maintain the safety of your personal information. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties.
          </p>

          <h3>4. Contact Us</h3>
          <p>
            If you have any questions about this privacy policy, please contact us at lucytsowa3@gmail.com.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
