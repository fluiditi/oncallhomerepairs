// config/seo-leeds.ts — SEO configuration for OnCall Home Repairs Leeds
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigLeeds = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Leeds and West Yorkshire",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Leeds",
    county: "West Yorkshire",
    postcode: "LS1 1AA",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 53.8008, lng: -1.5491 },
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
          "24/7 emergency plumbing in Leeds — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Leeds. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Leeds", "24 hour plumber Leeds"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Leeds. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Leeds", "burst pipe Leeds"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Leeds. Find and fix hidden leaks fast.",
            keywords: ["leak detection Leeds", "water leak repair Leeds"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Leeds. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Leeds", "frozen pipes Leeds"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Leeds. Rapid water damage control.",
            keywords: [
              "flood response plumber Leeds",
              "emergency flooding Leeds",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Leeds. Regain control of your water supply.",
            keywords: ["stopcock repair Leeds", "stopcock replacement Leeds"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Leeds. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Leeds", "overflow pipe Leeds"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Leeds, West Yorkshire",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Leeds. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Leeds", "boiler breakdown Leeds"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Leeds. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Leeds",
              "new boiler Leeds",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Leeds. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Leeds",
              "heating engineer Leeds",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Leeds. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Leeds", "boiler service Leeds"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Leeds. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Leeds",
              "radiator installation Leeds",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Leeds. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Leeds", "power flush Leeds"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Leeds. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Leeds",
              "CP12 certificate Leeds",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Leeds. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Leeds",
              "hot water repair Leeds",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Leeds",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Leeds. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Leeds", "blocked drain Leeds"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Leeds. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Leeds",
              "unblock drain Leeds",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Leeds. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Leeds",
              "drain camera Leeds",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Leeds. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Leeds", "toilet plumber Leeds"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Leeds. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Leeds",
              "unblock toilet Leeds",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Leeds",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Leeds. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Leeds",
              "bathroom plumbing Leeds",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Leeds. Fix dripping taps and install new ones.",
            keywords: ["tap repair Leeds", "tap replacement Leeds"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Leeds. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Leeds",
              "shower repair Leeds",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Leeds. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Leeds", "kitchen plumbing Leeds"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Leeds. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Leeds",
              "pipe repair Leeds",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Leeds",
    "Headingley",
    "Chapel Allerton",
    "Roundhay",
    "Horsforth",
    "Morley",
    "Pudsey",
    "Otley",
    "Wetherby",
    "Guiseley",
    "Yeadon",
    "Garforth",
    "Rothwell",
    "Beeston",
    "Armley",
    "Kirkstall",
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
      "Plumber Leeds | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Leeds, West Yorkshire. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-leeds",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Leeds", href: "/plumber-leeds" },
      { label: "Services", href: "/plumber-leeds/services" },
      { label: "About", href: "/plumber-leeds/about" },
      { label: "Contact", href: "/plumber-leeds/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-leeds/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigLeeds = typeof seoConfigLeeds;
