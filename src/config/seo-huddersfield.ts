// config/seo-huddersfield.ts — SEO configuration for OnCall Home Repairs Huddersfield
// Geo-specific config. Shares structure with seo.ts (Hinckley).

export const seoConfigHuddersfield = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Huddersfield and West Yorkshire",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "44 Wessenden Head Road",
    city: "Huddersfield",
    county: "West Yorkshire",
    postcode: "HD94EU",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 53.5558, lng: -1.9072 },
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
    placeId: "ChIJcy5iKYljHCERbHwZYWpVFBE",
    mapsUrl: "https://maps.google.com/?cid=1243675996524993644",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.1281470587955!2d-1.8541765221922761!3d53.591175072361196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21c1638929622e73%3A0x1154a56a61197c6c!2sOn%20Call%20Home%20Repairs!5e0!3m2!1sen!2suk!4v1771588518000!5m2!1sen!2suk",
  },

  // Services (drives page generation)
  services: {
    categories: [
      {
        name: "Emergency Plumbing",
        slug: "emergency-plumbing",
        description:
          "24/7 emergency plumbing in Huddersfield — burst pipes, leaks, floods, and urgent repairs",
        services: [
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description:
              "24-hour emergency plumber in Huddersfield. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Huddersfield", "24 hour plumber Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Burst Pipe Repair",
            slug: "burst-pipe-repair",
            description:
              "Fast burst pipe repair in Huddersfield. Emergency call-out available 24/7.",
            keywords: ["burst pipe repair Huddersfield", "burst pipe Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Leak Detection and Repair",
            slug: "leak-detection-repair",
            description:
              "Professional leak detection and repair in Huddersfield. Find and fix hidden leaks fast.",
            keywords: ["leak detection Huddersfield", "water leak repair Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description:
              "Frozen pipe thawing and repair in Huddersfield. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Huddersfield", "frozen pipes Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description:
              "Emergency flood response plumber in Huddersfield. Rapid water damage control.",
            keywords: [
              "flood response plumber Huddersfield",
              "emergency flooding Huddersfield",
            ],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description:
              "Stopcock repair and replacement in Huddersfield. Regain control of your water supply.",
            keywords: ["stopcock repair Huddersfield", "stopcock replacement Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description:
              "Overflow pipe repair in Huddersfield. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Huddersfield", "overflow pipe Huddersfield"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Boiler & Heating",
        slug: "boiler-heating",
        description:
          "Boiler repair, installation, and central heating services in Huddersfield, West Yorkshire",
        services: [
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description:
              "Expert boiler repair in Huddersfield. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Huddersfield", "boiler breakdown Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description:
              "New boiler installation in Huddersfield. Gas Safe registered, competitive pricing.",
            keywords: [
              "boiler installation Huddersfield",
              "new boiler Huddersfield",
            ],
            isCoreService: true,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description:
              "Central heating repair in Huddersfield. Radiators, pumps, valves, and full system diagnostics.",
            keywords: [
              "central heating repair Huddersfield",
              "heating engineer Huddersfield",
            ],
            isCoreService: true,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description:
              "Annual boiler servicing in Huddersfield. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Huddersfield", "boiler service Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description:
              "Radiator repair and installation in Huddersfield. Fix cold spots, leaks, and add new radiators.",
            keywords: [
              "radiator repair Huddersfield",
              "radiator installation Huddersfield",
            ],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description:
              "Power flushing in Huddersfield. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Huddersfield", "power flush Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Gas Safety Checks",
            slug: "gas-safety-checks",
            description:
              "Gas safety checks in Huddersfield. CP12 certificates for landlords and homeowners.",
            keywords: [
              "gas safety check Huddersfield",
              "CP12 certificate Huddersfield",
            ],
            isCoreService: false,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description:
              "Water heater repair in Huddersfield. Immersion heaters, cylinders, and unvented systems.",
            keywords: [
              "water heater repair Huddersfield",
              "hot water repair Huddersfield",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Drain Services",
        slug: "drain-services",
        description:
          "Blocked drain clearing, CCTV surveys, and toilet repairs in Huddersfield",
        services: [
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description:
              "Blocked drain clearing in Huddersfield. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Huddersfield", "blocked drain Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description:
              "Professional drain unblocking in Huddersfield. High-pressure jetting and manual rodding.",
            keywords: [
              "drain unblocking Huddersfield",
              "unblock drain Huddersfield",
            ],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description:
              "CCTV drain survey in Huddersfield. Camera inspection to diagnose drainage problems.",
            keywords: [
              "CCTV drain survey Huddersfield",
              "drain camera Huddersfield",
            ],
            isCoreService: false,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description:
              "Toilet repair in Huddersfield. Cisterns, flush mechanisms, seals, and installations.",
            keywords: ["toilet repair Huddersfield", "toilet plumber Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Toilet Unblocking",
            slug: "toilet-unblocking",
            description:
              "Toilet unblocking in Huddersfield. Fast, hygienic clearance of blocked toilets.",
            keywords: [
              "toilet unblocking Huddersfield",
              "unblock toilet Huddersfield",
            ],
            isCoreService: false,
          },
        ],
      },
      {
        name: "General Plumbing",
        slug: "general-plumbing",
        description:
          "Bathroom and kitchen plumbing, tap repairs, shower installation, and pipe work in Huddersfield",
        services: [
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description:
              "Bathroom plumbing in Huddersfield. Installations, repairs, and full bathroom fit-outs.",
            keywords: [
              "bathroom plumber Huddersfield",
              "bathroom plumbing Huddersfield",
            ],
            isCoreService: true,
          },
          {
            name: "Tap Repair and Replacement",
            slug: "tap-repair-replacement",
            description:
              "Tap repair and replacement in Huddersfield. Fix dripping taps and install new ones.",
            keywords: ["tap repair Huddersfield", "tap replacement Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Shower Installation and Repair",
            slug: "shower-installation-repair",
            description:
              "Shower installation and repair in Huddersfield. Electric, mixer, and thermostatic showers.",
            keywords: [
              "shower installation Huddersfield",
              "shower repair Huddersfield",
            ],
            isCoreService: false,
          },
          {
            name: "Kitchen Plumbing",
            slug: "kitchen-plumbing",
            description:
              "Kitchen plumbing in Huddersfield. Sink installations, dishwasher connections, and repairs.",
            keywords: ["kitchen plumber Huddersfield", "kitchen plumbing Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Pipe Replacement",
            slug: "pipe-replacement",
            description:
              "Pipe replacement in Huddersfield. Copper, plastic, and lead pipe upgrades.",
            keywords: [
              "pipe replacement Huddersfield",
              "pipe repair Huddersfield",
            ],
            isCoreService: false,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Huddersfield",
    "Holmfirth",
    "Marsden",
    "Slaithwaite",
    "Meltham",
    "Honley",
    "Almondbury",
    "Lindley",
    "Birkby",
    "Kirkheaton",
    "Mirfield",
    "Linthwaite",
    "Golcar",
    "Milnsbridge",
    "Netherton",
    "Lepton",
    "Kirkburton",
    "Shelley",
    "Denby Dale",
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
      "Plumber Huddersfield | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Huddersfield, West Yorkshire. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-huddersfield",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Huddersfield", href: "/plumber-huddersfield" },
      { label: "Services", href: "/plumber-huddersfield/services" },
      { label: "About", href: "/plumber-huddersfield/about" },
      { label: "Contact", href: "/plumber-huddersfield/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-huddersfield/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfigHuddersfield = typeof seoConfigHuddersfield;
