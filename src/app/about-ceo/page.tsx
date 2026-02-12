import { Metadata } from "next";
import AboutCEOClient from "./AboutCEOClient";

export const metadata: Metadata = {
  title: "About the CEO | Tsowa Nnawonchiko Lucy",
  description:
    "Meet Mrs. Tsowa Nnawonchiko Lucy, the visionary founder of Eriatswa Soko Global and member of the Governing Council for FUTIA.",
  openGraph: {
    title: "About the CEO | Tsowa Nnawonchiko Lucy",
    description:
      "Meet Mrs. Tsowa Nnawonchiko Lucy, the visionary founder of Eriatswa Soko Global and member of the Governing Council for FUTIA.",
    images: ["/ceo.jpeg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Tsowa Nnawonchiko Lucy",
  jobTitle: "Founder & Creative Director",
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
