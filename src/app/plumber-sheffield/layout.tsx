import type { Metadata } from "next";
import { seoConfigSheffield } from "@/config/seo-sheffield";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigSheffield.seo.defaultTitle,
    template: seoConfigSheffield.seo.titleTemplate,
  },
  description: seoConfigSheffield.seo.defaultDescription,
  alternates: { canonical: seoConfigSheffield.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigSheffield)),
        }}
      />
      {children}
    </>
  );
}
