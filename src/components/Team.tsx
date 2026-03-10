"use client";

import { motion } from "framer-motion";
import { Facebook, Linkedin, MessageCircle, Phone } from "lucide-react";

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

const team = [
  {
    name: "Blessing Nnawonchiko Tsowa",
    role: "Managing Director & Co-founder",
    image: "/blessing.jpeg",
    socials: [
      { type: "facebook", url: "https://www.facebook.com/blessing.tsowa" },
      { type: "whatsapp", url: "https://wa.me/2348132486562" },
      { type: "linkedin", url: "https://www.linkedin.com/in/tsowa-blessing/" },
    ],
  },
  {
    name: "Felix Kolo Tsowa",
    role: "Co-founder & Tech Lead",
    image: "/felix.jpeg",
    socials: [
      {
        type: "facebook",
        url: "https://www.facebook.com/profile.php?id=61566528129656",
      },
      { type: "tiktok", url: "https://www.tiktok.com/@felixnt001" },
      { type: "linkedin", url: "https://www.linkedin.com/in/felixnt0/" },
    ],
  },
  {
    name: "Mary Paul",
    role: "Chief Operating Officer",
    image: "/mary.jpeg",
    socials: [
      { type: "whatsapp", url: "https://wa.me/2348038414805" },
      { type: "phone", url: "tel:+2348038414805" },
    ],
  },
  {
    name: "Emmanuel Kolo Tsowa",
    role: "Head of Media",
    image: "/emma.jpeg",
    socials: [
      { type: "tiktok", url: "https://www.tiktok.com/@legend4764" },
      { type: "facebook", url: "https://www.facebook.com/itz.legends.753653" },
    ],
  },
  {
    name: "Paul Zhiri",
    role: "Strategic Adviser",
    image: "/paul.jpeg",
    socials: [
      { type: "whatsapp", url: "https://wa.me/2348035185063" },
      { type: "phone", url: "tel:+2348035185063" },
    ],
  },
];

const SocialIcon = ({ type, size = 18 }: { type: string; size?: number }) => {
  switch (type) {
    case "facebook":
      return <Facebook size={size} />;
    case "linkedin":
      return <Linkedin size={size} />;
    case "tiktok":
      return <TikTokIcon size={size} />;
    case "whatsapp":
      return <MessageCircle size={size} />;
    case "phone":
      return <Phone size={size} />;
    default:
      return null;
  }
};

export const Team = () => {
  return (
    <section
      id="team"
      className="py-20 bg-background relative overflow-hidden border-t border-border/10"
    >
      {/* Luxury Texture Contrast */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-md:w-full max-md:text-center">
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-4">
              The Collective
            </p>
            <h2 className="text-5xl md:text-5xl font-display font-black uppercase tracking-tighter">
              Meet The <br className="hidden md:block" /> Team.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm text-center md:text-left font-light leading-relaxed">
            The strategic minds and creative hands driving Eriatswa Soko Global
            forward.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
              itemScope
              itemType="https://schema.org/Person"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-secondary relative rounded-2xl shadow-lg border border-border/10">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 md:group-hover:scale-110 grayscale md:group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${member.image})` }}
                  itemProp="image"
                />
                {/* Social Overlay - Visible on mobile by default, hover on desktop */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6 gap-4">
                  {member.socials.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                      itemProp="sameAs"
                    >
                      <SocialIcon type={social.type} size={18} />
                    </motion.a>
                  ))}
                </div>
              </div>
              <div className="max-md:text-center px-2">
                <h3
                  className="text-lg font-display font-bold uppercase leading-tight tracking-tight group-hover:text-primary transition-colors"
                  itemProp="name"
                >
                  {member.name}
                </h3>
                <p className="text-[10px] text-primary uppercase tracking-widest mt-1 font-bold">
                  <span itemProp="jobTitle">{member.role}</span>
                </p>
                <link
                  itemProp="worksFor"
                  href="https://eriatswa-soko-global.vercel.app"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
