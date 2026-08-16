import "./InfoPage.css";
import "./AboutPage.css";

const values = [
  {
    title: "Guest First",
    text: "We listen closely to guest comments and use them to improve comfort, service, cleanliness, and quality across each stay.",
  },
  {
    title: "Experienced Operators",
    text: "Our team brings hands-on hospitality experience across ownership, daily operations, finance, service standards, and property growth.",
  },
  {
    title: "Community Minded",
    text: "Hospitality means showing up beyond the hotel. We support local churches, food drives, and outreach efforts that serve our neighbors.",
  },
  {
    title: "Future Leaders",
    text: "We believe younger people should have real pathways into the industry through internships, mentorship, and practical hotel experience.",
  },
];

const guestExperience = [
  {
    label: "Listen",
    text: "Guest comments are reviewed with care so we understand what is working and where the stay can improve.",
  },
  {
    label: "Improve",
    text: "Feedback becomes action through stronger service habits, cleaner spaces, and more consistent daily standards.",
  },
  {
    label: "Deliver",
    text: "Every property is guided toward comfort, quality, and a stay experience guests can trust each time they return.",
  },
];

function AboutPage() {
  return (
    <main className="info-page about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="info-kicker">About Ascend Hotels</p>
          <h1>Hospitality With Purpose</h1>
          <p>
            Ascend Hotel Group is a family-led hospitality company focused on
            branded hotels, dependable operations, meaningful guest experiences,
            and service that reaches beyond the front desk.
          </p>
        </div>

        <div className="about-hero-card" aria-label="Ascend Hotels priorities">
          <span>Our Focus</span>
          <strong>Comfort. Quality. Community.</strong>
          <p>
            We build trust by caring for guests, supporting our teams, and
            staying connected to the communities around our properties.
          </p>
        </div>
      </section>

      <section className="about-intro">
        <div>
          <p className="info-kicker">Who We Are</p>
          <h2>Experienced hotel leaders with a people-first way of working.</h2>
        </div>
        <p>
          Our approach is rooted in steady operations, strong brand standards,
          and a genuine care for the people who walk through our doors. We
          believe great hospitality is built through listening, improving, and
          making every guest feel considered.
        </p>
      </section>

      <section className="about-values" aria-label="Ascend values">
        {values.map((value) => (
          <article className="about-value" key={value.title}>
            <span></span>
            <h3>{value.title}</h3>
            <p>{value.text}</p>
          </article>
        ))}
      </section>

      <section className="about-feature">
        <div className="about-feature-image"></div>
        <div className="about-feature-copy">
          <p className="info-kicker">Community Commitment</p>
          <h2>Hospitality should extend into the community.</h2>
          <p>
            Ascend Hotel Group believes in helping the communities we serve. Our
            team supports local churches, food drives, and outreach efforts
            because care should not stop at the hotel lobby.
          </p>
          <p>
            We also care about creating opportunities for younger people who
            want to learn. Through internships and mentorship, we hope to bring
            new energy into hospitality while sharing the standards and work
            ethic that shape strong hotel teams.
          </p>
        </div>
      </section>

      <section className="about-experience">
        <div>
          <p className="info-kicker">Guest Experience</p>
          <h2>We pay attention to what guests tell us.</h2>
          <p>
            The best hotel experiences are shaped through small details:
            listening closely, improving constantly, and making comfort feel
            dependable.
          </p>
        </div>

        <div className="experience-track">
          {guestExperience.map((item) => (
            <article className="experience-step" key={item.label}>
              <span>{item.label}</span>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
