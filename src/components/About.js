import React from "react";
import "./About.css";
import profpic from "../assets/img/pic.jpg";
import { TypeAnimation } from "react-type-animation";
function About() {
  return (
    <div className="about">
      <div className="box">
        <div className="paragraph">
          <p>
            I am a passionate and eager to grow web developer that continuously
            strives to learn and adapt with the ever-growing tech environment.
            Over the past two years I have developed my skills in full stack web
            development with a focus on MERN stack in order to produce beautiful
            websites with demanding functionalities.
          </p>
        </div>
        <div className="picture">
          <img src={profpic} alt="" />
          <TypeAnimation
            sequence={["About Me", 1000, "Who am I?", 1000, "What I do", 1000]}
            speed={40}
            style={{ fontSize: "50px", fontWeight: "bold" }}
            wrapper="span"
            repeat={Infinity}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
