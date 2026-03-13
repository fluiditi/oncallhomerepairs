import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigLiverpool } from "@/config/seo-liverpool";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Liverpool | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Liverpool homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-liverpool/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigLiverpool} />;
}
