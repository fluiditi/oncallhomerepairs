import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigManchester } from "@/config/seo-manchester";

export const metadata: Metadata = {
  title: "Plumbing Services Manchester | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Manchester, Greater Manchester. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-manchester/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigManchester} />;
}
