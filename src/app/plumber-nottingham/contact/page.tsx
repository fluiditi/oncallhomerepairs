import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigNottingham } from "@/config/seo-nottingham";

export const metadata: Metadata = {
  title: "Contact Plumber Nottingham | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Nottingham. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-nottingham/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigNottingham} />;
}
