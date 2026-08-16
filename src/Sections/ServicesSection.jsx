import "./ServicesSection.css";
import servicesBg from "../assets/pool.jpg";

function ServicesSection() {
  return (
    <section
      className="services-section"
      style={{
        backgroundImage: `linear-gradient(
          to bottom,
          #f7f3ed 0%,
          #f7f3ed 45%,
          rgba(20, 12, 8, 0.45) 65%,
          rgba(20, 12, 8, 0.72) 100%
        ), url(${servicesBg})`,
      }}
    >
      <div className="services-header">
        <p className="services-kicker">Our Services</p>

        <h2>
          Elevating Hospitality.<br />
          Every Step of the Way.
        </h2>

        <div className="gold-line"></div>

        <p className="services-description">
          Ascend Hotel Group delivers complete hotel management solutions built on
          expertise, partnership, and operational excellence.
        </p>
      </div>

      <div className="services-grid">
        <div className="service-card">
          <h3>Hotel Operations</h3>
          <p>
            Managing daily hotel operations to ensure efficiency, consistency,
            and exceptional service.
          </p>

          <button>Learn More →</button>
        </div>

        <div className="service-card">
          <h3>Property Partnerships</h3>
          <p>
            Building long term relationships with hotel owners and investors to
            maximize property value.
          </p>

          <button>Learn More →</button>
        </div>

        <div className="service-card">
          <h3>Brand Compliance</h3>
          <p>
            Ensuring every property aligns with hospitality brand standards,
            operational systems, and guest expectations.
          </p>

          <button>Learn More →</button>
        </div>

        <div className="service-card">
          <h3>Revenue & Guest Experience</h3>
          <p>
            Focusing on guest satisfaction, reputation, and revenue performance
            across every location.
          </p>

          <button>Learn More →</button>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;