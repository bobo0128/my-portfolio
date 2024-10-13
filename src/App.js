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
      if(!userClicked) {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("set active section:"+entry.target.id);
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
      <VideoBackground />
      <div className="background-overlay"></div>
      <Navbar activeSection={activeSecion} setActiveSection={setActiveSection} setUserClicked={setUserClicked} />
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <div className="content">
          {menus.map((menu, index) => {
            const { id, component: Component } = menu;
            return (
              <section id={id} key={id}>
                <Component />
              </section>
            );
          })}
        </div>
      {/* </Suspense> */}
      <SocialMedia />
      <ScrollToTop />
    </div>
  );
}

export default App;
