import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigSheffield } from "@/config/seo-sheffield";

export const metadata: Metadata = {
  title: "Plumbing Services Sheffield | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Sheffield, South Yorkshire. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-sheffield/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigSheffield} />;
}
