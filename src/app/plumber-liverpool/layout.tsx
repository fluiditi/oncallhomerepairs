import type { Metadata } from "next";
import { seoConfigLiverpool } from "@/config/seo-liverpool";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigLiverpool.seo.defaultTitle,
    template: seoConfigLiverpool.seo.titleTemplate,
  },
  description: seoConfigLiverpool.seo.defaultDescription,
  alternates: { canonical: seoConfigLiverpool.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigLiverpool)),
        }}
      />
      {children}
    </>
  );
}
