import { Metadata } from "next";
import { ServicesHubGeo } from "@/components/services-hub-geo";
import { seoConfigBristol } from "@/config/seo-bristol";

export const metadata: Metadata = {
  title: "Plumbing Services Bristol | OnCall Home Repairs",
  description:
    "Full range of plumbing services in Bristol, Bristol. Emergency plumbing, boiler repair, drain services, and general plumbing. Call 0333 240 8428.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-bristol/services" },
};

export default function ServicesHub() {
  return <ServicesHubGeo config={seoConfigBristol} />;
}
