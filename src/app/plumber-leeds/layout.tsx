import type { Metadata } from "next";
import { seoConfigLeeds } from "@/config/seo-leeds";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigLeeds.seo.defaultTitle,
    template: seoConfigLeeds.seo.titleTemplate,
  },
  description: seoConfigLeeds.seo.defaultDescription,
  alternates: { canonical: seoConfigLeeds.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigLeeds)),
        }}
      />
      {children}
    </>
  );
}
