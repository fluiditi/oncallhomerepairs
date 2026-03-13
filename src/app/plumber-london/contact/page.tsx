import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigLondon } from "@/config/seo-london";

export const metadata: Metadata = {
  title: "Contact Plumber London | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in London. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-london/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigLondon} />;
}
