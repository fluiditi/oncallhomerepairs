import type { Metadata } from "next";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";
import { generateLocalBusinessSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: {
    default: seoConfigHuddersfield.seo.defaultTitle,
    template: seoConfigHuddersfield.seo.titleTemplate,
  },
  description: seoConfigHuddersfield.seo.defaultDescription,
  alternates: { canonical: seoConfigHuddersfield.geoPrefix },
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
          __html: JSON.stringify(generateLocalBusinessSchema(seoConfigHuddersfield)),
        }}
      />
      {children}
    </>
  );
}
