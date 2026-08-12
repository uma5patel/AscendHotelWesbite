import { useEffect, useState } from "react";
import Navbar from "./layouts/Navbar";
import HeroSection from "./Sections/HeroSection";
import StorySection from "./Sections/StorySection";
import ServicesSection from "./Sections/ServicesSection";
import ContactPage from "./pages/ContactPage";

import "./App.css";

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

  const isContactPage = route === "#/contact";

  return (
    <>
      <Navbar isSolid={isContactPage} />
      {isContactPage ? (
        <ContactPage />
      ) : (
        <>
          <HeroSection />
          <StorySection />
          <ServicesSection />
        </>
      )}
    </>
  );
}

export default App;
