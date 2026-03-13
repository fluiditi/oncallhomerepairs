import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { seoConfigManchester } from "@/config/seo-manchester";

export const metadata: Metadata = {
  title: "Boiler & Heating Manchester | OnCall Home Repairs",
  description:
    "Boiler repair, installation, and heating services in Manchester. Gas Safe registered plumbers. Call 0333 240 8428.",
  alternates: {
    canonical: "https://oncallhomerepairs.co.uk/plumber-manchester/services/boiler-heating",
  },
};

export default function BoilerHeatingPage() {
  return (
    <CategoryPage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-manchester/services" },
        { name: "Boiler & Heating", href: "/plumber-manchester/services/boiler-heating" },
      ]}
      h1="Boiler & Heating Services in Manchester"
      heroIntro={
        <>
          <p>
            A broken boiler or failing heating system can leave your household
            without hot water and warmth — especially during the cold months
            when you need it most. OnCall Home Repairs connects you with Gas
            Safe registered heating engineers across Manchester who can diagnose,
            repair, and install boilers and central heating systems. From an
            urgent{" "}
            <a href="/plumber-manchester/services/boiler-heating/boiler-repair" className="underline hover:text-white">
              boiler repair
            </a>{" "}
            to a planned{" "}
            <a href="/plumber-manchester/services/boiler-heating/boiler-installation" className="underline hover:text-white">
              new boiler installation
            </a>
            , our network has you covered.
          </p>
        </>
      }
      heroImage="/images/hero-boiler-heating.webp"
      overviewHeading="Expert Boiler and Heating Care for Manchester Homes"
      overviewContent={
        <>
          <p>
            Your boiler is the heart of your home's heating and hot water
            supply. When it breaks down, everything stops — showers, washing
            up, and keeping warm. Our network of locally based, Gas Safe
            registered engineers specialises in all major boiler brands
            including Worcester Bosch, Vaillant, Baxi, Ideal, and Viessmann.
            Whether your boiler is making strange noises, losing pressure, or
            has stopped firing altogether, we will connect you with someone who
            can fix it.
          </p>
          <p>
            Beyond emergency repairs, we also match homeowners with engineers
            for routine{" "}
            <a href="/plumber-manchester/services/boiler-heating/boiler-servicing" className="text-primary underline hover:text-primary/80">
              boiler servicing
            </a>
            ,{" "}
            <a href="/plumber-manchester/services/boiler-heating/radiator-repair-installation" className="text-primary underline hover:text-primary/80">
              radiator repairs
            </a>
            , and{" "}
            <a href="/plumber-manchester/services/boiler-heating/power-flushing" className="text-primary underline hover:text-primary/80">
              power flushing
            </a>{" "}
            to keep your system running efficiently. Regular maintenance can
            extend the life of your boiler by years and reduce your energy
            bills — a small investment that pays for itself.
          </p>
          <p>
            If your heating problem turns into an{" "}
            <a href="/plumber-manchester/services/emergency-plumbing" className="text-primary underline hover:text-primary/80">
              emergency plumbing situation
            </a>{" "}
            — for example, a leaking boiler or burst radiator — we can arrange
            urgent attendance too. And if your property needs{" "}
            <a href="/plumber-manchester/services/general-plumbing" className="text-primary underline hover:text-primary/80">
              general plumbing work
            </a>{" "}
            alongside the heating repair, one call handles it all.
          </p>
        </>
      }
      servicesHeading="Our Boiler & Heating Services"
      categorySlug="boiler-heating"
      services={[
        {
          name: "Boiler Repair",
          slug: "boiler-repair",
          description:
            "Fast boiler repair by Gas Safe engineers in Manchester. Fault diagnosis and repair for all major brands — Worcester Bosch, Vaillant, Baxi, Ideal, and more.",
          isCoreService: true,
        },
        {
          name: "Boiler Installation",
          slug: "boiler-installation",
          description:
            "New boiler installation tailored to your home and budget. Combi, system, and regular boilers fitted by Gas Safe registered engineers with full manufacturer warranty.",
          isCoreService: true,
        },
        {
          name: "Central Heating Repair",
          slug: "central-heating-repair",
          description:
            "Full central heating repair and diagnostics. Radiators not heating up, cold spots, noisy pumps, faulty valves, and thermostatic controls all investigated and fixed.",
          isCoreService: true,
        },
        {
          name: "Boiler Servicing",
          slug: "boiler-servicing",
          description:
            "Annual boiler servicing to maintain efficiency and keep your manufacturer warranty valid. Includes safety checks, flue analysis, and a written service report.",
          isCoreService: false,
        },
        {
          name: "Radiator Repair and Installation",
          slug: "radiator-repair-installation",
          description:
            "Leaking radiators repaired, cold radiators bled and balanced, and new radiators installed. Improve your home's warmth and energy efficiency with properly working radiators.",
          isCoreService: false,
        },
        {
          name: "Power Flushing",
          slug: "power-flushing",
          description:
            "Power flushing removes sludge, rust, and limescale from your central heating system. Restores heat output to radiators and improves boiler performance significantly.",
          isCoreService: false,
        },
        {
          name: "Gas Safety Checks",
          slug: "gas-safety-checks",
          description:
            "Gas safety inspections and CP12 certificates for landlords and homeowners. Legally required for rental properties and recommended annually for every home with gas appliances.",
          isCoreService: false,
        },
        {
          name: "Water Heater Repair",
          slug: "water-heater-repair",
          description:
            "Repair and servicing for immersion heaters, hot water cylinders, and unvented systems. Restore your hot water supply without replacing the entire heating system.",
          isCoreService: false,
        },
      ]}
      whyChooseHeading="Why Choose OnCall for Boiler & Heating?"
      differentiators={[
        {
          title: "Gas Safe Registered Engineers",
          description: (
            <p>
              Every heating engineer in our network holds a valid Gas Safe
              registration. This is a legal requirement for anyone working on
              gas boilers, and we verify it before adding any engineer to our
              books.
            </p>
          ),
        },
        {
          title: "All Major Brands Covered",
          description: (
            <p>
              Worcester Bosch, Vaillant, Baxi, Ideal, Viessmann, Glow-worm —
              our engineers have experience with all the leading manufacturers
              and carry common replacement parts.
            </p>
          ),
        },
        {
          title: "No Surprise Charges",
          description: (
            <p>
              You receive a written quote after the engineer assesses your
              boiler. Parts, labour, and VAT are all included. If additional
              work is needed, you will be informed before anything proceeds.
            </p>
          ),
        },
        {
          title: "Same-Day Availability",
          description: (
            <p>
              Boiler breakdowns cannot always wait for a scheduled appointment.
              Many of our network engineers offer same-day and next-day slots
              for urgent heating repairs in Manchester.
            </p>
          ),
        },
        {
          title: "Backed by a Workmanship Guarantee",
          description: (
            <p>
              All repairs and installations carry a workmanship guarantee. If a
              fault reappears or the work is not up to standard, the engineer
              returns to correct it at no extra charge.
            </p>
          ),
        },
      ]}
      crossLinks={[
        {
          name: "Emergency Plumbing",
          href: "/plumber-manchester/services/emergency-plumbing",
          description:
            "Burst pipes, major leaks, and flooding — 24/7 emergency plumber attendance across Manchester.",
        },
        {
          name: "General Plumbing",
          href: "/plumber-manchester/services/general-plumbing",
          description:
            "Bathroom fit-outs, tap repairs, shower installations, and kitchen plumbing by qualified local plumbers.",
        },
      ]}
      serviceAreasHeading="Boiler & Heating Services Across Manchester"
      serviceAreasContent={
        <p>
          Our network of Gas Safe heating engineers covers Manchester and the
          surrounding areas of Greater Manchester. From Didsbury and
          Chorlton to Sale, Bury, and Ashton-under-Lyne, we connect you
          with a qualified engineer close to your property — reducing wait
          times and keeping travel costs down.
        </p>
      }
      faqs={[
        {
          question:
            "What is the difference between a combi boiler and a system boiler?",
          answer:
            "A combi boiler heats water on demand and does not require a separate hot water cylinder, making it ideal for smaller homes. A system boiler stores hot water in a cylinder, which is better for larger households with multiple bathrooms that need hot water from several taps at once. Our engineers can advise which type suits your property.",
        },
        {
          question:
            "How often should I have my boiler serviced?",
          answer:
            "Manufacturers and Gas Safe recommend an annual boiler service. Regular servicing keeps your boiler running efficiently, extends its lifespan, and is usually required to maintain your manufacturer warranty. It also provides peace of mind that your gas appliances are operating safely.",
        },
        {
          question:
            "Why does a Gas Safe registration matter?",
          answer:
            "It is illegal for anyone who is not Gas Safe registered to work on gas appliances in the UK. An unregistered fitter risks gas leaks, carbon monoxide poisoning, and void insurance. Every engineer in our network holds a valid Gas Safe registration, which we verify before they join.",
        },
        {
          question:
            "What are the signs that my boiler needs replacing?",
          answer:
            "Frequent breakdowns, rising energy bills, the boiler taking longer to heat water, unusual noises, and the boiler being more than 12-15 years old are all indicators. If repair costs are climbing, a new, energy-efficient boiler often works out cheaper in the long run. Our engineers can assess your boiler and advise honestly.",
        },
      ]}
      ctaHeading="Boiler Playing Up? Get It Sorted Today."
      ctaContent={
        <p>
          Call OnCall Home Repairs and we will connect you with a Gas Safe
          registered heating engineer in Manchester. Whether it is a repair, a
          service, or a full boiler replacement, we match you with the right
          person for the job.
        </p>
      }
      categoryName="Boiler & Heating"
      categoryDescription="Boiler repair, installation, servicing, and central heating services in Manchester by Gas Safe registered engineers."
      geoPrefix="/plumber-manchester"
      serviceAreas={seoConfigManchester.serviceAreas}
      geoConfig={seoConfigManchester}
    />
  );
}
