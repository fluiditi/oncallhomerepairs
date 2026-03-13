import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigEdinburgh } from "@/config/seo-edinburgh";

export const metadata: Metadata = {
  title: "Contact Plumber Edinburgh | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Edinburgh. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-edinburgh/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigEdinburgh} />;
}
