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

function getCurrentRoute() {
  if (window.location.hash) {
    return window.location.hash;
  }

  const path = window.location.pathname.replace(/\/$/, "");
  return path ? `#${path}` : "#/";
}

function App() {
  const [route, setRoute] = useState(getCurrentRoute);

  useEffect(() => {
    function handleRouteChange() {
      setRoute(getCurrentRoute());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    window.addEventListener("hashchange", handleRouteChange);
    window.addEventListener("popstate", handleRouteChange);
    return () => {
      window.removeEventListener("hashchange", handleRouteChange);
      window.removeEventListener("popstate", handleRouteChange);
    };
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
