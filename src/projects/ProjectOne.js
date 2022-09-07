import React, { useEffect, useState } from "react";
import "../components/Projects.css";
import pic1 from "../assets/img/project1.jpg";
import react from "../assets/svg/react.svg";
import nodejs from "../assets/svg/nodejs.svg";
import express from "../assets/svg/express.svg";
import mongodb from "../assets/svg/mongodb.svg";
import socket from "../assets/svg/Socket-io.svg";

function ProjectOne({scroll}) {
    
  return (
    <div className={scroll > 1100 ? "project1" : "block"}>
    <div className="info">
      <h2>ChittyChat</h2>
      <p>
        Programmed a fullstack chat app that allows users to message other
        users.Developed a responsive and eye catching UI on the client side
        by using ReactJS, Bootstrap, and MaterialUI.Programmed user
        authentication API routes using NodeJS and Express for
        server-side.Utilized MongoDB to store user data and messages that
        were sent in real time using Socket.io npm package.
      </p>
      <div className="tech">
        <img src={react} alt="" />
        <img src={nodejs} alt="" />
        <img src={express} alt="" />
        <img src={mongodb} alt="" />
        <img src={socket} alt="" />
      </div>
    </div>
    <div className="pic">
      <img src={pic1} alt="" />
      <div className="links">
        <a href="https://www.youtube.com/" target= "_blank" rel ={"noopener noreferrer"}>Github</a>
        <a href="https://www.youtube.com/" target= "_blank" rel ={"noopener noreferrer"}>Website</a>
      </div>
    </div>
  </div>
  )
}

export default ProjectOne