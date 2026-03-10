"use client";

import { Facebook, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

const TikTokIcon = ({ size = 18, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-[#0C0A09] py-32 border-t border-white/5 relative overflow-hidden">
      {/* Artistic Branding Overlay */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-[0.05] pointer-events-none select-none translate-y-1/2">
        <span className="text-[25vw] font-display font-black uppercase whitespace-nowrap leading-none text-white tracking-tighter">
          Eriatswa Soko
        </span>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 mb-32">
          <div className="lg:col-span-5">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-10">
              <p className="text-primary font-bold tracking-[0.4em] uppercase text-[10px]">
                Atelier Inquiries
              </p>
            </div>
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase text-white mb-12 leading-[0.8] tracking-tighter">
              A Legacy <br /> In Every <br />{" "}
              <span className="text-outlined">Stitch.</span>
            </h2>
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Brand Promise
            </p>
            <p className="text-stone-300 text-sm font-light leading-relaxed mb-10">
              Quality you can trust. Craftsmanship you can feel. Style that
              speaks.
            </p>
            <p className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-6">
              Direct Correspondence
            </p>
            <a
              href="mailto:lucytsowa3@gmail.com"
              className="text-3xl md:text-5xl font-light text-white hover:text-primary transition-colors duration-500 border-b border-primary/20 pb-2 inline-block"
            >
              lucytsowa3@gmail.com
            </a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            <div className="space-y-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Navigation
              </h4>
              <ul className="space-y-6">
                {[
                  { name: "Home", href: "/" },
                  { name: "Products", href: "/products" },
                  { name: "Academy", href: "/#academy" },
                  { name: "About", href: "/#about" },
                  { name: "Team", href: "/#team" },
                  { name: "Contact", href: "/#contact" },
                  { name: "Booking", href: "/booking" },
                ].map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-stone-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Contact & Hours
              </h4>
              <ul className="space-y-8">
                <li className="space-y-2">
                  <span className="text-stone-500 text-[10px] uppercase font-bold tracking-widest">
                    Locations
                  </span>
                  <p className="text-white text-xs font-bold leading-relaxed uppercase tracking-widest">
                    Tsaragi • Ilorin • Lagos
                  </p>
                </li>
                <li className="space-y-2">
                  <span className="text-stone-500 text-[10px] uppercase font-bold tracking-widest">
                    Opening Hours
                  </span>
                  <p className="text-white text-xs font-bold leading-relaxed uppercase tracking-widest">
                    Physical: 8:00 AM - 6:00 PM <br />
                    Online: 24 Hours Open
                  </p>
                </li>
                <li className="space-y-4 pt-2">
                  <a
                    href="tel:+2347035467338"
                    className="flex items-center gap-3 text-white hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                      <Phone size={14} />
                    </div>
                    +234 703 546 7338
                  </a>
                  <a
                    href="https://wa.me/2347035467338"
                    className="flex items-center gap-3 text-white hover:text-primary transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                      <MessageCircle size={14} />
                    </div>
                    WhatsApp Concierge
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-10">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                Socials
              </h4>
              <div className="flex flex-col gap-6">
                <a
                  href="https://web.facebook.com/paul.lucia.336"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <Facebook size={18} />
                  </div>
                  <span className="text-stone-400 group-hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
                    Facebook
                  </span>
                </a>
                <a
                  href="https://www.tiktok.com/@nnawonchiko"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <TikTokIcon size={18} />
                  </div>
                  <span className="text-stone-400 group-hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">
                    TikTok
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold text-stone-600 uppercase tracking-[0.3em]">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>
              © {new Date().getFullYear()} Eriatswa Soko Global. Handcrafted
              With Excellence.
            </p>
            <span className="hidden md:inline text-white/10">|</span>
            <p>
              Made by{" "}
              <a
                href="https://fkt-portfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Felix
              </a>
            </p>
          </div>
          <div className="flex gap-12">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
