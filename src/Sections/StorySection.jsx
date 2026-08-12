import "./StorySection.css";
import storyImage from "../assets/story.jpg";

function StorySection() {
  return (
    <section className="story-section">
      <div className="story-left">
        <div className="story-gold-line"></div>

        <img
          src={storyImage}
          alt="Ascend Hotels team"
          className="story-image"
        />
      </div>

      <div className="story-right">
        <p className="story-kicker">Our Story</p>

        <h3>
          Rooted in Family.<br />
          <em>Built on Hospitality.</em>
        </h3>

        <p>
          Ascend Hotels is a family driven hospitality organization focused on
          exceptional guest experiences, operational excellence, and long term
          partnerships.
        </p>

        <p>
          As a South Asian owned organization, our values of community, respect,
          and genuine hospitality shape every property we manage.
        </p>
      </div>
    </section>
  );
}

export default StorySection;