import type { Metadata } from "next";
import { seoConfigEdinburgh } from "@/config/seo-edinburgh";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigEdinburgh.seo.defaultTitle,
    template: seoConfigEdinburgh.seo.titleTemplate,
  },
  description: seoConfigEdinburgh.seo.defaultDescription,
  alternates: { canonical: seoConfigEdinburgh.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigEdinburgh)),
        }}
      />
      {children}
    </>
  );
}
