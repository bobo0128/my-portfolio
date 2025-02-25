import React, { Suspense, useEffect, useState } from "react";
import Navbar from "./components/navbar/PortfolioNavbar";
import ScrollToTop from "./components/scrolltop/ScrollToTop";
import SocialMedia from "./components/socialMedia/SocialMedia";
import VideoBackground from "./components/background/VideoBackground";
import { menus } from "./utils/Constants";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [activeSecion, setActiveSection] = useState(null);
  const [userClicked, setUserClicked] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    console.log("Sections found:", sections);
    const options = {
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      if (!userClicked) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("set active section:" + entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      }
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [userClicked]);

  return (
    <div className="app">
      <header className="navbar-social-container">
        <div className="logo">
        </div>
        <div className="nav-social-container">
          <Navbar
            activeSection={activeSecion}
            setActiveSection={setActiveSection}
            setUserClicked={setUserClicked}
          />
          <div className="social-media-icons">
            <SocialMedia />
          </div>
        </div>
      </header>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <div className="content">
        {menus.map((menu, index) => {
          const { id, component: Component, background } = menu;
          return (
            <section id={id} key={id}>
              <Component background={background} />
            </section>
          );
        })}
      </div>
      {/* </Suspense> */}
      <ScrollToTop />
    </div>
  );
}

export default App;
