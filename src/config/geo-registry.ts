// config/geo-registry.ts — Central registry of all active geos
// Used by the header and other shared components to resolve location-aware links.
// Sorted alphabetically by city name.

import { seoConfig } from "./seo";
import { seoConfigBirmingham } from "./seo-birmingham";
import { seoConfigBristol } from "./seo-bristol";
import { seoConfigEdinburgh } from "./seo-edinburgh";
import { seoConfigGlasgow } from "./seo-glasgow";
import { seoConfigHuddersfield } from "./seo-huddersfield";
import { seoConfigLeeds } from "./seo-leeds";
import { seoConfigLiverpool } from "./seo-liverpool";
import { seoConfigLondon } from "./seo-london";
import { seoConfigManchester } from "./seo-manchester";
import { seoConfigNottingham } from "./seo-nottingham";
import { seoConfigSheffield } from "./seo-sheffield";

export interface GeoEntry {
  city: string;
  county: string;
  slug: string; // e.g. "plumber-hinckley"
  prefix: string; // e.g. "/plumber-hinckley"
  config: typeof seoConfig;
}

export const geoRegistry: GeoEntry[] = [
  {
    city: "Birmingham",
    county: "West Midlands",
    slug: "plumber-birmingham",
    prefix: "/plumber-birmingham",
    config: seoConfigBirmingham,
  },
  {
    city: "Bristol",
    county: "Bristol",
    slug: "plumber-bristol",
    prefix: "/plumber-bristol",
    config: seoConfigBristol,
  },
  {
    city: "Edinburgh",
    county: "Edinburgh",
    slug: "plumber-edinburgh",
    prefix: "/plumber-edinburgh",
    config: seoConfigEdinburgh,
  },
  {
    city: "Glasgow",
    county: "Glasgow",
    slug: "plumber-glasgow",
    prefix: "/plumber-glasgow",
    config: seoConfigGlasgow,
  },
  {
    city: "Hinckley",
    county: "Leicestershire",
    slug: "plumber-hinckley",
    prefix: "/plumber-hinckley",
    config: seoConfig,
  },
  {
    city: "Huddersfield",
    county: "West Yorkshire",
    slug: "plumber-huddersfield",
    prefix: "/plumber-huddersfield",
    config: seoConfigHuddersfield,
  },
  {
    city: "Leeds",
    county: "West Yorkshire",
    slug: "plumber-leeds",
    prefix: "/plumber-leeds",
    config: seoConfigLeeds,
  },
  {
    city: "Liverpool",
    county: "Merseyside",
    slug: "plumber-liverpool",
    prefix: "/plumber-liverpool",
    config: seoConfigLiverpool,
  },
  {
    city: "London",
    county: "Greater London",
    slug: "plumber-london",
    prefix: "/plumber-london",
    config: seoConfigLondon,
  },
  {
    city: "Manchester",
    county: "Greater Manchester",
    slug: "plumber-manchester",
    prefix: "/plumber-manchester",
    config: seoConfigManchester,
  },
  {
    city: "Nottingham",
    county: "Nottinghamshire",
    slug: "plumber-nottingham",
    prefix: "/plumber-nottingham",
    config: seoConfigNottingham,
  },
  {
    city: "Sheffield",
    county: "South Yorkshire",
    slug: "plumber-sheffield",
    prefix: "/plumber-sheffield",
    config: seoConfigSheffield,
  },
];

/** Resolve the active geo from a pathname, or null if on the homepage / no geo match */
export function resolveGeo(pathname: string): GeoEntry | null {
  return geoRegistry.find((g) => pathname.startsWith(g.prefix)) ?? null;
}
