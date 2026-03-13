// config/seo-london.ts — SEO configuration for OnCall Home Repairs London
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigLondon = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in London and Greater London",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "London",
    county: "Greater London",
    postcode: "EC1A 1BB",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 51.5074, lng: -0.1278 },
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
          "24/7 emergency plumbing in London — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in London. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber London", "24 hour plumber London"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in London. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair London", "burst pipe London"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in London. Find and fix hidden leaks fast.",
            keywords: ["leak detection London", "water leak repair London"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in London. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair London", "frozen pipes London"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in London. Rapid water damage control.",
            keywords: [
              "flood response plumber London",
              "emergency flooding London",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in London. Regain control of your water supply.",
            keywords: ["stopcock repair London", "stopcock replacement London"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in London. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair London", "overflow pipe London"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in London, Greater London",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in London. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair London", "boiler breakdown London"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in London. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation London",
              "new boiler London",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in London. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair London",
              "heating engineer London",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in London. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing London", "boiler service London"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in London. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair London",
              "radiator installation London",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in London. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing London", "power flush London"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in London. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check London",
              "CP12 certificate London",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in London. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair London",
              "hot water repair London",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in London",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in London. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains London", "blocked drain London"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in London. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking London",
              "unblock drain London",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in London. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey London",
              "drain camera London",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in London. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair London", "toilet plumber London"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in London. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking London",
              "unblock toilet London",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in London",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in London. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber London",
              "bathroom plumbing London",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in London. Fix dripping taps and install new ones.",
            keywords: ["tap repair London", "tap replacement London"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in London. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation London",
              "shower repair London",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in London. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber London", "kitchen plumbing London"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in London. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement London",
              "pipe repair London",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "London",
    "Westminster",
    "Camden",
    "Islington",
    "Hackney",
    "Southwark",
    "Lambeth",
    "Greenwich",
    "Wandsworth",
    "Hammersmith",
    "Kensington",
    "Ealing",
    "Brent",
    "Haringey",
    "Newham",
    "Croydon",
    "Bromley",
    "Tower Hamlets",
    "Lewisham",
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
      "Plumber London | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in London, Greater London. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-london",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "London", href: "/plumber-london" },
      { label: "Services", href: "/plumber-london/services" },
      { label: "About", href: "/plumber-london/about" },
      { label: "Contact", href: "/plumber-london/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-london/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigLondon = typeof seoConfigLondon;
