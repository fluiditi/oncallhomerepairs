// config/seo-huddersfield.ts — SEO configuration for OnCall Home Repairs Huddersfield
// GBP-aligned structure: every GBP category and service has a corresponding page.

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
      "Gasfitter",
    ],
    placeId: "ChIJcy5iKYljHCERbHwZYWpVFBE",
    mapsUrl: "https://maps.google.com/?cid=1243675996524993644",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2368.1281470587955!2d-1.8541765221922761!3d53.591175072361196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x21c1638929622e73%3A0x1154a56a61197c6c!2sOn%20Call%20Home%20Repairs!5e0!3m2!1sen!2suk!4v1771588518000!5m2!1sen!2suk",
  },

  // Services — GBP-aligned categories
  services: {
    categories: [
      {
        name: "Plumber",
        slug: "plumber",
        description:
          "Full-service plumbing in Huddersfield — emergency repairs, installations, heating, gas safety, and more. 24/7 availability.",
        services: [
          // --- GBP Services (isCoreService: true) ---
          {
            name: "Plumbing Leak Detection",
            slug: "plumbing-leak-detection",
            description: "Professional plumbing leak detection in Huddersfield. Find hidden leaks fast with expert plumbers.",
            keywords: ["plumbing leak detection Huddersfield", "leak detection Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Plumbing Pipe Repair",
            slug: "plumbing-pipe-repair",
            description: "Plumbing pipe repair in Huddersfield. Copper, plastic, and lead pipe repairs by vetted plumbers.",
            keywords: ["plumbing pipe repair Huddersfield", "pipe repair Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Shower Installation",
            slug: "shower-installation",
            description: "Shower installation in Huddersfield. Electric, mixer, and thermostatic showers fitted by qualified plumbers.",
            keywords: ["shower installation Huddersfield", "shower fitting Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Tap Installation",
            slug: "tap-installation",
            description: "Tap installation in Huddersfield. Kitchen and bathroom taps fitted by vetted local plumbers.",
            keywords: ["tap installation Huddersfield", "tap fitting Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Tap Repair",
            slug: "tap-repair",
            description: "Tap repair in Huddersfield. Fix dripping, leaking, and stiff taps. Fast, reliable service.",
            keywords: ["tap repair Huddersfield", "dripping tap Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Toilet Installation",
            slug: "toilet-installation",
            description: "Toilet installation in Huddersfield. New toilet fitting, replacements, and upgrades by qualified plumbers.",
            keywords: ["toilet installation Huddersfield", "toilet fitting Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description: "Toilet repair in Huddersfield. Cisterns, flush mechanisms, seals, and valve replacements.",
            keywords: ["toilet repair Huddersfield", "toilet plumber Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Water Heater Installation",
            slug: "water-heater-installation",
            description: "Water heater installation in Huddersfield. Immersion heaters, cylinders, and unvented systems fitted.",
            keywords: ["water heater installation Huddersfield", "hot water cylinder installation Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Outdoor Plumbing System Repair",
            slug: "outdoor-plumbing-system-repair",
            description: "Outdoor plumbing system repair in Huddersfield. External pipes, garden taps, and drainage fixes.",
            keywords: ["outdoor plumbing repair Huddersfield", "external plumbing Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Plumbing Leak Repair",
            slug: "plumbing-leak-repair",
            description: "Plumbing leak repair in Huddersfield. Fast fixes for leaking pipes, joints, and fittings.",
            keywords: ["plumbing leak repair Huddersfield", "leak repair Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Shower Repair",
            slug: "shower-repair",
            description: "Shower repair in Huddersfield. Fix leaks, low pressure, temperature issues, and broken valves.",
            keywords: ["shower repair Huddersfield", "shower plumber Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Waste Disposal Installation",
            slug: "waste-disposal-installation",
            description: "Waste disposal installation in Huddersfield. Kitchen waste disposal units fitted by qualified plumbers.",
            keywords: ["waste disposal installation Huddersfield", "waste disposal unit Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description: "Water heater repair in Huddersfield. Immersion heaters, cylinders, and unvented systems repaired.",
            keywords: ["water heater repair Huddersfield", "hot water repair Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Water Tank Installation",
            slug: "water-tank-installation",
            description: "Water tank installation in Huddersfield. Cold water tanks, header tanks, and storage tank fitting.",
            keywords: ["water tank installation Huddersfield", "water tank fitting Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Water Tank Repair",
            slug: "water-tank-repair",
            description: "Water tank repair in Huddersfield. Fix leaking, corroded, or overflowing water tanks.",
            keywords: ["water tank repair Huddersfield", "leaking water tank Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Blocked Toilets",
            slug: "blocked-toilets",
            description: "Blocked toilet clearing in Huddersfield. Fast, hygienic unblocking by vetted local plumbers.",
            keywords: ["blocked toilets Huddersfield", "unblock toilet Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Burst Pipes",
            slug: "burst-pipes",
            description: "Burst pipe repair in Huddersfield. 24/7 emergency response from vetted plumbers.",
            keywords: ["burst pipes Huddersfield", "burst pipe repair Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Commercial Gas Engineers",
            slug: "commercial-gas-engineers",
            description: "Commercial gas engineers in Huddersfield. Gas Safe registered engineers for business premises.",
            keywords: ["commercial gas engineer Huddersfield", "commercial gas safe Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Domestic And Commercial",
            slug: "domestic-and-commercial",
            description: "Domestic and commercial plumbing in Huddersfield. Full plumbing services for homes and businesses.",
            keywords: ["domestic commercial plumber Huddersfield", "commercial plumber Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Gas Leaks",
            slug: "gas-leaks",
            description: "Gas leak detection and repair in Huddersfield. 24/7 emergency response from Gas Safe engineers.",
            keywords: ["gas leak Huddersfield", "gas leak repair Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Heating And Gas",
            slug: "heating-and-gas",
            description: "Heating and gas services in Huddersfield. Boilers, central heating, and gas appliance work by Gas Safe engineers.",
            keywords: ["heating and gas Huddersfield", "gas heating Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Heating Engineer",
            slug: "heating-engineer",
            description: "Heating engineer in Huddersfield. Central heating repairs, installations, and servicing.",
            keywords: ["heating engineer Huddersfield", "heating specialist Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Hot Water Systems",
            slug: "hot-water-systems",
            description: "Hot water system repair and installation in Huddersfield. Cylinders, immersions, and unvented systems.",
            keywords: ["hot water system Huddersfield", "hot water systems Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Leaking Taps",
            slug: "leaking-taps",
            description: "Leaking tap repair in Huddersfield. Stop dripping taps fast with a vetted local plumber.",
            keywords: ["leaking taps Huddersfield", "dripping tap Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Call Out",
            slug: "call-out",
            description: "Plumber call out in Huddersfield. Emergency and same-day plumber call-outs, 24/7 availability.",
            keywords: ["plumber call out Huddersfield", "emergency call out Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Leak",
            slug: "leak",
            description: "Leak repair in Huddersfield. Leaking pipes, toilets, radiators, and taps fixed by vetted plumbers.",
            keywords: ["leak Huddersfield", "plumber leak Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Landlord Certificate",
            slug: "landlord-certificate",
            description: "Landlord gas safety certificate in Huddersfield. CP12 certificates issued by Gas Safe registered engineers.",
            keywords: ["landlord certificate Huddersfield", "CP12 landlord Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Gas Safety Certificate",
            slug: "gas-safety-certificate",
            description: "Gas safety certificate in Huddersfield. CP12 inspections for landlords and homeowners by Gas Safe engineers.",
            keywords: ["gas safety certificate Huddersfield", "CP12 certificate Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Boiler And Heating",
            slug: "boiler-and-heating",
            description: "Boiler and heating services in Huddersfield. Repairs, installations, and servicing by Gas Safe engineers.",
            keywords: ["boiler and heating Huddersfield", "boiler heating services Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Commercial Gas",
            slug: "commercial-gas",
            description: "Commercial gas services in Huddersfield. Gas Safe engineers for restaurants, offices, and commercial premises.",
            keywords: ["commercial gas Huddersfield", "commercial gas services Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Emergency Plumbing",
            slug: "emergency-plumbing",
            description: "Emergency plumbing in Huddersfield. 24/7 emergency plumber response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumbing Huddersfield", "emergency plumber Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Kitchen Service",
            slug: "kitchen-service",
            description: "Kitchen plumbing service in Huddersfield. Sink installations, dishwasher connections, and kitchen pipe repairs.",
            keywords: ["kitchen plumber Huddersfield", "kitchen plumbing service Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Plumbing And Heating",
            slug: "plumbing-and-heating",
            description: "Plumbing and heating services in Huddersfield. Full-service plumbing and central heating by vetted engineers.",
            keywords: ["plumbing and heating Huddersfield", "plumber heating Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Safety Certificates",
            slug: "safety-certificates",
            description: "Safety certificates in Huddersfield. Gas safety, landlord CP12, and compliance certificates from Gas Safe engineers.",
            keywords: ["safety certificates Huddersfield", "gas safety certificates Huddersfield"],
            isCoreService: true,
          },
          {
            name: "Water System Repairs",
            slug: "water-system-repairs",
            description: "Water system repairs in Huddersfield. Tanks, pipes, cylinders, and plumbing system fixes.",
            keywords: ["water system repairs Huddersfield", "water system plumber Huddersfield"],
            isCoreService: true,
          },
          // --- Additional topical depth pages ---
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description: "24-hour emergency plumber in Huddersfield. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Huddersfield", "24 hour plumber Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description: "Frozen pipe thawing and repair in Huddersfield. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Huddersfield", "frozen pipes Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description: "Emergency flood response plumber in Huddersfield. Rapid water damage control.",
            keywords: ["flood response plumber Huddersfield", "emergency flooding Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description: "Stopcock repair and replacement in Huddersfield. Regain control of your water supply.",
            keywords: ["stopcock repair Huddersfield", "stopcock replacement Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description: "Overflow pipe repair in Huddersfield. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Huddersfield", "overflow pipe Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description: "Expert boiler repair in Huddersfield. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Huddersfield", "boiler breakdown Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description: "New boiler installation in Huddersfield. Gas Safe registered, competitive pricing.",
            keywords: ["boiler installation Huddersfield", "new boiler Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description: "Central heating repair in Huddersfield. Radiators, pumps, valves, and full system diagnostics.",
            keywords: ["central heating repair Huddersfield", "heating engineer Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description: "Annual boiler servicing in Huddersfield. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Huddersfield", "boiler service Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description: "Radiator repair and installation in Huddersfield. Fix cold spots, leaks, and add new radiators.",
            keywords: ["radiator repair Huddersfield", "radiator installation Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description: "Power flushing in Huddersfield. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Huddersfield", "power flush Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description: "Blocked drain clearing in Huddersfield. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Huddersfield", "blocked drain Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description: "Professional drain unblocking in Huddersfield. High-pressure jetting and manual rodding.",
            keywords: ["drain unblocking Huddersfield", "unblock drain Huddersfield"],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description: "CCTV drain survey in Huddersfield. Camera inspection to diagnose drainage problems.",
            keywords: ["CCTV drain survey Huddersfield", "drain camera Huddersfield"],
            isCoreService: false,
          },
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description: "Bathroom plumbing in Huddersfield. Installations, repairs, and full bathroom fit-outs.",
            keywords: ["bathroom plumber Huddersfield", "bathroom plumbing Huddersfield"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Gasfitter",
        slug: "gasfitter",
        description:
          "Gas fitting services in Huddersfield — boiler breakdowns, gas appliance installation, and emergency gas work by Gas Safe engineers.",
        services: [
          {
            name: "Boiler Breakdown",
            slug: "boiler-breakdown",
            description: "Boiler breakdown repair in Huddersfield. Emergency boiler repairs by Gas Safe registered engineers, 24/7.",
            keywords: ["boiler breakdown Huddersfield", "boiler emergency Huddersfield"],
            isCoreService: true,
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
