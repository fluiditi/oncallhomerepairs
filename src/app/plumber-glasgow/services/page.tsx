import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigGlasgow } from "@/config/seo-glasgow";

export const metadata: Metadata = {
  title: "Plumbing Services Glasgow | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Glasgow, Glasgow. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-glasgow/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigGlasgow} />;
}
