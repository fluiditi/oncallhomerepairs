import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigLondon } from "@/config/seo-london";

export const metadata: Metadata = {
  title: "Plumbing Services London | OnCall Home Repairs",
  description:
    "Full range of plumbing services in London, Greater London. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-london/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigLondon} />;
}
