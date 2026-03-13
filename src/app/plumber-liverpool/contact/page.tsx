import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigLiverpool } from "@/config/seo-liverpool";

export const metadata: Metadata = {
  title: "Contact Plumber Liverpool | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Liverpool. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-liverpool/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigLiverpool} />;
}
