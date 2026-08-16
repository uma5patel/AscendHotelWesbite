import "./InfoPage.css";
import "./CareersPage.css";

const careerPaths = [
  {
    title: "Front Office & Guest Services",
    text: "Build confidence in guest communication, check-ins, problem solving, and the daily rhythm of hotel service.",
  },
  {
    title: "Housekeeping & Property Care",
    text: "Support the standards guests notice most through clean rooms, cared-for spaces, and dependable attention to detail.",
  },
  {
    title: "Operations & Leadership",
    text: "Learn how hotels run behind the scenes, from department coordination to brand standards and service consistency.",
  },
  {
    title: "Internships & Mentorship",
    text: "Create a pathway into hospitality through hands-on learning, mentorship, and exposure to real property operations.",
  },
];

const qualities = [
  "Friendly and professional",
  "Reliable and accountable",
  "Detail-oriented",
  "Open to learning",
  "Team-focused",
  "Guest-first mindset",
];

const steps = [
  {
    label: "Apply",
    text: "Reach out with your name, contact information, experience, and the type of role or internship you are interested in.",
  },
  {
    label: "Connect",
    text: "Our team reviews your interest and looks for the right fit across hotel departments and property needs.",
  },
  {
    label: "Grow",
    text: "Team members learn through real work, feedback, standards, and the everyday practice of hospitality.",
  },
];

function CareersPage() {
  return (
    <main className="info-page careers-page">
      <section className="careers-hero">
        <div className="careers-hero-copy">
          <p className="info-kicker">Careers</p>
          <h1>Join The Ascend Hotels Team</h1>
          <p>
            Hospitality is built by people who care. Ascend Hotels looks for
            dependable, thoughtful team members who want to serve guests well,
            learn the business, and grow into stronger hospitality leaders. We
            provide continuous training, career development, and a supportive
            work culture to help every team member thrive.
          </p>
        </div>

        <aside className="careers-hero-card">
          <span>Now Building</span>
          <strong>Service-minded teams for growing hotel properties.</strong>
          <p>
            From first jobs to internships and leadership pathways, we believe
            hospitality can open doors for people who are ready to learn.
          </p>
        </aside>
      </section>

      <section className="careers-intro">
        <div>
          <p className="info-kicker">Our Culture</p>
          <h2>We care about guests, teammates, and the communities around us.</h2>
        </div>
        <p>
          Our teams help create the first impression, the clean room, the quick
          answer, and the comfortable stay guests remember. We value people who
          show up with respect, communicate clearly, take feedback well, and
          want to keep improving. From entry-level positions to management
          roles, Ascend Hotels offers rewarding opportunities across service,
          operations, marketing, and leadership.
        </p>
      </section>

      <section className="career-paths" aria-label="Career paths">
        {careerPaths.map((path) => (
          <article className="career-path" key={path.title}>
            <span></span>
            <h3>{path.title}</h3>
            <p>{path.text}</p>
          </article>
        ))}
      </section>

      <section className="careers-feature">
        <div className="careers-feature-copy">
          <p className="info-kicker">What We Look For</p>
          <h2>Great hospitality starts with attitude and consistency.</h2>
          <p>
            Experience is helpful, but the right mindset matters most. We look
            for people who are willing to learn, treat guests with care, and
            support the team around them.
          </p>
        </div>

        <ul className="qualities-list">
          {qualities.map((quality) => (
            <li key={quality}>{quality}</li>
          ))}
        </ul>
      </section>

      <section className="internship-section">
        <div className="internship-image"></div>
        <div className="internship-copy">
          <p className="info-kicker">Internships & Young Talent</p>
          <h2>Creating pathways for the next generation of hospitality.</h2>
          <p>
            Ascend Hotels is passionate about bringing younger people into the
            industry through internships, mentorship, and hands-on exposure to
            hotel operations. Students and early-career applicants can learn how
            guest service, housekeeping, operations, brand standards, and
            leadership come together inside a working hotel.
          </p>
        </div>
      </section>

      <section className="careers-process">
        <div>
          <p className="info-kicker">How To Start</p>
          <h2>Reach out and tell us where you want to grow.</h2>
        </div>

        <div className="process-track">
          {steps.map((step) => (
            <article className="process-step" key={step.label}>
              <span>{step.label}</span>
              <p>{step.text}</p>
            </article>
          ))}
        </div>

        <a className="careers-apply-link" href="#/contact">
          Contact Us About Careers
        </a>
      </section>
    </main>
  );
}

export default CareersPage;
