// config/seo-liverpool.ts — SEO configuration for OnCall Home Repairs Liverpool
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigLiverpool = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Liverpool and Merseyside",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Liverpool",
    county: "Merseyside",
    postcode: "L1 1AA",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 53.4084, lng: -2.9916 },
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
          "24/7 emergency plumbing in Liverpool — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Liverpool. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Liverpool", "24 hour plumber Liverpool"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Liverpool. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Liverpool", "burst pipe Liverpool"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Liverpool. Find and fix hidden leaks fast.",
            keywords: ["leak detection Liverpool", "water leak repair Liverpool"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Liverpool. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Liverpool", "frozen pipes Liverpool"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Liverpool. Rapid water damage control.",
            keywords: [
              "flood response plumber Liverpool",
              "emergency flooding Liverpool",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Liverpool. Regain control of your water supply.",
            keywords: ["stopcock repair Liverpool", "stopcock replacement Liverpool"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Liverpool. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Liverpool", "overflow pipe Liverpool"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Liverpool, Merseyside",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Liverpool. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Liverpool", "boiler breakdown Liverpool"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Liverpool. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Liverpool",
              "new boiler Liverpool",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Liverpool. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Liverpool",
              "heating engineer Liverpool",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Liverpool. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Liverpool", "boiler service Liverpool"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Liverpool. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Liverpool",
              "radiator installation Liverpool",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Liverpool. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Liverpool", "power flush Liverpool"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Liverpool. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Liverpool",
              "CP12 certificate Liverpool",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Liverpool. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Liverpool",
              "hot water repair Liverpool",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Liverpool",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Liverpool. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Liverpool", "blocked drain Liverpool"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Liverpool. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Liverpool",
              "unblock drain Liverpool",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Liverpool. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Liverpool",
              "drain camera Liverpool",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Liverpool. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Liverpool", "toilet plumber Liverpool"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Liverpool. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Liverpool",
              "unblock toilet Liverpool",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Liverpool",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Liverpool. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Liverpool",
              "bathroom plumbing Liverpool",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Liverpool. Fix dripping taps and install new ones.",
            keywords: ["tap repair Liverpool", "tap replacement Liverpool"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Liverpool. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Liverpool",
              "shower repair Liverpool",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Liverpool. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Liverpool", "kitchen plumbing Liverpool"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Liverpool. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Liverpool",
              "pipe repair Liverpool",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Liverpool",
    "Toxteth",
    "Allerton",
    "Woolton",
    "Wavertree",
    "Walton",
    "Crosby",
    "Bootle",
    "Huyton",
    "Kirkby",
    "Aigburth",
    "Garston",
    "Childwall",
    "West Derby",
    "Anfield",
    "Everton",
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
      "Plumber Liverpool | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Liverpool, Merseyside. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-liverpool",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Liverpool", href: "/plumber-liverpool" },
      { label: "Services", href: "/plumber-liverpool/services" },
      { label: "About", href: "/plumber-liverpool/about" },
      { label: "Contact", href: "/plumber-liverpool/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-liverpool/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigLiverpool = typeof seoConfigLiverpool;
