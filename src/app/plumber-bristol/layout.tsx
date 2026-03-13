import type { Metadata } from "next";
import { seoConfigBristol } from "@/config/seo-bristol";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigBristol.seo.defaultTitle,
    template: seoConfigBristol.seo.titleTemplate,
  },
  description: seoConfigBristol.seo.defaultDescription,
  alternates: { canonical: seoConfigBristol.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigBristol)),
        }}
      />
      {children}
    </>
  );
}
