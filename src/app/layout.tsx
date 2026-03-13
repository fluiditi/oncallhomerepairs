import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { seoConfig } from "@/config/seo";
import { generateOrganizationSchema } from "@/lib/schema";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Emergency Plumber UK | 24/7 Plumbing Services — OnCall Home Repairs",
    template: seoConfig.seo.titleTemplate,
  },
  description:
    "24/7 emergency plumber available across the UK. Vetted, Gas Safe registered plumbers for burst pipes, boiler repairs, blocked drains, and more. Call 0333 240 8428.",
  metadataBase: new URL(seoConfig.business.url),
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} font-sans antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
