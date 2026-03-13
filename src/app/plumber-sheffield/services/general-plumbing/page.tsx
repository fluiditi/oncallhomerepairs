import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { seoConfigSheffield } from "@/config/seo-sheffield";

export const metadata: Metadata = {
  title: "General Plumbing Sheffield | OnCall Home Repairs",
  description:
    "Bathroom and kitchen plumbing, tap repairs, and shower installation in Sheffield. Vetted local plumbers. Call 0333 240 8428.",
  alternates: {
    canonical: "https://oncallhomerepairs.co.uk/plumber-sheffield/services/general-plumbing",
  },
};

export default function GeneralPlumbingPage() {
  return (
    <CategoryPage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-sheffield/services" },
        { name: "General Plumbing", href: "/plumber-sheffield/services/general-plumbing" },
      ]}
      h1="General Plumbing Services in Sheffield"
      heroIntro={
        <>
          <p>
            From a dripping tap keeping you awake at night to a full bathroom
            refit, everyday plumbing jobs are best left to qualified
            professionals. OnCall Home Repairs connects you with vetted, local
            plumbers in Sheffield for all your household plumbing needs. Whether
            you are planning a{" "}
            <a href="/plumber-sheffield/services/general-plumbing/bathroom-plumbing" className="underline hover:text-white">
              bathroom installation
            </a>{" "}
            or just need a{" "}
            <a href="/plumber-sheffield/services/general-plumbing/tap-repair-replacement" className="underline hover:text-white">
              tap replaced
            </a>
            , we match you with the right tradesperson for the job.
          </p>
        </>
      }
      heroImage="/images/hero-general-plumbing.webp"
      overviewHeading="Trusted Plumbers for Everyday Household Jobs"
      overviewContent={
        <>
          <p>
            General plumbing covers the day-to-day work that keeps your home
            running smoothly: fixing leaky taps, installing new showers,
            connecting dishwashers, and replacing worn-out pipework. These jobs
            may not feel as urgent as a burst pipe, but left unattended they
            waste water, push up bills, and can cause hidden damage behind
            walls and under floors.
          </p>
          <p>
            Our network of plumbers in Sheffield handles everything from small
            repairs to larger projects like{" "}
            <a href="/plumber-sheffield/services/general-plumbing/bathroom-plumbing" className="text-primary underline hover:text-primary/80">
              bathroom fit-outs
            </a>{" "}
            and{" "}
            <a href="/plumber-sheffield/services/general-plumbing/kitchen-plumbing" className="text-primary underline hover:text-primary/80">
              kitchen plumbing
            </a>
            . Every plumber is qualified, insured, and experienced in working
            with modern and older South Yorkshire properties alike. You get a
            clear quote before work begins, and a workmanship guarantee once it
            is finished.
          </p>
          <p>
            If your plumbing job uncovers a deeper issue — perhaps old lead
            pipework that needs{" "}
            <a href="/plumber-sheffield/services/general-plumbing/pipe-replacement" className="text-primary underline hover:text-primary/80">
              replacing
            </a>
            , or a problem that needs{" "}
            <a href="/plumber-sheffield/services/drain-services" className="text-primary underline hover:text-primary/80">
              drainage investigation
            </a>{" "}
            — we can coordinate the right specialist. And if your{" "}
            <a href="/plumber-sheffield/services/boiler-heating" className="text-primary underline hover:text-primary/80">
              boiler or heating
            </a>{" "}
            needs attention at the same time, one call to OnCall sorts it all
            out.
          </p>
        </>
      }
      servicesHeading="Our General Plumbing Services"
      categorySlug="general-plumbing"
      services={[
        {
          name: "Bathroom Plumbing",
          slug: "bathroom-plumbing",
          description:
            "Full bathroom plumbing for new builds and refits. Basin, bath, toilet, and shower connections installed to building regulations by experienced local plumbers.",
          isCoreService: true,
        },
        {
          name: "Tap Repair and Replacement",
          slug: "tap-repair-replacement",
          description:
            "Dripping tap driving you mad? Washer replacements, cartridge swaps, and new tap installations for kitchens and bathrooms. Quick, tidy work with lasting results.",
          isCoreService: false,
        },
        {
          name: "Shower Installation and Repair",
          slug: "shower-installation-repair",
          description:
            "Electric, mixer, and thermostatic shower installation and repair. Includes tray fitting, screen installation, and pump upgrades for low-pressure systems.",
          isCoreService: false,
        },
        {
          name: "Kitchen Plumbing",
          slug: "kitchen-plumbing",
          description:
            "Sink fitting, waste disposal connections, dishwasher and washing machine plumbing, and under-sink pipework. Everything your kitchen needs to run properly.",
          isCoreService: false,
        },
        {
          name: "Pipe Replacement",
          slug: "pipe-replacement",
          description:
            "Copper, plastic, and lead pipe replacement for ageing Sheffield properties. Upgrade old pipework to meet current standards and improve water pressure and quality.",
          isCoreService: false,
        },
      ]}
      whyChooseHeading="Why Choose OnCall for General Plumbing?"
      differentiators={[
        {
          title: "Qualified, Insured Plumbers",
          description: (
            <p>
              Every plumber in our network holds the right qualifications and
              carries public liability insurance. You can trust that the person
              working in your home knows what they are doing and is covered if
              anything goes wrong.
            </p>
          ),
        },
        {
          title: "One Call, One Contact",
          description: (
            <p>
              You do not need to search through directories or chase multiple
              quotes. Tell us what you need, and we connect you with a suitable
              plumber who is available when you need them.
            </p>
          ),
        },
        {
          title: "Fair, Upfront Quotes",
          description: (
            <p>
              Our plumbers quote before they start. Labour, materials, and VAT
              are all included in the price. If the scope changes, you will be
              told and given a revised quote before any additional work is
              carried out.
            </p>
          ),
        },
        {
          title: "Tidy, Respectful Workmanship",
          description: (
            <p>
              Our plumbers protect your floors and surfaces, and clean up after
              themselves when the job is done. Your home is left as they found
              it — except with working plumbing.
            </p>
          ),
        },
        {
          title: "Guaranteed Work",
          description: (
            <p>
              All work carried out through our network comes with a workmanship
              guarantee. If something is not right, the plumber returns and puts
              it right at no extra cost to you.
            </p>
          ),
        },
      ]}
      crossLinks={[
        {
          name: "Boiler & Heating Services",
          href: "/plumber-sheffield/services/boiler-heating",
          description:
            "Boiler repairs, installations, servicing, and central heating work by Gas Safe registered engineers.",
        },
        {
          name: "Drain Services",
          href: "/plumber-sheffield/services/drain-services",
          description:
            "Blocked drains, CCTV surveys, and toilet unblocking — professional drainage specialists across Sheffield.",
        },
      ]}
      serviceAreasHeading="General Plumbing Across Sheffield and Beyond"
      serviceAreasContent={
        <p>
          Our network of plumbers serves Sheffield and the surrounding towns
          and villages across South Yorkshire. Whether your property
          is in Dore, Chapeltown, Nether Edge, or Dronfield, we
          connect you with a qualified, local plumber who can attend at a time
          that suits you.
        </p>
      }
      faqs={[
        {
          question:
            "How long does a bathroom refit take from start to finish?",
          answer:
            "A typical bathroom refit in a Sheffield home takes between five and ten working days, depending on the scope of work. A straightforward like-for-like replacement of suite and tiling is quicker, while reconfiguring the layout, moving pipework, or adding underfloor heating will take longer. Your plumber will give you a realistic timeline before work begins.",
        },
        {
          question:
            "How much does it cost to repair or replace a tap?",
          answer:
            "A simple washer or cartridge replacement on an existing tap is a relatively quick job. Fitting a new tap depends on the model and whether any pipe modifications are needed underneath. Your plumber will assess the tap, explain what is required, and give you a fixed quote before proceeding.",
        },
        {
          question:
            "What kitchen plumbing work can your network handle?",
          answer:
            "Our plumbers install and connect kitchen sinks, dishwashers, washing machines, and waste disposal units. They also handle under-sink pipework repairs, water filter installations, and the plumbing side of full kitchen refits. If gas work is needed for a range cooker, we connect you with a Gas Safe registered engineer.",
        },
        {
          question:
            "How do I know if my pipes need replacing?",
          answer:
            "Discoloured water, frequent leaks at joints, low water pressure, and visible corrosion on exposed pipes are all signs your pipework may need attention. Properties in Sheffield with original lead pipework should have it replaced for health and safety reasons. A plumber can inspect your system and advise on whether a partial or full re-pipe is needed.",
        },
      ]}
      ctaHeading="Need a Plumber in Sheffield? We Will Find You One."
      ctaContent={
        <p>
          Call OnCall Home Repairs and tell us what you need. We will match you
          with a qualified, vetted plumber in Sheffield who can handle the job —
          whether it is a quick repair or a bigger project.
        </p>
      }
      categoryName="General Plumbing"
      categoryDescription="Bathroom and kitchen plumbing, tap repairs, shower installations, and pipe replacements in Sheffield by vetted, qualified plumbers."
      geoPrefix="/plumber-sheffield"
      serviceAreas={seoConfigSheffield.serviceAreas}
      geoConfig={seoConfigSheffield}
    />
  );
}
