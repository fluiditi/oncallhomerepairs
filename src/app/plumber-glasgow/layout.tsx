import type { Metadata } from "next";
import { seoConfigGlasgow } from "@/config/seo-glasgow";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigGlasgow.seo.defaultTitle,
    template: seoConfigGlasgow.seo.titleTemplate,
  },
  description: seoConfigGlasgow.seo.defaultDescription,
  alternates: { canonical: seoConfigGlasgow.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigGlasgow)),
        }}
      />
      {children}
    </>
  );
}
