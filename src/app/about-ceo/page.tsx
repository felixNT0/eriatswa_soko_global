"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function AboutCEOPage() {
  return (
    <main className="bg-background min-h-screen text-foreground">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-end pb-20 overflow-hidden">
         <div 
            className="absolute inset-0 bg-cover bg-top"
            style={{ backgroundImage: "url('/ceo.jpeg')" }} 
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
         
         <div className="container mx-auto px-6 md:px-12 relative z-10">
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
             >
                 <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Visionary</p>
                 <h1 className="text-5xl md:text-8xl font-display font-black uppercase leading-none mb-6">
                    Tsowa <br/> Nnawonchiko Lucy.
                 </h1>
                 <p className="text-xl md:text-2xl opacity-80 max-w-2xl font-light">
                    Founder of Eriatswa Soko Global. Member of the Governing Council, FUTIA. A champion of African excellence.
                 </p>
             </motion.div>
         </div>
      </section>

      {/* Biography Section */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                   <h2 className="text-3xl font-display font-bold uppercase mb-8 sticky top-32">The Journey</h2>
              </div>
              <div className="md:w-2/3 space-y-8 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Mrs. Lucy Tsowa (Kwara State)</strong> is a distinguished entrepreneur and visionary leader committed to redefining the narrative of African luxury. With a profound respect for heritage craftsmanship and a keen eye for modern design, she founded Eriatswa Soko Global to bring world-class leather goods to the global market.
                  </p>
                  <p>
                    Her journey began with a simple belief: that African hands are capable of producing global excellence. This conviction has driven her to build not just a brand, but an institution that trains, empowers, and employs the next generation of artisans.
                  </p>
              </div>
          </div>
      </section>

      {/* Leadership Philosophy - NEW */}
      <section className="py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-secondary/5" />
         <div className="container mx-auto px-6 md:px-12 relative z-10">
             <div className="max-w-4xl mx-auto text-center mb-16">
                 <h2 className="text-4xl font-display font-bold uppercase mb-6">Leadership Philosophy</h2>
                 <p className="text-xl text-muted-foreground">"Excellence is not an act, but a standard we live by."</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-8">
                 {[
                    { title: "Empowerment", desc: "Building capacity in others to ensure the longevity of African craftsmanship." },
                    { title: "Precision", desc: "A relentless attention to detail that rivals the world's best luxury houses." },
                    { title: "Identity", desc: "Creating products that are proudly African in soul, yet global in appeal." }
                 ].map((item, i) => (
                     <div key={i} className="bg-background border border-border/10 p-8 rounded-xl hover:border-primary/50 transition-colors">
                         <h3 className="text-xl font-bold uppercase mb-4 text-primary">{item.title}</h3>
                         <p className="text-muted-foreground">{item.desc}</p>
                     </div>
                 ))}
             </div>
         </div>
      </section>

      {/* Federal Appointment Section */}
      <section className="py-20 bg-secondary/5 border-y border-border/10">
          <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16">
              <div className="md:w-1/3">
                   <h2 className="text-3xl font-display font-bold uppercase mb-8 sticky top-32 text-primary">Public Service</h2>
              </div>
              <div className="md:w-2/3 space-y-6">
                  <div className="bg-background p-8 border border-border/10 rounded-xl shadow-sm">
                      <h3 className="text-2xl font-bold mb-4">Governing Council Appointment</h3>
                      <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">July 2024</p>
                      <p className="text-lg leading-relaxed">
                        In recognition of her strategic leadership and commitment to national development, Mrs. Lucy Tsowa was appointed by the Federal Government of Nigeria as a member of the pioneer <strong>Governing Council for the Federal University of Technology, Ikot Abasi (FUTIA)</strong>.
                      </p>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In this capacity, she works alongside other distinguished council members to oversee the strategic direction of the university, ensuring it fulfills its mandate of technological advancement and academic excellence.
                  </p>
              </div>
          </div>
      </section>

      {/* Mission/Philosophy */}
      <section className="py-20 bg-background">
          <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
              <h2 className="text-4xl font-display font-bold uppercase mb-8">"Power in Every Stitch"</h2>
              <p className="text-2xl font-serif italic text-muted-foreground leading-relaxed">
                "We are reviving a heritage. My goal is to train a generation of artisans who see their hands as tools of global influence. We don't just make products; we build legacies."
              </p>
              <div className="mt-12">
                  <span className="font-bold uppercase tracking-widest text-sm">— Mrs. Lucy Tsowa</span>
              </div>
          </div>
      </section>

      <Footer />
    </main>
  );
}
