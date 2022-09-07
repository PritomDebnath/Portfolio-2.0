import React, { useEffect, useState } from "react";
import "./ProjectTwo.css";
import pic1 from "../assets/img/project1.jpg";
import react from "../assets/svg/react.svg";
import nodejs from "../assets/svg/nodejs.svg";
import express from "../assets/svg/express.svg";
import mongodb from "../assets/svg/mongodb.svg";
import redux from "../assets/svg/redux.svg";

function ProjectTwo({scroll}) {
  return (
    <div className={scroll > 1700 ? "project2" : "block"}>
      <div className="pic2">
      <img src={pic1} alt="" />
      <div className="links">
        <a className="neonButton">Github</a>
        <a className="neonButton">Website</a>
      </div>
    </div>
    <div className="info2">
      <h2>Gym Centra</h2>
      <p>
        Programmed a fullstack chat app that allows users to message other
        users.Developed a responsive and eye catching UI on the client side
        by using ReactJS, Bootstrap, and MaterialUI.Programmed user
        authentication API routes using NodeJS and Express for
        server-side.Utilized MongoDB to store user data and messages that
        were sent in real time using Socket.io npm package.
      </p>
      <div className="tech2">
        <img src={react} alt="" />
        <img src={redux} alt="" />
        <img src={nodejs} alt="" />
        <img src={express} alt="" />
        <img src={mongodb} alt="" />
        
      </div>
    </div>
    
  </div>
  )
}

export default ProjectTwo