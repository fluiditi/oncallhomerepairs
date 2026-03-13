import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigLiverpool } from "@/config/seo-liverpool";

export const metadata: Metadata = {
  title: "Plumbing Services Liverpool | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Liverpool, Merseyside. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-liverpool/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigLiverpool} />;
}
