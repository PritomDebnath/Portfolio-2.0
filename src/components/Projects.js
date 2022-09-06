import React, { useEffect, useState } from "react";
import "./Projects.css";
import pic1 from "../assets/img/project1.jpg";
import react from "../assets/svg/react.svg";
import nodejs from "../assets/svg/nodejs.svg";
import express from "../assets/svg/express.svg";
import mongodb from "../assets/svg/mongodb.svg";
import socket from "../assets/svg/Socket-io.svg";
import ProjectOne from "../projects/ProjectOne";
import ProjectTwo from "../projects/ProjectTwo";
function Projects() {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setscrolled] = useState(false);
  const handleScroll = () => setScrollY(window.scrollY);

  window.addEventListener("scroll", handleScroll);
  return (
    <div className="projectSec">
      <h1>Projects</h1>
      <div className="projects">
        <ProjectOne scroll={scrollY}/>
        <ProjectTwo scroll={scrollY}/>
      </div>
    </div>
  );
}

export default Projects;
