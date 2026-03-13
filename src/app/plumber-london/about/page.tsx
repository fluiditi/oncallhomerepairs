import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigLondon } from "@/config/seo-london";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs London | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting London homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-london/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigLondon} />;
}
