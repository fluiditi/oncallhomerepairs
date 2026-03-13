// config/seo-bristol.ts — SEO configuration for OnCall Home Repairs Bristol
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigBristol = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Bristol and surrounding areas",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Bristol",
    county: "Bristol",
    postcode: "BS1 1AA",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 51.4545, lng: -2.5879 },
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
          "24/7 emergency plumbing in Bristol — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Bristol. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Bristol", "24 hour plumber Bristol"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Bristol. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Bristol", "burst pipe Bristol"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Bristol. Find and fix hidden leaks fast.",
            keywords: ["leak detection Bristol", "water leak repair Bristol"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Bristol. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Bristol", "frozen pipes Bristol"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Bristol. Rapid water damage control.",
            keywords: [
              "flood response plumber Bristol",
              "emergency flooding Bristol",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Bristol. Regain control of your water supply.",
            keywords: ["stopcock repair Bristol", "stopcock replacement Bristol"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Bristol. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Bristol", "overflow pipe Bristol"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Bristol, Bristol",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Bristol. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Bristol", "boiler breakdown Bristol"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Bristol. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Bristol",
              "new boiler Bristol",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Bristol. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Bristol",
              "heating engineer Bristol",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Bristol. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Bristol", "boiler service Bristol"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Bristol. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Bristol",
              "radiator installation Bristol",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Bristol. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Bristol", "power flush Bristol"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Bristol. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Bristol",
              "CP12 certificate Bristol",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Bristol. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Bristol",
              "hot water repair Bristol",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Bristol",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Bristol. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Bristol", "blocked drain Bristol"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Bristol. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Bristol",
              "unblock drain Bristol",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Bristol. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Bristol",
              "drain camera Bristol",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Bristol. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Bristol", "toilet plumber Bristol"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Bristol. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Bristol",
              "unblock toilet Bristol",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Bristol",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Bristol. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Bristol",
              "bathroom plumbing Bristol",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Bristol. Fix dripping taps and install new ones.",
            keywords: ["tap repair Bristol", "tap replacement Bristol"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Bristol. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Bristol",
              "shower repair Bristol",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Bristol. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Bristol", "kitchen plumbing Bristol"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Bristol. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Bristol",
              "pipe repair Bristol",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Bristol",
    "Clifton",
    "Redland",
    "Bishopston",
    "Southville",
    "Bedminster",
    "Easton",
    "Henleaze",
    "Westbury-on-Trym",
    "Horfield",
    "Fishponds",
    "Stoke Bishop",
    "Knowle",
    "Brislington",
    "Keynsham",
    "St Andrews",
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
      "Plumber Bristol | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Bristol, Bristol. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-bristol",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Bristol", href: "/plumber-bristol" },
      { label: "Services", href: "/plumber-bristol/services" },
      { label: "About", href: "/plumber-bristol/about" },
      { label: "Contact", href: "/plumber-bristol/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-bristol/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigBristol = typeof seoConfigBristol;
