import { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PropertiesPage from "./pages/PropertiesPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

import "./App.css";

const routes = {
  "#/": HomePage,
  "#/about": AboutPage,
  "#/services": ServicesPage,
  "#/properties": PropertiesPage,
  "#/partnerships": PartnershipsPage,
  "#/careers": CareersPage,
  "#/contact": ContactPage,
};

function App() {
  const [route, setRoute] = useState(window.location.hash || "#/");

  useEffect(() => {
    function handleHashChange() {
      setRoute(window.location.hash || "#/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const Page = routes[route] || HomePage;
  const isHomePage = route === "#/" || !routes[route];
  const usesHeroNavbar = isHomePage || route === "#/properties";

  return (
    <>
      <Navbar
        isSolid={!usesHeroNavbar}
        currentRoute={isHomePage ? "#/" : route}
      />
      <Page />
    </>
  );
}

export default App;
