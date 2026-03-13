import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigManchester } from "@/config/seo-manchester";

export const metadata: Metadata = {
  title: "Contact Plumber Manchester | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Manchester. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-manchester/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigManchester} />;
}
