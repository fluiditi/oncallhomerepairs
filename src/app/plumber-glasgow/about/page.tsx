import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigGlasgow } from "@/config/seo-glasgow";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Glasgow | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Glasgow homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-glasgow/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigGlasgow} />;
}
