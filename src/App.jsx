import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
  <Navbar></Navbar>
  <HeroSection></HeroSection>
  <AboutSection></AboutSection>
  <SkillsSection></SkillsSection>
  <Projects></Projects>
  <ContactMe></ContactMe>
  </>
  )
}

export default App;
