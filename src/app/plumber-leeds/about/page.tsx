import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigLeeds } from "@/config/seo-leeds";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Leeds | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Leeds homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-leeds/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigLeeds} />;
}
