// config/seo.ts — SEO configuration for OnCall Home Repairs Hinckley
// GBP-aligned structure: every GBP category and service has a corresponding page.

export const seoConfig = {
  // Business Identity
  business: {
    name: "OnCallHomeRepairs",
    legalName: "OnCall Home Repairs",
    industry: "Plumbing",
    description:
      "Emergency plumber matching network connecting customers with vetted, local plumbers 24/7 in Hinckley and Leicestershire",
    foundedYear: null as number | null,
    phone: "0333 240 8428",
    phoneTel: "tel:03332408428",
    email: "info@oncallhomerepairs.co.uk",
    url: "https://oncallhomerepairs.co.uk",
  },

  // Location
  location: {
    address: "27 Wendover Drive",
    city: "Hinckley",
    county: "Leicestershire",
    postcode: "LE10 1UQ",
    country: "United Kingdom",
    countryCode: "GB",
    geo: { lat: 52.5414, lng: -1.3728 },
  },

  // Google Business Profile
  gbp: {
    primaryCategory: "Plumber",
    secondaryCategories: [
      "Gasfitter",
    ],
    placeId: "ChIJLf8fOUOsKkgRNlchm4A2IfU",
    mapsUrl: "https://maps.google.com/?cid=17645219937279493942",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d38811.16617766433!2d-1.3640895!3d52.5569895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x632aac43791fff2d%3A0xf52136809b215736!2sOn%20Call%20Home%20Repairs!5e0!3m2!1sen!2suk!4v1771588492399!5m2!1sen!2suk",
  } as {
    primaryCategory: string;
    secondaryCategories: string[];
    placeId?: string;
    mapsUrl?: string;
    mapEmbed?: string;
  },

  // Services — GBP-aligned categories
  // Every GBP category = website category. Every GBP service = website page.
  services: {
    categories: [
      {
        name: "Plumber",
        slug: "plumber",
        description:
          "Full-service plumbing in Hinckley — emergency repairs, installations, heating, gas safety, and more. 24/7 availability.",
        services: [
          // --- GBP Services (isGBPService: true) ---
          {
            name: "Plumbing Leak Detection",
            slug: "plumbing-leak-detection",
            description: "Professional plumbing leak detection in Hinckley. Find hidden leaks fast with expert plumbers.",
            keywords: ["plumbing leak detection Hinckley", "leak detection Hinckley"],
            isCoreService: true,
          },
          {
            name: "Plumbing Pipe Repair",
            slug: "plumbing-pipe-repair",
            description: "Plumbing pipe repair in Hinckley. Copper, plastic, and lead pipe repairs by vetted plumbers.",
            keywords: ["plumbing pipe repair Hinckley", "pipe repair Hinckley"],
            isCoreService: true,
          },
          {
            name: "Shower Installation",
            slug: "shower-installation",
            description: "Shower installation in Hinckley. Electric, mixer, and thermostatic showers fitted by qualified plumbers.",
            keywords: ["shower installation Hinckley", "shower fitting Hinckley"],
            isCoreService: true,
          },
          {
            name: "Tap Installation",
            slug: "tap-installation",
            description: "Tap installation in Hinckley. Kitchen and bathroom taps fitted by vetted local plumbers.",
            keywords: ["tap installation Hinckley", "tap fitting Hinckley"],
            isCoreService: true,
          },
          {
            name: "Tap Repair",
            slug: "tap-repair",
            description: "Tap repair in Hinckley. Fix dripping, leaking, and stiff taps. Fast, reliable service.",
            keywords: ["tap repair Hinckley", "dripping tap Hinckley"],
            isCoreService: true,
          },
          {
            name: "Toilet Installation",
            slug: "toilet-installation",
            description: "Toilet installation in Hinckley. New toilet fitting, replacements, and upgrades by qualified plumbers.",
            keywords: ["toilet installation Hinckley", "toilet fitting Hinckley"],
            isCoreService: true,
          },
          {
            name: "Toilet Repair",
            slug: "toilet-repair",
            description: "Toilet repair in Hinckley. Cisterns, flush mechanisms, seals, and valve replacements.",
            keywords: ["toilet repair Hinckley", "toilet plumber Hinckley"],
            isCoreService: true,
          },
          {
            name: "Water Heater Installation",
            slug: "water-heater-installation",
            description: "Water heater installation in Hinckley. Immersion heaters, cylinders, and unvented systems fitted.",
            keywords: ["water heater installation Hinckley", "hot water cylinder installation Hinckley"],
            isCoreService: true,
          },
          {
            name: "Outdoor Plumbing System Repair",
            slug: "outdoor-plumbing-system-repair",
            description: "Outdoor plumbing system repair in Hinckley. External pipes, garden taps, and drainage fixes.",
            keywords: ["outdoor plumbing repair Hinckley", "external plumbing Hinckley"],
            isCoreService: true,
          },
          {
            name: "Plumbing Leak Repair",
            slug: "plumbing-leak-repair",
            description: "Plumbing leak repair in Hinckley. Fast fixes for leaking pipes, joints, and fittings.",
            keywords: ["plumbing leak repair Hinckley", "leak repair Hinckley"],
            isCoreService: true,
          },
          {
            name: "Shower Repair",
            slug: "shower-repair",
            description: "Shower repair in Hinckley. Fix leaks, low pressure, temperature issues, and broken valves.",
            keywords: ["shower repair Hinckley", "shower plumber Hinckley"],
            isCoreService: true,
          },
          {
            name: "Waste Disposal Installation",
            slug: "waste-disposal-installation",
            description: "Waste disposal installation in Hinckley. Kitchen waste disposal units fitted by qualified plumbers.",
            keywords: ["waste disposal installation Hinckley", "waste disposal unit Hinckley"],
            isCoreService: true,
          },
          {
            name: "Water Heater Repair",
            slug: "water-heater-repair",
            description: "Water heater repair in Hinckley. Immersion heaters, cylinders, and unvented systems repaired.",
            keywords: ["water heater repair Hinckley", "hot water repair Hinckley"],
            isCoreService: true,
          },
          {
            name: "Water Tank Installation",
            slug: "water-tank-installation",
            description: "Water tank installation in Hinckley. Cold water tanks, header tanks, and storage tank fitting.",
            keywords: ["water tank installation Hinckley", "water tank fitting Hinckley"],
            isCoreService: true,
          },
          {
            name: "Water Tank Repair",
            slug: "water-tank-repair",
            description: "Water tank repair in Hinckley. Fix leaking, corroded, or overflowing water tanks.",
            keywords: ["water tank repair Hinckley", "leaking water tank Hinckley"],
            isCoreService: true,
          },
          {
            name: "Blocked Toilets",
            slug: "blocked-toilets",
            description: "Blocked toilet clearing in Hinckley. Fast, hygienic unblocking by vetted local plumbers.",
            keywords: ["blocked toilets Hinckley", "unblock toilet Hinckley"],
            isCoreService: true,
          },
          {
            name: "Burst Pipes",
            slug: "burst-pipes",
            description: "Burst pipe repair in Hinckley. 24/7 emergency response from vetted plumbers.",
            keywords: ["burst pipes Hinckley", "burst pipe repair Hinckley"],
            isCoreService: true,
          },
          {
            name: "Commercial Gas Engineers",
            slug: "commercial-gas-engineers",
            description: "Commercial gas engineers in Hinckley. Gas Safe registered engineers for business premises.",
            keywords: ["commercial gas engineer Hinckley", "commercial gas safe Hinckley"],
            isCoreService: true,
          },
          {
            name: "Domestic And Commercial",
            slug: "domestic-and-commercial",
            description: "Domestic and commercial plumbing in Hinckley. Full plumbing services for homes and businesses.",
            keywords: ["domestic commercial plumber Hinckley", "commercial plumber Hinckley"],
            isCoreService: true,
          },
          {
            name: "Gas Leaks",
            slug: "gas-leaks",
            description: "Gas leak detection and repair in Hinckley. 24/7 emergency response from Gas Safe engineers.",
            keywords: ["gas leak Hinckley", "gas leak repair Hinckley"],
            isCoreService: true,
          },
          {
            name: "Heating And Gas",
            slug: "heating-and-gas",
            description: "Heating and gas services in Hinckley. Boilers, central heating, and gas appliance work by Gas Safe engineers.",
            keywords: ["heating and gas Hinckley", "gas heating Hinckley"],
            isCoreService: true,
          },
          {
            name: "Heating Engineer",
            slug: "heating-engineer",
            description: "Heating engineer in Hinckley. Central heating repairs, installations, and servicing.",
            keywords: ["heating engineer Hinckley", "heating specialist Hinckley"],
            isCoreService: true,
          },
          {
            name: "Hot Water Systems",
            slug: "hot-water-systems",
            description: "Hot water system repair and installation in Hinckley. Cylinders, immersions, and unvented systems.",
            keywords: ["hot water system Hinckley", "hot water systems Hinckley"],
            isCoreService: true,
          },
          {
            name: "Leaking Taps",
            slug: "leaking-taps",
            description: "Leaking tap repair in Hinckley. Stop dripping taps fast with a vetted local plumber.",
            keywords: ["leaking taps Hinckley", "dripping tap Hinckley"],
            isCoreService: true,
          },
          {
            name: "Call Out",
            slug: "call-out",
            description: "Plumber call out in Hinckley. Emergency and same-day plumber call-outs, 24/7 availability.",
            keywords: ["plumber call out Hinckley", "emergency call out Hinckley"],
            isCoreService: true,
          },
          {
            name: "Leak",
            slug: "leak",
            description: "Leak repair in Hinckley. Leaking pipes, toilets, radiators, and taps fixed by vetted plumbers.",
            keywords: ["leak Hinckley", "plumber leak Hinckley"],
            isCoreService: true,
          },
          {
            name: "Landlord Certificate",
            slug: "landlord-certificate",
            description: "Landlord gas safety certificate in Hinckley. CP12 certificates issued by Gas Safe registered engineers.",
            keywords: ["landlord certificate Hinckley", "CP12 landlord Hinckley"],
            isCoreService: true,
          },
          {
            name: "Gas Safety Certificate",
            slug: "gas-safety-certificate",
            description: "Gas safety certificate in Hinckley. CP12 inspections for landlords and homeowners by Gas Safe engineers.",
            keywords: ["gas safety certificate Hinckley", "CP12 certificate Hinckley"],
            isCoreService: true,
          },
          {
            name: "Boiler And Heating",
            slug: "boiler-and-heating",
            description: "Boiler and heating services in Hinckley. Repairs, installations, and servicing by Gas Safe engineers.",
            keywords: ["boiler and heating Hinckley", "boiler heating services Hinckley"],
            isCoreService: true,
          },
          {
            name: "Commercial Gas",
            slug: "commercial-gas",
            description: "Commercial gas services in Hinckley. Gas Safe engineers for restaurants, offices, and commercial premises.",
            keywords: ["commercial gas Hinckley", "commercial gas services Hinckley"],
            isCoreService: true,
          },
          {
            name: "Emergency Plumbing",
            slug: "emergency-plumbing",
            description: "Emergency plumbing in Hinckley. 24/7 emergency plumber response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumbing Hinckley", "emergency plumber Hinckley"],
            isCoreService: true,
          },
          {
            name: "Kitchen Service",
            slug: "kitchen-service",
            description: "Kitchen plumbing service in Hinckley. Sink installations, dishwasher connections, and kitchen pipe repairs.",
            keywords: ["kitchen plumber Hinckley", "kitchen plumbing service Hinckley"],
            isCoreService: true,
          },
          {
            name: "Plumbing And Heating",
            slug: "plumbing-and-heating",
            description: "Plumbing and heating services in Hinckley. Full-service plumbing and central heating by vetted engineers.",
            keywords: ["plumbing and heating Hinckley", "plumber heating Hinckley"],
            isCoreService: true,
          },
          {
            name: "Safety Certificates",
            slug: "safety-certificates",
            description: "Safety certificates in Hinckley. Gas safety, landlord CP12, and compliance certificates from Gas Safe engineers.",
            keywords: ["safety certificates Hinckley", "gas safety certificates Hinckley"],
            isCoreService: true,
          },
          {
            name: "Water System Repairs",
            slug: "water-system-repairs",
            description: "Water system repairs in Hinckley. Tanks, pipes, cylinders, and plumbing system fixes.",
            keywords: ["water system repairs Hinckley", "water system plumber Hinckley"],
            isCoreService: true,
          },
          // --- Additional topical depth pages (not direct GBP services) ---
          {
            name: "Emergency Plumber",
            slug: "emergency-plumber",
            description: "24-hour emergency plumber in Hinckley. Fast response for burst pipes, leaks, and flooding.",
            keywords: ["emergency plumber Hinckley", "24 hour plumber Hinckley"],
            isCoreService: false,
          },
          {
            name: "Frozen Pipe Repair",
            slug: "frozen-pipe-repair",
            description: "Frozen pipe thawing and repair in Hinckley. Prevent burst pipes this winter.",
            keywords: ["frozen pipe repair Hinckley", "frozen pipes Hinckley"],
            isCoreService: false,
          },
          {
            name: "Flood Response",
            slug: "flood-response",
            description: "Emergency flood response plumber in Hinckley. Rapid water damage control.",
            keywords: ["flood response plumber Hinckley", "emergency flooding Hinckley"],
            isCoreService: false,
          },
          {
            name: "Stopcock Repair",
            slug: "stopcock-repair",
            description: "Stopcock repair and replacement in Hinckley. Regain control of your water supply.",
            keywords: ["stopcock repair Hinckley", "stopcock replacement Hinckley"],
            isCoreService: false,
          },
          {
            name: "Overflow Repair",
            slug: "overflow-repair",
            description: "Overflow pipe repair in Hinckley. Stop water leaks from tanks and cisterns.",
            keywords: ["overflow repair Hinckley", "overflow pipe Hinckley"],
            isCoreService: false,
          },
          {
            name: "Boiler Repair",
            slug: "boiler-repair",
            description: "Expert boiler repair in Hinckley. Gas Safe registered engineers available 24/7.",
            keywords: ["boiler repair Hinckley", "boiler breakdown Hinckley"],
            isCoreService: false,
          },
          {
            name: "Boiler Installation",
            slug: "boiler-installation",
            description: "New boiler installation in Hinckley. Gas Safe registered, competitive pricing.",
            keywords: ["boiler installation Hinckley", "new boiler Hinckley"],
            isCoreService: false,
          },
          {
            name: "Central Heating Repair",
            slug: "central-heating-repair",
            description: "Central heating repair in Hinckley. Radiators, pumps, valves, and full system diagnostics.",
            keywords: ["central heating repair Hinckley", "heating engineer Hinckley"],
            isCoreService: false,
          },
          {
            name: "Boiler Servicing",
            slug: "boiler-servicing",
            description: "Annual boiler servicing in Hinckley. Keep your warranty valid and your boiler efficient.",
            keywords: ["boiler servicing Hinckley", "boiler service Hinckley"],
            isCoreService: false,
          },
          {
            name: "Radiator Repair and Installation",
            slug: "radiator-repair-installation",
            description: "Radiator repair and installation in Hinckley. Fix cold spots, leaks, and add new radiators.",
            keywords: ["radiator repair Hinckley", "radiator installation Hinckley"],
            isCoreService: false,
          },
          {
            name: "Power Flushing",
            slug: "power-flushing",
            description: "Power flushing in Hinckley. Remove sludge and restore heating efficiency.",
            keywords: ["power flushing Hinckley", "power flush Hinckley"],
            isCoreService: false,
          },
          {
            name: "Blocked Drains",
            slug: "blocked-drains",
            description: "Blocked drain clearing in Hinckley. Fast, effective unblocking for homes and businesses.",
            keywords: ["blocked drains Hinckley", "blocked drain Hinckley"],
            isCoreService: false,
          },
          {
            name: "Drain Unblocking",
            slug: "drain-unblocking",
            description: "Professional drain unblocking in Hinckley. High-pressure jetting and manual rodding.",
            keywords: ["drain unblocking Hinckley", "unblock drain Hinckley"],
            isCoreService: false,
          },
          {
            name: "CCTV Drain Survey",
            slug: "cctv-drain-survey",
            description: "CCTV drain survey in Hinckley. Camera inspection to diagnose drainage problems.",
            keywords: ["CCTV drain survey Hinckley", "drain camera Hinckley"],
            isCoreService: false,
          },
          {
            name: "Bathroom Plumbing",
            slug: "bathroom-plumbing",
            description: "Bathroom plumbing in Hinckley. Installations, repairs, and full bathroom fit-outs.",
            keywords: ["bathroom plumber Hinckley", "bathroom plumbing Hinckley"],
            isCoreService: false,
          },
        ],
      },
      {
        name: "Gasfitter",
        slug: "gasfitter",
        description:
          "Gas fitting services in Hinckley — boiler breakdowns, gas appliance installation, and emergency gas work by Gas Safe engineers.",
        services: [
          {
            name: "Boiler Breakdown",
            slug: "boiler-breakdown",
            description: "Boiler breakdown repair in Hinckley. Emergency boiler repairs by Gas Safe registered engineers, 24/7.",
            keywords: ["boiler breakdown Hinckley", "boiler emergency Hinckley"],
            isCoreService: true,
          },
        ],
      },
    ],
  },

  // Service areas
  serviceAreas: [
    "Hinckley",
    "Burbage",
    "Earl Shilton",
    "Barwell",
    "Stoney Stanton",
    "Sapcote",
    "Elmesthorpe",
    "Stoke Golding",
    "Dadlington",
    "Market Bosworth",
    "Desford",
    "Ratby",
    "Groby",
    "Markfield",
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
      "Plumber Hinckley | 24/7 Emergency Plumbing — OnCall Home Repairs",
    defaultDescription:
      "Trusted plumber in Hinckley, Leicestershire. 24/7 emergency plumbing, boiler repair, blocked drains, and more. Vetted, Gas Safe plumbers. Call 0333 240 8428.",
    ogImage: "/og-image.jpg",
    twitterHandle: "",
  },

  // Geo prefix for multi-geo URL structure
  geoPrefix: "/plumber-hinckley",

  // Navigation
  nav: {
    main: [
      { label: "Home", href: "/" },
      { label: "Hinckley", href: "/plumber-hinckley" },
      { label: "Services", href: "/plumber-hinckley/services" },
      { label: "About", href: "/plumber-hinckley/about" },
      { label: "Contact", href: "/plumber-hinckley/contact" },
    ],
    cta: {
      label: "Call 0333 240 8428",
      href: "/plumber-hinckley/contact",
      phone: "tel:03332408428",
    },
  },
};

export type SEOConfig = typeof seoConfig;
