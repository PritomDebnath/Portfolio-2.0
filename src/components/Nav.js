import React, { useEffect, useRef, useState } from "react";
import "./Nav.css";
function Nav() {
  const [scrollY, setScrollY] = useState(0);
  const [scrolled, setscrolled] = useState(false)
  const [load, setload] = useState(false)
  const handleScroll = () => setScrollY(window.scrollY);

  useEffect(() => {
    if(scrollY>500){
      setscrolled(true)
    } else {
      setscrolled(false)
    }
  });
useEffect(()=>{
  console.log(scrollY)
})

  window.addEventListener("scroll", handleScroll);
  return (
    <div className={scrolled? "navScroll": "nav"}>
      <div className="header">
        <div className={scrolled? "logo":"blocxk"}>
          <h1>PRITOM</h1>
        </div>
        <div className="menu">
          <li>About</li>
          <li>Contact</li>
          <li>Project</li>
          <li>Skills</li>
        </div>
      </div>
    </div>
  );
}

export default Nav;
