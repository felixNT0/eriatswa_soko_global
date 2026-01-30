
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mrs. Lucy Tsowa | Founder & CEO",
  description: "Meet Tsowa Nnawonchiko Lucy, the visionary founder of Eriatswa Soko Global and member of the Governing Council, FUTIA.",
};

export default function AboutCEOLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
