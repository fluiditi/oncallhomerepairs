import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigNottingham } from "@/config/seo-nottingham";

export const metadata: Metadata = {
  title: "Plumbing Services Nottingham | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Nottingham, Nottinghamshire. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-nottingham/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigNottingham} />;
}
