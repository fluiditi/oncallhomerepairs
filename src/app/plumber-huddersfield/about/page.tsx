import { Metadata } from "next";
import { AboutContentGeo } from "@/components/about-content-geo";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";

export const metadata: Metadata = {
  title: "About OnCall Home Repairs Huddersfield | Trusted Plumbers",
  description:
    "About OnCall Home Repairs. Connecting Huddersfield homeowners with vetted, Gas Safe plumbers 24/7. Transparent pricing and guaranteed workmanship.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-huddersfield/about" },
};

export default function About() {
  return <AboutContentGeo config={seoConfigHuddersfield} />;
}
