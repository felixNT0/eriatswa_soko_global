"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { motion } from "framer-motion";

export default function AboutCEOClient() {
  return (
    <main className="bg-background min-h-screen text-foreground relative overflow-hidden">
      <Navbar />

      {/* Cinematic Hero */}
      <section className="relative h-screen flex items-end pb-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-top scale-105"
          style={{ backgroundImage: "url('/ceo.jpeg')" }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-r from-background/20 via-transparent to-transparent" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8 backdrop-blur-md">
              <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                The Visionary Leader
              </p>
            </div>
            <h1 className="text-6xl md:text-[10vw] font-display font-black uppercase leading-[0.75] mb-10 tracking-tighter">
              Tsowa <br /> <span className="text-primary">Nnawonchiko</span>{" "}
              <br className="hidden lg:block" /> Lucy.
            </h1>
            <p className="text-xl md:text-3xl opacity-60 font-light leading-relaxed max-w-2xl tracking-tight">
              Founder & Creative Director. Member of the Governing Council,
              FUTIA. Redefining the soul of African Luxury.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-12 hidden lg:block text-right">
          <div className="h-px w-32 bg-primary mb-4 ml-auto" />
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
            Est. 2012
          </p>
        </div>
      </section>

      {/* Biography - Asymmetrical Layout */}
      <section className="py-40 relative bg-background">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/2 pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-4 sticky top-40">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
                01 / The Journey
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase leading-[0.8] tracking-tighter mb-10">
                Crafting <br /> A Legacy.
              </h2>
            </div>
            <div className="lg:col-span-7 lg:col-start-6 space-y-12 text-xl md:text-2xl text-stone-500 font-light leading-relaxed">
              <p className="text-foreground font-medium italic">
                "African hands are capable of global excellence. This is not
                just a belief; it is the foundation of every stitch we make at
                Eriatswa Soko Global."
              </p>
              <p>
                Mrs. Tsowa Nnawonchiko Lucy is a distinguished entrepreneur and
                visionary leader committed to redefining the narrative of
                African luxury. With a profound respect for heritage
                craftsmanship and a keen eye for modern design, she founded ESG
                to bring world-class leather goods to the global market.
              </p>
              <p>
                Her journey began with the Eriatswa Soko Academy, an institution
                dedicated to training and empowering the next generation of
                artisans, ensuring that the sacred art of leather manipulation
                is preserved and elevated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - Grid Cards */}
      <section className="py-40 bg-[#0C0A09] relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="mb-24 text-center">
            <h2 className="text-5xl md:text-8xl font-display font-black uppercase text-white tracking-tighter leading-none mb-6">
              Leadership <br />{" "}
              <span className="text-outlined">Philosophy.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-3xl">
            {[
              {
                title: "Empowerment",
                desc: "Building capacity in others to ensure the longevity of African craftsmanship.",
              },
              {
                title: "Precision",
                desc: "A relentless attention to detail that rivals the world's most prestigious luxury houses.",
              },
              {
                title: "Identity",
                desc: "Creating products that are proudly African in soul, yet global in appeal.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#0C0A09] p-16 hover:bg-white/[0.02] transition-colors duration-500 group"
              >
                <span className="text-primary text-4xl font-display font-black mb-10 block opacity-20 group-hover:opacity-100 transition-opacity">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-display font-bold uppercase mb-6 text-white tracking-tight">
                  {item.title}
                </h3>
                <p className="text-stone-500 text-lg font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Service - Museum Grade Frame */}
      <section className="py-40 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="bg-secondary/10 p-12 md:p-24 rounded-[3rem] border border-border/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full" />

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-10">
                  <span className="text-primary font-bold tracking-[0.3em] uppercase text-[10px]">
                    National Appointment
                  </span>
                </div>
                <h2 className="text-5xl md:text-7xl font-display font-black uppercase leading-[0.8] mb-12 tracking-tighter">
                  A Voice For <br /> Development.
                </h2>
                <div className="space-y-8 text-xl text-stone-500 font-light leading-relaxed">
                  <p>
                    In recognition of her strategic leadership, Mrs. Tsowa
                    Nnawonchiko Lucy was appointed by the Federal Government of
                    Nigeria as a member of the pioneer{" "}
                    <strong>
                      Governing Council for the Federal University of
                      Technology, Ikot Abasi (FUTIA)
                    </strong>
                    .
                  </p>
                  <p className="text-sm font-bold uppercase tracking-[0.4em] text-primary opacity-60">
                    — APPOINTED JULY 2024
                  </p>
                </div>
              </div>
              <div className="aspect-square bg-stone-900 rounded-[2.5rem] overflow-hidden relative border border-white/5 shadow-2xl">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center grayscale opacity-30" />
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                  <p className="text-white text-3xl font-display font-black uppercase tracking-tighter italic">
                    "Empowering The Future Through Strategic Innovation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
