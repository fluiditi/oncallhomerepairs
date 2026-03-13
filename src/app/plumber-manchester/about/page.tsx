import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigManchester } from "@/config/seo-manchester";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Manchester | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Manchester homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-manchester/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigManchester} />;
}
