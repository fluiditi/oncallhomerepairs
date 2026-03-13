import type { Metadata } from "next";
import { seoConfigNottingham } from "@/config/seo-nottingham";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigNottingham.seo.defaultTitle,
    template: seoConfigNottingham.seo.titleTemplate,
  },
  description: seoConfigNottingham.seo.defaultDescription,
  alternates: { canonical: seoConfigNottingham.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigNottingham)),
        }}
      />
      {children}
    </>
  );
}
