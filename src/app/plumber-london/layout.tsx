import type { Metadata } from "next";
import { seoConfigLondon } from "@/config/seo-london";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigLondon.seo.defaultTitle,
    template: seoConfigLondon.seo.titleTemplate,
  },
  description: seoConfigLondon.seo.defaultDescription,
  alternates: { canonical: seoConfigLondon.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigLondon)),
        }}
      />
      {children}
    </>
  );
}
