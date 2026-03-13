import { Metadata } from "next";
import { ContactContentGeo } from "@/components/contact-content-geo";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";

export const metadata: Metadata = {
  title: "Contact Plumber Huddersfield | OnCall Home Repairs",
  description:
    "Contact OnCall Home Repairs for plumbing in Huddersfield. Call 0333 240 8428 or fill in our form. Available 24/7.",
  alternates: { canonical: "https://oncallhomerepairs.co.uk/plumber-huddersfield/contact" },
};

export default function Contact() {
  return <ContactContentGeo config={seoConfigHuddersfield} />;
}
