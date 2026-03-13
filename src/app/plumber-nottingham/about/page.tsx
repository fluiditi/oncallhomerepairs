import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigNottingham } from "@/config/seo-nottingham";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Nottingham | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Nottingham homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-nottingham/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigNottingham} />;
}
