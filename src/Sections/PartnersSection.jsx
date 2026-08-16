import "./PartnersSection.css";

const partners = [
  {
    name: "Nitin Patel",
    role: "CEO",
    initials: "NP",
    description:
      "Leads the company's strategic vision, growth initiatives, and commitment to operational excellence across Ascend Hotel Group.",
  },
  {
    name: "Megh Oliwala",
    role: "CFO",
    initials: "MO",
    description:
      "Oversees financial strategy, budgeting, and long-term planning to support steady growth and strong ownership decisions.",
  },
  {
    name: "Janki Patel",
    role: "COO",
    initials: "JP",
    description:
      "Leads day-to-day operations across all properties, ensuring consistent service quality, operational efficiency, and guest satisfaction.",
  },
];

function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="partners-heading">
        <p className="partners-kicker">Leadership</p>
        <h2>Leadership Partners of Ascend Hotel Group</h2>
        <p>
          Ascend Hotel Group is guided by experienced leadership focused on
          strategy, operations, finance, and long term hospitality growth.
        </p>
      </div>

      <div className="partners-list">
        {partners.map((partner) => (
          <article className="partner-profile" key={partner.name}>
            <div className="partner-photo-placeholder" aria-label={`${partner.name} photo placeholder`}>
              <span>{partner.initials}</span>
            </div>

            <div className="partner-info">
              <p>{partner.role}</p>
              <h3>{partner.name}</h3>
              <span>{partner.description}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default PartnersSection;
