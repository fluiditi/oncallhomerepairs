import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigBristol } from "@/config/seo-bristol";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Bristol | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Bristol homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-bristol/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigBristol} />;
}
