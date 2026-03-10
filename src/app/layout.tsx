import { Loader } from "@/components/Loader";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Eriatswa Soko Global | Handcrafted With Excellence",
    template: "%s | Eriatswa Soko Global",
  },
  metadataBase: new URL("https://eriatswa-soko-global.vercel.app"),
  description:
    "Eriatswa Soko Global is a creative, handcrafted fashion and lifestyle brand. We specialize in handmade bags, quality footwear, luxry bedding, and artisan training. Handcrafted with excellence in Nigeria.",
  keywords: [
    "Eriatswa Soko Global",
    "Handmade Bags",
    "Luxury Handmade Bags Nigeria",
    "Quality Leather Footwear",
    "Luxury Bedding Sets",
    "Artisan Training Program",
    "Bespoke Fashion Nigerian Brand",
    "Tsowa Nnawonchiko Lucy",
    "Lucy Tsowa Fashion",
    "Felix Kolo Tsowa",
    "Handcrafted Leather Goods",
    "Sustainable Fashion Africa",
    "Custom Made Bags",
    "Corporate Gifting Solutions Nigeria",
    "Authentic African Luxury",
  ],
  authors: [
    { name: "Eriatswa Soko Global" },
    { name: "Felix Kolo Tsowa", url: "https://fkt-portfolio.vercel.app/" },
  ],
  creator: "Felix Kolo Tsowa",
  publisher: "Eriatswa Soko Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eriatswa-soko-global.vercel.app",
    siteName: "Eriatswa Soko Global",
    title: "Eriatswa Soko Global | Handcrafted With Excellence",
    description:
      "Combining skilled craftsmanship with modern designs. Explore our products of handmade bags, shoes, and luxury bedding.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eriatswa Soko Global - Artisanal Excellence",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eriatswa Soko Global | Handcrafted With Excellence",
    description:
      "Premium handmade bags, footwear, and bedding. Quality you can trust. Craftsmanship you can feel.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "Z5-CsNSeC_khXYiuwOLlI5UAdLI-laUgCmr8g3flDCI",
  },
  category: "Fashion & Lifestyle",
  alternates: {
    canonical: "./",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eriatswa Soko Global",
  url: "https://eriatswa-soko-global.vercel.app",
  logo: "https://eriatswa-soko-global.vercel.app/icon.svg",
  description:
    "Creative, handcrafted fashion and lifestyle brand committed to quality and excellence.",
  founder: {
    "@type": "Person",
    name: "Tsowa Nnawonchiko Lucy",
    jobTitle: "Founder & Creative Director",
    memberOf: {
      "@type": "Organization",
      name: "Federal University of Technology, Ikot Abasi (FUTIA)",
      role: "Member of the Governing Council",
    },
    knowsAbout: [
      "Handmade Bags",
      "Leather Craftsmanship",
      "Vocational Training",
      "African Luxury Fashion",
    ],
    sameAs: [
      "https://web.facebook.com/paul.lucia.336",
      "https://www.tiktok.com/@nnawonchiko",
      "https://wa.me/2347035467338",
    ],
  },
  employee: [
    {
      "@type": "Person",
      name: "Blessing Nnawonchiko Tsowa",
      jobTitle: "Managing Director & Co-founder",
      knowsAbout: ["Business Management", "Strategic Planning"],
      sameAs: [
        "https://www.facebook.com/blessing.tsowa",
        "https://wa.me/2348132486562",
        "https://www.linkedin.com/in/tsowa-blessing/",
      ],
    },
    {
      "@type": "Person",
      name: "Felix Kolo Tsowa",
      jobTitle: "Co-founder & Tech Lead",
      knowsAbout: ["Full Stack Development", "Digital Transformation"],
      sameAs: [
        "https://www.facebook.com/profile.php?id=61566528129656",
        "https://www.tiktok.com/@felixnt001",
        "https://www.linkedin.com/in/felixnt0/",
      ],
    },
    {
      "@type": "Person",
      name: "Mary Paul",
      jobTitle: "Chief Operating Officer",
      knowsAbout: ["Operations Management", "Customer Excellence"],
      sameAs: ["https://wa.me/2348038414805"],
    },
    {
      "@type": "Person",
      name: "Emmanuel Kolo Tsowa",
      jobTitle: "Head of Media",
      knowsAbout: ["Digital Media", "Content Creation"],
      sameAs: [
        "https://www.tiktok.com/@legend4764",
        "https://www.facebook.com/itz.legends.753653",
      ],
    },
    {
      "@type": "Person",
      name: "Paul Zhiri",
      jobTitle: "Strategic Adviser",
      knowsAbout: ["Strategic Consulting", "Business Advisory"],
      sameAs: ["https://wa.me/2348035185063"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ilorin",
    addressRegion: "Kwara",
    addressCountry: "NG",
  },
  sameAs: [
    "https://web.facebook.com/paul.lucia.336",
    "https://www.tiktok.com/@nnawonchiko",
    "https://wa.me/2347035467338",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+234 703 546 7338",
    contactType: "customer service",
    email: "lucytsowa3@gmail.com",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <meta
        name="google-site-verification"
        content="Z5-CsNSeC_khXYiuwOLlI5UAdLI-laUgCmr8g3flDCI"
      />
      <body
        className={`${syne.variable} ${manrope.variable} antialiased font-sans bg-background text-foreground overflow-x-hidden transition-colors duration-500`}
      >
        <Loader />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
