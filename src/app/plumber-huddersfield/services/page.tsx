import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";

export const metadata: Metadata = {
  title: "Plumbing Services Huddersfield | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Huddersfield, West Yorkshire. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-huddersfield/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigHuddersfield} />;
}
