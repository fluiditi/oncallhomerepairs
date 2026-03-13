// config/seo-birmingham.ts — SEO configuration for OnCall Home Repairs Birmingham
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigBirmingham = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Birmingham and West Midlands",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "TBC",
    city: "Birmingham",
    county: "West Midlands",
    postcode: "B1 1BB",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 52.4862, lng: -1.8904 },
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
          "24/7 emergency plumbing in Birmingham — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Birmingham. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Birmingham", "24 hour plumber Birmingham"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Birmingham. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Birmingham", "burst pipe Birmingham"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Birmingham. Find and fix hidden leaks fast.",
            keywords: ["leak detection Birmingham", "water leak repair Birmingham"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Birmingham. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Birmingham", "frozen pipes Birmingham"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Birmingham. Rapid water damage control.",
            keywords: [
              "flood response plumber Birmingham",
              "emergency flooding Birmingham",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Birmingham. Regain control of your water supply.",
            keywords: ["stopcock repair Birmingham", "stopcock replacement Birmingham"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Birmingham. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Birmingham", "overflow pipe Birmingham"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Birmingham, West Midlands",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Birmingham. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Birmingham", "boiler breakdown Birmingham"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Birmingham. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Birmingham",
              "new boiler Birmingham",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Birmingham. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Birmingham",
              "heating engineer Birmingham",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Birmingham. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Birmingham", "boiler service Birmingham"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Birmingham. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Birmingham",
              "radiator installation Birmingham",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Birmingham. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Birmingham", "power flush Birmingham"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Birmingham. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Birmingham",
              "CP12 certificate Birmingham",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Birmingham. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Birmingham",
              "hot water repair Birmingham",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Birmingham",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Birmingham. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Birmingham", "blocked drain Birmingham"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Birmingham. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Birmingham",
              "unblock drain Birmingham",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Birmingham. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Birmingham",
              "drain camera Birmingham",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Birmingham. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Birmingham", "toilet plumber Birmingham"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Birmingham. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Birmingham",
              "unblock toilet Birmingham",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Birmingham",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Birmingham. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Birmingham",
              "bathroom plumbing Birmingham",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Birmingham. Fix dripping taps and install new ones.",
            keywords: ["tap repair Birmingham", "tap replacement Birmingham"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Birmingham. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Birmingham",
              "shower repair Birmingham",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Birmingham. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Birmingham", "kitchen plumbing Birmingham"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Birmingham. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Birmingham",
              "pipe repair Birmingham",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Birmingham",
    "Edgbaston",
    "Moseley",
    "Kings Heath",
    "Harborne",
    "Selly Oak",
    "Erdington",
    "Sutton Coldfield",
    "Solihull",
    "Hall Green",
    "Handsworth",
    "Aston",
    "Perry Barr",
    "Small Heath",
    "Acocks Green",
    "Bordesley Green",
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
      "Plumber Birmingham | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Birmingham, West Midlands. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-birmingham",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Birmingham", href: "/plumber-birmingham" },
      { label: "Services", href: "/plumber-birmingham/services" },
      { label: "About", href: "/plumber-birmingham/about" },
      { label: "Contact", href: "/plumber-birmingham/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-birmingham/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigBirmingham = typeof seoConfigBirmingham;
