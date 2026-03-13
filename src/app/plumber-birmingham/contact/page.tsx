import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigBirmingham } from "@/config/seo-birmingham";

export const metadata: Metadata = {
  title: "Contact Plumber Birmingham | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Birmingham. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-birmingham/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigBirmingham} />;
}
