import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigLeeds } from "@/config/seo-leeds";

export const metadata: Metadata = {
  title: "Contact Plumber Leeds | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Leeds. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-leeds/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigLeeds} />;
}
