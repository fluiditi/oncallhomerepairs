import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigEdinburgh } from "@/config/seo-edinburgh";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Edinburgh | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Edinburgh homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-edinburgh/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigEdinburgh} />;
}
