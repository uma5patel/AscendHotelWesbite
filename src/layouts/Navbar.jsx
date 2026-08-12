import "./Navbar.css";
import logo from "../assets/logo.jpg";

function Navbar({ isSolid = false }) {
  return (
    <nav className={isSolid ? "navbar navbar-solid" : "navbar"}>
      <div className="navbar-logo">
  <img src={logo} alt="Ascend Hotels Logo" className="logo-image" />

  <div className="logo-divider"></div>

  <div className="logo-text">
    ASCEND HOTELS
  </div>
</div>

      <div className="navbar-links">
        <a href="#/">HOME</a>
        <a href="#">ABOUT US</a>
        <a href="#">SERVICES</a>
        <a href="#">OUR PROPERTIES</a>
        <a href="#">OWNER PARTNERSHIPS</a>
        <a href="#">CAREERS</a>
      </div>

      <a className="navbar-button" href="#/contact">
        CONTACT US
      </a>
    </nav>
  );
}

export default Navbar;
