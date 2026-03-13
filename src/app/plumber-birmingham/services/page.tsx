import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigBirmingham } from "@/config/seo-birmingham";

export const metadata: Metadata = {
  title: "Plumbing Services Birmingham | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Birmingham, West Midlands. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-birmingham/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigBirmingham} />;
}
