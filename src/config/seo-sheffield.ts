// config/seo-sheffield.ts — SEO configuration for OnCall Home Repairs Sheffield
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigSheffield = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Sheffield and South Yorkshire",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Sheffield",
    county: "South Yorkshire",
    postcode: "S1 1AA",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 53.3811, lng: -1.4701 },
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
          "24/7 emergency plumbing in Sheffield — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Sheffield. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Sheffield", "24 hour plumber Sheffield"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Sheffield. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Sheffield", "burst pipe Sheffield"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Sheffield. Find and fix hidden leaks fast.",
            keywords: ["leak detection Sheffield", "water leak repair Sheffield"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Sheffield. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Sheffield", "frozen pipes Sheffield"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Sheffield. Rapid water damage control.",
            keywords: [
              "flood response plumber Sheffield",
              "emergency flooding Sheffield",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Sheffield. Regain control of your water supply.",
            keywords: ["stopcock repair Sheffield", "stopcock replacement Sheffield"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Sheffield. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Sheffield", "overflow pipe Sheffield"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Sheffield, South Yorkshire",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Sheffield. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Sheffield", "boiler breakdown Sheffield"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Sheffield. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Sheffield",
              "new boiler Sheffield",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Sheffield. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Sheffield",
              "heating engineer Sheffield",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Sheffield. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Sheffield", "boiler service Sheffield"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Sheffield. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Sheffield",
              "radiator installation Sheffield",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Sheffield. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Sheffield", "power flush Sheffield"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Sheffield. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Sheffield",
              "CP12 certificate Sheffield",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Sheffield. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Sheffield",
              "hot water repair Sheffield",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Sheffield",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Sheffield. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Sheffield", "blocked drain Sheffield"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Sheffield. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Sheffield",
              "unblock drain Sheffield",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Sheffield. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Sheffield",
              "drain camera Sheffield",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Sheffield. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Sheffield", "toilet plumber Sheffield"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Sheffield. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Sheffield",
              "unblock toilet Sheffield",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Sheffield",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Sheffield. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Sheffield",
              "bathroom plumbing Sheffield",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Sheffield. Fix dripping taps and install new ones.",
            keywords: ["tap repair Sheffield", "tap replacement Sheffield"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Sheffield. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Sheffield",
              "shower repair Sheffield",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Sheffield. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Sheffield", "kitchen plumbing Sheffield"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Sheffield. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Sheffield",
              "pipe repair Sheffield",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Sheffield",
    "Ecclesall",
    "Crookes",
    "Hillsborough",
    "Dore",
    "Totley",
    "Woodseats",
    "Walkley",
    "Broomhill",
    "Nether Edge",
    "Fulwood",
    "Chapeltown",
    "Stocksbridge",
    "Dronfield",
    "Oughtibridge",
    "Meadowhall",
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
      "Plumber Sheffield | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Sheffield, South Yorkshire. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-sheffield",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Sheffield", href: "/plumber-sheffield" },
      { label: "Services", href: "/plumber-sheffield/services" },
      { label: "About", href: "/plumber-sheffield/about" },
      { label: "Contact", href: "/plumber-sheffield/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-sheffield/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigSheffield = typeof seoConfigSheffield;
