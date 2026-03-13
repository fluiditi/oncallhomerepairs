// config/seo-edinburgh.ts — SEO configuration for OnCall Home Repairs Edinburgh
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigEdinburgh = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Edinburgh and surrounding areas",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Edinburgh",
    county: "Edinburgh",
    postcode: "EH1 1AA",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 55.9533, lng: -3.1883 },
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
          "24/7 emergency plumbing in Edinburgh — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Edinburgh. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Edinburgh", "24 hour plumber Edinburgh"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Edinburgh. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Edinburgh", "burst pipe Edinburgh"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Edinburgh. Find and fix hidden leaks fast.",
            keywords: ["leak detection Edinburgh", "water leak repair Edinburgh"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Edinburgh. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Edinburgh", "frozen pipes Edinburgh"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Edinburgh. Rapid water damage control.",
            keywords: [
              "flood response plumber Edinburgh",
              "emergency flooding Edinburgh",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Edinburgh. Regain control of your water supply.",
            keywords: ["stopcock repair Edinburgh", "stopcock replacement Edinburgh"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Edinburgh. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Edinburgh", "overflow pipe Edinburgh"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Edinburgh, Edinburgh",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Edinburgh. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Edinburgh", "boiler breakdown Edinburgh"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Edinburgh. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Edinburgh",
              "new boiler Edinburgh",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Edinburgh. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Edinburgh",
              "heating engineer Edinburgh",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Edinburgh. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Edinburgh", "boiler service Edinburgh"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Edinburgh. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Edinburgh",
              "radiator installation Edinburgh",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Edinburgh. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Edinburgh", "power flush Edinburgh"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Edinburgh. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Edinburgh",
              "CP12 certificate Edinburgh",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Edinburgh. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Edinburgh",
              "hot water repair Edinburgh",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Edinburgh",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Edinburgh. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Edinburgh", "blocked drain Edinburgh"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Edinburgh. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Edinburgh",
              "unblock drain Edinburgh",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Edinburgh. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Edinburgh",
              "drain camera Edinburgh",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Edinburgh. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Edinburgh", "toilet plumber Edinburgh"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Edinburgh. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Edinburgh",
              "unblock toilet Edinburgh",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Edinburgh",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Edinburgh. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Edinburgh",
              "bathroom plumbing Edinburgh",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Edinburgh. Fix dripping taps and install new ones.",
            keywords: ["tap repair Edinburgh", "tap replacement Edinburgh"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Edinburgh. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Edinburgh",
              "shower repair Edinburgh",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Edinburgh. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Edinburgh", "kitchen plumbing Edinburgh"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Edinburgh. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Edinburgh",
              "pipe repair Edinburgh",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Edinburgh",
    "Leith",
    "Morningside",
    "Stockbridge",
    "Bruntsfield",
    "Marchmont",
    "Portobello",
    "Corstorphine",
    "Gorgie",
    "Dalry",
    "Craigmillar",
    "Liberton",
    "Newington",
    "Haymarket",
    "Dean Village",
    "Trinity",
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
      "Plumber Edinburgh | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Edinburgh, Edinburgh. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-edinburgh",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Edinburgh", href: "/plumber-edinburgh" },
      { label: "Services", href: "/plumber-edinburgh/services" },
      { label: "About", href: "/plumber-edinburgh/about" },
      { label: "Contact", href: "/plumber-edinburgh/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-edinburgh/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigEdinburgh = typeof seoConfigEdinburgh;
