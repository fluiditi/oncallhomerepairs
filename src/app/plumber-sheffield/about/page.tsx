import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigSheffield } from "@/config/seo-sheffield";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Sheffield | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Sheffield homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-sheffield/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigSheffield} />;
}
