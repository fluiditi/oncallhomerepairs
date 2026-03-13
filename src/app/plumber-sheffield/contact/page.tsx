import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigSheffield } from "@/config/seo-sheffield";

export const metadata: Metadata = {
  title: "Contact Plumber Sheffield | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Sheffield. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-sheffield/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigSheffield} />;
}
