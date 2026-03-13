import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { seoConfigSheffield } from "@/config/seo-sheffield";

export const metadata: Metadata = {
  title: "Drain Services Sheffield | OnCall Home Repairs",
  description:
    "Blocked drains, CCTV surveys, and drain unblocking in Sheffield. Fast response, fair pricing. Call 0333 240 8428.",
  alternates: {
    canonical: "https://oncallhomerepairs.co.uk/plumber-sheffield/services/drain-services",
  },
};

export default function DrainServicesPage() {
  return (
    <CategoryPage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-sheffield/services" },
        { name: "Drain Services", href: "/plumber-sheffield/services/drain-services" },
      ]}
      h1="Drain Services in Sheffield"
      heroIntro={
        <>
          <p>
            A blocked or slow-running drain disrupts your entire household —
            from sinks that will not empty to toilets that back up at the worst
            possible moment. OnCall Home Repairs connects you with experienced
            drainage specialists in Sheffield who can clear blockages, carry out{" "}
            <a href="/plumber-sheffield/services/drain-services/cctv-drain-survey" className="underline hover:text-white">
              CCTV drain surveys
            </a>
            , and repair damaged drains quickly and hygienically. Our network of
            vetted plumbers is available for both emergency call-outs and
            planned drainage work.
          </p>
        </>
      }
      heroImage="/images/hero-drain-services.webp"
      overviewHeading="Professional Drain Care for Sheffield Properties"
      overviewContent={
        <>
          <p>
            Drainage problems are among the most common — and most unpleasant —
            plumbing issues homeowners face. Fat and grease build-up, tree root
            intrusion, collapsed pipes, and foreign objects flushed down
            toilets are all regular causes of blockages. Left untreated, a
            blocked drain can lead to foul odours, slow drainage across the
            property, and in serious cases, sewage backing up into your home.
          </p>
          <p>
            Our network plumbers use professional-grade equipment including
            high-pressure water jetting, electro-mechanical drain rods, and
            CCTV camera systems to find and fix the problem at its source.
            Whether it is a straightforward{" "}
            <a href="/plumber-sheffield/services/drain-services/blocked-drains" className="text-primary underline hover:text-primary/80">
              blocked drain
            </a>{" "}
            that needs clearing or a more involved investigation using a{" "}
            <a href="/plumber-sheffield/services/drain-services/cctv-drain-survey" className="text-primary underline hover:text-primary/80">
              CCTV drain survey
            </a>
            , we match you with the right person for the job.
          </p>
          <p>
            Drain blockages sometimes reveal deeper plumbing faults. If the
            problem extends to your{" "}
            <a href="/plumber-sheffield/services/general-plumbing" className="text-primary underline hover:text-primary/80">
              kitchen or bathroom plumbing
            </a>
            , or if a severe blockage creates an{" "}
            <a href="/plumber-sheffield/services/emergency-plumbing" className="text-primary underline hover:text-primary/80">
              emergency plumbing situation
            </a>
            , we can coordinate the right specialist through a single call.
            Every plumber in our network is fully insured and provides a clear
            quote before work begins.
          </p>
        </>
      }
      servicesHeading="Our Drain Services"
      categorySlug="drain-services"
      services={[
        {
          name: "Blocked Drains",
          slug: "blocked-drains",
          description:
            "Fast blocked drain clearance for kitchens, bathrooms, and external drains. Our network plumbers identify the cause and clear the blockage using professional equipment.",
          isCoreService: true,
        },
        {
          name: "Drain Unblocking",
          slug: "drain-unblocking",
          description:
            "High-pressure water jetting and manual rodding to unblock stubborn drains. Effective for grease, scale, root intrusion, and built-up debris in domestic drainage systems.",
          isCoreService: false,
        },
        {
          name: "CCTV Drain Survey",
          slug: "cctv-drain-survey",
          description:
            "Camera inspection of your drainage system to locate blockages, cracks, root intrusion, and collapsed sections. Provides a visual record and helps plan the most effective repair.",
          isCoreService: false,
        },
        {
          name: "Toilet Repair",
          slug: "toilet-repair",
          description:
            "Cistern repairs, flush mechanism replacements, broken seats, leaking seals, and full toilet installations. Quiet, efficient repairs that last.",
          isCoreService: false,
        },
        {
          name: "Toilet Unblocking",
          slug: "toilet-unblocking",
          description:
            "Hygienic toilet unblocking by trained plumbers. Whether it is a simple obstruction or a deeper drainage fault, the blockage is cleared thoroughly and safely.",
          isCoreService: false,
        },
      ]}
      whyChooseHeading="Why Choose OnCall for Drain Services?"
      differentiators={[
        {
          title: "Professional Drain Equipment",
          description: (
            <p>
              Our network plumbers carry high-pressure jetting machines, CCTV
              cameras, and electro-mechanical rods — not just a household
              plunger. The right tools mean the blockage is cleared properly
              the first time.
            </p>
          ),
        },
        {
          title: "Hygienic, Respectful Service",
          description: (
            <p>
              Drain work is messy by nature. Our plumbers protect your floors,
              clean up after themselves, and treat your property with respect.
              You will not be left with a mess to deal with once the job is
              done.
            </p>
          ),
        },
        {
          title: "Clear Pricing, No Hidden Fees",
          description: (
            <p>
              You receive a quote before any drain work begins. If the plumber
              discovers additional problems during the investigation, they will
              explain the situation and provide an updated quote for your
              approval.
            </p>
          ),
        },
        {
          title: "Emergency and Planned Availability",
          description: (
            <p>
              Urgent blockage flooding your kitchen? Or a slow drain you have
              been meaning to sort out? We match you with a plumber for both
              emergency and scheduled drain work across Sheffield.
            </p>
          ),
        },
        {
          title: "Diagnosis Before Repair",
          description: (
            <p>
              Rather than guessing, our plumbers investigate the root cause of
              your drainage issue. A CCTV survey can reveal problems invisible
              from the surface — saving you from repeated call-outs for the
              same fault.
            </p>
          ),
        },
      ]}
      crossLinks={[
        {
          name: "Emergency Plumbing",
          href: "/plumber-sheffield/services/emergency-plumbing",
          description:
            "Severe drain backups, flooding, and burst pipes — 24/7 emergency attendance when you need it most.",
        },
        {
          name: "General Plumbing",
          href: "/plumber-sheffield/services/general-plumbing",
          description:
            "Tap repairs, bathroom plumbing, kitchen installations, and pipe replacements by qualified local plumbers.",
        },
      ]}
      serviceAreasHeading="Drain Services Across Sheffield and Surrounding Areas"
      serviceAreasContent={
        <p>
          Our network of drain specialists covers Sheffield and the nearby
          villages of South Yorkshire. From Ecclesall and Hillsborough to
          Totley, Woodseats, and Broomhill, we connect you with a drainage
          professional who can attend your property promptly — whether it is a
          scheduled survey or an urgent blockage.
        </p>
      }
      faqs={[
        {
          question:
            "What are the signs that I have a blocked drain?",
          answer:
            "Slow-draining sinks and baths, gurgling noises from plug holes, unpleasant smells from drains, and water pooling around external drain covers are all common signs. If you notice multiple fixtures draining slowly at the same time, the blockage is likely in the main drain rather than an individual pipe.",
        },
        {
          question:
            "How much does a CCTV drain survey cost in Sheffield?",
          answer:
            "The cost depends on the length and accessibility of the drainage run. A standard domestic survey for a typical Sheffield property is straightforward for our network plumbers. You will receive a clear quote before the camera goes in, and the survey includes a recorded video of the findings that you can keep for your records.",
        },
        {
          question:
            "How can I prevent drains from blocking in the first place?",
          answer:
            "Never pour cooking fat or oil down the sink — let it cool and dispose of it in the bin. Use drain guards to catch hair in showers and baths. Avoid flushing wet wipes, cotton buds, or sanitary products down the toilet, even if the packaging says flushable. A periodic hot water flush with a small amount of washing up liquid can help keep kitchen drains clear.",
        },
        {
          question:
            "Do you offer emergency drain unblocking in the evening or at weekends?",
          answer:
            "Yes. Our network includes plumbers available for evening and weekend drain emergencies across Sheffield and the surrounding areas. If sewage is backing up or a blockage is causing flooding, call us and we will connect you with the nearest available drainage specialist as quickly as possible.",
        },
      ]}
      ctaHeading="Blocked Drain? Get It Cleared Fast."
      ctaContent={
        <p>
          Call OnCall Home Repairs and we will connect you with a drainage
          specialist in Sheffield. From blocked sinks to full CCTV surveys, our
          network of vetted plumbers is ready to help — today.
        </p>
      }
      categoryName="Drain Services"
      categoryDescription="Blocked drain clearing, CCTV drain surveys, drain unblocking, and toilet repairs in Sheffield by vetted, insured plumbers."
      geoPrefix="/plumber-sheffield"
      serviceAreas={seoConfigSheffield.serviceAreas}
      geoConfig={seoConfigSheffield}
    />
  );
}
