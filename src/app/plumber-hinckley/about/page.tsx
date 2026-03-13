import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfig } from "@/config/seo";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Hinckley | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Hinckley homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-hinckley/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfig} />;
}
