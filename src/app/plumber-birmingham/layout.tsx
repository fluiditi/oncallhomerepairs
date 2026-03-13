import type { Metadata } from "next";
import { seoConfigBirmingham } from "@/config/seo-birmingham";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigBirmingham.seo.defaultTitle,
    template: seoConfigBirmingham.seo.titleTemplate,
  },
  description: seoConfigBirmingham.seo.defaultDescription,
  alternates: { canonical: seoConfigBirmingham.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigBirmingham)),
        }}
      />
      {children}
    </>
  );
}
