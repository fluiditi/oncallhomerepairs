import type { Metadata } from "next";
import { seoConfig } from "@/config/seo";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfig.seo.defaultTitle,
    template: seoConfig.seo.titleTemplate,
  },
  description: seoConfig.seo.defaultDescription,
  alternates: { canonical: seoConfig.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema()),
        }}
      />
      {children}
    </>
  );
}
