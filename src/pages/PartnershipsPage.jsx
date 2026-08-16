import "./InfoPage.css";
import "./PartnershipsPage.css";

const partnershipPillars = [
  {
    title: "Ownership Alignment",
    text: "Each partnership begins with clear conversations around ownership goals, percentage participation, responsibilities, and the long-term vision for the hotel.",
  },
  {
    title: "Hotel Investment Focus",
    text: "We look at opportunities through the lens of property value, market position, brand strength, operations, and potential long-term return.",
  },
  {
    title: "Operational Partnership",
    text: "Ascend brings hands-on hotel experience, brand knowledge, and operating discipline to help ownership partners protect and grow the asset.",
  },
];

const ownerSupport = [
  "Percentage ownership structures",
  "Co-ownership opportunities",
  "Hotel acquisition support",
  "Operational management",
  "Brand and market review",
  "Partner communication",
];

const processSteps = [
  {
    label: "Understand",
    text: "We learn the partner's investment goals, ownership expectations, preferred level of involvement, and interest in percentage ownership.",
  },
  {
    label: "Structure",
    text: "We discuss the hotel opportunity, ownership share, responsibilities, financial expectations, and how Ascend can support the asset.",
  },
  {
    label: "Grow",
    text: "Once aligned, we focus on strong operations, brand standards, guest experience, and long-term value creation for ownership partners.",
  },
];

function PartnershipsPage() {
  return (
    <main className="info-page partnerships-page">
      <section className="partnerships-hero">
        <div className="partnerships-hero-copy">
          <p className="info-kicker">Owner Partnerships</p>
          <h1>Hotel Ownership Partnerships Built On Trust</h1>
          <p>
            Ascend Hotels works with ownership partners interested in hotel
            investment, co-ownership, and percentage-based ownership
            opportunities. These partnerships are separate from Ascend Hotel
            Group's internal leadership partners and are built around clear
            alignment, shared goals, and long-term property value.
          </p>
        </div>

        <aside className="partnerships-hero-card">
          <span>Ownership Focus</span>
          <strong>Shared investment. Clear structure. Long-term value.</strong>
          <p>
            Ascend brings hotel operations experience and brand knowledge to
            partnerships where ownership, responsibility, and opportunity are
            clearly defined.
          </p>
        </aside>
      </section>

      <section className="partnerships-intro">
        <div>
          <p className="info-kicker">How We Partner</p>
          <h2>Partnerships for people interested in hotel ownership.</h2>
        </div>
        <p>
          Hotel ownership can take different forms. Some partners may be
          interested in a percentage of ownership in a property, while others
          may want to explore future hotel acquisition or co-ownership
          opportunities. Ascend helps bring hospitality experience, operational
          structure, and clear communication into those conversations.
        </p>
      </section>

      <section className="partnership-pillars" aria-label="Owner partnership pillars">
        {partnershipPillars.map((pillar, index) => (
          <article className="partnership-pillar" key={pillar.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </article>
        ))}
      </section>

      <section className="owner-support">
        <div className="owner-support-copy">
          <p className="info-kicker">Owner Support</p>
          <h2>Support for ownership conversations and hotel value creation.</h2>
          <p>
            Ascend's role is to help ownership partners understand the property
            opportunity and the operational work behind it. From brand review to
            guest experience and daily management, we focus on the details that
            can protect the investment and support stronger performance.
          </p>
        </div>

        <ul>
          {ownerSupport.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="partnership-process">
        <div>
          <p className="info-kicker">Partnership Process</p>
          <h2>We start by understanding the partner, the property, and the opportunity.</h2>
        </div>

        <div className="partnership-track">
          {processSteps.map((step) => (
            <article className="partnership-step" key={step.label}>
              <span>{step.label}</span>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <a className="partnership-contact-link" href="#/contact">
          Discuss A Partnership
        </a>
      </section>
    </main>
  );
}

export default PartnershipsPage;
