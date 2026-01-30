"use client";

import { Facebook, MessageCircle, Phone } from "lucide-react";

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
        <footer id="contact" className="bg-secondary pt-32 pb-10 border-t border-white/10 relative overflow-hidden">
            {/* Giant Text Background */}
            <div className="absolute top-0 left-0 w-full overflow-hidden opacity-[0.03] pointer-events-none select-none">
                <span className="text-[20vw] font-display font-black uppercase whitespace-nowrap leading-none text-white">
                    Eriatswa Soko
                </span>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-6xl md:text-8xl font-display font-black uppercase text-white mb-8 leading-[0.8]">
                            Let's <br/> Create.
                        </h2>
                        <a href="mailto:lucytsowa3@gmail.com" className="text-xl md:text-3xl font-sans font-light border-b border-gold pb-2 inline-block hover:text-primary transition-colors">
                            lucytsowa3@gmail.com
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
                        <div className="space-y-6">
                            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Offices</h4>
                            <div>
                                <h5 className="text-white text-lg font-bold">Lagos & Ilorin</h5>
                                <p className="text-muted-foreground">Delivery All Over Nigeria & Worldwide.</p>
                            </div>
                            
                            <div className="flex flex-col gap-2 mt-4">
                                                                
              <a
                                    href="tel:+2347035467338" 
                                    target="_blank"
                                    rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm font-bold  hover:underline"
              >
                <Phone size={16} /> +234 703 546 7338
              </a>

              <a
                href="https://wa.me/2347035467338"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary uppercase tracking-widest text-sm font-bold hover:underline"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
       </div>
                        </div>
                        
                        <div className="space-y-6">
                             <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Follow Us</h4>
                             <div className="flex gap-4">
                                <a href="https://web.facebook.com/paul.lucia.336" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-facebook hover:border-facebook hover:bg-blue-600 transition-all text-white">
                                    <Facebook size={20} />
                                </a>
                                <a href="https://www.tiktok.com/@nnawonchiko" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-black hover:border-white transition-all text-white">
                                    <TikTokIcon size={20} />
                                </a>
                             </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between text-xs text-muted-foreground uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Eriatswa Soko Global.</p>
                    <div className="flex gap-8 mt-4 md:mt-0">
                        <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
                        <a href="/terms" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
