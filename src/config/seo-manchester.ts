// config/seo-manchester.ts — SEO configuration for OnCall Home Repairs Manchester
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigManchester = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Manchester and Greater Manchester",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Manchester",
    county: "Greater Manchester",
    postcode: "M1 1AA",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 53.4808, lng: -2.2426 },
  },

  // Google Business Profile
  gbp: {
    primaryCategory: "Plumber",
    secondaryCategories: [
      "Emergency Plumber",
      "Plumbing Contractor",
      "Drain Cleaning Service",
      "Boiler Repair Service",
    ],
  },

  // Services (drives page generation)
  services: {
    categories: [
      {
        name: "Emergency Plumbing",
        slug: "emergency-plumbing",
        description:
          "24/7 emergency plumbing in Manchester — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Manchester. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Manchester", "24 hour plumber Manchester"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Manchester. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Manchester", "burst pipe Manchester"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Manchester. Find and fix hidden leaks fast.",
            keywords: ["leak detection Manchester", "water leak repair Manchester"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Manchester. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Manchester", "frozen pipes Manchester"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Manchester. Rapid water damage control.",
            keywords: [
              "flood response plumber Manchester",
              "emergency flooding Manchester",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Manchester. Regain control of your water supply.",
            keywords: ["stopcock repair Manchester", "stopcock replacement Manchester"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Manchester. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Manchester", "overflow pipe Manchester"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Manchester, Greater Manchester",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Manchester. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Manchester", "boiler breakdown Manchester"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Manchester. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Manchester",
              "new boiler Manchester",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Manchester. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Manchester",
              "heating engineer Manchester",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Manchester. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Manchester", "boiler service Manchester"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Manchester. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Manchester",
              "radiator installation Manchester",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Manchester. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Manchester", "power flush Manchester"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Manchester. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Manchester",
              "CP12 certificate Manchester",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Manchester. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Manchester",
              "hot water repair Manchester",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Manchester",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Manchester. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Manchester", "blocked drain Manchester"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Manchester. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Manchester",
              "unblock drain Manchester",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Manchester. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Manchester",
              "drain camera Manchester",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Manchester. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Manchester", "toilet plumber Manchester"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Manchester. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Manchester",
              "unblock toilet Manchester",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Manchester",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Manchester. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Manchester",
              "bathroom plumbing Manchester",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Manchester. Fix dripping taps and install new ones.",
            keywords: ["tap repair Manchester", "tap replacement Manchester"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Manchester. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Manchester",
              "shower repair Manchester",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Manchester. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Manchester", "kitchen plumbing Manchester"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Manchester. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Manchester",
              "pipe repair Manchester",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Manchester",
    "Didsbury",
    "Chorlton",
    "Salford",
    "Stretford",
    "Stockport",
    "Altrincham",
    "Sale",
    "Rochdale",
    "Oldham",
    "Bury",
    "Bolton",
    "Ashton-under-Lyne",
    "Trafford",
    "Eccles",
    "Prestwich",
  ],

  // Differentiators
  differentiators: {
    fiveStarReviews: null as number | null,
    averageResponseTime: null as string | null,
    freeEstimates: null as boolean | null,
    tripFee: null as boolean | null,
    afterHours: true,
    twentyFourSeven: true,
    twentyFourSevenDetail:
      "Day or night, weekends or bank holidays — ready to respond when you need us most",
    yearsInBusiness: null as number | null,
    guarantees: "Workmanship guarantee — if something isn't right, we come back and put it right at no extra cost",
    transparentPricing: true,
    transparentPricingDetail:
      "Clear, upfront quote before any work begins. No hidden fees or surprise charges.",
    communication: true,
    communicationDetail: "Constant communication with customers until the job is done",
    vettedNetwork: true,
    vettedNetworkDetail:
      "All plumbers in our network are qualified, Gas Safe registered, and fully insured",
    locallyOwned: null as boolean | null,
    familyOwned: null as boolean | null,
    keyDifferentiator:
      "Network of vetted emergency plumbers available 24/7 with transparent pricing and guaranteed workmanship",
  },

  // SEO Metadata defaults
  seo: {
    titleTemplate: "%s | OnCall Home Repairs",
    defaultTitle:
      "Plumber Manchester | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Manchester, Greater Manchester. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-manchester",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Manchester", href: "/plumber-manchester" },
      { label: "Services", href: "/plumber-manchester/services" },
      { label: "About", href: "/plumber-manchester/about" },
      { label: "Contact", href: "/plumber-manchester/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-manchester/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigManchester = typeof seoConfigManchester;
