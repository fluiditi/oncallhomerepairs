import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigBirmingham } from "@/config/seo-birmingham";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Birmingham | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Birmingham homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-birmingham/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigBirmingham} />;
}
