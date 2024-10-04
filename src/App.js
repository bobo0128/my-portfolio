import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/PortfolioNavbar";
import ScrollToTop from "./components/scrolltop/ScrollToTop";
import SocialMedia from "./components/socialMedia/SocialMedia";
import VideoBackground from "./components/background/VideoBackground";
import "./App.css";

// Lazy load components
const Home = lazy(() => import("./pages/Home"));
const AboutMe = lazy(() => import("./pages/AboutMe"));
const Projects = lazy(() => import("./pages/Projects"));
const MyPlayground = lazy(() => import("./pages/MyPlayground"));
const Experience = lazy(() => import("./pages/Experience"));
const ContactMe = lazy(() => import("./pages/ContactMe"));
const Skills = lazy(() => import("./pages/Skills"));
const Education = lazy(() => import("./pages/Education"));

function App() {
  return (
    <Router>
      <div className="app">
        <VideoBackground />
        <div className="background-overlay"></div>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/playground" element={<MyPlayground />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<ContactMe />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </div>
        </Suspense>
        <SocialMedia />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
