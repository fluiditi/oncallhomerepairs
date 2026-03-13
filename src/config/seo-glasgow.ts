// config/seo-glasgow.ts — SEO configuration for OnCall Home Repairs Glasgow
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigGlasgow = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Glasgow and surrounding areas",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Glasgow",
    county: "Glasgow",
    postcode: "G1 1AA",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 55.8642, lng: -4.2518 },
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
          "24/7 emergency plumbing in Glasgow — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Glasgow. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Glasgow", "24 hour plumber Glasgow"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Glasgow. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Glasgow", "burst pipe Glasgow"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Glasgow. Find and fix hidden leaks fast.",
            keywords: ["leak detection Glasgow", "water leak repair Glasgow"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Glasgow. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Glasgow", "frozen pipes Glasgow"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Glasgow. Rapid water damage control.",
            keywords: [
              "flood response plumber Glasgow",
              "emergency flooding Glasgow",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Glasgow. Regain control of your water supply.",
            keywords: ["stopcock repair Glasgow", "stopcock replacement Glasgow"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Glasgow. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Glasgow", "overflow pipe Glasgow"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Glasgow, Glasgow",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Glasgow. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Glasgow", "boiler breakdown Glasgow"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Glasgow. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Glasgow",
              "new boiler Glasgow",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Glasgow. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Glasgow",
              "heating engineer Glasgow",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Glasgow. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Glasgow", "boiler service Glasgow"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Glasgow. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Glasgow",
              "radiator installation Glasgow",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Glasgow. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Glasgow", "power flush Glasgow"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Glasgow. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Glasgow",
              "CP12 certificate Glasgow",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Glasgow. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Glasgow",
              "hot water repair Glasgow",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Glasgow",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Glasgow. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Glasgow", "blocked drain Glasgow"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Glasgow. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Glasgow",
              "unblock drain Glasgow",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Glasgow. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Glasgow",
              "drain camera Glasgow",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Glasgow. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Glasgow", "toilet plumber Glasgow"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Glasgow. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Glasgow",
              "unblock toilet Glasgow",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Glasgow",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Glasgow. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Glasgow",
              "bathroom plumbing Glasgow",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Glasgow. Fix dripping taps and install new ones.",
            keywords: ["tap repair Glasgow", "tap replacement Glasgow"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Glasgow. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Glasgow",
              "shower repair Glasgow",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Glasgow. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Glasgow", "kitchen plumbing Glasgow"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Glasgow. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Glasgow",
              "pipe repair Glasgow",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Glasgow",
    "Partick",
    "Hillhead",
    "Govan",
    "Shawlands",
    "Maryhill",
    "Dennistoun",
    "Pollokshields",
    "Cathcart",
    "Jordanhill",
    "Anniesland",
    "Springburn",
    "Bridgeton",
    "Rutherglen",
    "Cambuslang",
    "Bearsden",
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
      "Plumber Glasgow | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Glasgow, Glasgow. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-glasgow",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Glasgow", href: "/plumber-glasgow" },
      { label: "Services", href: "/plumber-glasgow/services" },
      { label: "About", href: "/plumber-glasgow/about" },
      { label: "Contact", href: "/plumber-glasgow/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-glasgow/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigGlasgow = typeof seoConfigGlasgow;
