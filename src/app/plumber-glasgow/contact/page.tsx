import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigGlasgow } from "@/config/seo-glasgow";

export const metadata: Metadata = {
  title: "Contact Plumber Glasgow | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Glasgow. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-glasgow/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigGlasgow} />;
}
