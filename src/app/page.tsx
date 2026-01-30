import { AboutCEO } from "@/components/AboutCEO";
import { Academy } from "@/components/Academy";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { GlobalDelivery } from "@/components/GlobalDelivery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Newsletter } from "@/components/Newsletter";
import { Philosophy } from "@/components/Philosophy";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Team } from "@/components/Team";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-background transition-colors duration-500">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Features />
      <Philosophy />
      <Stats />
      <AboutCEO />
      <Services />
      <Academy />
      <Process />
      <Team />
      <Testimonials />
      <GlobalDelivery />
      <FAQ />
      <Newsletter />
      <Footer />
    </main>
  );
}
