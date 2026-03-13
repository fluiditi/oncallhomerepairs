import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigEdinburgh } from "@/config/seo-edinburgh";

export const metadata: Metadata = {
  title: "Plumbing Services Edinburgh | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Edinburgh, Edinburgh. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-edinburgh/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigEdinburgh} />;
}
