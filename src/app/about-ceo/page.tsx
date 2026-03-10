import { Metadata } from "next";
import AboutCEOClient from "./AboutCEOClient";

export const metadata: Metadata = {
  title: "About our Founder | Tsowa Nnawonchiko Lucy",
  description:
    "Meet Mrs. Tsowa Nnawonchiko Lucy, the visionary founder and Creative Director of Eriatswa Soko Global. Member of the Governing Council for FUTIA and advocate for handcrafted excellence.",
  openGraph: {
    title: "About our Founder | Tsowa Nnawonchiko Lucy",
    description:
      "Visionary leader, Creative Director, and founder of Eriatswa Soko Global. Dedicated to quality craftsmanship and artisan empowerment.",
    images: ["/ceo.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tsowa Nnawonchiko Lucy",
  jobTitle: "Founder & Creative Director",
  description:
    "Visionary founder of Eriatswa Soko Global and member of the Governing Council for the Federal University of Technology, Ikot Abasi (FUTIA).",
  worksFor: {
    "@type": "Organization",
    name: "Eriatswa Soko Global",
  },
  url: "https://eriatswa-soko-global.vercel.app/about-ceo",
  image: "https://eriatswa-soko-global.vercel.app/ceo.jpeg",
  sameAs: [
    "https://web.facebook.com/paul.lucia.336",
    "https://www.tiktok.com/@nnawonchiko",
  ],
};

export default function AboutCEOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutCEOClient />
    </>
  );
}
