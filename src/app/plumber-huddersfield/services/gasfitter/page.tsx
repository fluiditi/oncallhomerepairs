import { Metadata } from "next";
import { CategoryPage } from "@/components/category-page";
import { seoConfigHuddersfield } from "@/config/seo-huddersfield";

export const metadata: Metadata = {
  title: "Gasfitter Huddersfield | Gas Fitting Services | OnCall Home Repairs",
  description:
    "Gas fitting services in Huddersfield. Boiler breakdowns, gas appliance installation, and emergency gas work by Gas Safe registered engineers. Call 0333 240 8428.",
  alternates: {
    canonical: "https://oncallhomerepairs.co.uk/plumber-huddersfield/services/gasfitter",
  },
};

const category = seoConfigHuddersfield.services.categories.find(
  (c) => c.slug === "gasfitter"
)!;

export default function GasfitterCategoryPage() {
  return (
    <CategoryPage
      breadcrumbItems={[
        { name: "Services", href: "/plumber-huddersfield/services" },
        { name: "Gasfitter", href: "/plumber-huddersfield/services/gasfitter" },
      ]}
      h1="Gasfitter in Huddersfield"
      heroIntro={
        <p>
          OnCall Home Repairs connects you with Gas Safe registered gas fitters
          in Huddersfield and West Yorkshire. Whether your boiler has broken
          down in the middle of winter or you need gas appliance work carried
          out safely, our network of vetted, qualified gas engineers is
          available 24/7. Call 0333 240 8428 for a fast response and
          transparent pricing.
        </p>
      }
      overviewHeading="Professional Gas Fitting Services in Huddersfield"
      overviewContent={
        <>
          <p>
            Gas work must be carried out by a Gas Safe registered engineer — it
            is a legal requirement in the UK. Working with gas appliances,
            pipework, and flues without the proper qualifications is dangerous
            and illegal. OnCall Home Repairs takes this seriously. Every gas
            fitter in our network holds a valid Gas Safe registration and
            carries their ID card on every job.
          </p>
          <p>
            From emergency boiler breakdowns to planned gas appliance
            installations, our gas fitters in Huddersfield handle it all. They
            arrive with the tools, parts, and expertise to diagnose and fix
            problems on the spot wherever possible. And you get a clear quote
            before any work begins — no hidden charges.
          </p>
        </>
      }
      servicesHeading="Gas Fitting Services in Huddersfield"
      categorySlug="gasfitter"
      services={category.services}
      whyChooseHeading="Why Choose OnCall for Gas Fitting"
      differentiators={[
        {
          title: "Gas Safe Registered",
          description: (
            <p>
              Every gas fitter in our network holds a valid Gas Safe
              registration. You can verify their credentials on every visit.
            </p>
          ),
        },
        {
          title: "24/7 Emergency Response",
          description: (
            <p>
              Boiler breakdowns do not wait for business hours. Our gas fitters
              are available day and night, weekends and bank holidays.
            </p>
          ),
        },
        {
          title: "Transparent Pricing",
          description: (
            <p>
              Clear quote before any work begins. No hidden fees or surprise
              charges. You approve the cost before the engineer starts.
            </p>
          ),
        },
        {
          title: "Workmanship Guarantee",
          description: (
            <p>
              All gas fitting work is guaranteed. If something is not right,
              we send an engineer back at no extra cost.
            </p>
          ),
        },
      ]}
      crossLinks={[
        {
          name: "Plumber",
          href: "/plumber-huddersfield/services/plumber",
          description:
            "Full plumbing services including emergency repairs, heating, and installations.",
        },
      ]}
      serviceAreasHeading="Gas Fitting Across Huddersfield"
      serviceAreasContent={
        <p>
          Our gas fitters cover Huddersfield and all surrounding areas
          including Holmfirth, Marsden, Slaithwaite, Meltham, Honley, and
          beyond. Local engineers who know the area and can reach you quickly.
        </p>
      }
      faqs={[
        {
          question: "What does a gasfitter do?",
          answer:
            "A gasfitter (or gas fitter) installs, maintains, and repairs gas appliances and pipework. This includes boilers, gas cookers, gas fires, and gas central heating systems. All gas work in the UK must be carried out by a Gas Safe registered engineer.",
        },
        {
          question: "Is your gas fitter Gas Safe registered?",
          answer:
            "Yes. Every gas fitter in our network holds a valid Gas Safe registration. They carry their Gas Safe ID card and you can ask to see it on every visit. You can also verify their registration online at the Gas Safe Register website.",
        },
        {
          question: "Can you help with an emergency boiler breakdown?",
          answer:
            "Yes. We have gas fitters available 24/7 for emergency boiler breakdowns. Call 0333 240 8428 any time and we will connect you with a Gas Safe registered engineer who can help.",
        },
      ]}
      ctaHeading="Need a Gas Fitter in Huddersfield?"
      ctaContent={
        <p>
          Call OnCall Home Repairs on 0333 240 8428. We will connect you with
          a Gas Safe registered gas fitter in the Huddersfield area. Available
          24/7 with transparent pricing and guaranteed workmanship.
        </p>
      }
      categoryName="Gasfitter"
      categoryDescription="Gas fitting services in Huddersfield — boiler breakdowns, gas appliance installation, and emergency gas work by Gas Safe engineers."
      geoPrefix="/plumber-huddersfield"
      serviceAreas={seoConfigHuddersfield.serviceAreas}
    />
  );
}
