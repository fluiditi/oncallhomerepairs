// JSON-LD schema generators for Local SEO (UK)
// Uses seoConfig as the default data source; accepts optional geo config overrides

import { seoConfig } from "@/config/seo";

// Minimal shape of a geo config — compatible with both seoConfig and seoConfigHuddersfield
export interface GeoConfig {
  business: { url: string; legalName: string; description: string; phone: string; email: string };
  location: { address: string; city: string; county: string; postcode: string; countryCode: string; geo: { lat: number; lng: number } };
  gbp?: { placeId?: string; mapsUrl?: string; mapEmbed?: string; [key: string]: unknown };
  geoPrefix: string;
  serviceAreas: string[];
}

export function generateLocalBusinessSchema(cfg?: GeoConfig) {
  const c = cfg ?? seoConfig;

  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": `${c.business.url}/#business-${c.location.city.toLowerCase()}`,
    name: c.business.legalName,
    description: c.business.description,
    url: c.business.url,
    telephone: c.business.phone,
    email: c.business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: c.location.address,
      addressLocality: c.location.city,
      addressRegion: c.location.county,
      postalCode: c.location.postcode,
      addressCountry: c.location.countryCode,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: c.location.geo.lat,
      longitude: c.location.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: c.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
  };

  // Add GBP-verified fields when available
  if (c.gbp?.mapsUrl) {
    schema.hasMap = c.gbp.mapsUrl;
    schema.sameAs = [c.gbp.mapsUrl];
  }

  return schema;
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${seoConfig.business.url}/#organization`,
    name: seoConfig.business.legalName,
    url: seoConfig.business.url,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: seoConfig.business.phone,
      contactType: "customer service",
      areaServed: seoConfig.location.countryCode,
      availableLanguage: "English",
    },
  };
}

interface ServiceInfo {
  name: string;
  slug: string;
  description: string;
  categorySlug: string;
}

export function generateServiceSchema(service: ServiceInfo, cfg?: GeoConfig) {
  const c = cfg ?? seoConfig;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Plumber",
      "@id": `${c.business.url}/#business-${c.location.city.toLowerCase()}`,
    },
    url: `${c.business.url}${c.geoPrefix}/services/${service.categorySlug}/${service.slug}`,
    areaServed: {
      "@type": "City",
      name: c.location.city,
    },
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  const baseUrl = seoConfig.business.url;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${baseUrl}${item.href}`,
      })),
    ],
  };
}
