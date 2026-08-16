import "./InfoPage.css";
import "./ServicesPage.css";

const servicePillars = [
  {
    title: "Brand Compliance",
    text: "Ascend Hotels ensures strict brand compliance to maintain consistency, quality, and integrity across all properties. Our services include regular audits, staff training, and implementation of brand standards across operations, guest experience, visual identity, and communication.",
    points: [
      "Regular brand audits",
      "Staff training and standards support",
      "Guest experience consistency",
      "Visual identity and communication alignment",
    ],
  },
  {
    title: "Revenue Management",
    text: "We support hotel performance through pricing awareness, market positioning, demand review, and practical revenue strategies that help each property stay competitive while protecting long-term value.",
    points: [
      "Rate and demand review",
      "Market performance tracking",
      "Occupancy and revenue strategy",
      "Channel and booking mix awareness",
    ],
  },
  {
    title: "Hotel Operations",
    text: "Our operational approach keeps each property organized, accountable, and guest-focused. We help hotel teams deliver dependable service, maintain strong standards, and run daily workflows with clarity.",
    points: [
      "Daily operating systems",
      "Team accountability",
      "Guest service routines",
      "Property-level performance support",
    ],
  },
];

const operations = [
  {
    title: "Front Office & Guest Services",
    text: "Professional, friendly service that ensures smooth check-ins, prompt assistance, and memorable guest interactions.",
  },
  {
    title: "Housekeeping & Cleanliness",
    text: "Strict cleanliness protocols that deliver spotless rooms, well-maintained spaces, and consistent quality.",
  },
  {
    title: "Food & Beverage Operations",
    text: "Efficient food and beverage management focused on guest satisfaction, cost control, and service excellence.",
  },
  {
    title: "Facility & Maintenance Management",
    text: "Proactive maintenance and safety oversight to protect asset value and ensure guest comfort.",
  },
];

const supportServices = [
  "Owner communication and reporting",
  "Reputation and review response guidance",
  "Staff development and department training",
  "Vendor coordination and cost awareness",
  "Quality assurance walkthroughs",
  "Pre-opening and transition support",
];

function ServicesPage() {
  return (
    <main className="info-page services-page">
      <section className="services-hero">
        <div>
          <p className="info-kicker">Services</p>
          <h1>Hotel Management That Protects The Brand And Guest Experience</h1>
          <p>
            Ascend Hotels supports owners and hotel teams with brand compliance,
            revenue management, daily operations, training, and guest-focused
            systems built for consistent performance.
          </p>
        </div>
        <aside className="services-hero-panel">
          <span>Management Focus</span>
          <strong>Standards. Revenue. Operations.</strong>
          <p>
            Every service is designed to help properties run with discipline,
            protect asset value, and deliver the level of hospitality guests
            expect from trusted hotel brands.
          </p>
        </aside>
      </section>

      <section className="services-pillars" aria-label="Core services">
        {servicePillars.map((service, index) => (
          <article className="service-pillar" key={service.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <ul>
              {service.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="operations-section">
        <div className="operations-heading">
          <p className="info-kicker">Operations Support</p>
          <h2>Hands-on support for the departments guests notice most.</h2>
        </div>

        <div className="operations-grid">
          {operations.map((item) => (
            <article className="operation-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-support">
        <div>
          <p className="info-kicker">Additional Services</p>
          <h2>Built for owners, teams, and long-term property value.</h2>
        </div>

        <ul>
          {supportServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default ServicesPage;
