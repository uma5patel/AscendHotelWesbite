import { useEffect, useState } from "react";
import "./HeroSection.css";
import heroImage from "../assets/hotel.jpg";

function HeroSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScrollY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = Math.min(scrollY / 1200, 1);
const moveY = progress * 120;
  const textColor = progress > 0.18 ? "#2b1b16" : "white";

  return (
    <section className="hero-section">
      <img src={heroImage} alt="Ascend Hotels property" className="hero-image" />
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <p className="hero-kicker">Welcome to</p>
        <h1>Ascend Hotel Group</h1>
      </div>

      <div
className={progress >= 0.42 ? "moving-subtitle stopped" : "moving-subtitle"}       style={{
        transform: `translateY(${moveY}px)`,
        color: textColor,
        }}
      >
        Luxury hospitality.<br />
        Trusted partnerships.<br />
        Exceptional guest experiences.
      </div>
    </section>
  );
}

export default HeroSection;