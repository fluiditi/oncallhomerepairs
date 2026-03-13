import type { Metadata } from "next";
import { seoConfigManchester } from "@/config/seo-manchester";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigManchester.seo.defaultTitle,
    template: seoConfigManchester.seo.titleTemplate,
  },
  description: seoConfigManchester.seo.defaultDescription,
  alternates: { canonical: seoConfigManchester.geoPrefix },
};

export default function GeoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigManchester)),
        }}
      />
      {children}
    </>
  );
}
