import "./Navbar.css";
import logo from "../assets/logo.jpg";

const links = [
  { href: "#/", label: "HOME" },
  { href: "#/about", label: "ABOUT US" },
  { href: "#/services", label: "SERVICES" },
  { href: "#/properties", label: "OUR PROPERTIES" },
  { href: "#/partnerships", label: "OWNER PARTNERSHIPS" },
  { href: "#/careers", label: "CAREERS" },
];

function Navbar({ isSolid = false, currentRoute = "#/" }) {
  return (
    <nav className={isSolid ? "navbar navbar-solid" : "navbar"}>
      <div className="navbar-logo">
        <img src={logo} alt="Ascend Hotel Group Logo" className="logo-image" />

        <div className="logo-divider"></div>

        <div className="logo-text">ASCEND HOTELS</div>
      </div>

      <div className="navbar-links">
        {links.map((link) => (
          <a
            className={currentRoute === link.href ? "active" : ""}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>

      <a className="navbar-button" href="#/contact">
        CONTACT US
      </a>
    </nav>
  );
}

export default Navbar;
