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
    default: "Eriatswa Soko Global | Excellence in Handcrafted Luxury",
    template: "%s | Eriatswa Soko Global",
  },
  metadataBase: new URL("https://eriatswa-soko-global.vercel.app"),
  description:
    "Discover bespoke handcrafted bags, premium footwear, and luxury bedding. We train the next generation of artisans. Founded by Mrs. Lucy Tsowa.",
  keywords: [
    "Handmade Bags",
    "Luxury Footwear",
    "Custom Bedding",
    "Artisan Training",
    "Ilorin Shoemaking",
    "Lagos Fashion",
    "Tsowa Nnawonchiko Lucy",
    "Eriatswa Soko",
    "FUTIA Governing Council",
    "Nigeria Luxury Brand",
    "African Luxury",
    "Leather Goods",
    "Bespoke Fashion",
    "Vocational Training Nigeria",
    "Global Luxury Brand",
    "International Shipping",
    "Handcrafted Leather",
  ],
  authors: [{ name: "Eriatswa Soko Global" }],
  creator: "Eriatswa Soko Global",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://eriatswa-soko-global.vercel.app",
    siteName: "Eriatswa Soko Global",
    title: "Eriatswa Soko Global | Excellence in Handcrafted Luxury",
    description:
      "Discover bespoke handcrafted bags, premium footwear, and luxury bedding. We train the next generation of artisans.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eriatswa Soko Global Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eriatswa Soko Global",
    description: "Handcrafted Excellence. Bags, Footwear, Bedding & Training.",
    creator: "@eriatszwa",
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
  // Note: Favicon is handled automatically by src/app/icon.svg
  verification: {
    google: "google-site-verification-code", // Placeholder for user to fill if they have one
  },
  category: "luxury fashion",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Eriatswa Soko Global",
  url: "https://eriatszwasoko.com",
  logo: "https://eriatszwasoko.com/icon.svg",
  founder: {
    "@type": "Person",
    name: "Tsowa Nnawonchiko Lucy",
    jobTitle: "Founder & Creative Director",
    description:
      "Member of the Governing Council for the Federal University of Technology, Ikot Abasi (FUTIA).",
    url: "https://eriatszwasoko.com",
  },
  employee: [
    {
      "@type": "Person",
      name: "Blessing Nnawonchiko Tsowa",
      jobTitle: "Managing Director / Co-founder",
    },
    { "@type": "Person", name: "Felix Kolo Tsowa", jobTitle: "Co-founder" },
    {
      "@type": "Person",
      name: "Mary Paul",
      jobTitle: "Chief Operating Officer",
    },
    {
      "@type": "Person",
      name: "Emmanuel Kolo Tsowa",
      jobTitle: "Head of Media",
    },
    { "@type": "Person", name: "Paul Zhiri", jobTitle: "Strategic Adviser" },
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
  ],
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
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
