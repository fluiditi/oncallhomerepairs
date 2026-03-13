import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfig } from "@/config/seo";

export const metadata: Metadata = {
  title: "Contact Plumber Hinckley | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Hinckley. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-hinckley/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfig} />;
}
