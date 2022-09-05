import React, { useEffect, useRef, useState } from "react";
import moon from "../assets/img/moon.png";
import mountianF from "../assets/img/mountainf.png";
import mountianB from "../assets/img/mountains_behind.png";
import stars from "../assets/img/stars.png";
import Background from "./Background";
import Loading from "./Loading";
import "./Moon.css";
import Nav from "./Nav";
function Moon() {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setscrolled] = useState(false);
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    if (scrollY > 0) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
  });


  window.addEventListener("scroll", handleScroll);
  return (
    <>
      <div className="para">
        <div className="page">
          <img
            src={stars}
            id="stars"
            style={{
              transform: `translateY(${scrollY * 0.25}px)`,
            }}
          />
          <img
            src={moon}
            id="moon"
            style={{
              transform: `translateY(${scrollY * 0.75}px)`,
            }}
          />
          <img
            src={mountianB}
            alt=""
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          />
          <h1
            className="texte"
            style={{
              transform: `translateX(-${scrollY * 4.3}px)`,
            }}
          >
            Full Stack
          </h1>
          <button className="bten" style={{
              transform: `translateY(${scrollY * 0.45}px)`,
            }}>Scroll to Explore</button>
          <img
            src={mountianF}
            id="m"
            style={{
              transform: `translateY(${scrollY * 0}px)`,
            }}
          />
          <Nav />
          <Background />
          <Loading />
        </div>
      </div>
    </>
  );
}

export default Moon;

// //onClick={window.addEventListener('scroll', function(){
//     let value = window.scrollY
//     console.log(value)
//     moon.style.visibility = 'hidden'



