import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigLeeds } from "@/config/seo-leeds";

export const metadata: Metadata = {
  title: "Plumbing Services Leeds | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Leeds, West Yorkshire. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-leeds/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigLeeds} />;
}
