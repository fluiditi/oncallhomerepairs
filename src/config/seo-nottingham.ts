// config/seo-nottingham.ts — SEO configuration for OnCall Home Repairs Nottingham
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigNottingham = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Nottingham and Nottinghamshire",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Nottingham",
    county: "Nottinghamshire",
    postcode: "NG1 1AA",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 52.9548, lng: -1.1581 },
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
          "24/7 emergency plumbing in Nottingham — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Nottingham. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Nottingham", "24 hour plumber Nottingham"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Nottingham. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Nottingham", "burst pipe Nottingham"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Nottingham. Find and fix hidden leaks fast.",
            keywords: ["leak detection Nottingham", "water leak repair Nottingham"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Nottingham. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Nottingham", "frozen pipes Nottingham"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Nottingham. Rapid water damage control.",
            keywords: [
              "flood response plumber Nottingham",
              "emergency flooding Nottingham",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Nottingham. Regain control of your water supply.",
            keywords: ["stopcock repair Nottingham", "stopcock replacement Nottingham"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Nottingham. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Nottingham", "overflow pipe Nottingham"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Nottingham, Nottinghamshire",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Nottingham. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Nottingham", "boiler breakdown Nottingham"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Nottingham. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Nottingham",
              "new boiler Nottingham",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Nottingham. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Nottingham",
              "heating engineer Nottingham",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Nottingham. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Nottingham", "boiler service Nottingham"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Nottingham. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Nottingham",
              "radiator installation Nottingham",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Nottingham. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Nottingham", "power flush Nottingham"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Nottingham. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Nottingham",
              "CP12 certificate Nottingham",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Nottingham. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Nottingham",
              "hot water repair Nottingham",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Nottingham",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Nottingham. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Nottingham", "blocked drain Nottingham"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Nottingham. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Nottingham",
              "unblock drain Nottingham",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Nottingham. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Nottingham",
              "drain camera Nottingham",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Nottingham. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Nottingham", "toilet plumber Nottingham"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Nottingham. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Nottingham",
              "unblock toilet Nottingham",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Nottingham",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Nottingham. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Nottingham",
              "bathroom plumbing Nottingham",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Nottingham. Fix dripping taps and install new ones.",
            keywords: ["tap repair Nottingham", "tap replacement Nottingham"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Nottingham. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Nottingham",
              "shower repair Nottingham",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Nottingham. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Nottingham", "kitchen plumbing Nottingham"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Nottingham. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Nottingham",
              "pipe repair Nottingham",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Nottingham",
    "West Bridgford",
    "Beeston",
    "Arnold",
    "Carlton",
    "Hucknall",
    "Mapperley",
    "Sherwood",
    "Bulwell",
    "Gedling",
    "Long Eaton",
    "Stapleford",
    "Ruddington",
    "Bingham",
    "Radcliffe-on-Trent",
    "Netherfield",
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
      "Plumber Nottingham | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Nottingham, Nottinghamshire. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-nottingham",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Nottingham", href: "/plumber-nottingham" },
      { label: "Services", href: "/plumber-nottingham/services" },
      { label: "About", href: "/plumber-nottingham/about" },
      { label: "Contact", href: "/plumber-nottingham/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-nottingham/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigNottingham = typeof seoConfigNottingham;
