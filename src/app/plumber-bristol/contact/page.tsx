import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigBristol } from "@/config/seo-bristol";

export const metadata: Metadata = {
  title: "Contact Plumber Bristol | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Bristol. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-bristol/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigBristol} />;
}
